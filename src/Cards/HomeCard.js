import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import SemesterScreen from '../screens/SemesterScreen'
import { navigate } from '../navigators/RootNavigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const HomeCard = ({id,name}) => {
 
  return (
    <TouchableOpacity
    onPress={()=>{
      navigate('SemesterScreen',{
        courseName:name
      })}}
    
    style={{
    backgroundColor:'#b4d1eb',
    borderRadius: wp(5),
    width: wp(40),
    height:hp(10),
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderWidth: 1,
    margin:12
    }}>
    <Text style={{color: 'black',fontSize: 16,textAlign: 'center',padding:3}}>{name}</Text>
    </TouchableOpacity>
  )
}

export default HomeCard