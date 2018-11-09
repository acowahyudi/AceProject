import React from 'react';
import { StyleSheet, Text, View, Image, Button,ProgressBarAndroid, AppRegistry, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={{width: 300, height: 150}}
        source={require('./assets/logo1.png')} />
        <Button style={styles.button} onPress={() => {
          Alert.alert('pH Tanah Aman Terkendali!');
          }}
          title="Cek pH Tanah"
        />
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

  button:{
    borderRadius:30,
  },
});
