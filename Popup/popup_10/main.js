// Define data for popup
var data = [
  {
    photo_img:
      "https://adqdesign.co.uk/teststatic/images/modals/photos/ChrisBarnes_main.jpg", // Prefix "_img" is special. With it Magnific Popup finds an  element "photo" and replaces it completely with image tag.
  },
];

// Initialize popup
$(".button").magnificPopup({
  key: "image-popup",
  items: data,
  type: "inline",
  inline: {
    // Define markup. Class names should match key names.
    markup:
      '<div class="white-popup"><div class="mfp-close"></div>' +
      '<div class="mfp-photo"></div>' +
      "</div>",
  },
});
