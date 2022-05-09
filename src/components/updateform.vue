<template>
<div class="container">
      <div id="row" class="row pt-5">
    
  <form class="col-6 ">
      <input type="text" placeholder="enter your first-name" v-model="fname" class="form-control"><br>
      <input type="text" placeholder="enter your last-name" v-model="lname" class="form-control"><br>
       <input type="email" placeholder="email"  v-model="email" class="form-control"><br>
       <input type="text" placeholder="gender"  v-model="gender" class="form-control"><br>
         <button @click.prevent="updateinfo" class="btn btn-success" >Add</button>
      </form>
      <div class="col-6 ">
         <img src="@/assets/updateform.jpg"  alt="..." style="height:400px" > 
      </div>
    </div>
</div>
</template>

<script>
   import axios from 'axios'
    export default {
        name:'updateComp',
    data(){
        return{
     id:'',
     fname:'',
     lname:''
        }
    },
     
        methods:{
            created(){
           this.updateinfo()
            },
        updateinfo(){
            this.id=this.$route.params.id
        axios.put(`http://localhost:3000/students/${this.id}`,
        { 
            first_name:this.fname,
                last_name:this.lname,
                email:this.email,
                gender:this.gender
          } )
        // console.log(res)
    }
    } 

    }
</script>

<style scoped>

</style>