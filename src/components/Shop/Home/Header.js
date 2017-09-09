import React, { Component } from 'react';
import {
    Text, View,
    Dimensions, Image, TouchableOpacity,
    TextInput, StyleSheet
} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

//chua bam hinh de chuyen sang drawer duoc, giai phap: truyen navigate qua props : OK
export default class Header extends Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={styles.iconStyle} />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="what do you want to buy?"
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    wrapper: {
        justifyContent: 'space-around',
        padding: 10,
        height: height / 8,
        backgroundColor: '#34B889'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleStyle: {
        color: '#ffff',
        fontFamily: 'Avenir',
        fontSize: 20
    },
    textInput: {
        height: height / 23,
        backgroundColor: '#ffff',
        paddingLeft: 10
    },
    iconStyle: {
        width: 25,
        height: 25
    }

});
