$(".popup-button").click(function () {
  $(".popup").css("opacity", "1");
  $(".popup").css("top", "0");
  $(".popup").css("height", "100%");
  $(".container").css("width", "500px");
  $(".container").css("height", "300px");
});
$(".container > .close-button").click(function () {
  $(".popup").css("opacity", "0");
  $(".popup").css("top", "-100%");
  $(".container").css("width", "0px");
  $(".container").css("height", "0px");
});
