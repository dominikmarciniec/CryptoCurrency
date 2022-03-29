import React from "react";
import {View, Text, Image} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import styles from "./styles";

const DetailsHeader = (props) => {
    const {image, symbol, market_cap_rank} = props;
    return(
         <View style={styles.headerContainer}>
            <AntDesign name="left" size={30} color="white" />
            <View style={styles.tickerContainer}>
                <Image source={{uri: image}} style={{width: 25, height:25}}/>
                <Text style={styles.title}>{symbol.toUpperCase()}</Text>
                <View style={styles.marketRank}>
                    <Text style={{color: 'white', fontWeight:'bold', fontSize: 15}}>#{market_cap_rank}</Text>
                 </View>
            </View>
            <Feather name="user" size={24} color="white" />
        </View>
    );
};

export default DetailsHeader;