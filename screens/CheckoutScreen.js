import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { clearData } from "../store/actions/Actions";
import { Entypo } from '@expo/vector-icons';

class CheckoutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    submit(){
        alert('Submitted');
        this.props.clear();
        this.props.navigation.navigate('bucket');
    }
    

    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Entypo
                            name="location-pin"
                            size={200}
                            color='red'
                        />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 50, fontWeight: 'bold', letterSpacing: 5 }}>KFC</Text>
                        <Text>Let's find an outlet near you</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 180 }}
                            onValueChange={(itemValue) => this.setState({ city: itemValue })}>
                            <Picker.Item label="Karachi" value="Karachi" />
                            <Picker.Item label="Lahore" value="Lahore" />
                        </Picker>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 180 }}
                            onValueChange={(itemValue) => this.setState({ street: itemValue })}>
                            <Picker.Item label="26th street" value="26th street" />
                            <Picker.Item label="5th street" value="5th street" />
                        </Picker>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 180 }}
                            onValueChange={(itemValue) => this.setState({ area: itemValue })}>
                            <Picker.Item label="Area 1" value="Area1" />
                            <Picker.Item label="Area 2" value="Area2" />
                        </Picker>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.submit()} style={{ width: 100, height: 40, borderRadius: 5, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 21 }}>Go</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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

function mapStateToProps(states) {
    return ({
        ORDER: states.reducer.Order
    })
};

function mapDispatchToProps(dispatch) {
    return ({
        clear: () => {
            dispatch(clearData())
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);