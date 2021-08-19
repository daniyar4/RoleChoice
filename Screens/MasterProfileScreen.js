import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import {storageRef, db} from '../firebase'
import { useDispatch, useSelector } from 'react-redux';
import {getAvatar, getAbouteMe, getReviews} from '../redux/action'
import {StarRating} from '../Components/StarRating/star-rating';

const MainScreen = props => {

    const ratingObj = {
        ratings: 4,
        views: 3000
      }

    const dispatch = useDispatch()

    const sendMessage = (masterId = true) => {
        alert('Переход в чат')
    }

    const choiceMaster = (masterId = true) => {
        alert('Вы выбрали исполнителя')
    }


    
    const getAvatarUrl = (masterId) => {
        // Получаем аватар пользователя, если его нет - будет аватарка по умолчанию
        storageRef.child(`users/${masterId}/images/avatar.jpg`).getDownloadURL()
            .then((url) => {
                dispatch(getAvatar(url))
            })
            .catch((error) => {
                console.log(error)
        });
    }

    const avatarUrl = useSelector(state => state.avatar)



    const getTextAbouteMe = (masterId) => {
        // Получаем резюме, которое пользователь написал про себя
        let docRef = db.collection("users").doc(masterId).collection('abouteMe').doc('1');

        docRef.get().then((doc) => {
            if (doc.exists) {
                const abouteMeObj = doc.data()
                dispatch(getAbouteMe(abouteMeObj.abouteMe))
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    const abouteMeString = useSelector(state => state.abouteMe)



    const getListReviews = (masterId) => {
        // Получаем отзывы о мастере
        let docRefReviews = db.collection("users").doc(masterId).collection('reviews').doc('1');

        docRefReviews.get().then((doc) => {
            if (doc.exists) {
                let reviewsList = doc.data()
                dispatch(getReviews(reviewsList))
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    useEffect(()=>{
        getListReviews('id1');
        getTextAbouteMe('id1');
        getAvatarUrl('id1');
    }, []);
    
    const masterReviews = useSelector(state => state.reviews)




    return(
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.fotoRaiting}>
                    <Image
                    style={styles.avatar}
                    source={{uri: avatarUrl }}
                    />
                    <View style={styles.rating}>
                        <Text style={{fontWeight: 'bold'}}>Иванов Иван</Text>
                        <StarRating ratingObj={ratingObj}/>
                    </View>
                </View>

                <View style={styles.aboutMe}>
                    <Text style={{fontWeight: 'bold', margin: 4}}>О себе</Text>
                    <Text>{abouteMeString}</Text>
                </View>

                <View style={styles.reviews}>
                    <Text style={{fontWeight: 'bold', margin: 4}}>Отзывы</Text>
                    <View style={styles.oneReview}>
                        <Text>{masterReviews.owner}:   {masterReviews.text}</Text>
                    </View>
                </View>
            </ScrollView>


            <View style={styles.futter}>
            <TouchableOpacity style={styles.SendMessage}
            onPress={() => {sendMessage(masterId=true)}}>
                <View style={styles.bnt}>
                    <Text style={styles.txt}>Написать</Text> 
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.choiceMaster}
            onPress={() => {choiceMaster(masterId=true)}}
            >
                <View style={styles.bnt}>
                    <Text style={styles.txt}>Выбрать исполнителя</Text> 
                </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    scroll: {
        
    },

    container: {
        flex: 5
    },
    fotoRaiting: {
        padding: 20,
        height: 170,
        backgroundColor: '#DAEAE8',
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderColor: '#CCE1F8'

        },
    avatar: {
        flex:2,
        width: 100,
        height: 130,
        resizeMode:'cover',
        },
    rating: {
        flex: 4,
        alignItems: 'center',
        justifyContent:'space-evenly'
        },
    aboutMe: {
        padding: 10,
        height: 250,
        alignItems: 'center',
        backgroundColor: '#DAEAE8',
        borderBottomWidth: 3,
        borderColor: '#CCE1F8'
        },
    reviews: {
        padding: 10,
        height: 250,
        alignItems: 'center',
        backgroundColor: '#DAEAE8'
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
        futter: {
            justifyContent: 'flex-end',
            flexDirection: 'row',
            justifyContent:'space-around',
            backgroundColor: '#281543',
            borderTopWidth: 1
        },
        oneReview: {
            flexDirection: 'row',
        }
}
)

export default MainScreen