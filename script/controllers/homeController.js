/*global app, data, d3, console, $*/

app.controller('homeController', ['$scope', 'content',  function ($scope, content) {
    "use strict";
    content.success(function (data) {
        $scope.content = data.collection;
    });
    
    $scope.title = "Home";

    /* ----------------------- D3 GRAPH -------------------------- */
    
    var width = $('#graph').innerWidth(),
        height = 220,
        radius = 100,
        colors = ['#00baff', '#0398d0', '#0275a0'],
        i = 0,

        piedata = [];
    
    for (i; i < 3; i += 1) {
        piedata.push({ label: "Emiel", value: Math.floor(Math.random() * 100)});
    }
        

    var pie = d3.layout.pie()
            .value(function (d) {
                return d.value;
            }),

        arc = d3.svg.arc()
            .outerRadius(radius)
            .innerRadius(radius - 40),

        myChart = d3.select('#graph').append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + (width / 2) + ', ' + (height / 2) + ' )')
            .selectAll('path').data(pie(piedata))
            .enter().append('path')
            .attr('fill', function (d, i) {
                return colors[i];
            })
            .attr('d', arc),
        
        text = d3.selectAll('g')
            .append('text')
            .text('53')
            .attr('font-size', '36px')
            .attr('font-weight', '900')
            .attr('fill', '#00baff')
            .attr('transform', 'translate(-20, 14)');
        
    function arcTween(a) {
        var i = d3.interpolate(this._current, a);
        this._current = i(0);
        return function (t) {
            return arc(i(t));
        };
    }
    
    
    
    console.log(piedata);
        








    
    
    
//    var dataArray = [],
//        i = 0;
//
//    for (i; i < 20; i += 1) {
//        dataArray.push(Math.floor((Math.random() * 10) + 1));
//    }
//
//    console.log(dataArray);
//
//    var width = 368,
//        height = 184,
//        color = '#00baff',
//        barOffset = 5,
//
//        graph = d3.selectAll('#graph').append('svg')
//            .attr('width', width)
//            .attr('height', height)
//            .attr('class', 'graph')
//            .style('background', '#f9f9f9'),
//
//        yScale = d3.scale.linear()
//            .domain([0, d3.max(dataArray)])
//            .range([0, 150]),
//
//        xScale = d3.scale.ordinal()
//            .domain(d3.range(0, dataArray.length))
//            .rangeBands([0, width]),
//
//        colors = d3.scale.linear()
//            .domain([0, dataArray.length])
//            .range(['#0fea68', '#16a085', '#e9d460', '#e98b39', '#a53232', '#ff3333']);
//
//    graph.selectAll('rect')
//        .data(dataArray)
//        .enter()
//        .append('rect')
//            .style('fill', '#00baff')
//            .attr('class', 'bars')
//            .attr('width', xScale.rangeBand() - 10)
//            .attr('x', function (d, i) {  return xScale(i); })
//            .attr('height', 0)
//            .attr('y', height)
//            .attr('transform', 'translate(' + barOffset + ', 0)');
//
//    graph.selectAll('rect').transition().duration(1200)
//        .attr('height', function (d) { return yScale(d); })
//        .attr('y', function (d) { return height - yScale(d); })
//        .ease('elastic');

}]);