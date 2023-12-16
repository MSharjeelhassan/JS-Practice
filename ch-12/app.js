// code an if statement that tests whether the value represented by 
// a variable is greater than or equal to the value represented by 
// another variable. If so, display an alert. If not, display a different 
// alert.

var num = 8;
var tum = 2;

if(num >= tum){
    alert("num is greater equal");
} else{
    alert("Masla hy");
}



// 2. Write a program using if else and else if statement which take 
// marks from user. And the program will calculate your percentage 
// and give you grade A/C to Your percentage. (MARKSHEET)
var math = +prompt("Enter Maths mark", "Out of 100");
var eng = +prompt("Enter English marks");
var urd = +prompt("Enter Urdu marks");

var total = math + eng + urd;
var percent = (total/300)*100;



console.log(percent, "%");

// if(percent>=80) {alert("Mubark A grade hy")} else if (percent<=35) {alert("Sorry Fail hogae");}  else if (percent>=36 && percent<=79){alert("B grade bana hy");} else {alert("Grade B aya hy");}



// 3. This is the if statement that begins the code.
// if (a === 10) {
//  alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is
// ____
// Note: Try this by yourself

var a =5;
if(a===10) {alert("a is 10");}else{alert("The correct value of a is" + " " + a);}


// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.

var city = prompt("Enter City Name, please follow the format", "Karachi");
if(city==="Karachi"){alert("Yes its Karchi mere jan");} else if(city==="Lahore"){alert("Lahore Lahore hy");} else{alert("Dosra koi city hy yeh tou");}