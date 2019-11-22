import * as firebase from 'firebase';
import 'firebase/analytics';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
console.log(config);

firebase.initializeApp(config);
firebase.analytics();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // });

// // database.ref('expenses').push({
// //     description: 'Hot Dog',
// //     amount: 250,
// //     createdAt: 3000,
// //     note: 'It was tasty'
// // });

// // database.ref('expenses').push({
// //     description: 'Coffee',
// //     amount: 100,
// //     createdAt: 4000,
// //     note: 'Espresso'
// // });

// // database.ref('expenses').push({
// //     description: 'Milk',
// //     amount: 200,
// //     createdAt: 5000,
// //     note: 'Without lactose'
// // });

// // database.ref('notes').push({
// //     body: 'React, Angular, Python',
// //     title: 'Course topics'
// // });

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }).catch((e) => {
// //         console.log('Failed to fetch the data', e);
// //     });

// // database.ref().set({
// //     name: 'Yevhen Fabizhevskyi',
// //     age: 31,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software Engineer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Tokyo',
// //         country: 'Japan'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log('Failed to save the data.', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Kobe'
// // });

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('Data was removed');
// //     }).catch((e) => {
// //         console.log('Data was not removed', e);
// //     });