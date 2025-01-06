import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash({navigation}) {
    useEffect(() => {
        const loggedIn = AsyncStorage.getItem("loggedIn");
        setTimeout(() => {
            loggedIn.then((value) => {
                navigation.navigate(value ? "Home" : "Login");
            })
        }, 2000)
    },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.appHeading}>Ecommerce App</Text>
      <Text style={styles.appSubHeading}>Shop at low prices</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appHeading: {
        fontSize: 34,
        fontWeight: 800,
        color: '#227c3f'
    },
    appSubHeading: {
        fontSize: 24,
        fontWeight: 400,
        color: '#227c3f',
        marginTop: 10
    }
})