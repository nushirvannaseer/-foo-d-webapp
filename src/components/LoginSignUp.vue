<template>
  <div style="background-color: silver; min-height: 100vh; padding-top: 10%">
    <h1 class="outer" v-if="isLogin === false">Foo-D Sign Up</h1>
    <h1 class="outer" v-else>Foo-D Login</h1>

    <div class="form-style">
      <form class="form-style" @submit.prevent>
        <input
          v-if="isLogin === false"
          v-model.trim="fname"
          placeholder="First Name"
        /><br v-if="isLogin === false" />
        <input
          v-if="isLogin === false"
          v-model="lname"
          placeholder="Last Name"
        /><br v-if="isLogin === false" />
        <input v-model="email" placeholder="Email" /><br />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
        /><br />
        <button @click="onSubmit()">
          <a>{{ isLogin === true ? "Login" : "Sign Up" }}</a>
        </button>
      </form>
      <br />
      <p>or</p>

      <a href="#" @click="isLogin === false ? loadLogin() : loadSignUp()">{{
        isLogin === false ? "Login" : "Sign Up"
      }}</a
      ><br />

      <button @click="signInWithGoogle()">Continue with Google</button>
    </div>
    <br />
    <div
      id="adsgoeshere"
      style=" background: yellow; padding-top:60px; text-align: center;"
      v-html="adsenseContent"
    ></div>
  </div>
</template>

<style scoped>
.outer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3%;
}

.form-style {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script>
//  <!-- data-ad-client="ca-pub-1234567891234567"
//       data-ad-slot="1234567890" -->
// import {ref} from 'vue';
import firebase from "firebase";
import { useRouter } from "vue-router";
import { analytics } from "../main";

export default {
  mounted() {
    // this.adsenseContent = document.getElementById("adsense").innerHTML;
    // console.log("ADSENSE", this.adsenseContent);
    const frame = document.getElementById("adsense");
    this.adsenseContent = frame.innerHTML;
    console.log("FRAME", frame);
  },
  setup() {
    const signInWithGoogle = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log("TOKEN", token, "\nUSER", user);
          analytics.logEvent("login", {
            method: "Google",
          });
          const router = useRouter();
          router.replace("/posts");
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    };
    return {
      signInWithGoogle,
    };
  },

  methods: {
    // created: function() {
    //   window.addEventListener("message", (event) => {
    //     // IMPORTANT: check the origin of the data!

    //     console.log(event.data);
    //     return;
    //   });
    // },
    onSubmit() {
      //if sign up
      if (this.isLogin === false) {
        if (
          this.fname !== "" &&
          this.lname !== "" &&
          this.email !== "" &&
          this.password !== ""
        ) {
          console.log(
            `Name: ${this.fname} ${this.lname}\nEmail: ${this.email}\nPassword: ${this.password}`
          );
          this.signUpSuccess = true;
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((result) => {
              var user = result.user;
              console.log("USER: ", user);
            });
        } else alert("Please fill all fields!");
      }

      //if login
      else {
        if (this.email !== "" && this.password !== "") {
          console.log(`Email: ${this.email}\nPassword: ${this.password}`);
          this.signUpSuccess = true;
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then((result) => {
              var user = result.user;
              console.log("USER: ", user);
            });
        } else alert("Please fill all fields!");
      }

      useRouter().replace("/posts");
    },
    loadLogin() {
      this.isLogin = true;
    },
    loadSignUp() {
      this.isLogin = false;
    },
  },

  data() {
    return {
      adsenseContent: "",
      signUpSuccess: false,
      isLogin: false,
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
  },
};
</script>
