import { useState } from "react";
import convertData from "../../helpers/convertData";
import Style from "./Chart.module.css";


const Chart = ({chart, setChart}) => {

  const [type, settype] = useState('prices')

  const convertResult = convertData(chart, type)

  console.log(convertResult);

  return (
  <div className={Style.container}>
    <span onClick={()=>setChart(null)} className={Style.close}>X</span>
    <div className={Style.chart}></div>
  </div>
  )
};

export default Chart;
