let elem = document.getElementById('format'),
    tage = document.getElementsByTagName('label'),
    tageOne = document.getElementsByTagName('img'),
    cls = document.getElementsByClassName('forheader');
console.log(tage);





format.style.backgroundColor = 'yellow';
tage[1].style.backgroundColor = "orange";
tageOne[0].style.backgroundColor = 'blue';





  for(let i=0; i<tage.length; i++){
     tage[i].style.backgroundColor = 'red'; 
  }




let btn = document.querySelectorAll('button');
let link = document.querySelector('a');
console.log(btn);

btn[0].onclick = function(){
    alert("clicked button")
};




btn[0].addEventListener("click",function(event){
console.log("Подія " + event.type + 'на елементі' + event.target);
})



btn[0].addEventListener("click",function(event){
    let target = event.target;
    target.style.display = 'none';
    })




 document.body.appendChild(link);

link.addEventListener('click',function(event){
    event.preventDefault();
    console.log(event.type + event.target);
})





btn.forEach(function(item) {
item.addEventListener('mouseleave', function(){
console.log("we are left the button");
});
});




 window.addEventListener('DOMContentLoaded', function(){
   let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e){
    e.preventDefault();
    console.log("red box touchstart");
    //console.log(e.touches[0].target);
    console.log(e.touches[0].pageX);
    console.log(e.changedTouches);
    console.log(e.targetTouches);
    });
 }); 

    box.addEventListener('touchmove', function(e){
    e.preventDefault();
    console.log("red box touchmove");

    });

    box.addEventListener('touchend', function(e){
        e.preventDefault();
        console.log("red box touchend");
    
        });






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






let arr = [2,3,2,2,5,2,2,6,2];
for (let i=0; i < arr.length; i++){
    console.log(arr[i]);
}


let arr = [2,3,2,2,5,2,2,6,2];
arr.forEach(function (i, item, mass){
    console.log(i + ':' + item + " в масиві " + mass);
});
console.log(arr);

let arr = [2,3,2,2,5,2,2,6,2];
for(let key of arr){
    console.log(key);
}



let number = 50;
while(number < 60){
    console.log(number);
    number++;
}

let num = 10;
do{
    console.log(num);
    num++;
}
while(num < 15);


function summ (number1, number2){
    console.log(number1*number2);
}
summ(12,5);


function kvad (chislo){
    let total = chislo*chislo;
    return total;
}

let ans = kvad(10);

alert(ans);


function data (){
    let priz = prompt("Прізвище");
    let name = prompt("Імя");
    let otche = prompt("По-батькові");
    let result = priz + " " + " " + name + " " + otche;
    return result;
}
alert(data());

var pass = "massive";
var ans = prompt("enter password");
ans.toLocaleLowerCase();
if(ans==pass){
    console.log("right");
}
else{
    console.log("wrong");
}





let mySite = "https://www.youtube.com",
ans = mySite.slice(8,15);
console.log(ans);
 




let mySite = "https://www.youtube.com",
symb = mySite.charCodeAt(10);
console.log(symb);





let lett = "аяАЯ";
console.log(lett.charCodeAt(0));
console.log(lett.charCodeAt(1));
console.log(lett.charCodeAt(2));
console.log(lett.charCodeAt(3));





let name = "Иваh";
for(let i = 0; i < name.length; i++){
    if(name.charCodeAt(i) < 1040 || name.charCodeAt(i) > 1103){
        console.log(name.charAt(i))
    }
    else{
        console.log("right")
    }
};





var test = "Note about fast-forwards",
regVer = /fast/;
console.log(test.search(regVer));





var test = "765485 vjdszvkm nvfjdvn jieowjfo",
regV = /^\d{6}/g,
result = test.match(regV);
console.log(result);



var test = "765485 vjdszvkm nvfjdvn jieowjfo",
rev = / /g;
console.log(test.replace(rev, ','));



let mass = ["Venera", 22, "Mars"];

    for(let i = 0; i < mass.length; i++){
        if(isNaN(mass[i])){
            console.log ("Not a number");
        }else{
            console.log ("Is a number");
        } 
    
    }



let test = 5.8700,
result = test.toFixed(4);
console.log(result);



var age = 16.758,
total = Math.floor(age);
console.log(total);


var rand = Math.round(Math.random()*100);
alert(rand);




function kvad (chislo){
    let total = chislo*chislo;
    return total;
}

let ans = kvad(10);
alert(ans);





let num = 51;
switch (true) {
case num > 50: 
    console.log('Більше 50');
    break;
case num < 50:
    console.log('Менше 50');
    break;
    case 50: 
    console.log('Рівне 50');
    break;
default:
    console.log('Smth wrong');
    break;
}




let gift = prompt("input nubrer 1-5");
switch (Number(gift)) {
    case 1:
        alert("computer");
        break;
    case 2:
        alert("flesh-memory");
        break;
    case 3:
        alert("phone");
        break;
    case 4:
        alert("book");
        break;
    case 5:
        alert("tv");
        break;
        default:
        alert("You input invalid number");
        break;
} 





let num = 0;
(num==50)? console.log("num is 50"):console.log("wrong");



let apple = 15,
orange = 15;
let result = (apple==orange)? "Рівне" : "Різна кількість";
alert(result);


for(let key in navigator){
    console.log( key + " - " + navigator[key]);
}


for(let key in location){
    console.log(key + " - " + navigator[key]);
}


for(let key in screen){
    console.log(key + " - " + screen[key]);
}



let arr = [2,3,2,2,5,2,2,6,2];
arr.forEach(function (i, item, mass){
    console.log(i + ':' + item + " в масиві " + mass);
});
console.log(arr);



var a = {a:1}
var b = {b:3}
var c = {}
c[a] = 1
c[b] = 2
console.log(c)



var a = [1,2,3]
var b = [4,5,6]
var c = {}
c[a] = 1
c[b] = 2
console.log(c)



var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(foo.x)
*/


try{
    console.log("Початок");
    console.log(a);
    console.log("Результат");
} catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack)
    console.log(`Ми отримали помилку ${error.name}`)
}

console.log("Продовжує працювати")






let json = '{"id":2}'
try{
let user = JSON.parse(json);
console.log(user);
 if (!user.name){
     throw new Error('Тут немає імені')
 }
} catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log(`Ми отримали помилку ${error.name}`);
}finally{
    console.log("А я виконаюся завжди")
    }




    var summer = {
        Spain : 2000,
        Egypt : 1500,
        Italy : 3000
    };
    
    summer.computing = function(people, days, country){
        var result = people * days * this[country];
        return result
    };
    console.log ("ПІДСУМОК: " + summer.computing(2, 10, 'Spain'))
    

let drink = 1;

function shoot(arrow, headshot, fail){
console.log("Ви зробили вистріл");

setTimeout(function(){
    Math.random() > .5 ? headshot({}) : fail("Ви промахнулися!"); 
}, 3000)
};

function win(){
    console.log("Ви перемоли!");
(drink == 1) ? beer() : money();
}

function beer(){
    console.log("Вам дали пиво!")
}

function money(){
    console.log("Вам дали гроші!")
}

function loose(){
    console.log("Ви програли!")
}

shoot({},
    function(mark){
        console.log("Ви попали в ціль!");
        win(mark, beer, money);
    },
    function(miss){
        console.error(miss);
        loose();
    }
)








let drink = 2;

function shoot(arrow){
console.log("Ви зробили вистріл");
let promise = new Promise(function(resolve, reject){
setTimeout(function(){
    Math.random() > .5 ? resolve({}) : reject("Ви промахнулися!"); 
}, 3000)
})
return promise
}




function win(){
    console.log("Ви перемоли!");
(drink == 1) ? beer() : money();
}

function beer(){
    console.log("Вам дали пиво!")
}

function money(){
    console.log("Вам дали гроші!")
}

function loose(){
    console.log("Ви програли!")
}

shoot({})
 .then(mark => console.log("Ви попали в ціль!"))
 .then(win)
 .catch(loose)



let = "The grown-ups' response. This time. Was to advise me to lay aside my drawings of boa constrictors. Whether from the inside or the outside. And devote myself instead to geography history arithmetic and grammar. That is why at the age of six. I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves and it is tiresome for children to be always and forever explaining things to them."

let sentens = "Чудове місто Львів. Я його люблю.";
regv = sentens.split(' ');
for (i=0; i<sentens.length; i++){
    console.log(regv[i]);
}
mass = [];
res = mass.push(regv[i]);
console.log(res)





mass = [];
res = mass.push(regv);
//result1 = sentens.reverse();
console.log(res)

var string = "0,1";
var array = string.split(",");
console.log(array[0]);


function result(){

}



var answer = "YES"
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



