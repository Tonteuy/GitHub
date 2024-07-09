$(".popup-open").click(function () {
  var $href = $(this).attr("href");
  layer_popup($href);
});
function layer_popup(el) {
  var $el = $(el); //레이어의 id를 $el 변수에 저장
  $el.fadeIn();

  var $elWidth = ~~$el.outerWidth(),
    $elHeight = ~~$el.outerHeight(),
    docWidth = $(document).width(),
    docHeight = $(document).height();

  $el.find(".popup-close").click(function () {
    $(this).parents(".dim-layer").fadeOut();
    return false;
  });

  $(".layer .dimBg").click(function () {
    $(".dim-layer").fadeOut();
    return false;
  });
}
