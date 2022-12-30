// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

const toggleItem = document.querySelector('#toggleItem');
const toggleItemOne = document.querySelector('#toggleItemOne');
const toggleItemTwo = document.querySelector('#toggleItemTwo');
const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');


// Showing the stuff on the right side of the screen when you click the list items
  toggleItem.addEventListener('click', (event) => {
    event.preventDefault()
    if(about.className === 'hidden') {
      about.className = 'visible';
      projects.className = 'hidden';
      contact.className = 'hidden';
    }
    else {
      about.className = 'hidden';
    }
  });


    toggleItemOne.addEventListener('click', (event) => {
      event.preventDefault()
    if(projects.className === 'hidden') {
      projects.className = 'visible';
      about.className = 'hidden';
      contact.className = 'hidden';
    } else {
      projects.className = 'hidden';
    }
  });

  toggleItemTwo.addEventListener('click', (event) => {
    event.preventDefault()
    if(contact.className === 'hidden') {
      contact.className = 'visible';
      about.className = 'hidden';
      projects.className = 'hidden';
    } else {
      contact.className = 'hidden';
    }
  });


  // Fade the li on the left side of the screen in and out

  toggleItem.addEventListener("click", (event) => {
    event.preventDefault()
    if (toggleItem.className === "visible") {
      toggleItem.className  = "hidden";
      toggleItemOne.className = "visible"
      toggleItemTwo.className = "visible"
    } else {
      toggleItem.className = "visible";
    }
  });

  toggleItemOne.addEventListener("click", (event) => {
    event.preventDefault()
    if (toggleItemOne.className === "visible") {
      toggleItemOne.className  = "hidden";
      toggleItem.className = "visible"
      toggleItemTwo.className = "visible"
    } else {
      toggleItemOne.className = "visible";
    }
  });

  toggleItemTwo.addEventListener("click", (event) => {
    event.preventDefault()
    if (toggleItemTwo.className === "visible") {
      toggleItemTwo.className  = "hidden";
      toggleItem.className = "visible"
      toggleItemOne.className = "visible"
    } else {
      toggleItemTwo.className = "visible";
    }
  });
