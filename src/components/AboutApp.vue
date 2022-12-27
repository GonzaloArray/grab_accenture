<script setup>
</script>
<template>
    <div class="todo">
<div class="seccionA d-flex justify-content-around pt-5">
    <div>
        <h2 class="mb-3 text-center">THE PROBLEM TO SOLVE</h2>
        <p class="fs-4">The 2020 pandemic faced us with new challenges.<br> We had to change the way we met <br>and be able to carry out projects remotely.</p>     
<p class="final fs-4">The office was no longer there.<br>
And now how do we do it?</p>
    </div>
    <div>
        <img src="../assets/Images/about1.png" alt="">
    </div>
</div>

<div class="seccionA d-flex justify-content-around ">
    <div>
        <img src="../assets/Images/about2.png" alt="">
    </div>
    <div>
        <h2 class="mb-3 text-center">THE ANSWER THAT CHALLENGED US</h2>
                <p class="fs-4">
So it was that our team took up the challenge.<br> And we got to work to develop<span><strong> THE SOLUTION.</strong></span></p>
       
    </div>
</div>
<div class="seccion d-flex justify-content-around">
    <div>
        <h2 class="mb-3 text-center">AN IDEA IS BORN, GRAB IS BORN.</h2>
<p class="fs-4">
Our founding developers:<span><strong>G</strong></span>utierrez Ivan, <span><strong>R</strong></span>uiz Garcia Agustin<br>  <span><strong>A</strong></span>rrayan Gonzalo and <span><strong>B</strong></span>arila Paola, shaped the dream.
<br>Today GRAB is positioned in the market and has<br> added collaborators from 15 countries on 3 continents.
<br> <span><strong>And we go for more!</strong></span></p>
               
    </div>
    <div>
        <img src="../assets/Images/about3.png" alt="">
    </div>
</div>
</div>

</template>
<style scoped>
.todo{
    background-color:#023047;
    color:white;
   min-height: 90vh;
    background-image: radial-gradient(circle at 37.72% -19.64%, #5f627f 0, #00214d 50%, #000022 100%);   
}
img{
    width: 100%;
    height: 400px;
}
p{
    padding-left: 3rem;
    text-align: justify;
}
.final{
    color: #fa8500;
    font-weight: bold;
}
strong{
    color: #fa8500;
    font-size:larger; 
}
.seccionA{
    margin-bottom: 5rem;
}
.seccion{
    padding-bottom: 2rem;
}
</style>