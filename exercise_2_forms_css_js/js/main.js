let textbar = document.getElementById('textbar')
let button = document.querySelector('#submit-button')

function sayHello() {
    // sayHello(e) {
    // e.preventDefault() 
    // would prevent browser from refreshing after clicking.
    console.log('hello')
}

button.addEventListener('click', sayHello())


// now get user input



let username = document.querySelector('#textbar')

function sayHelloThere() {
    console.log(username.value)
}

button.addEventListener("click", (e) => {
        e.preventDefault()
        sayHelloThere()
    })
    // will return my username once I click on "submit"