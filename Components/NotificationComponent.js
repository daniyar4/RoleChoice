import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import {storageRef, db} from '../firebase'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

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
          body: 'Change sides!',
        })
      })
      }
  }