

/*var answer = "YES"
var question = prompt("Do you love Julia?", "YES or NO");
var total = question.toUpperCase();
if (total == answer) {
    document.write("Get married!");
}
else {
    document.write("So sad...");
} 





a = 5;
console.log(a);






let person = {
    name: "John",
    age: 30,
    isMarried: false,
}
console.log(person['age']);






let fruits = ["apple", "orange", "strawberry", "lemon"];
console.log(fruits[0]);




for (let i=0; i<10; i=i+1){
    console.log(i);
}





let conf = 1;
while (conf<=25) {
    console.log(conf); 
    conf++;
}






for (let i=0; i<10; i=i+1){
    if(i==3){
    break    
    }

console.log(i);
}






for (let i = 1; i <= 20; i++){
    if(i == 6){
        continue
    }
    console.log(i);
}






function message(){
    alert("Hello world!");
    message()







function message(a,b){
    let result = a + b;
    console.log(result);
}

message(12,14);











function message(a,b){
    let result = a + b;
    return result;
}

alert(message(15,14));








let stuff = new Object();
stuff.people = 2000;
stuff.work = true;
console.log(stuff.work);






let person = {
age: 45,
nationality: "uk",
name: "Marek",
}

console.log(person["age"]);







function calc(lang, callback){
 setTimeout(function(){
console.log("Це перша функцыя" + lang)
 };500);
 callback();
}

function done(){
    console.log("Це друга фукнція");
}

calc("Java", done);












function template(lang,callback){
    console.log(lang);
    callback()
}

function done(){
    console.log("друга");
}

template("JavaScript", done);







function learnJS(lang, callback){
    console.log("Я вчу" + lang)
    callback();
}

learnJS("JavaScript", function()
{
console.log("Я закынчив навчання!")
})









//setInterval(alert(1), 5000);








function first(){
   alert("Text");
}
function second(){
alert(2);
 }
setInterval(first, 3000);
 second();
 








 
function calc(lang, callback){
 setTimeout(function(){
console.log("Це перша функцыя " + lang)
 },500);
 callback();
}

function done(){
    console.log("Це друга фукнція");
}

calc("Java", done);

// callback зроблено але спочатку виводиться 2 функція замість першої.








let arr = [1, 2, 3, 4, 5];
arr.forEach(function(capture, j, bill){
console.log(j + " : " + capture + "(масив: " + bill + ')');
});
console.log(arr);




let mass = [1, 5, 6, 3, 4];

for(let kinder of mass){
    console.log(kinder);
}
 





let mass = ["apple", "orange", "watermelon"];
let arr =  ["berry", "orange", "lemon"];
let total = mass.concat(arr);
console.log(total);







let mass = ["apple", "orange", "watermelon"];
result = mass.join('-');
document.write(result);






let ans = prompt("question ","answer ");
    arr = [];
arr = ans.split('.');
console.log(arr);











let arr = [1, 15, 4, 4000, 0.7];
let i = arr.sort(compare);
function compare(a,b){
    return a-b;
}

console.log(arr);








let elem = document.getElementById('format'),
    tage = document.getElementsByTagName('label'),
    tageOne = document.getElementsByTagName('img'),
    cls = document.getElementsByClassName('forheader');
//console.log(tage);










format.style.backgroundColor = 'yellow';
tage[1].style.backgroundColor = "orange";
tageOne[0].style.backgroundColor = 'blue';











  for(let i=0; i<tage.length; i++){
     tage[i].style.backgroundColor = 'red'; 
  }








let btn = document.querySelectorAll('button');
let link = document.querySelector('a');
//console.log(btn);

// btn[0].onclick = function(){
//     alert("clicked button")
// };





// btn[0].addEventListener("click",function(event){
// console.log("Подія " + event.type + 'на елементі' + event.target);
// })



// btn[0].addEventListener("click",function(event){
//     let target = event.target;
//     target.style.display = 'none';
//     })






 document.body.appendChild(link);

// link.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log(event.type + event.target);
// })






// btn.forEach(function(item) {
// item.addEventListener('mouseleave', function(){
// console.log("we are left the button");
// });
// });







 //window.addEventListener('DOMContentLoaded', function(){
   let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e){
    e.preventDefault();
    console.log("red box touchstart");
    //console.log(e.touches[0].target);
    console.log(e.touches[0].pageX);
    console.log(e.changedTouches);
    console.log(e.targetTouches);
    });
 //}); 

    // box.addEventListener('touchmove', function(e){
    // e.preventDefault();
    // console.log("red box touchmove");

    // });

    // box.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log("red box touchend");
    
    //     });












 let ans = prompt("Password");
 let reg = /\d{6}/g;
 console.log(ans.match(reg));








 let ans = prompt("Password");
 console.log(ans.replace(/./g, '$'));





function Terw(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log("Hello " + this.name);
    };
}





let ivan = new Terw("Ivan",32),
    alex = new Terw("Alex",30);
    console.log(alex);





class Rectang{
    constructor(width, height = 2){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height * this.width;
    }
}
let square = new Rectang(10);
console.log(square.calcArea());
*/





