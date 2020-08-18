import React from 'react'
import { Text, View, Image, ImagePickerIOS } from 'react-native'
import { Container, Content, Card, CardItem, Title, Icon, Grid, Col, Thumbnail, Button, List, Item, Label, Input, Body, Picker } from 'native-base'
import Upload from '../assests/index.png'
import ImagePicker from 'react-native-image-picker'
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'

export default class AddData extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showIcon: true,
            name:'',
            webLinks:'',
            details:'',
            categoryType:'',
            attachedType:'',
            url:'',
            imageUri:'',
            showImageView: false,
            showVideoView: false,
            showOptions: false,
            avatarSource:''
        }
    }

    uploadChange = () =>{
        console.log("pressed action")
        this.setState({
            showIcon: false,
            showOptions: true
        })
    }

    onDrop = (file) =>{
        // const Videourl = URL.createObjectURL(file)
        console.log("file added", file === "Photo")
        if(file === "Photo"){
            const options = {
            title: 'Select Avatar',
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
            return new Promise((resolve, reject)=>{
                ImagePicker.launchImageLibrary(options, (response) => {
            
                    if (response.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (response.error) {
                      console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                      console.log('User tapped custom button: ', response.customButton);
                    } else {
                      const source = { uri: response.uri };
                  
                      // You can also display the image using data:
                      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                      this.setState({
                        avatarSource: source,
                        showOptions: false,
                        showIcon: false,
                        imageUri:response.uri,               
                        showImageView:true
                      });
                      setTimeout(function(){
                          resolve(response)
                      }, 1000)
                    }
                  });
            })
        }
        
      }

    uploadImage = async() =>{
        console.log("upload Image")
        const file = await this.onDrop("Photo")
        console.log("file here", file)
        if(file && file){
            const uploadTasl = storage().ref(`image/${file.fileName}`).put(this.state.avatarSource)
            if(uploadTasl){
                const url = await storage().ref(`image/${file.fileName}`).getDownloadURL()
                if(url){
                    this.setState({
                        url: url,
                        attachedType:"Picture"
                    })
                }
            }
        }
    }

    uploadVideo = () =>{
        console.log("upload video")
        const options = {
            title: 'Select Avatar', 
            mediaType: 'video', 
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          ImagePicker.showImagePicker(options, (response) => {
            
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
                showIcon: true,
                showOptions: false,
              });
            }
          });
    }

    handleChange = (key, value) =>{
        console.log("key and value", key, value)
        this.setState({
            [key] : value
        })
    }
    

    onValueChange(value) {
        console.log("value", value)
        this.setState({
            categoryType: value
        });
      }

      updateProfile = async() =>{
          console.log("values", this.state.categoryType, this.state.name, this.state.details, this.state.webLinks, this.state.url)
        const updateProfile = await firestore().collection("Collections").add({
            attachedType:this.state.attachedType,
            type: this.state.categoryType,
            name: this.state.name,
            webLinks: this.state.webLinks,
            details: this.state.details,
            url:this.state.url
        })
        if(updateProfile){
            firestore().collection("Collections").where("url", "==", this.state.url).get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    console.log("collection", doc)
                  firestore().collection("Collections")
                    .doc(doc.id)
                    .update({
                      collectionID: doc.id
                    })
                });
              })
              .then(resp => {
                this.setState({
        
                })
              });
        }
      }

    render(){
        console.log("value ", this.state.avatarSource, this.state.url)
        return(
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Title> Add Post </Title>
                        </CardItem>
                        <CardItem >
                              <Body>
                                    {
                                        this.state.showIcon ? 
                                        <View style={{borderColor:'2px green', marginLeft:'35%', flex:1}}>
                                            <Button transparent onPress={this.uploadChange}>
                                                <Thumbnail source={this.state.avatarSource  ? this.state.avatarSource : Upload} large style={{width:100}} />
                                            </Button>
                                        </View>
                                    :
                                    null
                                    }
                                    {
                                        this.state.showOptions ?
                                        <Grid>
                                            <Col>
                                                <Button transparent onPress={this.uploadImage}>
                                                    <Icon type="FontAwesome" style={{fontSize: 30, marginLeft:'30%', marginBottom:'20%'}} name="camera"/>
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button transparent onPress={this.uploadVideo}>
                                                    <Icon type="FontAwesome" style={{fontSize: 30, marginLeft:'30%', marginBottom:'20%'}} name="camera"/>
                                                </Button>
                                            </Col>
                                        </Grid>
                                        :
                                        null
                                    }
                                    {
                                        this.state.showImageView
                                        ?
                                        <View style={{flex:1, backgroundColor:'red', width:'100%'}}>
                                            <Thumbnail square large source={this.state.avatarSource} style={{height:300, width:'100%'}} />
                                        </View>
                                        :
                                        null
                                    }
                                </Body>
                        </CardItem>
                        <CardItem>
                             <Body>
                                <Item floatingLabel style={{marginTop: 20}}>
                                    <Label>Name</Label>
                                    <Input onChangeText={(text) => this.handleChange("name", text)} value={this.state.name} />
                                </Item>
                                <Item floatingLabel style={{marginTop: 20}}>
                                    <Label>Detail</Label>
                                    <Input onChangeText={(text) => this.handleChange("details", text)} value={this.state.details} />
                                </Item>
                                <Item floatingLabel style={{marginTop: 20}}>
                                    <Label>Links</Label>
                                    <Input onChangeText={(text) => this.handleChange("webLinks", text)} value={this.state.webLinks} />
                                </Item>
                             </Body>
                        </CardItem>
                        <CardItem>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    headerBackButtonText="Back!"                      
                                    placeholder="Select your SIM"
                                    iosIcon={<Icon name="arrow-down" />}
                                    placeholder="Select your SIM"
                                    selectedValue={this.state.categoryType}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                <Picker.Item label="Pornstars" value="Pornstars" />
                                <Picker.Item label="Local" value="Local" />
                                <Picker.Item label="Actress" value="Actress" />
                                <Picker.Item label="Cosplay" value="Cosplay" />
                                <Picker.Item label="Ex" value="Ex" />
                            </Picker>
                        </CardItem>
                        <CardItem footer>
                            <Button primary full onPress={this.updateProfile}>
                                    <Text style={{color:'white'}}>Upload</Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}