import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Calendar_UI from './Calendar_UI';

function LoginScreen({ navigation }) {
  return (
    <View>
      <Login navigation={navigation} />
    </View>
  );
}

function CalenderScreen() {
  return (
    <View style={{ backgroundColor:"#fff" }}>
      <Calendar_UI />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#082981',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "AiCo" }}/>
        <Stack.Screen name="Calender" component={CalenderScreen} options={{ title: "AiCo" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;