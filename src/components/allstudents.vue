<template>
    <div class="container">
<table class="table  table-dark  table-striped table-hover ">
          <thead>
            <tr class="table-dark"> 
              <th scope="col"> Student-id </th>
              <th scope="col">First-name</th>
              <th scope="col">Last-name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
             <th > <button class="btn btn-danger" @click=" Deleteall()"> Delete All</button></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id">
              <th scope="row">{{ student.id }}</th>
              <th scope="row">{{ student.first_name}}</th>
              <th scope="row">{{ student.last_name}}</th>
              <th scope="row">{{ student.email}}</th>
              <th scope="row">{{ student.gender}}</th>
              <td>
                  <router-link class="btn btn-success " :to="`/students/${student.id}`">see more</router-link>
              </td>
              <td> <button class="btn btn-danger" @click="Delete(student)"> Delete</button></td>
            </tr>
          </tbody>
 </table>
 
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'studentsComp',
        data(){
        return {
          students:[]
       
            } },
        created(){
                this.getstudents()
            },
    
            // updated(){
            //       this.getstudents()
            // },
      methods:{
         getstudents(){
            axios.get('http://localhost:3000/students')
            .then(res=>{
               this.students=res.data
              
            })
            .catch(error=>{
                console.log(error)
            })
         },
       async Delete(studentt){
          console.log(studentt)
       await axios.delete(`http://localhost:3000/students/${studentt.id}`)
       .then(res=> {
       this.students.splice(studentt.id, 1);
       this.getstudents()  
        console.log(res) 
         })},
        async Deleteall(){
          console.log("done")
          for(let i=0;i<this.students.length-5;i++){
       await axios.delete(`http://localhost:3000/students/${this.students[i].id}`)
       .then(res=> {
       this.students.splice(this.students[i].id,1); 
        console.log(res)  
        })    }      },

   }
    } 
</script>

<style scoped>
 table{
   margin-top: 30px;
  
 }
</style>