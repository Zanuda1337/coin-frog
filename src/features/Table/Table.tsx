import React, { ReactNode } from 'react';
import classes from './Table.module.scss';
import Button from 'src/components/Button/Button';
import Select from 'src/components/Select/Select';
import { THeadCell } from 'src/features/Table/Table.types';

type TTableProps = {
  headCells: THeadCell[];
  children: ReactNode;
};

const Table: React.FC<TTableProps> = ({ children, headCells }) => {
  return (
    <div className={classes['table-wrapper']}>
      <div className={classes['table-header']}>
        <Button label="All Categories" />
        <Button icon="filters" label="Filter" />
      </div>
      <table>
        <thead>
          <tr>
            {headCells.map((headCell) => (
              <th key={headCell.id}>{headCell.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <div className={classes['table-footer']}>
        <p>Showing 1 - 100 out of 8868</p>
        <div className={classes.pagination}>
          <p>1 2 3 4 5 ... 100</p>
        </div>
        <div>
          <p>Show rows</p>
          <Select
            value={'100'}
            onChange={() => console.log()}
            options={[
              { label: '100', value: '100' },
              { label: '20', value: '20' },
              { label: '10', value: '10' },
            ]}
            direction="down"
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
