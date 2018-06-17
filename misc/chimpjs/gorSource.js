// Gorillas

// define gorilla object
function gorillaObject(x,y,z) {
  this.coord = [x,y,z];
  this.pos = coordToPos(x,y,z);
  this.radius = 35;
  this.colour = '#' + Math.floor(Math.random()*16777215).toString(16);
} //*/

var play = 4;

var prob = new Array();
for(var i = 0; i < 5; i++) {
  prob[i] = new Array;
  for(var j = 0; j < 5; j++) {
    prob[i][j] = new Array();
    for(var k = 0; k < 5; k++) {
      prob[i][j][k] = 0;
    }
  }
}


function randevery() {
for(var i = 1; i < 4; i++) {
  for(var j = 1; j < 4; j++) {
    for(var k = 1; k < 4; k++) {
      prob[i][j][k] = Math.floor(10*Math.random()+1);
    }
  }
}
 var hid000 = document.getElementById("box000");
        hid000.style.display = 'none';
	var hid100 = document.getElementById("box100");
        hid100.style.display = 'none';
	var hid200 = document.getElementById("box200");
        hid200.style.display = 'none';
	var hid010 = document.getElementById("box010");
        hid010.style.display = 'none';
	var hid110 = document.getElementById("box110");
        hid110.style.display = 'none';
	var hid210 = document.getElementById("box210");
        hid210.style.display = 'none';
	var hid020 = document.getElementById("box020");
        hid020.style.display = 'none';
	var hid120 = document.getElementById("box120");
        hid120.style.display = 'none';
	var hid220 = document.getElementById("box220");
        hid220.style.display = 'none';
		
	var hid001 = document.getElementById("box001");
        hid001.style.display = 'none';
	var hid101 = document.getElementById("box101");
        hid101.style.display = 'none';
	var hid201 = document.getElementById("box201");
        hid201.style.display = 'none';
	var hid011 = document.getElementById("box011");
        hid011.style.display = 'none';
	var hid111 = document.getElementById("box111");
        hid111.style.display = 'none';
	var hid211 = document.getElementById("box211");
        hid211.style.display = 'none';
	var hid021 = document.getElementById("box021");
        hid021.style.display = 'none';
	var hid121 = document.getElementById("box121");
        hid121.style.display = 'none';
	var hid221 = document.getElementById("box221");
        hid221.style.display = 'none';
		
	var hid002 = document.getElementById("box002");
        hid002.style.display = 'none';
	var hid102 = document.getElementById("box102");
        hid102.style.display = 'none';
	var hid202 = document.getElementById("box202");
        hid202.style.display = 'none';
	var hid012 = document.getElementById("box012");
        hid012.style.display = 'none';
	var hid112 = document.getElementById("box112");
        hid112.style.display = 'none';
	var hid212 = document.getElementById("box212");
        hid212.style.display = 'none';
	var hid022 = document.getElementById("box022");
        hid022.style.display = 'none';
	var hid122 = document.getElementById("box122");
        hid122.style.display = 'none';
	var hid222 = document.getElementById("box222");
        hid222.style.display = 'none';
	two.play();
	two.play();
	for(var i = 0; i < gorNum; i++) {
  gorilla[i] = new gorillaObject(1,1,1);
  gorilla[i].radius = 0.5;
  gorillaCircle[i] = generateGorilla(gorilla[i].pos[0], gorilla[i].pos[1], gorilla[i].radius, gorilla[i].colour);
}
    play = 0;
}

//*/






function playPause() {
  if(play == 0) {
    two.pause();
    play = 1;
  }
  else if (play == 4) {
	  prob[1][1][1] =parseInt(document.getElementById("box000").value);
      prob[2][1][1]=parseInt(document.getElementById("box100").value);
	  prob[3][1][1]=parseInt(document.getElementById("box200").value);
	  prob[1][2][1]=parseInt(document.getElementById("box010").value);
	  prob[2][2][1]=parseInt(document.getElementById("box110").value);
	  prob[3][2][1]=parseInt(document.getElementById("box210").value);
	  prob[1][3][1]=parseInt(document.getElementById("box020").value);
	  prob[2][3][1]=parseInt(document.getElementById("box120").value);
	  prob[3][3][1]=parseInt(document.getElementById("box220").value);
	  
	  prob[1][1][2] =parseInt(document.getElementById("box001").value);
      prob[2][1][2]=parseInt(document.getElementById("box101").value);
	  prob[3][1][2]=parseInt(document.getElementById("box201").value);
	  prob[1][2][2]=parseInt(document.getElementById("box011").value);
	  prob[2][2][2]=parseInt(document.getElementById("box111").value);
	  prob[3][2][2]=parseInt(document.getElementById("box211").value);
	  prob[1][3][2]=parseInt(document.getElementById("box021").value);
	  prob[2][3][2]=parseInt(document.getElementById("box121").value);
	  prob[3][3][2]=parseInt(document.getElementById("box221").value);
	  
	  prob[1][1][3] =parseInt(document.getElementById("box002").value);
      prob[2][1][3]=parseInt(document.getElementById("box102").value);
	  prob[3][1][3]=parseInt(document.getElementById("box202").value);
	  prob[1][2][3]=parseInt(document.getElementById("box012").value);
	  prob[2][2][3]=parseInt(document.getElementById("box112").value);
	  prob[3][2][3]=parseInt(document.getElementById("box212").value);
	  prob[1][3][3]=parseInt(document.getElementById("box022").value);
	  prob[2][3][3]=parseInt(document.getElementById("box122").value);
	  prob[3][3][3]=parseInt(document.getElementById("box222").value);
	  
	  
	  if ((prob[1][1][1]<1 || prob[1][1][1]>10 || isNaN(prob[1][1][1]) == true)) 
	  {alert("Invalid enclosure type for one grid element on the bottom floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
	  } else if ((prob[2][1][1]<1 || prob[2][1][1]>10 || isNaN(prob[2][1][1]) == true))
	  {  alert("Invalid enclosure type for one grid element on the bottom floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
  	  } else if ((prob[3][1][1]<1 || prob[3][1][1]>10 || isNaN(prob[3][1][1]) == true))
	  {  alert("Invalid enclosure type for one grid element on the bottom floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[1][2][1]<1 || prob[1][2][1]>10 || isNaN(prob[1][2][1]) == true))
	  {  alert("Invalid enclosure type for one grid element on the bottom floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[2][2][1]<1 || prob[2][2][1]>10 || isNaN(prob[2][2][1]) == true))
	  {  alert("Invalid enclosure type for one grid element on the bottom floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[3][2][1]<1 || prob[3][2][1]>10 || isNaN(prob[3][2][1]) == true))
	  {  alert("Invalid enclosure type for one grid element on the bottom floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[1][3][1]<1 || prob[1][3][1]>10 || isNaN(prob[1][3][1]) == true))
	  {  alert("Invalid enclosure type for one grid element on the bottom floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
       } else if ((prob[2][3][1]<1 || prob[2][3][1]>10 || isNaN(prob[2][3][1]) == true))
	  {  alert("Invalid enclosure type for one grid element on the bottom floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[3][3][1]<1 || prob[3][3][1]>10 || isNaN(prob[3][3][1]) == true))
	  {  alert("Invalid enclosure type for one grid element on the bottom floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
	  
	  } else if ((prob[1][1][2]<1 || prob[1][1][2]>10 || isNaN(prob[1][1][2]) == true)) 
	  {alert("Invalid enclosure type for one grid element on the middle floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
	  } else if ((prob[2][1][2]<1 || prob[2][1][2]>10 || isNaN(prob[2][1][2]) == true))
	  {  alert("Invalid enclosure type for one grid element on the middle floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
  	  } else if ((prob[3][1][2]<1 || prob[3][1][2]>10 || isNaN(prob[3][1][2]) == true))
	  {  alert("Invalid enclosure type for one grid element on the middle floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[1][2][2]<1 || prob[1][2][2]>10 || isNaN(prob[1][2][2]) == true))
	  {  alert("Invalid enclosure type for one grid element on the middle floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[2][2][2]<1 || prob[2][2][2]>10 || isNaN(prob[2][2][2]) == true))
	  {  alert("Invalid enclosure type for one grid element on the middle floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[3][2][2]<1 || prob[3][2][2]>10 || isNaN(prob[3][2][2]) == true))
	  {  alert("Invalid enclosure type for one grid element on the middle floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[1][3][2]<1 || prob[1][3][2]>10 || isNaN(prob[1][3][2]) == true))
	  {  alert("Invalid enclosure type for one grid element on the middle floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
       } else if ((prob[2][3][2]<1 || prob[2][3][2]>10 || isNaN(prob[2][3][2]) == true))
	  {  alert("Invalid enclosure type for one grid element on the middle floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[3][3][2]<1 || prob[3][3][2]>10 || isNaN(prob[3][3][2]) == true))
	  {  alert("Invalid enclosure type for one grid element on the middle floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
	 
	  } else if ((prob[1][1][3]<1 || prob[1][1][3]>10 || isNaN(prob[1][1][3]) == true)) 
	  {alert("Invalid enclosure type for one grid element on the top floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
	  } else if ((prob[2][1][3]<1 || prob[2][1][3]>10 || isNaN(prob[2][1][3]) == true))
	  {  alert("Invalid enclosure type for one grid element on the top floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
  	  } else if ((prob[3][1][3]<1 || prob[3][1][3]>10 || isNaN(prob[3][1][3]) == true))
	  {  alert("Invalid enclosure type for one grid element on the top floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[1][2][3]<1 || prob[1][2][3]>10 || isNaN(prob[1][2][3]) == true))
	  {  alert("Invalid enclosure type for one grid element on the top floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[2][2][3]<1 || prob[2][2][3]>10 || isNaN(prob[2][2][3]) == true))
	  {  alert("Invalid enclosure type for one grid element on the top floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[3][2][3]<1 || prob[3][2][3]>10 || isNaN(prob[3][2][3]) == true))
	  {  alert("Invalid enclosure type for one grid element on the top floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[1][3][3]<1 || prob[1][3][3]>10 || isNaN(prob[1][3][3]) == true))
	  {  alert("Invalid enclosure type for one grid element on the top floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
       } else if ((prob[2][3][3]<1 || prob[2][3][3]>10 || isNaN(prob[2][3][3]) == true))
	  {  alert("Invalid enclosure type for one grid element on the top floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
      } else if ((prob[3][3][3]<1 || prob[3][3][3]>10 || isNaN(prob[3][3][3]) == true))
	  {  alert("Invalid enclosure type for one grid element on the top floor. Please enter a number from 1 to 10 where 1=flat indoor ground, 2=water features, 3=trees, 4=vegetables, 5= outdoor grass, 6=fruit, 7=ropes, 8=a climbing frame, 9= a wall and 10=bedding")
	 
	 } else
		 var hid000 = document.getElementById("box000");
        hid000.style.display = 'none';
	var hid100 = document.getElementById("box100");
        hid100.style.display = 'none';
	var hid200 = document.getElementById("box200");
        hid200.style.display = 'none';
	var hid010 = document.getElementById("box010");
        hid010.style.display = 'none';
	var hid110 = document.getElementById("box110");
        hid110.style.display = 'none';
	var hid210 = document.getElementById("box210");
        hid210.style.display = 'none';
	var hid020 = document.getElementById("box020");
        hid020.style.display = 'none';
	var hid120 = document.getElementById("box120");
        hid120.style.display = 'none';
	var hid220 = document.getElementById("box220");
        hid220.style.display = 'none';
		
	var hid001 = document.getElementById("box001");
        hid001.style.display = 'none';
	var hid101 = document.getElementById("box101");
        hid101.style.display = 'none';
	var hid201 = document.getElementById("box201");
        hid201.style.display = 'none';
	var hid011 = document.getElementById("box011");
        hid011.style.display = 'none';
	var hid111 = document.getElementById("box111");
        hid111.style.display = 'none';
	var hid211 = document.getElementById("box211");
        hid211.style.display = 'none';
	var hid021 = document.getElementById("box021");
        hid021.style.display = 'none';
	var hid121 = document.getElementById("box121");
        hid121.style.display = 'none';
	var hid221 = document.getElementById("box221");
        hid221.style.display = 'none';
		
	var hid002 = document.getElementById("box002");
        hid002.style.display = 'none';
	var hid102 = document.getElementById("box102");
        hid102.style.display = 'none';
	var hid202 = document.getElementById("box202");
        hid202.style.display = 'none';
	var hid012 = document.getElementById("box012");
        hid012.style.display = 'none';
	var hid112 = document.getElementById("box112");
        hid112.style.display = 'none';
	var hid212 = document.getElementById("box212");
        hid212.style.display = 'none';
	var hid022 = document.getElementById("box022");
        hid022.style.display = 'none';
	var hid122 = document.getElementById("box122");
        hid122.style.display = 'none';
	var hid222 = document.getElementById("box222");
        hid222.style.display = 'none';
	two.play();
	two.play();
	for(var i = 0; i < gorNum; i++) {
  gorilla[i] = new gorillaObject(1,1,1);
  gorilla[i].radius = 0.5;
  gorillaCircle[i] = generateGorilla(gorilla[i].pos[0], gorilla[i].pos[1], gorilla[i].radius, gorilla[i].colour);
}
    play = 0;
  }
  else if (play ==1) {
	  two.play();
  play = 0;
}
}

function moveGorilla(i) {
  var x = gorilla[i].coord[0],
      y = gorilla[i].coord[1];
      z = gorilla[i].coord[2];
  var pos1 = prob[x+1][y][z+1],
      pos2 = prob[x][y+1][z+1],
      pos3 = prob[x+1][y+1][z+1],
      pos4 = prob[x+2][y+1][z+1],
      pos5 = prob[x+1][y+2][z+1],
      pos6 = prob[x+1][y+1][z],   // down
      pos7 = prob[x+1][y+1][z+2]; // up

  var total = pos1+pos2+pos3+pos4+pos5+pos6+pos7;

  var prob1 = pos1/total,
      prob2 = pos2/total,
      prob3 = pos3/total,
      prob4 = pos4/total,
      prob5 = pos5/total,
      prob6 = pos6/total,
      prob7 = pos7/total;

  prob2 += prob1;
  prob3 += prob2;
  prob4 += prob3;
  prob5 += prob4;
  prob6 += prob5;
  prob7 += prob6;

  var gorillaMind = Math.random();
  if(0 < gorillaMind && gorillaMind < prob1) {
      gorilla[i].coord[0] = x;
      gorilla[i].coord[1] = y-1;
  }
  else if (prob1 < gorillaMind && gorillaMind< prob2) {
      gorilla[i].coord[0] = x-1;
      gorilla[i].coord[1] = y;
  }
  else if (prob2 < gorillaMind && gorillaMind < prob3) {
      gorilla[i].coord[0] = x;
      gorilla[i].coord[1] = y;
  }
  else if (prob3 < gorillaMind && gorillaMind < prob4) {
      gorilla[i].coord[0] = x+1;
      gorilla[i].coord[1] = y;
  }
  else if (prob4 < gorillaMind && gorillaMind < prob5) {
      gorilla[i].coord[0] = x;
      gorilla[i].coord[1] = y+1;
  }
  else if (prob5 < gorillaMind && gorillaMind < prob6) {
      gorilla[i].coord[0] = x;
      gorilla[i].coord[1] = y;
      gorilla[i].coord[2] = z-1;
  }
  else if (prob6 < gorillaMind && gorillaMind < prob7) {
      gorilla[i].coord[0] = x;
      gorilla[i].coord[1] = y;
      gorilla[i].coord[2] = z+1;
  }

  gorilla[i].pos = coordToPos1(gorilla[i].coord[0], gorilla[i].coord[1], gorilla[i].coord[2]);
} //*/


// work out relative co-ordinates of grid - layer 1
function coordToPos1(x,y,z) {
  var ofst = Math.random();
  var pos = [];
  if(z == 0) {
    pos[0] = x_offset + (x+0.4+ofst*0.2)*(length/3);
    pos[1] = y_offset + (y+0.4+ofst*0.2)*(length/3);
    return pos;
  }
  else if(z == 1) {
    pos[0] = x_offset + 5*unit + (x+0.4+ofst*0.2)*(length/3);
    pos[1] = y_offset + (y+0.4+ofst*0.2)*(length/3);
    return pos;
  }
  else if(z == 2) {
    pos[0] = x_offset + 10*unit + (x+0.4+ofst*0.2)*(length/3);
    pos[1] = y_offset + (y+0.4+ofst*0.2)*(length/3);
    return pos;
  }
  //*/
}

function coordToPos(x,y,z) {
  var pos = [];
  if(z == 0) {
    pos[0] = x_offset + (x+0.5)*(length/3);
    pos[1] = y_offset + (y+0.5)*(length/3);
    return pos;
  }
  else if(z == 1) {
    pos[0] = x_offset + 5*unit + (x+0.5)*(length/3);
    pos[1] = y_offset + (y+0.5)*(length/3);
    return pos;
  }
  else if(z == 2) {
    pos[0] = x_offset + 10*unit + (x+0.5)*(length/3);
    pos[1] = y_offset + (y+0.5)*(length/3);
    return pos;
  }
  //*/
}

// initialise two instance
var elem = document.getElementById('draw-shapes');
var params = { width: 1400, height: 750 };
var two = new Two(params).appendTo(elem);


// grid settings and creation
var x_max = 1100;
var y_max = 500;
var x_offset = 100;
var y_offset = 35;
var unit = (x_max-x_offset)/14;
var length = 4*unit;
createGrid();

var heatmap = new Array();
for(var i = 0; i < 3; i++) {
  heatmap[i] = new Array;
  for(var j = 0; j < 3; j++) {
    heatmap[i][j] = new Array();
    for(var k = 0; k < 3; k++) {
      heatmap[i][j][k] = 0;
    }
  }
}
createHeatMap();

var gorNum = 10;
var gorilla = [];
var gorillaCircle = [];

//for(var i = 0; i < gorNum; i++) {
//  gorilla[i] = new gorillaObject(1,1,1);
//  gorilla[i].radius = 0.5;
//  gorillaCircle[i] = generateGorilla(gorilla[i].pos[0], gorilla[i].pos[1], gorilla[i].radius, gorilla[i].colour);
//}

// generateGorilla(gorilla[i].pos[0], gorilla[i].pos[1], 0.5);
// generateGorilla(150, 150, 0.5);

var gorillaHeatMap = new Array();
for(var i = 0; i < 3; i++) {
  gorillaHeatMap[i] = new Array;
  for(var j = 0; j < 3; j++) {
    gorillaHeatMap[i][j] = new Array();
    for(var k = 0; k < 3; k++) {
      gorillaHeatMap[i][j][k] = 0;
    }
  }
}
// animation function
var frameCounter = 0;
// var speed = 30;
two.bind('update', function(framecount) {
  // add animation stuff here
//  var speed = document.getElementById('speedRange').value;
var speed = 30;
 if(frameCounter == speed ) {
  two.clear()
  createGrid();
   createHeatMap();
    for(var i = 0; i < gorNum; i++) {
      gorillaHeatMap[ gorilla[i].coord[0] ][ gorilla[i].coord[1] ][ gorilla[i].coord[2] ] += 1;
      moveGorilla(i);
      gorillaCircle[i] = generateGorilla(gorilla[i].pos[0], gorilla[i].pos[1], gorilla[i].radius, gorilla[i].colour);
    }
    frameCounter = 0;
    updateHeatMap();
	plotGraph2();
	plotGraph();
  }
  frameCounter += 1;


}).play();
two.update();
