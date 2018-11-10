import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Alert } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Asset, AppLoading, SplashScreen } from 'expo';


export default class App extends React.Component {
  state = {
    isSplashReady: false,
    isAppReady: false,
  };
  render() {

    return (
      <View style={styles.container}>
      <Image
              style={{width: 300, height: 150}}
              source={require('./assets/logo2.gif')} />
        <Text style={styles.teks}>Smart ACE (Adjusment, Controlling, Evaluation) Soil</Text>
        <ActionButton buttonColor="#fae45a">

          <ActionButton buttonColor='#90dc9e' title="New Task" onPress={() => Alert.alert('pH Tanah Aman Terkendali!')}>
            <Image
              style={{width: 50, height: 90}}
              source={require('./assets/ph-meter2.png')} />
          </ActionButton>

          <ActionButton buttonColor='#90dc9e' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./assets/rh-meter.png')} />
          </ActionButton>

          <ActionButton buttonColor='#90dc9e' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./assets/file.png')} />
          </ActionButton>

          <ActionButton buttonColor='#90dc9e' title="New" onPress={() => console.log("notes tapped!")}>

            <Image
              style={{width: 40, height: 40}}
              source={require('./assets/settings.png')} />
          </ActionButton>

        </ActionButton>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  teks:{
    textAlign:'center',
    fontSize:28,
  }
});
