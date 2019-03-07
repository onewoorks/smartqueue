import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import * as config from './pages/Config';

import Onboard from './pages/OnboardingScreen';
import PreRegister from './pages/PreRegister';
import Login from './pages/Login';
import Department from './pages/Department';
import Listing from './pages/Listing';
import Search from './pages/Search';
import OrgInfo from './pages/Organisation/OrganisationInfo';
import OrgDetail from './pages/Organisation/OrganisationDetail';
import OrgMap from './pages/Organisation/OrganisationMap';
import MyNumber from './pages/MyNumber';

import { Actions, Scene, Router } from 'react-native-router-flux';

const scene = Actions.create(
  <Scene key='root'>
    <Scene key='onboard' component={Onboard} hideNavBar={true} panHandlers={null} initial />
    <Scene key='login' component={Login} hideNavBar={true} panHandlers={null} />
    <Scene key='preRegister' component={PreRegister} panHandlers={null} />
    <Scene key='department' component={Department} panHandlers={null} />
    <Scene
      key='listing'
      component={Listing}
      title='Listing'
      hideNavBar={true}
      panHandlers={null} />
    <Scene key='search' component={Search} title='Searching' panHandlers={null} />
    <Scene
      key='orgInfo'
      component={OrgInfo}
      title='Information'
      panHandlers={null} />
    <Scene
      key='orgDetail'
      component={OrgDetail}
      title='Information'
      panHandlers={null} />
    <Scene key='orgMap' component={OrgMap} title='Information' panHandlers={null} />
    <Scene
      key='myNumber'
      component={MyNumber}
      hideNavBar={true}
      panHandlers={null} />
  </Scene>
)

export default class NativeBase extends Component {
  render() {
    return (
      <Router scenes={scene} />);
  }
}

AppRegistry.registerComponent('NativeBase', () => NativeBase);