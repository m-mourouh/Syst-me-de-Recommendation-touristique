const birth = document.querySelector("#birth");
const btn = document.querySelector('.btn1') ;
// const errors = document.querySelectorAll('.input-errors')

//Events
birth.addEventListener("click", function () {
  this.type = "date";

});

//Ajax 
$(document).ready(function(){
  $('.signUpForm').on('submit',function(e){
    e.preventDefault()
    

      $.ajax({
          url : $('.signUpForm').attr('data-url'),
          type: 'POST',
          data: $('.signUpForm').serialize()
      }).done(function(data){
        console.log(data)
        if(data.errors){

          $.each($('.input-errors') , function(index, item) { 
              field = $(item).attr('data-error-field')
              
              if(data.errors[field]){
                if(data.errors[field][0].includes('required')){
                  $(item).text('Ce champ est obligatoire')
                }
                if(data.errors[field][0].includes('valid')){
                  $(item).text('Entrer une adresse email valide')
                }
                if(data.errors['err']==400){
                  $(item).text(data.errors['confirmpass'])
                }
              }else{
                $(item).text('')
              }
            });
           
          
       
          // console.log(data.errors['prenom'][0])
          // console.log($('.input-errors'))
        }
        // if($('#password-1').val() != $('#password-2').val()){
        //   // $($('.input-errors').text('two passwords do not match')
        //   $($('.input-errors')[6]).text('two passwords do not match')
        //   }
        if(data.url){
          window.location.href = data.url

        }
      })
          
  })
})