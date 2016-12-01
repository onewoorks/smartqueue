import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Onboarding from 'react-native-simple-onboarding';
import { Actions } from 'react-native-router-flux';
import Config from 'react-native-config';

export default class OnboardingScreen extends Component {
  render() {
    const goToLogin = () => Actions.login();
    return (
      <Onboarding
            pages={[
                {   backgroundColor: '#B70B4E', 
                    image:<Image 
                              source={require('../assets/onboarding-2.png')} 
                              style={{height:261, width:196}} />,
                    title: '',
                    subtitle: 'Queue system make your treatment waiting easy, Wait anywhere you like!'},
                {   backgroundColor: "#B70B4E",
                    image:<Image 
                              source={require('../assets/onboarding-1.png')} 
                              style={{height:280, width:240}} />, 
                    title: '', 
                    subtitle: 'Queue system make your treatment waiting easy. Wait anywhere you like!' }
            ]}
            onEnd={goToLogin}
/>
    );
  }
}
