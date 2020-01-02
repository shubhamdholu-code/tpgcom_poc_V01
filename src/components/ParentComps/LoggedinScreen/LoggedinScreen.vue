<template>
  <div class="loggedinscreen">
    <!-- <p>this is logged in screen</p> -->

    <!-- <v-container>
      <v-row dense > 
        <v-col cols="12" >
          <v-card color="#385F73" dark d-inline >
            <v-avatar class="avatar" color="indigo" size="100">
             <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>
            <v-card-title class="headline">Hi, Player</v-card-title>
            <v-card-subtitle>....</v-card-subtitle>
            <v-card-actions class="justify-center">
              <v-btn class="online_button" color="error">Play Online</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->

    <v-container >
      <v-row class="green darken-1" style="height: 200px; border-radius: 6px; top: 50%">
        <v-col sm="3">
         <v-avatar class="avatar" color="indigo" size="178">
             <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-avatar>
        </v-col>

        <v-col sm="9">
          <v-card-title class="headline">John Doe</v-card-title>
            <v-card-subtitle>....</v-card-subtitle>
            <v-card-actions class="justify-center">
              <v-btn class="online_button" color="error">Play Online</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>

 
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row :align="alignment" :justify="justify" class="grey lighten-5" style="height: 100px;">
          <v-card  @click="onClick" v-for="n in 2" :key="n" class="ma-3 pa-2" style="height: 100%">
            Buy Chips
          </v-card>

           <v-card @click="onClick" v-for="n in 1" :key="n" class="ma-3 pa-2" style="height: 100%">
            Collect Bonus
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <!-- <v-col
            cols="6"
            md="2"
          >
            <v-select
              v-model="alignment"
              :items="alignmentsAvailable"
              label="Align"
            ></v-select>
          </v-col> -->

          <!-- <v-col
            cols="6"
            md="2"
          >
            <v-select
              v-model="justify"
              :items="justifyAvailable"
              label="Justify"
            ></v-select>
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  </div>
</template>








<script>
export default {
  name: "LoggedinScreen",

data(){
return {
        alignment: 'center',
        justify: 'center',
};
},
methods: {
  onClick() {
    // alert(888);
  }
}
}
</script>


<style>

* {
  margin: 0;
}


</style>