import React from 'react'
import { Container, Card, CardItem, Text, Body, View, Thumbnail, Content } from 'native-base'
import { data } from '../data/data'
import { Image, StyleSheet } from 'react-native'
import Upload from '../assests/index.png'
import Video from 'react-native-video'
import storage from '@react-native-firebase/storage'

export default class DetailView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            result: []
        }
    }


    componentDidMount(){
        console.log("this props", this.props)
        if(this.props.result){
            this.setState({
                result: this.props.result
            })
        }
    }

    videoError = () =>{
        console.log("got error")
    }

    render(){
        console.log("data value", data)

        let dataRef = "https://firebasestorage.googleapis.com/v0/b/collectiveapp-566a0.appspot.com/o/video%2FVID-20200207-WA0002.mp4?alt=media&token=32dc63ab-d612-4a25-96dd-2080e6300911"
        return(
            <Container>
                <Content>
                    {data.map((item ,index)=>(
                        <Card key={index}>
                            <CardItem header bordered>
                                <Text>{item.name}</Text>
                            </CardItem>
                            <CardItem cardBody>
                                {item.attachedType === "Picture" ? 
                                    <View>
                                        <Thumbnail source={item.url && {uri: item.url}} square resizeMode="stretch" alt="some image here" large style={{height:100}} />
                                    </View>
                                    :
                                    null
                                }
                                {
                                    item.attachedType === "Video"
                                    ?
                                   <Video
                                        source={dataRef && {uri: dataRef}}   // Can be a URL or a local file.
                                        />
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
            // <Container>
            // <Video
            // source={dataRef && {uri: dataRef}}   // Can be a URL or a local file.
            // style={{flex:1}}
            
            // style={styles.backgroundVideo} />
            // </Container>
        )
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      flex:1
    },
  });