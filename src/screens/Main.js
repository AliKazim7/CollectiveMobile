import React from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'
export default class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            result : []
        }
    }

    componentDidMount(){
        const userRef = firestore().collection("Collections")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data())
            this.setState({
                result: data
            })
        })
    }

    render(){
        console.log("result here", this.state.result)
        return(
            <View>
                <Text>dasda</Text>
            </View>
        )
    }
}