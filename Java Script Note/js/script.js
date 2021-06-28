//console.log("Hello World!"); //print in js
console.log('Hello');
//alert('hello this is pruthviraj');

//variables

//var b ='smoothie';
//console.log(b);

//var somenumber = 45;
//console.log(somenumber);

//it's just a Fancy way of saying change HTML with Javascript

//var age = prompt('what is your age?');
//document.getElementById('sometext').innerHTML= age;

//Numbers in Javascript
//var num1= 10;

//Incriment by 1
//num1 = num1+1; 
//num1++;

//Decriment By 1
//num1=num1-1;
//num1--;

//multiply and devide,reminder
//console.log(num1);
//console.log(5*10);
//console.log(50/5);
//console.log(num1%5);


//Increment and Decriment by any number of

/*var num1 = 10;
num1 += 10;
console.log(num1);*/

/*Functions
1. create function
2.call the function */
/*
create
function name_of_function(){
        ......
}
call

name_of function();
*/

//Create a function that take in a name and says hello followed by your name
/*
function greeting(){
    var name = prompt('What is your name ?');
    var result = 'Hello' + " " + name;//string concatination
    console.log(result);
}
greeting();*/


//How do argument work in function

/*How do we add 2 number togetter in a function

function sum(num1,nmu2){ 
    var result=num1+nmu2;
    console.log(result);
}
sum(10,10);*/
/*
function getting(your_name){
    var outPut = 'Hello' + ' ' + your_name;
    console.log(outPut);
}
var name_your = prompt('Enter Your Name');
getting(name_your);*/

//While Loops

/*
var num = 0;
while(num<=100){
    num++;
    if(num == 50){
        break;
    }
    console.log(num);
}*/

/*for loop 

for(let num=1;num<=10;num++) {
    console.log(num);
}*/


//======Data Type =======
/*
let yourAge = 18; // number
let yourName = 'Pruthviraj'; //String
let name = {first: 'Jane', last: 'Doe'}; //object
let truth = false; // boolean
let groceries = ['apple','banna','orange']; //Array
let nothing = null; //value null*/

/*======String in Js=======
let fruit = 'bannan,apple,orange'; 
let morefruit = 'bananna\napple';//new line
console.log(fruit.length);
console.log(fruit.indexOf('n'));
console.log(morefruit);
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));//split by a comma
console.log(fruit.split('')) //split by characters*/

/*======Array======
 //declration
let fruit = ['banana','apple','orange','pineapple'];
fruit = new Array('banana','apple','orange','pineapple');
console.log(fruit[2]); //access value at index 2
fruit[0] = 'pear';
console.log(fruit);
for (let i = 0; i<fruit.length; i++){
    console.log(fruit[i]);
}

array common Methods
console.log('to string\n', fruit.toString());
console.log(fruit.join('-'));
console.log(fruit.pop(), fruit);//remove last iteam
console.log(fruit.push('blackberry'), fruit);//appends
console.log(fruit[4]);
fruit[fruit.length] = 'new fruit';
console.log(fruit)
fruit.shift();
console.log(fruit);//remove first element from a list
fruit.unshift('morefruit');//add first element to a array
console.log(fruit);

let vegitables=['asparagus','tomato','broccoil'];
let allgroceries = fruit.concat(vegitables); //combine array 
console.log(allgroceries);
console.log(allgroceries.slice(1,4));
console.log(allgroceries.reverse());
console.log(allgroceries.sort()); //sort array
let somenumber = [5,10,50,20,40,11,14,60,15];

console.log(somenumber.sort(function(a,b) {return a-b})); //sort number asses
console.log(somenumber.sort(function(a,b) {return b-a})); //sort desc order

let emptyarray = new Array();
for(let num = 0; num<=10; num++) {
    emptyarray.push(num);
}
console.log(emptyarray);*/

/*====Object in javascript =======

let student = {first: 'Rafeh', 
    last: 'Qazi',
    age: 21,
    studentinfo: function(){
        return this.first+'\n'+this.last+'\n'+this.age;
    }
};
console.log(student.first);
console.log(student.last);
//student.first = 'notRefeh';//change value
console.log(student.first);
//student.age++;
console.log(student.age);
console.log(student.studentinfo());*/

/*==Conditions, controal flows (if else)=====*/

//18-35 is my target demographic
//&& And
// || OR
/*var age = prompt('What is your age ?');
if((age>=18) && (age<=35)) {
    status = 'target demo';
    console.log(status);
}else{
    status = 'not my audiant';
    console.log(status);
}

//switch Statement

//differntiate between weekday vs weekend
//day 0 -->sunday -->weekend
//day 1 -->Monday  -->weekend
//day 2 -->Tuesday 
//day 3 -->Wednesday 
//day 4 --> Thursday -->Weekday 
//day 5 -->Friday -->weekend
//day 6 --> Saturday -->weekend

switch(2) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend'
        break;
    default:
        text = 'weekday'
}
console.log(text);*/
