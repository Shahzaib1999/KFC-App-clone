import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { updateOrder, getData } from "../store/actions/Actions";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }


    }

    componentWillMount() {
        this.props.getData()
    }

    addToCart(id) {
        this.props.upd(id);
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp && nextProp.DEALS && (nextProp.DEALS.length != this.state.items.length)) {
            this.setState({
                items: nextProp.DEALS
            });
        };
        console.log('componentWillReceiveProps home');
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
                                    <TouchableOpacity key={key} onPress={() => this.addToCart(item)}>
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

function mapStateToProps(states) {
    return ({
        ORDER: states.reducer.Order,
        DEALS: states.reducer.Deals
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        upd: (ele) => {
            dispatch(updateOrder(ele))
        },
        getData: () => {
            dispatch(getData())
        }
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
