import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {
    Container,
    Button,
    Title,
    Header,
    Content,
    Card,
    CardItem,
    Icon,
    Footer,
    FooterTab
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import SmartQTheme from '../../Themes/default';

var Config = require("../../config");

var REQUEST_URL = Config.BASE_URL;

var style = require('../../Themes/Style');

export default class OrganisationDetail extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL + '/organisation.json?imi-info=' + this.props.orgid, {method: "GET"}).then((response) => {
            return response.json()
        }).then((responseData) => {
            return responseData;
        }).then((data) => {
            this.setState({
                orgName: data
                    .name
                    .toUpperCase(),
                orgAddress: data.address_1 + ', ' + data.address_2,
                orgDaerah: data.town,
                orgNegeri: data.state,
                orgQueue: data.que_no,
                orgCurrent: data.current_no,
                orgWaitingTime: (data.que_no - data.current_no) * 10,
                orgEstimate: data.estimate,
                imageNo: data.ref_code
            })
        }).done();
    }

    render() {
        var imageUri = 'http://localhost/SmartQ/smartq/images/' + this.state.imageNo + '1.jpg';
        console.log(imageUri)
        return (
            <Container theme={SmartQTheme}>
                <Header>
                    <Button transparent onPress={() => Actions.orgInfo({orgid:this.props.orgid})}>
                        <Icon
                            name='ios-arrow-back'
                            style={{
                            color: '#fff'
                        }}/>
                    </Button>
                    <Title style={{
                        color: '#fff'
                    }}>IMIGRESEN</Title>
                </Header>

                <Content style={{
                    padding: 8
                }}>
                    <Card >
                        <CardItem>
                            <Text style={style.textTitle}>{this.state.orgName}</Text>
                            <Text style={style.textSubtitle} 
                                note>{this.state.orgAddress}, {this.state.orgDaerah}, {this.state.orgNegeri}</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image
                                style={{
                                resizeMode: 'cover', width:null
                            }}
                                source={{ uri: imageUri }}
                            />

                        </CardItem>

                        <CardItem>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={this.handleCall}><Icon name='ios-call'/>Call</Button>
                        <Button><Icon name='ios-map'/>Direction</Button>
                        <Button><Icon name='ios-car'  style={{color:'#fff'}}/>Transport</Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}