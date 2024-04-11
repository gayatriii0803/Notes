import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SubjectCard = ({id,name}) => {
  return (
    <TouchableOpacity
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

export default SubjectCard