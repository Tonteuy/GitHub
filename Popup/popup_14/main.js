//Need jQuery
//Need FontAwesome

jQuery(document).ready(function () {
  //Initialization of popup
  var popupBlockInner = jQuery("#popup-block").find(".popup-block-inner");
  var popupBlock = jQuery("#popup-block");

  popupBlock.fadeOut(0);

  //Event listener, which wait for click on any "popup-button"
  //which be in any "preview-text" block to show popup
  jQuery(".preview-text .popup-button").click(function () {
    var popupText = jQuery(this).parent().parent().find(".popup-text").html();
    popupBlockInner.html("");
    popupBlock.fadeIn(400);
    popupBlockInner.html(popupText);
    jQuery("html").css("overflow-y", "hidden");
    popupBlock.css("overflow-y", "auto");
  });

  //Event listener, which wait for click on "close-button" to close popup
  jQuery("#popup-block .close-button").click(function () {
    popupBlock.fadeOut(400);
    popupBlock.scrollTop(0);

    jQuery("html").css("overflow-y", "auto");
    popupBlock.css("overflow-y", "hidden");
  });
});
