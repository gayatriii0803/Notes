import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { navigate } from '../navigators/RootNavigation'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const SubjectCard = ({id,name, course, sem}) => {
  return (
    <TouchableOpacity
    onPress={()=>{
      navigate('PdfViewer',{
        semName:sem,
        courseName:course,
        subjectName:name
      })
    }}
    style={{
      backgroundColor:'#b4d1eb',
      borderRadius: wp(5),
      width: wp(50),
      height:hp(15),
      alignContent:'center',
      justifyContent:'center',
      alignSelf:'center',
      borderWidth: 1,
      margin:12
    }}>
    <Text style={{color: 'black',fontSize: 16,textAlign: 'center',padding:3 }}>{name}</Text>
  </TouchableOpacity>
  )
}

export default SubjectCard