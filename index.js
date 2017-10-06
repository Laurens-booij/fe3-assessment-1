// Define margins
var margin = {top: 50, right: 100, bottom: 100, left: 150},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width], 0.1);

var y = d3.scaleLinear()
    .range([height, 0]);

var xAxis = d3.axisBottom(x);

var yAxis = d3.axisLeft(y);

// create svg and append to body
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// load data from tsv file
d3.tsv("index.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.language; }));
  y.domain([0, d3.max(data, function(d) { return d.speakers; })]);

// Create labels for X axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

// Rotate labels   Source: http://bl.ocks.org/d3noob/ccdcb7673cdb3a796e13
      .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function(d) {
                return "rotate(-65)";
                });

// create value labels for y axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("x", -1)
      .attr("y", -3)
      .attr("dy", "2em")
      .style("text-anchor", "end")
      .text("Speakers");

// create bars
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.language); })
      .attr("width", x.bandwidth() - 1)
      .attr("height", 0)
      .attr("y", height)

      // Animeert de bars  Source: https://bl.ocks.org/jamesleesaunders/f32a8817f7724b17b7f1
      .transition().duration(3000)
      .attr("y", function(d) { return y(d.speakers); })
      .attr("height", function(d) { return height - y(d.speakers); })
      .delay( function(d,i) { return i * 100; })

      // Maakt de bars allemaal een iets andere kleur.
      .style("fill", function(d,i) { return 'rgb(38, 78, ' + ((i * 5) + 100) + ')';});

});


function type(d) {
  d.speakers = +d.speakers;
  return d;
}
