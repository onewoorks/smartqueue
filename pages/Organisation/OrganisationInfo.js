import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import {
    Container,
    Button,
    Title,
    Header,
    Content,
    Card,
    CardItem,
    Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import SmartQTheme from '../../Themes/default';

var Config = require("../../config");

var REQUEST_URL = Config.BASE_URL;
var IMAGE_URL = Config.IMAGE_URL

var style = require('../../Themes/Style');
var height = Dimensions
    .get('window')
    .height;

export default class OrganisationInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageHeight: (height / 2),
            orgsid: this.props.orgid
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL + '/organisation.json?imi-info=' + this.props.orgid , { method: "GET" }).then((response) => {
            return response.json()
        }).then((responseData) => {
            return responseData;
        }).then((data) => {
            this.setState({
                fullData: data,
                orgName: data
                    .name
                    .toUpperCase(),
                orgAddress: data.address_1 + ', ' + data.address_2,
                orgDaerah: data.daerah,
                orgNegeri: data.negeri,
                orgQueue: data.que_no,
                orgCurrent: data.current_no,
                orgWaitingTime: (data.que_no - data.current_no) * 10,
                orgEstimate: data.estimate,
                orgImage: data.ref_code,
                latitude: data.latitude,
                longitude: data.longitude,
                ramaining: data.max_out - data.que_no
            })
            console.log(data)
        }).done();
    }

    render() {
        const goToPreRegister = () => Actions.preRegister({org_data: this.state.fullData});
        var imageUri = IMAGE_URL + this.state.orgImage + '1.jpg';
        return (
            <Container theme={SmartQTheme}>
                <Header>
                    <Button transparent onPress={() => Actions.listing()}>
                        <Icon
                            name='ios-list-outline'
                            style={{
                                color: '#fff'
                            }} />
                    </Button>
                    <Title style={{
                        color: '#fff'
                    }}>INFORMATION</Title>
                </Header>

                <View style={{ flex:1, flexDirection:'row'}}>
                    <Content style={{ padding: 8 }}>
                        <Card >
                            <CardItem>
                                <Text style={style.textTitle}>{this.state.orgName}</Text>
                                <Text style={style.textSubtitle} note>{this.state.orgAddress}</Text>
                            </CardItem>

                            <CardItem >
                                <Image
                                    style={{
                                        width: null,
                                        height: height / 3.5,
                                        resizeMode: 'cover'
                                    }}
                                    source={{ uri: imageUri }} />
                            </CardItem>

                            <CardItem cardBody>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row'
                                    }}>
                                    <View
                                        style={{
                                            flex: 0.7,
                                            flexDirection: 'row',
                                            marginTop: 10
                                        }}>
                                        <Icon
                                            name='ios-star-outline'
                                            style={{
                                                fontSize: 16
                                            }} />
                                        <Icon
                                            name='ios-star-outline'
                                            style={{
                                                fontSize: 16
                                            }} />
                                        <Icon
                                            name='ios-star-outline'
                                            style={{
                                                fontSize: 16
                                            }} />
                                        <Icon
                                            name='ios-star-outline'
                                            style={{
                                                fontSize: 16
                                            }} />
                                        <Icon
                                            name='ios-star-outline'
                                            style={{
                                                fontSize: 16
                                            }} />
                                        <Text
                                            style={[
                                                {
                                                    marginLeft: 15
                                                },
                                                style.textSubtitle
                                            ]}>92 reviews</Text>
                                    </View>
                                    <View
                                        style={{
                                            alignItems: 'flex-end'
                                        }}>
                                        <Button transparent onPress={() => Actions.orgMap({ org_data: this.state.fullData })}>
                                            <Icon
                                                name='ios-pin'
                                                style={{
                                                    color: '#005e2d',
                                                    fontSize: 30
                                                }} />
                                        </Button>
                                    </View>
                                    <View
                                        style={{
                                            alignItems: 'flex-end'
                                        }}>
                                        <Button transparent onPress={() => Actions.orgDetail({ orgid: this.props.orgid })}>
                                            <Icon
                                                name='ios-information-circle'
                                                style={{
                                                    color: '#005e2d',
                                                    fontSize: 30
                                                }} />
                                        </Button>
                                    </View>
                                </View>

                            </CardItem>
                        </Card>

                        <View style={style.informationRemaining}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 20, color: '#fff' }}>Remaining</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={style.informationRemainingText}>{this.state.ramaining}</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#005e2d',
                                    padding: 10
                                }}>
                                <View
                                    style={{
                                        flex: 0.3,
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: '#fff'
                                        }}>Total</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 0.3,
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: '#fff'
                                        }}>Status</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 0.4,
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: '#fff'
                                        }}>Estimate</Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 10,
                                    borderWidth: 1,
                                    borderColor: '#005e2d'
                                }}>
                                <View
                                    style={{
                                        flex: 0.3,
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 24
                                        }}>{this.state.orgQueue}</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 0.3,
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 24
                                        }}>{this.state.orgCurrent}</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 0.4,
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 24
                                        }}>{this.state.orgEstimate}</Text>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 30
                            }}>
                            <View
                                style={{
                                    flex: 0.6,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Text
                                    style={{
                                        fontSize: 26,
                                        fontFamily: 'Arial Rounded MT Bold'
                                    }}>Get Your Q No.</Text>
                            </View>
                            <View
                                style={{
                                    flex: 0.3,
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                <Button
                                    style={{
                                        backgroundColor: '#005e2d',
                                        width: 100
                                    }}
                                    onPress={goToPreRegister}>GET Q</Button>
                            </View>
                        </View>
                    </Content>
                </View>

            </Container>
        );
    }
}