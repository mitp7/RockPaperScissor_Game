// Get rules modal element 
var modal = document.getElementById('simpleModal');
// Get button which opens the modal
var modalBtn = document.getElementById('openBtn');
// Get button which closes the modal
var closeBtn = document.getElementById('closeBtn');

// Listen for open modal click
modalBtn.addEventListener('click', openModal);
// Listen for close modal click 
closeBtn.addEventListener('click', closeModal);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}
// Function to close modal
function closeModal(){
    modal.style.display = 'none';
}