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
import Config from 'react-native-config';

var style = require('../../Themes/Style');

var REQUEST_URL = Config.API_URL;

export default class OrganisationDetail extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL + '/organisation.json?id=' + this.props.orgid, {method: "GET"}).then((response) => {
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
                orgQueue: data.que_no,
                orgCurrent: data.current_no,
                orgWaitingTime: (data.que_no - data.current_no) * 10,
                orgEstimate: data.estimate
            })
        }).done();
    }

    render() {
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
                    }}>INFORMATION {this.props.orgid}</Title>
                </Header>

                <Content style={{
                    padding: 8
                }}>
                    <Card >
                        <CardItem>
                            <Text style={style.textTitle}>{this.state.orgName}</Text>
                            <Text style={style.textSubtitle} note>{this.state.orgAddress}, {this.state.orgDaerah}, {this.state.orgNegeri}</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image
                                style={{
                                resizeMode: 'cover', width:null
                            }}
                                source={require('../../assets/klinikdesa.jpeg')}
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

                        <CardItem cardBody>
                            <Image
                                style={{
                                resizeMode: 'cover',
                                width:null
                            }}
                                source={require('../../assets/klinikdesa.jpeg')}
                            />
                            
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={this.handleCall}><Icon name='ios-call-outline'/>Call</Button>
                        <Button><Icon name='ios-map-outline'/>Direction</Button>
                        <Button><Icon name='ios-car-outline'  style={{color:'#fff'}}/>Transport</Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}