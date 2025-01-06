import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useAppContext } from '../../AppContext'

export default function Splash({navigation}) {
    const {loggedIn} = useAppContext();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home");
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