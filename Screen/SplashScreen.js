//Import React and Hooks we needed
import React, { useState, useEffect } from 'react';

//Import all required component
import { ActivityIndicator, View, StyleSheet, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = props => {
  //State for ActivityIndicator animation
  let [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then(value =>
        props.navigation.navigate(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        )
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/inceptive.png')}
        style={{ width: '50%', resizeMode: 'contain',}}
      />
      <Text style={styles.logoTextStyle}>
          Welcome to  Inceptive Technologies
        </Text>
        <Text style={styles.logoTextStyle}>
          Demo App
        </Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  logoTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});