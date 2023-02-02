// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

const toggleAbout = document.querySelector('#toggleAbout');
const toggleProjects = document.querySelector('#toggleProjects');
const toggleContact = document.querySelector('#toggleContact');
const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');


// Showing the stuff on the right side of the screen when you click the list items

  // toggleAbout = About on the left side of the screen
  toggleAbout.addEventListener('click', (event) => {
    event.preventDefault()
    // just checking if the classname is hidden, not assigning anything
    if(about.className === 'hidden') {
      // now assigning classnames
      about.className = 'visible';
      // hide the other two when the first one is visible
      projects.className = 'hidden';
      contact.className = 'hidden';
    }
    else {
      // assigning hidden when it is clicked and visible
      about.className = 'hidden';
    }
  });

  // toggleProjects = projects on the left side of the screen
    toggleProjects.addEventListener('click', (event) => {
      event.preventDefault()
    if(projects.className === 'hidden') {
      projects.className = 'visible';
      about.className = 'hidden';
      contact.className = 'hidden';
    } else {
      projects.className = 'hidden';
    }
  });
  // toggleContact = contact on the left side of the screen
  toggleContact.addEventListener('click', (event) => {
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

  toggleAbout.addEventListener("click", (event) => {
    event.preventDefault()
    if (toggleAbout.className === "visible") {
      toggleAbout.className  = "hidden";
      toggleProjects.className = "visible"
      toggleContact.className = "visible"
    } else {
      toggleAbout.className = "visible";
    }
  });

  toggleProjects.addEventListener("click", (event) => {
    event.preventDefault()
    if (toggleProjects.className === "visible") {
      toggleProjects.className  = "hidden";
      toggleAbout.className = "visible"
      toggleContact.className = "visible"
    } else {
      toggleProjects.className = "visible";
    }
  });

  toggleContact.addEventListener("click", (event) => {
    event.preventDefault()
    if (toggleContact.className === "visible") {
      toggleContact.className  = "hidden";
      toggleAbout.className = "visible"
      toggleProjects.className = "visible"
    } else {
      toggleContact.className = "visible";
    }
  });
