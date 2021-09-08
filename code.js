var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var car4 = createSprite(330, 296, 15, 15);
car4.shapeColor = "red";
var car3 = createSprite(252, 200, 15, 15);
car3.shapeColor = "red";
var car2 = createSprite(200, 302, 15, 15);
car2.shapeColor = "red";
var car1 = createSprite(120, 200, 15, 15);
car1.shapeColor = "red";
var boundary2 = createSprite(0, 330, 5555, 5);
var boundary1 = createSprite(4, 150, 5555, 5);
var sam = createSprite(40, 250, 15, 15);
var Lives=0;
function draw() {
  background(rgb(98, 252, 3));
  createEdgeSprites();
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  if (keyDown("right")) {
    sam.x=sam.x+2
    
  }
  if (keyDown("left")) {
    sam.x=sam.x-2
  }
  if (sam.isTouching(car4)) {
    playSound("assets/category_jump/arcade_game_jump_11.mp3");
    sam.x=40;
   sam.y=250;
   Lives=Lives+1;
  }
  if (sam.isTouching(car3)) {
    playSound("assets/category_jump/arcade_game_jump_11.mp3");
    sam.x=40;
   sam.y=250;
   Lives=Lives+1;
  }
  if (sam.isTouching(car2)) {
    playSound("assets/category_jump/arcade_game_jump_11.mp3");
    sam.x=40;
    sam.y=250;
    Lives=Lives+1;
  }
  if (sam.isTouching(car1)) {
    playSound("assets/category_jump/arcade_game_jump_11.mp3");
    sam.x=40;
    sam.y=250;
    Lives=Lives+1;
  }
  textSize(20);
  stroke("red");
  text("Lives:"+Lives,200,100);
   ;fill("lightblue");
  rect(0,150,52,180);
  fill("yellow");
  rect(345,150,52,180);
  drawSprites();
}
car1.velocityY = -4;
car2.velocityY = 4;
car3.velocityY = -4;
car4.velocityY = 4;

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
