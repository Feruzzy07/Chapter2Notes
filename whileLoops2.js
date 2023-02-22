const readLine = require('readline-sync');

//Question 11
// let quit = readLine.question("Do you want to quit?(Y/N): ");
// while (quit != "Y" && quit != "N"){
//     console.log("Invalid answer.");
//     quit = readLine.question("Try again. Do you want to quit?(Y/N): ");
// }
// console.log("Ok!");

//Question 12
// let quit = readLine.question("Do you want to quit?(Y/N): ");
// while (quit != "Y" && quit != "N" && quit !="y" && quit !="n"){
//     console.log("Invalid answer.");
//     quit = readLine.question("Try again. Do you want to quit?(Y/N): ");
// }
// console.log("Ok!");

//Question 13
// let ABC = readLine.question("Choose A, B, or C: ");
// while (ABC !="A" && ABC !="B" && ABC !="C"){
//     console.log("Invalid answer.");
//     ABC = readLine.question("Try again. Choose A, B, or C: ");
// }
// console.log("Thank you, just stole your credit card information lol!");

//Question 14
// let number = readLine.question("Choose from 1, 2, or 3: ");
// while (number !="1" && number !="2" && number !="3"){
//     console.log("Invalid answer.");
//     number = readLine.question("Try again. Choose from 1, 2, or 3: ");
// }
// console.log("Thank you, just stole your credit card information lol!");

//Question 15
// let number = readLine.question("How is your day going?\nFrom 0-10: ");
// while (number !="0" && number !="1" && number !="2" && number !="3" && number !="4" && number !="5" && number !="6" && number !="7" && number !="8" && number !="9" && number !="10"){
//     console.log("Invalid answer");
//     number = readLine.question("Try again, choose a number between 0-10: ");
// }
// console.log("Im glad/Sorry for you!");

//Question 16
// let number = readLine.question("Enter a postive number: ");
// while (number <= 0){
//     console.log("Invalid answer.");
//     number = readLine.question("Try again. Enter a positive number.");
// }
// console.log("Thank you, just stole your credit card information lol!");

//Question 17
// let number = readLine.question("Enter a negative number: ");
// while (number >= 0){
//     console.log("Invalid answer.");
//     number = readLine.question("Try again. Enter a negative number.");
// }
// console.log("Thank you, just stole your credit card information lol!");


//Question 18
// let number = readLine.question("Enter an even number: ");
// while (number % 2 != 0){
//     console.log("Invalid answer.");
//     number = readLine.question("Try again. Enter an even number: ");
// }
// console.log("Thank you, just stole your credit card information lol!");

//Question 19
// let number = readLine.question("Enter a number between 0-10 & 20-30: ");
// while (number > 10 && number < 20 || number >=30){
//     console.log("Invalid answer.");
//     number = readLine.question("Try again. choose a number between 0-10 & 20-30: ");
// }
// while (number < 0){
//     console.log("Invalid answer.")
//     number = readLine.question("Try again. Choose a number between 0-10 & 20-30: ");
// }
// console.log("Thank you, just stole your credit card information lol!");

//Question 20
// let month = readLine.question("Select a month(1-12) to know how many days are in it.: ");
// while (month < 0 || month > 12){
//     console.log("Invalid answer.");
//     month = readLine.question("Try again. Select a month(1-12) to know how many days are in it: ");
// }
// if (month == 4 || month == 6 || month == 9 || month == 11){
//     console.log("That month has 30 days in it!");
// } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 12){
//     console.log("That month has 31 days in it!");
// }else if(month == 2){
//     console.log("That month has 28 days in it!");
// }
// console.log("You're Welcome!");