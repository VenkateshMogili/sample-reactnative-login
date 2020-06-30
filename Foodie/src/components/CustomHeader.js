import React from 'react';
import {Text, AsyncStorage} from 'react-native';
import { Button, Header,Left,Body,Right,Icon,Title} from'native-base';

export class CustomHeader extends React.Component{
  constructor(props){
    super(props);
    this.getUserDetails();
    this.state = {username:''};
  }
  getUserDetails = async() =>{
    let username = await AsyncStorage.getItem('username');
    this.setState({username});
  }
  render(){
    let {title,isHome}= this.props;
  return (
        <Header>
          <Left>
          {
            isHome?
            <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
              <Icon name='menu'/>
            </Button>:
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
            <Icon name='arrow-back'/>
          </Button>
          }
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>this.props.navigation.navigate('Logout')}>
            <Icon name="person" style={{marginRight:10}}></Icon>
            <Text style={{color:'white',textTransform:'capitalize',marginRight:10}}>{this.state.username}</Text>
            <Icon name='exit'/>
          </Button>
          </Right>
        </Header>
  )
  }
}