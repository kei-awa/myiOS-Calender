import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 
import RNPickerSelect from 'react-native-picker-select';
import Result from './Result';


const hundred = [{
    label:"1", value:1
}];


const tens = [];
for (let i = 1; i <= 9; i++){
    tens.push({label: String(i), value: i});
}

export default class Achievement extends Component {
    constructor(props) {
        super(props);
        this.state = {  achievement: 0,
                        hundred: 0,
                        ten: 0,
                        one: 0};
      }
    render () {
        const { task, onTaskDelete } = this.props;
        const num = {
            label: '0',
            value: 0,
            color: '#9EA0A4',
        }
        return (
            <View style={styles.monthTaskSheet}>
                <View style={{flexDirection: "row"}}>
                    <View style={styles.operationGroup}>
                    <View style={styles.titleGroup}>
                        <Text style={{fontSize:20}}>{task}</Text>
                    </View>
                        <View style={{flexDirection: "row", margin:10}}>
                            <View style={{ height: 27}}>
                                <Text style={{fontSize: 19, marginLeft: 2}}>進捗：</Text>
                            </View>
                            <RNPickerSelect
                                placeholder={num}
                                style={{
                                    inputIOS:{
                                        marginLeft: 2,
                                        width: 20,
                                        fontSize: 19,
                                        height: 20,
                                        textAlign: "center",
                                        borderColor: '#595151',
                                        color: '#595151',
                                        borderBottomColor: '#595151',
                                        borderBottomWidth: 1,
                                    }
                                }}
                                onValueChange={(value) => this.setState({hundred:value})}
                                value={this.state.hundred} 
                                items = {hundred}/> 
                            <RNPickerSelect
                                placeholder={num}
                                style={{
                                    inputIOS:{
                                        marginLeft: 2,
                                        width: 20,
                                        fontSize: 19,
                                        height: 20,
                                        textAlign: "center",
                                        borderColor: '#595151',
                                        color: '#595151',
                                        borderBottomColor: '#595151',
                                        borderBottomWidth: 1,
                                    }
                                }}
                                onValueChange={(value) => this.setState({ten:value})}
                                value={this.state.ten} 
                                items = {tens}/>
                            <RNPickerSelect
                                placeholder={num}
                                style={{
                                    inputIOS:{
                                        marginLeft: 2,
                                        width: 20,
                                        fontSize: 19,
                                        height: 20,
                                        textAlign: "center",
                                        borderColor: '#595151',
                                        color: '#595151',
                                        borderBottomColor: '#595151',
                                        borderBottomWidth: 1,
                                    }
                                }}
                                onValueChange={(value) => this.setState({one:value})}
                                value={this.state.one} 
                                items = {tens}/>
                            <View style={{ height: 27}}>
                                <Text style={{fontSize: 19, marginLeft: 2}}>%</Text>
                            </View>
                        </View>
                            <View style={styles.BtnGroup}>
                                <TouchableOpacity style={styles. exchangeBtn} onPress={() => {
                                        this.setState({
                                            achievement: Number(this.state.hundred * 100 )+ Number(this.state.ten * 10) + Number(this.state.one)
                                        })
                                    }}>
                                        <Text style={{color: "#fff",}}>change</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteBtn} onPress={onTaskDelete}>
                                    <Text style={{color: "#fff",}}> delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.AchievementGraph}>
                            <Result 
                                achievement={this.state.achievement}
                                congratulation={this.state.achievement >= 100}
                            />
                        </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    monthTaskSheet:{
        marginTop: 20,
        borderColor: "grey",
        borderWidth: 1
    },
    deleteBtn:{marginLeft:20,
        marginTop: 10,
        marginLeft:20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        backgroundColor: "red",
        height: 29,
        borderRadius: 5,
        width: 60
    },
    exchangeBtn:{
        marginLeft:10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        backgroundColor: "blue",
        height: 29,
        borderRadius: 5,
        width: 60
    },
    BtnGroup:{
        flexDirection: "row"
    },
    titleGroup:{
        margin: 10,
        width: 150
    },
    AchievementGraph:{
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    operationGroup:{
        width: 160,
        margin: 10
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    }
})