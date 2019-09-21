import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import Communications from 'react-native-communications';

class SafetyPlan extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <LinearGradient colors={['#71d2a5', '#71d2a5', '#71d2a5']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View style= {styles.cont}>
            <TouchableOpacity onPress={() => Linking.openURL('http://www.ulifeline.org/')}> 
              <Text style= {styles.text1}>Ulifeline</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('tel:8002738255');}}>
              <Text style= {styles.text2}>To chat with a Crisis Counselor 24/7 about you or someone you are concerned about, call 1-800-273-8255.</Text>
            </TouchableOpacity>
          </View>
          <View style= {styles.cont}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.thetrevorproject.org/')}>              
              <Text style= {styles.text1}>Trevor Project</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('tel:8664887386');}}>
              <Text style= {styles.text2}>If you’re a member of the LGBTQ+ community thinking about suicide, you deserve immediate help - please call the Trevor Lifeline at 866-488-7386.</Text>
            </TouchableOpacity>
          </View>
      </LinearGradient>
    );
  }

}

const styles = StyleSheet.create ({

  headText: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHead: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    height: verticalScale(700),
    alignItems: 'center',
  },
  cont: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#d5a6d1',
    padding: 20,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 12,
  },
  headContain: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  addCont: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: 120,
    marginTop: 20,
    backgroundColor: '#83d2f0',
  },
  addText: {
    justifyContent:  'center',
    fontSize: 20,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default SafetyPlan;