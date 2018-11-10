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
              style={{width: 450, height: 300}}
              source={require('./assets/city1.gif')} />
      <Image
              style={{width: 450, height: 75}}
              source={require('./assets/logo.png')} />

      <Text style={styles.teks}>Smart ACE Soil</Text>
      <Text style={styles.teks}>(Adjusment, Controlling, Evaluation)</Text>
        
        <ActionButton buttonColor="#84d9f3">
          

          <ActionButton buttonColor='#ffcc5c' title="New Task" onPress={() => Alert.alert('pH Tanah Aman Terkendali!')}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/ph-meter2.png')} />
          </ActionButton>

          <ActionButton buttonColor='#ffcc5c' title="New Task" onPress={() => this.props.navigation.navigate('Details')}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/rh-meter2.png')} />
          </ActionButton>

          <ActionButton buttonColor='#ffcc5c' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/file.png')} />
          </ActionButton>

          <ActionButton buttonColor='#ffcc5c' title="New" onPress={() => console.log("notes tapped!")}>

            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/settings2.png')} />
          </ActionButton>

        </ActionButton>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
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
