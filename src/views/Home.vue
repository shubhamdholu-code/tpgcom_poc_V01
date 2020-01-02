<template>
  <div class="home">
    <!-- <img class="logo" alt="tpg logo" src="../assets/logo.png" /> -->
    <!-- <router-view /> -->
 
    <!-- <Player_Chips></Player_Chips> -->
    <!-- <facebook-login
      class="button" 
      appId="2443861825854104"
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded"
    /> -->
    <!-- <router-link to ="links">Play Online</router-link> -->


  </div>
</template>


<script>
// import HelloWorld from "@/components/HelloWorld.vue";

// import facebookLogin from "facebook-login-vuejs";
// import Player_Chips from "../components/ParentComps/Player_Chips/Player_Chips"; 

export default {
  name: "home",
  components: {
    // Player_Chips,

    // facebookLogin
  },
  // data() {
  //   return {
      // idImage, loginImage, mailImage, faceImage,
  //     isConnected: false,
  //     name: "",
  //     email: "",
  //     personalID: "",
  //     FB: undefined
  //   };
  // }
  // methods: {
  //   getUserData() {
  //     this.FB.api(
  //       "/me",
  //       "GET",
  //       { fields: "id,name,email" },
  //       userInformation => {
  //         console.log("data api", userInformation);
  //         this.personalID = userInformation.email;
  //         this.email = userInformation.email;
  //         this.name = userInformation.name;
  //       }
  //     );
  //   },

  //   sdkLoaded(payload) {
  //     this.isConnected = payload.isConnected;
  //     this.FB = payload.FB;
  //     if (this.isConnected) this.getUserData();
  //   },
  //   onLogin() {
  //     this.isConnected = true;
  //     this.getUserData();
  //   },
  //   onLogout() {
  //     this.isConnected = false;
  //   }
  // }
};
</script>

<style>
* {
  margin: 0;
}
.logo {
  width: 15%;
  text-align: center
}
</style>
