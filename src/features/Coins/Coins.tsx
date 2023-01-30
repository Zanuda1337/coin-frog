import React, { useEffect } from 'react';
import classes from './Coins.module.scss';
import Table from 'src/features/Table/Table';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { fetchCoins, selectCoins } from 'src/features/Coins/Coins.slice';

type TMainProps = {};

const Coins: React.FC<TMainProps> = ({}) => {
  const { data: tableData, headCells } = useAppSelector(selectCoins);
  const dispatch = useAppDispatch();

  const getCoins = () => {
    dispatch(fetchCoins({ page: 2, limit: 100 }));
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div className={classes['main-wrapper']}>
      <h2 className={classes.title}>Cryptocurrency Prices by Market Cap</h2>
      <Table headCells={headCells}>
        {tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.marketData.marketCapRank}</td>
            <td className={classes.name}>
              <span>{row.name}</span>
              <span>{row.symbol}</span>
            </td>
            <td>{row.marketData.currentPrice}</td>
            <td>
              <span
                className={
                  Math.sign(row.marketData.priceChangePercentageOneHour) > 0
                    ? 'text_green'
                    : 'text_red'
                }
              >
                {row.marketData.priceChangePercentageOneHour}
              </span>
            </td>
            <td>
              <span
                className={
                  Math.sign(row.marketData.priceChangePercentageDay) > 0
                    ? 'text_green'
                    : 'text_red'
                }
              >
                {row.marketData.priceChangePercentageDay}
              </span>
            </td>
            <td>
              <span
                className={
                  Math.sign(row.marketData.priceChangePercentageWeek) > 0
                    ? 'text_green'
                    : 'text_red'
                }
              >
                {row.marketData.priceChangePercentageWeek}
              </span>
            </td>
            <td>{row.marketData.totalVolume}</td>
            <td>{row.marketData.marketCap}</td>
            <td>{/*<img src={row.image} alt="" />*/}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Coins;
