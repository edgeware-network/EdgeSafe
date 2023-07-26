import type { ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import { FEATURES, GAS_PRICE_TYPE, RPC_AUTHENTICATION } from '@safe-global/safe-gateway-typescript-sdk'

const CONFIG_SERVICE_CHAINS: ChainInfo[] = [
  {
    transactionService: 'https://safe-transaction.edgeware.gnosis.io',
    chainId: '2021',
    chainName: 'Edgeware EdgeEVM Mainnet',
    shortName: 'edg',
    l2: true,
    description: '',
    rpcUri: { authentication: RPC_AUTHENTICATION.NO_AUTHENTICATION, value: 'https://edgeware-evm.jelliedowl.net' },
    safeAppsRpcUri: {
      authentication: RPC_AUTHENTICATION.NO_AUTHENTICATION,
      value: 'https://edgeware-evm.jelliedowl.net',
    },
    publicRpcUri: {
      authentication: RPC_AUTHENTICATION.NO_AUTHENTICATION,
      value: 'https://edgeware-evm.jelliedowl.net',
    },
    blockExplorerUriTemplate: {
      address: 'https://edgscan.live/address/{{address}}/transactions',
      txHash: 'https://edgscan.live/tx/{{txHash}}/internal-transactions',
      api: 'https://edgscan.live/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}',
    },
    nativeCurrency: {
      name: 'Edgeware',
      symbol: 'EDG',
      decimals: 18,
      logoUri: 'https://i.imgur.com/8YVoXOv.png',
    },
    theme: { textColor: '#ffffff', backgroundColor: '#514989' },
    gasPrice: [{ type: GAS_PRICE_TYPE.FIXED, weiValue: '24000000000' }],
    disabledWallets: [
      'authereum',
      'coinbase',
      'fortmatic',
      'keystone',
      'lattice',
      'ledger',
      'opera',
      'operaTouch',
      'portis',
      'tally',
      'torus',
      'trezor',
      'trust',
      'walletLink',
    ],
    features: [
      FEATURES.CONTRACT_INTERACTION,
      FEATURES.DOMAIN_LOOKUP,
      FEATURES.EIP1559,
      FEATURES.ERC721,
      FEATURES.SAFE_APPS,
      FEATURES.SAFE_TX_GAS_OPTIONAL,
      FEATURES.SPENDING_LIMIT,
      FEATURES.TX_SIMULATION,
    ],
  },
]

export { CONFIG_SERVICE_CHAINS }
