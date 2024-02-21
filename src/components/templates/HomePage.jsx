import { useEffect, useState } from 'react'
import Tablecoin from '../modules/Tablecoin';
import {getCoinList} from '../../services/cryptoApi'
import Pagination from '../modules/Pagination';
import Search from '../modules/Search';
import Style from './HomePage.module.css';
import Chart from '../modules/Chart';

const HomePage = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, seIsLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('usd');
    const [chart, setChart] = useState(null);


    useEffect(()=>{
      seIsLoading(true)
        const getData = async ()=>{
          const res = await fetch(getCoinList(page,currency))
          const json = await res.json()
          setCoins(json)
          seIsLoading(false)
        };
         
        getData()
    },[page,currency ])

  return (
    <div className={Style.container}>
        <Search currency={currency} setCurrency={setCurrency} />
        <Tablecoin coins={coins} isLoading={isLoading} currency={currency} setChart={setChart} />
        <Pagination page={page} setPage={setPage}/>
        {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  )
}

export default HomePage