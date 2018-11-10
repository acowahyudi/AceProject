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
              style={{width: 450, height: 300}}
              source={require('./assets/city1.gif')} />
      <Image
              style={{width: 450, height: 75}}
              source={require('./assets/logo.png')} />
        
        <ActionButton buttonColor="#fae45a" onPress={() => style={backgroundImage:'./assets/splash.png'}}>
          

          <ActionButton buttonColor='#90dc9e' title="New Task" onPress={() => Alert.alert('pH Tanah Aman Terkendali!')}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/ph-meter2.png')} />
          </ActionButton>

          <ActionButton buttonColor='#90dc9e' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/rh-meter2.png')} />
          </ActionButton>

          <ActionButton buttonColor='#90dc9e' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/file.png')} />
          </ActionButton>

          <ActionButton buttonColor='#90dc9e' title="New" onPress={() => console.log("notes tapped!")}>

            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/settings2.png')} />
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
    justifyContent: 'flex-start',

  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  teks:{
    textAlign:'center',
    fontSize:20,
    color :'white',

  }
});
