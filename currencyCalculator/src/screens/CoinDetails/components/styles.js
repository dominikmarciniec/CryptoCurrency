import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tickerContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 5,
        fontSize: 17
    },
    marketRank: {
        backgroundColor: '#585858',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    },
    currentPrice: {
        color: 'white', fontSize: 30, fontWeight: 'bold', letterSpacing: 1,
    },
    name: {
        color: 'white', fontSize: 15
    },
    priceContainer: {
        padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    priceChange: {
        color: 'white', fontSize: 17, fontWeight: '500'
    }
});

export default styles;