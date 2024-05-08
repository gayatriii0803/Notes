import { View, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import HomeCard from '../Cards/HomeCard'
import { navigate } from '../navigators/RootNavigation';

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
    <View style={{flex:1}}>
    <View style={{alignItems:'center'}}>
     <Text style={{fontSize:22}}>KEEP NOTES</Text>
    </View>
    <View style={{justifyContent:'center',flex:1}}>
        {this.state.courses.map(course =>(
          <HomeCard id={course.id} name={course.name}/>
        ))}
        </View>
 
    
    </View>
  )
}
}
export default HomeScreen;

