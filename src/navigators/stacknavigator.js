import React from "react";
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { actionCreators } from "@actions";
// import { bindActionCreators } from "redux";
// import * as Screen from '@screens'
// import DrawerTab from "./drawerNavigator";
import { navigate, navigationRef } from './RootNavigation';
import HomeScreen from "../screens/HomeScreen";
import SemesterScreen from "../screens/SemesterScreen";
import SubjectScreen from "../screens/SubjectScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import PdfViewer from "../screens/PdfViewer";
// import HomeScreen from "../../screens/HomeScreen";
// import VideosScreen from "../../screens/VideosScreen";
// import ShopByPrice from "../../screens/ShopByPrice";
// import LandingScreen from "../../screens/LandingScreen";
// import ProfileScreen from "../../screens/ProfileScreen";
// import SettingScreen from "../../screens/SettingScreen";
// import CheckoutScreen from "../../screens/CheckoutScreen";
// import WelcomeScreen from "../../screens/WelcomeScreen";
// import MoreInfo from "../../screens/MoreInfo";
// import FlashMessage from "react-native-flash-message";
// import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
// import { connect } from "react-redux";
// import { Fonts } from "../assets";
// import { Colors } from "../constants/colors";
// import { StatusBar } from "react-native";
// import { TouchableOpacity } from "react-native";
// import SplashScreen from "react-native-splash-screen"

const Stack = createNativeStackNavigator();

class StackNavigator extends React.Component {
    // _addScreen(name) {
    //     return (
    //         <Stack.Screen
    //             name={name}
    //             component={Screen[name]}
    //         />)
    // }


    componentDidMount() {
        // this.flashMsgRef && this.flashMsgRef.showMessage({
        //     message: "hello Callig",
        //     type: 'danger',
        //     duration: 2000,
        //     titleStyle: {
        //         fontSize: 16,
        //         fontFamily: Fonts.Regular,
        //         color: Colors.Black
        //     },
        //     icon: "danger",
        //     style: {
        //         borderTopRightRadius: 15,
        //         borderTopLeftRadius: 15
        //     }
        // })
    }

    render() {
        // console.log("Calling data :",this.props.CallingData);
        return (
            <View style={{ flex: 1 }}>

                {/* {this.props.isCallingStart == "true" &&
                    <TouchableOpacity
                        onPress={() => {

                            if (this.props.CallingData.isgroupCall + "" == "true") {
                                navigate('GroupCall', this.props.CallingData);
                            } else {
                                navigate('OneToOneCall', this.props.CallingData);
                            }
                        }}
                        style={{ paddingVertical: heightPercentageToDP(2), backgroundColor: 'green', width: widthPercentageToDP(100), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <Text style={{ color: 'white' }}>{this.props.CallingData.group_name || this.props.CallingData?.calllerData?.fname || this.props.CallingData.user.fname}</Text>
                        <Text style={{ color: 'white' }}>{this.props.CallingData.type == "audio" ? "audio call" : "video call"}</Text>
                    </TouchableOpacity>} */}
                <NavigationContainer ref={navigationRef} 
                
                >
                    <Stack.Navigator
                        initialRouteName="LoginScreen"
                        // screenOptions={{
                        //     headerShown: false,
                        //     title: "",
                        //     headerLeft: null,
                        //     headerBackVisible: true
                        // }}
                    >
                        {/* {this._addScreen('SplashScreen')} */}
                        {/* <Stack.Screen name={"BottomTab"} component={BottomTabNav} options={{ headerShown: false }} /> */}
                        {/* <Stack.Screen name={"DrawerTab"} component={DrawerTab} options={{ headerShown: false, }} /> */}


                        {/* Authentication */}
                        <Stack.Screen
                            name='LoginScreen'
                            component={LoginScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='RegisterScreen'
                            component={RegisterScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='HomeScreen'
                            component={HomeScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='SemesterScreen'
                            component={SemesterScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='SubjectScreen'
                            component={SubjectScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='PdfViewer'
                            component={PdfViewer}
                            options={{ headerShown: false }} 
                        />
                        {/* <Stack.Screen
                            name='RegisterScreen'
                            component={RegisterScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='HomeScreen'
                            component={HomeScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='VideosScreen'
                            component={VideosScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='CheckoutScreen'
                            component={CheckoutScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='ShopByPrice'
                            component={ShopByPrice}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='LandingScreen'
                            component={LandingScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='ProfileScreen'
                            component={ProfileScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='Settings'
                            component={SettingScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='MoreInfo'
                            component={MoreInfo}
                            options={{ headerShown: false }} 
                        /> */}
                        </Stack.Navigator>
                </NavigationContainer>

            </View>
        )
    }
} 
// const mapStatetoProps = (state) => {
//     return {
//         isCallingStart: state.redState.isCallingStart,
//         CallingData: state.redState.CallingData,
//     };
// };

// const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
export default StackNavigator;