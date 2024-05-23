import { View, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import HomeCard from '../Cards/HomeCard'
import { navigate } from '../navigators/RootNavigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import { CommonActions } from '@react-navigation/native';
import LoginScreen from './LoginScreen';

class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      courses:[
        {id:1,name:'BSC_IT'},
        {id:2,name:'BSC_CS'}
      ]
    }

  }
  handleLogout = async () => {
    try {
      auth().signOut();
      // await AsyncStorage.removeItem('accessToken');
      console.log('Logout');
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        })
      );
    } catch (error) {
      console.error('Error clearing access token:', error);
    }
  };
  render(){
    
  return (
    <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
    <View style={{marginBottom:hp(6)}}>
     <Text style={{fontSize: 30,textAlign: 'center',color:'black'}}>COURSES</Text>
    </View>
    <View style={{marginHorizontal:wp(3)}}>
        {this.state.courses.map(course =>(
          <HomeCard id={course.id} name={course.name}/>
        ))}
        </View>
        
        <TouchableOpacity 
          onPress={this.handleLogout}
          style={{position: 'absolute', 
          bottom: hp(3),
          alignSelf: 'center'}}>
        <View style={{ height: 50, 
          width: 100, 
          backgroundColor: 'red', 
          borderRadius: wp(5), 
          borderColor: 'black', 
          borderWidth: 1, 
          justifyContent: 'center', 
          alignItems: 'center'}}>
            <Text style={{fontSize:16,color:'black',padding:9,alignSelf:'center'}}>Log Out</Text>
        </View>
        </TouchableOpacity>
        
 
    
    </View>
  )
}
}
export default HomeScreen;

