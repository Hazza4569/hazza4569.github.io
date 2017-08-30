// x,y,z in {0,1,2}
// gorillaHeatMap[x][y][z] is the 3d array containing density's
// prob[i+1][j+1][k+1]

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}


function plotGraph2() {
  var ctx = document.getElementById("myChart").getContext('2d');

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

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Flat indoor ground", "Water feature", "Tree", "Vegetable", "Outdoor grass", "Fruit", "Rope", "Climbing frame", "Wall", "Bedding"],
        datasets: [{
            //label: "Popularity against Time Spent",
            backgroundColor: 'rgb(255, 99, 132)',
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            data: [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9]],
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
            labelString: 'Time spent in square (normalised)'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Type of enclosure/ Popularity of square'
          }
        }]
      }//*/

    }
  });
  
  
   


}
