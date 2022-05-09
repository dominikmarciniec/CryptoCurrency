import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from "../screens/HomeScreen";
import CoinDetails from "../screens/CoinDetails";
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name={"Home"} component={HomeScreen}/>
                <Stack.Screen name={"CoinDetails"} component={CoinDetails}/>
            </Stack.Navigator>
    ); 
}

export default Navigation;