/* globals $ lib MathJax */

/* Run app when all MathJax has loaded. */
MathJax.Hub.Queue(function () {
  // Unhide diagram
  $('#hiddenMathJax').css('visibility', '')

  // Get diagram container and run app
  var elem = $('#diagramContainer')[0]
  lib.runApp(elem)
})
