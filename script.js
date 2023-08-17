const notifyButton = document.querySelector('.subscribe');

const inputForm = document.getElementById('email');

const inputError = document.querySelector('.input-error'); // Use the correct class name

 

function validateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 

  if (input.value.match(validRegex)) {

    // If the email is valid, hide the error message (if it was previously shown)

    inputError.classList.add('hidden'); // Add the 'hidden' class to hide the error message

    inputForm.style.border = '';

    return true;

  } else {

    // If the email is invalid, show the error message

    inputError.classList.remove('hidden'); // Remove the 'hidden' class to show the error message

    inputForm.style.border = '1px solid red'

    return false;

  }

}

 

// Add an event listener to the subscription button to trigger email validation

notifyButton.addEventListener('click', function () {

  validateEmail(inputForm);

});

 