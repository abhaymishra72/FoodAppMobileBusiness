import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants/styles';

const ButtonComponent = (props, route) => {
    return (
        <View>
            <TouchableOpacity style={styles.button}
                onPress={() => props.navigation.navigate(route)}
            >
                <Text style={styles.text}>
                    {props.name}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default ButtonComponent;

const styles = StyleSheet.create({
    button:{
        height:45,
        width:'80%',
        borderRadius:10,
        alignSelf:'center',
        backgroundColor:colors.tomatoColor
    },

    text:{
        color:'white', 
        justifyContent:"center",
        alignSelf:'center', 
        marginTop:7, 
        fontSize:20
    }
})