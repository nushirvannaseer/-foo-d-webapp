<template>
  <button @click="Logout">Log Out</button>
  <div id="app"></div>
  <ul>
    <li v-for="(post, index) in posts" :key="index">
      <span
        >{{ post.fullname }}
        <br />
        {{ post.date }}
        <br />
        {{ post.postContent }}
        <br />{{ `Likes ${post.likes}  Comments ${post.comments}` }}
      </span>
      <facebook-button
        url="https://www.google.com.pk"
        description="Hey Check out this post on Foo-D!"
      />
      <twitter-button
        url="http://localhost:8080/posts"
        description="Hey Check out this post on Foo-D!"
      />
      <linked-in-button
        url="https://www.google.com.pk"
        description="Hey Check out this post on Foo-D!"
      />
    </li>
  </ul>
</template>

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
