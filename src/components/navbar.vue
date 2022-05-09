<template>
<div class="container-fluid">
  <div class="row">
    <nav  class="navbar navbar-expand-lg  bg-dark col-12 fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" >
          
        <img src="@/assets/site.jpg" class="nav-link " style="height:40px;width:70px">
         
        <router-link class="nav-link active text-light"  aria-current="page" to="/home">Home</router-link>
         <router-link class="nav-link nav-item text-success" to="/register">Signin </router-link>
        <router-link class="nav-link text-success" to="/students">Users</router-link>
        <a href="#about" class="nav-link text-success"> about us</a> 
        <a href="#cources" class="nav-link text-success"> cources</a>                         
                                     
        <img src="@/assets/logoo.jpg" class="nav-link " height="50px" >
      </div>
    </div>
  </div>
</nav>
  </div>
</div>
</template>

<script>
    export default {
        name:'navbarComp'
    }
</script>

<style scoped>

</style>