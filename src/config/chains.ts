//import { networks } from '@safe-global/safe-core-sdk-utils/dist/src/eip-3770/config'

/**
 * A static shortName<->chainId dictionary
 * E.g.:
 *
 * {
 *   eth: '1',
 *   gor: '5',
 *   ...
 * }
 */
interface NetworkShortName {
  shortName: string
  chainId: number
}

// https://github.com/ethereum-lists/chains/tree/master/_data/chains
export const networks: NetworkShortName[] = [{ chainId: 2021, shortName: 'edg' }]

type Chains = Record<string, string>

const chains = networks.reduce<Chains>((result, { shortName, chainId }) => {
  result[shortName] = chainId.toString()
  return result
}, {})

export default chains
