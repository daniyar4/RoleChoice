import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {getOrder} from '../redux/action'
import {db} from '../firebase'

const StatusScreen = props => {

    const dispatch = useDispatch()

    const getOrderData = (orderNumber) => {
        // Получаем данные о заказе
        let docRef = db.collection("orders").doc(orderNumber);

        docRef.get().then((doc) => {
            if (doc.exists) {
                let orderDataObj = doc.data()
                orderDataObj.finishDate = orderDataObj.finishDate.toDate().toString()
                dispatch(getOrder(orderDataObj))
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }


    useEffect(()=>{
        getOrderData('1')
    }, []);


    const renderAcceptTask = () => {
        return(
            <TouchableOpacity style={styles.choiceMaster}
                onPress={() => {alert('Вы приняли задание')}}
                >
                    <View style={styles.bnt}>
                        <Text style={styles.txt}>Принять</Text> 
                    </View>
                </TouchableOpacity>
    )}

    const renderOrderIsCompleted = () => {
        return(
            <TouchableOpacity style={styles.choiceMaster}
                onPress={() => {alert('Вы завершили заказ')}}
                >
                    <View style={styles.bnt}>
                        <Text style={styles.txt}>Заказ завершен</Text> 
                    </View>
                </TouchableOpacity>
    )}

    const orderData = useSelector(state => state.order)
    const isCustomer = false //useSelector(state => state.role)

    return(
        <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.order}>
                        <Text>Номер заказа: {orderData.id}</Text>
                    </View>
                    <View style={styles.status}>
                        <Text>Статус заказа: {orderData.status}</Text>
                    </View>

                    <View style={styles.master}>
                        <Text>Исполнитель: {orderData.masterId}</Text>
                    </View>

                    <View style={styles.customer}>
                        <Text >Заказчик: {orderData.customerId}</Text>
                    </View>

                    <View style={styles.timer}>
                        <Text>Срок выполнения до: {orderData.finishDate}</Text>
                    </View>
                    
                    <ScrollView>
                        <View  style={styles.description}>
                            <Text >Описание:</Text>
                            <Text style={{padding: 20}}>{orderData.discription}</Text>
                            </View>
                    </ScrollView>
            </View>


            <View style={styles.futter}>
            <TouchableOpacity style={styles.SendMessage}
            onPress={() => {alert('Вы перешли в чат')}}>
                <View style={styles.bnt}>
                    <Text style={styles.txt}>Написать</Text> 
                </View>
            </TouchableOpacity>
            {isCustomer ? renderAcceptTask() : renderOrderIsCompleted()}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: '#DAEAE8',
    },
    body: {
        flex: 5,
    },
    order: {
        height: 50,
        borderBottomWidth: 3,
        borderColor: '#CCE1F8',
        justifyContent: 'center',
        padding: 30,
        alignItems: "center"
    },
    status: {
        height: 50,
        borderBottomWidth: 3,
        borderColor: '#CCE1F8',
        justifyContent: 'center',
        padding: 30,
        alignItems: "center"
    },
    master: {
        height: 50,
        borderBottomWidth: 3,
        borderColor: '#CCE1F8',
        justifyContent: 'center',
        padding: 30,
        alignItems: "center"
    },
    customer: {
        height: 50,
        borderBottomWidth: 3,
        borderColor: '#CCE1F8',
        justifyContent: 'center',
        padding: 30,
        alignItems: "center"
    },
    timer: {
        height: 50,
        borderBottomWidth: 3,
        borderColor: '#CCE1F8',
        justifyContent: 'center',
        padding: 30,
        alignItems: "center"
    },
    description: {
        justifyContent: 'center',
        padding: 20,
        alignItems: "center"
    },
    futter: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        justifyContent:'space-around',
        backgroundColor: '#281543',
        borderTopWidth: 1
    },
    SendMessage: {
        margin: 7,
        width: 160,
        height: 40,
        borderRadius: 18,
        backgroundColor: '#281543',
        borderWidth: 1,
        borderColor: 'white'
    },
    choiceMaster: {
        margin: 7,
        width: 160,
        height: 40,
        borderRadius: 18,
        backgroundColor: '#72b645',       
    },
    bnt: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        color: 'white',
    },

})

export default StatusScreen