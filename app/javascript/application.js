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


toggleItem.addEventListener('click', () => {
  console.log("hello");
 if(about.style.display === 'none') {
  about.style.display = 'block';
 } else {
  about.style.display = 'none';
 }
});

toggleItemOne.addEventListener('click', () => {
  console.log("hello");
  if(projects.style.display === 'none') {
    projects.style.display = 'block';
   } else {
    projects.style.display = 'none';
   }
});

toggleItemTwo.addEventListener('click', () => {
  console.log("hello");
  if(contact.style.display === 'none') {
    contact.style.display = 'block';
   } else {
    contact.style.display = 'none';
   }
});
