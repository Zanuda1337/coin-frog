import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import { THeadCell } from 'src/features/Table/Table.types';
import { ICoin } from 'src/features/Coins/Coins.types';
import coinsApi from 'src/api/coins/coinsApi';
import { convertCoinsToFront } from 'src/features/Coins/Coins.utils';

export interface ICoinsState {
  headCells: THeadCell[];
  data: ICoin[];
  totalCount: number;
  status: 'idle' | 'loading' | 'failed';
}

export const fetchCoins = createAsyncThunk<
  any,
  { page: number; limit: number },
  { rejectValue: string }
>('coins/fetchCoins', async ({ page, limit }, { rejectWithValue }) => {
  try {
    return await coinsApi.getCoins(page, limit);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const initialState: ICoinsState = {
  headCells: [
    {
      id: 'id',
      label: '#',
    },
    {
      id: 'name',
      label: 'NAME',
    },
    {
      id: 'price',
      label: 'PRICE',
    },
    {
      id: 'week',
      label: '7D',
    },
    {
      id: 'day',
      label: '24H',
    },
    {
      id: 'hour',
      label: '1H',
    },
    {
      id: 'volume',
      label: '24H VOLUME',
    },
    {
      id: 'marketCap',
      label: 'MARKET CAP',
    },
    {
      id: 'chart',
      label: '7D CHART',
    },
  ],
  data: [],
  totalCount: 8868,
  status: 'idle',
};

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state, { payload }) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCoins.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.data = convertCoinsToFront(payload, 'usd').data;
      state.status = 'idle';
    });
    builder.addCase(fetchCoins.rejected, (state, { payload }) => {
      state.status = 'failed';
    });
  },
});

export const {} = coinsSlice.actions;

export const selectCoins = (state: RootState) => state.coins;

export default coinsSlice.reducer;
