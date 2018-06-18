var lukeSkywalker = $("<img>")
lukeSkywalker.attr("src", "assets/images/luke.jpg");

var kenobi = $("<img>")
kenobi.attr("src", "assets/images/kenobi.png");

var kyloren = $("<img>")
kyloren.attr("src", "assets/images/kyloren.png");

var darthmaul = $("<img>")
darthmaul.attr("src", "assets/images/darthmaul.png");

var sidious = $("<img>")
sidious.attr("src", "assets/images/sidious.png");


$(document).ready(function () {
  console.log($("#fighterOne"));
  console.log($("#fighterOne")[0].firstChild)

  var lukeObj = new StarWars("Luke SkyWalker", 225, 50, lukeSkywalker);
  var kylorenObj = new StarWars("Kylo Ren", 150, 25, kyloren);
  var kenobiObj = new StarWars("Kenobi", 250, 100, kenobi);
  var darthmaulObj = new StarWars("Darth Maul", 150, 50, darthmaul);
  var sidiousObj = new StarWars("Sidious", 100, 100, sidious);

  function StarWars(name, health, attack, imgObj) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.imgObj = imgObj;
  }

  function appendImages(character) {
    character.className = "limited";
    $("#characterStage").append(character);
  }
  appendImages(lukeObj.imgObj[0]);
  appendImages(kylorenObj.imgObj[0]);
  appendImages(kenobiObj.imgObj[0]);
  appendImages(darthmaulObj.imgObj[0]);
  appendImages(sidiousObj.imgObj[0]);

  $(".limited").on("click", function (event) {
    if ($("#fighterOne")[0].firstChild === null) {
      $("#fighterOne").append(event.currentTarget);
    } else {
      $("#fighterTwo").append(event.currentTarget);
    }
  });

  $(".customButton").on("click",function(){
    
  })

});;