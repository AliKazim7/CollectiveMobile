import React from 'react'
import {View } from 'react-native'
import Video from 'react-native-video'


export default class VideoDisplay extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        console.log("props value", this.props)
        return <Video
                source={{uri: this.props.Video}}
                style={{flex: 1}}
            />
    }
}