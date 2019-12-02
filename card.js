import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Expo from 'expo';
import * as Font from 'expo-font';
import { ActivityIndicator } from 'react-native';
export default class Card extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

 async componentWillMount(){
    await Font.loadAsync({
      Robot: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ isLoading: false })
  }

  
render(){
  if (this.state.isLoading) {
    return <ActivityIndicator
    style={{flex: 1, justifyContent: "center", alignItems: "center"}}
    />;
  }

  return (
    <Container>
     
        <Content style={{marginTop: 30}}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://images.unsplash.com/photo-1569576231685-8a0bb772d2f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}} />
                <Body>
                  <Text>Rohit Dhepe</Text>
                  <Text note>Coder</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}

}

