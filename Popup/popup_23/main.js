$(document).ready(function () {
  //    $("#img1").hover(function () { $("#label1").fadeIn(100); });
  //$("#img1").mouseleave(function () {  $("#label1").fadeOut(100); });
  $("#closer").click(function () {
    $(".magnific_popup").fadeOut(300);
    $("#popup_container").css("animation-name", "popup_fadeout");
    $("#popup_container").css("animation-duration", ".5s");
  });
});

function popup() {
  $(document).ready(function () {
    $(".magnific_popup").fadeIn(100);
    $("#popup_container").css("animation-name", "popup_fadein");
    $("#popup_container").css("animation-duration", ".5s");
  });
}
