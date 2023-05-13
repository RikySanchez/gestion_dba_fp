import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonGradient () {
    return(
        <TouchableOpacity
        style={styles.button}>
            <LinearGradient
            colors={["#FFB677","#FF3CBD"]} 
            style={styles.button}>
            <Text
            style={styles.text}>Iniciar</Text>
            </LinearGradient>
        </TouchableOpacity>
        
    );
    
}
const styles = StyleSheet.create({

    text: {
        fontSize:18,
        color: "#fff",
        marginTop: 10,
        alignSelf: "center",
        fontWeight: "bold",
    },
    button: {
        width:"80%",
        height: 50,
        alignSelf:"center",
        borderRadius: 20,
        marginTop: 20,
    }

})