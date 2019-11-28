import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements'
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
const list = [
    {
        id: 1,
        name: 'Every Day Value',
        avatar_url: <MaterialCommunityIcons
            name="food"
            size={30}
            color='grey'
            style={{ marginBottom: 3 }}
        />
    },
    {
        id: 2,
        name: 'Make it a Meal',
        avatar_url: <MaterialCommunityIcons
            name="food-variant"
            size={30}
            color='grey'
            style={{ marginBottom: 3 }}
        />
    }
    ,
    {
        id: 3,
        name: 'Meal Box',
        avatar_url: <AntDesign
            name="dropbox"
            size={30}
            color='grey'
            style={{ marginBottom: 3 }}
        />
    }
    ,
    {
        id: 4,
        name: 'Sharing',
        avatar_url: <Ionicons
            name="ios-people"
            size={30}
            color='grey'
            style={{ marginBottom: 3 }}
        />
    }
    ,
    {
        id: 5,
        name: 'Promotions',
        avatar_url: <AntDesign
            name="qrcode"
            size={30}
            color='grey'
            style={{ marginBottom: 3 }}
        />
    }
    ,
    {
        id: 6,
        name: 'Midnight Deals',
        avatar_url: <MaterialCommunityIcons
            name="clock"
            size={30}
            color='grey'
            style={{ marginBottom: 3 }}
        />
    }
    ,
    {
        id: 7,
        name: 'Snacks',
        avatar_url: <MaterialCommunityIcons
            name="food-fork-drink"
            size={30}
            color='grey'
            style={{ marginBottom: 3 }}
        />
    }

];

class MenuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {


        return (
            <ScrollView>
                <View style={{ flex: 1, padding: 10, backgroundColor: '#ebebeb' }}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                onPress={() => this.props.navigation.navigate('Home')}
                                key={i}
                                title={l.name}
                                leftIcon={l.avatar_url}
                                style={{ paddingTop: 10, }}
                                chevron
                            />
                        ))
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        // borderWidth: 1,
        marginTop: 15,
    },
});

MenuScreen.navigationOptions = {
    title: 'Menu',
    headerTitleStyle: {
        textAlign: "center",
        flex: 1
    },
};

export default MenuScreen;
