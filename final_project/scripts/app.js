// this trivia game I learned:
// forEach, Array.from, classList, querySelectorAll, getAttribute, setAttribute, this

// fetch the API for Trivia
// this API selects 5 random questions with boolean answers, category music
const url = `https://opentdb.com/api.php?amount=5&category=12&type=boolean`


// show the data from the API in JSON
fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log("success!", res);
    })
    .catch(err => {
        console.log("something went wrong...", err);
    });


// I want to have each column showing a different category. Needed to dig in API to find categories that had boolean, thus weird category chronology
// 12=Music
// 9=General Knowledge
// 14=TV
// 18=Science:Computers
// 17=science and nature
const categories = ['12', '9', '14', '18', '17']


// function for questions for each box
function showQuestion() {
    const categ = document.createElement("div")
    categ.classList.add("category")
        // categ.innerHTML = "test"
    trivia.append(categ)

    categories.forEach(cats => {
        const box = document.createElement("div")
        box.classList.add("box")
        categ.append(box)

        if (cats === "12") {
            box.innerHTML = "Music! "
        }
        if (cats === "9") {
            box.innerHTML = "General Knowledge! "
        }
        if (cats === "14") {
            box.innerHTML = "TV! "
        }
        if (cats === "18") {
            box.innerHTML = "Science-Computers! "
        }
        if (cats === "17") {
            box.innerHTML = "Science-Nature! "
        }

        fetch(`https://opentdb.com/api.php?amount=5&category=${cats}&type=boolean`)
            .then(res =>
                res.json())
            .then(data => {
                console.log(data)
                box.setAttribute('APIcallquestion', data.results[0].question)
                box.setAttribute('APIcallanswer', data.results[0].correct_answer)
                box.setAttribute('category', box.getInnerHTML())
            })
            .then(done => box.addEventListener("click", flipBox))

    })
}
// this will show the whole game:
showQuestion()

// this following function adds the functionality to flip the card
function flipBox() {
    console.log('clicked')
    const showQuestionInBox = document.createElement("div")
    const trueButton = document.createElement("button")
    const falseButton = document.createElement("button")
    trueButton.innerHTML = "True"
    falseButton.innerHTML = "False"
        // We want to see the answer if we click the T/F button:
    trueButton.addEventListener('click', getAnswer)
    falseButton.addEventListener('click', getAnswer)
    showQuestionInBox.innerHTML = this.getAttribute('APIcallquestion')
        // this keyword  I learned in the tutorial
    this.append(showQuestionInBox, trueButton, falseButton)

    // searching all classes with box and store them into an array
    // then we call the whole array and prohibit further clicking
    // this prevents boxes from being able to be clickable without having selected 'tru/false' on the first clicked box
    // const allBoxes = Array.from(document.querySelectorAll('.box'))
    // allBoxes.forEach(box => box.removeEventListener('click', flipBox))
}

// function to show if clicked answer is true or false,.. if it's matching
function getAnswer() {
    // parent=>the question div
    const boxOfButton = this.parentElement
    const testtest = this.innerHTML
    console.log(boxOfButton)
    console.log(testtest)
        // if we click the button, the apicallanswer will compare with the innerhtml of the "True" of the button
    if (boxOfButton.getAttribute('APIcallanswer') === this.innerHTML) {
        boxOfButton.classList.add('right-on')
            // boxOfButton.innerHTML = boxOfButton.getAttribute('numberWon')
        console.log("Yass!")
        boxOfButton.innerHTML = "Good Job!"
    } else {
        boxOfButton.classList.add("nope")
        boxOfButton.innerHTML = "Wrong answer!"
    }
    boxOfButton.removeEventListener('click', flipBox)
        // my box does not turn red/green if wrong/right but it shows html

}


// make a refresh button "next round"
function refresh() {
    window.location.reload("Next Round!")
}