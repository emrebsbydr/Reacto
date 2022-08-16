/*****************
 1- Only Odds
*****************/


// Define a function, onlyOdds, that accepts a number as an argument.
// onlyOdds should should return the sum of all the odd numbers
// between 1 and the given number.
// If onlyOdds receives an argument less than 1, it should return 0.


function onlyOdds(num){
let sum=0;
if (num<1){
    sum = 0;
    return sum;
    }
for (let i=num; i>=1; i--){
    if (i%2===1){
        sum+=i;
        console.log(i);
    }
}
    return sum;
}

console.log("Sum : ",onlyOdds(9));


/*****************
 2- crazyCaps
*****************/

/*

2-Define a function, crazyCaps, that accepts a string as an argument.
 crazyCaps should return a string in which every other character is capitalized.
 The first letter should be lower-cased.

crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!


function crazyCaps(originalstring){
    let crazyString = " ";
    for (let i=0; i<originalstring.length; i++){
        let character = originalstring[i];
        if (i%2==1){
            crazyString+=character;
        }else{
            character = character.toUppercase();
            character+=character;
        }
        return crazyString;
    }
}
console.log("fullstack is amazing")
*/

/*****************
 3-bacteriaTime
*****************/

/*
3-Bacteria Time
Define a function, bacteriaTime, that accepts two arguments:

currentNum (number) - number of starting bacteria
targetNum (number) - desired number of bacteria
Assuming that the number of bacteria doubles every 20 minutes,
bacteriaTime should return the number of minutes
required for the number of bacteria to grow from currentNum to a number equal to or larger than targetNum.

You can assume that currentNum will be a positive integer. If targetNum is smaller than currentNum,
return the string 'targetNum must be larger than currentNum'.

bacteriaTime(1, 8); // => 60


function bacteriaTime(currentNum,targetNum){
    if (targetNum<currentNum){
            return 'targetNum must be larger than CurrentNum'
    }

    let numberOfMinutes= 0;
    while (currentNum<targetNum){
        currentNum*=2;
        numberOfMinutes+=20;
    }
        return numberOfMinutes;

    }
    console.log(bacteriaTime(1,8));

*/

/*****************
4- Exponentiate
*****************/
/*
4- Exponentiate
Write a function exponentiate that accepts two arguments:

base (number)
power (number)
exponentiate should return the result of raising the base by the power.
Assume that power will always be an integer greater than or equal to zero.
Don't forget that any number raised to the 0th power is equal to 1!
Do not use the built-in Math.pow() method or Javascript's built-in exponentiation operator but feel free to use them moving forward!

function exponentiate(baseNum,powerNum){
    let result=1;
    if (powerNum===0){
        return result=1;
    }
    for(let i=0; i<powerNum; i++){
        result=result*baseNum;
    }
    return result;
}
console.log(exponentiate(2,0));
*/

/*****************
5- mySlice
*****************/
/*
5- mySlice
Write a function mySlice that accepts up to three arguments:

originalString (string)
startIdx (number, optional)
endIdx (number, optional)
mySlice should return a string. The returned string should be a copy of the original string.
 If the user defines a startIdx, the returned string should start at that index:

mySlice('slice and dice', 2)    // => ice and dice
If the user defined an endIdx, the returned string should end at the last index before the endIdx:

mySlice('slice and dice', 2, 5)    // => ice
If the user doesn't define either the startIdx or the endIdx, return the entire originalString:

mySlice('slice and dice')    // => slice and dice


function mySlice (originalString,startIdx,endIdx){
    if (startIdx===undefined){
        return originalString;
    }
    if (endIdx===undefined){
        endIdx=originalString.length;
    }

    let slicestring = '';
    for (let i =startIdx; i<endIdx; i++){
        let char = originalString[i];
        slicestring+=char;
    }
    return slicestring;
}

console.log(mySlice('slice and dice',2,5))
document.write(mySlice('slice and dice',2))
*/

/******************************
 6- liftoff interview question
*******************************/
/*
countdown for loop and recursive function
function liftoff(num){


    if(num<1){
        console.log('LIFTOFFDONE!')

    }

    else{

        console.log(num)
        liftoff(num-1)
    }

}
liftoff(5)




/*******************************
 6- LIFTOFF INTERVIEW
 SOLUTION 2
*********************************/
/*
function liftoff2(number){
    for (let i=number; i>=1; i--){
        console.log(i);

    }
    console.log("LIFTOFF")
}
liftoff2(5)
 */

/*******************
 7- countdownArray
*******************/

/*
newArray =[1,4,2,0,5,68,9,100];
function countdownArray(arrayparameter){
    let coundown =arrayparameter.sort(function(a,b){return a-b})
    console.log (coundown)
    console.log("islem bitti");
    countdownArray(newArray)
}
*/

/****************************
 8- highAndLow
****************************/

/*

let numbers = '1 2 3 4 5 0';
function highAndLow(numbers){

    let stringToArray =numbers.split(' ') // array elde ediyorum burda
    console.log(stringToArray)
    let countdownArray = stringToArray.sort(function(a,b){return a-b})
    console.log(countdownArray)
    let minNum = countdownArray[0]
    let arrayuzunluk =countdownArray.length
    let sonelemanArray = countdownArray[arrayuzunluk-1]
    console.log(minNum)
    console.log(arrayuzunluk)
    console.log(sonelemanArray)
    console.log(minNum+' '+sonelemanArray)

  }
  highAndLow(numbers)
 */

/*******************
 9- litres
*******************/
/*
  function litres(time) {
    let liter = 0;
    if (time<0){
        console.log(liter)
    }

    for (let i=time; i>=0; i--){
    liter+= 0.5

        }
      console.log (Math.floor(liter))
    }
    litres(0)
*/

/*************************
 10- sequenceSum
*************************/

//HINT
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3 --> 5 (1 + 4)
// 5,2,1 --> 0

/*

const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    let result= 0;
    if(begin>end){
        console.log(0)
        return}
        for(let i=begin; i<=end; i+=step){
            result+=i;
        }
        console.log(result)
    }


sequenceSum(2,2,2)
sequenceSum(2,6,2)
sequenceSum(1,5,1)
sequenceSum(1,5,3)
sequenceSum(5,2,1)


*/

/*************************
 11- myIndexOf
*************************/
/*
6-My Index Of
Define a function, myIndexOf, that accepts three arguments:

source (string)
searchValue (string)
startIdx (number, optional)
If the source contains the searchValue, return the index at which the searchValue starts.
If the searchValue appears more than once in the source, return the index from the first occurrence of the searchValue.
If the searchValue doesn't exist in the source, return -1.

If a startIdx is passed into the function, ignore any instances of the searchValue that occur before startIdx.
If no startIdx is provided, start searching from the beginning of the source.

Hint: Javascript's .slice string method may be useful here.

Do not use the built-in .indexOf string method in your answer.
 Feel free to use it in all future workshop problems though!

myIndexOf('hello', 'h'); // => 0
myIndexOf('hello', 'e'); // => 1
myIndexOf('hello', 'l'); // => 2
myIndexOf('hello', 'l'); // => 2
myIndexOf('hello', 'o'); // => 4

// find the index of the first instance of 'ice' starting at index 5
myIndexOf('twice twice', 'ice'); => 2
myIndexOf('twice twice', 'ice', 5); => 8
myIndexOf('happy string', 'sad'); => -1
*/

/*************************
 12- crazyCaps
*************************/

/*
 let str ="FULLSTACK IS AMAZING";

function crazyCaps(str){
    let crazyString='';
    for(let i=0; i<str.length; i++){
        if (i%2==0){
            crazyString+=str[i]
        } else {
            crazyString+=str[i].toUpperCase()

        }


    }
    return crazyString;

}
crazyCaps(str)

 */

/*************************
 13- slice() methodu
*************************/

/*
// slice() methodu
// 1- Slice methodu  original array'i degistirmeden
// bu islemi gerceklestiriyor.



const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(-3, -1);
console.log(myBest)
console.log(fruits)

*/

/*************************
 14- find() methodu
*************************/

/*
// find() methodu
// 1- Methodun icerisine bir function yazdigimizda
// fonksiyonda tanimladigimiz durumu bize bulmamamizi sagliyor


const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}
 console.log(ages.find(checkAge));
*/

/*************************
 15- copyWithin() Array-methodu
*************************/

// copyWithin () METHODU
// array.copyWithin(target, start, end)

/*
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
//let a = fruits.copyWithin(2, 0,2);
let b = fruits.copyWithin(0, 2,5);
//console.log(fruits)
//console.log(a);
console.log("...")
console.log(b)

*/

/*************************
 16- keys() methodu
*************************/

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x+"<hr>";

//console.log(x)
}
//document.write(text)
console.log(keys)
//console.log(text)
*/

//2nd exapmple
/*


var liste = ["elma",142,"kiraz",15,"baykus","cicek","bal",12]
console.log(liste)

var num;
var keys = liste.keys() //iterator olusturur. (0123345678..)
for (num of keys){
    console.log(num)
}


 */

/*************************
 17- toString() method
*************************/
/*************************
 18- join() method
*************************/
/*************************
 19- split() method
*************************/
/*
//let text = "how are you today"
//let a = dizi.toString()
//let b = dizi.join("")
//let c= text.split("") // return array

//let dizi = [10,25,75,"emre","kubra"]
//let d = dizi.join('') // return string
//let text1 ="";
//dizi.forEach(myfunction);
//function myfunction(index){
//    text1 +=index;
//}

//console.log(dizi)
//console.log(a)
//console.log(c)
//console.log(typeof(d))
//console.log(d)
//console.log(text1)
//document.write(text1)
//document.write("<br>")
//document.write(typeof(text1))

*/

/*************************
 20- sort() method
*************************/

//const points = [40, 100, 1, 5, 25, 10];
//points.sort(function(a, b){return a-b});// sort methodu  uygulandigi diziyi kalici olarak degistirir.
//points.sort((a,b)=>{return a-b})// sort method fonksiyonu arrow funstion methodu ile yazilimi
//let a = points.sort()
//console.log(a)
//console.log(points)

/*************************
 21- minMax
*************************/

// let arr = [10,3,56,78,2,34,1,67]
/*

function minMax(arr){
    arr.sort(function(a,b){return a-b});

    return [arr[0],arr[arr.length-1]]; // fix me!
}

console.log(minMax([23,3,44,54,5]))

*/

/*************************
22- new Array() method
*************************/
/*************************
23- for loop
*************************/
/*************************
24- for in loop
*************************/
/*************************
25- for of loop
*************************/

//let kurslar;
//kurslar = new Array("php","bootstrap","jquery","javascript",10,20,30,40,)
//let b =kurslar.toString() // arrayTostring
//let a = kurslar.join("") // stringToarray
//console.log(a)
//console.log(kurslar.length)
//let text = ''
//for (let i=0 ; i<=kurslar.length-1; i++){
//text+=kurslar[i]
//}
//console.log(text)
//console.log(b)
//let text =""
//for (keys in kurslar){
//    text+=kurslar[keys]
//}
//console.log(text)
//let text="";
//for (item of kurslar){
//console.log(item)
//    text+=item;
//
//}
//console.log(text)

/*************************
26- if-else statement
*************************/

/* function myfunction(num){
    if (num>0){
        console.log(num)
        myfunction(num-1);
    }
    else if(num===0){
        console.log('lift');
    }
}
myfunction(5); */

/*******************************
27- main edge interview question
*******************************/
// main
// [2,4,5,3,5,2],5   // true
// [4,5,3,5,9,1,99],10 // true
// [2,4,5,2,5,63],30  // false
// [0,6,9,7,88,2,1,4,434],70 //false

//edge
// [2]  false
// [] false
//let dizi =new Array();

/*

function myfunction(dizi,num){
         for (let i=0; i<=dizi.length-1;i++){
        for(j=i+1; j<=dizi.length-1; j++){
           if(num ===dizi[i]+dizi[j])
          return true;
          }
          return false;
        }
    //return false;
}
console.log(myfunction([2,4,5,3,5,2],605));

*/

//2nd solution
/*


function myfunction(dizi,num){
    if(dizi.length<1)    return false;
    for (let i=0; i<=dizi.length; i++){
   for(j=i+1; j<=dizi.length; j++){
      if(num ===dizi[i]+dizi[j])
     return true;
     }
     //return false;
   }
return false;
}
console.log(myfunction([2,5,3,5,4],8));//true
console.log(myfunction([2,4,5,3,5,2],2));//false
console.log(myfunction([2,4,5,3,5,2],8));//true
console.log(myfunction([2,4,5,3,5,2],70));//false
console.log(myfunction([2],3));//false;
console.log(myfunction([]));//false;


 */

/*******************************
27- multiplicaton table
*******************************/
/*
1 ile 10 arasindaki sayilari carpalim.carpim tablosu olusturalim
3 ile 13 arasinda 5 er artarak 3 ile carp
3x3=
3x8=
3x13=
4x3=


for(let i=3; i<=13; i++){
    for(let j=3; j<=13; j+=5){
document.write(i+"x"+j+ "=" + i*j+'<br>');
//console.log(i+"x"+j+ "=" + i*j)
    }
}
*/

/*******************************
28- isSquare
*******************************/

//solution 1
/*
 var isSquare = function(n){
    let num = Math.sqrt(n);
    if(Number.isInteger(num)) return true;
      else return false;

    }

    console.log(isSquare(13))
 */

//solution 2
/*

let isSquare =function(n){
    if (Math.sqrt(n)%1===0) return true;
    else return false;
}
console.log(isSquare(215))

*/

/*******************************
29- getSum
*******************************/

/*
let sum =0;
function getSum( a,b )

{
    if(a>b){
        for(let i=a; i>=b; i--){
            sum+=i
        } return sum;
    } else if (b>a){
        for(let i=b; i>=a; i--){
            sum+=i
        } return sum
    }else if (b===a){
        return a
    }

   //Good luck!
}
console.log(getSum(0,1))


































/*******************************
30- isTriangle
*******************************/

/*

 function isTriangle(a,b,c)
{
   if (a+b>c && a+c>b && b+c>a){return true;
   }else{
     return false;
   }

}

console.log(isTriangle(7,2,1))

*/

/*******************************
31- push() method
*******************************/

/*
let amazaingArray = [];
let happyString = "happy";
amazaingArray.push(happyString);
amazaingArray.push(happyString);
amazaingArray.push(happyString);

console.log(amazaingArray)// push methodu diziyi kalici olarak degisitirir unutma!!!
 */

/*

let amazingArray =[];
function happyFunction(){
    console.log("I am happy");
}

 */

// let amazingArray =[];
// let happyFunction = function (){ // anonymous function
//     console.log("I am happy ")
// }
// //happyFunction()

// amazingArray.push(happyFunction);
// amazingArray.push(happyFunction);
// amazingArray.push(happyFunction);

// console.log(amazingArray)

// let happyFunction = function (name){
//     console.log(name+" is  happy ")
// }
// let amazingArray =[happyFunction,happyFunction,happyFunction];

// //console.log(amazingArray)

// for (let i=0; i <= amazingArray.length-1; i++){
//     let element = amazingArray[i];// each element is a function
//     element("Emre ");
// }

/*******************************
32- nested function
*******************************/
//  PASSING FUNTIONS INTO ANOTHER FUNCTION
//  sample example ......

//  function firstFunction(anotherFunction){
//     anotherFunction()// invoking the fuction this time
//  }

/*

//  function happyFunction(){
//      console.log("i am   happy ")
//  }
// firstFunction(happyFunction);

// function saysHi(name){
//     console.log("Hi",name)
// }

// function saysBye (name){
//     console.log("bYE",name)
// }

 */

/*
function callsWithName (name,saysHiOrBye){
    saysHiOrBye(name);
}

callsWithName("EMre",saysHi)

 function addWorld(string){
     return string+ "world";
 }

 function callsWithHello(func){
     return func("Hello ")
 }

 //console.log(callsWithHello(addWorld));
 let result = callsWithHello(addWorld);
 console.log(result)
 */

/*******************************
33- typeof() method
*******************************/

// const cars = ["BMW", "Volvo", "Mini"];
// let text = "";
// for (let x of cars) { // returns string from array
//   text = x ;
//   console.log(text +" : " +typeof(x))
// }
// console.log(...cars); // elemanlari yan yana string halinde virgulsuz yazmamiza yarar
// console.log(cars.toString()) // tostring () methodulu ile array to string yapariz elemanlarin arasina vigul atar
// console.log(cars.join(""));
// let a = cars.join("")// array to string yapara original array i degistirmez!!
// b= a.split("") // string to array
// console.log(b)
// console.log (cars)

/*******************************
34- entries() method
*******************************/
//Array itterator

/*
const cars = ["BMW", "Volvo", "Mini"];
let f= cars.entries() // returns Array iterator object with key value
console.log(f) // return array iterator
for (let x of f){
    console.log(x+" : " +typeof(x)) // returns array //typeof return object bcs array is a object!

} */

/*******************************
35- callsWithHello() callback-functionn
*******************************/

/**** CALLBACK FUNCTION HERE EXPLAINED ****/

/*
 function addWorld(string){
     return string+" world!";
 }

 function callsWithHello(func){
     return func("Hello");
 }

 let result = callsWithHello(addWorld);
 console.log(result)
 */

/*******************************
36-  saysToAll callback-function
*******************************/

/*
let group = [ "emre","kubra","evin","basbaydar"];

 function saysToAll(arr,func){
     for(let i =0; i<=arr.length-1; i++){
         func(arr[i]) //calback function here
     }
 }

//  function sayHelloWithName(name){
//      console.log("Hello, "+name+" !");
//  }
saysToAll(group,function(name){ //we can pass anonymous function into another function,too
     console.log("Hello, "+name+" !!!")
 });

//  saysToAll(group,function(name){ //we can pass anonymous function into another function,too
//      console.log("Hello, "+name+" !!!")
//  });
 */

/*******************************
37- likes  if-else statement
*******************************/

/*

function likes(names) {

    if (names.length===0){
      console.log("no one likes this")
    }else if (names.length===1){
      console.log(names[0]+" likes this")
    }else if (names.length===1){
      console.log(names[0]+" and "+names[1]+" like this")
    }else{
      console.log(names[0]+","+names[1]+" and "+(names.length-2)+" others like this")
    }
  }

likes(["Alex", "jacob", "Mark", "Max"])
likes(["Alex", "jacob","Mark" ])
likes(["Alex"])


 */

/*******************************
38- oddOrEven
*******************************/
/*
let sum=0 ;
function oddOrEven(array) {

  if (array.length===0){
    array.push(0);
  }
    for (let i = 0; i<=array.length-1; i++){
      sum+=array[i];
    }if(sum%2===0){
        console.log("even")
    }else{ console.log("odd")}

 }

 oddOrEven([0,1,4])

 */

/*******************************
39- functionLogger
*******************************/

/*
Function Logger
Define a function functionLogger that accepts 2 arguments:

1) func (function) - a function to run

2) arg (any type) - a value to pass into func as an argument

functionLogger should complete the following steps:

1) log the message "Function starting"

2) invoke the provided function

3) log "Function complete"

4) return the result of the function call

Note that the unit tests will check that the correct value is returned;
 they do not check if you console logged the right values at the right time.

function squareNum(x) {
  return x * x;
}

let squareOfFour = functionLogger(squareNum, 4);
// Function starting
// Function complete

console.log(squareOfFour) // 16
*/

/*******************************
solution
*******************************/

//callback function icin once ana fonksiyonda callback fonksiyonunu
//parametre olarak yazmadan once onu tanimlamamiz gereklidir
/*
function squareNum(x) {
    return x * x;
  }

function functionLogger (squareNum,arg) {
    console.log("Function starting")
    let result= squareNum(arg);

    console.log("Function complete");
    return result;

}

let squareOfFour = functionLogger(squareNum, 4);
console.log(squareOfFour)

 */

/*******************************
40- addWorld  function-parameter
*******************************/

/*

 function addWorld(string){
     return string+" world!";
 }

 function callsWithHello(func){
     return func("Hello");
 }

 let result = callsWithHello(addWorld);
 console.log(result)
 */

/*





























/*******************************
41- greetme  callback-function
*******************************/
/*
function greetme(){
    console.log("Hi!")
}

function  getGreeter() {
    return greetme; // burda yapilan return function name without invoking the function

}

let greetervalue= getGreeter();
greetervalue()



// console.log(typeof greetervalue);
console.log(greetervalue);

 */

/*******************************
42- greeter  closure-nested-function
*******************************/

// function greeter(){
//     let name = " marie ";
//     let saysHi = function(){
//         console.log("Hi", name)
//     }
//     saysHi();
// }
// greeter();

/*******************************
43- Array.entries()
*******************************/

//LISTEDEKI BIR ELEMANIN KACINCI NUMARADA INDEX TE OLDUGUNU BU SEKILDE OGRENEBILIRIZ
/*
 var meyveler = ["elma","kayisi","seftsli","karpuz","portakal","limon","nar","kiraz"]
console.log(meyveler)
var goster=meyveler.entries();// bize iterator veriyor meyveler[0],meyveler[1]... gibi
// console.log(goster)
// console.log(typeof goster)
// var keys ;
for (keys of goster){
    console.log(keys)
}
 */

/*******************************
44- Array.every() method
*******************************/
// method icine function alir
// return true veya false dondurur fonksiyon icindeki sarta gore !!
// array icerisinde elemanlari kontrol etmemizde kullanilir

/*

var yas = [20,86,85,99,66,56,23,18,19];

function goster(num){
    return num>=17;
}
var elements = yas.every(goster)
//console.log(yas.every(goster))
console.log(elements)

if (elements===true){
    console.log("kullanicilarin yaslari 18 den buyutur")
}else{
    console.log("Kullanicilarin yaslari 18 den KUCUKTUR")
}
 */

/*******************************
45- Array.fill() method
*******************************/
//uc tane parametre alir (target, strIndex, endIndex)
//orginal array i degistirmez
// fill() METHOD KULLANIMI ARRAY ELEMANLARINI SABIT ILE DEGISTIRME //

/*

var sayilar = [20,86,85,99,66,56,23,18,19];
console.log(" normal lise : "+sayilar)
var doldur = sayilar.fill("emre",2,5)
console.log(" sabit liste : "+doldur)
console.log(doldur[3])
console.log(sayilar[0])


 */

/*******************************
46- Array.filter() method
*******************************/
//filter() METHODU ARRAY ELEMANLARINI FILITRELEME
// icerisine condition function alir ona orginal arrayi bastan sona terate ederek
// yeni bir tane array olusturur.
//return array

/*

var yaslar = [2,10,86,85,8,12,99,66,56,23,18,19];
console.log(" normalliste = "+yaslar)

function goster(yas) {
    return yas>=18 // bize true veya false degerlerini dondurur.
}
let yeni_liste = yaslar.filter(goster) // return array verir
console.log(" yeni liste = "+yeni_liste)
console.log(Array.isArray(yeni_liste))

 */

/*******************************
47- Array.filter() even number bulma
*******************************/
//// Example even number bulma

//Solution-1
// function ciftsayi(num){
//     return num%2==0;
// }
//  var listem = [11,98,31,23,944];
// filtered=listem.filter(ciftsayi);
// console.log(filtered)

//Solution-2
// let newArray= [];
// function cSayi(listem){
//     for (let i = 0 ; i<=listem.length-1; i++){
//         if (listem[i]%2==0){//console.log("index num :"+i+" "+listem[i])
//             newArray.push(listem[i])
//                 }
//     }
//     console.log(newArray)
// }
// cSayi(listem)

/*******************************
48- Array.find(), Array.filter(), Array.findIndex()
*******************************/

/*

sayilar = [100,86,85,15,13,77,99,66,56,23,18,19]
console.log("sayilar listesi : "+sayilar)

function goster(num) {
    return num<=20;
}

findedNum = sayilar.filter(goster);
console.log("Filitre sayilari : "+findedNum)
console.log("bulunan sayi : "+sayilar.find(goster))
console.log("index nuarasi : "+ sayilar.findIndex(goster))


 */

/*******************************
49- Array..foreach()
*******************************/
// .foreach() ~ console.log ile elemanlari yazdirabiliriz
//METHODU ILE DZININ ELAMNLARINA ULASABILIRIZ
//elemanlari teker teker gezer fakat array dondurmez!
//orginal array i degistirmez !!

/*

var diziElemanlari = [18,"ayse",50,"masal",85,98,"okan",21,60,"emre",23]
console.log(diziElemanlari);


 diziElemanlari.forEach(function(item){console.log(item)})



 */

/*******************************
50- reverseLetter
*******************************/
/*******************************
51- reverse() method
*******************************/

/*

function reverseLetter(str) {
    let array = str.split('')
    let ref='abcdefghijklmnopqrstuvwxz' ;
    //let arry2=ref.split('')
    let store=[];

   for(let i=0; i<array.length; i++){
       if(ref.indexOf(array[i])>=0)
       store.push(array[i])

   }
   return store.reverse().join('');
  }

  console.log(reverseLetter("veysel5*23"));



 */

//2nd example reverse() kullanimi
/*
var mat = [ 10,20,30,50,100]
function myfunction (){
    return mat.reverse()
}
console.log("normal liste : "+mat)
console.log("ters liste : "+myfunction())





 */

/*******************************
52- Array.indexOf() method
*******************************/

/*


  let  x=['a',12,'c'];

 console.log(x.indexOf('a')) // 0
 console.log(x.indexOf('4')) //-1



 */

/*******************************
53- lowercasetotal
*******************************/

/*


//solution 1

function solve(s){
    let lowercasetotal=0;
    let uppercasetotal=0;
   for(let i=0; i<s.length; i++){
     if(s[i].toLowerCase()===s[i]){lowercasetotal++;
    } else {uppercasetotal++;

   }

   if(lowercasetotal === uppercasetotal || lowercasetotal >= uppercasetotal  ) {return s.toLowerCase();
    }else if (uppercasetotal > lowercasetotal) {return s.toUpperCase()};


  }
}
 console.log(solve('CODE'));
 console.log(solve('coDe'));
 console.log(solve('CODe'));



 */

/*******************************
54- findUpperCase
*******************************/

//solution 1 for find upperCase in string parameter

/*

let s='coDe';
 let findUpperCase  = ()=> { let upper = s.split('').filter(x => x === x.toUpperCase())
 return upper;
}

 console.log(findUpperCase ()); //1 ['D] //1


 */

//solution 2 for find middle letter  if the string parameter length is odd number

/*


let s='coDe';
 function getMiddle(s){
    if(s.length%2===1)  return s[Math.floor(s.length/2)];
  }
  console.log(getMiddle("testing"))



 */

/*******************************
55- Array.foreach(), Array.foreach()  method
*******************************/
/*
  var eleman = ["emre",18,"ayse","masal",50,"okan"]
  console.log(eleman)

//   eleman.forEach(function(num) {
//       console.log(num)
//   })

for(keys in eleman){
    console.log(keys+" : "+eleman[i])
}

 */

/*******************************
56- while loop, for loop
*******************************/
/*

var eleman = ["emre",18,"ayse","masal",50,"okan"]

var i =0;
while (i<=eleman.length-1){
    console.log(i+" = "+eleman[i])
    i++
}

for(let i=0; i<=eleman.length-1; i++){
    console.log(i+" = "+eleman[i])
}
 */

/*******************************
57- Array.from(str) method
*******************************/
//string den array kopyalamamiza yarar
// string icindeki tum letter i teker teker gezer ve array icine elaman olarak yazar

/*



var eleman = ["emre",18,"ayse","masal",50,"okan"]

// a= eleman.join("").split("")
// console.log(a)

b= eleman.join("") // string
console.log(b)
c= Array.from(b)
console.log(c)



 */

/*******************************
58- Array.includes(taget, indexNum)
******************************/

/*




var eleman = ["emre",18,"ayse","masal",50,"okan"]
var sor = "emre"
var bak = eleman.includes(sor,0)
if (bak ==true) console.log("BOYLE BIR ELEMAN VARDIR ARANAN ELEMAN = "+sor )
else console.log("boyle bir elemena yoktur  aranan eleman ="+sor)

var ara = eleman.indexOf("masal") // return index number


if (ara<0) console.log("aranan eleman dizi de yok :"+ara)
else console.log("aranan eleman dizi de var  :"+ara)






 */

/*******************************
59- Array.reduce( function, initalNum )
******************************/
// reduce ile toplama islemei iki deger alir icerisine
// toplama islemi yapacak fonksiyon ve ikinci parametre olarak ilk deger alir

/*

var mat = [ 10,20,30,50,100,"emre","kubra","deniz"]
function islem (sayi1,sayi2){
    return sayi1+sayi2;
}
var ilk_deger=0;
var sonuc = mat.reduce(islem,ilk_deger);
console.log(sonuc)





 */

/*******************************
60- Array.reduceRight() method
******************************/

/*



var mat = [ 10,20,30,50,100]
console.log(mat)
function  islem(sayi1,sayi2) {
    // console.log("sayi1 :"+sayi1)
    // console.log("sayi2 :"+sayi2)
    return sayi1+sayi2;
}
var ilk_deger=0;
var sonuc = mat.reduceRight(islem,ilk_deger);
console.log("sonuc : "+sonuc)





 */

/*******************************
61- Array.shift()
******************************/
// shift method u original array i DEGISTIRIR !!

/*



var mat = [ 10,20,30,50,100]
function sil(){
    mat.shift()
    return mat
}
console.log("sil : "+sil())
console.log(sil())
console.log(sil())
console.log(sil())
console.log(sil())
console.log(sil())
mat.shift();
console.log(mat)
mat.shift();

 *







/*******************************
62- Array.slice()
******************************/
///Array.slice(startIdex, endIndex)
//slice methodu ARRAY BOLME eski listeyi DEGISTIRMEZ !!

/*



var mat = [ 10,20,30,50,100,"emre","kubra","deniz"]
console.log(mat)
var yeni = mat.slice(1,4);
console.log(yeni)



 */

/*******************************
63- Array.some()
******************************/
//Arrar.some(funcName,index,diziName)
// some methodu ARRAY ELEMANLARINI TEST ETMEK icin kullanilir return olarak '' true veya false '' cevirir

/*

var mat = [ 10,20,30,50,100,"emre","kubra","deniz"]
console.log(mat)
function bul(sor,siranum,dizi){
    // console.log(sor);
    return sor>=30
}

 var sonuc= mat.some(bul)
console.log(sonuc) // true yada false dondurur.



 */

/*******************************
64- Array.sort(), Array.reverse()
******************************/
//kullanimi ARRAY elemanlarini siralamamiza yardimci olurlar
//Array .sort(funcName)

/*



var eleman = ["sevda","cemil","ali","oguz","zehra","eklem","busra","anil"]
var sayi = [15,20,40,85,63,75,2,36,33,11,100]
console.log("Sirasiz liste :"+eleman);
console.log("sirasiz sayi listesi :"+sayi)


// eleman.sort()
eleman.reverse()

console.log("Sirali liste :"+eleman);


function sirala(a,b){
    return a-b;
}
sayi.sort(sirala)
console.log("sirali sayi listesi :"+sayi)





 */

/*******************************
65- Array.splice(startindex,deleteindex,addelements)
******************************/
//splice method u 3 adet parametre alir
// bu methodu dizelerden eleman cikartmakbolmek icin kullaniriz
// bu method original diziyi DEGISTIRIR  !!
//Array.splice(startindex,deleteindex,addelements) uc tane parametre alir

/*




var eleman = ["sevda","cemil","ali","oguz","zehra","eklem","busra","anil"]
console.log("Original array : "+eleman);

eleman.splice(1,0,"FATMA",21)
console.log("spliced array : "+eleman);





 */

/****************************************
66- recursive function  interview question
******************************************/
//fulstack soru 1 geri saydirma   recursive function
// recursive function da if else statement ini kullaniyoruz if kisminda ayni fonksiyonu tekrar cagiriyoruz !!!

/*





 function myfunction(num) {
     if (num>0){
        console.log (num);
        num= num-1;
        myfunction(num)
     } else if (num===0) {
        console.log("lift!")
     }

 }

 myfunction(5)


*/

//solution 2
//for loop ile ..

/*
  function myfunction1(num1) {
      for (let i=num1; i>0; i--){
          console.log(i)
      }
      console.log("lift!")
  }

  myfunction1(5)

 */

/****************************************
67- texarray (cols,rows)
******************************************/

/*


function texarray (cols,rows){
    let arr = [];
    for (let i=0; i<rows; i++){
        let row =[];
        for (let j=0; j<cols; j++){
            row.push(j+1)
        }
        arr.push(row)
    }
    return arr;

}

console.log(texarray(5,2))


 */

/****************************************
68- for in loop, split(), reverse() for array
******************************************/

/*


let number='21414';
let arr=number.split('').reverse();
console.log(arr)

let store=[];
for(let i in arr){
store.push(Number(arr[i]))
}
console.log(store);// array verir elemanlari number dir.






 */

/****************************************
69- nested for loop
******************************************/
//

/*

for (var i=0; i<=4; i++){
    document.write("*")
    for(var j=0; j<4; j++){
        document.write("*")
    }
     document.write("<br>")

    // document.write("<br>")
}




 */

/****************************************
70- for in loop for object{}
******************************************/

/*


var araba1= {marka:"bmw", model:"x5",yasi:3}
let show=[]
let property="";
for (i in araba1){
    show.push(i)

    property+=(i+",")
    console.log(property)
    console.log(i)
    console.log(araba1[i])
    show.push(i)

}
console.log(show)
console.log(property)

//console.log(a)
console.log(property)
console.log(show)
//console.log(typeof show)

//console.log(show)



 */

/****************************************
71- XO function to check number of character ( CODEWARS)
******************************************/
//based on condition
// if no x or no o return false

//// codewar str eleman check sorusu
//   XO('xo')
//   XO("xxOo")
//   XO("xxxm")
//   XO("Oo")
//   XO("ooom")
// // Test.assertEquals(XO('xo'),true);
// // Test.assertEquals(XO("xxOo"),true);
// // Test.assertEquals(XO("xxxm"),false);
// // Test.assertEquals(XO("Oo"),false);
// // Test.assertEquals(XO("ooom"),false);
// //   XO("ooxx")
// //   XO("xooxx")
// //   XO("ooxXm")
// //   XO("zpzpzpp")
// //   XO("zzoo")
// // XO("ooxx") => true
// // XO("xooxx") => false
// // XO("ooxXm") => true
// // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// // XO("zzoo") => false

/*




// code here
function XO(str) {
    var char;
    var oCharNum=0;
    var xCharNum=0;

    for(var i=0; i<str.length;i++){
      char=str[i];

      if (char==="o" || char==="O") oCharNum++;
      if (char==="x" || char==="X") xCharNum++;
    }
    if (oCharNum === xCharNum){
      console.log(true);
      //console.log(oCharNum);
    }else if (oCharNum !== xCharNum){
      console.log(false);
    }else if (oCharNum===0 && xCharNum===0){
      console.log (true);
    }else if (oCharNum>0 && xCharNum===0){
        console.log(false)

    }


  }
  XO("ooxx") // true
  XO("xooxx") // false
  XO("ooxXm") // true
  XO("zpzpzpp")  // true
  XO("zzoo")  // false


 */

/****************************************
72- Mumbling (CODEWAR )
******************************************/
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

/*



function accum(s) {
    var char="";
    var IdexNum=""
    var text ="";

     for (var i=0; i<s.length; i++){
         char=s[i];
         IdexNum= i;
         for( var k=0; k<=i; k++){
             if (k===0) {
                 text +=char.toUpperCase();
                //document.write(text)
             }else {
                 text +=char.toLowerCase()
                //document.write(text)
             }

         }
         text+="-"

     // your code
   }

   document.write(text.slice(0,-1))

}

accum("abcd")


 */

/****************************************
72- Factorial  (CODEWAR )
******************************************/

/*

//solution 1
function myFunction(num){
    var sonuc=1;
    // if(num===0){
    //     return sonuc;
    // }
    for(let i=1; i<=num; i++){
        sonuc= sonuc*i;
        //console.log(sonuc)
    }
    return sonuc;
}

document.write(myFunction(0)+"<br>")
document.write(myFunction(3)+"<br>")
document.write(myFunction(5)+"<br>")



 */

//solution 2 with recursive function

/*

function factorial(n){
      if (n === 0)
     {
        return 1;
     }else {
        return n * factorial(n-1);

     }

}



console.log(factorial(0))
console.log(factorial(3))
console.log(factorial(5))
console.log(factorial(5));

/*
//solution 3



function factorialize(num) {
    if(num < 2) return 1;
    return num *= factorialize(num - 1);
  }

 */

/****************************************
73- reference letter  (CODEWAR )
******************************************/

/*

Find indexNum for each letter in parameter
Replace With Alphabet Position

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
alphabetPosition("The sunset sets at twelve o' clock.")

*/

/*


    function alphabetPosition(str) {
    var ref = "abcdefghijklmnopqrstuvwxyz"
    var store ;
    var text = [];
    for(let i=0; i<str.length; i++){
        store = str[i];
        if(ref.includes(store.toLowerCase()) ){
            //ref.indexOf(store.toLowerCase())
            text.push(ref.indexOf(store.toLowerCase())+1)
        }

    }
    return text;

}

document.write (alphabetPosition("The sunset sets at twelve o' clock."))
// document.write(alphabetPosition(";c)=>[ch"))
 */

/****************************************
74- Array.fill() method , Array.fill(value, staridx,endidx)
******************************************/
// Array.fill(value, staridx,endidx)
// ORIGINAL ARRAY I DEGISTIRI!!
//return array !!
/*

const ages = [0,1,2,3, 10, 18, 20];
const yas =["Emre","Kubra","Evin"];

console.log("original  ages array : "+ages)
console.log("original  yas array : "+yas)
console.log(ages.fill("emre",2,3));
console.log( ages.join("-")) // return string dondurur


let myfunction = function myfunction(par){
    return par>2;
} // gezerken return degerini true false olarak verir vergidigi degeri fill methodu ilere
//ages array ini degistiri.


console.log(ages.fill(myfunction(),1,2))


 */

/****************************************
75- Array.concat()
******************************************/
//Array.concat()  icine yazilan degeri array in en son elemani olarak ekler
// original array degerinin DEGISTIRMEZ !!

/*

const ages = [0,1,2,3, 10, 18, 20];
const yas =["Emre","Kubra","Evin"];

function myfunction(){

    //var total=0
    total = ages.concat(15);
    //total=ages.concat(yas);
    total=total.concat(yas);
    return total;

}
console.log(ages)
console.log(myfunction())


 */

/****************************************
76- findIndex(func) kullanimi
******************************************/
//findIndex(func) takes function as a parameter.
// KOSULU ILK SAGLAYAN DEGERIN index NUMARASINI BIZE VERIR

/*


const ages = [0,1,2,1, 10, 18, 20];
function myfunction(age) {
    return age>2;
    // return fonksiyonu donduruyor.
}
ages.findIndex(myfunction)
 //kosulu saglayan ilk sayinin index numarasini  function uzerinden bize dondurur.
console.log(ages.findIndex(myfunction))



 */

/****************************************
76- alphabetPosition(str)  (CODEWAR)
******************************************/
// verilen str parametresinin alfabe icerisindeki index numaralarini text array i
//icersinde bulma sorusu

/*



function alphabetPosition(str) {
    var ref ="abcdefghjklmnoqprstuvxyz"
    var store;
    var text=[];
    for (var i=0; i<str.length; i++){
      store=str[i]
      //console.log(store);
      if(ref.includes(store.toLowerCase())){
        text.push(ref.indexOf(store.toLowerCase()))
      }
    }

    return text;
  }

  document.write (alphabetPosition("The sunset sets at twelve o' clock."))


 */

/****************************************
77- ortByLength (array)   (CODEWAR)
******************************************/
//CODEWAR SORT ARRAY BT STRING LENGTH

/*



let array = [ "Telescopes", "Glasses", "Eyes", "Monocles"]
function sortByLength (array) {
    let store=[];
    let sortedstore =  [];


    var charNum;
    for(let i =0; i<array.length; i++){
        // console.log(array[i].length)
        charNum =(array[i].length);
        store.push(charNum);
        sortedstore.push(charNum)


         sortedstore.sort(function(a,b) {return a-b})
    }

    console.log (store); //return UNSORTEDSTORE ARRAY
    console.log (sortedstore) // Return  SORTEDSTORE  ARRAY, an array containing the same strings LENGTH NUMBERS , ordered from shortest to longest


  };
sortByLength(array) // call the function




 */

/****************************************
78- capitalize(s)   (CODEWAR)
******************************************/
//-----CODEWAR CAPITALIZA STRING WORLD

/*





function capitalize(s){
    let str1="";
    let str2="";
    let result12=[];
    for(let i=0; i<s.length; i++){
      if(i%2===0){
        str1+=s[i].toUpperCase()
      }else {
        str1+=s[i]
      }
    }
    console.log(str1)

      for(let i=0; i<s.length; i++){
      if(i%2===1){
        str2+=s[i].toUpperCase()
      }else {
        str2+=s[i]
      }
    }
    console.log(str2)

    result12.push(str1,str2)
    return result12


  };
  console.log(capitalize("abcdef"))




 */

/****************************************
79- reverseWords(str)   (CODEWAR)
******************************************/
//--------CODEWAR REVERSE stp parameter world to world
//   "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// [This,is,an,example!]

/*

function reverseWords(str) {
    strArray=str.split(" ");
    //console.log(strArray)
    let store="";
    for(let i=0; i<=strArray.length-1; i++){
        for(let k=strArray[i].length-1; k>=0; k--){
            store+=strArray[i][k];
            //console.log(store)
        }

        store+=" "; // kelimelr arasina bosluk birakir
    }

    return store.slice(0,-1); // slice method u enson kelimeden sonra gelen boslugu almamiza yariyor
    //return store


  }

  console.log(reverseWords("This is an example!"))
  console.log(reverseWords("double  spaces"))



 */

/****************************************
80- findSum(num)   (CODEWAR)
******************************************/
//-----Sum of all the multiples of 3 or 5
//Ammar a sorulucak ------------------MAXIMUM LENGTH DIFFERENCE
// our task is to write function findSum.
// Upto and including n,
// this function will return the sum of all multiples of 3 and 5.

// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

/*




function findSum(num) {
    var store;
    var total=0

    for (let i=1; i<=num; i++){
        if(i%3===0 || i%5===0){

            total+=i

        }
    }
    return total;

}

console.log(findSum(5))
console.log(findSum(10))



 */

/****************************************
81- mxdiflg(   (CODEWAR)
******************************************/

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// HINT :Find max(abs(length(x) − length(y)))

/*





a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]

function mxdiflg(a1,a2) {

    a1.sort(function(a,b){return b.length-a.length}) //maxtomin
    a2.sort(function (a,b){return a.length-b.length})//mintomax
    var a = a1[0].length//max
    var b= a2[0].length//min
    var c=a1[a1.length-1].length//min
    var d= a2[a2.length-1].length//max
    if(d-c>a-b){
        console.log(d-c)

    }else {
        console.log(a-b)

}

}
    mxdiflg(a1,a2)






 */

/****************************************
82- sumOfMinimums(arr)   (CODEWAR)
******************************************/
//-------codewar sum of minimums for arrays

/*
[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]

So, the function should return 26
because sum of minimums is as 1 + 5 + 20 = 26
*/

/*



arr=[[1,2,3,4,5],[5,7,8,9,10],[20,21,34,56,100]]

function sumOfMinimums(arr) {
    let store=[];
    let storeMin=0;
    for (let i=0; i<arr.length; i++){
        store=(arr[i])
        store.sort(function (a,b){return a-b})
        storeMin+=store[0]
    }

    return storeMin;
  }

  console.log(sumOfMinimums(arr))






 */

/****************************************
83- array1.reduce (func)  method  kullanimi
******************************************/

/*


const array1 = [1, 2, 3, 4]
var flatteren =array1.reduce(function(item,startVlaue) {return item+startVlaue});
console.log(flatteren)





 */

/****************************************
84- array1.map(func)  method  kullanimi
******************************************/

/*
const array1 = [1, 2, 3, 4]
var mpSample =array1.map(function(item) {return item*10});
console.log(mpSample)



 */

/****************************************
85- isAnagram = function(test, original)  (CODEWARS)
******************************************/
//-----CODEWAR ANAGRAM DETECTION

/*
An anagram is the result of rearranging the letters of a word
to produce a new word (see wikipedia).
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given
are anagrams of each other; return false otherwise.

"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

//solution

/*

var isAnagram = function(test, original) {
    if((test.toLowerCase().split("").sort()).join()===(original.toLowerCase().split("").sort()).join()){
        return true
    }else{
        return false
    }

};

console.log(isAnagram("foefet","toffee"))


 */

/****************************************
86- f(n) Parameter check   (CODEWARS)
******************************************/

//solution

/*

function f(n){
    //insert your code here.... and go crazy!
      var result=0;
      if (typeof n === "number"){
      for(let i=0; i<=n;i++){
        result+=i;
      }
        return result
        }else{
            return "parameter must be a number and positive integer "
        }

    };

console.log(f(10))
console.log(f("string"))


 */

/*

//solution 2


function f(n){//insert your code here.... and go crazy!

      var result=0;
      if (typeof n ==="number" && n>0 && Number.isInteger(n)){

      for(let i=0; i<=n;i++){
        result+=i;
      }
        return result
        }else if (typeof n==="string"){
          return false+", n must be a number"
        }else if (n === 0){
          return false+", n greater than 0 is requeired"
        }else if (n <0){
          return false+", positive value of n is required"
        }

};


console.log(f("3"))
console.log(f(10))
console.log(f("string"))





 */

/****************************************
87- repeater(string, n)    (CODEWARS)
******************************************/

/*

//solution


function repeater(string, n){
    //Your code goes here.
    var result=""
    for(let i=0; i<n; i++){
      result += string
    }
    return result
  }

  console.log(repeater("a",5))




 */

/****************************************
88- seven(times(five()))   (CODEWARS) -- Ammara sorulucak!!
******************************************/
////----------ONEMLI SOR  counter sorusu nested function
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

//solution :?

/****************************************
89- Jarden Case string (create new method for string )  (CODEWARS) -- Ammara sorulucak!!
******************************************/
//------ codewar    Jarden Case string (create new method for string )

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// var str = "How can mirrors be real if our eyes aren't real";
// str.toJadenCase() // "How Can Mirrors Be Real If Our Eyes Aren

//solution:?

/****************************************
90- rowSumOddNumbers(n) recursive function  (CODEWARS)
******************************************/
///---------recursive function

//solution:
/*



function rowSumOddNumbers(n) {
  if(n>0){
      console.log(n)
      n=n-1;
      rowSumOddNumbers(n)
  }else if(n===0){
      console.log("lift!")
  }
}
rowSumOddNumbers(5)


 */

/****************************************
91- reverseWords(str)  (CODEWARS)
******************************************/

//solution:
/*

function reverseWords(str) {
    strArray=str.split(" ");
    //console.log(strArray)
    let store="";
    for(let i=0; i<=strArray.length-1; i++){
        for(let k=strArray[i].length-1; k>=0; k--){
            store+=strArray[i][k];
            //console.log(store)
        }

        store+=" ";
    }

  return store.slice(0,-1)
  //return store;

    // Go for it
  }

  console.log(reverseWords("basbaydar"))


  console.log("basbaydar".split("").reverse().join(""))


 */

/****************************************
92- reducer(pValue,cValue) reduce() method
******************************************/
//solution :

/*



var arr = [1,2,3,4]
function  reducer(pValue,cValue) { return pValue+cValue}
console.log(arr.reduce(reducer,1))



 */

// //interpolattion easy way to interpolate variable
// ///${...}

/****************************************
93- str.toFixed(3) method
******************************************/

/*

let price = 10;
let VAT = 0.25;
let total4 = `Total: ${(price * (1 + VAT)).toFixed(3)}`;
console.log(total4)


 */

/****************************************
94- getProperty(obj, 'key') method
******************************************/

//   var output = getProperty(obj, 'key');

//   function getProperty(obj, key){
//       obj.key=a
//     var obj = {
//         key: 'value'
//       };

//    return obj.key
//   }
//   console.log(output)

/*

var obj ={
    key : 'value'
}
obj.colar = "blue";
// console.log(obj.key)
// console.log(obj.colar)
console.log(obj["key"],obj.key)




 */

/****************************************
95- object literal
******************************************/
/*

let emre = {
    'age ' : 30,
    name : 'Emre',
    greet(person){
        return 'Hello ' +person+ ', My name is '+this.name
        // this.name ayni object icin de bir propertye ulasmak icin this. parametresini kullanmamiz gereklidir
    },

}

console.log(emre.greet("veli"))



 */

/*************************************************
96- class object  (constructor) (Armagan caglayan)
**************************************************/

// a varialble called Person , assign to class object here!
// we assging a general function to Person class
// construction () function is special method  of a class
//for  creating and initializing an object instance of that class.

/*



Person = class {


    constructor(name,age){
        //console.log('Hi I am created, my name is: '+name+' my age is '+age)
        this.name = name;// burda name parametresinin objecnin bir property si olaran assign ettik
        this.age = age ; // age become a property of an object name , EMre or Mert defined
        this.meetups=[]
    }

    greet(person){
                 console.log('Hello '+person.name + ', My name is '+this.name)
        //         this.name ayni object icin de bir propertye ulasmak icin this. parametresini kullanmamiz gereklidir
    }

    attend(meetup) {
        //this.meetup = meetup // property of attend object
        //meetup.attendees = this
        this.meetups.push(meetup)
        meetup.attendees.push(this)

    }
}










emre = new Person('Emre',30)
mert = new Person('Mert',34)// declaring the mert variable to other object
mihri = new Person('Mihri', 28)



console.log(emre)
console.log(mert)



emre.greet(mert)// & decleration /assign
mert.greet(emre) //



  */

/****************************************
97- Meettup mimic
******************************************/
// creat a and mimic meetup then people can able to attend
// meetup should be attendable
//meetup is a class can take attendees; (sign up , attend the class

/*

Meetup = class {
    constructor(name){
        this.name = name ;
        this.attendees = []; //empty array, this is going to store list of attendees.
    }
    printAttendeeNames(){
        //console.log('printattendeeNames')
        // console.log(this.attendees[0].name)
        // console.log(this.attendees[1].name)
        // console.log(this.attendees[2].name)
        this.attendees.forEach(printName)

    }

}
printName = person => console.log(person.name, person.age)




// wtmb is a class take name parameter pass it into constructor function belongs to Meetup class
//wtmb is a variable but it is been declarated as a object of classs

wtmb = new Meetup('Women Techmakers Berlin')
//console.log(wtmb)

emre.attend(wtmb)
mert.attend(wtmb)
mihri.attend(wtmb)
emre.attend(wtmb)

wtmb.printAttendeeNames()





 */

/****************************************
98- wordsToMarks(string)
******************************************/
//------codewar  String num

/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/

/*


function wordsToMarks(string){
    //your code here
    let friendship=0;

  }

function wordsToMarks(string){
    //your code here
    let result=0;
    var ref ="abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<string.length; i++){
      ref.indexOf(string[i])+1
      result+=(ref.indexOf(string[i])+1)
    }

    return result;
    }

console.log(wordsToMarks("love"))




 */

/****************************************
99- pusheen() object literal , for in obj kullanimi
******************************************/
// object summary :

/*





var pusheen = {
    name:'pusheen',
    age:7,
    color: ["gray","taby"],

    siblings :{
    sister: 'stormy',
    brother: 'pip',
    },


    sound:'meow',
}


console.log(pusheen)
pusheen.owner1='meg'
pusheen['owner']='joe'
console.log(pusheen)




function check(obj,key) {
if( key in obj){

    return true;
    }else{
    return false;
    }

}
console.log(check(pusheen,'sound'))



delete pusheen['sound'];
if( 'sound' in pusheen){
    console.log (true+ 'her sound is :'+pusheen["sound"]);
    }else{
   console.log(false+" parameter sound is  not defined ");
    }


///// for in loop (used to loop over object)
for ( let key in pusheen){
    //  console.log("her "+key+" is "+pusheen[key])
    // console.log(pusheen[key])
}

console.log(Object.keys(pusheen))
let keys = Object.keys(pusheen)// array verir her property bir eleman olur arraya ait

for (let i=0; i<keys.length; i++){
    console.log(pusheen[keys[i]])
}









 */

/****************************************
100- countAllCharacters(str) (CODEWARS)
******************************************/

//solution 1

/*


function countAllCharacters(str) {
    // your code here
let result={}
let v=str.split('') //['b','a']
v.forEach(item=>{
    if(result[item]) result[item]++;
    else result[item]=1
});
return result;

 }

 console.log(countAllCharacters('banana'));





//solution 2

function countAllCharacters(str) {
    let arr=str.split(''); //['b','a','n','a','n','a']
    let result={};
for(let key in arr){ // key 0,1,2,3,4,..
if(result[arr[key]]) {//

    result[arr[key]]=result[arr[key]]+1;

}else {result[arr[key]]=1;

 }

}return result;

}

  console.log(countAllCharacters('banana'));










  //solution 3

function countAllCharacters(str) {
    // your code here
    arr=str.split("")
    let value=0;
    let output={};
    for(let i=0; i<arr.length; i++){
        if(output['arr[i]']){
            value++
            output=value;
        }

    }return output

  }
  console.log(countAllCharacters('banana'))






 */

/**************************************************
101- NESTED ARRAY [[]] TO OBJECT IN ARRAY [{OBJECT}]
***************************************************/

// var input = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ];

/*

var result = [
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

*/

/*


//SOLUTION :

var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

let result=[];

for(let i=0; i<input.length; i++){
    let obj={}
    for(let j=0; j<input[i].length; j++){
    obj[input[i][j][0]]=input[i][j][1]
    }
    result.push(obj);
}
console.log(result);







 */

/**************************************************
102- object {key:value} to array ["key"] ,['value'] convert  for (key in obj) kullanimi
***************************************************/

/*




//solution

var foo = { 'alpha' : 'puffin', 'beta' : 'beagle' };
console.log(foo)
var keys = [];
var value =[];
for (var key in foo) {
    keys.push(key);
    value.push(foo[key])
}
console.log(keys)
console.log(value)



 */

/**************************************************
103- findSmallestInt(args)  used reduct(prev,curr,index,arr) method
***************************************************/

/*


let args =[10,20,30,40]
function findSmallestInt(args){

args.reduce(function(prev,curr,index,array){prev<curr ? prev : curr });
return args[0]
}
console.log(args)





 */

/**************************************************
104- findSum(n)
***************************************************/
// 3 ile 5 in kati olan sayilarin toplami

/*


//solution

function findSum(n) {
    let result =0;
    for(let i=n; i>1; i--){
      if(i%3==0||i%5==0){
        result+=i
      }
    }
    return result;
  }

  console.log(findSum(10))


 */

/**************************************************
105- disemvowel(str)
***************************************************/

/*

//solution







  function disemvowel(str) {
    arr =str.split("")
  let ref=['a','e','o','u','i','A','E','O','U','I'];
    let result=''
  for(let i=0; i<arr.length; i++){
    arr[i]
    if(ref.includes(arr[i]) == 0){
      result+=arr[i]
    }

  }
  return result;
  }

  console.log(disemvowel("This website is for losers LOL!"))







 */

/**************************************************
106- squareDigits(num)
***************************************************/
//hint (squareDigit(9119) ==> 811181

/*


//solution1  :

function squareDigits(num){
    let result='';
    let str =String(num);

    for (let i=0; i<str.length; i++){
    let element = Number(str[i])*Number(str[i]);
      result+=element;

    }
      return Number(result);

    }


console.log(squareDigits(9119))




//solution2  :

function squareDigit(num) {
        let result = '';
        let char;
        numStr = String(num)
        for (let i=0; i<numStr.length; i++) {
             char = (Number(numStr[i])*Number(numStr[i])).toString() // string cevirir
            result+= char ;
        }return result
}

console.log(squareDigit(9119))



 */

/**************************************************
107- sumOfMinimums(array)
***************************************************/

/*



//solution:

function sumOfMinimums(array){
    let char;
    let sum =0;
    for(let i = 0; i<array.length; i++) {
    char = array[i].sort (function (a,b){return a-b})[0]
    sum+=char ;

    }return sum;

}

console.log(sumOfMinimums([[1,3,5,6,8],[5,20,34,6,10],[30,40,20,200,150]]))





 */

/**************************************************
108- onvertObjectToArray(obj){key :value }==>  [ ['key','value'] ]
***************************************************/

/*

//solution 1



function convertObjectToArray(obj) {
    // your code here
    let output = [];
    for (i in obj){
        //console.log(i)
       output.push([i,obj[i]])

    }console.log(output);
  }

  var input = {
    name: 'Holly',
    age: 35,
    role: 'producer'
  }

  convertObjectToArray(input)


 */

/**************************************************
109- digitize(n)
***************************************************/

/*






//solution 1

function digitize(n) {
    let newarray=[];
    let strnum=n.toString();
    for(let i=0; i<strnum.length; i++){
      newarray.push(Number(strnum[i]))
    }
    let rarray= newarray.reverse();
    return rarray;
    }


    console.log(digitize(348597))




    //solution 2
function digitize(n) {
    let str= n.toString();'232456'
    let result=[];
    if (n===0) return [0];
     for (i=str.length-1; i>=0; i--){
       result.push(Number(str[i]));

       }return result;
    }

console.log(digitize(348597))






 */

/**************************************************
110- wordsToMarks(string)
***************************************************/

/*

//solution
function wordsToMarks(string){
    //your code here
    let ref ='abcdefghijklmnopqrstuvwxyz'
    let store=0;
    for (let i=0; i<string.length; i++){
      store+=ref.indexOf(string[i])+1/// i will recieve index of the charaters number here

    }return store;
  }

  console.log(wordsToMarks('love'))



 */

/**************************************************
111- checkExam(array1, array2)
***************************************************/
/*



//solution

    function checkExam(array1, array2) {
        // good luck
        let result = 0;
         for(let i=0; i<array1.length; i++){
           if(array1[i] === array2[i] && array2 !== ""){
             result+=4;
           }else if (array1[i] !== array2[i] && array2[i] !== ""){
            result = result -1;
           } else  if (array2[i] === ''){
             result =result ;

           }

        }
        if(result >0) return result;
        if(result <=0) return 0;

    }

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))
console.log(checkExam(["a","c","b","b","a","c"],["a","a","a","","b","b"]))


 */
/**************************************************
112- sort method u (custom)
***************************************************/

/*
 function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]; /// gelen buyuk olan gereri tutmak icin
        arr[i] = arr[j]; //indecleri degistirildi
        arr[j] = temp;//
      }
    }
  }
  return arr;
}
console.log(sort([17,43,216,3,9,27]))
console.log(sort(['toad','patates','veli','zakkumm','tuna','ahmet','zeynep','12']))
 */

///====================
/*
var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2);
*/

// function isAnObject(input) {
//     // create an isObject variable
//     // assign it to whether the input is an object type
//     let isObject = (typeof input === "object" ) // true if is object
//     // create an isNotAnArray variable
//     // assign it to whether the input is not an array
//     let isNotAnArray = !Array.isArray(input) // true if is not array
//     // create an isObjectAndNotAnArray variable
//     // assign it to a combination of isObject AND isNotAnArray
//     let isObjectAndNotAnArray = (isObject === isNotAnArray) // true if both is true
//     // return the isObjectAndNotAnArray variable
//     return isObjectAndNotAnArray;
//   }

// console.log(isAnObject({name: 'Tom', friend: 'Jerry'}))
// console.log(isAnObject([1,2,3,]))
// console.log(typeof [1,2,3])

// var resultKeys = getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28});
// //console.log('should log ["firstScore", "secondScore", "thirdScore"]:', resultKeys);

// function getAllKeys(obj) {
//     // create a keys variable
//     let keys;
//     // assign it to an expression which will generate an array of all of the keys in obj
//     keys = Object.keys(obj)
//     // return to the keys variable
//     return keys;
//   }

// console.log(getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28}))
// // resultKeys()

// function getAllVlues(obj) {
//     // create a keys variable
//     let values;
//     // assign it to an expression which will generate an array of all of the keys in obj
//     values = Object.values(obj)
//     // return to the keys variable
//     return values;
//   }

//   console.log(getAllVlues({firstScore: 12, secondScore: 34, thirdScore: 28}))
// soulution 1 with recursive function
// function liftoff (n){

//     if(n>=1){
//         console.log(n)
//         n = n-1 ; // decrement the parameter
//         liftoff(n) // call the same function again

//     }else {
//         console.log("LIFTOFF!")
//     }

// }

var input = [
  [
    ["firstName", "Joe"],
    ["lastName", "Blow"],
    ["age", 42],
    ["role", "clerk"],
  ],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"],
  ],
]; /*

// function transformEmployeeData(employeeData) {
//     let result = [];

//      for (i in employeeData){
//          //employeeData[i]
//          let obj = {}
//          for (j in employeeData[i]){
//              obj[employeeData[i][j][0]] = employeeData[i][j][1];
//          }
//          result.push(obj) ;
//      }
//      return result ;

// }

// console.log(transformEmployeeData(input))

// function findAgent(agentList, agentToSearchFor) {
//     // if agentToSearchFor is present within agentList
//     if (agentList.indexOf(agentToSearchFor) > -1 ) {
//       // return '{agentToSearchFor} is present within Agent list'
//       return  agentToSearchFor+ 'is present within Agent list';
//     }

//   }

//   var result1 = findAgent(['001', '005', '007', '009'], '007');
// console.log('should log "007 is present within Agent list":', result1);

// var result2 = findAgent(['tiny', 'teeny', 'eeny', 'meany'], 'teeny');
// console.log('should log "teeny is present within Agent list":', result2);

// var result3 = findAgent(['red', 'blue', 'green'], 'orange');
// console.log('Should log undefined, because function returned nothing:', result3);

// function generateReportSummary(reportTotals, teamName) {
//     var teamTotal = reportTotals[teamName] ;
//   // if teamName's report total is greater than 5
//   if (teamTotal > 5) {
//     // return '{teamName} has surpassed goal with {number_of_reports_for_team} reports'
//     return teamName + ' surpassed goal with ' + teamTotal + ' reports';

//     }
//   }

//   var result1 = generateReportSummary({a_team: 12, b_team: 7, c_team: 0}, 'b_team');
// console.log('should log "b_team has surpassed goal with 7 reports":', result1);

// var result2 = generateReportSummary({blue: 18, red: 8, green: 12}, 'blue');
// console.log('should log "blue has surpassed goal with 18 reports":', result2);

// var result3 = generateReportSummary({gamma: 1, epsilon: 3, alpha: 4, bravo: 17}, 'alpha');
// console.log('Should log undefined, because function returned nothing:', result3);

// function isItTruthy(param) {
//     // if param is truthy
//     if (param) {
//           // return 'Input is truthy'
//       return  ' is truthy';
//     }
//     // otherwise
//     else {
//           // return 'Input is falsy'
//       return param+' is falsy'
//     }

//   }

// var result1 = isItTruthy('anything');
// console.log('should log "Input is truthy":', result1);

// var result2 = isItTruthy();
// console.log('should log "Input is falsy":', result2);

// var result3 = isItTruthy("");
// console.log('should log "Input is falsy":', result3);

// var result4 = isItTruthy(false);
// console.log('should log "Input is falsy":', result4);

// function measureRequiredFruit(fruitTotals) {
//     let totalBananas = fruitTotals['bananas']
//     let totalStrawberries = fruitTotals['strawberries']
//     // if there are more than 3 bananas and more than 10 strawberries
//     if (totalBananas > 3 && totalStrawberries > 10) {
//         // return 'We have enough fruit, with {totalBananas} bananas, and {totalStrawberries} strawberries'
//     return 'We have enough fruit, with '+totalBananas+' bananas, and '+totalStrawberries+' strawberries'

//     }else {
//         // otherwise
//     return 'We do not have enough of both fruits'

//     }
//   }

//   var result1 = measureRequiredFruit({bananas: 4, strawberries: 12});
// console.log('should log "We have enough fruit, with 4 bananas, and 12 strawberries":', result1);

// var result2 = measureRequiredFruit({bananas: 5, strawberries: 15});
// console.log('should log "We have enough fruit, with 5 bananas, and 15 strawberries":', result2);

// var result3 = measureRequiredFruit({bananas: 2, strawberries: 12});
// console.log('should log "We do not have enough of both fruits":', result3);

// var result4 = measureRequiredFruit({bananas: 5, strawberries: 8});
// console.log('should log "We do not have enough of both fruits":', result4);

// var result5 = measureRequiredFruit({bananas: 3, strawberries: 9});
// console.log('should log "We do not have enough of both fruits":', result5);

// function balancePets(dogs, cats) {
//     // if there are more than 8 dogs and fewer than 9 cats
//     if (dogs>8 && cats<9) {
//         // return 'number of cats and dogs is acceptable'
//     return 'number of cats and dogs is acceptable'
//     } else {
//          // otherwise
//       // return 'number of cats or dogs is not acceptable'
//     return 'number of cats or dogs is not acceptable'
//     }

//   }

// var result1 = balancePets(9, 8);
// console.log('should log "number of cats and dogs is acceptable":', result1);

// var result2 = balancePets(7, 12);
// console.log('should log "number of cats or dogs is not acceptable":', result2);

// var result3 = balancePets(7, 7);
// console.log('should log "number of cats or dogs is not acceptable":', result3);

// var result4 = balancePets(5, 14);
// console.log('should log "number of cats or dogs is not acceptable":', result4);

// function selectShirtSize(choice) {
//     if (choice >= 20 && choice < 30 ) return 'You should select a size S'
//     else if (choice >= 30 && choice < 40 ) return 'You should select a size M'
//     else if (choice >= 40 && choice < 50 ) return  'You should select a size L'
//     else return 'You should select a different shirt'
//     // if shirt is greater than or equal 20 and less than 30
//       // return 'You should select a size S'
//     // otherwise if shirt is greater than or equal to 30 and less than 40
//       // return 'You should select a size M'
//     // otherwise if shirt is greater than or equal to 40 and less than 50
//       // return 'You should select a size L'
//     // otherwise
//       // return 'You should select a different shirt'
//   }

//   var result1 = selectShirtSize(25);
// console.log('should log "You should select a size S":', result1);

// var result2 = selectShirtSize(32);
// console.log('should log "You should select a size M":', result2);

// var result3 = selectShirtSize(47);
// console.log('should log "You should select a size L":', result3);

// var result4 = selectShirtSize(12);
// console.log('should log "You should select a different shirt":', result4);

// var result5 = selectShirtSize(67);
// console.log('should log "You should select a different shirt":', result5);

// function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
//     let excessTomatoes = Math.abs(stockTomatoes - recipeMinimums['tomatoes']) ;
//     let excessOnions = Math.abs(stockOnions - recipeMinimums['onions']);

//     if (stockTomatoes < recipeMinimums['tomatoes'] &&  stockOnions < recipeMinimums['onions']) {return 'We need more tomatoes and more onions.'}
//     else if (stockTomatoes < recipeMinimums['tomatoes'] && stockOnions > recipeMinimums['onions']) {return 'We have enough onions, but need more tomatoes.'}
//     else if (stockTomatoes > recipeMinimums['tomatoes'] && stockOnions < recipeMinimums['onions']) {return 'We have enough tomatoes, but need more onions.'}
//     else {return 'We have enough tomatoes and onions. There will be ' +excessTomatoes+ ' extra tomato, and '+excessOnions+' extra onion.'}
//     // if stock of tomatoes and stock of onions are both less than minimum
//       // return 'We need more tomatoes and more onions.'
//     // otherwise if stock of tomatoes is less than minimum but stock of onions is sufficient
//       // return 'We have enough onions, but need more tomatoes.'
//     // otherwise if stock of tomatoes is sufficient but stock of onions is less than minimum
//       // return 'We have enough tomatoes, but need more onions.'
//     // otherwise
//       // return 'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato, and {excessOnions} extra onion.'
//   }

// var result1 = verifyStock({tomatoes: 3, onions: 7}, 5, 8);
// console.log('should log "We have enough tomatoes and onions. There will be 2 extra tomato, and 1 extra onion.":', result1);

// var result2 = verifyStock({tomatoes: 5, onions: 1}, 10, 4);
// console.log('should log "We have enough tomatoes and onions. There will be 5 extra tomato, and 3 extra onion.":', result2);

// var result3 = verifyStock({tomatoes: 2, onions: 4}, 1, 1);
// console.log('should log "We need more tomatoes and more onions.":', result3);

// var result4 = verifyStock({tomatoes: 4, onions: 2}, 3, 4);
// console.log('should log "We have enough onions, but need more tomatoes.":', result4);

// var result5 = verifyStock({tomatoes: 10, onions: 6}, 11, 4);
// console.log('should log "We have enough tomatoes, but need more onions.":', result5);

// function generateCombinations(array1, array2) {
//     // create a loop which iterates over the first array
//     for (let i =0; i<array1.length; i++){
//         for (let j=0; j<array2.length; j++){
//             console.log(array1[i]+" "+array2[j])
//         }
//     }
//       // create an inner loop which iterates over the second array
//         // log current element of first array and current element of second array
//         //to the console with space in between
//   }

/*

generateCombinations(['a', 'b', 'c'], ['d', 'e', 'f']);
// console output:
  // a d
  // a e
  // a f
  // b d
  // b e
  // b f
  // c d
  // c e
  // c f

generateCombinations([1, 2], ['buckle', 'my', 'shoe']);
// console output:
  // 1 buckle
  // 1 my
  // 1 shoe
  // 2 buckle
  // 2 my
  // 2 shoe
  */

//   function createSentence(words) {
//     var sentence = "";
//     let result = '';
//   for (var i = 0; i < words.length; i++) {
//     // hint: does this line need to happen every iteration?
//     sentence += words[i] + ' ';
//   }
//   sentence.slice(0,-1);
//   sentence+='.'
//   return sentence;
// }

// var result1 = createSentence(['I', 'am', 'worth', 'it']);
// console.log('should log "I am worth it.":', result1);

// function countWords(stringOfWords) {
//     // your code here
//     arrOfWord = stringOfWords.split(" ")

//     resultObj ={};
//     for (let i=0; i<arrOfWord.length; i++){
//         currentChar = arrOfWord[i];
//         if(resultObj[currentChar] === undefined){
//             resultObj[currentChar] = 1;
//         }else {
//            resultObj[currentChar]++
//         }
//     }
//     return resultObj;
// }

// function countAllCharacters(string) {
//     // your code here
//     obj = {};
//     if(string.length === 0){
//         return {};
//     }
//     for (let i=0; i<string.length; i++){
//         if(obj[string[i]]=== undefined){
//             obj[string[i]] = 1;
//         }else{
//             obj[string[i]]++;
//         }
//     }
//     return obj
//   }

// var result1 = countAllCharacters('banana');
// console.log('should log "{b: 1, a: 3, n: 2}":', result1);

// var result2 = countAllCharacters('');
// console.log('should log "{}":', result2);

// function applyParseFloat(numString) {
//     // create a result variable
//     let result;
//     // assign it to parsed float from input string
//     result =Number.parseFloat(numString)
//     // return result
//     return result;
//   }

// console.log(applyParseFloat('21ee23emree445'))

// function applyGreaterThan(num1, num2) {
//     // create a result variable
//     let result;
//     // assign it expression comparing if num1 is greater than num2
//     result = (num1>num2)
//     // return result
//     return result;
//   }

//   console.log(applyGreaterThan(9, 10) )

// function removeFromBackOfNew(arr) {
//     // your code here
//     let slicedA =arr.slice(0,2)
//     return slicedA;
//   }

// var arr = [1, 2, 3];
// var output = removeFromBackOfNew(arr);
// console.log(output); // --> [1, 2]
// console.log(arr); // --> [1, 2, 3]

// function countWords(str) {
//     // your code here

//     let arr = str.split(" ")
//     console.log(arr)
//     let obj ={}
//     if(arr.length === 0){
//       return {}
//     }else{
//     for (let i=0; i<arr.length; i++){
//         if (obj[arr[i]] === undefined){
//             obj[arr[i]]= 1
//         }else {
//             obj[arr[i]]++
//         }
//       }
//       return obj
//     }

//   }

// var output = countWords('ask a bunch get a bunch');
// console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

// function isEitherEvenOrAreBoth7(num1, num2) {
//     // your code here
//     return  (num1%2 === 0 ||num2%2 === 0) || (num1 ===7 || num2 ===7)
//   }

// var output = isEitherEvenOrAreBoth7(3, 7);
// console.log(output); // --> false

// var output = isEitherEvenOrAreBoth7(2, 3);
// console.log(output); // --> true

// var output = isEitherEvenOrAreBoth7(5, 5);
// console.log(output); // --> false

// var output = isEitherEvenOrAreBoth7(7, 7);
// console.log(output); // --> true

// function extend(obj1, obj2) {
//     // your code here
// //    let obj1Key = Object.key(obj1) // ['a','b','c']
// //    let obj2Key = Object.key(obj2)//['b',c]
//   for (let i in obj2) {
//       if ( !(Object.keys(obj1).includes(i)) ){
//           obj1[i] = obj2[i]
//       }

//   }
//   return obj1
//   }

//   var obj1 = {
//     a: 1,
//     b: 2
//   };
//   var obj2 = {
//     b: 4,
//     c: 3
//   };

//   extend(obj1, obj2);

//   console.log(obj1); // --> {a: 1, b: 2, c: 3}
//   console.log(obj2); // --> {b: 4, c: 3}

// function removeArrayValues(obj) {
//     // your code here
//     let result ={};
//     for (let i in obj){
//         //console.log(i)
//         //console.log(obj[i])
//         if (Array.isArray(obj[i])){
//             delete obj[i]
//         }
//       }
//       return obj
//     }
//     var obj = {
//         a: [1, 3, 4],
//         b: 2,
//         c: ['hi', 'there']
//       }
//       console.log(removeArrayValues(obj));
//       //console.log(obj); // --> { b: 2 }

//   function removeNumberValues(obj) {
//     // your code here
//       for (let i in obj){
//           //console.log(i)
//           //console.log(obj[i])
//           if (typeof obj[i] === 'number'){
//               delete obj[i]
//           }
//         }
//         console.log(obj)

//   }

//   var obj = {
//     a: 2,
//     b: 'remaining',
//     c: 4
//   };
//   removeNumberValues(obj);
//   console.log(obj); // --> { b: 'remaining' }
//   console.log(typeof obj["a"])

//     function convertDoubleSpaceToSingle(str) {
//         // your code here
//         let arr = str.split("  ") ; //["string","with",'double',...]
//         let result='';
//         for (let i=0; i<arr.length; i++){
//             result+= arr[i]+' ';

//         }
//         return result.trimEnd()

//       }

// var output = convertDoubleSpaceToSingle("string  with  double  spaces");
// console.log(output); // --> "string with double spaces"

// function addToBackOfNew(arr, element) {
//     // your code here
//     let result = [];
//     for (let i =0; i<arr.length; i++){
//         result.push(arr[i])
//     }
//     result.push(element)
//     return result
//   }

//   var input = [1, 2];
// var output = addToBackOfNew(input, 3);
// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]

// function getIndexOf(char, str) {
//     // your code here
//     return str.indexOf(char)

//   }

//   var output = getIndexOf('a', 'I  am a hacker');
// console.log(output); // --> 2

// function getLongestOfThreeWords(word1, word2, word3) {
//     // your code here
// if(word1.length === word2.length && word1.length === word3.length ){
//     return word1;
// }else if (word1.length > word2.length && word1.length > word3.length){
//     return word1;
// }else if (word2.length > word1.length && word2.length > word3.length){
//     return word2;
// }else if (word3.length > word1.length && word3.length > word2.length){
//     return word3
// }

// }

// var output = getLongestOfThreeWords('these', 'threem', 'words22');
// console.log(output); // --> 'these'
// //console.log('these'.length)

// function select(arr, obj) {
//     // your code here
//     let obj1={};
//     for(let i in obj){
//         if(arr.includes(i)){
//             obj1[i] = obj[i]
//         }
//     }
//     return obj1;

//   }
// function select(arr, obj) {
//     // your code here
//     let obj1={};
//     for (let i in obj){
//     if(arr.includes(i)){
//         obj1[i] = obj[i]
//     }
//   }

//  return obj1;

// }

// //var arr = ['a', 'c', 'e'];
// var arr = ['e', 'f', 'g'];

// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };
// var output = select(arr, obj);
// console.log(output); // --> { a: 1, c: 3 }

// function filterEvenLengthWords(words) {
//     // your code here
//     let result = [];
//     for (let i=0; i<words.length; i++){
//         if (words[i]%2 === 0){
//             result.push(words[i])
//         }
//     }
//     return result;
//   }

// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
// console.log(output); // --> ['word', 'word']

// function greet(){
//     return function () {
//         console.log("HELLO WORD!")

//     }
// }
// let msg =greet()
// let msg1 =greet;
// console.log(msg)
// console.log(msg1)

//=======High order function =======//

// if the function take an orher function as a
// parameter it is called high order function,

// let birtYears = [1989,2007,1991];
// function getResultArray(arr,callback){
//     let result=[];
//     for (let i=0; i<arr.length; i++){
//         let val = callback(arr[i]);
//         result.push(val);
//     }
//     console.log (result)
// }

// function calcAge (birtYear) {
//     return new Date().getFullYear() - birtYear;

// }

// console.log(calcAge(1991))
// getResultArray(birtYears,calcAge)

// // getResultArray(birtYears,calcAge)

// function getLongestElement(arr) {
//     // your code here
//     let result = arr.sort(function(a,b){return b.length-a.length})
//     console.log(result)
//     return result[0]
//   }

// var output = getLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 'three'

// function filterEvenElements(arr) {
//     // your code here
//     let result = arr.filter(function(elem,index,ar){
//         return  elem % 2 === 0;

//     })

//     return result;

// }

// var output = filterEvenElements([2, 3, 4, 5, 6]);
// console.log(output); // --> [2, 4, 6]

// function findSmallestElement(arr) {
//     // your code here
//     arr.sort(function(a,b){return a-b})
//     return arr[0]
//   }

// function findSmallestElement(arr) {
//     // your code here
//     let smallestNum = arr[0]
//     if (arr.length === 0){return 0}
//     arr.filter(function(elem,index,arr){
//    if (elem<smallestNum){
//     smallestNum = elem; // reassing the smallestNum here;
//    }

//     })

//     return smallestNum;

// }

// var output = findSmallestElement([4, 1, 9, 10]);
// console.log(output); // --> 1

// function findShortestElement(arr) {
//     // your code here
//     arr.sort(function(a,b){return a.length- b.length})
//     return arr[0]
//   }
//   var output = findShortestElement(['a', 'two', 'three']);
//   console.log(output); // --> 'a'

//   array1=['a','BNC','ab']
//   console.log(typeof array1[0])

// function getElementsThatEqual10AtProperty(obj, key) {
//     // your code here
//     if (obj[key].length === 0){return []}

//     let result = [];
//     for(let i of Object.values(obj)){
//         for(let j=0; j<i.length; j++){
//             if(i[j] === 10){
//                 result.push(i[j])

//             }
//         }
//     }
//     return result;
//   }

//   var obj = {
//     key: [1000, 10, 50, 10]
//     //key: 1000
//   };
//   var output = getElementsThatEqual10AtProperty(obj, 'key');
//   console.log(output); // --> [10, 10]
// //   console.log(Object.keys(obj))
// //   console.log(Object.values(obj))

// function countAllCharacters(str) {
//     // your code here
//     let obj ={};
//     for (let i=0; i<str.length; i++){
//         if(obj[str[i]] === undefined){
//             obj[str[i]] =1;
//         }else{
//              obj[str[i]] += 1;
//         }
//     }
//     return obj;
//   }

// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}

// function getElementsGreaterThan10AtProperty(obj, key) {
//     // your code
//         if (obj[key].length === 0){return []}

//       let result = [];
//       for(let i of Object.values(obj)){
//           for(let j=0; j<i.length; j++){
//               if(i[j] > 10){
//                   result.push(i[j])

//               }
//           }
//       }
//       return result;
//     }
//     var obj = {
//         key: [1, 20, 30]
//       };
//       var output = getElementsGreaterThan10AtProperty(obj, 'key');
//       console.log(output); // --> [20, 30]

// function getFirstElementOfProperty(obj, key) {
//     // your code here
//     if (key.length === 0 )  {return undefined}
//     if (!Array.isArray(obj[key]))  {return undefined}

//       let smallestNum = obj[key][0];
//       for(let i of Object.values(obj)){
//           for(let j=0; j<i.length; j++){
//               if(i[j] < smallestNum){
//                   smallestNum = i[j]

//               }
//           }
//       }
//       return smallestNum;

//   }

//   var obj = {
//     key: [1, 2, 4]
//   };
//   var output = getFirstElementOfProperty(obj, 'key');
//   console.log(output); // --> 1

// function mapfunc(arr){
//     let result = arr.map(function(elem,index,arr){
//         return elem*2;
//     })
//     return result;
// }

// console.log(mapfunc([2,4,6,8,10,12]))

// let birthYears =[1990,1998,2007,1999,2003];
//  console.log(birthYears)
// // let ages =[]
// // for (let year of birthYears){
// //     let age =2021-year;
// //     ages.push(age)

// // }
// // console.log(ages)
// //===map() method is a High orde function
// let ages =birthYears.map(function(elem,index,arr){
//    return  2021-elem;
// })
// console.log(ages)

// // === forEac() DOES NOT return array we need to create an array before use the forEach method
// let ages1=[];
// birthYears.forEach(function (elem,index,arr) {
//    return  ages1.push(2021-elem)

// })
// console.log(ages)

// let names =[ 'jhon', 'mike', 'sarah', 'steve', 'marry']
// //Employee map
// let employee = new Map([
//     ['empId', 101],
//     ['name', 'steve'],
//     ['gender', 'Male'],
//     ['salary', 20000],

// ]);
// //console.log(employee)

// // roles set
// let roles = new Set (['Admin', 'Readonly', 'ReadWrite']);
// // looping over an ARRAY
// // names.forEach(function (elem,index,arr) {
// //     console.log(elem)

// //})

// //looping over a map
// employee.forEach(function (value,key,Map) {
//     console.log('Value of ' +key+ ' is '+ value)
// })

// ///looping over a set
// console.log(roles)
// console.log(typeof roles)
// roles.forEach(function(entry,key,set){
//     console.log(entry+' : '+ key)
// })

//=====WHAT IS THE SET METHOD========//
//set is unique values
// colletion of unique values

// creating a new Set();

// let cities = new Set([
//   "london",
//   "mumbai",
//   "tukey",
//   "london",
//   "delhi",
//   "new york",
//   "delhi",
//   "london",
// ]);
// console.log(cities);
// cities.forEach(function (entry) {
//   console.log(entry);
// });
// console.log("==========");
// for (let i of cities) {
//   console.log(i);
// }
// let randonData =  new Set([12,true,'hello',null])
// console.log(randonData)

// string is itterable
// let str1 = new String('Hello')
// console.log(str1)

// let str = new Set(new String('Hello'))
// let str2 = new Set('Hello')
// console.log(str)
// console.log(str2)

// === new Set() transfer to Array []
// let names = ["jhon", "mike", "mark", "mark", "marry", "mark"];
// let nameSet = new Set(names);
// console.log(nameSet);

// let uqnamesArray = [...nameSet]; // spread operator it help us transfet set variable to an Array
// console.log(uqnamesArray);

// // 2. COUNTING  NUMBER OF UNIQUE CHARACHTERS IN A STRING
// let str = "This is a uniques characters";
// let uqstr = new Set(str);
// console.log(uqstr);
// console.log(
//   "Number of uniques character with space characters : " + uqstr.size
// );
// //console.log(uqstr.size)
// uqstr.delete(" ");
// console.log(uqstr.size + " <<<without space character "); // number of unique characters

////======= codewar wordreverse by number =====

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function stringReverse(str) {
//   let arr = str.split(" ");
//   console.log(arr);
//   if (arr.length === 0) {return "";}

//   let store =[];
//   let result =[];

//   for(let i=0; i<arr.length; i++){
//       for(let j=0; j<arr[i].length; j++){
//           if (parseInt(arr[i][j])) {
//               store.push(arr[i][j])
//           }
//       }
//   }
//   storeSirali = store.sort()

//   for(let i of storeSirali){
//     for(let j=0; j<arr.length; j++){
//         if (arr[j].includes(i)) {
//             result.push(arr[j])

//         }
//     }
// }
// return result.join(" ");
// }

// function order(words){
//     var array = words.split(' ');

//     var sortedArray = [];
//     for(i = 0; i <= array.length; i++) {
//       for(j = 0; j < array.length; j++) {
//         if(array[j].indexOf(i) >= 0) {
//           sortedArray.push(array[j]);
//         }
//       }
//     }
//     return sortedArray.join(' ');
//   }

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))

// Array.prototype.square = function() {
//     let arr =[];
//     for (let i=0; i<this.length; i++){
//         arr.push(this[i]**2)
//     }
//     console.log(arr);
// }

// Array.prototype.cube = function() {
//     let arr =[];
//     for (let i=0; i<this.length; i++){
//         arr.push(this[i]**3)
//     }
//     console.log(arr);
// }
// Array.prototype.average = function() {
//     let sum =0;
//     for (let i=0; i<this.length; i++){
//         sum+=this[i]

//     }
//     console.log(sum/this.length);
// }
// Array.prototype.sum = function() {
//     let sum =0;
//     for (let i=0; i<this.length; i++){
//         sum+= this[i]
//     }
//     console.log(sum);
// }
// Array.prototype.even = function() {
//     let even =[]
//     for (let i=0; i<this.length; i++){
//         if(this[i] % 2 === 0){
//             even.push(this[i])
//         }
//     }
//     console.log(even);
// }
// Array.prototype.odd = function() {
//     let odd =[]
//     for (let i=0; i<this.length; i++){
//         if(this[i] % 2 === 1){
//             odd.push(this[i])
//         }
//     }
//     console.log(odd);
// }

// let numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

// var customerData = {
//     'Joe': {
//       visits: 1
//     },
//     'Carol': {
//       visits: 2
//     },
//     'Howard': {
//       visits: 3,
//     },
//     'Carrie': {
//       visits: 4
//     }
//   };

//   function greetCustomer(firstName) {
//     // your code here
//     if (customerData[firstName]){
//         if (customerData[firstName]['visits'] === 1){
//             return `Welcome back, ${firstName}! We're glad you liked us the first time!`
//         }else {
//             return `Welcome back, ${firstName}! So glad to see you again!`
//         }

//     }else {
//         return `Welcome! Is this your first time?`
//     }

//   }

//   console.log(greetCustomer('Joe'))
//   console.log(greetCustomer('Terrance'))

// function order(str) {
//     let arr = str.split(" ");
//     console.log(arr);
//     if (arr.length === 0) {return "";}

//     let store =[];
//     let result =[];

//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr[i].length; j++){
//             if (parseInt(arr[i][j])) {
//                 store.push(arr[i][j])
//             }
//         }
//     }
//     storeSirali = store.sort()

//     for(let i of storeSirali){
//       for(let j=0; j<arr.length; j++){
//           if (arr[j].includes(i)) {
//               result.push(arr[j])

//           }
//       }
//   }
//   return result.join(" ");
//   }

// function getOddLengthWordsAtProperty(obj, key) {
//     // your code here
//     result =[];
//     if (obj[key] === undefined){return []}
//     if (obj[key].length === 0 ){return []}
//     if (!(Array.isArray(obj[key]))){return []}

//    for(let i=0; i<obj[key].length; i++){
//        if(obj[key][i].length % 2 === 1){
//            result.push(obj[key][i])
//        }
//    }
//    return result
//   }

//   var obj = {
//     // key: ['It', 'has', 'some', 'words'],
//     // key: "It has some words",
//     kal: 'fghjkl',
//   };

//   var output = getOddLengthWordsAtProperty(obj, 'key');
//   console.log(output); // --> ['has', 'words']

//   var customerData = {
//     'Joe': {
//       visits: 1
//     },
//     'Carol': {
//       visits: 2
//     },
//     'Howard': {
//       visits: 3,
//     },
//     'Carrie': {
//       visits: 4
//     }
//   };

//     function greetCustomer(firstName) {
//       // your code here
//       if (customerData[firstName]){
//           if (customerData[firstName]['visits'] === 1){
//               return `Welcome back, ${firstName}! We're glad you liked us the first time!`
//           }else {
//               return `Welcome back, ${firstName}! So glad to see you again!`
//           }

//       }else {
//           return `Welcome! Is this your first time?`
//       }

//  }

//   var customerData = {
//     'Joe': {
//       visits: 1
//     },
//     'Carol': {
//       visits: 2
//     },
//     'Howard': {
//       visits: 3,
//     },
//     'Carrie': {
//       visits: 4
//     }
//   };

//  /* for(let key in customerData){
//       console.log(key)
//   }  */
//   function greetCustomer(firstName) {
//       if(customerData[firstName]===undefined) return `Welcome! Is this your first time?`
//       for(let key in customerData){
//               if(customerData[key]['visits']===1){
//                return  `Welcome back, ${firstName}! We're glad you liked us the first time!`
//               }
//               else if(customerData[key]['visits']>1)
//               return `Welcome back, ${firstName}! So glad to see you again!`
//           }

//       }
//       // return `Welcome! Is this your first time?`

//   console.log(greetCustomer('Joe'))
//   console.log(greetCustomer('Howard'))
//   console.log(greetCustomer('Marry'))

// function Vehicle(LicensePlate, colar){
//     this.LicensePlate = LicensePlate;
//     this.colar =colar;
// }
// Vehicle.prototype.beep = function (){
//     return 'BEEP BEEP';
// }
// Vehicle.prototype.changeColar = function(param){
//     return this.colar = param
// }

// let veysel =new Vehicle (22589, 'blue')

// console.log(veysel)

// veysel.changeColar('yellow')

// console.log(veysel)
// console.log(veysel.beep())

// let product = [
//     {name:'hammer', price:2.30, rating:4.3},
//     {name:'chisel', price:4.30, rating:1.3},
//     {name:'level', price:3.45, rating:5.2},
//     {name:'veysel', price:2.30, rating:3.9}

// ]

/*
rating i 4 te buyuk olanlari true donsun kucuk olanlari false donsun
*/
// product.map(value=>value.rating>4)
//[{name:product.name ,on_sale:true}]

// [
//{name:'hammer',on_sale:true},
//{name:'chisel',on_sale:false},
//{name:'level',on_sale:true},
//{name:'veysel',on_sale:false}
// ]

// let map12 =product.map(function(elem){
//     return elem['rating']>4;

// })

// console.log(map12)

// let mapSample = product.map(function(elem,index,arr){
//     if (elem['rating']>4 ) {
//          elem['on_sale'] = true;
//          delete elem['rating'];
//          delete elem['price'];
//     }else {
//         elem['on_sale'] =false;
//         delete elem['rating'];
//         delete elem['price'];
//     }

// })
// console.log(product)
//console.log(mapSample)

// let veyselsolution=product.map(obj=>{
//     let veysel={};
//     veysel.name=obj.name;
//   veysel.on_sale=(obj.rating>4)
//     return veysel;
// });
// console.log(veyselsolution)

// let arr =[22,33,44,55]
// ;

// /*  [
//     {index :0, value:22 }
//     {index :1, value:33 }
//     {index :2, value:44 }
//     {index :3, value:55 }

// ] */

// let obj=arr.map(function(elem,indx,arr){

//     return {index : indx, value :elem}
// })

// console.log(obj)

//==== DATE AND TIME IN JAVASCRIPT

// let now = new Date(); // Date method is a constructor object of window. already built in
// console.log(now) // show as a string, return string
// console.log(now.getTime())
// console.log(now.getFullYear())
// console.log(now.getMonth())

// let d1 = new Date(24*60*60*1000) // to add one day to starting date 31 dec 1979 time 16.00 Pacific standart time.
// console.log(d1)
// console.log(d1.getTime())

// let d2 = new Date(-24*60*60*1000)
// console.log(d2)
// console.log(d2.getTime())

// ///passing a string value

// let d3 = new Date('2017-05-03 04:40:40')
// console.log(d3)

// //year, month, date, hours, minutes,seconds, ms
// let d4 = new Date(2021,11,19,5,30,12)
// console.log(d4)

// let d5 = new Date(2017,0)
// console.log(d5)

// //===== Method of date and time =====//

// let now = new Date()
// console.log(now)
// console.log(now.getTime())
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getDay()) /// returs between 0,..6

// let months =['January', 'February', 'March', 'April', 'May','june', 'July', 'August', 'September','October','November', 'December']
// console.log(months[now.getMonth()])
// let days = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
// console.log(days[now.getDay()])

// //=== set method ====//

// now.setFullYear(2021)
// console.log(now)
// now.setMonth(11)
// console.log(now)

// // === compare dates ===//

// let d1 = new Date();
// let d2 = new Date(2017,2,25)
// console.log(d1)
// console.log(d2)

// console.log(d1 > d2)

// let arr = [10,20,30]
// console.log(arr)

//===CLASS===//
//2.class expression

// let Person = class{

// }

// 1.Class decleration
// blue -print  || constructoc class

// class Person {
//     constructor(name,birtYear, gender){
//         this.name = name;
//         this.birtYear = birtYear;
//         this.gender = gender;
//     }

//     //  calcage(){
//     //         console.log(new Date().getFullYear()-this.birtYear)
//     //     }

// }
// //creating method out of classs
// //inherite a fucntion called calcage from Person Class

// Person.prototype.calcage=function (){
//     console.log(new Date().getFullYear()-this.birtYear)
// }

// Person.prototype.greet = function (){
//     console.log('Good Morning '+this.name)
// }

// let john = new Person('jhon', 1991, 'Male')
// console.log(john)
// john.greet()
// john.calcage()

// let Merry = new Person('Merry', 1995, 'female')
// console.log(Merry)

// let nameUpperCase = john.name.toUpperCase()
// console.log(nameUpperCase)

// let age = john.calcage()
// console.log(age)

// 1.classes cannot be hoisted  -
//you shuold declera this class constructor first then you may creat the object from class

/*
//====== getter && setter ======//


//1. getter access of property
//2. settter
// Encapsulation hide the data from outside the world
let John = {
    name : 'john',
    birtYear :1990,
    AnnualSalary : 12000,

    get getName(){
        return 'Mr '+this.name;

    },

    set setName (val){
        if (val.length <4){
            alert ("Name should be at least 4 character ")
        }else {
            this.name = val
        }

    }
}

console.log(John)
console.log(John.getName)
John.setName ='JOHN Snow';
John.setName ='JON';



// John.setName ='JOHN SMITH';
console.log(John.getName);
console.log(John);
*/

// let User = class {
//     constructor(name,pswd,role){
//         this.name = name;
//         this.password = pswd;
//         this.role =  role;

//     }

//     set setPassword(arg){
//         if (arg.length <4){
//             console.log('Password at least 4 character!!')
//         }else {
//             this.password =arg;
//         }

//     }
// }

// let mark = new User ('Mark','pswd123','admin')
// console.log(mark)
// mark.setPassword = 'pswd';
// console.log(mark)

/*
//======== STATIC METHOD =====//




class Person {
    constructor(name,birthYear,gender){
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
    }
    calcage (){
        console.log(new Date().getFullYear()-this.birthYear)
    }

    static greet () {
        console.log('HEY THERE! HOW ARE YOU?')
    }
}


let john = new Person ('john',1990,'Male')
console.log(john)


john.calcage()
Person.greet()


let Person = function(name,gender,birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear

}

Person.prototype.calcage =  function(){
    let age = new Date().getFullYear() - this.birthYear
    console.log(age)
}

Person.greet = function (){
    console.log("Have a nice day ")
}


let Mark = new Person ('Mark','Male','1995')
console.log(Mark)
Mark.calcage()
Person.greet()


*/

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }

//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar)
// console.log( myCar.show());

// let User = class {
//     constructor(name,pswd,role,gender,birthYear){
//         this.name = name ;
//         this.password = pswd ;
//         this.role = role ;
//         this.gender = gender
//         this.birthYear = birthYear ;

//     }
//     calcage(){
//         console.log (new Date().getFullYear()-this.birthYear)
//     }
//     set setName(arg){
//         if (arg.length < 4){
//             alert ('Name must be more than 4 character!!')
//         }else{
//             this.name = arg;
//         }
//     }

//     set setPassword(val){
//         if (val.length < 4){
//             console.log("Password should be longer than 4 digit")
//         }else {
//             this.password = val;
//         }

//     }

// }

// let johny  = new User('Jhony','323245','admin','Male',1990)
// console.log(johny)
// johny.calcage()
// // johny.setName = 'jon'
// johny.setPassword = '25ytr';
// console.log(johny)

// parent class

// let Person = function (name,birthYear,gender){
//     this.name = name ;
//     this.birthYear = birthYear ;
//     this.gender = gender ;
// }

// Person.prototype.calcage =function(){
//     console.log(new Date().getFullYear()-this.birthYear)
// }

// let Mark = new Person ('Mark', '1990', 'Male')
// console.log(Mark)

// Mark.calcage()

//Employee function constructor
//this = kenny
//Employee child class

// let Employee = function (name,gender,birthYear,empID, salary ){
//     Person.call(this,name,gender,birthYear)
//     // this.name = name ;
//     // this.gender = gender ;
//     // this.birthYear = birthYear ;
//     this.empID = empID ;
//     this.salary = salary ;
// }

// Employee.prototype = Person.prototype

// Employee.prototype.calcSalary = function (){
//     return this.salary*12;
// }

// Employee.prototype.empDetail = function () {
//     console.log(this.name)
//     console.log(this.empID)
// }

// let kenny = new Employee('kenny','Male',1995,101,12000)
// console.log(kenny)

// // === INHERITANCE BETWEEN CLASS ===//

// class Person {
//     constructor (name,birthYear,gender){
//         this.name = name  ;
//         this.birthYear = birthYear ;
//         this.gender = gender ;

//     }
//     calcage (){
//         console.log(new Date().getFullYear()-this.birthYear)
//     }
// }

// ///Employee class inheritend from Person class
// // so we do not explicitly write same properties like name, birthYear,gender

// class Employee extends Person {
//     constructor(name,gender,birthYear,empId,salary){
//         super (name,gender,birthYear)
//         this.empId =empId;
//         this.salary = salary ;

//     }
//     calcSalary (){
//         return this.salary*12;
//     }

//     empDetails(){
//         console.log(this.name)
//         console
//     }
// }

// let Mark = new Employee ('Mark','Male',1995,201,18000)
// console.log(Mark)

// //====== OBJECT.CREATE() METHOD ======//

// //IMPLEMENT  INHERITANCE

// let person = {
//     calcage(){
//         return new Date().getFullYear() - this.birtYear;
//     },

//     greet(){
//         return "Have a nice day !!"
//     },

//     init(name,birthYear,gender){
//         this.name = name;
//         this.birtYear =birthYear;
//         this.gender=gender
//     }
// }

// let john =Object.create(person)
// console.log(john)
// console.log(john.calcage())
// john.name='john'
// john.birtYear = 1990
// john.gender ='male '

// console.log(john)

// console.log(john.calcage())

// let mark = Object.create(person)
// mark.init('Mark',2002,'male')
// console.log(mark)

// var obj = {
//     key: [1, 2, 3]
//   };
//   var output = getAverageOfElementsAtProperty(obj, 'key');
//   console.log(output); // --> 2

//   function getAverageOfElementsAtProperty(obj, key) {
//     // your code here

//     if (obj[key].length === 0){return 0}
//     if((Array.isArray(obj[key])) === false ){return 0}
//     if(obj.key === undefined ){return 0}
//     let sum=0;
//     for (let i=0; i<obj[key].length; i++){
//         sum += obj[key][i]
//     }

//     return sum / obj[key].length

//   }

//   var output = getAverageOfElementsAtProperty(obj, 'key');
//   console.log(output); // --> 2

// function getOddElementsAtProperty(obj, key) {
//     // your code here
//     if(obj[key] ===  undefined ){return []}
//     if (obj[key].length === 0){return []}
//     if (Array.isArray(obj[key])===false ){return []}

//     let result =obj[key].filter(function(elem,index,arr){
//         return elem %2 ===1

//     })
//     return result ;
//   }

//   var obj = {
//     key: [1, 2, 3, 4, 5]
//   };
//   var output = getOddElementsAtProperty(obj, 'key');
//   console.log(output); // --> [1, 3, 5]

//   let key = [1, 2, 3, 4, 5];
//   let ketFiltered =key.filter(function(elem,index,arr){
//       return elem %2 ==1;
//   })

//   console.log(ketFiltered)

//

// function getStringLength(string) {
//     // your code here
//     let count =0;
//     for (let i=0; i<string.length; i++){
//         count++
//     }
//     return count
//   }

//   function getStringLength(string) {
//     // your code here
//     let count =0;
//     let result=''
//     let i =0;
//     while(result !== string){
//         count++
//         result +=string[i]
//         i++
//     }
// return count ;
// }

// var output = getStringLength('hello');
// console.log(output); // --> 5

// function sumDigits(num) {
//     // your code here
//     var sum =0;
//     if (num>0){

//     let numstring =num.toString()
//     for(let i=0; i<numstring.length; i++){
//       sum += Number(numstring[i])

//      }
//     }else {
//         let possitiveNum = Math.abs(num)

//         let numS = possitiveNum.toString()
//         sum =-1*Number(numS[0]);

//         for (let i=1; i<numS.length; i++){
//             sum += Number(numS[i])

//         }
//     }

//     return sum;
//   }

// //var output = sumDigits(1148);
// var output = sumDigits(-316);
// console.log(output); // --> 4

/*
Array.diff
Your goal in this kata is to implement a difference function,
 which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b
 keeping their order. */

/*     // arrayDiff([1,2],[1]) == [2]

    function arrayDiff (arr1, arr2){
        let result =[];
        for (let i=0; i<arr1.length; i++){
            if (!(arr2.includes(arr1[i]))){
                // console.log(arr1[i])
                result.push(arr1[i])
            }

        }
        console.log(result)
    }

    arrayDiff([1,2],[1]) == [2]
    arrayDiff([1,2,2,2,3],[2]) == [1,3] */

/*
    Given an array of integers, find the one that appears an odd number
     of times.

    There will always be only one integer that appears an odd number of times.

    Examples
    [7] should return 7, because it occurs 1 time (which is odd).
    [0] should return 0, because it occurs 1 time (which is odd).
    [1,1,2] should return 2, because it occurs 1 time (which is odd).
    [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
    [1,2,2,3, 3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time
    (which is odd).

 */

/*   function findOdd(arr) {
        //happy coding!
        let ref  = {};

        arr.forEach(function(elem){
            ref[elem] = (ref[elem] || 0) +1;
            }
        )
        for (let [key,values] of Object.entries(ref)){
            if (values%2 === 1){
                return key
            }
        }



        // return ref;
      } */

// const counts = {};
// const sampleArray = ['a', 'a', 'b', 'c'];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts)

// console.log(findOdd([0,1,0,1,0]))
// console.log(findOdd( [1,2,2,3, 3,3,4,3,3,3,2,2,1]))

/*

Equal Sides Of An Array
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

*/

/*

function findEvenIndex(arr){
  //Code goes here!
  for (let i=0; i<arr.length; i++){
      let arr1 = [];
      let arr2 = [];
      let sum1 =0;
      let sum2 = 0;
      if (i+1 <=arr.length){
          arr1 = arr.slice(i+1)
           sum1 = arr1.reduce(function(a,b){return a+b})
         }

      if (i-1 >= 0){
        arr2 = arr.slice(0,i)
        sum2 = arr2.reduce(function(a,b){return a+b})
      }



      if( sum1 === sum2){
          return i;
      }


  }
  return -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log (findEvenIndex([20,10,-80,10,10,15,35]))
console.log (findEvenIndex([1,100,50,-51,1,1]))

// let a =[20,10,-80,10,10,15,35]

// let b = a.reduce(function(a,b){return a+b})
// console.log(b)
 */

/* function whichCity(city){
    return city;
  }

  let southAfrica = whichCity('Cape Town');
  let japan = whichCity('Kyoto');
  let italy = whichCity('Florence');

console.log(italy) */

/**************************
 traceTheChain(obj)
**************************/

// YOUR CODE BELOW

/* function traceTheChain(obj) {
    let prototypeChainObjects = [];
    while(Object.getPrototypeOf(obj)) {
      obj = Object.getPrototypeOf(obj);
      prototypeChainObjects.push(obj);
    }
    return prototypeChainObjects;
  }


  console.log (Object.getPrototypeOf({})) */

/**************************
blueprint function,
constructor function
**************************/
/*

let Person  = function(name,year,gender){
    this.name = name ;
    this.birthyear = year ;
    this.gender = gender ;
    this.calculatage = () =>{
        return 2022 - this.birthyear;
    }


}

// creating object based on Person blueprint function


let steve = new Person ("Steve",1995,"Male")
console.log(steve)
console.log(steve.calculatage())

console.log(Object.getPrototypeOf(steve))



const exampleArray = [];
let ret =Object.getPrototypeOf(exampleArray);
console.log(ret)

 */
/**************************
persistence(num)
**************************/
/*
Write a function, persistence, that takes in a positive parameter num and
returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/
/*
function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}
 */

/**************************
/* repeatStr(n,s)
**************************/
/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

/* function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

console.log(repeatStr(6, "I")); // "IIIIII" */

/**************************
/* value doubled.)
**************************/
/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/
/*
function maps(x) {
  return x.map(function (elem) {
    return elem * 2;
  });
}
console.log(maps([1, 2, 3]));
 */

/*

*/
/**************************
highAndLow("1 2 3 4 5");  // return "5 1"
**************************/
/*
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/
/*
function highAndLow(numbers) {
  let sortedNumber = numbers
    .split(" ")
    .map(function (elem) {
      return Number(elem);
    })
    .sort(function (a, b) {
      return a - b;
    });
  let result = [sortedNumber[sortedNumber.length - 1], sortedNumber[0]].join(
    " "
  );
  return result;
}
console.log(highAndLow("1 2 3 4 5"));
 */

/**************************
ATM machines allow
**************************/
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/
/*
function validatePIN(pin) {
  //return true or false
  let result = [];
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] === ".") {
      return false;
    }
  }
  if (Array.isArray(pin)) {
    let arr = pin.map(function (elem) {
      if (!isNaN(elem)) {
        return elem;
      }
    });
    if (arr.length === 4) {
      return true;
    }
  }
  pin.split("").forEach((element) => {
    if (!isNaN(element) && Number(element) >= 0) {
      result.push(Number(element));
    }
  });
  console.log(result);

  if (result.length === 4 && pin[0] !== "-") {
    return true;
  } else {
    return false;
  }
}

*/
