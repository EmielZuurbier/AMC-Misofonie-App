/*global d3*/

var width,
    height,
    color;

var graph = d3.selectAll('#graph').append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'graph')
    .style('background', '#f7f7f7');