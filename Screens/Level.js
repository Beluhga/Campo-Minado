import React from 'react';
import {View, StyleSheet, Text, Pressable, Modal} from 'react-native';

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
        visible={props.isVisible} animationType='slide'
        transparent= {true}>
            <View style={estilo.frame}>
                <View style={estilo.container}>
                    <Text style={estilo.title}>Selecione o Nível</Text>

                    <Pressable
                    style={[estilo.button, estilo.bgEasy]}
                    onPress={() => props.onLevel(0.1)}>
                        <Text style={estilo.buttonLabel}>Fácil</Text>
                    </Pressable>

                    <Pressable 
                    style={[estilo.button, estilo.bgNormal]}
                    onPress={() => props.onLevel(0.2)}>
                        <Text style={estilo.buttonLabel}>Normal</Text>
                    </Pressable>
                    
                    <Pressable
                     style={[estilo.button, estilo.bgHard]}
                     onPress={() => props.onLevel(0.3)}>
                         <Text style={estilo.buttonLabel}>Difícil</Text>
                    </Pressable>

                </View>
            </View>
        </Modal>
    )
}

const estilo = StyleSheet.create ({
    frame:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container:{
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    button:{
        marginTop:10,
        padding:5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold',
    },
    bgEasy:{
        backgroundColor: '#49b65d',
    },
    bgNormal:{
        backgroundColor: '#2765f7',
    },
    bgHard:{
        backgroundColor: '#f26',
    }

    
})