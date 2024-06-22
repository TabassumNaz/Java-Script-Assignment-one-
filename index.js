// Chapter one// 
// Alert //
// 1. Write a script to greet your website visitor using JS alert box. // 

alert("JavaScript Alert"); 

// 2. Write a script to display following message on your web page // 

alert("Error! Please enter a valid password.");

// 3. Write a script to display following message on your webpage: (Hint : Use line break)// 

alert("Welcome to JS Land.... \n Happy Coding!");

// 4. Write a script to display following messages in sequence:// 

alert("Welcome to JS Land.... \n Happy Coding! \n Prevent this page from creating additional dialogs");

// 5. Generate the following message through browser’s developer console: // 

alert("Hello... I can run JS through my web browser's console")

// Chapter two // 

// VARIABLES FOR STRINGS //

// 1. Declare a variable called username.// 

var username="XYZ";
// 2. Declare a variable called myName & assign to it a string that represents your Full Name.// 
var myName="Tabassum Naz";  
//3. Write script to:
// a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message
// c) Display the message in alert box.// 

var JSvariable="message"; 
message="Hello World"; 
alert(message); 

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.// 

var studentName = "Tabassum Naz";
alert("Name: " + studentName);
var studentAge = 30;
alert("Age: " + studentAge);
var studentCourse = "Certified Mobile App Developement";
alert("Course: " + studentCourse);

//5. Write a script to display the following alert using one JS variable:
// PIZZA
// PIZZ
// PIZ
// PI
// P

alert("PIZZA \nPIZZ \nPIZ \nPI \nP");

//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)// 

var email="ifaaf2023@gmail.com";
alert("My email address is " + email); 

//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:// 

var book="A smarter way to learn JavaScript"; 
alert("I am trying to learn from the Book " + book); 

//8. Write a script to display this in browser through JS //

document.write("Yah! I can write HTML content using javaScript <br>"); 

// 9. Store following string in a variable and show in alert and browser through JS// 

var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design); 

// chapter 3// 

// VARIABLES FOR NUMBERS //

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.// 

var age=30;
alert("I am " + age + " Years old "); 

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.// 

if(localStorage.getItem('visitCount') === null) {
    // If not, set the visit count to 1
    localStorage.setItem('visitCount', 1);
} else {
    // If yes, increment the visit count
    var visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', visitCount);
}
alert("You have visited this site " + localStorage.getItem('visitCount') + " times.");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:// 
var birthYear=1994;
document.write("Your birth Year is " + birthYear);

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.// 

var visitorName = "\nTabassum Naz\n";
    var productTitle = "Bags";
    var quantity = 10;

    var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store <br>";
    document.write(message);

    // Chapter 4// 

    //VARIABLE NAMES: LEGAL & ILLEGAL// 

    // 1. Declare 3 variables in one statement.// 
    var x = 1, y = 2, z = 3;

    // 2. Declare 5 legal & 5 illegal variable names. // 
// 5 legal variables// 
var myVariable;
var my_Variable;
var $myVariable;
var _myVariable;
var myVariable123;

// 5 Illegal Variables // 

// var 123myVariable; // starts with a digit
// var my Variable; // contains a space
// var my-Variable; // contains a hyphen
// var var; // reserved keyword
// var myVariable!; // contains special character other than underscore or dollar sign

// 3. Display the variable values in the browser console
console.log(x, y, z);
console.log(myVariable, my_Variable, $myVariable, _myVariable, myVariable123);


// Chapter 5 // 
// MATH EXPRESSIONS// 
// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.// 
var num1 = 10;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum: " + sum + "<br>");

// Subtraction
var difference = num1 - num2;
document.write("Difference: " + difference + "<br>");

// Multiplication
var product = num1 * num2;
document.write("Product: " + product + "<br>");

// Division
var quotient = num1 / num2;
document.write("Quotient: " + quotient + "<br>");

// Modulus
var remainder = num1 % num2;
document.write("Remainder: " + remainder + "<br>");

// Task 3
var a;
document.write("Value after variable declaration is: " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
a++;
document.write("Value after increment is: " + a + "<br>");
a += 7;
document.write("Value after addition is: " + a + "<br>");
a--;
document.write("Value after decrement is: " + a + "<br>");
 // Task 7
var priceItem1 = 100;
var priceItem2 = 200;
var quantityItem1 = 2;
var quantityItem2 = 3;
var shippingCharges = 50;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Receipt</h2>");
document.write("Price of Item 1: " + priceItem1 + " PKR<br>");
document.write("Quantity of Item 1: " + quantityItem1 + "<br>");
document.write("Price of Item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of Item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
document.write("<b>Total Cost: " + totalCost + " PKR</b><br><br>");

// Task 8
var totalMarks = 1400;
var marksObtained = 900;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h2>Percentage Calculator</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("<b>Percentage: " + percentage + "%</b><br><br>");

// Task 9
var usDollars = 10;
var saudiRiyals = 25;
var exchangeRateUSD = 104.80;
var exchangeRateSAR = 28;
var totalPKR = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);
document.write("<h2>Currency Converter</h2>");
document.write("Total US Dollars: " + usDollars + "<br>");
document.write("Total Saudi Riyals: " + saudiRiyals + "<br>");
document.write("<b>Total PKR: " + totalPKR + "</b><br><br>");

// Task 10
var result = (((5 + 10) * 10) / 2);
document.write("<h2>Arithmetic Sequence</h2>");
document.write("<b>Result: " + result + "</b><br><br>");

// Task 11
var currentYear = 2024;
var birthYear = 1994;
var possibleAge1 = currentYear - birthYear;
var possibleAge2 = possibleAge1 - 1;
document.write("<h2>Age Calculator</h2>");
document.write("They are either " + possibleAge1 + " or " + possibleAge2 + " years old.<br><br>");

// Task 12
var radius = 7;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
document.write("<h2>Geometrizer</h2>");
document.write("The circumference is " + circumference.toFixed(2) + " units.<br>");
document.write("The area is " + area.toFixed(2) + " square units.<br><br>");

// Task 13
var favoriteSnack = "Chocolate";
var currentAge = 30;
var maxAge = 80;
var amountPerDay = 2;
var yearsRemaining = maxAge - currentAge;
var totalSnacksNeeded = yearsRemaining * 365 * amountPerDay;
document.write("<h2>Lifetime Supply Calculator</h2>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount Per Day: " + amountPerDay + "<br>");
document.write("<b>You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the age of " + maxAge + "</b>");

// Chapter 6 // 
//  // Task 1
var number = 5;
var result = "";
for (var i = 1; i <= 10; i++) {
    result += number + " x " + i + " = " + (number * i) + "<br>";
}
document.write(result);

// Task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
// Stage 1: --a;
// At this stage, a is decremented by 1, so a becomes 1.
// Stage 2: --a - --b;
// Now, a is pre-decremented again, so a becomes 0, and b is pre-decremented, so b becomes 0.
// Stage 3: --a - --b + ++b;
// a is pre-decremented once more, so a becomes -1, b is pre-incremented, so b becomes 0, then b is post-incremented, so b becomes 1.
// Stage 4: --a - --b + ++b + b--;
// a is pre-decremented again, so a becomes -2, b is post-decremented, so b becomes 0.
// Now, the expression is evaluated:
// -2 - 0 + 1 + 0 = -1
document.write("<br>Result: " + result);

// Task 3: Greeting program
var userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");

// Task 4: Multiplication table with user input
var numInput = prompt("Enter a number (default is 5):");
var num = numInput ? parseInt(numInput) : 5;
var multiplicationResult = "";
for (var i = 1; i <= 10; i++) {
    multiplicationResult += num + " x " + i + " = " + (num * i) + "<br>";
}
document.write("<br>Multiplication Table for " + num + ":<br>");
document.write(multiplicationResult);

// Task 5: Subject marks calculation and display
var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");
var totalMarksPerSubject = 100;
var obtainedMarksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));
var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
var totalMarks = totalMarksPerSubject * 3;
var percentage = (totalObtainedMarks / totalMarks) * 100;

document.write("<br><br><h2>Subject Marks</h2>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
document.write("</table>");
document.write("<br>Total Marks: " + totalMarks);
document.write("<br>Obtained Marks: " + totalObtainedMarks);
document.write("<br>Percentage: " + percentage.toFixed(2) + "%");
