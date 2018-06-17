/* globals $ Two MathJax */
var circleStatus = ["off","off","off","off","off","off"];
var numClicked = 0;
var length = 0;
 updateLength = function(){
    var marker = false;
      length = 0;
    if (((numClicked != 0) && (numClicked != 1)))
     {

        for(var i = 0; i < circleStatus.length;i++)
        {
          if(marker == false)
          {
            if(circleStatus[i] == "on"){marker = true;}
          }else
          {
            length++;
            if(circleStatus[i] == "on"){marker = false;}
          }
        }

    }

}

var PI = Math.PI;
var lib = {}

;(function (ns) {
  ns.Circuit = function (DYVIS, ROUGH, DEN, DIA) {
    var circuit = {
      DYVIS: DYVIS,     //dynamic viscosity
      ROUGH: ROUGH,     //roughness of pipe
      DEN: DEN,         //density of fluid   kgm^-3
      DIA: DIA,         //diameter of pipe  millimetres
               //flow rate         litres per minute



      // Update circuit variables
      update: function () {

        if(pipeSelect.value == 'A')
        {
          circuit.ROUGH = 0.000045;
          circuit.DIA = 10;
        }else if(pipeSelect.value == 'B')
        {
          circuit.ROUGH = 0.000075
          circuit.DIA = 7;
        }else if(pipeSelect.value == 'C')
        {
          circuit.ROUGH = 0.000045
          circuit.DIA = 5;
        }else {
          circuit.ROUGH = 0.000045
          circuit.DIA = 10;
        }



        circuit.LEN = length;
        circuit.FLR = FlowRate.value;
        circuit.FLV = 4*(circuit.FLR/60000)/(PI*(circuit.DIA/1000)*(circuit.DIA/1000));
        circuit.RE = 4*circuit.DEN*(circuit.FLR/60000)/(PI*(circuit.DIA/1000)*circuit.DYVIS);
        if(circuit.RE < 2000 && circuit.RE >0)
        {
          circuit.R = 'Laminar';
          circuit.FF = 64/(circuit.RE);
          circuit.PREDR = circuit.FF*circuit.LEN*circuit.DEN*circuit.FLV*circuit.FLV/((circuit.DIA/1000)*2);
        }else if(circuit.RE >4000)
        {
          circuit.R = 'Turbulent';
          circuit.FF = 1.325/(Math.pow(Math.log((circuit.ROUGH/(3.7*(circuit.DIA/1000))) + 5.74/(Math.pow(circuit.RE,0.9)) ),2));
         circuit.PREDR = circuit.FF*circuit.LEN*circuit.DEN*circuit.FLV*circuit.FLV/((circuit.DIA/1000)*2);

        }else
        {
          circuit.R = 'Transitional';
          circuit.FF = 'N/A';
          circuit.PREDR = 'N/A';
        }
        if(circuit.FLR == 0){circuit.PREDR = 0.00;}


      }

    }
    circuit.update()

    return circuit
  }

  var $window = $(window);
  var elem = document.getElementById('diagramContainer');
  var params = { width: 600, height: 400 };
  var two = new Two(params).appendTo(elem);

  var circle1 = two.makeCircle(179,23, 13);
  var circle2 = two.makeCircle(419, 23, 13);
  var circle3 = two.makeCircle(419,155,13);
  var circle4 = two.makeCircle(180,155,13);
  var circle5 = two.makeCircle(180,288,13);
  var circle6 = two.makeCircle(420,288,13);

  circle1.fill = '#e50000';
  circle2.fill = '#e50000';
  circle3.fill = "#e50000";
  circle4.fill = "#e50000";
  circle5.fill = "#e50000";
  circle6.fill = "#e50000";

  two.update();


  circle1.isActive = false;
  circle2.isActive = false;
  circle3.isActive = false;
  circle4.isActive = false;
  circle5.isActive = false;
  circle6.isActive = false;



  function onClick1(){

  if(circle1.isActive)
  {
    if((numClicked == 2) || (numClicked ==1))
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else if(numClicked == 0)
    {
      console.log('error1');
    }
  }else
  {
    if(numClicked == 2)
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else
    {
      circle1.isActive = true;
      circleStatus[0] = "on"
      circle1.fill = '#008000';
      numClicked = numClicked + 1;

    }
  }

    updateLength();
    two.update();
  }

  function onClick2(){

  if(circle2.isActive)
  {
    if((numClicked == 2) || (numClicked ==1))
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else if(numClicked == 0)
    {
      console.log('error1');
    }
  }else
  {
    if(numClicked == 2)
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else
    {
      circle2.isActive = true;
      circleStatus[1] = "on"
      circle2.fill = '#008000';
      numClicked = numClicked + 1;

    }
  }

    updateLength();
    two.update();
  }

  function onClick3(){

  if(circle3.isActive)
  {
    if((numClicked == 2) || (numClicked ==1))
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else if(numClicked == 0)
    {
      console.log('error1');
    }
  }else
  {
    if(numClicked == 2)
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else
    {
      circle3.isActive = true;
      circleStatus[2] = "on"
      circle3.fill = '#008000';
      numClicked = numClicked + 1;

    }
  }

    updateLength();
    two.update();
  }

  function onClick4(){

  if(circle4.isActive)
  {
    if((numClicked == 2) || (numClicked ==1))
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else if(numClicked == 0)
    {
      console.log('error1');
    }
  }else
  {
    if(numClicked == 2)
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else
    {
      circle4.isActive = true;
      circleStatus[3] = "on"
      circle4.fill = '#008000';
      numClicked = numClicked + 1;

    }
  }

    updateLength();
    two.update();
  }

  function onClick5(){

  if(circle5.isActive)
  {
    if((numClicked == 2) || (numClicked ==1))
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else if(numClicked == 0)
    {
      console.log('error1');
    }
  }else
  {
    if(numClicked == 2)
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else
    {
      circle5.isActive = true;
      circleStatus[4] = "on"
      circle5.fill = '#008000';
      numClicked = numClicked + 1;

    }
  }

    updateLength();
    two.update();
  }

  function onClick6(){

  if(circle6.isActive)
  {
    if((numClicked == 2) || (numClicked ==1))
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else if(numClicked == 0)
    {
      console.log('error1');
    }
  }else
  {
    if(numClicked == 2)
    {
      circle1.isActive = false;
      circleStatus[0] = "off"
      circle2.isActive = false;
      circleStatus[1] = "off"
      circle3.isActive = false;
      circleStatus[2] = "off"
      circle4.isActive = false;
      circleStatus[3] = "off"
      circle5.isActive = false;
      circleStatus[4] = "off"
      circle6.isActive = false;
      circleStatus[5] = "off";
      circle1.fill = '#e50000';
      circle2.fill = '#e50000';
      circle3.fill = '#e50000';
      circle4.fill = '#e50000';
      circle5.fill = '#e50000';
      circle6.fill = '#e50000';
      numClicked = 0;
    }else
    {
      circle6.isActive = true;
      circleStatus[5] = "on"
      circle6.fill = '#008000';
      numClicked = numClicked + 1;

    }
  }

    updateLength();
    two.update();
  }


  //executes onClick when shape is clicked
    function makeButton(shape, onClick) {
      $(shape._renderer.elem)
        .css({
          cursor: "pointer"
        })
        .bind("mousedown", onClick)
    }


  makeButton(circle1, onClick1);
  makeButton(circle2,onClick2);
  makeButton(circle3,onClick3);
  makeButton(circle4,onClick4);
  makeButton(circle5,onClick5);
  makeButton(circle6,onClick6);






  ns.drawCircuit = function (two) {


    $(this.canvasContainer).append('<div class="label" id="labelPREDR">' +
      'Pressure drop = ' + this.circuit.PREDR.toPrecision(3) + ' Pa </div>')



    $('#labelPREDR').css('left',350 )
                      .css('top', 400)

    two.update()

    // Refresh typsetting
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'Fluid Flow'])
  }

  /* Redraw changed labels */
  ns.redrawLabels = function () {
    // Edit MathJax elements directly to update values without having to re-render mathjax
    if(this.circuit.PREDR != 'N/A')
    {
      var displayValue = this.circuit.PREDR.toPrecision(3);
    }else {
      var displayValue = this.circuit.PREDR;
    }

    $('#labelPREDR').html('Pressure drop = ' + displayValue + ' Pa' )



  }


  ns.runApp = function (canvasContainer) {
    this.canvasContainer = canvasContainer

    // Make a new circuit

    this.circuit = ns.Circuit(0.0000181, 0.000075, 1.225, 10)

    var two = new Two({ width: 600, height: 400 }).appendTo(canvasContainer)
    ns.drawCircuit(two)
    // Setup event handlers for resistors
    var self = this

    $('#inputR2').on('input', function () {
      if (!isNaN(this.value) && this.value !== '') {
        self.circuit.R2 = Number(this.value)
        self.circuit.update()
        // Redraw labels
        ns.redrawLabels()
      }
    })


    document.getElementById('FlowRate').onchange = function()
    {
      self.circuit.update();
      ns.redrawLabels();

    }

    document.getElementById('pipeSelect').onchange = function()
    {
      self.circuit.update();
      ns.redrawLabels();

    }
    makeButton(circle1,function(){
      self.circuit.update();
      ns.redrawLabels();

    })
    makeButton(circle2,function(){
      self.circuit.update();
      ns.redrawLabels();

    })
    makeButton(circle3,function(){
      self.circuit.update();
      ns.redrawLabels();

    })
    makeButton(circle4,function(){
      self.circuit.update();
      ns.redrawLabels();

    })
    makeButton(circle5,function(){
      self.circuit.update();
      ns.redrawLabels();

    })
    makeButton(circle6,function(){
      self.circuit.update();
      ns.redrawLabels();

    })
}
})(lib)
