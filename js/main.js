
document.addEventListener ('DOMContentLoaded', function() {

  var modal = document.querySelector('.modal'),
      signInButton = document.querySelector('.signin'),
      closeButton = document.querySelector('.close'),
      submitButton = document.querySelector('.submit'),
      userText = document.querySelector('#user'),
      passText = document.querySelector('#pass');



  signInButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });


  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  submitButton.addEventListener('click', function() {
    userText.classList.add('error');
    passText.classList.add('error');
  });

  userText.addEventListener('mouseover', function() {
    userText.classList.remove('error');
  });

  passText.addEventListener('mouseover', function() {
    passText.classList.remove('error');
  });

});
