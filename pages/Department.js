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
                    <Button transparent>
                        <Icon
                            name='ios-person-outline'
                            style={{
                            color: 'white',
                            fontSize: 30
                        }}/>
                    </Button>
                    <Title style={{
                        color: 'white'
                    }}>Jabatan</Title>
                </Header>
                <Content style={style.content}>
                    <Card>
                        <CardItem header>
                            <Text>Klinik Kesihatan</Text>
                        </CardItem>
                        <CardItem onPress={() => Actions.listing({title: 'Farmasi'})}>
                            <Text>Farmasi</Text>
                        </CardItem>
                        <CardItem onPress={() => Actions.listing({title: 'Rawatan Am '})}>
                            <Text>Rawatan Am</Text>
                        </CardItem>
                        <CardItem onPress={() => Actions.listing({title: 'Ibu dan Anak'})}>
                            <Text>Ibu dan Anak</Text>
                        </CardItem>
                    </Card>

                    <Card style={{
                        marginTop: 8
                    }}>
                        <CardItem header>
                            <Text>Klinik Desa</Text>
                        </CardItem>
                        <CardItem onPress={() => Actions.listing({title: 'Farmasi'})}>
                            <Text>Farmasi</Text>
                        </CardItem>
                        <CardItem onPress={() => Actions.listing({title: 'Ibu dan Anak'})}>
                            <Text>Ibu dan Anak</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}