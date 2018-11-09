import React from 'react';
import { StyleSheet, Text, View, Image, Button,ProgressBarAndroid, AppRegistry, } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={{width: 300, height: 150}}
        source={require('./assets/logo1.png')} />
        <Text>Selamat Datang</Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#114656',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 34,
  },
});
