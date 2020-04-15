var dropdownBase = $("#dropdownBase");
var dropdownLinks = $(".dropdownLinks");
let dropdownText1 = $("");

audioPlayer();

var btnValue = dropdownBase.attr("value");

var songNames = ["word", "guoying", "sound", "trona", "day"];

nextSong();


dropdownBase.on("click", function () {
  if (btnValue === "unclicked") {
    console.log("hi!");
    dropdownLinks.show();
    dropdownBase.html("to ▾");
    btnValue = "clicked";
    console.log(btnValue);
  } else if (btnValue === "clicked") {
    dropdownLinks.hide();
    dropdownBase.html("to ▸");
    btnValue = "unclicked";
  }
});

var currentSong = 0;

function audioPlayer() {
  $("#audioPlayer")[0].src = $("#songs li a")[0];
  $("#audioPlayer")[0].play();
  $("#word-deg0").click(function (e) {
    $("#audioPlayer")[0].src = $("#songs li a")[0];
    $("#audioPlayer")[0].play();
    $(".circle").css({"border": "3px solid white"});
    $(".titles").css({"color": "white"})
    this.style.border = '3px solid rgb(250, 49, 234)'
    $(this).children().css({"color" : "rgb(250, 49, 234)"});
    currentSong = $(this).index();
  });
  $("#guoying-deg72").click(function (e) {
    $("#audioPlayer")[0].src = $("#songs li a")[1];
    $("#audioPlayer")[0].play();
    $(".circle").css({"border": "3px solid white"});
    $(".titles").css({"color": "white"})
    this.style.border = '3px solid rgb(250, 49, 234)'
    $(this).children().css({"color" : "rgb(250, 49, 234)"});
    currentSong = $(this).index();
  });
  $("#sound-deg144").click(function (e) {
    $("#audioPlayer")[0].src = $("#songs li a")[2];
    $("#audioPlayer")[0].play();
    $(".circle").css({"border": "3px solid white"});
    $(".titles").css({"color": "white"})
    this.style.border = '3px solid rgb(250, 49, 234)'
    $(this).children().css({"color" : "rgb(250, 49, 234)"});
    currentSong = $(this).index();
  });
  $("#trona-deg216").click(function (e) {
    $("#audioPlayer")[0].src = $("#songs li a")[3];
    $("#audioPlayer")[0].play();
    $(".circle").css({"border": "3px solid white"});
    $(".titles").css({"color": "white"})
    this.style.border = '3px solid rgb(250, 49, 234)'
    $(this).children().css({"color" : "rgb(250, 49, 234)"});
    currentSong = $(this).index();
  });
  $("#withDay-deg288").click(function (e) {
    $("#audioPlayer")[0].src = $("#songs li a")[4];
    $("#audioPlayer")[0].play();
    $(".circle").css({"border": "3px solid white"});
    $(".titles").css({"color": "white"})
    this.style.border = '3px solid rgb(250, 49, 234)'
    $(this).children().css({"color" : "rgb(250, 49, 234)"});
    currentSong = $(this).index();
  });
}

// illuminate();

function nextSong() {
  $("#audioPlayer")[0].addEventListener("ended", function() {
    currentSong++;
    $("#audioPlayer")[0].src = $("#songs li a")[currentSong].href;
    console.log($(".circle-container").children()[currentSong-1]);
    $("#audioPlayer")[0].play();
  }
  )}

  // function illuminate() {
  //     if($("#audioPlayer")[0].src = $("#songs li a")[1].href) {
  //       $(".guoying").css({"border" : "3px solid rgb(250, 49, 234)"})
  //     }
  // }



