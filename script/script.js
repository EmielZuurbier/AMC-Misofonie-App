/*global $*/

$('#nav-open').click(function () {
    "use strict";
    $('nav').toggleClass('nav-open');
    $('main').toggleClass('main-open');
});
