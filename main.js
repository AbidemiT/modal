 // Get elements

 // Get the button element
 let button = document.getElementById('modalBtn');

 // Get the Modal element
 let modal = document.getElementById('simpleModal');

 // Get close button
 let closeBtn = document.querySelectorAll('.closeBtn')[0];


 button.addEventListener('click', showModal => {
   modal.style.display = 'block';
 });
 closeBtn.addEventListener('click', closeModal => {
   modal.style.display = 'none';
 });
window.addEventListener('click', close = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
 });