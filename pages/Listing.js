import React, {Component} from 'react';
import {AppRegistry, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Tabs
} from 'native-base';

import SmartQTheme from '../Themes/default';

import NearestList from './NearestList'
import AlphabetList from './AlphabetList'
import QueueList from './QueueList';

var deviceHeight = Dimensions
  .get('window')
  .height;
var ScrollableTabView = require('react-native-scrollable-tab-view');
import {Actions} from 'react-native-router-flux';

export default class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: deviceHeight - 64
    }
  }
  render() {
    return (
      <Container theme={SmartQTheme}>
        <Header>
          <Button transparent onPress={()=>Actions.department()}>
            <Image source={require('../assets/logo-top.png')}/>
          </Button>
          <Title style={{color:'white'}}>{this.props.title.toUpperCase()}</Title>
          <Button transparent>
            <Icon
              name='ios-search'
              style={{
              color: '#fff'
            }}
              onPress={Actions.search}/>
          </Button>
        </Header>
        <Content>
          <ScrollableTabView
            style={{ height: this.state.height}}
            initialPage={2}
            tabBarTextStyle={{
            color: '#fff',
            fontSize: 15
          }}
            tabBarBackgroundColor={'#B70B4E'}>
            <NearestList tabLabel="KM"/>
            <AlphabetList tabLabel="A-Z"/>
            <QueueList tabLabel="No. Q"/>
          </ScrollableTabView>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('NativeBase', () => NativeBase);