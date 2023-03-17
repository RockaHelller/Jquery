"use strict";




$(document).ready(function () {
    let sidebar = $(".sidebar");
    let openIcon = $(".open");
    let closeIcon = $(".close");

    openIcon.click(function () {
        sidebar.removeClass("hide");
        openIcon.addClass("d-none");
        closeIcon.removeClass("d-none");
    });

    closeIcon.click(function () {
        sidebar.addClass("hide");
        closeIcon.addClass("d-none");
        openIcon.removeClass("d-none");
    });
});














