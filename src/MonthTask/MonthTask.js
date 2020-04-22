import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native'; 
import Achievement from './Achievement';

import Modal from 'react-native-modal';

export default class MonthTasK extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthTasks: [],
            task: "未定",
        };
        this.deleteTask = this.deleteTask.bind(this);
    }
    state = {
        isModalVisible: false,
      };
  
    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };
  

    deleteTask(e) {
        this.setState({
            monthTasks: this.state.monthTasks.filter(x => x !== e)
        })
    }
    render () {
        return (
            <View style={styles.Month}>
                {/* モダル追加 */}
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.M_TaskAddBtn} onPress={this.toggleModal}>
                        <Text style={{fontSize: 20, color: "#fff"}}>+  今月の予定を追加</Text>
                    </TouchableOpacity>
                </View>
                <Modal isVisible={this.state.isModalVisible}
                        style={styles.M_submitModal}>
                <View style={styles.month_addTitle}>
                    <Text style={{ fontSize: 30 }}>予定を追加</Text> 
                    <View style={{ width: 300 ,marginTop: 40 }}>     
                        <Text style={styles.TitleText}>タイトル</Text>            
                        <TextInput
                            style={{ height: 80, borderBottomColor: 'gray', borderBottomWidth: 1, fontSize: 18 }}
                            onChangeText={value => this.setState({task:value})}
                            value={this.state.value}
                        />
                    </View>
                    <View style={{alignItems: 'center', width: 150 }}>
                        <TouchableOpacity style={styles.submitBtn} onPress={() => {
                            this.setState({
                                monthTasks:[
                                    ...this.state.monthTasks,
                                    {
                                        task:this.state.task
                                    }
                                ],
                                isModalVisible: !this.state.isModalVisible
                            })
                        }}>
                                <Text style={{color: "#fff", fontSize: 18}}> submit</Text>
                        </TouchableOpacity>
                        <Button title="Close" onPress={this.toggleModal} />
                    </View>
                </View>
                </Modal>
                {/* モダルおわり */}
                <Text style={{margin: 20, fontSize: 30}}>今月の予定</Text>
                 <View style={{ borderBottomColor: "black", borderBottomWidth: 2 ,margin: 20}}></View>
                {this.state.monthTasks.map((tasks) => {
                    return (
                    <Achievement 
                        task={tasks.task}
                        onTaskDelete={() => this.deleteTask(tasks)} />
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Month:{

    },
    month_addTitle:{
        margin: 10,
        alignItems: 'center',

    },
    TitleText:{
        fontSize: 20
    },
    M_TaskAddBtn:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        backgroundColor: "#31A648",
        height: 60,
        borderRadius: 30,
        width: 200
    },
    submitBtn:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        backgroundColor: "blue",
        height: 40,
        borderRadius: 10,
        width: 100
    },
    M_submitModal:{
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 200,
        marginBottom: 400,
    },

})