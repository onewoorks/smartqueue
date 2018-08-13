import React, {Component} from 'react';
import {View, Text, StyleSheet, MapView, Dimensions, Linking, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Container, Content, Button, Card, CardItem, Header, Title, Icon, Footer, FooterTab} from 'native-base';
import SmartQTheme from '../../Themes/default';

var Config = require("../../config");

var REQUEST_URL = Config.BASE_URL+'/organisation.json?';
var height = Dimensions.get('window').height;

export default class KKInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgsid: this.props.orgsid,
      url : 'https://onewoorks-solutions.com'
    }
  }

  componentDidMount() {
    this.fetchData();
    navigator
      .geolocation
      .getCurrentPosition((position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
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

  fetchData() {
    fetch(REQUEST_URL + 'id=1', {method: "GET"}).then((response) => {
      return response.json()
    }).then((responseData) => {
      return responseData;
    }).then((data) => {
      this.setState({
        orgName: data
          .name
          .toUpperCase(),
        orgAddress: data.alamat,
        orgDaerah: data.daerah,
        orgNegeri: data.negeri,
        orgQueue: data.queue,
        orgWaitingTime: (data.queue * 10)
      })
    }).done();
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
    const pagePreRegister = () => Actions.preRegister({org_id: this.props.data})
    return (
      <Container theme={SmartQTheme}>
        <Header>
        <Button transparent
          onPress={() => Actions.orgInfo()}
        >
                        <Icon name='ios-arrow-back' style={{color:'#fff'}} />
                    </Button>
          <Title style={{color:'#fff'}}>Information</Title>
        </Header>
        <Content>
        <MapView style={styles.map} showsUserLocation={true} followUserLocation={true}/>
        </Content>
        <Footer>
          <FooterTab>
          <Button onPress={this.handleCall}><Icon name='ios-call-outline' />Call</Button>
          <Button><Icon name='ios-map-outline' />Direction</Button>
          <Button><Icon name='ios-car-outline'/>Transport</Button>
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
