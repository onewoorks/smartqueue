import React, {Component} from 'react';
import {StyleSheet, MapView, Dimensions, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Container, Content, Button, Header, Title, Icon, Footer, FooterTab} from 'native-base';
import SmartQTheme from '../../Themes/default';

var Config = require("../../config");

var height = Dimensions.get('window').height;

export default class KKInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgsid: this.props.orgsid,
      url : 'https://onewoorks-solutions.com',
      org_data: this.props.org_data
    }
  }

  componentDidMount() { 
    // this.fetchData();
    navigator
      .geolocation
      .getCurrentPosition((position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({ initialPosition});
      }, (error) => alert(JSON.stringify(error)), {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      });
  }
  convertMinuteToHour() {
    var hours = (this.state.orgWaitingTime / 60);
    var minutes = (this.state.orgWaitingTime % 60);
    var hourStatement = '';
    var minuteStatement = '';
    var resultStatement = '';
    if (hours >= 1) {
      if (hours == 1) {
        hourStatement = hours + " hour ";
      } else {
        hourStatement = hours + " hours ";
      }

    }
    if (minutes > 0) {
      if (minutes == 1) {
        minuteStatement = minutes + " minute";
      } else {
        minuteStatement = minutes + " minutes";
      }

    }

    if (hours >= 1 && minutes > 0) {
      resultStatement = hourStatement + " and " + minuteStatement;
    }
    if (hours >= 1 && minutes == 0) {
      resultStatement = hourStatement;
    }
    if (hours < 1 && minutes > 0) {
      resultStatement = minuteStatement;
    }
    return resultStatement;
  }

  handleClick() {
    Alert.alert('test');
    // Linking.canOpenURL(this.state.url).then(supported => {
    //   if (supported) {
    //     Linking.openURL(this.state.url);
    //   } else {
    //     console.log('Don\'t know how to open URI: ' + this.props.url);
    //   }
    // });
  };
  handleCall(){
    Alert.alert('call +60 12 3312 221?');
  }

  render() {
    const organisationPage = () => Actions.orgInfo({ orgid: this.state.org_data.id });
    return (
      <Container theme={SmartQTheme}>
        <Header>
          <Button transparent onPress={organisationPage}>
            <Icon name='ios-arrow-back' style={{color:'#fff'}} />
          </Button>
          <Title style={{color:'#fff'}}>Information</Title>
        </Header>

        <Content>
        <MapView region={{
            latitude: 1.46078,
            longitude: 103.75828,
            latitudeDelta: 0,
            longitudeDelta: 0,
        }} style={styles.map} showsUserLocation={true} followUserLocation={true} />
        </Content>
        <Footer>
          <FooterTab>
          <Button onPress={this.handleCall}><Icon name='ios-call' />Call</Button>
          <Button><Icon name='ios-car'/>Transport</Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  map: {
    height: height-118
  },
  titleLagend: {
    fontWeight: 'bold'
  },
  preRegisterButton: {
    marginTop: 10,
    backgroundColor: '#0090f7'
  }
});
