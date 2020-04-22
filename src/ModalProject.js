import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native'; 

import Modal from 'react-native-modal';

export default class ModalProject extends Component {

    state = {
        isModalVisible: false,
      };
    
      toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
      };

      render() {
        return (
          <View style={{flex: 1}}>
            <Button title="Show modal" onPress={this.toggleModal} />
            <Modal isVisible={this.state.isModalVisible}>
              <View style={{flex: 1, 
                            flexDirection: "center",
                            position: "absolute",
                            backgroundColor:"white",
                            margin: 100}}>
                <Text>Hello!</Text>
                <Button title="Hide modal" onPress={this.toggleModal} />
              </View>
            </Modal>
          </View>
        );
      }
}