import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { Entypo } from '@expo/vector-icons';

class BucketScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // static getDerivedStateFromProps(){
    //     console.log("getDerivedStateFromProps ")
    //     return null;
    // }

    async componentDidMount() {

        // const value = await AsyncStorage.getItem('data').then(req => JSON.parse(req))
        //     .then(json => console.log(json))
        //     .catch(error => console.log('error!'));

    }

    componentWillReceiveProps(nextProp){
        console.log('bucket************',nextProp.ORDER)
    }

    render() {
        return (
            <View style={styles.container}>
                <Entypo
                    name="bucket"
                    size={200}
                />
                <Text>Hungry? Add something to your bucket!!!</Text>
                <TouchableOpacity
                    style={{ width: 150, height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                    onPress={() => this.props.navigation.navigate('Menu')}
                    on
                >
                    <Text style={{ color: '#fff' }}>Start Your Order</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

BucketScreen.navigationOptions = {
    header: null,
};


function mapStateToProps(states) {
    return ({
        ORDER: states.reducer.Order
    })
}

export default connect(mapStateToProps)(BucketScreen);