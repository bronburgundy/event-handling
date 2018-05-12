// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one()
  two()
    
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  
  var one = document.getElementById('one') // First, we have to find the element:

  one.addEventListener('mouseenter', makeBlue)// Next, we add an event listener to it:

  one.addEventListener('mouseleave', makeWhite) // Finally, we add one to make the colour white again
}

// CREATE FUNCTION two HERE

function two () {
  var two = document.getElementById('two')
  two.addEventListener('mouseenter', makeGreen)
  two.addEventListener('mouseleave', makeWhite)
}

// CREATE FUNCTION three HERE

// CREATE FUNCTION four HERE

// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}
