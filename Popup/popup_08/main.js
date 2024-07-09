(function () {
  // data
  var clear;
  var msgDuration = 2000; // 2 seconds
  var $msgSuccess = "Great job! Well done :)";
  var $msgDanger = "Careful with that!";
  var $msgWarning = "Try that again and see what happens";
  var $msgInfo = "This is a friendly reminder";

  // cache DOM
  var $msg = $(".msg");
  var $btnSuccess = $(".btn-success");
  var $btnDanger = $(".btn-danger");
  var $btnWarning = $(".btn-warning");
  var $btnInfo = $(".btn-info");

  // render message
  function render(message) {
    hide();

    switch (message) {
      case "success":
        $msg.addClass("msg-success active").text($msgSuccess);
        break;
      case "danger":
        $msg.addClass("msg-danger active").text($msgDanger);
        break;
      case "warning":
        $msg.addClass("msg-warning active").text($msgWarning);
        break;
      case "info":
        $msg.addClass("msg-info active").text($msgInfo);
        break;
    }
  }

  function timer() {
    clearTimeout(clear);
    clear = setTimeout(function () {
      hide();
    }, msgDuration);
  }

  function hide() {
    $msg.removeClass("msg-success msg-danger msg-warning msg-info active");
  }

  // bind events
  $btnSuccess.on("click", function () {
    render("success");
  });
  $btnDanger.on("click", function () {
    render("danger");
  });
  $btnWarning.on("click", function () {
    render("warning");
  });
  $btnInfo.on("click", function () {
    render("info");
  });
  $msg.on("transitionend", timer);
})();
