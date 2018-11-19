import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableHighlight, ScrollView, TouchableOpacity, Button } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { createStackNavigator } from 'react-navigation';
import { LineChart, XAxis, Grid } from 'react-native-svg-charts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon, Card } from 'react-native-elements';




class HomeScreen extends React.Component {
  static navigationOptions = {
    headerRight:(<TouchableOpacity style={{padding:5}} onPress={() => {Alert.alert('Welcome To Smart Garden');}}>
      <Image
              style={{width: wp('35%'), height: hp('50%'), resizeMode:'contain'}}
              source={require('./assets/logo.gif')} />
      </TouchableOpacity>
  ),
    headerStyle: {
      backgroundColor: '#297793',
    },
    

  }

  render() {

    return (
    <View style={styles.container}>


        <ActionButton buttonColor="#114656">
         
          <ActionButton buttonColor='#d77500' title="New Task" onPress={() => this.props.navigation.navigate('pH')}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/ph-meter2.png')} />
          </ActionButton>

          <ActionButton buttonColor='#d77500' title="New Task" onPress={() => this.props.navigation.navigate('RH')}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/rh-meter2.png')} />
          </ActionButton>

          <ActionButton buttonColor='#d77500' title="New Task" onPress={() => this.props.navigation.navigate("DT")}>
            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/file.png')} />
          </ActionButton>
          
          <ActionButton buttonColor='#d77500' title="New" onPress={() => this.props.navigation.navigate("mp")}>

            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/market.png')} />
          </ActionButton>

        </ActionButton>
    </View>

    );
  }
}

class pHScreen extends React.Component {
  static navigationOptions = {
    title:'pH tanah',
    headerStyle: {
      backgroundColor: '#297793',
    },
  };
  render() {
       const data = [ 5.5, 4.6, 6.3, 6.5, 6.0]
    return (
      <View style={{ height: 450, padding: 20 }}>
      <Image style={{ position: 'absolute', flex: 1, resizeMode: 'cover', width: wp('100%'), height: hp('100%') }} source={require('./assets/bgph.png')}/>
                <LineChart
                    style={{ flex: 1 }}
                    data={ data }
                    gridMin={ 1 }
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ stroke: 'rgb(134, 65, 244)'}}
                >
                    <Grid/>
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: 25 }}
                    data={ data }
                    formatLabel={ value => data[value]+"%" }
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black'}}
                />

                <Text style={{fontWeight: 'bold', textAlign: 'center', marginVertical: 30, fontSize: 16, width: wp('90%'), height: hp('5%')}}>
                pH Tanah Terbaru
                </Text>
                <TouchableHighlight>
                  <Text style={styles.teksph}>1000data[value]</Text>
                </TouchableHighlight>
                <Text style={{fontWeight: 'bold', textAlign: 'center', marginVertical: 10, fontSize: 16}}>
                <Text>Status Tanah : Aman</Text>
                </Text>
      </View>
    );
  }
}

class RHScreen extends React.Component {
  static navigationOptions = {
    title:'RH tanah',
    headerStyle: {
      backgroundColor: '#297793',
    },
  };
  
  render() {
    const data = [ 50, 46, 70, 65, 60]
    return (
      <View style={{ height: 450, padding: 20 }}>
      <Image style={{ position: 'absolute', flex: 1, resizeMode: 'cover', width: wp('100%'), height: hp('100%') }} source={require('./assets/bgph.png')}/>

                <LineChart
                    style={{ flex: 1 }}
                    data={ data }
                    gridMin={ 1 }
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                    <Grid></Grid>
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: 25 }}
                    data={ data }
                    formatLabel={ value => data[value]+"%" }
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black'}}
                />

                <Text style={{fontWeight: 'bold', textAlign: 'center', marginVertical: 30, fontSize: 16}}>
                <Text>RH Tanah Terbaru</Text>
                </Text>
                <TouchableHighlight>
                  <Text style={styles.teksph}>1000data[value]</Text>
                </TouchableHighlight>
                <Text style={{fontWeight: 'bold', textAlign: 'center', marginVertical: 10, fontSize: 16}}>
                <Text>Status Tanah : Aman</Text>
                </Text>

      </View>


    );
  }
}

class DtanamanScreen extends React.Component {
  static navigationOptions = {
    title:'Data Tanaman',
    headerStyle: {
      backgroundColor: '#297793',
    },
  };
  
  render() {
    const data = [ 5.5, 4.6, 6.3, 6.5, 6.0];
    return (
      <ScrollView style={{ flex: 1}} >
        <Card title="Sawi Pakcoy">
                  <Image
                    style={styles.image}
                    resizeMode="contain"
                    justifyContent='center'
                    source={require('./assets/sawi.png')}
                  />
                  <Button onPress={() => {Alert.alert(
                    'Sawi Pakcoy',
                      'pH Optimal : 6 - 7 '+
                      'RH Optimal : 70 - 90%',
                    );}} title="Detail"/>

            
        </Card>

          <Card title="Cabai">
              <Image
                  style={styles.image}
                  resizeMode="contain"
                  justifyContent='center'
                  source={require('./assets/lombok.png')}
              />
              <Button onPress={() => {Alert.alert(
                  'Cabai',
                  'pH Optimal : 5,6 - 7 '+
                  'RH Optimal : 70 - 80%',
              );}} title="Detail"/>


          </Card>

          <Card title="Tomat">
              <Image
                  style={styles.image}
                  resizeMode="contain"
                  justifyContent='center'
                  source={require('./assets/tomat.png')}
              />
              <Button onPress={() => {Alert.alert(
                  'Tomat',
                  'pH Optimal : 5 - 6 '+
                  'RH Optimal : 70 - 90%',
              );}} title="Detail"/>


          </Card>


      </ScrollView>
    );
  }
}

class marketScreen extends React.Component {
  static navigationOptions = {
    title:'Market Place',
    headerStyle: {
      backgroundColor: '#297793',
    },
  };
  render() {
    return (
      <ScrollView style={{container: 'black'}}>
      <Image style={{ position: 'absolute', flex: 1, resizeMode: 'cover', width: wp('100%'), height: hp('300%') }} source={require('./assets/splash.png')}/>
        <Image
              style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
              source={require('./assets/post1.png')} />
        <Image
              style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
              source={require('./assets/post2.png')} />
        <Image
              style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
              source={require('./assets/post3.png')} />
        <Image
              style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
              source={require('./assets/post2.png')} />
        <Image
              style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
              source={require('./assets/post1.png')} />
        <Image
              style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
              source={require('./assets/post3.png')} />

      </ScrollView>
    );
  }
}

class PengaturanScreen extends React.Component {
  static navigationOptions = {
    title:'Pengaturan',
    headerStyle: {
      backgroundColor: '#297793',
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
    mp: marketScreen,
  },
  {
    initialRouteName: 'Home',
  },
  {
    headerMode:'none',
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
    backgroundColor: '#599e21',
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
  },


  market: {
    flex:1,

    alignItems: 'center',
    justifyContent: 'flex-start',
    resizeMode:'contain',
  },

  satu: {
    //padding: 10,
    alignItems: 'flex-start',
    //width: wp('10%'),
    //height: hp('10%'),
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  teksph: {

    fontWeight: 'bold', 
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#84d9f3',
    borderRadius: 10,
    paddingVertical: 40,
    marginHorizontal: 90,

  },

  teksstatus: {
    width: 250,
    fontWeight: 'bold',
    fontSize: 20, 
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#84d9f3',
    borderRadius: 150,
    paddingVertical: 45,
    marginVertical: 40,
    marginHorizontal: 90,

  },

  image: {
      width: 250,
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
  }

});