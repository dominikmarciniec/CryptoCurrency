import React from "react";
import {FlatList} from 'react-native';
import CoinItem from '../../components/CoinItem';
import cryptocurrencies from '../../../data/cryptocurrencies.json'
const HomeScreen = () => {
    return (
        <FlatList 
        data={cryptocurrencies}
        renderItem={({item}) => <CoinItem marketCoin={item}/>}
      />
    );
};

export default HomeScreen;