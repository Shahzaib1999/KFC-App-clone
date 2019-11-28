import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { Entypo } from '@expo/vector-icons';
import { clearData } from "../store/actions/Actions";
import { DataTable } from 'react-native-paper';

class BucketScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            orders: [],
            tableData: null,
        };
    }


    componentDidMount() {
        console.log('componentDidMount bucket')
        this.setState({
            orders: this.props.ORDER,
            tableData: this.props.ORDER
        });

    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.ORDER.length != this.state.orders.length) {
            this.setState({
                orders: nextProp.ORDER,
                tableData: this.props.ORDER
            },
                () => {
                    setTimeout(() => {
                        this.setState({ show: !this.state.show });
                    }, 3000)
                });
        }
    }

    cleanData() {
        this.props.clear();
    }

    refresh() {
        this.setState({
            refresh: !this.state.refresh
        })
    }

    render() {
        const tableData1 = [];
        let total = 0;
        if (this.state.tableData && this.state.tableData.length) {

            for (let i = 0; i < this.state.tableData.length; i += 1) {
                const rowData = [];
                for (let j = 1; j < 3; j += 1) {
                    rowData.push(this.state.tableData[i][j]);
                }
                total += parseInt(this.state.tableData[i][2]);
                tableData1.push(rowData);
            }
        }

        return (
            <View style={styles.container}>
                {this.state.orders.length ?
                    <ScrollView>
                        <View style={{ marginTop: 30, padding: 20 }}>
                            <View style={{ height: 80, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EAEAEA', }}>
                                <Text style={{ fontSize: 30 }}>Shopping Basket</Text>
                            </View>
                            <View style={{ marginTop: 30 }}>
                                <DataTable>
                                    <DataTable.Header>
                                        <DataTable.Title>Product</DataTable.Title>
                                        <DataTable.Title numeric>Quantity</DataTable.Title>
                                        <DataTable.Title numeric>Amount</DataTable.Title>
                                    </DataTable.Header>
                                    {tableData1.map((rowData, index) => (
                                        <DataTable.Row key={index}>
                                            <DataTable.Cell>{rowData[0]}</DataTable.Cell>
                                            <DataTable.Cell numeric>1</DataTable.Cell>
                                            <DataTable.Cell numeric>{rowData[1]}</DataTable.Cell>
                                        </DataTable.Row>
                                    ))
                                    }
                                    <DataTable.Row>
                                        <DataTable.Cell>Total</DataTable.Cell>
                                        <DataTable.Cell numeric>{total}</DataTable.Cell>
                                    </DataTable.Row>
                                </DataTable>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                                <TouchableOpacity onPress={() => this.cleanData()} style={{ height: 50, borderBottomWidth: 1, borderLeftWidth: 1, borderTopWidth: 1, flex: .5, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 21, color: 'red' }}>Clear All</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('checkout')} style={{ height: 50, borderBottomWidth: 1, borderRightWidth: 1, borderTopWidth: 1, flex: .5, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 21, color: 'white' }}>CheckOut</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo
                            name="bucket"
                            size={200}
                        />
                        <Text>Hungry? Add something to your bucket!!!</Text>
                        <TouchableOpacity
                            style={{ width: 150, height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                            onPress={() => this.props.navigation.navigate('Home')}
                        >
                            <Text style={{ color: '#fff' }}>Start Your Order</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    head: {
        height: 40,
    },
    tableHeader: {
        margin: 6,
        fontSize: 23,
        fontWeight: "bold"
    },
    text: {
        margin: 6,
        fontSize: 22
    }
});

BucketScreen.navigationOptions = {
    header: null,
};


function mapStateToProps(states) {
    return ({
        ORDER: states.reducer.Order
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        clear: () => {
            dispatch(clearData())
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketScreen);