import React from 'react'
import { View, Text } from 'react-native'
import Main from './src/screens/Main'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import AddData from './src/screens/AddData'
import Home from './src/screens/Home'


const Tab =  createBottomTabNavigator()


export default class App extends React.Component{
    // constructor(props){
        
    // }

    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Main" component={Main} />
                    <Tab.Screen name="Add Post" component={AddData} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}