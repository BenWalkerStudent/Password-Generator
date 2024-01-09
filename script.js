//inputs
const generate = document.querySelector('.generate')

const numInput = document.querySelector('.text-box')

const checkBoxes = document.querySelectorAll('.checkbox')

//outputs
let password = [];

const error = document.querySelector('.error')

const passwordOutput = document.querySelector('.password')

//variables
let randomNum;

let randomChar

let characters = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    , ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    , [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    , ['"', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', ';', '~', '?', ',', '.', '/']]

//functions
const displayPasswod = function () {

    characters = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        , ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        , [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        , ['"', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', ';', '~', '?', ',', '.', '/']]

    passwordOutput.textContent = ''

    for (let i = 0; i < password.length; i++) {

        passwordOutput.textContent = passwordOutput.textContent + password[i]

    }
}

const generatePassword = function () {

    if (numInput.value === '' || Number(numInput.value) === 0) {

        error.classList.remove('hide')

        setTimeout((e) => {

            error.classList.add('hide')

        }, 3000)

    } else if (Number(numInput.value) > 100) {

        error.classList.remove('hide')

        error.textContent = 'password cannot be longer than 100 characters'

        setTimeout((e) => {

            error.textContent = 'PLEASE ENTER VALID LENGTH'

            error.classList.add('hide')

        }, 3000)

    } else {

        password = []

        for (let i = 0; i < Number(numInput.value); i++) {

            /* if it returns 0 use a lower case number,
               if it returns 1 use an uppercase letter,
               if it returns 2 use a number,
               if it returns 3 use a symbol */


            if (checkBoxes[0].checked === false) {

                characters[1] = characters[0]

            }
            if (checkBoxes[1].checked === false) {

                characters[2] = characters[0]

            }

            if (checkBoxes[2].checked === false) {

                characters[3] = characters[0]

            }

            randomNum = Math.floor(Math.random() * 4)

            randomChar = characters[randomNum][Math.floor(Math.random() * characters[randomNum].length)]

            password.push(randomChar)

            console.log(password)






        }

        displayPasswod()

    }

}

//event listeners
generate.addEventListener('click', generatePassword)





