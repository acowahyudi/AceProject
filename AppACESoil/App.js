import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Alert } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
	static navigationOptions = {
    headerStyle: {
      backgroundColor: '#84d9f3',
    },
  };
  render() {

    return (
      <View style={styles.container}>
      
      <Image
              style={{width: 450, height: 75}}
              source={require('./assets/logo.png')} />
      <Image
              style={{width: 450, height: 300}}
              source={require('./assets/city1.gif')} />
      

        
        <ActionButton buttonColor="#114656">
          

          <ActionButton buttonColor='#ffcc5c' title="New Task" onPress={() => this.props.navigation.navigate('pH')}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/ph-meter2.png')} />
          </ActionButton>

          <ActionButton buttonColor='#ffcc5c' title="New Task" onPress={() => this.props.navigation.navigate('RH')}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/rh-meter2.png')} />
          </ActionButton>

          <ActionButton buttonColor='#ffcc5c' title="New Task" onPress={() => this.props.navigation.navigate("DT")}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/file.png')} />
          </ActionButton>

          <ActionButton buttonColor='#ffcc5c' title="New" onPress={() => this.props.navigation.navigate("PGN")}>

            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/settings2.png')} />
          </ActionButton>

        </ActionButton>
      </View>
    );
  }
}

class RHScreen extends React.Component {
  static navigationOptions = {
    title:'RH tanah',
    headerStyle: {
      backgroundColor: '#84d9f3',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>menu RH</Text>
      </View>
    );
  }
}

class pHScreen extends React.Component {
  static navigationOptions = {
    title:'pH tanah',
    headerStyle: {
      backgroundColor: '#84d9f3',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>menu pH</Text>
      </View>
    );
  }
}

class DtanamanScreen extends React.Component {
  static navigationOptions = {
    title:'Data Tanaman',
    headerStyle: {
      backgroundColor: '#84d9f3',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>menu Data tanaman</Text>
      </View>
    );
  }
}

class PengaturanScreen extends React.Component {
  static navigationOptions = {
    title:'Pengaturan',
    headerStyle: {
      backgroundColor: '#84d9f3',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>menu pengaturan</Text>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    RH: RHScreen,
    pH: pHScreen,
    DT: DtanamanScreen,
    PGN: PengaturanScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#307e92',
    alignItems: 'center',
    justifyContent: 'flex-start',
    resizeMode:'contain',

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
