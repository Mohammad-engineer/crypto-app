import React from "react";
import {RotatingLines} from 'react-loader-spinner'
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from './Tablecoin.module.css';

const Tablecoin = ({ coins ,isLoading, currency}) => {
  console.log({ coins });

  let currency_symbol
  if(currency==='usd') currency_symbol = '$'
  if(currency==='eur') currency_symbol = '€'
  if(currency==='jpy') currency_symbol = '¥'

  return (
    <div className={styles.container}>
      {isLoading ? (<RotatingLines strokeColor='#3875ff' strokeWidth='2' />) :
      (<table className={styles.table}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th></th>
          </tr>
        </thead> 
        <tbody>
          {coins.map((coin) => (
            <TableRow coin={coin} key={coin.id} currency_symbol={currency_symbol} />
          ))}
        </tbody>
      </table>)
      }
    </div>
  );
};

export default Tablecoin;

const TableRow = ({
  coin: {
    name,
    symbol,
    image,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,

  },currency_symbol
}) => {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency_symbol+' '}
        {current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.succes : styles.error}>{price_change && price_change.toFixed(2)}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
};
