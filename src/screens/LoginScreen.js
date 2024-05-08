import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import React, { useState } from 'react'
import { navigate } from '../navigators/RootNavigation'
import HomeScreen from './HomeScreen'
import auth from '@react-native-firebase/auth';
import Entypo from 'react-native-vector-icons/Entypo'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const createUser = () =>{
    auth()
  .signInWithEmailAndPassword(email,password)
  .then(() => {
    console.log('User account signed in!');
    navigate('HomeScreen')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}
const validate = () => {
  if(email.length!=0 && password!=0){
    return true
  }
  return false
}

  return (
    <View style={{margin:30,justifyContent:'center',flex:1}}>
        
        <Text style={{alignSelf:'center', fontSize:25,marginTop:20,color:'black'}}>Welcome Back!</Text>
        <View style={{justifyContent:'center',flex:1}}>
      <Text>Enter your Email-id</Text>
      <TextInput
      value={email}
      onChangeText={text=>setEmail(text)}
        style={{height:40,width:300,borderColor:'gray',borderWidth:1,alignSelf:'center',
    marginBottom:20,paddingHorizontal:10,borderRadius:7}}
        placeholder='Enter your Email-id'
        autoCapitalize='none'
        />
        <Text>Enter your password</Text>
      <TextInput
      value={password}
      onChangeText={text=>setPassword(text)}
        style={{height:40,width:300,borderColor:'gray',borderWidth:1,alignSelf:'center',
   paddingHorizontal:10,borderRadius:7}}
        placeholder='Enter your password'
        autoCapitalize='none'
        secureTextEntry
        />
         <Entypo
         name="eye"
         size={35}
         color="black"/>
        <Text style={{marginLeft:4,marginBottom:15}}>Forget password?</Text>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity
        onPress={()=>{
          if(validate()){
            createUser()
          }
           }}
        style={{backgroundColor:'pink',height:40,width:100,borderRadius:15,alignItems:'center'}}>
            <Text style={{alignSelf:'center',padding:7,color:'black'}}>Log In</Text>

        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={{alignSelf:'center'}}>Don't have account? </Text>
        <TouchableOpacity
        onPress={()=>navigate('RegisterScreen')}>
        <Text style={{alignSelf:'center'}}>SignUp</Text>
        </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}


export default LoginScreen