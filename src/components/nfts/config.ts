import chains from '@/config/chains'
import type { SafeCollectibleResponse } from '@safe-global/safe-gateway-typescript-sdk'

type NftPlatform = {
  title: string
  logo: string
  getUrl: (nft: SafeCollectibleResponse) => string
}

export const nftPlatforms: Record<keyof typeof chains, Array<NftPlatform>> = {
  [chains.edg]: [
    {
      title: 'Edgscan',
      logo: '/images/common/nft-etherscan.svg',
      getUrl: (item) => `https://edgscan.live/nft/${item.address}/${item.id}`,
    },
  ],
}
