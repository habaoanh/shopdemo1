import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import bannerImage from '../../../media/temp/banner.jpg';

const { width } = Dimensions.get('window');
export default class Collection extends Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ height: 50, justifyContent: 'center' }} >
                    <Text style={styles.textStyle} >SPRING COLLECTION</Text>
                </View>
                <TouchableOpacity style={{ flex: 4, justifyContent: 'flex-end' }} >
                <Image source={bannerImage} style={styles.imageStyle} />    
                </TouchableOpacity>
            </View>

        );
    }
}

//933 x 465
const imageWidth = width - 20;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#ffff',
        marginTop: 7,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth
    }
});
