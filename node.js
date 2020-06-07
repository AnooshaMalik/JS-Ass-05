//                      Chapter -01 ALert Assignment 
//  Question #01
// console.log('connected')
// alert('Welcome To Our Websiste');






//  Question #02


// var setPassword = "Anoosha123";
// var enteredPassword = prompt('Enter a Password');
// if (enteredPassword !== setPassword) {
//     alert('Error! Enter a Valid Password');
// }


//  Question #03
// alert('Welcome to Js Land \nHappy Coding');


// -----------------------------------------------------------------------------------------------------------

// chapter #02 Assignment
var username; //Q#01
var myName = "Anoosha Malik"; //Q#02
var message = "Hello World"; //Q#03
// alert(message);
// Q#04
var name = "Jhone Doe";
var age = "15 Years Old";
var certify = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(certify);
//Q#05
//Q#06
var email = "anoosha@gmail.com";
// alert("My Email Address is " + " " + email);
// Q#07
var book = "“A smarter way to learn JavaScript";
// alert(book);
// Q#08
// document.write('Yah ! I can Write HTML content through Javascript');
var ajeeb = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(ajeeb);
// -----------------------------------------------------------------------------------------------------------



// chapter #03 Assignment  ------------------------------ 2 missing
var age = "20"; //Q#01
// alert(age);
//Q#03
var birthYear = 1999;
// document.write('My Birth Year is ' + " " + birthYear + "<br>");
// document.write(" \nData Type of my declared Variable is number");
//Q#04
var Visitor_Name = " John Doe";
var Product_Title = " T-shirt(s)";
var Quantity = "5";
document.write(Visitor_Name.bold() + " " + "Ordered" + " " + Quantity.bold() + " " + Product_Title.bold() + " " + 'on XYZ Clothing store');
// -----------------------------------------------------------------------------------------------------------




// chapter #04 Assignment  ------------------------------
var a, b, c; //Qno1
//illegal characters

// var 12 car;
// var -abc;
// var# abc;
// var
// break;
// var: abc;
//legal characters
// var abc;
// var abc12;
// var carName;
// var carname;
// var _car;


// document.write(' <h1>Rules for naming JS variables</h1>');
// document.write(' Variable names can only contain numbers , $ , and _ , For example $my_1stVariable' + "<br>");
// document.write('Variables must begin with a letter , $ , _ . For example $name, _name or name');
// document.write("<br>" + 'Variable names are case sensitive' + "<br>");
// document.write('Variable names should not be JS keyword');
// -----------------------------------------------------------------------------------------------------------

// chapter # 05
// var num1 = parseInt(prompt('Enter number 1 ')); //Q#01
// var num2 = parseInt(prompt('Enter number 2 ')); //Q#02
// var add = (num1 + num2);
// var sub = (num1 - num2);
// var mul = (num1 * num2);
// var div = (num1 / num2);
// var mod = (num1 % num2);
// document.write("<br>" + "sum of " + " " + num1 + " " + "and" + " " + num2 + " " + "is " + " " + add);
// document.write("<br>" + "subtraction of " + " " + num1 + " " + "and" + " " + num2 + " " + "is " + " " + sub);
// document.write("<br>" + "multiplication of " + " " + num1 + " " + "and" + " " + num2 + " " + "is " + " " + mul);
// document.write("<br>" + "Division of " + " " + num1 + " " + "and" + " " + num2 + " " + "is " + " " + div);
// document.write("<br>" + "Modulus of " + " " + num1 + " " + "and" + " " + num2 + " " + "is " + " " + mod);



// question # 03
// var a;
// document.write("<br>" + "Value after variable declaration is:" + " " + a);
// var a = 5;
// document.write("<br>" + " Initial Value of variable a is:" + " " + a);
// var a = 5 + 1;
// document.write("<br>" + " Value after increment is:" + " " + a);
// var a = 5 + 1 + 7;
// document.write("<br>" + "Value after addition is:" + " " + a);
// var b = a - 1;
// document.write("<br>" + "Value after decrement is:" + " " + b);
// document.write("<br>" + "The remainder is :" + " " + (b % 3));


// question #04
// var price = 600;
// document.write("<br>" + 'Total cost to buy 5 tickets to a movie is ' + " " + (price * 5) + 'PKR');
// question #05

document.write('<h2>Table of 4 </h2>')
for (var i = 1; i <= 10; i++) {
    document.write("<br>" + 4 + " x " + i + " = " + 4 * i);
}