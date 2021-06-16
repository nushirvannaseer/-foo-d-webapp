<template>
  <div id="app">
    <button @click="Logout">
      Log Out
    </button>
    &nbsp;
    <button>
      <router-link to="/geoLocation"> Get Location</router-link>
    </button>

    <ul>
      <li class="post-item" v-for="(post, index) in posts" :key="index">
        <span style="font-weight: bold">{{ post.fullname }}</span>
        <br />
        <span style="font-size: smaller"> {{ post.date }} </span><br />
        {{ post.postContent }}
        <br /><span style="font-weight: bold"
          >{{ `Likes ${post.likes}  Comments ${post.comments}` }} </span
        ><br />
        <facebook-button
          url="https://www.google.com.pk"
          description="Hey! Check out this post on Foo-D!"
        />
        <twitter-button
          @click="LogAnalyticalData('twitter')"
          url="http://localhost:8080/posts"
          description="Hey! Check out this post on Foo-D!"
        />
        <linked-in-button
          url="https://www.google.com.pk"
          description="Hey! Check out this post on Foo-D!"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.post-item {
  box-shadow: 1px 1px 1px 1px black;
  width: 80vw;
  /* ;
   */
  border-radius: 10px;
  padding: 3%;
  background-color: silver;
  margin: 4%;
  list-style: none;
  margin-bottom: 1.5%;
  margin-top: 1.5%;
}

#app {
  background-color: gray;
  min-height: 150vh;
}
</style>

<script>
import firebase from "firebase";
import { useRouter } from "vue-router";
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
import LinkedInButton from "vue-share-buttons/src/components/LinkedInButton";
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";

export default {
  data() {
    console.log(POSTS);
    return {
      posts: POSTS,
    };
  },

  components: {
    TwitterButton,
    LinkedInButton,
    FacebookButton,
  },

  methods: {
    LogAnalyticalData(type) {
      console.log(type);
      firebase.analytics().logEvent("notification_received");
    },

    Logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          useRouter().replace("/loginSignUp");
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    },

    Geolocation() {
      useRouter().replace("/geoLocation");
    },
  },
};

const POSTS = [
  {
    fullname: "Dummy User",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus. Magna sit amet purus gravida quis blandit turpis cursus in. Lobortis scelerisque fermentum dui faucibus in ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada. Donec ac odio tempor orci dapibus ultrices in iaculis. Turpis massa tincidunt dui ut ornare lectus sit.",
    date: "2012-04-23T18:25:43.511Z",
    likes: 6,
    comments: 9,
  },

  {
    fullname: "Dummy User2",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus. Magna sit amet purus gravida quis blandit turpis cursus in. Lobortis scelerisque fermentum dui faucibus in ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada. Donec ac odio tempor orci dapibus ultrices in iaculis. Turpis massa tincidunt dui ut ornare lectus sit.",
    date: "2012-04-23T18:25:43.511Z",
    likes: 4,
    comments: 20,
  },

  {
    fullname: "Dummy User",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus. Magna sit amet purus gravida quis blandit turpis cursus in. Lobortis scelerisque fermentum dui faucibus in ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada. Donec ac odio tempor orci dapibus ultrices in iaculis. Turpis massa tincidunt dui ut ornare lectus sit.",
    date: "2012-04-23T18:25:43.511Z",
    likes: 6,
    comments: 9,
  },

  {
    fullname: "Dummy User2",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus. Magna sit amet purus gravida quis blandit turpis cursus in. Lobortis scelerisque fermentum dui faucibus in ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada. Donec ac odio tempor orci dapibus ultrices in iaculis. Turpis massa tincidunt dui ut ornare lectus sit.",
    date: "2012-04-23T18:25:43.511Z",
    likes: 4,
    comments: 20,
  },
  {
    fullname: "Dummy User",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus. Magna sit amet purus gravida quis blandit turpis cursus in. Lobortis scelerisque fermentum dui faucibus in ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada. Donec ac odio tempor orci dapibus ultrices in iaculis. Turpis massa tincidunt dui ut ornare lectus sit.",
    date: "2012-04-23T18:25:43.511Z",
    likes: 6,
    comments: 9,
  },

  {
    fullname: "Dummy User2",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus. Magna sit amet purus gravida quis blandit turpis cursus in. Lobortis scelerisque fermentum dui faucibus in ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada. Donec ac odio tempor orci dapibus ultrices in iaculis. Turpis massa tincidunt dui ut ornare lectus sit.",
    date: "2012-04-23T18:25:43.511Z",
    likes: 4,
    comments: 20,
  },
  {
    fullname: "Dummy User",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus. Magna sit amet purus gravida quis blandit turpis cursus in. Lobortis scelerisque fermentum dui faucibus in ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada. Donec ac odio tempor orci dapibus ultrices in iaculis. Turpis massa tincidunt dui ut ornare lectus sit.",
    date: "2012-04-23T18:25:43.511Z",
    likes: 6,
    comments: 9,
  },

  {
    fullname: "Dummy User2",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus. Magna sit amet purus gravida quis blandit turpis cursus in. Lobortis scelerisque fermentum dui faucibus in ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada. Donec ac odio tempor orci dapibus ultrices in iaculis. Turpis massa tincidunt dui ut ornare lectus sit.",
    date: "2012-04-23T18:25:43.511Z",
    likes: 4,
    comments: 20,
  },
];
</script>
