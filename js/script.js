const btn = document.getElementById("liveAlertBtn");
//   const counters = document.querySelectorAll(".purecounter");

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

btn.onclick = function () {
  btn.title = "copied!";
  btn.textContent = "copied!";

  $('[data-toggle="tooltip"]').tooltip("dispose").tooltip();

  setTimeout(function () {
    alert("Text copied to clipboard!");
  }, 100);
};
