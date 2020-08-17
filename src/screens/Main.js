import React from 'react'
import { Text, View } from 'react-native'

export default class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        // const db = firebase.firestore()
        // const place = db.collection("Collections").get()
        // .then(querySnapshot =>{
        //   const data = querySnapshot.docs.map(doc => doc.data());
        //   console.log("data collections", data)
        // //   this.setState({
        // //     results: data
        // //   })
        // })
    }

    render(){
        return(
            <View>
                <Text>dasda</Text>
            </View>
        )
    }
}