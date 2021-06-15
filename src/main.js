import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLWiq2enLwOii4yEnBAnDcnIMJEXNuNyo",
  authDomain: "web-project-b9ab7.firebaseapp.com",
  projectId: "web-project-b9ab7",
  storageBucket: "web-project-b9ab7.appspot.com",
  messagingSenderId: "196212344864",
  appId: "1:196212344864:web:43aeadd1a00b537a335445",
  measurementId: "G-NPW8FHMCFW",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

createApp(App)
  .use(router)
  .mount("#app");

//   <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyBLWiq2enLwOii4yEnBAnDcnIMJEXNuNyo",
//     authDomain: "web-project-b9ab7.firebaseapp.com",
//     projectId: "web-project-b9ab7",
//     storageBucket: "web-project-b9ab7.appspot.com",
//     messagingSenderId: "196212344864",
//     appId: "1:196212344864:web:43aeadd1a00b537a335445",
//     measurementId: "G-NPW8FHMCFW"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
