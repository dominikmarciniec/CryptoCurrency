import React, { useEffect, useState } from "react";
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import Coin from '../../../data/crypto.json';
import DetailsHeader from "./components/DetailsHeader.jsx";
import styles from './components/styles'
import {getDetailedCoinData, getCoinMarketChart} from '../../services/requests';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
//import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';



const CoinDetails = () => {
    const {image:{small}, name, market_data:{market_cap_rank, current_price, price_change_percentage_24h}, symbol, prices} = Coin;
    const screenWidth = Dimensions.get('window').width;

    const [coin, setCoin] = useState(null);
    const [coinMarketData, setCoinMarketData] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation()

    const coinId = 'bitcoin';

    const percentageColorChange = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

    const width = Dimensions.get('window').width;


    return(
        <View style={{paddingHorizontal: 10}}>
                <DetailsHeader image={small} name={name} symbol={symbol} market_cap_rank={market_cap_rank}/>
                <View style={styles.priceContainer}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.currentPrice}>${current_price.usd}</Text>ś
                    </View>
                    <View style={{backgroundColor: percentageColorChange, paddingHorizontal:3, paddingVertical: 10,borderRadius: 5, flexDirection: 'row'}}>
                        <AntDesign 
                            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} 
                            size={12} 
                            color={'white'} 
                            style={{alignSelf:'center', marginRight:5}}/>
                        <Text style={styles.priceChange}>
                            {price_change_percentage_24h.toFixed(2)}
                        </Text>
                    </View>
                    </View>
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