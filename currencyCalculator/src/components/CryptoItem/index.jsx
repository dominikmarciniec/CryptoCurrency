import React from 'react';
import { Text, View, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles.js';


const CryptoItem = ({props}) => {
    console.log(props);
    return(
        <View style={styles.coinContainer}>
        <Image
          source={{ uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'}}
          style={{ height: 50, width: 50, marginRight: 10, alignSelf: "center" }}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.rankingContainer}>
            <Text style={styles.rank}>1</Text>
            </View>
            <Text style={styles.text}>BTC</Text>
            <AntDesign name="caretdown" size={12} color="white" style={{alignSelf:'center', marginRight:5}}/>
            <Text style={styles.text}>0.63%</Text>
          </View>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <Text style={styles.title}>39242,20</Text>
          <Text style={styles.text}>MCap 1.076T</Text>
        </View>
      </View>
    );
}

export default CryptoItem;