import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { navigate } from '../navigators/RootNavigation';
import SubjectScreen from '../screens/SubjectScreen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const SemesterCard = ({id, name, course}) => {
  return (
    <TouchableOpacity
    onPress={()=>{
      navigate('SubjectScreen',{
        semName:id,
        course:course
      })
    }}
          style={{
    backgroundColor:'#b4d1eb',
    borderRadius: wp(5),
    width: wp(45),
    height:hp(10),
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderWidth: 1,
    margin:12,
    
          }}>
          <Text style={{ color: 'black',fontSize: 16,textAlign: 'center',padding:3 }}>{name}</Text>
        </TouchableOpacity>
  )
}

export default SemesterCard