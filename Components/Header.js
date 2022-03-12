import React from 'react';
import { View, StyleSheet, Text, Pressable} from 'react-native';
import Flag from './Flag';

export default props => {
    return (
        <View style={Estilo.container}>
            <View style={Estilo.flagContainer}>
                <Pressable onPress={props.onFlagPress} style={Estilo.flagButton}>
                    <Flag bigger />
                </Pressable>
                <Text style={Estilo.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <Pressable style={Estilo.button} onPress={props.onNewGame}>
                <Text style={Estilo.buttonLabel}>Novo Jogo</Text>
            </Pressable>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    flagContainer:{
        flexDirection: 'row'
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20
    },
    button: {
        backgroundColor: 'green',
        padding: 5,
    },
    buttonLabel:{
        fontSize: 20,
        color: '#ddd',
        fontWeight: 'bold'
    }
    
})