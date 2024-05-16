import { View, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import HomeCard from '../Cards/HomeCard'
import { navigate } from '../navigators/RootNavigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
 
    
    </View>
  )
}
}
export default HomeScreen;

