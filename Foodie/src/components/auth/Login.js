import React from 'react';
import {View,Image,TextInput, TouchableOpacity, StyleSheet, ImageBackground, AsyncStorage} from 'react-native';
import {Text,Button} from 'native-base';
import {IMAGE} from '../../constants/Image';
export class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={username:'',password:''}
  }
  login = async() =>{
    fetch('http://localhost:3000/users',{
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
        AsyncStorage.setItem('isLoggedIn','1');
        AsyncStorage.setItem('username',username);
        this.props.navigation.navigate('app');
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
        {/* <ImageBackground source={IMAGE.ICON_MENU} style={styles.backgroundImage}> */}
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
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={{color:'#3399cc',margin:5}} onPress={()=>this.props.navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
            <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center',}}>
            <Text style={{marginTop:10}}>Don't have account? </Text>
      <Button light style={{borderRadius:50,marginTop:10,backgroundColor:'#1e90ff'}}
      onPress={()=>this.props.navigation.navigate('Register')}>
        <Text style={{color:'white'}}>Register</Text>
      </Button>
      </View>
          </View>
        {/* </ImageBackground> */}
      </View>
      {/* <Button light style={{marginTop:10}}
      onPress={()=>this.props.navigation.navigate('Login')}>
        <Text>Login</Text>
      </Button> */}
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1e90ff'
  },
  backgroundImage:{
    flex:1,
    alignSelf:'stretch',
    width:null,
    justifyContent: 'center',
  },
  content:{
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'orange',
    margin:10,
    alignItems: 'center',
    flex:1,
    borderRadius:10,
    alignSelf:'stretch',
    width:null,
    justifyContent: 'center',
  },
  logo:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:45,
    color:'#1e90ff',
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