import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableHighlight, ScrollView } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { StackNavigator } from 'react-navigation';
import { LineChart, XAxis, Grid } from 'react-native-svg-charts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';



class HomeScreen extends React.Component {
static navigationOptions = {
    headerStyle: {
      backgroundColor: '#84d9f3',
    },
    
    headerMode:'none',
    
  };

  render() {

    return (


    <View style={styles.container}>
 

      <View style={styles.container}>

      <Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} />






      <Image
              style={{width: wp('100%'),height: hp('10%')}}
              source={require('./assets/logo.png')} />

      <Image
              style={{width: wp('100%'),height: hp('30%')}}
              source={require('./assets/city1.gif')} />
      


              <TouchableHighlight>
                
                <Text style={styles.teksstatus}>1000data[value]</Text>

                </TouchableHighlight>
                <Text style={{fontWeight: 'bold', textAlign: 'center', marginVertical: 30, fontSize: 18, color: '#ffffff'}}>
                <Text>Status Tanah : Aman</Text>
                </Text>

    


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

          
          <ActionButton buttonColor='#ffcc5c' title="New" onPress={() => this.props.navigation.navigate("mp")}>

            <Image
              style={{width: 60, height: 90}}
              source={require('./assets/market.png')} />
          </ActionButton>

        </ActionButton>
      </View>


      );

  }  

       ) 
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
       const data = [ 5.5, 4.6, 6.3, 6.5, 6.0]
    return (
      <View style={{ height: 450, padding: 20 }}>
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

                <Text style={{fontWeight: 'bold', textAlign: 'center', marginVertical: 30, fontSize: 16}}>
                <Text>pH Tanah Terbaru</Text>
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
      backgroundColor: '#84d9f3',
    },
  };
  render() {
    const data = [ 50, 46, 70, 65, 60]
    return (
      <View style={{ height: 450, padding: 20 }}>

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

class marketScreen extends React.Component {
  static navigationOptions = {
    title:'Market Place',
    headerStyle: {
      backgroundColor: '#84d9f3',
    },
  };
  render() {
    return (




      <ScrollView style={{container: 'black '}}>


      <ScrollView style={{ flex: 1 }}>
        <Text>menu p</Text>

      <ScrollView style={{container: 'black'}}>

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
const RootStack = StackNavigator(
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

  }

});