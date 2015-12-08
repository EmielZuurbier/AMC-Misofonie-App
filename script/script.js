/*global $*/

$('#nav-button').click(function () {
    "use strict";
    $('nav').toggleClass('nav-open');
    $('main').toggleClass('main-open');
    $('.header').toggleClass('header-open');
});

$('.card').draggable({
    axis: 'y',
    cursor: 'move',
    distance: 20,
    snap: '.snap',
    snapTolerance: 30,
    snapMode: 'inner',
    containment: 'parent'
});
