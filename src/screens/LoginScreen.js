import { View, Text, TextInput, TouchableOpacity,ToastAndroid } from 'react-native'

import React, { useState } from 'react'
import { navigate } from '../navigators/RootNavigation'
import HomeScreen from './HomeScreen'
import auth from '@react-native-firebase/auth';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import AntDesign from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  

  const createUser = () =>{
    auth()
  .signInWithEmailAndPassword(email,password)
  .then(() => {
    ToastAndroid.show('Welcome to NotesApp',ToastAndroid.SHORT);
    console.log('User account signed in!');
    navigate('HomeScreen')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      ToastAndroid.show('Email address already in use',ToastAndroid.SHORT);
    }

    if (error.code === 'auth/invalid-email') {
      ToastAndroid.show('That Email address is invalid',ToastAndroid.SHORT);
    }
    else{
      ToastAndroid.show('Password was incorrect',ToastAndroid.SHORT);
    }

    
  });
}
const validate = () => {
  if(email.length===0){
    ToastAndroid.show('Please provide Email address',ToastAndroid.SHORT);
    return false
  }
  if(password.length===0){
  ToastAndroid.show('Please provide Password',ToastAndroid.SHORT);
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
        <FontAwesome
        name={'book'}
        size={70}
        color="gray"
        style={{textAlign:'center'}}/>
        
        <Text style={{fontSize: 30,textAlign: 'center',color:'black'}}>Welcome Back</Text>
        <Text style={{textAlign: 'center',fontSize:16,color:'gray'}}>Please enter your details to log in.</Text>
        </View>
        <View style={{marginHorizontal:wp(3)}}>
        <View>
      <Text style={{fontSize:15,marginLeft: wp(8), color: '#545454',color:'black'}}>Email</Text>
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
      borderRadius:20,}}
      placeholder='Enter your email'
      placeholderTextColor={'grey'}
      autoCapitalize='none'
        />
        </View>
        <View>
        <Text style={{ fontSize: 15,marginLeft: wp(8), color: '#545454', marginTop: hp(2),color:'black'}}>Password</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderColor: '#C2B2B2',
      borderWidth: 1,
      marginHorizontal:wp(4),
      paddingHorizontal: wp(2),
      marginBottom: 10,
      
      paddingLeft:wp(5),
      marginTop: hp(1),
      color:'black',
      borderRadius:20,}}>
      <TextInput
      value={password}
      onChangeText={text=>setPassword(text)}
        style={{color:'black'}}
        placeholderTextColor={'grey'}
        placeholder='Enter password'
        autoCapitalize='none'
        secureTextEntry={!showPassword}
        />
        <TouchableOpacity
        style={{justifyContent:'center'}}
        onPress={()=>setShowPassword(!showPassword)}>
         <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={24}
                color="gray"
              />
        </TouchableOpacity>
        </View>
        </View>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity
        onPress={()=>{
          if(validate()){
            createUser()
          }
           }}
        style={{
          backgroundColor:'#b4d1eb',
          borderRadius: wp(5),
          width: wp(30),
          height:hp(7),
          alignContent:'center',
          justifyContent:'center',
          borderWidth: 1,}}>
         <Text style={{color: 'black',fontSize: 16,textAlign: 'center',padding:3}}>LOG IN</Text>
         </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: hp(4),alignContent:'center',alignItems:'center',justifyContent:'center'}}>
        <Text style={{textAlign:'center',color:'gray'}}>Don't have an account yet? </Text>
        <TouchableOpacity
        style={{marginLeft:wp(1)}}
        onPress={()=>navigate('RegisterScreen')}>
        <Text style={{ textAlign: 'center', fontSize: 15,color:'black'}}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}


export default LoginScreen