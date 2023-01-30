import { IGetCoinsResponse } from 'src/api/coins/coinsApi.types';
import { ICoin } from 'src/features/Coins/Coins.types';

export const convertCoinsToFront = (
  payload: IGetCoinsResponse,
  currency: string = 'usd'
): { data: ICoin[] } => {
  return {
    data: payload.data.map((coin) => ({
      id: coin.id,
      image: {
        large: coin.image.large,
        small: coin.image.small,
        thumb: coin.image.thumb,
      },
      name: coin.name,
      symbol: coin.symbol,
      localization: coin.localization,
      marketData: {
        marketCap: coin.market_data.market_cap[currency],
        currentPrice: coin.market_data.current_price[currency],
        priceChangePercentageOneHour:
          coin.market_data.price_change_percentage_1h_in_currency[currency],
        priceChangePercentageDay:
          coin.market_data.price_change_percentage_24h_in_currency[currency],
        priceChangePercentageWeek:
          coin.market_data.price_change_percentage_7d_in_currency[currency],
        totalVolume: coin.market_data.total_volume[currency],
        marketCapRank: coin.market_data.market_cap_rank,
      },
    })),
  };
};
