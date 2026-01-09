import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Counter() {
const [count, setCount] = useState(0);

return (
    <View style={styles.container}>
        <Text style={styles.number}>{count}</Text>
        <TouchableOpacity style={styles.button}
        onPress={()=> setCount(count+1)}
        >
        <Text style={styles.buttonText}>Ajouter +1 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={()=> setCount(0)}
        >
            <Text style={styles.buttonText}>Réinitialiser</Text>
        </TouchableOpacity>
        </View>
  );
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