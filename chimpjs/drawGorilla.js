function generateGorilla(x, y, size, colour) {
  // Make an instance of two and place it on the page.
  //var elem = document.getElementById('draw-shapes');
  //var params = { width: 500, height: 500 };
  //var two = new Two(params).appendTo(elem);

  var group = two.makeGroup(),
  a=colour;

  ear1 = two.makeCircle(x - 45*size, y, 15*size);
  ear1.fill = a;
  ear1.noStroke();
  group.add(ear1);

  ear2 = two.makeCircle(x + 45*size, y, 15*size);
  ear2.fill = a;
  ear2.noStroke();
  group.add(ear2);

  bigcircle = two.makeCircle(x, y, 48*size);
  bigcircle.fill = a;
  bigcircle.noStroke();
  group.add(bigcircle);

  facecircle = two.makeCircle(x, y + 8*size, 30*size);
  facecircle.fill = ' #ffecb3';
  facecircle.noStroke();
  group.add(facecircle);

  topcircle1 = two.makeCircle(x - 14*size, y - 15*size, 15*size);
  topcircle1.fill = ' #ffecb3';
  topcircle1.noStroke();
  group.add(topcircle1);

  topcircle2 = two.makeCircle(x +14*size, y - 15*size, 15*size);
  topcircle2.fill = ' #ffecb3';
  topcircle2.noStroke();
  group.add(topcircle2);

  eyecircle1 = two.makeCircle(x - 14*size, y - 15*size, 4*size);
  eyecircle1.fill = ' #000000';
  eyecircle1.noStroke();
  group.add(eyecircle1);

  eyecircle2 = two.makeCircle(x + 14*size, y - 15*size, 4*size);
  eyecircle2.fill = ' #000000';
  eyecircle2.noStroke();
  group.add(eyecircle2);

  line = two.makeLine(x + 8*size, y + 2*size, x + 8*size, y + 10*size);
  line.linewidth = 2*size;
  line.stroke = "rgba(0, 0, 0, 1)";
  group.add(line);

  line2 = two.makeLine(x - 7*size, y + 2*size, x - 7*size, y + 10*size);
  line2.linewidth = 2*size;
  line2.stroke = "rgba(0, 0, 0, 1)";
  group.add(line2);

  curve = two.makeCurve(x+14*size, y + 23*size, x, y + 27*size, x - 14*size, y + 23*size, true);
  curve.linewidth = 2*size;
  curve.noFill();
  group.add(curve);

  // group.scale = size;
  // two.update();

}

// generateGorilla(300,300,0.5);
