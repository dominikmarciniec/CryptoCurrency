import React from 'react';
import { Text, View, Image, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const CoinItem = ({marketCoin}) => {
  const {
    id,
    name, 
    current_price, 
    market_cap_rank, 
    price_change_percentage_24h, 
    symbol, 
    market_cap,
    image
  } = marketCoin;

  const navigation = useNavigation();

  const percentageColorChange = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

  const normalizeMarketCap = (marketCap) => {
    if(marketCap > 1000000000000){
      return `${Math.floor(marketCap / 1000000000000)} T`;
    }
    if(marketCap > 1000000000){
      return `${Math.floor(marketCap / 1000000000)} B`;
    }
    if(marketCap > 1000000){
      return `${Math.floor(marketCap / 1000000)} M`;
    }
    if(marketCap > 1000){
      return `${Math.floor(marketCap / 1000)} K`;
    }
    return marketCap;
  };

  
    return(
      <Pressable onPress ={()=> navigation.navigate("CoinDetails", {id: id})}>
      
          <View style={styles.coinContainer}>
            <Image
              source={{ 
                uri: image
              }}
              style={{ height: 50, width: 50, marginRight: 10, alignSelf: "center" }}
            />
            <View>
              <Text style={styles.title}>{name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.rankingContainer}>
                <Text style={styles.rank}>{market_cap_rank}</Text>
                </View>
                <Text style={styles.text}>{symbol.toUpperCase()}</Text>
                <AntDesign name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} size={12} color={percentageColorChange} style={{alignSelf:'center', marginRight:5}}/>
                <Text style={{color:percentageColorChange}}>{price_change_percentage_24h.toFixed(2)}%</Text>
              </View>
            </View>
            <View style={{marginLeft: 'auto', alignItems: 'flex-end'}}>
              <Text style={styles.title}>{current_price}$</Text>
              <Text style={{color:'white'}}>MCap {normalizeMarketCap(market_cap)}</Text>
            </View>
          </View>
      </Pressable>
    );
}

export default CoinItem;