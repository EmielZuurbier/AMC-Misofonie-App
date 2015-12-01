/*global d3*/

var dataArray = [],
    i = 0;

for (i; i < 20; i++) {
    dataArray.push(Math.floor((Math.random() * 10) + 1));
}

console.log(dataArray);

var width = 368,
    height = 184,
    color = '#00baff',
    barOffset = 5;

var graph = d3.selectAll('#graph').append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'graph')
    .style('background', '#f9f9f9');

var yScale = d3.scale.linear()
    .domain([0, d3.max(dataArray)])
    .range([0, height]),

    xScale = d3.scale.ordinal()
    .domain(d3.range(0, dataArray.length))
    .rangeBands([0, width]),

    colors = d3.scale.linear()
    .domain([0, dataArray.length])
    .range(['#0fea68', '#16a085', '#e9d460', '#e98b39', '#a53232', '#ff3333']);

graph.selectAll('rect')
    .data(dataArray)
    .enter()
    .append('rect')
        .style('fill', '#00baff')
        .attr('class', 'bars')
        .attr('width', xScale.rangeBand() - 10)
        .attr('x', function (d, i) {  return xScale(i); })
        .attr('height', 0)
        .attr('y', height)
        .attr('transform', 'translate(' + barOffset + ', 0)');

graph.selectAll('rect').transition().duration(1200)
    .attr('height', function (d) { return yScale(d); })
    .attr('y', function (d) { return height - yScale(d); })
    .ease('elastic');