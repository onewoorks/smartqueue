'use strict';
import React from 'react';
import {StyleSheet, PixelRatio} from 'react-native';

module.exports = StyleSheet.create({
    textTitle : {
        fontFamily:'Arial Rounded MT Bold',
        fontWeight: "600"
    },
    textSubtitle: {
        fontSize:12,
        color: '#999'
    },
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#d6d7da',
        paddingTop: 8,
        paddingBottom: 14,
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: 14,
        marginLeft: 14,
        marginRight: 14
    },
    listTitle: {
        fontSize: 14,
        fontFamily:'Arial Rounded MT Bold',
        color: '#B70B4E'
    },
    infoSubtext: {
        color: '#575756',
        fontSize: 12
    },
    totalArea: {
        margin: 3,
        backgroundColor: '#B70B4E',
        flex: 0.15,
        height: 45,
        alignItems: 'center',
        borderRadius: 10 / PixelRatio.get()
    },
    distanceArea:{
        margin: 3,
        backgroundColor: '#89AA65',
        flex: 0.12,
        height: 45,
        alignItems: 'center',
        borderRadius: 10 / PixelRatio.get()
    },
    alphabetArea:{
        margin: 3,
        paddingTop:8,
        paddingBottom:6,
        backgroundColor: '#4AB2CF',
        flex: 0.12,
        alignItems: 'center',
        borderRadius: 10 / PixelRatio.get()
    },
    infoArea: {
        flex: 0.7,
        paddingRight: 5
    },
    statusArea: {
        margin: 3,
        backgroundColor: '#F39200',
        flex: 0.15,
        height:45,
        alignItems: 'center',
        borderRadius: 10 / PixelRatio.get()
    },
    listTitleCounter: {
        color: '#fff',
        paddingTop: 4,
        fontSize: 9
    },
    listBigNoCounter: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '400',
        paddingBottom: 4,
        paddingTop: 4
    },
    footerBackground:{
        backgroundColor:'#B70B4E',
    },
    content: {
        padding:8
    }
});