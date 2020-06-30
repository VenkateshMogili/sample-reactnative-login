import React from 'react';
import {View, ImageBackground} from 'react-native';
import {Text} from 'native-base';
import {CustomHeader} from '../../CustomHeader';
import {IMAGE} from '../../../constants/Image';
export class CategoryDetails extends React.Component{
  render(){
    let title=this.props.navigation.getParam('name')+" Details";
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title={title} navigation={this.props.navigation}/>
      <View style={{}}>
        <ImageBackground source={IMAGE.CATEGORY} style={{resizeMode:"full",height:600}}>
  <Text style={{textAlign:'center'}}>{this.props.navigation.getParam('name')} Details Screen</Text>
  </ImageBackground>
      </View>
    </View>
  );
  }
}