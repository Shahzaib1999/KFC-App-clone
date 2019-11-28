import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Image, Button, Text } from 'react-native';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
                    <Image source={require('../assets/images/logo.jpg')} style={{ width: 150, height: 150 }} />
                </View>
                <View style={{ flex: 2, backgroundColor: '#fff', marginTop: 50 }}>
                    <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}>
                        <TextInput
                            style={{ borderBottomWidth: 1 }}
                            value={this.state.email}
                            placeholder="Email"
                            onChange={email => this.setState({ email })} />
                        <TextInput
                            style={{ borderBottomWidth: 1, paddingTop: 30 }}
                            value={this.state.pass}
                            placeholder="Password"
                            onChange={pass => this.setState({ pass })} />
                    </View>
                    <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 25 }}>
                        <Button title="LOGIN" color='#2d2e2e' />
                    </View>
                    <View style={{ paddingTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'red', textDecorationStyle: 'solid', textDecorationLine: 'underline' }}>Forgot your password</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ paddingTop: 10 }}>
                                Dont't have an account?
                            </Text>
                            <Text style={{ paddingTop: 10, textDecorationLine: 'underline', color: 'red' }}>
                                Register Now
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: .5 }}>

                </View>
                <View style={{ flex: .2, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'red' }}>Continue as guest</Text>
                </View>
            </View>
        );
    }
}

SignUp.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb',
        flexDirection: 'column',
    },
});
