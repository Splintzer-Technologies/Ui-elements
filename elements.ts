// import {input} from './Functions/inputs/input.js'

export module init{
  export  function input(){
        checkMail()
    }
}

function checkMail(){

    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var emailElement:any = document.getElementById('email-input');
    var emailErrorElement:any = document.getElementById('email-error');
    console.log(emailErrorElement)
    emailErrorElement.style.display = 'none';
    emailElement.setAttribute('inputValid', false)

    emailElement.addEventListener('mouseleave', () => {

        if (!emailRegExp.test(emailElement.value)) {
            emailErrorElement.style.display = 'block';
            emailElement.setAttribute('inputValid', false)
        } else {
            emailErrorElement.style.display = 'none';
            emailElement.setAttribute('inputValid', true)
        }
    }) 

    console.log('hello')
}