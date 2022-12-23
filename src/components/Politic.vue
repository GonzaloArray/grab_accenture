<script setup>
</script>
<template>
    <div class="todo d-flex flex-column justify-content-center aling-items-center">
    <h2 class="mt-5 mx-auto text-center">Privacy Policy</h2>
   <p class="mx-auto fs-4"> What this policy covers.</p>
<p class="mx-auto fs-6 text-center"> Your privacy is important to us, and so is being transparent about how we collect,</p>
<p class="mx-auto fs-6 text-center">use, and share information about you. This policy is intended to help you understand:</p> 
<div class="accordion w-75 mx-auto mb-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What information we collect about you
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Information you provide to us.</strong> We collect information about you when you input it into the Services or otherwise provide it directly to us. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How we use information we collect
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>To provide the Services and personalize your experience: </strong> We use information about you to provide the Services to you, including to process transactions with you, authenticate you when you log in, provide customer support, and operate, maintain, and improve the Services.  For example, we use the name and picture you provide in your account to identify you to other Service users.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How we share information we collect
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>For collaboration:</strong> You can create content, which may contain information about you, and grant permission to others to see, share, edit, copy and download that content based on settings you or your administrator (if applicable) select.  Some of the collaboration features of the Services display some or all of your profile information to other Service users when you share or interact with specific content. 
      </div>
    </div>
  </div>
</div>
</div>
</template>
<style scoped>
.todo{
    background-color:#023047;
    color:white;
   
}
.accordion-button{
    background-color:#023047;
    color:white;
}
h2{
    font-family: var(--font-title);
}
p{
    font-family: var(--font-text);  
}
</style>