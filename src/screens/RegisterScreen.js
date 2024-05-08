import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { navigate, navigationRef } from '../navigators/RootNavigation';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import auth from '@react-native-firebase/auth';

const RegisterScreen = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

const createUser = () =>{
    auth()
  .createUserWithEmailAndPassword(email,password)
  .then(() => {
    console.log('User account created & signed in!');
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
    if(email.length!=0 && password===confirmPassword && password.length>=6){
      return true
    }
    return false
  }

  return (
    <View style={{margin:30,justifyContent:'center',flex:1}}>
        
    <Text style={{alignSelf:'center', fontSize:25,marginTop:20,color:'black'}}>Hello!</Text>
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
      {/* <Text>Enter your mobile number</Text>
  <TextInput
    style={{height:40,width:300,borderColor:'gray',borderWidth:1,alignSelf:'center',
marginBottom:20,paddingHorizontal:10,borderRadius:7}}
    placeholder='Enter your mobile number'
    autoCapitalize='none'
    /> */}
    <Text>Enter your password</Text>
  <TextInput
  value={password}
  onChangeText={text=>setPassword(text)}
  secureTextEntry
    style={{height:40,width:300,borderColor:'gray',borderWidth:1,alignSelf:'center',
paddingHorizontal:10,borderRadius:7,marginBottom:20}}
    placeholder='Enter your password'
    autoCapitalize='none'
    />
    <Text>Enter your confirm password</Text>
  <TextInput
  value={confirmPassword}
  onChangeText={text=>setConfirmPassword(text)}
  secureTextEntry
    style={{height:40,width:300,borderColor:'gray',borderWidth:1,alignSelf:'center',
paddingHorizontal:10,borderRadius:7,marginBottom:20}}
    placeholder='Enter your confirm password'
    autoCapitalize='none'
    />
   
    <View style={{alignItems:'center'}}>
    <TouchableOpacity
    onPress={()=>{
      if(validate()){
        createUser()
      }
       }}
    style={{backgroundColor:'pink',height:40,width:100,borderRadius:15,alignItems:'center'}}>
        <Text style={{alignSelf:'center',padding:7,color:'black'}}>Sign Up</Text>

    </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <Text style={{alignSelf:'center'}}>Already have an account? </Text>
    <TouchableOpacity
        onPress={()=>{navigationRef.goBack()}}>
    <Text style={{alignSelf:'center'}}>Log In</Text>
    </TouchableOpacity>
    </View>
  
    </View>
</View>
  )
}

export default RegisterScreen