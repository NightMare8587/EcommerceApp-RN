import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInWithEmailPwd = async () => {
        
    }

    const createAccountWithEmailPwd = async () => {

    }

    const signInWithGoogle = async () => {

    }
  return (
    <View style={styles.container}>
      <Text style={styles.loginHeader}>Login</Text>

      <TextInput
      style={styles.inputStyle}
      value={email}
      onChangeText={setEmail}
      placeholder='Enter your email'
      />

      <TextInput
      style={styles.inputStyle}
      value={password}
      onChangeText={setPassword}
      placeholder='Enter your password'
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={signInWithEmailPwd}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.divider}/>

      <TouchableOpacity style={styles.signInGoogle}>
        <Text style={styles.buttonText}>Sign in with google</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginHeader: {
        fontSize: 24,
        fontWeight: 700,
        textAlign: 'center'
    },
    inputStyle: {
        marginHorizontal: 20,
        width: '93%',
        height: 55,
        padding: 15,
        marginTop: 12,
        backgroundColor: '#e0e1e0',
        borderRadius: 15
    },
    buttonContainer: {
        marginTop: 35,
        width: 100,
        backgroundColor: 'orange',
        marginHorizontal: 'auto',
        paddingVertical: 10,
        borderRadius: 25,
        shadowColor: 'black',
        shadowRadius: 200,
        borderColor: 'black',
        borderWidth: 0.7
    },
    buttonText: {
        textAlign: 'center'
    },
    divider: {
        backgroundColor: 'black',
        height: 0.8,
        marginTop: 20,
        width: '90%'
    },

    signInGoogle: {
        backgroundColor: '#8fe3fc',
        width: 150,
        marginTop: 25,
        padding: 10,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'black'
    }
})