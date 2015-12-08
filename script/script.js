/*global $*/

$('#nav-button').click(function () {
    "use strict";
    $('nav, main, .header, #nav-icon').toggleClass('open');
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
