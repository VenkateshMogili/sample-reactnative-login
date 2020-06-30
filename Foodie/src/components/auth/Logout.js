import React from 'react';
import {View, StyleSheet, AsyncStorage, ActivityIndicator, StatusBar, Text} from 'react-native';
export class Logout extends React.Component{
  constructor(props){
    super(props);
    this.logout();
  }
  logout = async() =>{
    await AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading');
  }
  render(){
  return (
    <View style={styles.container}>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1e90ff'
  }
})