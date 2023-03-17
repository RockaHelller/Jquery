"use strict"

let $activeImage = $(".slider .image img");
let $leftArrow = $(".left");
let $rightArrow = $(".right");

$leftArrow.on("click", function() {
  let $activeImage = $(".active-img");
  $activeImage.removeClass("active-img");
  if ($activeImage.prev().length) {
    $activeImage.prev().addClass("active-img");
  } else {
    $activeImage.parent().children().last().addClass("active-img");
  }
});

$rightArrow.on("click", function() {
  let $activeImage = $(".active-img");
  $activeImage.removeClass("active-img");
  if ($activeImage.next().length) {
    $activeImage.next().addClass("active-img");
  } else {
    $activeImage.parent().children().first().addClass("active-img");
  }
});














