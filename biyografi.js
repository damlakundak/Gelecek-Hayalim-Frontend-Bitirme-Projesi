/*
 * This script handles the focus behavior of an input element within a modal.
 * When the modal with the ID "myModal" is shown, the input element with the ID "myInput"
 * will automatically receive focus.
 */
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
