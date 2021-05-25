// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NativeRouter as Router, Route } from 'react-router-native';
import HomePage from './src/components/HomePage';
import Login from './src/components/Login';
// import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
// import Login from './src/components/Login';

export default function App() {

  return (
    // <View>
    //   <Login />
    // </View>
    <Router>
      <Route path="/" exact component={Login} />
      {/* <Route path="/home-page" exact component={Login}/> */}
    </Router>


  );
}
// alert("You have entered an invalid email address or an invalid password")c

