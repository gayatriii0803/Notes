import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { navigate } from '../navigators/RootNavigation';
import SubjectScreen from '../screens/SubjectScreen';

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
            backgroundColor: 'pink',
            height: 'auto',
            width: 200,
            borderRadius: 7,
            margin: 12,
            alignItems: 'center',
            alignSelf:'center',
          }}>
          <Text style={{ fontSize: 20, alignSelf: 'center' }}>{name}</Text>
        </TouchableOpacity>
  )
}

export default SemesterCard