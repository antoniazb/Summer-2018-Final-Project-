var table;

function preload() {
  table = loadTable("data/gatsby-data.csv");
  // img = loadImage("cat.jpg");
}

function setup() {
  var canvas = createCanvas(1000,1000);
  // canvas.parent("dataviz");
  console.log(table.getRowCount());
  console.log(table.getColumnCount());
  var lastaX
}

function draw() {
  // image(img, 0, 0, width, height);
  background(255);
  makeBubbles();
  textSize(102);
  fill(24, 37, 100);
  textSize(102);
  fill(24, 37, 100);
  quoteGatsby();


}

function quoteGatsby() {
  if (mouseX < 150) {
    text('“So we beat on,', 100, 700);
  }
  else if (mouseX < 310 && mouseX > 150) {
    text('boats against', 100, 700);
  }
  else if (mouseX < 470 && mouseX > 310) {
    text('the current,', 100, 700);
  }
  else if (mouseX < 630 && mouseX > 470) {
    text('borne back', 100, 700);
  }
  else if (mouseX < 790 && mouseX > 630) {
    text('ceaselessly', 100, 700);
  }
  else if (mouseX < 1000 && mouseX > 790) {
    text('into the past.”', 100, 700);
  }
}

function makeBubbles() {
  for (i = 0; i<table.getRowCount()-490; i++ ) {

    var row = table.getRow(i);
    var ax = row.get(0);
    var ay = row.get(1);
    var az = row.get(2);
    var timeStamp = i * 200;

    var y = map(ax, -20, 25, 0, height);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 0, 2*width);
    stroke(255, 221, 104);
    fill(196, 112-random(20), 162);
    var bubbleSize = 3*ax;
    ellipse(x, y, bubbleSize, bubbleSize);
    fill(255, 221, 104);
    ellipse(x, y, 3, 3);

    var y = map(ay, -10, 5, 0, height);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 0, 2*width);
    stroke(200, 49, 50);
    fill(59, 206, 235);
    var bubbleSize = 9*ay;
    ellipse(x, y, bubbleSize, bubbleSize);
    fill(255, 221, 104);
    ellipse(x, y, 3, 3);

    var y = map(az, -10, 5, 0, height);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 0, 2*width);
    stroke(196, 112, 162);
    fill(81, 136+random(15), 200);
    var bubbleSize = 9*az;
    ellipse(x, y, bubbleSize, bubbleSize);
    fill(255, 221, 104);
    ellipse(x, y, 3, 3);

    // // hover
    // if( mouseX < x + bubbleSize && mouseX > x &&
    //     mouseY < y + bubbleSize && mouseX > y ) {
    //       console.log("ax");
    //     }

  }
}
