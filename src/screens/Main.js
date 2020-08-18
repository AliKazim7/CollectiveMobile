import React from 'react'
import firestore from '@react-native-firebase/firestore'

import { Container, Card, CardItem, Text, Body, View, Thumbnail, Content } from 'native-base'
import { data } from '../data/data'
import { Image, StyleSheet } from 'react-native'
import Upload from '../assests/index.png'
import Video from 'react-native-video'
import { ScrollView } from 'react-native-gesture-handler'
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
        let dataRef = "https://firebasestorage.googleapis.com/v0/b/collectiveapp-566a0.appspot.com/o/video%2FVID-20200207-WA0002.mp4?alt=media&token=32dc63ab-d612-4a25-96dd-2080e6300911"

        return(
            <Container>
                <Content>
                        {this.state.result.length > 0 &&
                             this.state.result.map((item,index)=>(
                            <Card key={index}>
                        <CardItem header bordered>
                            <Text>{item.name}</Text>
                        </CardItem>
                        <CardItem cardBody>
                            {item.attachedType === "Picture" ? 
                                <View style={{flex:1}}>
                                    <Thumbnail source={item.url && {uri: item.url}} resizeMode="contain" square large style={{height:250,marginTop:10, marginBottom:10, width:'100%'}} />
                                </View>
                                :
                                null
                            }
                            {
                                item.attachedType === "Video"
                                ?
                                    <View style={{flex:1}}>
                                        <Video
                                        source={dataRef && {uri: dataRef}}   // Can be a URL or a local file.
                                        style={{flex: 1}}  
                                        />
                                    </View>
                                : null
                            }
                        </CardItem>
                        <CardItem footer>
                            <Body>
                                <Text>{item.webLinks}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                        ))}
                </Content>
            </Container>
        )
    }
}