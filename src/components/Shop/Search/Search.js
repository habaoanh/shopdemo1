import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Search extends Component {
    gotoDetail() {
        const { navigate } = this.props.navigation;
        navigate('Manhinh_ProductDetail');
    }
    
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#D6D6D6' }}>
                <Text>Search Component</Text>
                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                    <Text>Go to PRODUCT_DETAIL</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Search;
