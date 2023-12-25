/* 6 various scenarios from IF/ELSE/ELSE_IF and 4 scenarios from SWITCH_CASE are written in this file */

/* ################################## IF/ELSE ################################ */

/* ***************************Bmi calculator*************************** */
/* ******************************************************************** */

// var x = prompt("please enter your height ( in meter ): ");
// var y = prompt("please enter your weight ( in kilogram ) :");
// var bmi = y / x ** 2;
// if (bmi <= 18.5) {
//     document.getElementById("example").innerHTML="Your BMI is: " + bmi;
//     document.getElementById("demo").innerHTML= "underweight";
//     document.getElementById("demo").style.color= "rgb(42, 217, 97)"
// } else if (bmi > 18.5 && bmi <= 24.9) {
//     document.getElementById("example").innerHTML="Your BMI is: " + bmi;
//     document.getElementById("demo").innerHTML= "normal weight";
//     document.getElementById("demo").style.color= "green";
// } else if (bmi > 24.9 && bmi <= 29.9) {
//     document.getElementById("example").innerHTML="Your BMI is: " + bmi;
//     document.getElementById("demo").innerHTML= "over weight";
//     document.getElementById("demo").style.color= "orange";
// } else if (bmi > 29.9 && bmi <= 39.9) {
//     document.getElementById("example").innerHTML="Your BMI is: " + bmi;
//     document.getElementById("demo").innerHTML= "obesity";
//     document.getElementById("demo").style.color= "red";
// } else {
//     document.getElementById("example").innerHTML="Your BMI is: " + bmi;
//     document.getElementById("demo").innerHTML= "extremely obesity";
//     document.getElementById("demo").style.color= "violet"
// }

/* ***************************Vehicle fee calculator*************************** */
/* **************************************************************************** */

// var x2 = prompt("Plese enter the vehicle speed ( in km/h ):");
// if (x2 >= 100 && x2 < 110) {
//     document.getElementById("demo").innerHTML="The fee is 30$";
// } else if (x2 >= 110 && x2 < 120) {
//     document.getElementById("demo").innerHTML="The fee is 50$";
// } else if (x2 >= 120 && x2 < 130) {
//     document.getElementById("demo").innerHTML="The fee is 70$";
// } else if (x2 >= 130 && x2 < 140) {
//     document.getElementById("demo").innerHTML="The fee is 90$";
// } else {
//     document.getElementById("demo").innerHTML="The fee is 100$";
// }

/* ***************************Air Quality Index(AQI)*************************** */
/* **************************************************************************** */

// var x3= prompt("What was the last AQI? ( AQI is defined by a number between 0-500 )")
// if(x3<0 || x3>=500){
//     document.getElementById("demo").innerHTML= "The given number is not valid";
//     document.getElementById("demo").style.color= "red";
// } else if(x3>=0 && x3<50){
//     document.getElementById("demo").innerHTML="good";
//     document.getElementById("demo").style.color= "green";
// }else if(x3>=50 && x3<100){
//     document.getElementById("demo").innerHTML="moderate";
//     document.getElementById("demo").style.color= "yellow";
// }else if(x3>=100 && x3<150){
//     document.getElementById("demo").innerHTML="Unhealthy for sensetive group";
//     document.getElementById("demo").style.color= "orange";
// }else if(x3>=150 && x3<200){
//     document.getElementById("demo").innerHTML="Unhealthy for everyone";
//     document.getElementById("demo").style.color= "red";
// }else if(x3>=200 && x3<300){
//     document.getElementById("demo").innerHTML="very Unhealthy";
//     document.getElementById("demo").style.color= "#54odod";
// }else if(x3>=300 && x3<500){
//     document.getElementById("demo").innerHTML="hazardous";
//     document.getElementById("demo").style.color= "#390505";
// }

/* ***************************Posting price calculator*************************** */
/* ****************************************************************************** */

// var postWeight = prompt("Please enter the weight of the postal package ( in kilogram ):");
// if(postWeight<=0){
//     document.getElementById("demo").innerHTML="The given weight is not valid";
// }else if(postWeight>0 && postWeight<=1){
//     document.getElementById("demo").innerHTML="The price is 10$";
// }else if(postWeight>1 && postWeight<=5){
//     document.getElementById("demo").innerHTML="The price is 20$";
// }else if(postWeight>5 && postWeight<=10){
//     document.getElementById("demo").innerHTML="The price is 30$";
// }else if(postWeight>10 && postWeight<=100){
//     document.getElementById("demo").innerHTML="The price is 50$";
// }else if(postWeight>100){
//     document.getElementById("demo").innerHTML="The price is 100$";
// }else{
//     document.getElementById("demo").innerHTML="The postal package is too heavy!"
// }

/* ***************************Tax calculator*************************** */
/* ******************************************************************** */

//  var income = prompt("How much do you make in a year? ( in dollar )");
//  var tax = null;
//  var finalIncome = null;
//  if(income<0){
//     document.getElementById("example").innerHTML="The given number is not valid";
//  }else if(income>=1 && income<3000){
//     document.getElementById("example").innerHTML="Your tax will be 3%";
//     tax = 0.03;
//     finalIncome = income*(1-tax);
//     document.getElementById("demo").innerHTML="Your income will be "+ finalIncome +" at the end of the year."
//  }else if(income>=3000 && income<5000){
//     document.getElementById("example").innerHTML="Your tax will be 5%";
//     tax = 0.05;
//     finalIncome = income*(1-tax);
//     document.getElementById("demo").innerHTML="Your income will be "+ finalIncome +" at the end of the year."
//  }else if(income>=5000 && income<8000){
//     document.getElementById("example").innerHTML="Your tax will be 8%";
//     tax = 0.08;
//     finalIncome = income*(1-tax);
//     document.getElementById("demo").innerHTML="Your income will be "+ finalIncome +" at the end of the year."
//  }else{
//     document.getElementById("example").innerHTML="Your tax will be 10%";
//     tax = 0.1;
//     finalIncome = income*(1-tax);
//     document.getElementById("demo").innerHTML="Your income will be "+ finalIncome +" at the end of the year."
//  }

/* ***************************Grade calculator*************************** */
/* ********************************************************************** */

// var average = prompt("What was your grade? ( Give a number between 0-100 )");
// if(average<0 || average>100){
//     document.getElementById("demo").innerHTML="The given number is not valid";
// }else if(average<=100 && average>=98){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is A+";
//     document.getElementById("demo").style.color="#10d909";
// }else if(average>=93 && average<98){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is A";
//     document.getElementById("demo").style.color="#10d909";
// }else if(average>=90 && average<93){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is A-";
//     document.getElementById("demo").style.color="#10d909";
// }else if(average>=88 && average<90){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is B+";
//     document.getElementById("demo").style.color="#1371d5";
// }else if(average>=83 && average<88){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is B";
//     document.getElementById("demo").style.color="#1371d5";
// }else if(average>=80 && average<83){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is B-";
//     document.getElementById("demo").style.color="#1371d5";
// }else if(average>=78 && average<80){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is C+";
//     document.getElementById("demo").style.color="#e18d09";
// }else if(average>=73 && average<78){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is C";
//     document.getElementById("demo").style.color="#e18d09";
// }else if(average>=70 && average<73){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is C-";
//     document.getElementById("demo").style.color="#e18d09";
// }else if(average>=68 && average<70){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is D+";
//     document.getElementById("demo").style.color="#e18d09";
// }else if(average>=63 && average<68){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is D";
// }else if(average>=60 && average<63){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is D-";
// }else if(average<=59){
//     document.getElementById("demo").innerHTML="The equivalent for this grade is F";
//     document.getElementById("demo").style.color="#d80e0e";
// }

/* ################################## SWITCH CASE ################################ */

/* ***************************Rock/Paper/Scissors*************************** */
/* ************************************************************************* */

var userChoiceNumber = Number(prompt("please choose a number between 1:rock / 2:paper / 3:scissors."));
var userChoiceText = null;
var computerChoiceNumber = Math.floor(Math.random()*3)+1;
var computerChoiceText = null;
var winner = null;

switch(computerChoiceNumber){
    case 1:
        computerChoiceText = "rock";
    break;
    case 2:
        computerChoiceText ="paper";
    break;
    case 3:
        computerChoiceText ="scissors";
    break;
}
switch(userChoiceNumber){
    case 1:
        userChoiceText = "rock";
    break;
    case 2:
        userChoiceText ="paper";
    break;
    case 3:
        userChoiceText ="scissors";
    break;
}
switch(userChoiceNumber){
    case 1:
        switch(computerChoiceText){
            case "rock":
                document.getElementById("test").innerHTML="draw"
            break;
            case "paper":
                document.getElementById("test").innerHTML="computer wins";
                document.getElementById("test").style.color="red";
            break;
            case "scissors":
                document.getElementById("test").innerHTML="user wins";
                document.getElementById("test").style.color="green";
            break;
        }
        break;
    case 2:
        switch(computerChoiceText){
            case "rock":
                document.getElementById("test").innerHTML="user wins";
                document.getElementById("test").style.color="green";
            break;
            case "paper":
                document.getElementById("test").innerHTML="draw";
            break;
            case "scissors":
                document.getElementById("test").innerHTML="computer wins";
                document.getElementById("test").style.color="red";
            break;
        }
        break;
    case 3:
        switch(computerChoiceText){
            case "rock":
                document.getElementById("test").innerHTML="computer wins";
                document.getElementById("test").style.color="red";
            break;
            case "paper":
                document.getElementById("test").innerHTML="user wins";
                document.getElementById("test").style.color="green";
            break;
            case "scissors":
                document.getElementById("test").innerHTML="draw";
            break;
        }
        break;
}
document.getElementById("example").innerHTML="user choice was " + userChoiceText
document.getElementById("demo").innerHTML="computer choice was " + computerChoiceText

/* ***************************Days*************************** */
/* ********************************************************** */

// var weekDays = Number(prompt("Please enter the number of a day between 1-7: "));
// switch(weekDays){
//     case 1:
//         document.getElementById("demo").innerHTML="Day number " + weekDays + " is Monday";
//     break;
//     case 2:
//         document.getElementById("demo").innerHTML="Day number " + weekDays + " is Tuesday";
//     break;
//     case 3:
//         document.getElementById("demo").innerHTML="Day number " + weekDays + " is Wednesday";
//     break;
//     case 4:
//         document.getElementById("demo").innerHTML="Day number " + weekDays + " is Thursday";
//     break;
//     case 5:
//         document.getElementById("demo").innerHTML="Day number " + weekDays + " is Friday";
//     break;
//     case 6:
//         document.getElementById("demo").innerHTML="Day number " + weekDays + " is Saturday";
//     break;
//     case 7:
//         document.getElementById("demo").innerHTML="Day number " + weekDays + " is Sunday";
//     break;
//     default:
//         document.getElementById("demo").innerHTML="The given number is not valid";
// }

/* ***************************Months*************************** */
/* ************************************************************ */

// var month = Number(prompt("please enter the number of month in order from 1-12: "));
// switch (month){
//     case 1:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is January";
//     break;
//     case 2:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is February";
//     break;
//     case 3:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is March";
//     break;
//     case 4:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is April";
//     break;
//     case 5:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is May";
//     break;
//     case 6:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is Jun";
//     break;
//     case 7:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is July";
//     break;
//     case 8:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is August";
//     break;
//     case 9:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is September";
//     break;
//     case 10:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is October";
//     break;
//     case 11:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is November";
//     break;
//     case 12:
//         document.getElementById("demo").innerHTML="Month with the number of " + month + " is December";
//     break;
//     default:
//         document.getElementById("demo").innerHTML="The given number is not valid";
// }

/* ***************************Options*************************** */
/* ************************************************************ */

// var option = Number(prompt("please choose an option between 1-5: "));
// switch (option) {
//   case 1:
//     document.getElementById("demo").innerHTML = "You choose option 1";
//     break;
//   case 2:
//     document.getElementById("demo").innerHTML = "You choose option 2";
//     break;
//   case 3:
//     document.getElementById("demo").innerHTML = "You choose option 3";
//     break;
//   case 4:
//     document.getElementById("demo").innerHTML = "You choose option 4";
//     break;
//   case 5:
//     document.getElementById("demo").innerHTML = "You choose option 5";
//     break;
//   default:
//     document.getElementById("demo").innerHTML = "The given number is not valid";
// }
