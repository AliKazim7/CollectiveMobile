import React from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'
export default class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        const userRef = firestore().collection("Collections")
        .get()
        .then(querySnapshot => {
            console.log('Total users: ', querySnapshot);

            querySnapshot.forEach(documentSnapshot => {
            console.log('User ID: ', documentSnapshot.data());
            });
        })
    }

    render(){
        return(
            <View>
                <Text>dasda</Text>
            </View>
        )
    }
}