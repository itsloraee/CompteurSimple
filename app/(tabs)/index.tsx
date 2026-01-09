import Counter from '@/components/Counter';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function index() {
  return (
   <View style={styles.container}>
      <Counter/>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
        flex:1, 
        justifyContent:'center',
        alignItems: 'center',
    },
    
    number: {
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 30,
    },

    button: {
        backgroundColor: '#007bff',
        padding: 15,
        margin: 10,
        borderRadius:8,   
    },

    buttonText: {
        color:'white',
        fontSize:18
    },   
    });