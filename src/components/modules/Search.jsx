import React, { useEffect, useState } from "react";
import { Searchcoin } from "../../services/cryptoApi";
import { RotatingLines } from "react-loader-spinner";
import styles from './Search.module.css'

const Search = ({ currency, setCurrency }) => {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, seIsLoading] = useState(true);

  useEffect(() => {
    setCoins([]);
    if (!text) {
      seIsLoading(false);
      return
    }
    const controller = new AbortController();

    const search = async () => {
      try {
        const res = await fetch(Searchcoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setCoins(json.coins);
          seIsLoading(false);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
        }
      }
    };
    seIsLoading(true);
    search();
    console.log({ coins });
    return () => {
      controller.abort();
    };
  }, [text]);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        name=""
        id=""
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {(!!coins.length || isLoading) && (
        <div className={styles.searchResult}>
        {isLoading && (
          <RotatingLines
            width="50px"
            height="50px"
            strokeWidth="2"
            strokeColor="#3874ff"
          />
        )}
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              <img src={coin.thumb} alt={coin.name} />
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
};

export default Search;
