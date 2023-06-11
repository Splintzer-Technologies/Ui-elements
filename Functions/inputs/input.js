export async function input() {

    var a = setInterval(() => {
        if (document.readyState == 'complete') {
            clearInterval(a);
            checkEmail();
            checkPassword();
            checkPhone()
        }
    }, 100)
  


}



function checkPhone() {
    var phoneElement = document.querySelectorAll('.phone-input');

    if(phoneElement){

        phoneElement.forEach(el => {


            el.addEventListener('input', function (event) {
                let phoneLength = parseInt(el.getAttribute('data-se-length'))
    
                const inputValue = event.target.value;
                const anyCharacterRegex = /[-!$%^&*()_+@|~=`{}\[\]:";'<>?,.\/]/;
                const lowercaseRegex = /[a-z]/;
                const uppercaseRegex = /[A-Z]/;
                if (lowercaseRegex.test(inputValue) || uppercaseRegex.test(inputValue) || anyCharacterRegex.test(inputValue)) {
                    event.preventDefault()
                    event.target.value = inputValue.slice(0, inputValue.length - 1);
                }
                if (inputValue.length > phoneLength) {
                    event.preventDefault();
                    event.target.value = inputValue.slice(0, phoneLength);
                }
            });
            let id = el.getAttribute('data-se-msgId')
            var phoneErrorElement = document.getElementById(id);
            phoneErrorElement.style.display = 'none'
            el.addEventListener('mouseleave', () => {
    
                let phoneLength = parseInt(el.getAttribute('data-se-length'))
                if (el.value.length < phoneLength) {
                    phoneErrorElement.style.display = 'block'
                } else {
                    phoneErrorElement.style.display = 'none'
                }
            })
    
    
        })
    
    }


}



//======================================================
//  To check Email Validation
//=====================================================
function checkEmail() {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const emailElement = document.getElementById('email-input');

    if(emailElement){

    const emailErrorElement = document.getElementById('email-error');
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
}
}

//======================================================
//  To check passowrd Validation
//=====================================================
let passwordMouseOut = false;
function checkPassword() {

    var passElement = document.getElementById('password-input');
    if(passElement){
    passElement.setAttribute('validateChar', false)
    passElement.setAttribute('validateNumber', false)
    passElement.setAttribute('validateCaps', false)
    passElement.setAttribute('validateLower', false)


    passElement.addEventListener('mouseleave', () => {
        passwordMouseOut = true;
        passwordCheckExtended(passElement);

    })

    passElement.addEventListener('input', () => {
        if (passwordMouseOut) {
            passwordCheckExtended(passElement);
        }
    })
}
}

function passwordCheckExtended(passElement) {

    const anyCharacterRegex = /[-!$%^&*()_+@|~=`{}\[\]:";'<>?,.\/]/;
    const digitRegex = /\d/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;

    var passErrorElement = document.getElementById('password-error')

    if (uppercaseRegex.test(passElement.value)) {
        passElement.setAttribute('validateCaps', true)
        passErrorElement.style.display = 'none';


        if (lowercaseRegex.test(passElement.value)) {
            passErrorElement.style.display = 'none';
            passElement.setAttribute('validateLower', true)
            if (digitRegex.test(passElement.value)) {
                passElement.setAttribute('validateNumber', true)
                passErrorElement.style.display = 'none';

                if (anyCharacterRegex.test(passElement.value)) {
                    passElement.setAttribute('validateChar', true)
                    passErrorElement.style.display = 'none';

                    if (passElement.value.length > 8) {
                        passErrorElement.style.display = 'none';
                    } else {
                        passErrorElement.style.display = 'block';
                        passErrorElement.innerHTML = 'Password length should be greater then 8'

                    }
                }
                else {
                    passErrorElement.style.display = 'block';
                    passElement.setAttribute('validateChar', false)
                    passErrorElement.innerHTML = 'Please enter atleast one Symbol/character'
                }

            }
            else {
                passElement.setAttribute('validateNumber', false);
                passErrorElement.innerHTML = 'Please enter atleast one digit'
                passErrorElement.style.display = 'block';
            }

        }
        else {
            passErrorElement.style.display = 'block';
            passElement.setAttribute('validateLower', false)
            passErrorElement.innerHTML = 'Please enter atleast one Lower case letter'
        }

    }
    else {
        passErrorElement.style.display = 'block';
        passElement.setAttribute('validateCaps', false)
        passErrorElement.innerHTML = 'Please enter atleast one capital letter'
    }

}
//=====================================================
//=====================================================