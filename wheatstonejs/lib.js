/* globals $ Two MathJax */

var lib = {}

;(function (ns) {
  ns.Circuit = function (R1, R2, R3, R4, R5, R6, REQ, VTH) {
    var circuit = {
      R1: R1,
      R2: R2,
      R3: R3,
      R4: R4,
      R5: R5,
      R6: R6,
      REQ: REQ,
      VTH: VTH,

      // Update circuit variables
      update: function () {
        circuit.I = circuit.VTH / (circuit.R1 + circuit.REQ + circuit.R3)
        circuit.Vint = circuit.I *(circuit.R2 + circuit.R4)
        circuit.Vout = -circuit.Vint *(circuit.R6 / circuit.R5)
        circuit.V3 = circuit.I * circuit.R3

        if(isNaN(circuit.Vout))
        {
          circuit.Vout = 0;
        }


        return circuit
      }
    }

    circuit.update()

    return circuit
  }

  /* Draw the circuit onto the screen. Warning! This is a huge block of drawing code! */
  ns.drawCircuit = function (two) {
    // Add voltage source
    var source = { x: 100, y: two.height / 2, radius: 50, labelOffset: 30 }

    //two.makeEllipse(source.x, source.y, source.radius, source.radius)

    // Add voltage source labels
    var textPadding = { x: 6, y: 10 }

    $(this.canvasContainer).append('<div class="label" id="labelSourceVTH">' +
      '\\(V_{TH} = ' + this.circuit.VTH + ' V \\)</div>')
    $(this.canvasContainer).append('<div class="label" id="labelR1">' +
      '\\(R_1 =\\) ' + this.circuit.R1  +
      '<div class="padTopOmega">\\(\\Omega\\)</div></div>')
    $(this.canvasContainer).append('<div class="label" id="labelR4">' +
        '\\(R_4 =\\) ' + this.circuit.R4  +
        '<div class="padTopOmega">\\(\\Omega\\)</div></div>')
    $(this.canvasContainer).append('<div class="label" id="labelREQ1">' +
        '\\(\R_{eq}/2 =\\) ' + this.circuit.REQ/2  +
        '<div class="padTopOmega">\\(\\Omega\\)</div></div>')
    $(this.canvasContainer).append('<div class="label" id="labelREQ2">' +
          '\\(\R_{eq}/2 =\\) ' + this.circuit.REQ/2  +
            '<div class="padTopOmega">\\(\\Omega\\)</div></div>')



    $('#labelSourceVTH').css('left', source.x - textPadding.x - 210)
                      .css('top', source.y - textPadding.y - 125)
    $('#labelSourcePlus').css('left', source.x - textPadding.x)
                         .css('top', source.y - source.labelOffset - textPadding.y)
    $('#labelSourceMinus').css('left', source.x - textPadding.x)
                          .css('top', source.y + source.labelOffset - textPadding.y)
    $('#labelR1').css('left', source.x - textPadding.x + 35)
                        .css('top', source.y - textPadding.y - 190)
    $('#labelR4').css('left', source.x - textPadding.x +150)
                  .css('top', source.y  -30 - textPadding.y)
    $('#labelREQ1').css('left', source.x  - textPadding.x -80)
                .css('top', source.y  -190 - textPadding.y)
    $('#labelREQ2').css('left', source.x  - textPadding.x - 100)
                  .css('top', source.y  -60  - textPadding.y)
    // Add circuit lines

    var distanceFromEdges = 30
    var circuitWidth = 250
    var circuitHeight = two.height - 2 * distanceFromEdges


    // Draw the resistors

    var resistorSpacing = circuitHeight / 4
    var resistorWidth = 40
    var resistorHeight = 80
    var resistorOffset = 20


    // Add resistor labels

    $(this.canvasContainer).append('<div class="label" id="labelR2">\\(R_2 =\\)' +
      '<input ID="inputR2" type="text" class="inputR" tabindex="2" value="' + this.circuit.R2 + '"/>' +
      '<div class="padTopOmega">\\(\\Omega\\)</div></div>')
    $(this.canvasContainer).append('<div class="label" id="labelR3">\\(R_3 =\\)' +
      '<input ID="inputR3" type="text" class="inputR" tabindex="3" value="' + this.circuit.R3 + '"/>' +
      '<div class="padTopOmega">\\(\\Omega\\)</div></div>')

    $(this.canvasContainer).append('<div class="label" id="labelR5">\\(R_5 =\\)' +
      '<input ID="inputR5" type="text" class="inputR" tabindex="5" value="' + this.circuit.R5 + '"/>' +
      '<div class="padTopOmega">\\(\\Omega\\)</div></div>')
    $(this.canvasContainer).append('<div class="label" id="labelR6">\\(R_6 =\\)' +
      '<input ID="inputR6" type="text" class="inputR" tabindex="6" value="' + this.circuit.R6 + '"/>' +
      '<div class="padTopOmega">\\(\\Omega\\)</div></div>')



    $('#labelR2').css('left', source.x  +180 - textPadding.x )
                 .css('top', distanceFromEdges + 0 * resistorSpacing - textPadding.y -25)

    $('#labelR3').css('left', source.x  - textPadding.x +10 )
                 .css('top',  source.y  -60  - textPadding.y)



    $('#labelR5').css('left', source.x  +290 - textPadding.x )
                 .css('top',   +90 - textPadding.y)

    $('#labelR6').css('left', source.x  +450 - textPadding.x )
                 .css('top', +40 - textPadding.y)


    // Add voltage labels
    $(this.canvasContainer).append('<div class="label" id="labelVint">' +
      '\\(V_{int} = ' + this.circuit.Vint.toPrecision(3) + 'V\\)</div>')
    $(this.canvasContainer).append('<div class="label" id="labelVout">' +
      '\\(V_{out} = ' + this.circuit.Vout.toPrecision(3) + 'V\\)</div>')



    var voltagePadding = 14

    $('#labelVint').css('left', source.x + 290 - textPadding.x )
                 .css('top', 150 - textPadding.y)

    $('#labelVout').css('left', source.x + circuitWidth + 360 - textPadding.x )
                 .css('top', 170 - textPadding.y)




    two.update()

    // Refresh typsetting
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'Kirchhoff Voltage Law'])
  }

  /* Redraw changed labels */
  ns.redrawLabels = function () {

    if(isNaN(this.circuit.Vout))
    {
      var displayValue = 0;
    }else
    {
      var displayValue = this.circuit.Vout.toPrecision(3);
    }

    // Edit MathJax elements directly to update values without having to re-render mathjax
    $('#labelVint .mjx-mrow > .mjx-mn > .mjx-char').html(this.circuit.Vint.toPrecision(3))
    $('#labelVout .mjx-mrow > .mjx-mn > .mjx-char').html(displayValue)
    console.log(displayValue)


  }

  ns.runApp = function (canvasContainer) {
    this.canvasContainer = canvasContainer

    // Make a new circuit
    this.circuit = ns.Circuit(2500, 0, 0, 75000, 0, 0, 120, -0.029)

    var two = new Two({ width: 500, height: 500 }).appendTo(canvasContainer)
    ns.drawCircuit(two)



    // Setup event handlers for resistors
    var self = this
    var err = ["okay","okay","okay","okay"];

    $('#inputR2').on('input', function () {
      if(this.value > 100000)
      {
        err[0]="over"
      }
      else if(this.value < 2000 && this.value != ' ')
      {
        err[0]="under"
      }
      else
      {
        err[0]="okay"
      }
      if (!isNaN(this.value) && this.value !== '') {
        self.circuit.R2 = Number(this.value)
        self.circuit.update()
        // Redraw labels
        ns.redrawLabels()
      }
      var chgOver = false
      var chgUnder = false
      for (var itr=0;itr<4;itr++) {
        if (err[itr] == "over") {
          chgOver=true
        }
        else if (err[itr] == "under") {
          chgUnder=true
        }
      }
      if (chgUnder) {
        document.getElementById("warning2").style.display="block";
      }
      else{
        document.getElementById("warning2").style.display="none";
      }
      if (chgOver) {
        document.getElementById("warning1").style.display="block";
      }
      else{
        document.getElementById("warning1").style.display="none";
      }

    })
    $('#inputR3').on('input', function () {
      if(this.value > 100000)
      {
        err[1]="over"
      }
      else if(this.value < 2000 && this.value != ' ')
      {
        err[1]="under"
      }
      else
      {
        err[1]="okay"
      }
      if (!isNaN(this.value) && this.value !== '') {
        self.circuit.R3 = Number(this.value)
        self.circuit.update()
        // Redraw labels
        ns.redrawLabels()
      }
      var chgOver = false
      var chgUnder = false
      for (var itr=0;itr<4;itr++) {
        if (err[itr] == "over") {
          chgOver=true
        }
        else if (err[itr] == "under") {
          chgUnder=true
        }
      }
      if (chgUnder) {
        document.getElementById("warning2").style.display="block";
      }
      else{
        document.getElementById("warning2").style.display="none";
      }
      if (chgOver) {
        document.getElementById("warning1").style.display="block";
      }
      else{
        document.getElementById("warning1").style.display="none";
      }
    })

  $('#inputR5').on('input', function () {
    if(this.value > 100000)
    {
      err[2]="over"
    }
    else if(this.value < 2000 && this.value != ' ')
    {
      err[2]="under"
    }
    else
    {
      err[2]="okay"
    }
    if (!isNaN(this.value) && this.value !== '') {
      self.circuit.R5 = Number(this.value)
      self.circuit.update()
      // Redraw labels
      ns.redrawLabels()
    }
    var chgOver = false
    var chgUnder = false
    for (var itr=0;itr<4;itr++) {
      if (err[itr] == "over") {
        chgOver=true
      }
      else if (err[itr] == "under") {
        chgUnder=true
      }
    }
    if (chgUnder) {
      document.getElementById("warning2").style.display="block";
    }
    else{
      document.getElementById("warning2").style.display="none";
    }
    if (chgOver) {
      document.getElementById("warning1").style.display="block";
    }
    else{
      document.getElementById("warning1").style.display="none";
    }
  })
  $('#inputR6').on('input', function () {
    if(this.value > 100000)
    {
      err[3]="over"
    }
    else if(this.value < 2000 && this.value != ' ')
    {
      err[3]="under"
    }
    else
    {
      err[3]="okay"
    }
    if (!isNaN(this.value) && this.value !== '') {
      self.circuit.R6 = Number(this.value)
      self.circuit.update()
      // Redraw labels
      ns.redrawLabels()
    }
    var chgOver = false
    var chgUnder = false
    for (var itr=0;itr<4;itr++) {
      if (err[itr] == "over") {
        chgOver=true
      }
      else if (err[itr] == "under") {
        chgUnder=true
      }
    }
    if (chgUnder) {
      document.getElementById("warning2").style.display="block";
    }
    else{
      document.getElementById("warning2").style.display="none";
    }
    if (chgOver) {
      document.getElementById("warning1").style.display="block";
    }
    else{
      document.getElementById("warning1").style.display="none";
    }
  })
}
})(lib)
