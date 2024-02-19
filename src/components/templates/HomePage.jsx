import { useEffect, useState } from 'react'
import Tablecoin from '../modules/Tablecoin';
import {getCoinList} from '../../services/cryptoApi'

const HomePage = () => {
    const [coins, setCoins] = useState([])

    useEffect(()=>{
        fetch(getCoinList())
        .then(res=>res.json())
        .then(json=>setCoins(json))
    },[])

  return (
    <div>
        <Tablecoin coins={coins}/>
    </div>
  )
}

export default HomePage