import React,{useCallback, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const ChoiceCategory = props => {
  
    return(
        <View style={styles.container}>
            <View style={styles.button}>
                <Button title='Выберите категорию' />
            </View>
        </View>
        
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        margin: 5
    }
  });

export default ChoiceCategory