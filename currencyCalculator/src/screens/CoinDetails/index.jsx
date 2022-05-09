import React, { useEffect, useState } from "react";
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import Coin from '../../../data/crypto.json';
import DetailsHeader from "./components/DetailsHeader.jsx";
import styles from './components/styles'
//import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';
import {getDetailedCoinData, getCoinMarketChart} from '../../services/requests';
import { useNavigation } from "@react-navigation/native";

const CoinDetails = () => {
    const {image:{small}, name, market_data:{market_cap_rank, current_price, price_change_percentage_24h}, symbol, prices} = Coin;
    const screenWidth = Dimensions.get('window').width;

    const [coin, setCoin] = useState(null);
    const [coinMarketData, setCoinMarketData] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation()

    const coinId = 'bitcoin';

    return(
        <View>
            <DetailsHeader image={small} name={name} symbol={symbol} market_cap_rank={market_cap_rank}/>
        </View>
    )
    // const fetchData = async () => {
    //     setLoading(true);
    //     const fetchedData = await getDetailedCoinData(coinId);
    //     //const fetchedCoinMarketData = await getCoinMarketChart(coinId);
    //     setCoin(fetchedData);
    //     setCoinMarketData(fetchedCoinMarketData);
    //     setLoading(false);
    // };

    // if(loading || !coin || !coinMarketData){
    //     return <ActivityIndicator size='large'/>
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

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