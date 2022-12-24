<script setup>
</script>

<template>
<div class="todo mt-5 d-flex justify-content-center flex-column align-items-center ">
<img class="dibujo1 mt-3" src="../assets/Images/trabajo2.png" alt="2trab">
<h3 class="mx-auto text-center">Would you like to join our team?</h3>
<h4 class="mx-auto text-center">Leave us your information so that our recruiters can contact you:</h4>
<div>
    <div class="card w-100 w-sm-50 m-2 mx-auto">
  <div class="card-body">
    <input class="form-control form-control mb-3" type="text" placeholder="Name" aria-label=".form-control-lg example">
    <input class="form-control form-control mb-3" type="text" placeholder="Last Name" aria-label=".form-control-lg example">
    <input class="form-control form-control mb-3" type="email" placeholder="example@example.com" aria-label=".form-control-lg example"> 
    <input class="form-control form-control mb-3" type="text" placeholder="Country" aria-label=".form-control-lg example">
    <select class="form-select form-select  mb-3" aria-label=".form-select-lg example">
  <option selected>Position you are applying for:</option>
  <option value="1">IT</option>
  <option value="2">Sales</option>
  <option value="3">Finance & Accounting</option>
  <option value="4">Support</option>
</select>
<div class="mb-3">
  <label for="formFile" class="form-label">Add CV file: </label>
  <input class="form-control" type="file" id="formFile">
</div >
<div class="d-grid" >
    <button class="btn btn-primary shadow" type="button">Apply</button>
</div>
  </div>
</div>
</div>
</div>
<div class=" pie d-flex justify-content-around">
    <div>
<img class="dibujo2 " src="../assets/Images/trabajoHombre.png" alt="">
</div>
<div>  
<img class="dibujo2 " src="../assets/Images/trabajoMujer.png" alt="">
</div>
</div>




</template>

<style scoped>
.todo{
    background-color:#023047;
    color:white;
    max-height: 90vh;
}
.card-body{
    background-color:#023047; 
    border-radius: 1rem;
}
.dibujo1{
padding: 1rem;
width: 300px;
    height: 300px;

}
.btn {
    background-color: #fbb703;
    border-style: none;
}
.dibujo2{
    width: 200px;
    height: 200px;
}
.pie{
    background-color:#023047;  
}
</style>