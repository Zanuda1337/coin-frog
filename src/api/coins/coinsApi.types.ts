export interface IGetCoinsResponse {
  data: {
    block_time_in_minutes: string;
    id: string;
    image: {
      large: string;
      small: string;
      thumb: string;
    };
    name: string;
    symbol: string;
    localization: Record<string, string>;
    market_data: {
      market_cap: Record<string, number>;
      current_price: Record<string, number>;
      price_change_percentage_1h_in_currency: Record<string, number>;
      price_change_percentage_7d_in_currency: Record<string, number>;
      price_change_percentage_24h_in_currency: Record<string, number>;
      total_volume: Record<string, number>;
      market_cap_rank: number;
    };
  }[];
}
