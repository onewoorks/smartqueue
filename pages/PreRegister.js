import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    Container,
    Header,
    Content,
    Input,
    Image,
    Title, Card, CardItem,
    Icon, InputGroup,
    Button} from 'native-base';
import SmartQTheme from '../Themes/default';
import { Actions } from 'react-native-router-flux'

export default class PreRegister extends Component {
    constructor(props){
        super(props);
        this.state = {
            detailInfo: false,
            submitText: 'Submit',
            processing: false,
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
        return(
             <Container theme={SmartQTheme}>
                <Header>
                    <Title style={{color:'#fff'}}>Pre Register</Title>
                </Header>
                <Content>
                    <View style={{margin:20, marginTop:50}}>
                        <Text style={{marginBottom:20}}>ID No</Text>
                        <InputGroup borderType='regular'>
                            <Input placeholder='Identification Number'
                                />
                        </InputGroup>
                        
                        <View style={{flex:1, flexDirection:'row', marginTop:30}}>
                            <View style={{flex:0.6, justifyContent:'center'}}>
                            { this.state.processing ? 
                                <View style={{flex:1, flexDirection:'row'}}>
                                    <View style={{flex:0.2, justifyContent:'center'}}>
                                        <Icon name='ios-sync' />
                                    </View>
                                    <View style={{flex:0.8, justifyContent:'center'}}>
                                        <Text>processing...</Text>
                                    </View>
                                </View>
                                :null}
                            </View>
                            <View style={{justifyContent:'flex-end'}}>
                                <Button style={styles.buttonColor} onPress={this.openDetail}>{this.state.submitText}</Button>
                            </View>
                        </View>
                        
                        { this.state.detailInfo ? 
                        <Card style={{marginTop:50}}>
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
                        
                        : null }
                        
                        <View style={{marginTop:20, flexDirection:'row', justifyContent:'flex-end'}}>
                        { this.state.detailInfo ? 
                        <Button 
                            style={styles.buttonColor} 
                            onPress={()=>Actions.department()}>Proceed</Button>
                            : null }
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
        backgroundColor : '#B70B4E',
        width: 90
    }
});