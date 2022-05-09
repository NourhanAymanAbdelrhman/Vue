import { createApp } from 'vue';
import App from './App.vue';
import'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRouter,createWebHistory} from 'vue-router';

import updateComp from'./components/updateform.vue'
import homeComp from './components/home.vue'    
import detailsComp from './components/studentdetails.vue';
import  formComp from './components/form-student.vue';
import  studentsComp from './components/allstudents.vue';
import notfoundComp from './components/notfound.vue' ;
const routes = [
    {
        path:'/home', ///posts/:id
        component:homeComp,
        
    },
    {
        path:'/register', ///posts/:id
        component:formComp,
        
    },
    {
        path:'/students',
        component:studentsComp,
        
    },{
        path:'/students/:id',
        component:detailsComp,
    },
    {
        path:'/students/studentdetails/:id',
        component:updateComp,
    },
    {
        path:'/:Notfound(.*)*',
        component:notfoundComp,
    },
    
   
]
const router=createRouter({
    history:createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')

