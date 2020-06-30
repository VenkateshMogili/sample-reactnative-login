import React, { Component } from 'react';
import {View,StyleSheet, TouchableOpacity, ScrollView,ImageBackground} from 'react-native';
import {Text} from 'react-native';
import Grid from 'react-native-grid-component';
import {IMAGE} from '../../../constants/Image';
import {CustomHeader} from '../../CustomHeader';

export class Category extends Component{

  _renderItem = (data, i) => (
    <View style={styles.item} key={i}>
      <TouchableOpacity style={styles.category}
          onPress={()=> this.props.navigation.navigate('CategoryDetails',data)}>
        <ImageBackground source={IMAGE.CATEGORY}
        resizeMode="contain"
          style={styles.image}>
        <Text style={styles.categoryName}>{data.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
      </View>
  );

  _renderPlaceholder = i => <View key={i}/>;
  render(){
    let categories = [
      {key:0,name:'Category 1',img:'../android/app/src/main/res/mipmap-mdpi/splash_icon.png'},
      {key:1,name:'Category 2',img:'../android/app/src/main/res/mipmap-mdpi/splash_icon.png'},
      {key:2,name:'Category 3',img:'../android/app/src/main/res/mipmap-mdpi/splash_icon.png'},
      {key:3,name:'Category 4',img:'../android/app/src/main/res/mipmap-mdpi/splash_icon.png'},
      {key:4,name:'Category 5',img:'../android/app/src/main/res/mipmap-mdpi/splash_icon.png'},
      {key:5,name:'Category 6',img:'../android/app/src/main/res/mipmap-mdpi/splash_icon.png'},
      {key:6,name:'Category 7',img:'../android/app/src/main/res/mipmap-mdpi/splash_icon.png'},
    ];
    return (
      <View style={{ flex: 1 }}>
      <CustomHeader title="Category" isHome={true} navigation={this.props.navigation}/>
      <View style={{flex: 1,}}>
      <Grid
        renderItem={this._renderItem}
        renderPlaceholder={this._renderPlaceholder}
        data={categories}
        numColumns={2}
      />
      </View>
      </View>
    )
  }
};

let randomColor = ['black','blue'];
const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin:10
  },
  category:{
    backgroundColor: randomColor[0],
    height:160,
    borderRadius:10,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: "cover",
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryName:{
    color:'white',
    textShadowColor:'black',
    textShadowRadius:10
  }
})