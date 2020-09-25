const ouibounce = ouibounce(document.getElementById("ouibounce-modal"), {
  aggressive: true,
  timer: 0,
  callback: function () {
    _ouibounce.disable();
    console.log("ouibounce fired!");
  },
});

ouibounce.fire();

$("body").on("click", function () {
  $("#ouibounce-modal").hide();
});

$("#ouibounce-modal .modal-footer").on("click", function () {
  $("#ouibounce-modal").hide();
});

$("#ouibounce-modal .modal").on("click", function (e) {
  e.stopPropagation();
});
