import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import SemesterScreen from '../screens/SemesterScreen'
import { navigate } from '../navigators/RootNavigation';


const HomeCard = ({id,name}) => {
 
  return (
    <TouchableOpacity
    onPress={()=>{
      navigate('SemesterScreen',{
        courseName:name
      })}}
    
    style={{
      backgroundColor: 'pink',
      height: 'auto',
      width: 200,
      borderRadius: 7,
      margin: 12,
      alignItems: 'center',
      alignSelf:'center',
    }}>
    <Text style={{fontSize: 20, alignSelf: 'center'}}>{name}</Text>
    </TouchableOpacity>
  )
}

export default HomeCard