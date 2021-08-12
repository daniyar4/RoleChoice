import React,{useCallback, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ROLES } from '../CONST';
import {roleChoice} from '../redux/action'
import RadioButton from '../Components/RadioButton';

const MainScreen = props => {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(0)
    const role = useSelector(state => state.role)
    
    const sendRequest = async () => {
        
        console.log(role)
        const response = await fetch(

            'https://react-native-delivery-default-rtdb.firebaseio.com//orders.json',
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                userId: 'userId',
                date: new Date(),
                role: role
            })
        }    
        )

        props.navigation.navigate('ChoiceCategory')
        
    }
  
    return(
        <View style={styles.container}>
            <View>
                <RadioButton 
                    selected={selected}
                    options={ROLES} 
                    horizontal={true} 
                    onChangeSelect={(opt, i) => {
                    dispatch(roleChoice((i === 0 ? 'customer' : 'implementer')))
                    setSelected(i)
                }}/>
            </View>
            <View style={styles.button}>
                <Button title='Отправить' onPress={sendRequest}/>
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

export default MainScreen