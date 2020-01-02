<template> 
<v-container fluid class="my-2 ">
    <div class="v-row" style="margin-left:0px">
        <v-btn v-on:click="error = !error" color="primary"> Bank History </v-btn>
    </div>
    <div class="v-row" v-if="error" style="margin-left:0px" >
        <h4>Bank transfer history</h4>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                    </thead> 
                    <tbody>
                    <tr v-for="history in bankhistorys" :key="history.userId">
                        <td>{{ history.userId }}</td>
                        <td>{{ history.id }}</td>
                        <td>{{ history.title }}</td> 
                        <td>{{ history.completed }}</td>
                    </tr>
                    </tbody>
                 </template>
            </v-simple-table> 
    </div> 
    <div v-if="error" class="v-row btns_etn" style="margin-left:0px">
        <v-btn color="warning" dark large>Silver</v-btn>
        <v-btn color="warning" dark large>Bronze</v-btn>
        <v-btn color="warning" dark large>100</v-btn>
        <v-btn color="warning" dark large>200</v-btn>
    </div>
</v-container>
</template>


<script>    
import axios from 'axios';
export default{
    name:"bank_history",
    data(){
        return{
            bankhistorys: [],
            error:false,
            success: false
        }
    },
      mounted: function (){
          axios.get('https:jsonplaceholder.typicode.com/todos?_limit=3')
                .then(response => {
                    this.bankhistorys = response.data;
                    // console.log('resp',response)
                })
                // .catch(error => {
                    // console.log(error); 
                // });
        }
};  
</script>