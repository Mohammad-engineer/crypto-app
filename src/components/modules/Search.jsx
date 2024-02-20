import React from "react";

const Search = ({currency,setCurrency}) => {
  return (
    <div>
      <input type="text" />
      <select value={currency} onChange={(e)=> setCurrency(e.target.value)} name="" id="">
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
};

export default Search;