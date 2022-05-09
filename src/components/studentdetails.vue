<template>
    <div class="container pt-5">
     <div class="row">
        <div class="col-4">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{fname}}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Gender:{{gender}}</li>
    <li class="list-group-item">Email:{{email}}</li>
  </ul>
   <div class="card-body">
    <router-link class="btn btn-danger" :to="`/students/studentdetails/${id}`">update</router-link>
   </div>
  </div>
        </div>
        <div class="col-4">
          <img src="@/assets/details.jpg"  alt="..." style="height:400px" > 
        </div>
      </div>

    </div> 
</template>

<script>
      import axios from 'axios'
    export default {
        name:'detailsComp',
        data(){
     return {
     id:'',
     fname:'',
     lname:'',
     gender:'',
     email:''
     }},
     created(){
       this.getbyid()
     },
     methods:{

     getbyid(){
     this.id=this.$route.params.id
     axios.get(`http://localhost:3000/students?id=${this.id}`).
     then(res=>{
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
             this.fname=res.data[i].first_name
             this.lname = res.data[i].last_name
             this.email =res.data[i].email
             this.gender =res.data[i].gender
          } 
          } )
        .catch(error=>{
            console.log(error)
        })
     },
     
     
    


     }  
}


</script>

<style scoped>

</style>
