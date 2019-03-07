import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {
    Container,
    Header,
    Content,
    Input,
    Title, Card, CardItem,
    Icon, InputGroup,
    Button} from 'native-base';
import SmartQTheme from '../Themes/default';
import { Actions } from 'react-native-router-flux'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

var style = require('../Themes/Style');

export default class PreRegister extends Component {
    constructor(props){
        super(props);
        this.state = {
            detailInfo: false,
            submitText: 'Submit',
            processing: false,
            org: this.props.org_data
        },
        this.openDetail = this.openDetail.bind(this);
    }

    openDetail(){
        this.setState({
            detailInfo: true,
            submitText: 'Clear'
        })
    }

    render(){
        const goToListing = () => Actions.listing()
        const getMyNumber = () => Actions.myNumber({ orgid: this.state.org.id });
        const goToDepartment = () => Actions.department()
        return(
             <Container theme={SmartQTheme}>
                <Header>
                    <Title style={{color:'#fff'}}>PRE REGISTER</Title>
                </Header>
                <Content>
                    <View style={{ margin:15}}>
                        <View >
                            <Text style={{ marginBottom: 15 }}>ID No</Text>
                            <InputGroup borderType='regular'>
                                <Input placeholder='Identification Number'
                                />
                            </InputGroup>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <View style={{ marginTop: 10 }}>
                                <Button style={style.buttonColor} onPress={this.openDetail}>{this.state.submitText}</Button>
                            </View>
                        </View>
                        {this.state.detailInfo ?
                            <Card style={{ marginTop:10}}>
                                <CardItem>
                                    <Text style={styles.labelFirst}>Name</Text>
                                    <Text>Aminah Bte Ali</Text>

                                    <Text style={styles.label}>Date Of Birth</Text>
                                    <Text>02 April 1978</Text>

                                    <Text style={styles.label}>Address</Text>
                                    <Text>No 8 Jalan 7/5, Taman Bahagia</Text>
                                    <Text>Subang Jaya, Selangor</Text>
                                </CardItem>
                            </Card>
                            :null}
                    </View>


                    <View style={ [{top:deviceHeight-113, 
                        position:'absolute', 
                        width:deviceWidth}, style.buttonColor]}>
                        <View style={{alignItems:'center'}}>
                            {this.state.detailInfo ?
                                    <TouchableOpacity onPress={getMyNumber}>
                                    <Text style={{ 
                                        fontSize: 18, 
                                        paddingTop: 14, 
                                        paddingBottom: 14, color:'#fff',
                                        fontWeight:'bold' }}>GET MY NUMBER</Text>
                                    </TouchableOpacity>
                                : null}
                        </View>
                    </View> 
                </Content>
            </Container>
        )
    }

    renderx() {
        const goToListing = () => Actions.listing()
        const getMyNumber = () => Actions.myNumber({ orgid: this.state.org.id });
        const goToDepartment = () => Actions.department()
        return (
            <Container theme={SmartQTheme}>
                <Header>
                    <Title style={{ color: '#fff' }}>PRE REGISTER</Title>
                </Header>
                <Content>
                    <View style={{ justifyContent: 'space-between' }}>
                        <View style={{ margin: 20, marginTop: 50 }}>
                            <Text style={{ marginBottom: 20 }}>ID No</Text>
                            <InputGroup borderType='regular'>
                                <Input placeholder='Identification Number'
                                />
                            </InputGroup>

                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ flex: 0.6, justifyContent: 'center' }}>
                                    {this.state.processing ?
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                                                <Icon name='ios-sync' />
                                            </View>
                                            <View style={{ flex: 0.8, justifyContent: 'center' }}>
                                                <Text>processing...</Text>
                                            </View>
                                        </View>
                                        : null}
                                </View>
                                {this.state.detailInfo ? null :
                                    <View style={{ justifyContent: 'flex-end' }}>
                                        <Button style={styles.buttonColor} onPress={this.openDetail}>{this.state.submitText}</Button>
                                    </View>
                                }

                                {this.state.detailInfo ? 
                                    <Card style={{ marginTop: 42 }}>
                                        <CardItem>
                                            <Text style={styles.labelFirst}>Name</Text>
                                            <Text>Aminah Bte Ali</Text>

                                            <Text style={styles.label}>Date Of Birth</Text>
                                            <Text>02 April 1978</Text>

                                            <Text style={styles.label}>Address</Text>
                                            <Text>No 8 Jalan 7/5, Taman Bahagia</Text>
                                            <Text>Subang Jaya, Selangor</Text>
                                        </CardItem>
                                    </Card>

                                    : null}
                            </View>

                            {this.state.detailInfo ?
                                <Card style={{ marginTop: 42 }}>
                                    <CardItem>
                                        <Text style={styles.labelFirst}>Name</Text>
                                        <Text>Aminah Bte Ali</Text>

                                        <Text style={styles.label}>Date Of Birth</Text>
                                        <Text>02 April 1978</Text>

                                        <Text style={styles.label}>Address</Text>
                                        <Text>No 8 Jalan 7/5, Taman Bahagia</Text>
                                        <Text>Subang Jaya, Selangor</Text>
                                    </CardItem>
                                </Card>

                                : null}

                        </View>

                        <View style={{}}>
                            {this.state.detailInfo ?
                                <View style={{
                                    flex: 1, backgroundColor: '#ddd', justifyContent: 'space-between', alignItems: 'center',
                                }}>
                                    <TouchableOpacity onPress={getMyNumber} style={{ height: 60 }}>
                                        <Text style={{ fontSize: 18, paddingTop: 14 }}>GET MY NUMBER</Text>
                                    </TouchableOpacity>
                                </View>
                                : null}
                        </View>

                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    labelFirst: {
        fontWeight:'600'
    },
    label: {
        marginTop:15,
        fontWeight: '600'
    },
    buttonColor: {
        backgroundColor : '#005e2d',
        width: 90
    }
});