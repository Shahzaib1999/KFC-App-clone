import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            storage: []
        }


    }

    

    async componentDidMount() {

        const value = await AsyncStorage.getItem('data').then(req => JSON.parse(req))
            .then(json => this.setState({ storage: [...this.state.storage, json] }))
            .catch(error => console.log('error!'));;

    }

    componentWillMount() {

        const db = firebase.firestore();

        db.collection('menu').onSnapshot(data => {
            if (data.size) {
                data.forEach(item => {
                    let obj = {
                        id: item.id,
                        name: item.data().name,
                        price: item.data().price,
                        img: item.data().image
                    }
                    this.setState({ items: [...this.state.items, obj] });
                })

            }
        })
    }

    async addToCart(id) {
        let cart = [...this.state.storage,id];
        await AsyncStorage.setItem('data', JSON.stringify(cart));
    }

    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={require('../assets/images/home_header.jpg')}
                            style={{ width: width, height: 500, resizeMode: 'stretch' }} />
                    </View>
                    <View style={{ flex: 1, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                this.state.items.map((item, key) =>
                                    <TouchableOpacity key={key} onPress={() => this.addToCart(item.id)}>
                                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 5, }}>
                                            <Image
                                                resizeMode="stretch"
                                                source={{ uri: item.img }}
                                                style={{ width: width / 2.2, height: width / 2, resizeMode: 'stretch', }} />
                                            <Text style={{ fontSize: 18 }}>{item.name}</Text>
                                            <Text style={{ fontSize: 16, color: 'red' }}>Rs: {item.price}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                            {/* <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 5,}}>
                                <Image
                                    source={require('../assets/images/Home/arabian_delight.png')}
                                    style={{ width: width / 2.2, height: width / 2, resizeMode: 'stretch' }} />
                                <Text style={{ fontSize: 18 }}>Arabian Delight</Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                <Image
                                    resizeMode="stretch"
                                    source={require('../assets/images/Home/mingle_bucket.jpg')}
                                    style={{ width: width / 2.2, height: width / 2, resizeMode: 'stretch', }} />
                                <Text style={{ fontSize: 18 }}>Mingle Bucket</Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                <Image
                                    source={require('../assets/images/Home/xtreme_box.jpeg')}
                                    style={{ width: width / 2.2, height: width / 2, resizeMode: 'stretch' }} />
                                <Text style={{ fontSize: 18 }}>Xtreme Box</Text>
                            </View> */}
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

Home.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
