import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Shopdetail extends Component {
   
    render() {
        return (
            <View>
                <Text>Day la man hinh Shopdetail</Text>
                <Text>{this.props.navigation.state.params.thamso}</Text>
            </View>
        );
    }
}
