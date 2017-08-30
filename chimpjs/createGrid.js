function createGrid() {
  // two has convenience methods to create shapes.
  var borderOne = two.makeRectangle(2*unit+x_offset, 2*unit+y_offset, length, length);
  var borderTwo = two.makeRectangle(7*unit+x_offset, 2*unit+y_offset, length, length);
  var borderThree = two.makeRectangle(12*unit+x_offset, 2*unit+y_offset, length,  length);

  var borderWidth = 5;
  var borderColour = "#806517";
  borderOne.linewidth = borderWidth;
  borderTwo.linewidth = borderWidth;
  borderThree.linewidth = borderWidth;
  borderOne.stroke = borderColour;
  borderTwo.stroke = borderColour;
  borderThree.stroke = borderColour;

  //var line = [];
  for(var i = 0; i < 2; i++) {
    var line_i = two.makeLine(x_offset + (i+1)*(1/3)*length, y_offset+length,
                              x_offset + (i+1)*(1/3)*length, y_offset );
  }
  for(var i = 0; i < 2; i++) {
    var line_i = two.makeLine(x_offset + 5*unit + (i+1)*(1/3)*length , y_offset+length,
                              x_offset + 5*unit + (i+1)*(1/3)*length, y_offset );
  }
  for(var i = 0; i < 2; i++) {
    var line_i = two.makeLine(x_offset + 10*unit + (i+1)*(1/3)*length , y_offset+length,
                              x_offset + 10*unit + (i+1)*(1/3)*length, y_offset );
  }

  for(var i = 0; i < 2; i++) {
    var line_i = two.makeLine(x_offset , y_offset + (i+1)*(1/3)*length,
                              x_offset + length, y_offset + (i+1)*(1/3)*length);
  }
  for(var i = 0; i < 2; i++) {
    var line_i = two.makeLine(x_offset + 5*unit , y_offset + (i+1)*(1/3)*length,
                              x_offset + 5*unit + length, y_offset + (i+1)*(1/3)*length);
  }
  for(var i = 0; i < 2; i++) {
    var line_i = two.makeLine(x_offset + 10*unit , y_offset + (i+1)*(1/3)*length,
                              x_offset + 10*unit + length, y_offset + (i+1)*(1/3)*length);
  }
  var botext = two.makeText("Bottom floor (z=0)", x_offset+0.5*length, y_offset+length*1.1);
  botext.size = 20;
  
  var midtext = two.makeText("Middle floor (z=1)", x_offset+0.5*length+5*unit, y_offset+length*1.1);
  midtext.size = 20;
  
  var toptext = two.makeText("Top floor (z=2)", x_offset+0.5*length+10*unit, y_offset+length*1.1);
  toptext.size = 20;
  
  var uparrow = two.makeLine(x_offset-1.3*unit, y_offset, x_offset-1.3*unit, y_offset+length*0.25);
  var uptri = two.makePolygon(x_offset-1.3*unit, y_offset+length*0.25, 0.1*unit, 3);
  uptri.rotation=3.14159;
  var ysign = two.makeText("y",x_offset-1.1*unit, y_offset+length*0.2)
  
  var riarrow = two.makeLine(x_offset-1.3*unit, y_offset, x_offset-1.3*unit+0.25*length, y_offset);
  var ritri = two.makePolygon(x_offset-1.3*unit+0.25*length, y_offset, 0.1*unit, 3);
  ritri.rotation=1.570796;
  var xsign = two.makeText("x",x_offset-1.3*unit+0.2*length, y_offset-0.1*unit);
  
  var centcord = two.makeText("(0,0)",x_offset-1.1*unit, y_offset+0.2*unit);
  
  
  var recto = two.makeRoundedRectangle(x_offset+15.3*unit,y_offset+1.2*unit,1.8*unit+20,2.9*unit+10,0.2*unit);
  recto.fill = '#99F4F8';
  var keytitle = two.makeText("Key",x_offset+15.3*unit,y_offset);
  keytitle.size=20;
  keytitle.fill = '#800080';
  
  var flatgr =two.makeText("1	=Flat indoor ground",x_offset+15.3*unit,y_offset+0.25*unit);
  var water =two.makeText("2	=Water feature",x_offset+15.3*unit,y_offset+0.5*unit);
  var tree =two.makeText("3	=Tree",x_offset+15.3*unit,y_offset+0.75*unit);
  var vege=two.makeText("4	=Vegetable",x_offset+15.3*unit,y_offset+1*unit);
  var grass=two.makeText("5	=Outdoor grass",x_offset+15.3*unit,y_offset+1.25*unit);
  var fruit =two.makeText("6	=Fruit",x_offset+15.3*unit,y_offset+1.5*unit);
  var rope =two.makeText("7	=Rope",x_offset+15.3*unit,y_offset+1.75*unit);
  var climb =two.makeText("8	=Climbing frame",x_offset+15.3*unit,y_offset+2*unit);
  var wall =two.makeText("9	=Wall",x_offset+15.3*unit,y_offset+2.25*unit);
  var bed=two.makeText("10	=Bedding",x_offset+15.3*unit,y_offset+2.5*unit);
}


function createHeatMap() {

  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      for(var k = 0; k < 3; k++) {
        position = coordToPos(i,j,k);
        heatmap[i][j][k] = two.makeRectangle(position[0], position[1] +length*1.2, length/3, length/3);
        var text = two.makeText(prob[i+1][j+1][k+1], position[0], position[1]+length*1.2, {
          alignment: 'center',
          weight: '500',
          fill: '#ffffff',
          size: '18'
        });
      }
    }
  }
}

function updateHeatMap() {
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      for(var k = 0; k < 3; k++) {
        var colour = 'rgba( ' + 10*gorillaHeatMap[i][j][k] + ', 0, 0, 0.75)';
        heatmap[i][j][k].fill = colour;
      }
    }
  }
}
