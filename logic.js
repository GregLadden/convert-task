const getIP = async () => {
  const request = await fetch("http://ip-api.com/json/");
  const data = await request.json();
  return data;
};
getIP().then((ipData) => {
  console.log(ipData.city);
  document.getElementById("city").innerText = ipData.city;
});

var _ouibounce = ouibounce(document.getElementById("ouibounce-modal"), {
  aggressive: true,
  timer: 0,
  callback: function () {
    _ouibounce.disable();
    console.log("ouibounce fired!");
  },
});

_ouibounce.fire();

$("body").on("click", function () {
  $("#ouibounce-modal").hide();
});

$("#ouibounce-modal .modal-footer").on("click", function () {
  $("#ouibounce-modal").hide();
});

$("#ouibounce-modal .modal").on("click", function (e) {
  e.stopPropagation();
});

let clock;
clock = $(".clock").FlipClock(3600, {
  clockFace: "HourCounter",
  countdown: true,
  callbacks: {
    stop: function () {
      $(".message").html("The clock has stopped!");
    },
  },
});
