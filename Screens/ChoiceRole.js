import React,{useCallback, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {isCustomer} from '../redux/action'
import {db} from '../firebase'

/*
The page for selecting the client's role(customer or performer)
After the selection, it redirects to the category selection page and saves the data in State and in db
*/

const ChoiceRole = props => {
    const dispatch = useDispatch()

    const sendRequest = async (choiceCustemer) => {
        
        dispatch(isCustomer(choiceCustemer))
        data = {
                        userId: 'userId',
                        date: new Date(),
                        isCustomer: choiceCustemer
                     }
        db.collection('users').doc('1').set(data)

        props.navigation.navigate('ChoiceCategory')
        
    }
  
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.customer}
            onPress={() => {sendRequest(choiceCustemer=true)}}>
                <View style={styles.bnt}>
                    <Text style={styles.txt}>Создать задание</Text> 
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.master}
            onPress={() => {sendRequest(choiceCustemer=false)}}>
                <View style={styles.bnt}>
                    <Text style={styles.txt}>Стать исполнителем</Text> 
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#281543'
    },
    customer: {
        margin: 7,
        width: 200,
        height: 40,
        borderRadius: 18,
        backgroundColor: '#281543',
        borderWidth: 1,
        borderColor: 'white'
    },
    master: {
        margin: 7,
        width: 200,
        height: 40,
        borderRadius: 18,
        backgroundColor: '#72b645'
    },
    bnt: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },


  });

export default ChoiceRole