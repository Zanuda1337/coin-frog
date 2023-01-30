export interface ICoin {
  id: string;
  image: {
    large: string;
    small: string;
    thumb: string;
  };
  name: string;
  symbol: string;
  localization: Record<string, string>;
  marketData: {
    marketCap: number;
    currentPrice: number;
    priceChangePercentageOneHour: number;
    priceChangePercentageWeek: number;
    priceChangePercentageDay: number;
    totalVolume: number;
    marketCapRank: number;
  };
}
