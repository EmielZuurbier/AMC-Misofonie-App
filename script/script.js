/*global $*/

$(document).ready(function () {
    "use strict";
    $('.nav-button').click(function () {
        $('nav').toggleClass('nav-open');
        $('main').toggleClass('main-open');
        $('.nav-button i').toggleClass('fa-bars');
        $('.nav-button i').toggleClass('fa-times');
    });
});