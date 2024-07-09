$(function () {
  var $popup = $(".js-popup");

  //popup-close
  var hideContainer = function () {
    $popup.closest(".content").find(".js-popup-box").removeClass("is-active");
  };

  //popup
  $("[data-popup-link]").on("click", function (e) {
    var $ddLink = $(e.currentTarget).data("popup-link");
    var $ddBox = $('[data-popup-box= "' + $ddLink + '"]');
    e.stopPropagation();
    $ddBox.addClass("is-active");
  });

  //popup-close
  $("body").on("click", ".js-popup-close-btn", function () {
    hideContainer();
  });

  $("body").on("click", function (e) {
    if ($(e.target).closest($popup).length == 0) {
      hideContainer();
    }
  });
});
