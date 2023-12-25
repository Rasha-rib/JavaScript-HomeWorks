/* #################################### 10 scenarios with function() #################################### */


/* **************************** Factoriel **************************** */
/* ******************************************************************* */

// var factoriel = 1;
// function fac(number){
//     for (i = 2 ; i<=number ; i++){
//         factoriel = factoriel*i;
//     }
//     return factoriel;
// }
// number = prompt("what number do you want to calculate it's factoriel? ");
// document.getElementById("demo").innerHTML=`The factoriel of ${number} is ${fac(number)}`;


/* **************************** Prime number checker **************************** */
/* ******************************************************************************** */

// function primeChecker(number) {
//   for (var i = 2; i < number; i += 2) {
//     if (number % i === 0)
//       document.getElementById("demo").innerHTML = `Number ${number} is NOT prime.`;
//   }
//   document.getElementById("demo").innerHTML = `Number ${number} is prime.`;
// }
// number = prompt("Which number do you want to check?");
// primeChecker(number);

/* **************************** Circle Area Calculator **************************** */
/* ******************************************************************************** */

// function circleAreaCalculate(r){
//     return Math.PI * r**2;
// }
// r = prompt("Please enter the radius of the circel: ");
// var circleArea = document.getElementById("demo").innerHTML=`The area of the circle with radius of ${r} is equal to ${circleAreaCalculate(r)}.`;

/* **************************** Cylinder Volume Calculator **************************** */
/* ************************************************************************************ */

// function cylinderVolumeCalculate(r,h){
//     return Math.PI * r**2 * h;
// }
// var rh = prompt("Please enter the radius and height of the cylinder: (for example 10,5) ");
// rh = rh.split(",");
// rh[0] = Number(rh[0]);
// rh[1] = Number(rh[1]);
// var cylinderVolum = document.getElementById("demo").innerHTML=`The volume of cylinder with radius of ${rh[0]} and height of ${rh[1]} is equal to ${cylinderVolumeCalculate(rh[0],rh[1])}`;
