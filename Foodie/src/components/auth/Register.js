import React from 'react';
import {View,Image,TextInput, TouchableOpacity, StyleSheet, ImageBackground, AsyncStorage} from 'react-native';
import {Text,Button} from 'native-base';
import {IMAGE} from '../../constants/Image';
export class Register extends React.Component{
  constructor(props){
    super(props);
    this.state={username:'',password:''}
  }
  login = () =>{
    fetch('http://localhost:3000/users/addUser',{
      method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username:this.state.username,
          password:this.state.password
        })
    })
    .then((response)=>response.json())
    .then((res)=>{
      if(res.success===true){
        var username=res.message;
        AsyncStorage.setItem('username',username);
        alert(res.message);
        this.props.navigation.navigate('Login');
        // this.props.navigator.push({
        //   id:'Memberarea'
        // })
      } else{
        alert(res.message);
      }
    })
    .done();
  }
  render(){
  return (
      <View style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground source={IMAGE.ICON_MENU} style={styles.backgroundImage}>
          <View style={styles.content}>
            <Text style={styles.logo}>- WELCOME -</Text>
            <View style={styles.inputContainer}>
              <TextInput underlineColorAndroid='transparent' style={styles.input} placeholder="Username"
              onChangeText={(username)=>this.setState({username})}
              value={this.state.username}>
              </TextInput>
              <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input} placeholder="Password"
              onChangeText={(password)=>this.setState({password})}
              value={this.state.password}>
              </TextInput>
            </View>
            <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      {/* <Button light style={{marginTop:10}}
      onPress={()=>this.props.navigation.navigate('Login')}>
        <Text>Login</Text>
      </Button> */}
      <Button light style={{marginTop:10}}
      onPress={()=>this.props.navigation.navigate('Login')}>
        <Text>Login</Text>
      </Button>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  backgroundImage:{
    flex:1,
    alignSelf:'stretch',
    width:null,
    justifyContent: 'center',
  },
  content:{
    opacity:0.9,
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'orange',
    margin:10,
    alignItems: 'center',
    borderRadius:10
  },
  logo:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:45,
    color:'black',
    textShadowColor:'gray',
    textShadowRadius:10
  },
  inputContainer:{
  },
  input:{
    borderRadius:10,
    padding:10,
    color:'black',
    borderWidth:2,
    borderColor:'lightgray',
    width:200,
    margin:5
  },
  buttonContainer:{
    margin:10,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    borderRadius:100,
    padding:10,
    backgroundColor:'magenta',
    color:'white',
    textAlign:'center',
    width:100
  }

})