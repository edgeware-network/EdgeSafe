import { type SafeTransaction } from '@safe-global/safe-core-sdk-types'
import { type DecodedDataResponse, getDecodedData } from '@safe-global/safe-gateway-typescript-sdk'
import { getNativeTransferData } from '@/services/tx/tokenTransferParams'
import { isEmptyHexData } from '@/utils/hex'
import type { AsyncResult } from './useAsync'
import useAsync from './useAsync'
import useChainId from './useChainId'

const useDecodeTx = (tx?: SafeTransaction): AsyncResult<DecodedDataResponse> => {
  const chainId = useChainId()
  const encodedData = tx?.data.data
  const isEmptyData = !!encodedData && isEmptyHexData(encodedData)
  const isRejection = isEmptyData && tx?.data.value === '0'
  const nativeTransfer = isEmptyData && !isRejection ? getNativeTransferData(tx?.data) : undefined

  return useAsync<DecodedDataResponse>(() => {
    if (nativeTransfer) return Promise.resolve(nativeTransfer)
    if (!encodedData || isEmptyData) return
    return getDecodedData(chainId, encodedData)
  }, [chainId, encodedData, isEmptyData, nativeTransfer])
}

export const isMultisendTx = (decodedData?: DecodedDataResponse): boolean => {
  return !!decodedData?.parameters?.[0]?.valueDecoded
}

export default useDecodeTx