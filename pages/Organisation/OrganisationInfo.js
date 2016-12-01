import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
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
import {Actions} from 'react-native-router-flux';
import SmartQTheme from '../../Themes/default';
import Config from 'react-native-config';

var style = require('../../Themes/Style');
var height = Dimensions
    .get('window')
    .height;

var REQUEST_URL = Config.API_URL;

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
        const getMyNumber = () => Actions.myNumber({orgid:this.props.orgid});

        return (
            <Container theme={SmartQTheme}>
                <Header>
                    <Button transparent onPress={() => Actions.listing()}>
                        <Icon
                            name='ios-list-outline'
                            style={{
                            color: '#fff'
                        }}/>
                    </Button>
                    <Title style={{
                        color: '#fff'
                    }}>INFORMATION</Title>
                </Header>

                <Content style={{
                    padding: 8
                }}>
                    <Card >
                        <CardItem>
                            <Text style={style.textTitle}>{this.state.orgName}</Text>
                            <Text style={style.textSubtitle} note>{this.state.orgAddress}, {this.state.orgDaerah}, {this.state.orgNegeri}</Text>
                        </CardItem>
                        <CardItem >
                            <Image
                                style={{
                                width: null,
                                height: height / 3.5,
                                resizeMode: 'cover'
                            }}
                                source={require('../../assets/klinikdesa.jpeg')}/>
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
                                    }}/>
                                    <Icon
                                        name='ios-star-outline'
                                        style={{
                                        fontSize: 16
                                    }}/>
                                    <Icon
                                        name='ios-star-outline'
                                        style={{
                                        fontSize: 16
                                    }}/>
                                    <Icon
                                        name='ios-star-outline'
                                        style={{
                                        fontSize: 16
                                    }}/>
                                    <Icon
                                        name='ios-star-outline'
                                        style={{
                                        fontSize: 16
                                    }}/>
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
                                    <Button transparent onPress={() => Actions.orgMap()}>
                                        <Icon
                                            name='ios-pin'
                                            style={{
                                            color: '#B70B4E',
                                            fontSize: 30
                                        }}/>
                                    </Button>
                                </View>
                                <View
                                    style={{
                                    alignItems: 'flex-end'
                                }}>
                                    <Button transparent onPress={() => Actions.orgDetail({orgid:this.props.orgid})}>
                                        <Icon
                                            name='ios-information-circle'
                                            style={{
                                            color: '#B70B4E',
                                            fontSize: 30
                                        }}/>
                                    </Button>
                                </View>
                            </View>

                        </CardItem>
                    </Card>

                    <View style={{
                        marginTop: 20
                    }}>
                        <View
                            style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#B70B4E',
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
                            borderColor: '#B70B4E'
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
                                backgroundColor: '#B70B4E',
                                width: 100
                            }}
                                onPress={getMyNumber}>Get It</Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}