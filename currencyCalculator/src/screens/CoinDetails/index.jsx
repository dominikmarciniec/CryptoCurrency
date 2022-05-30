import React, { useEffect, useState } from "react";
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import Coin from '../../../data/crypto.json';
import DetailsHeader from "./components/DetailsHeader.jsx";
import styles from './components/styles'
import {getDetailedCoinData, getCoinMarketChart, getAllCoinData} from '../../services/requests';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import CoinItem from "../../components/CoinItem";
//import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';


const CoinDetails = (props) => {

    //const {image:{small}, name, market_data:{market_cap_rank, current_price, price_change_percentage_24h}, symbol, prices} = Coin;
    const screenWidth = Dimensions.get('window').width;

    const [coin, setCoin] = useState([]);
    const [coinMarketData, setCoinMarketData] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation()


    const coinId = props.route.params.id;

    console.log(coinId);

    const width = Dimensions.get('window').width;
   

  const fetchData = async ()=> {
    const fetchedData =  await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    const data = await fetchedData.json();
    console.log(data)
    setCoin(data);
    setLoading(false);
}

    useEffect(() => {
        fetchData()
    }, []);
    console.log(coin.image);

    //const percentageColorChange = coin.price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';
    return(
        <View style={{paddingHorizontal: 10}}>
                <DetailsHeader image={coin.image} name={coin.name} symbol={coin.symbol} market_cap_rank={coin.market_cap_rank}/>
                <View style={styles.priceContainer}>
                    <View>
                        <Text style={styles.name}>{coin.name}</Text>
                        <Text style={styles.currentPrice}>${coin.current_price}</Text>
                    </View>
                    <View style={{backgroundColor: coin.price_change_percentage_24h < 0 ? '#ea3943' : '#16c784', paddingHorizontal:3, paddingVertical: 10,borderRadius: 5, flexDirection: 'row'}}>
                        <AntDesign 
                            name={coin.price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} 
                            size={12} 
                            color={'white'} 
                            style={{alignSelf:'center', marginRight:5}}/>
                        <Text style={styles.priceChange}>
                            {coin.price_change_percentage_24h}
                        </Text>
                    </View>
                    </View>
        </View>
    )
    

    // if(loading || !coin || !coinMarketData){
    //     return <ActivityIndicator size='large'/>
    // }

    

    // return(
    //     <Pressable style={styles.headerContainer} onPress ={ ()=> Navigation.navigate(CoinDetails)}>

    //     </Pressable>
    // );
    
    // return(
    //     // <View style={{paddingHorizontal:10}}>
    //     //     <ChartPathProvider 
    //     //         data={{ 
    //     //             points: prices.map((price) => ({x: price[0], y: price[1]})), 
    //     //             smoothingStrategy: 'bezier' 
    //     //         }}>
    //     //         <DetailsHeader image={small} name={name} symbol={symbol} market_cap_rank={market_cap_rank}/>
    //     //         <ChartPath height={screenWidth / 2} stroke="yellow" width={screenWidth} />
    //     //         <ChartDot style={{ backgroundColor: 'blue' }} />
    //     //     </ChartPathProvider>        
    //     // </View>
    // )
};

export default CoinDetails;