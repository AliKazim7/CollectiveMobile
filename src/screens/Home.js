import React from 'react'
import { Container, Content, Grid, Col, Card, CardItem, Text, Left, Body, Row } from "native-base";
import { Image } from "react-native";
// import { Dimensions } from 'react-native';
// const { width, height } = Dimensions
import Upload from '../assests/fatima-tahir-1.jpg'
export default class Home extends React.Component{
constructor(props){
    super(props)
    this.state ={
        imageUrl:""
    }
}
    render(){
        return(
            <Container>
                <Content>
                    <Grid>
                        <Row>
                        <Col>
                            <Card>
                                <CardItem header bordered>
                                    {/* <Left /> */}
                                    <Body>
                                        <Text>
                                            PORNSTARS
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                <Image source={require('../assests/evaElfie.jpg')} style={{flex: 1,
                                    aspectRatio:0.7,
                                    resizeMode: "contain"
                                }} />
                                </CardItem>
                            </Card>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <Card>
                                <CardItem header bordered>
                                    {/* <Left /> */}
                                    <Body>
                                        <Text>
                                            Local / EX
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                <Image source={require('../assests/fatima-tahir-1.jpg')} style={{flex: 1,
                                    aspectRatio: 0.7,
                                    width:'100%', 
                                    resizeMode: "contain"}} />
                                </CardItem>
                            </Card>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <Card>
                                <CardItem header bordered>
                                    {/* <Left /> */}
                                    <Body>
                                        <Text>
                                            Actress
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                <Image source={require('../assests/HaniaAmir.jpg')} style={{flex: 1,
                                    aspectRatio: 0.7,
                                    width:'100%', 
                                    resizeMode: "contain"}} />
                                </CardItem>
                            </Card>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <Card>
                                <CardItem header bordered>
                                    {/* <Left /> */}
                                    <Body>
                                        <Text>
                                            Actress
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                <Image source={require('../assests/Hinata.jpg')} style={{flex: 1,
                                    aspectRatio: 0.7,
                                    width:'100%', 
                                    resizeMode: "contain"}} />
                                </CardItem>
                            </Card>
                        </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        )
    }
}