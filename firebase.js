import * as firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
/* 
To fix 'Setting a timer for a long period of time, i.e. multiple minutes' error...

Navigate to your node_modules/react-native/Libraries/Core/Timers/JSTimers.js file.

Look for the variable MAX_TIMER_DURATION_MS

Change its value to 10000 * 1000

Save the changes (with auto format turned off) and re-build your app.

Found this answer on https://github.com/firebase/firebase-js-sdk/issues/97#issuecomment-485410026

*/


const firebaseConfig = {
    apiKey: "AIzaSyB-DM0X7M9AW3TKjJip4cc0NA5IWR54Pos",
    authDomain: "react-native-delivery.firebaseapp.com",
    databaseURL: "https://react-native-delivery-default-rtdb.firebaseio.com",
    projectId: "react-native-delivery",
    storageBucket: "react-native-delivery.appspot.com",
    messagingSenderId: "955130343490",
    appId: "1:955130343490:web:c4fd9bf1c732e16f1e3ddb"
}

let app
if(!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig)
}
else{
    app = firebase.app()
}

export const db = app.firestore()

export const storage = firebase.storage()

export const storageRef = firebase.storage().ref();

export default firebase