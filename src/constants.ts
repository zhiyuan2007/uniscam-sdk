import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string
export type InitCodeHashes = { [chainId in ChainId]: string }

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
  HECO_MAINNET = 128,
  HECO_TESTNET = 256,
  MATIC_MAINNET = 137
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xf3aa029a9f6a1b3f41b0bdae2f7e2dffd30ebb13'

export const INIT_CODE_HASH_BSC = '0x9b025805045f6da539a4926f67307a9b0ab5aaccc42d3f14aaea0776a5b727ac'
export const INIT_CODE_HASH_ETH = '0xf72b1bfa0de188ad1a4b71bb308a2c57e71c358a10cbbac6e7a820f3e4ba004d'
export const INIT_CODE_HASH_HECO = '0xf72b1bfa0de188ad1a4b71bb308a2c57e71c358a10cbbac6e7a820f3e4ba004d'
export const INIT_CODE_HASH_MATIC = '0xf72b1bfa0de188ad1a4b71bb308a2c57e71c358a10cbbac6e7a820f3e4ba004d'
export const INIT_CODE_HASHES: InitCodeHashes = {
  [ChainId.MAINNET]: INIT_CODE_HASH_ETH,
  [ChainId.ROPSTEN]: INIT_CODE_HASH_ETH,
  [ChainId.RINKEBY]: INIT_CODE_HASH_ETH,
  [ChainId.GÖRLI]: INIT_CODE_HASH_ETH,
  [ChainId.KOVAN]: INIT_CODE_HASH_ETH,
  [ChainId.BSC_MAINNET]: INIT_CODE_HASH_BSC,
  [ChainId.BSC_TESTNET]: INIT_CODE_HASH_BSC,
  [ChainId.HECO_MAINNET]: INIT_CODE_HASH_HECO,
  [ChainId.HECO_TESTNET]: INIT_CODE_HASH_MATIC,
  [ChainId.MATIC_MAINNET]: INIT_CODE_HASH_MATIC
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
