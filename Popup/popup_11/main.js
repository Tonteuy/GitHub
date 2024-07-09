$("#open-popup").magnificPopup({
  items: [
    {
      src: "http://farm9.staticflickr.com/8514/8589902684_da1978cf93_b.jpg",
      title: "chapuzón",
    },
    {
      src: "http://farm9.staticflickr.com/8241/8589392310_7b6127e243_b.jpg",
      title: "baño relajante",
    },
    {
      src: $('<div class="white-popup">Dynamically created element</div>'),
      type: "inline",
    },
    {
      src: "http://farm6.staticflickr.com/5340/9126992588_7506dd8282_c.jpg",
      title: "rompiendo el hielo",
    },
    {
      src: "#my-popup", // CSS selector of an element that should be used as a popup
      type: "inline",
    },
  ],
  gallery: {
    enabled: true,
  },
  type: "image", // this is a default type
});
