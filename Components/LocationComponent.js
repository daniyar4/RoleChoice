import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import {storageRef, db} from '../firebase'
import geohash from 'ngeohash'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function LocationComponent() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  // const addLocations =() => {
  //   const hash = geohash.encode(coords.nativeEvent.coordinate.)
  // }



  const getExpoToken = (masterId= 'id1') => {
    // Получаем expo token из БД
    let docRef = db.collection("users").doc(masterId);

    docRef.get().then((doc) => {
        if (doc.exists) {
            let obj = doc.data()
            console.log(obj);
            // dispatch(getReviews(reviewsList))
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}



  const sendLoacalNotification = async () => {
    const permissionStatus = await Notifications.getPermissionsAsync()
    if(permissionStatus.status !== 'granted'){
      const permissionStatus = await Notifications.requestPermissionsAsync()
    }
    if(permissionStatus.status === 'granted') {

      // const expoPushToken = await Notifications.getExpoPushTokenAsync()
      // console.log(expoPushToken)
      fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip, deflate',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: "ExponentPushToken[c991jeM_1mBBRUZnRGLfU7]",
          title: "Time's up!",
          body: 'Change sggfides!',
        })
      })

      getExpoToken('id1')

      // await 
      //   Notifications.scheduleNotificationAsync({
      //     content: {
      //       title: "Time's up!",
      //       body: 'Change sides!',
      //     },
      //     trigger: {
      //       seconds: 3,
      //     },
      //   });
      }
  }

  useEffect( () => {
    const subscription = Notifications.addNotificationResponseReceivedListener(notification => {
      // console.log(notification)
    })
    return () => subscription.remove();
  } )

  return (
    // <View style={styles.container}>
    //   <Text style={styles.paragraph}>{text}</Text>
    // </View>
    <Button title='Send notofication' onPress={sendLoacalNotification} />

  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});


