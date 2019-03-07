import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Onboarding from 'react-native-simple-onboarding';
import { Actions } from 'react-native-router-flux';

export default class OnboardingScreen extends Component {
  render() {
    const goToLogin = () => Actions.login();
    const goToDepartment = () => Actions.department()
    return (
        <Onboarding 
          pages={[
            {
              backgroundColor: '#005e2d',
              image: <Image
                source={require('../assets/imi-logo.png')}
                style={{ height: 261, width: 196 }} />,
              title: '',
              subtitle: 'Queue system make your waiting easy, Wait anywhere you like!'
            },
            {
              backgroundColor: "#005e2d",
              image: <Image
                source={require('../assets/queue.png')}
                style={{ height: 280, width: 240 }} />,
              title: '',
              subtitle: 'Queue system make your waiting easy. Wait anywhere you like!'
            }
          ]}
          onEnd={goToDepartment}
        />
      
    );
  }
}
