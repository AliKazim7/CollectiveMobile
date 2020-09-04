import React from 'react'
import {Image, ScrollView} from 'react-native'
import { Container, Content, Card, CardItem, Title, View } from 'native-base'
import Video from 'react-native-video'

export default class PreView extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        let dataRef = "https://firebasestorage.googleapis.com/v0/b/collectiveapp-566a0.appspot.com/o/video%2FVID-20200207-WA0002.mp4?alt=media&token=32dc63ab-d612-4a25-96dd-2080e6300911"
        return(
            <Container>
                <ScrollView>
                <Card>
                        <CardItem header>
                            <Title> Show Image </Title>
                        </CardItem>
                        <CardItem>
                            <Image source={require('../assests/evaElfie.jpg')} style={{flex: 1,
                                    aspectRatio:0.7,
                                    resizeMode: "contain"
                                }} />
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Title>Show Video's</Title>
                        </CardItem>
                        <View>
                            <Video source={dataRef && {uri:dataRef }} />
                        </View>
                    </Card>
                </ScrollView>
            </Container>
        )
    }
}