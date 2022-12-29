// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

const toggleItem = document.querySelector('#toggleItem');
const toggleItemOne = document.querySelector('#toggleItemOne');
const toggleItemTwo = document.querySelector('#toggleItemTwo');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');


// Showing the stuff on the right side of the screen when you click the list items
  toggleItem.addEventListener('click', (event) => {
    event.preventDefault()
    if(about.style.display === 'none') {
      about.style.display = 'block';
      projects.style.display = 'none';
      contact.style.display = 'none';
    }
    else {
    about.style.display = 'none';
    }
    // if(toggleItem.style.opacity = "1") {
    //   toggleItem.style.opacity = "0";
    // }
    // else {
    //   toggleItem.style.opacity = "1";
    //   }
  });


    toggleItemOne.addEventListener('click', (event) => {
      event.preventDefault()
    if(projects.style.display === 'none') {
      projects.style.display = 'block';
      about.style.display = 'none';
      contact.style.display = 'none';
    } else {
      projects.style.display = 'none';
    }
  });

  toggleItemTwo.addEventListener('click', (event) => {
    event.preventDefault()
    if(contact.style.display === 'none') {
      contact.style.display = 'block';
      about.style.display = 'none';
      projects.style.display = 'none';
    } else {
      contact.style.display = 'none';
    }
  });


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
