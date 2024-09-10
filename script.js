// script.js

// Set the date we're counting down to
var countDownDate = new Date("Oct 12, 2024 0:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
  // Setelah halaman dimuat, tambahkan kelas untuk menampilkan navbar dan main
  const nav = document.querySelector("nav");
  const main = document.querySelector("main");

  // Navbar muncul dari atas
  setTimeout(function () {
    nav.style.opacity = "1";
    nav.style.transform = "translateY(0)";
  }, 200); // Navbar muncul setelah 200ms

  // Main muncul dari bawah setelah navbar
  setTimeout(function () {
    main.style.opacity = "1";
    main.style.transform = "translateY(0)";
  }, 500); // Main muncul setelah 700ms
});

window.addEventListener("load", function () {
  window.scrollTo(0, 0); // Scroll ke posisi atas saat halaman dimuat
});
