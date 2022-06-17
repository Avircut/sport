const $ = require('jquery');
// Круг за курсором
const cursorRounded = document.querySelector('.circle');
$(document).ready(function () {

  $("body").on("mousemove",function (e) {
      handleMouseMove(e);
  });

  function handleMouseMove(event) {

      var x = event.pageX;
      var y = event.pageY;

      $(".circle").animate({
          left: x+5,
          top: y+5
      }, 5);
  }
});