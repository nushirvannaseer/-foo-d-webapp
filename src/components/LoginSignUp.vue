<template>
  <h1 v-if="isLogin===false">Foo-D Sign Up</h1>
  <h1 v-else>Foo-D Login</h1>

  <form @submit.prevent>
    <input v-if="isLogin===false" v-model.trim="fname" placeholder="First Name"><br v-if="isLogin===false">
    <input v-if="isLogin===false" v-model="lname" placeholder="Last Name"><br v-if="isLogin===false">
    <input v-model="email" placeholder="Email"><br>
    <input v-model="password" type="password" placeholder="Password"><br>
    <button @click="onSubmit()">
      <a >{{isLogin===true?"Login": "Sign Up"}}</a>

    </button>

  </form>

  <p>or</p>

  <a href="#" @click="isLogin===false?loadLogin(): loadSignUp()">{{isLogin===false?"Login": "Sign Up"}}</a>

  <button @click="signInWithGoogle()">Continue with Google</button>
</template>

<script>

// import {ref} from 'vue';
import firebase from 'firebase';
import { useRouter} from 'vue-router'

export default{
  setup(){
    const signInWithGoogle=()=>{
       
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("TOKEN", token, "\nUSER", user);
      const router=useRouter();
      router.replace('/posts');
    }).catch((error) => {
      console.log("ERROR", error)
    
    },
  );
    }
    return {
      signInWithGoogle,
    }
  },


  methods:{
    onSubmit(){
      
      //if sign up
      if(this.isLogin===false ){
        if(this.fname!=="" && this.lname!=="" && this.email!=="" && this.password!==""){
          console.log(`Name: ${this.fname} ${this.lname}\nEmail: ${this.email}\nPassword: ${this.password}`);
          this.signUpSuccess=true;
           firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((result)=>{
        var user=result.user;
        console.log("USER: ", user);
           }
           );}
      
           
        else alert("Please fill all fields!");
      }
        
      //if login
      else{
        if(this.email!=="" && this.password!==""){
            console.log(`Email: ${this.email}\nPassword: ${this.password}`);
            this.signUpSuccess=true;
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((result)=>{
        var user=result.user;
        console.log("USER: ", user);
      })
        }
        else alert("Please fill all fields!");
      }

      

      useRouter.replace("/posts");

    },
    loadLogin(){
      this.isLogin=true;
    }
,
    loadSignUp(){
      this.isLogin=false;
    },

    
  },

  data(){
    return{
      signUpSuccess:false,
      isLogin: false,
      fname: "",
      lname:"",
      email:"",
      password:"",
    }
  }
};





</script>

