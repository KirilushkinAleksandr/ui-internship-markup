const form = document.getElementsByClassName("form")[0];
const submit = document.getElementsByClassName("form__input-submit")[0];

form.addEventListener('keyup', function (event) {
  if ( form.checkValidity() ) {
    submit.classList.remove( 'form__input-submit_disabled' );
  } 
});