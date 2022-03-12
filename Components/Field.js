import React from "react";
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Params from './Parame';
import Bomb from './Bomba';
import Flag from './Flag';

export default props => {
    const {mined, opened, nearMines, exploded, bandeirado} = props

    const styleField =[Estilo.field]
    if (opened) styleField.push(Estilo.opened)
    if (exploded) styleField.push(Estilo.exploded)
    if (bandeirado) styleField.push(Estilo.bandeirado)
    if(!opened && !exploded) styleField.push(Estilo.regular)

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2a28d7'
        if (nearMines == 2) color = '#2b520f'
        if (nearMines > 2 && nearMines < 6) color = '#f9060a'
        if (nearMines >= 6) color = '#f221a9'
    }

    return (
        <Pressable onPress={props.onOpen}
        onLongPress={props.onSelect}>
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
            <Text style={[Estilo.label, { color: color}]}>
                {nearMines}</Text> : false}
            {mined && opened ? <Bomb /> : false}
            {bandeirado && !opened ? <Flag /> : false}
        </View>
        </Pressable>
    )
}

const Estilo = StyleSheet.create({
    field:{
        height: Params.blockSize,
        width: Params.blockSize,
        borderWidth: Params.borderSize,
    },

    opened:{
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },

    regular:{
        backgroundColor: '#999',
        borderLeftColor: '#ccc',
        borderTopColor: '#ccc',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },

    label: {
        fontWeight: 'bold',
        fontSize: Params.fontSize,
    },

    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    }
})