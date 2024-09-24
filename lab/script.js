// Select the elements you want to interact with
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const closeModalButton = document.querySelector('.close-modal');

// Add event listener to menu button
menuButton.addEventListener('click', function() {
  // Toggle the menu display
  menu.classList.toggle('open');
});

// Add event listener to gallery images
gallery.addEventListener('click', function(event) {
  // Only handle click events on images
  if (event.target.tagName === 'IMG') {
    // Show the modal with the clicked image
    modal.classList.add('open');
    modalImage.src = event.target.src;
  }
});

// Add event listener to close modal button
closeModalButton.addEventListener('click', function() {
  // Hide the modal
  modal.classList.remove('open');
});

