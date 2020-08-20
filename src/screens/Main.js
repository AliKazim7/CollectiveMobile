import React from 'react'
import firestore from '@react-native-firebase/firestore'

import { Container,Text, Body, View, Thumbnail, Content } from 'native-base'
import { data } from '../data/data'
import { Image, StyleSheet } from 'react-native'
import Upload from '../assests/index.png'
// import Video from 'react-native-video'
import { ScrollView } from 'react-native-gesture-handler'
import VideoDisplay from '../components/VidePlayer/VideoDisplay'
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

    navigate = () =>{
        console.log("navigate")
    }

    render(){
        console.log("result here", this.state.result)
        let dataRef = "https://firebasestorage.googleapis.com/v0/b/collectiveapp-566a0.appspot.com/o/video%2FVID-20200207-WA0002.mp4?alt=media&token=32dc63ab-d612-4a25-96dd-2080e6300911"

        return(
            <Container>
                <Content>
                    
                </Content>
            </Container>
        )
    }
}