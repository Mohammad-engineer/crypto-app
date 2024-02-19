import { useEffect, useState } from 'react'
import Tablecoin from '../modules/Tablecoin';
import {getCoinList} from '../../services/cryptoApi'

const HomePage = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, seIsLoading] = useState(true)

    useEffect(()=>{
        const getData = async ()=>{
          const res = await fetch(getCoinList())
          const json = await res.json()
          setCoins(json)
          seIsLoading(false)
        };
         
        getData()
    },[])

  return (
    <div>
        <Tablecoin coins={coins} isLoading={isLoading}/>
    </div>
  )
}

export default HomePage