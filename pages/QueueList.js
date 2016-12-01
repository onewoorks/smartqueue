import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  ScrollView,
  Image,
  TabBarIOS,
  Card,
  TouchableOpacity,
  PixelRatio
} from 'react-native';
import {Content, List, ListItem} from 'native-base';
import Config from 'react-native-config';
import {Actions} from 'react-native-router-flux';

var REQUEST_URL = Config.API_URL;
var style = require('../Themes/Style');

export default class NearestList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      organisation: false
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL + "/organisation.json?quesort", {method: "GET"}).then((response) => response.json()).then((responseData) => {
      this.setState({
        dataSource: this
          .state
          .dataSource
          .cloneWithRows(responseData),
        loaded: false,
        noclinic: false
      })
    }).done();
  }

  render() {
    return this.renderOrganisation();
  }

  renderRow(rowData) {
    const organisationPage = () => Actions.orgInfo({orgid: rowData.id});
    return (
      <View style={style.listContainer}>
        <View style={style.infoArea} >
        <TouchableOpacity onPress={organisationPage}>
          <Text
            style={style.listTitle} onPress={organisationPage}>{rowData
              .name
              .toUpperCase()}</Text>
          <Text style={style.infoSubtext}>
            {rowData.alamat},{rowData.daerah},{rowData.negeri}
          </Text>
          </TouchableOpacity>
        </View>
        <View style={style.totalArea}>
          <Text style={style.listTitleCounter}>Total</Text>
          <Text style={style.listBigNoCounter}>{rowData.que_no}</Text>
        </View>
        <View style={style.statusArea}>
          <Text style={style.listTitleCounter}>Current</Text>
          <Text style={style.listBigNoCounter}>{rowData.current_no}</Text>
        </View>
      </View>
    )
  }

  renderOrganisation() {
    return (<ListView renderRow={this.renderRow} dataSource={this.state.dataSource}/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
