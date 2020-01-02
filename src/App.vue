<template>
  <v-app>
     <Logo />
     <LoggedinScreen />
     <router-view />
    
    <v-content>
      <v-container fluid>
      <router-link to ="/bank_history">
        <v-btn v-on:click="error = !error" color="primary">Bank</v-btn>
      </router-link>
      </v-container>
    </v-content>


    <!-------footer---------->
    <router-link to ="links">
       <hr>
      <v-btn color="warning">Play Slots </v-btn>
    </router-link> 
  </v-app>
</template>

<script>
import Logo from "./components/Logo"
import LoggedinScreen from "./components/ParentComps/LoggedinScreen/LoggedinScreen";
export default {
  name: "App",
  components: {
    LoggedinScreen,
    Logo
    // home,
  },
  data: () => ({
  })
};
</script>
