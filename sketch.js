var mySong2;
var myImage
var myImage2
var analyser
var amp
var volhistory = []

function preload() {
  mySong2 = loadSound('./elements/Music2.mp3')
  myImage = loadImage('./elements/musicanegro.jpg')
  myImage2 = loadImage('./elements/casettebueno.png')
  myImage3 = loadImage('./elements/notas_2500.png')
  myImage4 = loadImage('./elements/notaverde500.png')
}
var maxCircleSize = 20
var phase = 0, speed = 0.03;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  fill(255)
  ellipse(width / 2, height / 2, 60)

  analyser = new p5.Amplitude();
  analyser.setInput(mySong2)



}

function draw() {
  //balls

  if (mouseX < width/2){
      //stop the sound
      image(myImage,0,0,width,height)

      mySong2.pause()
    } else {
      //play the soundOut
      background(51,73,142,30)
      image(myImage2,volume*2,volume*2,width/2,height/2)
      if(mySong2.isPlaying() == false){
        mySong2.play()
      }
      var volume = analyser.getLevel();
      volume = map(volume,0,1,25,width/2)
    }

      //big circle
      push()
      noStroke()
      fill(186,67,79,150)
      ellipse(width/2,height/2,volume*6)
      pop()
      push()
      noStroke()
      fill(214,191,29,75)
      ellipse(width/2,height/2,volume*2)
      pop()
      push()
      strokeWeight(5)
      stroke(255,100)
      noFill()
      ellipse(width/2,height/2,volume*5)
      pop()
      push()
      strokeWeight(8)
      stroke(255,100)
      noFill()
      ellipse(width/2,height/2,volume*10)
      pop()
      //circle
      noStroke()
      fill(255,100)
      ellipse(width/3,height/5,volume/1)
      noStroke()
      fill(83,151,205,100)
      ellipse(width/5,height/2,volume)
      //yellow circle
      push()
      strokeWeight(2)
      stroke(random(255),random(255),random(255))
      noFill()
      ellipse(random(width,width/10),random(height,height/10),volume/5)
      ellipse(random(width,width/5),random(height,height/10),volume/5)
      pop()
      image(myImage3,volume,0,width/8,height/6)
      push()
      image(myImage2,0,volume/4,width,height)
      pop()


        var x = width/5;
        var y = height/2 + sin(phase) * 50;
        phase = frameCount * speed;
        var sizeOffset = (cos(phase) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;
        stroke('yellow')
        noFill()
        ellipse(x, y, volume/2, volume/2);

        var vol = analyser.getLevel();
              volhistory.push(vol);
              stroke(255)
              strokeWeight(1)
              beginShape();
              noFill()
              for (var i =0; i< volhistory.length; i++){
                var y = map(volhistory[i],0,1, height,0)
                vertex(i,y);

              }

              endShape();

              if( volhistory.length > width ){
                volhistory.splice(width,1);
              }



        if (mouseX < width/2){
            //stop the sound
            image(myImage,0,0,width,height)
          }

}






function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}
