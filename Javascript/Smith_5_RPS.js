
function over() {
    'use strict';
    var change = document.getElementById("container");
    change.style.backgroundColor = '#f3f3f3';
}

function off() {
    'use strict';
    var change = document.getElementById("container");
    change.style.backgroundColor = '#6d8c8e';
}

function myFunction() {
document.getElementById("sample").innerHTML = "Change the text";
}

function maChoice(a) {
    if (a == 0) {
    document.getElementById("player").innerHTML = "You choose rock!";
  } else if (a == 1) {
    document.getElementById("player").innerHTML = "You choose paper!";
  } else if (a == 2) {
    document.getElementById("player").innerHTML = "You choose scissors!";


  }
}

// JavaScript Document
var thing = true;
function clickOff() {
    
        if (thing === true){
    'use strict';
    var change1 = document.getElementById("Title"),
        change2 = document.getElementById("Bkgrnd"),
        change3 = document.getElementById("Menu");
            
    change1.style.backgroundColor = '#f00';
        change1.innerHTML = "RPS at NIGHT";
    change1.style.color = '#333';
    change2.style.backgroundColor = '#000';
    change3.style.backgroundColor = '#00ff1d';
        thing = false;
        } else {
            
    var change1 = document.getElementById("Title"),
        change2 = document.getElementById("Bkgrnd"),
        change3 = document.getElementById("Menu");
            
    change1.style.backgroundColor = '#535353';
    change1.style.color = '#fff';
        change1.innerHTML = "RPS";
    change2.style.backgroundColor = '#efefef';
    change3.style.backgroundColor = '#f5f';
        thing = true;
        }
}
function over() {
    'use strict';
    var change = document.getElementById("container");
    change.style.backgroundColor = '#f3f3f3';
}

function off() {
    'use strict';
    var change = document.getElementById("container");
    change.style.backgroundColor = '#6d8c8e';
}

var win = 0;
    var lose = 0;
    var tied = 0;

function maChoice(a) {
    var computer = Math.floor((Math.random() * 3) + 0);
  //  var computer = ("Rock", "Paper", "Scissors");
   
    document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
    
    document.getElementById("computer").innerHTML = "The Computer Chose " + computer;
        
    if ( computer == 0 ) {
        document.getElementById("computer").innerHTML = "Computer Chooses Rock"
    }
    else if ( computer == 1 ) {
        document.getElementById("computer").innerHTML = "Computer Chooses Paper"
    }
    else if ( computer == 2 ) {
        document.getElementById("computer").innerHTML = "Computer Chooses Scissors"
    }
    if (a == 0) {
        document.getElementById("player").innerHTML = "Rock";
        
        if ( computer == 0 ){
            document.getElementById("result").innerHTML = "TIE"
            tied += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
         else if ( computer == 1 ){
            document.getElementById("result").innerHTML = "Lose";
             lose += 1;
             document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
        else if ( computer == 2 ){
            
            document.getElementById("result").innerHTML = "Win";
            win += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
    }   if (a == 1) {
        document.getElementById("player").innerHTML = "Paper";
                if ( computer == 0 ){
            document.getElementById("result").innerHTML = "Win";
                    win+= 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
         else if ( computer == 1 ){
            document.getElementById("result").innerHTML = "TIE";
             tied += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
        else if ( computer == 2 ){
            document.getElementById("result").innerHTML = "Lose";
            lose += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
    }   if (a == 2) {
        document.getElementById("player").innerHTML = "Scissors";
                if ( computer == 0 ){
            document.getElementById("result").innerHTML = "Lose";
                    lose += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
         else if ( computer == 1 ){
            document.getElementById("result").innerHTML = "Win";
             win+= 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
        else if ( computer == 2 ){
            document.getElementById("result").innerHTML = "TIE";
            tied += 1;
            document.getElementById("LWT").innerHTML = "Won: " + win + " lose:" + lose + " tied: " + tied;
        }
    }
}
