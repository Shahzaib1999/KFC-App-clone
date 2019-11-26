import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { Entypo } from '@expo/vector-icons';
import { clearData } from "../store/actions/Actions";
import { Table, Row, Rows } from 'react-native-table-component';
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

    // static getDerivedStateFromProps(){
    //     console.log("getDerivedStateFromProps ")
    //     return null;
    // }

    componentDidMount() {
        // console.log('bucket************', this.props)

        // const value = await AsyncStorage.getItem('data').then(req => JSON.parse(req))
        //     .then(json => console.log(json))
        //     .catch(error => console.log('error!'));
        // console.log(this.props.ORDER)
        console.log('componentDidMount bucket')
        this.setState({
            orders: this.props.ORDER,
            tableData: this.props.ORDER
        });

    }

    componentWillReceiveProps(nextProp) {
        console.log('bucket************', nextProp)
        // this.setState({show: false})
        if (nextProp.ORDER.length != this.state.orders.length) {
            this.setState({
                orders: nextProp.ORDER,
                tableData: this.props.ORDER
            }, 
            // () => {
            //     setTimeout(()=> {
            //     this.setState({ show: true });
            //   }, 3000)
            );
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
        console.warn("data")
        console.log('===', this.state.tableData)
        const tableData1 = [];
        if (this.state.tableData && this.state.tableData.length) {

            for (let i = 0; i < this.state.tableData.length; i += 1) {
                const rowData = [];
                for (let j = 1; j < 3; j += 1) {
                    rowData.push(this.state.tableData[i][j]);
                }

                tableData1.push(rowData);
            }
        }

        return (
            <View style={styles.container}>
                {this.state.orders.length && this.state.show ?
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
                                </DataTable>
                                {/* <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                    <Row data={this.state.tableHead} style={styles.head} textStyle={styles.tableHeader} />
                                    <Rows data={tableData1} textStyle={styles.text} />
                                </Table> */}
                                {/* <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                    {
                                        tableData1.map((rowData, index) => (
                                            <Row
                                                widthArr={150}
                                                key={index}
                                                data={rowData}
                                                widthArr={state.widthArr}
                                                style={styles.head}
                                                textStyle={styles.text}
                                            />
                                        ))
                                    }
                                </Table> */}
                            </View>
                            <View style={{flex: 1}}>
                                <Button style={{flex: 0.5}} title="Clear All" onPress={() => this.cleanData()} />
                                <Button style={{flex: 0.5}} title="CheckOut" onPress={() => this.cleanData()} />
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
                            onPress={() => this.props.navigation.navigate('Menu')}
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
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    head: {
        height: 40,
        // width: 350
        // backgroundColor: '#f1f8ff' 
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