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

  var lukeObj = new StarWars("Luke SkyWalker", 225, 50, lukeSkywalker, 0);
  var kenobiObj = new StarWars("Kenobi", 250, 100, kenobi, 1);
  var kylorenObj = new StarWars("Kylo Ren", 150, 25, kyloren, 2);
  var darthmaulObj = new StarWars("Darth Maul", 150, 50, darthmaul, 3);
  var sidiousObj = new StarWars("Sidious", 100, 100, sidious, 4);

  function StarWars(name, health, attack, imgObj,key) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.imgObj = imgObj;
    this.key = key;
  }
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
    console.log(event.currentTarget)
    event.currentTarget.classList.add("selected");
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

      $(".selected")[0].firstChild.innerHTML = attacker.health;
      $(".selected")[1].firstChild.innerHTML = defender.health

      if (attacker.health <= 0) {
        alert("attacker has lost");
        clearInterval(intervalId);
      } else if (defender.health <= 0) {
        alert("defender has lost");
        clearInterval(intervalId);
      }
    }
    intervalId = setInterval(fightAttackerDefender, 1000);
  });
});
