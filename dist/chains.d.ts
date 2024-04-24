export declare enum ChainId {
  ROLLUP,
  MAINNET = 1,
  GOERLI = 5,
  SEPOLIA = 11155111,
  OPTIMISM = 10,
  OPTIMISM_GOERLI = 420,
  ARBITRUM_ONE = 42161,
  ARBITRUM_GOERLI = 421613,
  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
  CELO = 42220,
  CELO_ALFAJORES = 44787,
  GNOSIS = 100,
  MOONBEAM = 1284,
  BNB = 56,
  AVALANCHE = 43114,
  BASE_GOERLI = 84531,
  BASE = 8453
}
export declare const SUPPORTED_CHAINS: readonly [
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId,
  ChainId
]
export declare type SupportedChainsType = typeof SUPPORTED_CHAINS[number]
export declare enum NativeCurrencyName {
  ETHER = 'ETH',
  MATIC = 'MATIC',
  CELO = 'CELO',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  BNB = 'BNB',
  AVAX = 'AVAX'
}
