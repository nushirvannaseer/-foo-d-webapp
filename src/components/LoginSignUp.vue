<template>
  <h1 v-if="isLogin===false">Foo-D Sign Up</h1>
  <h1 v-else>Foo-D Login</h1>

  <form @submit.prevent>
    <input v-if="isLogin===false" v-model.trim="fname" placeholder="First Name"><br v-if="isLogin===false">
    <input v-if="isLogin===false" v-model="lname" placeholder="Last Name"><br v-if="isLogin===false">
    <input v-model="email" placeholder="Email"><br>
    <input v-model="password" type="password" placeholder="Password"><br>
    <button @click="onSubmit()">
      <a href="/posts" >{{isLogin===true?"Login": "Sign Up"}}</a>

    </button>

  </form>

  <p>or</p>

  <a href="#" @click="isLogin===false?loadLogin(): loadSignUp()">{{isLogin===false?"Login": "Sign Up"}}</a>
</template>

<script>

export default{
  methods:{
    onSubmit(){
      
      if(this.isLogin===false ){
        if(this.fname!=="" && this.lname!=="" && this.email!=="" && this.password!==""){
          console.log(`Name: ${this.fname} ${this.lname}\nEmail: ${this.email}\nPassword: ${this.password}`);
          this.signUpSuccess=true;
        }
        else alert("Please fill all fields!");
      }
        
      else{
        if(this.email!=="" && this.password!==""){
            console.log(`Email: ${this.email}\nPassword: ${this.password}`);
            this.signUpSuccess=true;
        }
        else alert("Please fill all fields!");
      }

    },
    loadLogin(){
      this.isLogin=true;
    }
,
    loadSignUp(){
      this.isLogin=false;
    }
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

