$(document).ready(function () {

  var lukeSkywalker = $("<img>")
  var kenobi = $("<img>")
  var kyloren = $("<img>")
  var darthmaul = $("<img>")
  var sidious = $("<img>")

  function createElements(name, link, value) {
    name.attr("src", link);
    name.attr("id", value);
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


  // function appendImages(character, number) {
  //   var image = character.imgObj[0];
  //   console.log(image);
  //   $("#characterStage").append("<div class='containerlimited'>" + "<h1 class='row'>" + "Health: " + character.health + "</h1>" + "<h2 class='row'>" + "Attack: " + character.attack + "</h2>" + "<div id='+number+ class='row imageRow'>" + +"</div>" + "</div>");

  // }
  // appendImages(lukeObj, 1);
  // appendImages(kylorenObj, 2);
  // appendImages(kenobiObj, 3);
  // appendImages(darthmaulObj, 4);
  // appendImages(sidiousObj, 5);

  var objectArray = [lukeObj,kylorenObj,kenobiObj,darthmaulObj,sidiousObj]
  
  function appendImages(array) {
    for (let i = 0; i < array.length; i++) {
      var runningArray = array[i];
      
      var stockDiv = $("<div>");
      $(stockDiv).addClass("col-sm-2 limited")
      stockDiv.attr("id", i)

      var healthHeader = $("<h1>")
      healthHeader.attr("class","row")
      healthHeader.text(runningArray.health);
      
      var attackHeader = $("<h2>")
      attackHeader.attr("class","row")
      attackHeader.text(runningArray.attack);
      
      var imageContainer = $("<div>")
      imageContainer.attr("class","row");
      imageContainer.html(runningArray.imgObj[0])

      stockDiv.append(healthHeader);
      stockDiv.append(attackHeader);
      stockDiv.append(imageContainer);
      
      $("#characterStage").append(stockDiv);
      
    }
  }
  
  appendImages(objectArray);

  $(".limited").on("click", function (event) {
    if ($("#fighterOne")[0].firstChild === null) {
      $("#fighterOne").append(event.currentTarget);
    } else {
      $("#fighterTwo").append(event.currentTarget);
    }
  });

  $(".customButton").on("click", function () {
    var intervalId;

    var attacker;
    var defender;
    var attackerDiv = $("#fighterOne")[0].firstChild.id;
    var defenderDiv = $("#fighterTwo")[0].firstChild.id;

    console.log(attackerDiv);

    if (attackerDiv == 0) {
      attacker = lukeObj;
      console.log("attacker luke")
    } else if (attackerDiv == 1) {
      attacker = kenobiObj
      console.log("attacker kenobi")

    } else if (attackerDiv == 2) {
      attacker = kylorenObj
      console.log("attacker kyloren")

    } else if (attackerDiv == 3) {
      attacker = darthmaulObj
      console.log("attacker darthmaul")

    } else if (attackerDiv == 4) {
      attacker = sidiousObj
      console.log("attacker sidios")

    }
    if (defenderDiv == 0) {
      defender = lukeObj;
      console.log("defender luke")

    } else if (defenderDiv == 1) {
      defender = kenobiObj
      console.log("defender kenobi")

    } else if (defenderDiv == 2) {
      defender = kylorenObj
      console.log("defender kyloren")

    } else if (defenderDiv == 3) {
      defender = darthmaulObj
      console.log("defender darthmaul")

    } else if (defenderDiv == 4) {
      defender = sidiousObj
      console.log("defender sidious")

    }

    function fightAttackerDefender() {


      attacker.health = ((attacker.health) -= (defender.attack));
      defender.heatlh = ((defender.health) -= (attacker.attack));

      // console.log(attacker.health);
      console.log(defender.health)
      console.log(attacker.attack)

      if (attacker.health <= 0) {
        console.log("attacker has lost");
        clearInterval(intervalId);
      } else if (defender.health <= 0) {
        console.log("defender has lost");
        clearInterval(intervalId);

      }
    }
    // TODO: set interval on fightAttackDefender function
    intervalId = setInterval(fightAttackerDefender, 1000);
  });

});;

// TODO:
// LOGIC -----
// -use values to get full object and or somehow trace the image element back to its object then compare life and attack of two fighters
// -display obj.health obj.attack and obj.img inside a containing div
// - CHANGE HEALTH LIVE TIME ON SCREEN AN ALERT ON WIN AND LOSEGIT 