import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 
import RNPickerSelect from 'react-native-picker-select';
import Result from './Result';


const hundred = [{
    label: "0", value:0,
    label:"1", value:1
}];


const tens = [];
for (let i = 0; i <= 9; i++){
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
                <Text>{task}</Text>
                <RNPickerSelect
                    //placeholder={num}
                    style={{
                        inputIOS:{
                            width: 35,
                            fontSize: 19,
                            marginTop: 11,
                            height: 27,
                            textAlign: "center",
                            borderColor: '#595151',
                            color: '#595151',
                            borderWidth: 1,
                            borderRadius: 6
                        }
                    }}
                    onValueChange={(value) => this.setState({hundred:value})}
                    value={this.state.hundred} 
                    items = {hundred}/> 
                    <RNPickerSelect
                        // placeholder={num}
                        style={{
                            inputIOS:{
                                width: 35,
                                fontSize: 19,
                                marginTop: 11,
                                height: 27,
                                textAlign: "center",
                                borderColor: '#595151',
                                color: '#595151',
                                borderWidth: 1,
                                borderRadius: 6
                            }
                        }}
                        onValueChange={(value) => this.setState({ten:value})}
                        value={this.state.ten} 
                        items = {tens}/>
                        <RNPickerSelect
                            // placeholder={num}
                            style={{
                                inputIOS:{
                                    width: 35,
                                    fontSize: 19,
                                    marginTop: 11,
                                    height: 27,
                                    textAlign: "center",
                                    borderColor: '#595151',
                                    color: '#595151',
                                    borderWidth: 1,
                                    borderRadius: 6
                                }
                            }}
                            onValueChange={(value) => this.setState({one:value})}
                            value={this.state.one} 
                            items = {tens}/>
                        <Text>%</Text>
                            <TouchableOpacity style={{backgroundColor : "blue"}} onPress={() => {
                                    this.setState({
                                        achievement: Number(this.state.hundred * 100 )+ Number(this.state.ten * 10) + Number(this.state.one)
                                    })
                                }}>
                                    <Text style={{color: "#fff",}}>submit</Text>
                            </TouchableOpacity>
                                    <View style={styles.AchievementGraph}>
                            <Result 
                                achievement={this.state.achievement}
                                congratulation={this.state.achievement >= 100}
                            />
                            <TouchableOpacity style={styles.deleteBtn} onPress={onTaskDelete}>
                                <Text style={{color: "#fff",}}> delete</Text>
                            </TouchableOpacity>
                        </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({

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