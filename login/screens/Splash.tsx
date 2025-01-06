import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useAppContext } from '../../AppContext'
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
      <Text>Splash</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})