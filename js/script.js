"use strict";

$(function () {
  const toggleButton = $(".toggle-button");
  const navbar = $(".navbar");

  toggleButton.click(function () {
    navbar.toggle();
  });
});
