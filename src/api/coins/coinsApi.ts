import { instance } from 'src/api';
import { IGetCoinsResponse } from 'src/api/coins/coinsApi.types';

const coinsApi = {
  getCoins: (page: number, limit: number) =>
    instance.get<IGetCoinsResponse>(
      `coins?page=${page}&per_page=${limit}&sparkline=true&community_data=false&developer_data=false&vs_currency=usd`
    ),
};

export default coinsApi;
