function plotGraph() {
  var ctx = document.getElementById("myChart2").getContext('2d');

  var temp = [];
  for(var i = 0; i < 3; i++) {
    temp[i] = new Array;
    for(var j = 0; j < 3; j++) {
      temp[i][j] = new Array();
      for(var k = 0; k < 3; k++) {
        temp[i][j][k] = prob[i+1][j+1][k+1];
      }
    }
  }
  var probFlat = flatten(temp);
  var heatmapFlat = flatten(gorillaHeatMap);

  var data = [];
  var freq = [];
  for(var i = 0; i < 10; i++) {
      data[i] = 0;
      freq[i] = 0;
  }
  for(var i = 0; i < 27; i++) {
      data[probFlat[i]-1] += heatmapFlat[i];
      freq[probFlat[i]-1] += 1;
  }
  for(var i = 0; i < 10; i++) {
      data[i] = data[i]/(freq[i]+1);
  } //*/

  
  
   var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
	//       gorillaHeatMap[i][j][k]
    data: {
        labels: ["(0,0,0)", "(0,1,0)", "(0,2,0)", "(1,0,0)", "(1,1,0)", "(1,2,0)", "(2,0,0)", "(2,1,0)", "(2,2,0)", "(0,0,1)", "(0,1,1)", "(0,2,1)", "(1,0,1)", "(1,1,1)", "(1,2,1)", "(2,0,1)", "(2,1,1)", "(2,2,1)","(0,0,2)", "(0,1,2)", "(0,2,2)", "(1,0,2)", "(1,1,2)", "(1,2,2)", "(2,0,2)", "(2,1,2)", "(2,2,2)"],
        datasets: [{
            //label: "Popularity against Time Spent",
            backgroundColor: 'rgb(255, 99, 132)',
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            data: [gorillaHeatMap[0][0][0], gorillaHeatMap[0][1][0], gorillaHeatMap[0][2][0], gorillaHeatMap[1][0][0], gorillaHeatMap[1][1][0], gorillaHeatMap[1][2][0], gorillaHeatMap[2][0][0], gorillaHeatMap[2][1][0], gorillaHeatMap[2][2][0],gorillaHeatMap[0][0][1], gorillaHeatMap[0][1][1], gorillaHeatMap[0][2][1], gorillaHeatMap[1][0][1], gorillaHeatMap[1][1][1], gorillaHeatMap[1][2][1], gorillaHeatMap[2][0][1], gorillaHeatMap[2][1][1], gorillaHeatMap[2][2][1],gorillaHeatMap[0][0][2], gorillaHeatMap[0][1][2], gorillaHeatMap[0][2][2], gorillaHeatMap[1][0][2], gorillaHeatMap[1][1][2], gorillaHeatMap[1][2][2], gorillaHeatMap[2][0][2], gorillaHeatMap[2][1][2], gorillaHeatMap[2][2][2]],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        duration: 0
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time spent in square'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Coordinates of square (x,y,z)'
          }
        }]
      }//*/

    }
  });


}
