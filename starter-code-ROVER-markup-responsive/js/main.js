/**
 * Try to manipulate the page
 * 
 * Easiest
 * 1) Get the title for each dog/cat services, and put them into the console using console.log
 * 2) Change the title of the page to "We're the CAT People"
 * 3) Change the main image to be something cat related.
 * 
 * 
 * Harder
 * 1) Replace the call to action button background color with "red"
 * 2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)
 * 3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
 * 
 * 
 * Hardest (only if you get the others first)
 * 1) Make the responsive menu work!
 * 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button
 */

// Easiest







//  Easiest

// 1) 
// I want to show "Search Sitters" or "Become a Sitter"

const testtesttest = document.querySelector("#sitterSearch")
console.log(testtesttest.innerHTML)

const testest = document.querySelector("#sitterBecome")
console.log(testest.innerHTML)

const thirdsthecharme = document.querySelector("#Services")
console.log(thirdsthecharme.innerHTML)



// 2) Change the title
const newTitle = document.getElementById('test')

newTitle.innerHTML = "We're the CAT People";



//  3) edit image... it doesn't appear?

// if my img had an id with "imageduh"
// const findImageIm = document.getElementsByClassName(rover-hero-container)[0]

// ("imageduh").src = "../img/cat.jpg";


// but I put the background image in css so
// I need to target the first css property in a class 
const imgdev = document.getElementsByClassName('rover-hero-container')[0];

imgdev.style.backgroundImage = "url('../img/cat.jpg')"