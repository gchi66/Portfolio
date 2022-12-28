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
  toggleItem.addEventListener('click', () => {
    if(about.style.display === 'none') {
      about.style.display = 'block';
      projects.style.display = 'none';
      contact.style.display = 'none';
    }
    else {
    about.style.display = 'none';

    }
    event.preventDefault();
  });

  toggleItemOne.addEventListener('click', () => {
    if(projects.style.display === 'none') {
      projects.style.display = 'block';
      about.style.display = 'none';
      contact.style.display = 'none';
    } else {
      projects.style.display = 'none';
    }
    event.preventDefault();
  });

  toggleItemTwo.addEventListener('click', () => {
    if(contact.style.display === 'none') {
      contact.style.display = 'block';
      about.style.display = 'none';
      projects.style.display = 'none';
    } else {
      contact.style.display = 'none';
    }
    event.preventDefault();
  });
