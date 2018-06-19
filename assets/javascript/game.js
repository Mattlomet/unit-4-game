
$(document).ready(function () {

  var lukeSkywalker = $("<img>")
  var kenobi = $("<img>")
  var kyloren = $("<img>")
  var darthmaul = $("<img>")
  var sidious = $("<img>")

  function createElements(name,link,value){
    name.attr("src",link);
    name.attr("id", value);
    console.log(name);
  }
  createElements(lukeSkywalker, "assets/images/luke.png", 0);
  createElements(kenobi, "assets/images/kenobi.png", 1);
  createElements(kyloren, "assets/images/kyloren.png", 2);
  createElements(darthmaul, "assets/images/darthmaul.png", 3);
  createElements(sidious, "assets/images/sidious.png", 4);

  
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

  $(".customButton").on("click", function () {
    // use values to get full object and or somehow trace the image element back to its object then compare life and attack of two fighters
  
    var attacker;
    var defender;
    var attackerDiv = $("#fighterOne")[0].firstChild;
    console.log(attackerDiv.attributes.id);

    var attackerValue = attackerDiv.attributes.id;
    console.log(attackerValue);
    if (attackerValue ===  ) {
      attacker = lukeObj;
      console.log("hello")
    }else{
      console.log("failure")
    }
  });

});;