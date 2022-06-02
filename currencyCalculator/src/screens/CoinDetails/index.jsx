import React, { useEffect, useState } from "react";
import {View, Text, Dimensions, ActivityIndicator, TextInput} from 'react-native';
import Coin from '../../../data/crypto.json';
import DetailsHeader from "./components/DetailsHeader.jsx";
import styles from './components/styles'
import {getDetailedCoinData, getCoinMarketChart, getAllCoinData} from '../../services/requests';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import CoinItem from "../../components/CoinItem";
//import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';


const CoinDetails = (props) => {

    
    //const screenWidth = Dimensions.get('window').width;

    const [coin, setCoin] = useState([]);
    //const [coinMarketData, setCoinMarketData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState("1");
    const [usdValue, setUsdValue] = useState("0");
    
    //const navigation = useNavigation()


    const coinId = props.route.params.id;

    console.log(coinId);

    //const width = Dimensions.get('window').width;
   

    const fetchData = async ()=> {
        setLoading(true)
        const fetchedData =  await getDetailedCoinData(coinId)
        console.log(fetchedData)
        setCoin(fetchedData);
        setUsdValue(fetchedData.market_data.current_price.usd)
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, []);

    if(loading || !coin){
        return <ActivityIndicator size='large'/>
    }

    const {image:{small}, name, market_data:{market_cap_rank, current_price:{usd}, price_change_percentage_24h}, symbol} = coin;

    
    const changeValue = (value) => {
        setValue(value)
        const floatValue = parseFloat(value.replace(',','.')) || 0
        setUsdValue((floatValue * usd).toString())
    }

    const changeUsdValue = (value) => {
        setUsdValue(value)
        const floatValue = parseFloat(value.replace(',','.')) || 0
        setValue((floatValue / usd).toString())
    }
    
    //const percentageColorChange = coin.price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';
    return(
        <View style={{paddingHorizontal: 10}}>
                <DetailsHeader image={small}symbol={name} market_cap_rank={market_cap_rank}/>
                <View style={styles.priceContainer}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.currentPrice}>${usd}</Text>
                    </View>
                    <View style={{backgroundColor: price_change_percentage_24h < 0 ? '#ea3943' : '#16c784', paddingHorizontal:3, paddingVertical: 10,borderRadius: 5, flexDirection: 'row'}}>
                        <AntDesign 
                            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} 
                            size={12} 
                            color={'white'} 
                            style={{alignSelf:'center', marginRight:5}}/>
                        <Text style={styles.priceChange}>
                            {price_change_percentage_24h.toFixed(2)}%
                        </Text>
                    </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <Text style={{color: 'white', alignSelf: 'center'}}>
                                {symbol.toUpperCase()}
                            </Text>
                            <TextInput style={styles.input} 
                            value={value} 
                            keyboardType="numeric"
                            onChangeText={changeValue}/>
                        </View>

                        <View style={{flexDirection: 'row', flex: 1}}>
                            <Text style={{color: 'white', alignSelf: 'center'}}>USD</Text>
                            <TextInput style={styles.input} 
                            value={usdValue} 
                            keyboardType="numeric"
                            onChangeText={changeUsdValue}/>
                        </View>
                    </View>
        </View>
    )
    
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