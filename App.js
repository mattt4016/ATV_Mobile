import * as React from 'react';
import {Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import fifa from './fifa.jpg';
import rdr2 from './assets/rdr2.jpg';
import mine from './assets/mine.png';
import elden from './elden.jpg';
import dark from './dark.jpg';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
  
    <View style={styles.container}>
    <ScrollView>
        <Text style={styles.paragraph}>
        Jogos jogados por mim neste ano 
      </Text>


      <Text style={styles.paragraph}>
        Fifa 23 
      </Text>
      <Image source={fifa} style={{width: 315, height: 380, margin: 16}}/>

   
      <Text style={styles.paragraph}>
        Red Dead Redemption 2
      </Text>
      <Image source={rdr2} style={{width: 315, height: 380, margin: 16}}/>


      <Text style={styles.paragraph}>
        Minecraft 
      </Text>
      <Image source={mine} style={{width: 315, height: 380, margin: 16}}/>


      <Text style={styles.paragraph}>
       Elden Ring
      </Text>
      <Image source={elden} style={{width: 315, height: 380, margin: 16}}/>


      <Text style={styles.paragraph}>
       Dark Souls 3
      </Text>
      <Image source={dark} style={{width: 315, height: 380, margin: 16}}/>

      
     </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#FFFFFF"
  },
});
