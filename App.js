import React from 'react'
import { View, Text } from 'react-native'
import Main from './src/screens/Main'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AddData from './src/screens/AddData'
import Home from './src/screens/Home'
import PreView from './src/screens/PreView'


const Tab =  createBottomTabNavigator()
const Stack = createStackNavigator();

function MainTab(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PreView" component={PreView} />
        </Stack.Navigator>
    )
}

export default class App extends React.Component{
    // constructor(props){
        
    // }

    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={MainTab} />
                    <Tab.Screen name="Categories" component={Main} />
                    <Tab.Screen name="Add Post" component={AddData} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}