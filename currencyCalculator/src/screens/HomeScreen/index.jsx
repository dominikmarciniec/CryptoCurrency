import React from "react";
import {FlatList} from 'react-native';
import CoinItem from '../../components/CoinItem';
import cryptocurrencies from '../../../data/cryptocurrencies.json'
import { getAllCoinData } from "../../services/requests";
import { useState, useEffect } from "react";



const HomeScreen = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async ()=> {
  const fetchedData =  await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  const data = await fetchedData.json();
  setData(data);
  setLoading(false);
}

  useEffect(() => {
    fetchData();
  }, []);

    return (
        <FlatList
        data={data}
        renderItem={({item}) => <CoinItem marketCoin={item}/>}
      />
    );
};

export default HomeScreen;