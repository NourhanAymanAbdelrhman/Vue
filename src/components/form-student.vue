<template>
    <div class="container">
      <div id="row" class="row pt-5">
  <form class="col-6 ">
      <input type="text" placeholder="enter your first-name" v-model="fname"  class="form-control"><br>
      <input type="text" placeholder="enter your last-name" v-model="lname" class="form-control"><br>
       <input type="email" placeholder="email"  v-model="email" class="form-control"><br>
       <input type="text" placeholder="gender"  v-model="gender" class="form-control"> <br>
         <button @click.prevent="add" class="btn btn-success" >Add</button>
      </form>
      <div class="col-6 ">
           <img src="@/assets/133-1339402_ders-alan-ocuk-clipart-student-study-animated.png"  alt="..." style="height:400px" > 
      </div>
    </div>
    </div>
</template>
 
<script>
import axios from 'axios'
    export default {
        name:'formComp',
        data(){
     return {

      
        fname: "",
       lname:"" ,
         email:"",
        gender:"",
      
            } },
      methods:{
         add(){
            axios.post('http://localhost:3000/students',{
                first_name:this.fname,
                last_name:this.lname,
                email:this.email,
                gender:this.gender
            })
            .then(res=>{
                console.log(res)
            })
            .catch(error=>{
                console.log(error)
            })
         }
      }      

    }
</script>

<style scoped>
 form{
     border:2px solid #3bb660;
     margin-bottom: 60px;
     background:linear-gradient(-45deg,  #a6c7b4  0%, #6dec93 100%);
 }
 input{
     margin-top:10px;
 }
 button{
     margin-bottom:10px;
 }
</style>