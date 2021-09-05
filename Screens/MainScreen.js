import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {getOrder} from '../redux/action'
import {db} from '../firebase'

const MainScreen = props => {

    return(
        <View style={styles.container}>
            <Button title='страница выбора Роли' onPress={() => props.navigation.navigate('ChoiceRole')}/>
            <Button title='страница профиля мастера' onPress={() => props.navigation.navigate('MasterProfileScreen')}/>
            <Button title='страница статуса заказа' onPress={() => props.navigation.navigate('StatusScreen')}/>
            <Button title='location component' onPress={() => props.navigation.navigate('LocationComponent')}/>
        </View>
                
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        flex: 5,
        backgroundColor: '#DAEAE8',
    },

})

export default MainScreen