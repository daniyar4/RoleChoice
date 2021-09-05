import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Button, ScrollView, ImageBackground } from 'react-native';
import {db} from '../firebase'

// Страница статуса взятого заказа. Получаем данные из БД о заказе и выводим на экран.
//Так же можно отменить заказ, открыть спор или перейти в чат с заказчиком.
const StatusScreen = props => {

    const [orderData, setOrderData] = useState({})

    const getOrderData = (orderNumber) => {
        // Получаем данные о заказе
        let docRef = db.collection("orders").doc(orderNumber);

        docRef.get().then((doc) => {
            if (doc.exists) {
                const orderDataObj = doc.data()
                orderDataObj.finishDate = orderDataObj.finishDate.toDate().toString()
                setOrderData(orderDataObj)
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


    return(

        <View style={styles.container}>
            <ImageBackground 
            source={require('../assets/menu.png')}
            resizeMode = 'stretch'
            style={styles.imageBack}>
                <TouchableOpacity style={styles.goToBack}
                    onPress={() => {}}
                >
                    <Image source={require('../assets/backArrow.png')} style={styles.goToBackIcon}/>
                    <Text style={styles.goToBackText}>Вернуться назад</Text>
                </TouchableOpacity>
                <View style={styles.body}>
                    <View>
                        <Text style={styles.taskNameText}>{orderData.taskName}</Text>
                        <Text numberOfLines={5} ellipsizeMode='tail' style={styles.taskDescriptionText}>{orderData.discription}</Text>
                    
                    </View>

                    <Image source={require('../assets/noPhoto.png')} style={styles.noPhotoIcon}/>
                </View>

                <View style={styles.cityInfo}>
                    <Text style={styles.cityTitle}>Город, регион:</Text>
                    <Text style={styles.cityValue}>{orderData.city}</Text>
                </View>

                <View style={styles.workplaceInfo}>
                    <Text style={styles.workplaceTitle}>Место работы:</Text>
                    <Text style={styles.workplaceValue}>{orderData.workplace}</Text>
                </View>
                
                <View style={styles.priceInfo}>
                    <Text style={styles.priceTitle}>Оплата:</Text>
                    <Text style={styles.priceValue}>{orderData.price} ₽</Text>
                </View>
                <Text style={styles.feeText}>(c учетом комиссии сервиса 20%)</Text>

                <View style={styles.customerInfo}>
                    <Text style={styles.customerTitle}>Заказчик:</Text>
                    <TouchableOpacity style={{flexDirection: 'row'}}
                        onPress={() => {}}
                    >
                        <Text style={styles.customerValue}>{orderData.customerName}</Text>
                        <Image source={require('../assets/customerIcon.png')} style={styles.customerIcon}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderManage}>
                    <TouchableOpacity
                        onPress={() => {}}
                    >
                        <Text style={styles.cancelOrderText}>Отменить заказ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {}}
                    >
                        <Text style={styles.openDisputeText}>Открыть спор</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
                
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
        },

    imageBack: {
        flex: 1,
        paddingTop: 125
    },

    goToBack: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#F3FBFF',
        paddingBottom: 23
        
        
    },
    goToBackText: {
        color: '#3DB2F4',
        fontSize: 15,
        marginLeft: 7,
        textDecorationLine: 'underline'
    },
    goToBackIcon: {
        width: 13,
        height: 13
    },
    body: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.65,
        
    },
    taskNameText: {
        marginTop: 10,
        fontWeight: '700',
        fontSize: 15,
        color: '#373737',
        marginLeft: 30
    },
    taskDescriptionText: {
        marginTop: 5,
        fontSize: 14,
        color: '#BDBDBD',
        marginLeft: 30,
        fontWeight: '600',
    },
    noPhotoIcon: {
        height: 100,
        width: 108,
        margin: 10,
    },
    cityInfo: {
        marginTop: 15,
        marginLeft: 30,
        flexDirection: 'row'
    },
    cityTitle: {
        fontSize: 13,
    },
    cityValue: {
        fontSize: 13,
        color: '#3EAFF2',
        marginLeft: 2
    },
    workplaceInfo: {
        marginLeft: 30,
        flexDirection: 'row',
        marginTop: 5
    },
    workplaceTitle: {
        fontSize: 13,
    },
    workplaceValue: {
        fontSize: 13,
        color: '#3EAFF2',
        marginLeft: 2
    },
    priceInfo: {
        marginLeft: 30,
        flexDirection: 'row',
        marginTop: 5
    },
    priceTitle: {
        fontSize: 14,
        fontWeight: '700',
    },
    priceValue: {
        fontSize: 14,
        color: '#F96B5C',
        marginLeft: 3,
        fontWeight: '600',
    },
    feeText: {
        marginLeft: 30,
        color: '#888888',
        fontSize: 13,
        lineHeight: 13
    },
    customerInfo: {
        marginLeft: 30,
        flexDirection: 'row',
        marginTop: 12
    },
    customerTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    customerValue: {
        fontSize: 16,
        color: '#F96B5C',
        marginLeft: 3,
        fontWeight: '600',
        textDecorationLine: 'underline'
    },
    customerIcon: {
        height: 23,
        width: 23,
        marginLeft: 7,
    },
    orderManage: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-around'
    },
    cancelOrderText: {
        fontSize: 16,
        color: '#F96B5C',
        textDecorationLine: 'underline'
    },
    openDisputeText: {
        fontSize: 16,
        color: '#F96B5C',
        textDecorationLine: 'underline'
    }

})

export default StatusScreen