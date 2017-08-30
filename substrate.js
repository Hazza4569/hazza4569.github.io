var cost = 2;
var total = 0;
var base = 0;
var vmax;
var km;
var kic = 1;
var kiu = 1;
var n = 0;
var v;
var arr = [[],[],[]];
var arr2 = [];



document.getElementById("off").value = 0;


		var inhibitor = false;

if (document.getElementById("inhib").value == "none") {
        document.getElementById("I").value = "";
        document.getElementById("I").disabled = true;
        document.getElementById("I").style.backgroundColor = "#CCCCCC";
    } else {
        document.getElementById("I").disabled = false;
        document.getElementById("I").style.backgroundColor = "#ffffff";
    };


var ctx = document.getElementById('myChart').getContext('2d');


var scatterChart = new Chart(ctx, {
    data: {
        datasets: [{
                label: 'None',
				backgroundColor: 'blue',
                data: [],
                pointBackgroundColor: 'blue',
				pointStyle: [],
                fill: false,
                showLine: false,
                type: 'scatter'
            },
			{
                label: 'Competitive',
				backgroundColor: 'red',
                data: [],
                pointBackgroundColor: 'red',
				pointStyle: [],
                fill: false,
                showLine: false,
                type: 'scatter'
            },
			{
                label: 'Uncompetitive',
				backgroundColor: 'green',
                data: [],
                pointBackgroundColor: 'green',
				pointStyle: [],
                fill: false,
                showLine: false,
                type: 'scatter'
            },
			{
                label: 'Mixed',
				backgroundColor: 'yellow',
                data: [],
                pointBackgroundColor: 'yellow',
				pointStyle: [],
                fill: false,
                showLine: false,
                type: 'scatter'
            }
           /* ,{
                label: 'Line Dataset',
                data: [],

                 Changes this dataset to become a line
                type: 'line'


            }*/
        ]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                    display: true,
                    labelString: '[S] mM'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'V \u03BCmol dm\u207B\u00B3 s\u207B\u00B9'
                }
            }]
        }
    }
});


function Run() {


if (document.getElementById("off").value == '') {document.getElementById("off").value = 0;};
	var off = parseFloat(document.getElementById("off").value);
    var S = parseFloat(document.getElementById("S").value);
	var I = parseFloat(document.getElementById("I").value);
	var E = parseFloat(document.getElementById("E").value);

	
		if (document.getElementById("enz").value == "Type A") {
		vmax = 9;
		km = 2;
    } else if (document.getElementById("enz").value == "Type B") {
		vmax = 14;
		km = 5;
    }
	else if (document.getElementById("enz").value == "Type C") {
		vmax = 19;
		km = 3;      
    }
	else {
		vmax = 10;
		km = 7;      
    };
	
	vmax=vmax*E;
	//console.log(vmax,km);

    if ((jQuery.isNumeric(document.getElementById("S").value)) == false || (jQuery.isNumeric(document.getElementById("E").value)) == false || (jQuery.isNumeric(document.getElementById("off").value)) == false) {
        alert("Please enter a number");
    } else if (S < 0 || E < 0 ) {
        alert("You must have a positve concentration");
    } else {
		if ((jQuery.isNumeric(document.getElementById("I").value)) == false && document.getElementById("inhib").value != 'none') {
        alert("Please enter a number");
    } else if (I < 0 && document.getElementById("inhib").value != 'none') {
        alert("You must have a positve concentration");
    } else {

        var table = document.getElementById("table");
		

	
        var row = table.insertRow(-1);
        row.style = "text-align: center";
		
		
		

		
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(1);
        var box1 = document.createElement("div");
        box1.type = "text";
        box1.style = "width:100px; text-align:center; margin:auto";
        box1.id = "s" + n;
        var box2 = document.createElement("div");
        box2.type = "text";
        box2.style = "width:100px; text-align:center; margin:auto";
        box2.id = "v" + n;
        cell1.appendChild(box1);
        cell2.appendChild(box2);
		
		
		if (inhibitor){
		var m=n+1;
		var cell3 = row.insertCell(1);
		var box3 = document.createElement("div");
        box3.type = "text";
        box3.style = "width:100px; text-align:center; margin:auto";
        box3.id = "i" + m;
		cell3.appendChild(box3);
		document.getElementById("i" + m).innerHTML = I;
			
		};



        if (S == 0) {
            var err = 0
        } else {
            var err = Math.random() * (2 / S) - 1 / S
        };
        //console.log(err);
        //console.log((vmax*S)/(km+S));
		//console.log(document.getElementById("inhib").value);
		if (document.getElementById("inhib").value == "competitive"){v = base + off + Math.round(((vmax * S) / (km*(1+I/kic) + S) + err) * 100) / 100;}
		else if (document.getElementById("inhib").value == "uncompetitive") {v = base + off + Math.round(((vmax * S) / (km + S*(1+I/kiu)) + err) * 100) / 100;}
		else if (document.getElementById("inhib").value == "mixed") {v = base + off + Math.round(((vmax * S) / (km*(1+I/kic) + S*(1+I/kiu)) + err) * 100) / 100;}
		else {v = base + off + Math.round(((vmax * S) / (km + S) + err) * 100) / 100};
        document.getElementById("s" + n).innerHTML = S;
        document.getElementById("v" + n).innerHTML = v;

        arr[0].push(S);
		arr[1].push(I); 
		arr[2].push(v);

        arr2.push([v, S]);

        //console.log(arr);




        //console.log(scatterChart.data.datasets[0].pointStyle);
		    if (document.getElementById("inhib").value == "none") {
       scatterChart.data.datasets[0].data.push({
            x: S,
            y: v
        });
				    if (document.getElementById("enz").value == "Type A") {
       scatterChart.data.datasets[0].pointStyle.push(
            'circle'
        );
    } else if (document.getElementById("enz").value == "Type B") {
		scatterChart.data.datasets[0].pointStyle.push(
            'triangle'
        );
        
    }
	else if (document.getElementById("enz").value == "Type C") {
		scatterChart.data.datasets[0].pointStyle.push(
            'rect'
        );
        
    }
	else if (document.getElementById("enz").value == "Type D") {
		scatterChart.data.datasets[0].pointStyle.push(
            'rectRot'
        );
        
    };
		
    } else if (document.getElementById("inhib").value == "competitive") {
		scatterChart.data.datasets[1].data.push({
            x: S,
            y: v
        });
						    if (document.getElementById("enz").value == "Type A") {
       scatterChart.data.datasets[1].pointStyle.push(
            'circle'
        );
    } else if (document.getElementById("enz").value == "Type B") {
		scatterChart.data.datasets[1].pointStyle.push(
            'triangle'
        );
        
    }
	else if (document.getElementById("enz").value == "Type C") {
		scatterChart.data.datasets[1].pointStyle.push(
            'rect'
        );
        
    }
	else if (document.getElementById("enz").value == "Type D") {
		scatterChart.data.datasets[1].pointStyle.push(
            'rectRot'
        );
        
    };
        
    }
	else if (document.getElementById("inhib").value == "uncompetitive") {
		scatterChart.data.datasets[2].data.push({
            x: S,
            y: v
        });
						    if (document.getElementById("enz").value == "Type A") {
       scatterChart.data.datasets[2].pointStyle.push(
            'circle'
        );
    } else if (document.getElementById("enz").value == "Type B") {
		scatterChart.data.datasets[2].pointStyle.push(
            'triangle'
        );
        
    }
	else if (document.getElementById("enz").value == "Type C") {
		scatterChart.data.datasets[2].pointStyle.push(
            'rect'
        );
        
    }
	else if (document.getElementById("enz").value == "Type D") {
		scatterChart.data.datasets[2].pointStyle.push(
            'rectRot'
        );
        
    };
        
    }
	else if (document.getElementById("inhib").value == "mixed") {
		scatterChart.data.datasets[3].data.push({
            x: S,
            y: v
        });
						    if (document.getElementById("enz").value == "Type A") {
       scatterChart.data.datasets[3].pointStyle.push(
            'circle'
        );
    } else if (document.getElementById("enz").value == "Type B") {
		scatterChart.data.datasets[3].pointStyle.push(
            'triangle'
        );
        
    }
	else if (document.getElementById("enz").value == "Type C") {
		scatterChart.data.datasets[3].pointStyle.push(
            'rect'
        );
        
    }
	else if (document.getElementById("enz").value == "Type D") {
		scatterChart.data.datasets[3].pointStyle.push(
            'rectRot'
        );
        
    };
        
    };
        
        //console.log(scatterChart.data.datasets[0].data);
        //console.log("test");
        scatterChart.update();

        n++;
		costcalc();
	total=total + cost;
	document.getElementById("cost total").innerHTML = "\u00A3" + total;




        /* prepare data for download and attached to a href link */

        //const result = regression.exponential(arr2);
        //cosole.log(result);


        /* loop through the data and add newline characters for each row */

        var csvString = "";


        for (j = 0; j < arr[0].length; j++) {

            if (inhibitor) {csvString += arr[0][j] + "," + arr[1][j] +  "," + arr[2][j] + "\n";}
			else {csvString += arr[0][j] + "," + arr[2][j] + "\n";};
        };
        console.log(csvString);


        /* Encode and attach the data to a hyperlink for download*/
        jQuery("#dataDownload").attr("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csvString));
        jQuery("#dataDownload").attr("download", "data.csv");

    }};
};

function dropdown() {
	costcalc();
	
	var table = document.getElementById("table");
	
	//console.log(inhibitor, document.getElementById("inhib").value);
	if (inhibitor==false && document.getElementById("inhib").value != "none"){
		inhibitor=true;
		var cellt = table.rows[0].insertCell(1);
		var boxt = document.createElement("div");
        boxt.type = "text";
        boxt.style = "width:100px; text-align:center; margin:auto";
        boxt.id = "[I]";
		cellt.appendChild(boxt);
		document.getElementById("[I]").innerHTML = "<b>[I] mM</b>";
		
		for (i = 1; i < table.rows.length; i++) {
        var celli = table.rows[i].insertCell(1);
		var boxi = document.createElement("div");
        boxi.type = "text";
        boxi.style = "width:100px; text-align:center; margin:auto";
        boxi.id = "i" + i;
		celli.appendChild(boxi);
    };
	};
		

    //console.log(document.getElementById("inhib").value);
if (document.getElementById("inhib").value == "none") {
        document.getElementById("I").value = "";
        document.getElementById("I").disabled = true;
        document.getElementById("I").style.backgroundColor = "#CCCCCC";
    } else {
        document.getElementById("I").disabled = false;
        document.getElementById("I").style.backgroundColor = "#ffffff";
    };
};

function Reset() {
	
	location.reload();
	
};

function costcalc() {
	var e,s,i,typ,inh;
	
	if (jQuery.isNumeric(document.getElementById("E").value) == false) {e = 0}
	else {e=parseFloat(document.getElementById("E").value);};
	if (jQuery.isNumeric(document.getElementById("S").value) == false) {s = 0}
	else {s=parseFloat(document.getElementById("S").value);};
	if (jQuery.isNumeric(document.getElementById("I").value) == false) {i = 0}
	else {i=parseFloat(document.getElementById("I").value);};
	
	if (document.getElementById("enz").value == "Type A") {
       typ=2
        
    } else if (document.getElementById("enz").value == "Type B") {
		typ=3
        
    }
	else if (document.getElementById("enz").value == "Type C") {
		typ=4
        
    }
	else if (document.getElementById("enz").value == "Type D") {
		typ=5
	};
	
	if (document.getElementById("inhib").value == "none") {
       inh=2
        
    } else if (document.getElementById("inhib").value == "competitive") {
		inh=3
        
    }
	else if (document.getElementById("inhib").value == "uncompetitive") {
		inh=4
        
    }
	else if (document.getElementById("inhib").value == "mixed") {
		inh=5
	};
	
	cost = e*typ + s*3 +i*inh;
	document.getElementById("cost per").innerHTML = "\u00A3" + cost;
	
};