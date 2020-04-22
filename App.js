import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Calender_UI from './Calendar_UI';
import Login from './Login';





export default class App extends Component {

  render () {
      return (
          <View>
            <View style={styles.Empty_title}></View>
            <View style={styles.A_Calender}>
              <Text style={styles.Text_Title}>A  Calendar</Text>
            </View>
            <Login />
            <ScrollView>
              <Calender_UI />
              <View style={styles.Empty_footer}></View>
            </ScrollView>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  Empty_title:{
    backgroundColor: "#082981",
    height: 50,
  },
  Empty_footer:{
    backgroundColor: "white",
    marginTop:100,
    height: 100,
  },
  A_Calender:{
    height: 50,
    left: 0,
    right: 0,
    backgroundColor: "#082981",
  },
  Text_Title:{
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
  }
})


