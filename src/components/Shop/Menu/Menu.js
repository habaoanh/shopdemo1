import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Menu extends Component {

    render() {
        return (
            <View>
                <Text>Day deo phai la man hinh Menu</Text>
                <TouchableOpacity 
                onPress={() => {
                     this.props.navigation.navigate('Changeinfo', { thamso: 'Hello KhoaPham' });
                }}
                >
                    <Text>
                        Go to Changeinfo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => {
                     this.props.navigation.navigate('OrderHistory', { thamso: 'Hello KhoaPham' });
                }}
                >
                    <Text>
                        Go to OrderHistory
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => {
                     this.props.navigation.navigate('Manhinh_Gioithieu', 
                     { thamso: 'Hello KhoaPham' }); 
                }}
                >
                    <Text>
                        Go to man hinh gioi thieu
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => {
                     this.props.navigation.navigate('Searchbar', 
                    { thamso: 'Hello binh boong' });
                }}
                >
                    <Text>
                        Go to man hinh Searchbar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => { 
                    this.props.navigation.navigate('Authentication', 
                    { thamso: 'Hello binh boong' });
                }}
                >
                    <Text>
                        Go to man hinh Authentication
                    </Text>
                </TouchableOpacity>
                
            </View>
            
        );
    }
}
