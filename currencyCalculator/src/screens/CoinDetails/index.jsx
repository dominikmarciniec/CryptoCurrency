import React from "react";
import {View, Text, Dimensions} from 'react-native';
import Coin from '../../../data/crypto.json';
import DetailsHeader from "./components/DetailsHeader.jsx";
import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';


const CoinDetails = () => {
    const {image:{small}, name, market_data:{market_cap_rank}, symbol, prices} = Coin;
    const screenWidth = Dimensions.get('window').width;

    return(
        <View>
            <ChartPathProvider 
                data={{ 
                    points: prices.map((price) => ({x: price[0], y: price[1]})), 
                    smoothingStrategy: 'bezier' 
                }}>
                <DetailsHeader image={small} name={name} symbol={symbol} market_cap_rank={market_cap_rank}/>
                <Text></Text>
                    <ChartPath height={screenWidth / 2} stroke="yellow" width={screenWidth} />
                    <ChartDot style={{ backgroundColor: 'blue' }} />
            </ChartPathProvider>        
        </View>
    );
};

export default CoinDetails;