// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting

 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');
 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 const firebaseConfig = {
  apiKey: "AIzaSyCuY7E64C_nFMteiBpz244-JxHajqD_wDI",
  authDomain: "sennafan-5b6c9.firebaseapp.com",
  projectId: "sennafan-5b6c9",
  storageBucket: "sennafan-5b6c9.appspot.com",
  messagingSenderId: "871315008812",
  appId: "1:871315008812:web:de713e5a8dad45e88d1089"

};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
