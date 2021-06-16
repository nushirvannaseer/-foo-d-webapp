import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import firebase from "firebase";
import Ads from "vue-google-adsense";

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

// const frame = document.getElementById("adsense");
// frame.contentWindow.postMessage("MMMMMMMMM", "*");

firebase.initializeApp(firebaseConfig);
export const analytics = firebase.analytics();

createApp(App)
  .use(router)
  .use(require("vue-script2"))
  .use(Ads.Adsense)
  .mount("#app");
