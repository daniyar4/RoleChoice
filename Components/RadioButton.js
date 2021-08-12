import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';



const RadioButton = ({options=[], horizontal=false, onChangeSelect, selected}) => {
return(
    <View style={horizontal ? styles.horizontal : styles.vertical}>
        {options.map((opt, index)=> (
                <TouchableOpacity
                    key={index}
                    onPress={() => onChangeSelect(opt, index)}
                    style={styles.optContainer}>
                    <View style={styles.outlineCircle}>
                        {selected === index && <View style={styles.innerCircle}/> }
                    </View>
                    <Text style={[styles.txt,{color: selected === index ? '#444' : '#777'}]}>{opt}</Text>
                </TouchableOpacity>
            ))
        }
    </View>
)
}


const styles = StyleSheet.create({
    optContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    outlineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#777',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#444',
        borderWidth: 2,
    },
    txt: {
        fontSize: 14,
        margin: 4,
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    vertical: {
        flexDirection: 'column',

    }
})

    export default RadioButton;