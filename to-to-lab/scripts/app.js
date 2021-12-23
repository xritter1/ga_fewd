//   

//     to do list: unshift and append the new item once clicked
// my to dos- 0 number could be a loop .. math function .. subtracting the number.
// to do list is an array 
// addeventlistener fort the ADD button
// addeventlistener when clicking on the items in the to-do-list it translates to the right side, so it appends there, we use the css translate using the x-axis shift.

// textinput
const toDoItem = document.querySelector('#textInput').value
const add = document.querySelector('#addButton')

// create empty list
const listOfItems = []

// as soon as the "Add" is clicked (eventListener) then append to empty list with  append.





// call URL
// const api_key = 'dc6zaTOxFJmzC'

let button = document.querySelector('#submitButton')








async function getData(event) {
    event.preventDefault()
    const searchTerm = document.querySelector('#textInput').value
        // string/object/template literal
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=25`
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {

            // for loop
            for (let i = 0; i < res.data.length; i++) {

                var dogsImages = document.createElement("img")
                console.log(dogsImages)
                    // image src = res.data[i].images.original.url
                dogsImages.src = res.data[i].images.downsized.url
                var block = document.getElementById("urlID")
                block.appendChild(dogsImages);
            }
        })
        .catch(err => {
            console.log("error!", err)
        })
}


button.addEventListener('click', getData)

// Array.map or Array.forEach

// for loop for length of response

// console.log("success!", res.data)
// const dogImage = document.querySelector('#urlID')
// dogImage.src = res.data[0].images.original.url