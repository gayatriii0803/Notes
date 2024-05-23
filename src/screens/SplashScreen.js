import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

class SplashScreen extends Component {
    constructor(props){
        super(props);
        this.state={
          user : auth().currentUser
        }
      }


    componentDidMount(){
    setTimeout(() => {
      this.navigateToMainApp();
    }, 2000);
    }
    navigateToMainApp() {
        if(this.state.user){
          this.props.navigation.replace('HomeScreen')
        } else {
          this.props.navigation.replace('LoginScreen');
        }
        // You can navigate to your main application screen here.
        // For example, you can use React Navigation to navigate to your main screen.
        // Replace 'MainAppScreen' with the name of your main screen component.
        // this.props.navigation.navigate('MainAppScreen');
      }
  render() {
    return (
      <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/book4.png')} style={{ height: wp(70), width: wp(70) }} />
        <Text style={{ fontSize: 30, color: 'black' }}>NOTES</Text>
      </View>
    );
  }
}

export default SplashScreen;
