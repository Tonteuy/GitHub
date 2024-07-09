// At this point, the dialog API seems to work only with vanilla javascript. I have tried it with jQuery but it does not work.

//-----------------------------------
// Declare Variables
//-----------------------------------

// Modal
var modalButton = document.getElementById("modal-button");
var modal = document.getElementById("modal");
var modalClose = document.getElementById("modal-close");

// Popup
var popupButton = document.getElementById("popup-button");
var popup = document.getElementById("popup");
var popupClose = document.getElementById("popup-close");

//-----------------------------------
// Button Actions
//-----------------------------------

// on click, show as a modal
modalButton.addEventListener("click", function () {
  modal.showModal();
});

// close modal on click
modalClose.addEventListener("click", function () {
  modal.close();
});

// on click, show as a popup
popupButton.addEventListener("click", function () {
  popup.show();
});

// close popup on click
popupClose.addEventListener("click", function () {
  popup.close();
});
