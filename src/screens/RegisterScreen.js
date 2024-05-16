import { View, Text,TextInput,TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { navigate, navigationRef } from '../navigators/RootNavigation';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import auth from '@react-native-firebase/auth';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';

const RegisterScreen = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
 

const createUser = () =>{
    auth()
  .createUserWithEmailAndPassword(email,password)
  .then(() => {
    ToastAndroid.show('Welcome to NotesApp',ToastAndroid.SHORT);
    console.log('User account created & signed in!');
    navigate('HomeScreen')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
     ToastAndroid.show('Email address is already in use');
    }

    if (error.code === 'auth/invalid-email') {
      ToastAndroid.show('That Email address is invalid',ToastAndroid.SHORT);
    }

    
  });

  }

  const validate = () => {
    if(email.length===0){
      ToastAndroid.show('Please provide Email address',ToastAndroid.SHORT);
      return false
    }
    if(password.length!=confirmPassword.length){
      ToastAndroid.show('Both password must be same',ToastAndroid.SHORT);
      return false
    }
    if(password.length<6){
      ToastAndroid.show('Password must be atleast 6 characters',ToastAndroid.SHORT);
      return false
    }
    
    
    return true
  }

  return (
    <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
      <View style={{marginBottom:hp(6)}}>
      <Text style={{fontSize: 30,textAlign: 'center',color:'black'}}>Welcome</Text>
      
    </View>
    <View style={{marginHorizontal:wp(3)}}>
      <View>
  <Text style={{fontSize:15,marginLeft: wp(8), color: '#545454'}}>Email</Text>
  <TextInput
  value={email}
  onChangeText={text=>setEmail(text)}
  style={{borderColor: '#C2B2B2',
  borderWidth: 1,
  marginHorizontal:wp(4),
  paddingHorizontal: wp(2),
  marginBottom: 10,
  // marginLeft: 12,
  paddingLeft:wp(5),
  marginTop: hp(1),
  color:'black',
  borderRadius:20}}
    placeholder='Enter your email'
    autoCapitalize='none'
    />
    </View>
      {/* <Text>Enter your mobile number</Text>
  <TextInput
    style={{height:40,width:300,borderColor:'gray',borderWidth:1,alignSelf:'center',
marginBottom:20,paddingHorizontal:10,borderRadius:7}}
    placeholder='Enter your mobile number'
    autoCapitalize='none'
    /> */}
    <Text style={{ fontSize: 15,marginLeft: wp(8), color: '#545454', marginTop: hp(2)}}>Password</Text>
  <TextInput
  value={password}
  onChangeText={text=>setPassword(text)}
  secureTextEntry
    style={{borderColor: '#C2B2B2',
    borderWidth: 1,
    marginHorizontal:wp(4),
    paddingHorizontal: wp(2),
    marginBottom: 10,
    // marginLeft: 12,
    paddingLeft:wp(5),
    marginTop: hp(1),
    color:'black',
    borderRadius:20}}
    placeholder='Enter your password'
    autoCapitalize='none'
    />
    <Text style={{ fontSize: 15,marginLeft: wp(8), color: '#545454', marginTop: hp(2)}}>Confirm password</Text>
  <TextInput
  value={confirmPassword}
  onChangeText={text=>setConfirmPassword(text)}
  secureTextEntry
    style={{borderColor: '#C2B2B2',
    borderWidth: 1,
    marginHorizontal:wp(4),
    paddingHorizontal: wp(2),
    marginBottom: 10,
    // marginLeft: 12,
    paddingLeft:wp(5),
    marginTop: hp(1),
    color:'black',
    borderRadius:20}}
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
    style={{backgroundColor:'#b4d1eb',
    borderRadius: wp(5),
    width: wp(30),
    height:hp(7),
    alignContent:'center',
    justifyContent:'center',
    borderWidth: 1,}}>
    <Text style={{color: 'black',fontSize: 16,textAlign: 'center',padding:3}}>SIGN UP</Text>
   </TouchableOpacity>
    </View>
    <View style={{flexDirection: 'row', marginTop: hp(4),alignContent:'center',alignItems:'center',justifyContent:'center'}}>
    <Text style={{textAlign:'center'}}>Already have an account? </Text>
    <TouchableOpacity
    style={{marginLeft:wp(1)}}
    onPress={()=>{navigationRef.goBack()}}>
    <Text style={{textAlign: 'center', fontSize: 15,color:'black'}}>Log In</Text>
    </TouchableOpacity>
    </View>
  
    </View>
</View>
  )
}

export default RegisterScreen