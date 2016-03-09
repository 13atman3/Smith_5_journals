var magic = Math.floor((Math.random() * 30) + 1);
var guess = prompt("What's your guess? Between 1 and 30");
while (magic != guess){
 if  (guess < magic){
	guess = prompt("Too low, Bro. Try again");
	document.write("Too low! ");
  } else if (guess > magic){
	guess = prompt("Too high, Guy. Try again");
	document.write("Too high!");
  } else {
        document.write("This should not happen!");
  }
}
document.writeln("____You're Winner!____");

