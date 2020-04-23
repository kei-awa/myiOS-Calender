import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Calendar_UI from './Calendar_UI';
import firebase from 'firebase';
import ENV from './env.json';
import SignUp from './SignUp';


const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);



function LoginScreen({ navigation }) {
  return (
    <View>
      <Login navigation={navigation} />
    </View>
  );
}

function SignUpScreen({ navigation }) {
  return (
    <View>
      <SignUp navigation={navigation} />
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
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Login" }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: "SignUp!!" }} />
        <Stack.Screen name="Calender" component={CalenderScreen} options={{ title: "calendar" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;