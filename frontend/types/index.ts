export interface TokenData {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  apy: number;
  description: string;
  balance: string;
  icon: string;
}

export interface UserVaultPosition {
  vaultAddress: string;
  shares: string;
  assetAmount: string;
  assetValue: number;
  token: TokenData;
}
