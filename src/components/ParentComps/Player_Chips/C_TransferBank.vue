<template>


    <div class="container transferform">
        <v-row align="center">
            <v-btn v-on:click="error=!error" small>Transfer to Bank</v-btn>
        
            <v-col v-if="error" cols="12" sm="6" md="3">
           
            </v-col>
        </v-row>

        <v-container  v-if="error" class="grey lighten-5">
            <v-row>
                <v-col cols="3">
                        <v-text-field label="Player ID" placeholder="" filled> </v-text-field>
                        <v-text-field label="Comments" placeholder="" filled> </v-text-field>
                    <div class="btns_etn">
                        <v-btn color="error " dark large>Silver</v-btn>
                        <v-btn color="error" dark large>Bronze</v-btn>
                        <v-btn color="error" dark large>100</v-btn>
                        <v-btn color="error" dark large>200</v-btn>
                        <v-btn color="" dark v-on:click="error=!error" large>Back</v-btn>
                       
                    </div>
                </v-col>
                
                <v-col cols="3">
                    <v-btn large>Check VIP Package </v-btn>
                </v-col>
            </v-row>
        </v-container>

    </div>

</template> 

<script>
    export default {
    name: "TransferBank",

    data: () => ({
     error: false
     
    })
};
</script>

<style>
.grey{
    background-color:aqua
}

.btns_etn{
    display: flex;
}

</style>