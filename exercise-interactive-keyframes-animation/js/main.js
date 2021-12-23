console.log("hello world")

// there are four to 6 versions to write functions... no preference
// what happens when we click the button, it should open so classlist.add
document.getElementById('menu-1').addEventListener('click', function(){
    document.getElementById('big-menu').classList.add('toggle-open');
})

// when we click on the button it should close so classlist.remove
document.getElementById('big-menu-close').addEventListener('click', function(){
    document.getElementById('big-menu').classList.remove('toggle-open');
})