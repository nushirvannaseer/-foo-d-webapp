<template>
  <router-view></router-view>
</template>

<script>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          console.log(user);
          router.replace("/");
        } else if (route.path === "/") router.replace("/posts");
      });
    });
  },
};
</script>
