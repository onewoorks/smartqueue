import React, {Component} from 'react';
import {Text} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Card,
    CardItem,
    Button,
    Icon
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import SmartQTheme from '../Themes/default';
import Drawer from 'react-native-drawer';

var style = require('../Themes/Style');

export default class Department extends Component {

    render() {
        return (
            <Container theme={SmartQTheme}>
                <Header>
                    <Title style={{
                        color: 'white'
                    }}>TRANSACTIONS</Title>
                </Header>
                <Content style={style.content}>
                    <Card>
                        <CardItem onPress={() => Actions.listing({title: 'Passport'})}>
                            <Text>Passport</Text>
                        </CardItem>
                        <CardItem onPress={() => Actions.listing({ title: 'Visa' })}>
                            <Text>Visa</Text>
                        </CardItem>
                        <CardItem onPress={() => Actions.listing({ title: 'PLS' })}>
                            <Text>PLS</Text>
                        </CardItem>
                        <CardItem onPress={() => Actions.listing({ title: 'Esd' })}>
                            <Text>ESD</Text>
                        </CardItem>
                        <CardItem onPress={() => Actions.listing({ title: 'PLKS' })}>
                            <Text>PLKS</Text>
                        </CardItem>
                        <CardItem onPress={() => Actions.listing({ title: 'PRA' })}>
                            <Text>PRA</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}