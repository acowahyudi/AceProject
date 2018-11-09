import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SMART ACE SOIL</Text>
        <ActionButton style={styles.tombol} buttonColor="#ef7125">

          <ActionButton buttonColor="#6dcdcc" title="new mask" onPress={()=>console.log("note tapped")}/>
          <ActionButton buttonColor="#6dcdcc" title="new mask" onPress={()=>console.log("note tapped")}/>
          <ActionButton buttonColor="#6dcdcc" title="new mask" onPress={()=>console.log("note tapped")}/>

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
  tombol:{
    margin:2,
  }
});
