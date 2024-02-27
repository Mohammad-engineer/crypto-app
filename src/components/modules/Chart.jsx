import { useState } from "react";
import convertData from "../../helpers/convertData";
import Style from "./Chart.module.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ chart, setChart }) => {
  const [type, settype] = useState("prices");

  const convertResult = convertData(chart, type);

  const typeHandler = (e) => {
    if(e.target.tagName === 'BUTTON'){
      const type = e.target.innerText.toLowerCase().replace(' ','_')
      settype(type)
    }
  }

  return (
    <div className={Style.container}>
      <span onClick={() => setChart(null)} className={Style.close}>
        X
      </span>
      <div className={Style.chart}>
        <div className={Style.name}>
          <img src={chart.coin.image} alt={chart.coin.id} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={Style.graph}>
          <ChartComponent data={convertResult} type={type} />
        </div>
        <div className={Style.types} onClick={typeHandler}>
          <button className={type === 'prices' ? Style.selected : null}>Prices</button>
          <button className={type === 'market_caps' ? Style.selected : null}>Market Caps</button>
          <button className={type === 'total_volumes' ? Style.selected : null}>Total Volumes</button>
        </div>
        <div className={Style.detail}>
          <div>
            <p>Prices:</p>
            <span>${chart.coin.ath}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span>${chart.coin.current_price}</span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>{chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
