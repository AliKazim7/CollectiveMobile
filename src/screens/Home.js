import React from 'react'
import { Container, Content, Grid, Col, Card, CardItem, Text, Left, Body, Row } from "native-base";
import { Image } from "react-native";

export default class Home extends React.Component{
constructor(props){
    super(props)
    this.state ={
        imageUrl:"https://firebasestorage.googleapis.com/v0/b/collect1iveapp-566a0.appspot.com/o/image%2FevaElfie.jpg?alt=media&token=cc406ebd-b595-48eb-9bfd-2e1528b5c45c"
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
                                <Image source={{uri: this.state.imageUrl}} style={{height:200, width:200}} />
                                </CardItem>
                            </Card>
                        </Col>
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
                                    <Image source={ this.state.imageUrl && {uri: this.state.imageUrl}} style={{height:200, width:200}} />
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