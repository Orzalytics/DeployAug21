(function() {
'use strict';
  angular.module('orzaApp.directives')
      .directive('d3Bars',['d3', '$rootScope', function(d3, $rootScope) {
          return {
            restrict : 'EA',
            scope: {
              data: "=",
              datadate: "=",
              sdate: "="
            },
            link : function(scope, element) {
                // initialize current slider value

                $rootScope.$watch('portHistogramStart', function(newVals, oldVals) {                  
                  if (newVals == "draw"){
                    scope.render();
                    $rootScope.portHistogramStart = "none";
                  }
                }, true);

                scope.$watch('sdate', function(value) {
                  if (value != undefined){
                    scope.render();
                  }                        
                });

                scope.$watch('arr.username', function(value) {
                  scope.render();
                });

                window.addEventListener('resize', function() {                
                  scope.render();
                });
            // define render function
                scope.render = function(data){

                  var elements = document.querySelectorAll('.data-histogramgraph');
                  elements.forEach(function (element) {
                    element.parentNode.removeChild(element);
                  });

                  var secondchart = new drawScatterchart(data, scope, "#histogram_chart");

                  // units graph of existing portfolio and comparison portfolio
                  function drawScatterchart(data, datadate, id){
                    var maxValue = $rootScope.port91DayHistogram.maxValue;
                    var barData = $rootScope.port91DayHistogram.data;

                    //  variables for SVG size
                    var width = window.innerWidth;
                    var height = 150;
                    var margin = {top: 20, right: 10, bottom: 20, left: 40};
                    if (window.innerWidth >= 1280)
                      width = width / 100 * 25 - margin.left - margin.right;
                    else 
                      width = window.innerWidth - margin.left - margin.right;

                    // creating a div to contain line charts.
                    var div = d3.select(id);
                    var svg = div.append('svg:svg')
                    .attr('width', width)
                    .attr('height', height)
                    .attr('class', 'data-histogramgraph')
                    
                    // setup variables
                    var y = d3.scale.linear()
                      .domain([0, maxValue])
                      .range([height - margin.top,  0 + margin.bottom]);
                    var x = d3.scale.linear()
                      .domain([-0.15, 0.3])
                      .range([ 0 + margin.left, width - margin.right ]);

                    var xAxis = d3.svg.axis()
                      .scale(x)
                      .orient("bottom");

                    var yAxis = d3.svg.axis()
                      .scale(y)
                      .orient("left");
                      
                    // line for units of actual portfolio
                    var g = svg.append("svg:g")
                      .style('stroke', '#c2c2c2')
                      .style('fill', 'none');

                    g.append("g")
                        .attr("class", "x_axis1")
                        .attr("transform", "translate(0 , " + (height - margin.top) + ")")
                        .call(xAxis);

                    g.append("g")
                        .attr("class", "y_axis1")
                        .attr("transform", "translate(" + (margin.left) + ", 0)")
                        .call(yAxis)
                        .selectAll("g.tick")
                        .remove();

                    var clip = svg.append("defs").append("svg:clipPath")
                        .attr("id", "clip")
                        .append("svg:rect")
                        .attr("id", "clip-rect")
                        .attr("x", margin.left - 8)
                        .attr("y", margin.bottom - 8)
                        .attr("width", width - margin.left - margin.right + 16)
                        .attr("height", height - margin.top - margin.bottom + 16);

                    d3.selectAll(".tick > text")
                        .style("font-size", "12px");

                    d3.selectAll(".x_axis1 > path")
                        .style("stroke-dasharray", ("3, 3"))
                        .attr("transform", "translate(0 , " + (-height+y(0)+margin.top) + ")")

                    svg.append("rect")
                        .attr("class", "rect_circle")
                        .attr("id", "rect_circle")
                        .attr("x", 100)
                        .attr("y", 100)
                        .attr("width", 74)
                        .attr("height", 60)
                        .attr("clip-path", "url(#clip)")
                        .style('fill', 'grey')
                        .style('stroke-width', 1)
                        .style('stroke', 'grey')
                        .style("opacity", 0);

                    svg.selectAll("bar")
                      .data(barData)
                    .enter().append("rect")
                      .attr("class", "bar")
                      .style("stroke", "rgba(1, 147, 147, 1)")
                      .style("stroke-width", 2)
                      .attr("x", function(d) { return x(d.range) + 3; })
                      .attr("width", function(d) { return x(d.range + 0.05) - x(d.range) - 6; })
                      .attr("y", function(d) { return y(d.value); })
                      .attr("height", function(d) { return height - margin.top - y(d.value); })
                      .on("mouseover",  function(d, i){onMouseOver(i)})
                      .on("mouseout",  onMouseOut);

                    function onMouseOver(index){
                      var xData = barData[index].range;
                      var yData = barData[index].value;
                      console.log(y(yData) + height);
      
                      var tooltip = document.getElementById("bar_tooltip");
                      tooltip.innerHTML = yData.toString() + ' dias';
                      tooltip.style.display = "block";
                      tooltip.style.left = (x(xData + 0.025) - tooltip.clientWidth / 2 - 1).toFixed() + "px";
                      tooltip.style.top = (y(yData) - tooltip.clientHeight - 12).toFixed() + "px";
                    }

                    function onMouseOut(){
                      document.getElementById("bar_tooltip").style.display = "none";
                    }

                  }
                  
                }
              }
            }
      }]);
}());

