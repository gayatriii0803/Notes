import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { navigate, navigationRef } from '../navigators/RootNavigation';
import auth from '@react-native-firebase/auth';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'





const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword,setshowConfirmedPassword]=useState(false);

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        ToastAndroid.show('Welcome to NotesApp', ToastAndroid.SHORT);
        console.log('User account created & signed in!');
        navigate('HomeScreen');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          ToastAndroid.show('Email address is already in use', ToastAndroid.SHORT);
        }

        if (error.code === 'auth/invalid-email') {
          ToastAndroid.show('That Email address is invalid', ToastAndroid.SHORT);
        }
      });
  };

  const validate = () => {
    if (email.length === 0) {
      ToastAndroid.show('Please provide Email address', ToastAndroid.SHORT);
      return false;
    }
    if (password !== confirmPassword) {
      ToastAndroid.show('Both passwords must be the same', ToastAndroid.SHORT);
      return false;
    }
    if (password.length < 6) {
      ToastAndroid.show('Password must be at least 6 characters', ToastAndroid.SHORT);
      return false;
    }

    return true;
  };

  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <View style={{ marginBottom: hp(6) }}>
      <FontAwesome
        name={'book'}
        size={70}
        color="gray"
        style={{textAlign:'center'}}/>
        <Text style={{ fontSize: 30, textAlign: 'center', color: 'black' }}>Welcome</Text>
      </View>
      <View style={{ marginHorizontal: wp(3) }}>
        <View>
          <Text style={{ fontSize: 15, marginLeft: wp(8), color: 'black' }}>Email</Text>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            style={{
              borderColor: '#C2B2B2',
              borderWidth: 1,
              marginHorizontal: wp(4),
              paddingHorizontal: wp(2),
              marginBottom: 10,
              paddingLeft: wp(5),
              marginTop: hp(1),
              color: 'black',
              borderRadius: 20
            }}
            placeholderTextColor={'grey'}
            placeholder='Enter your email'
            autoCapitalize='none'
          />
        </View>
        <View>
          <Text style={{ fontSize: 15, marginLeft: wp(8), color: 'black', marginTop: hp(2) }}>Password</Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', borderColor: '#C2B2B2',
            borderWidth: 1, marginHorizontal: wp(4), paddingHorizontal: wp(2), marginBottom: 10,
            paddingLeft: wp(5), marginTop: hp(1), color: 'black', borderRadius: 20
          }}>
            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              style={{ color: 'black', flex: 1 }}
              placeholder='Enter password'
              placeholderTextColor={'grey'}
              autoCapitalize='none'
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={{ justifyContent: 'center' }}
              onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 15, marginLeft: wp(8), color: 'black', marginTop: hp(2) }}>Confirm Password</Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', borderColor: '#C2B2B2',
            borderWidth: 1, marginHorizontal: wp(4), paddingHorizontal: wp(2), marginBottom: 10,
            paddingLeft: wp(5), marginTop: hp(1), color: 'black', borderRadius: 20
          }}>
            <TextInput
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              style={{ color: 'black', flex: 1 }}
              placeholder='Confirm password'
              placeholderTextColor={'grey'}
              autoCapitalize='none'
              secureTextEntry={!showConfirmedPassword}
            />
            <TouchableOpacity
              style={{ justifyContent: 'center' }}
              onPress={() => setshowConfirmedPassword(!showConfirmedPassword)}>
               <Ionicons
                name={showConfirmedPassword? 'eye' : 'eye-off'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              if (validate()) {
                createUser();
              }
            }}
            style={{
              backgroundColor: '#b4d1eb',
              borderRadius: wp(5),
              width: wp(30),
              height: hp(7),
              alignContent: 'center',
              justifyContent: 'center',
              borderWidth: 1,
            }}>
            <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', padding: 3 }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: hp(4), alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' ,color:'grey'}}>Already have an account? </Text>
          <TouchableOpacity
            style={{ marginLeft: wp(1) }}
            onPress={() => { navigationRef.goBack() }}>
            <Text style={{ textAlign: 'center', fontSize: 15, color: 'black' }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default RegisterScreen;
