import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
import Header from './Header';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            types: [] 
        };
    }

    componentDidMount() {
        fetch('http://192.168.131.2/api/')// eslint-disable-line
        .then(res => res.json())
        .then(resJSON => {
            const { type } = resJSON;
            this.setState({ types: type });
        });
    }
    
    openMenu() {
        const { navigate } = this.props.navigation;
        navigate('DrawerOpen');
    }

    gotoDetail() {
        const { navigate } = this.props.navigation;
        navigate('Manhinh_ProductDetail');
    }

    gotoListProduct() {
       const { navigate } = this.props.navigation;
        navigate('Manhinh_ListProduct');
    }

    render() {
        const { types } = this.state;
        return (
             <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                 <Header onOpen={this.openMenu.bind(this)} />
                 <Collection />
                 <Category onOpen={this.gotoListProduct.bind(this)} types={types} />
                 <TopProduct onOpen={this.gotoDetail.bind(this)} />
             </ScrollView>
             
        );
    }
}

export default Home;

/*

<ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <Collection />
                <Category />
</ScrollView>
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Header from './Header';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';


import initData from '../../../api/initData';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedTab: 'home',
            types: [],
            topProducts: [],
            cartArray: [] 
        };
        //global.addProductToCart = this.addProductToCart.bind(this);
        //global.incrQuantity = this.incrQuantity.bind(this);
        //global.decrQuantity = this.decrQuantity.bind(this);
        //global.removeProduct = this.removeProduct.bind(this);
        //global.gotoSearch = this.gotoSearch.bind(this);
    }

    componentDidMount() {
        initData()
        .then(resJSON => {
            const { type, product } = resJSON;
            this.setState({ types: type, topProducts: product });
        });
        //getCart()
        //.then(cartArray => this.setState({ cartArray }));
    }


    openMenu() {
        const { navigate } = this.props.navigation;
        navigate('DrawerOpen');
    }

    render() {
        const { topProducts, types } = this.props;

        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>

                <Header onOpen={this.openMenu.bind(this)} />

                <Collection />

                 <Category navigate={this.props.navigation.navigate} types={types} />


                <TopProduct navigate={this.props.navigation.navigate} topProducts={topProducts} />

            </ScrollView>
        );
    }
}

// <View style={{ backgroundColor: '#D8D8D8', flex: 1 }}>
/*<View><Text>Day la man hinh Home</Text>
                    <TouchableOpacity style={{ backgroundColor: 'red' }}
                        onPress={() => { this.props.navigation.navigate('DrawerOpen') }}
                    >
                        <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>Go to Menu</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: 'green' }}
                        onPress={() => { this.props.navigation.navigate('Searchbar',
                         { thamso: 'Hello KhoaPham' }) }}
                    >
                        <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>
                        Go to man hinh Search</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: 'green' }}
                        onPress={() => { this.props.navigation.navigate('Contactbar',
                         { thamso: 'Hello KhoaPham' }) }}
                    >
                        <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>
                        Go to Contact</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: 'green' }}
                        onPress={() => { this.props.navigation.navigate
                            ('Manhinh_Cart', { thamso: 'Hello KhoaPham' }) }}
                    >
                        <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>Go to Cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: 'green' }}
                        onPress={() => { this.props.navigation.navigate('Manhinh_ShopDetail',
                         { thamso: 'Hello KhoaPham' }) }}
                    >
                        <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>
                        Go to Shop Detail</Text>
                    </TouchableOpacity>
                </View>
*/
