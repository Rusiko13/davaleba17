//1
let array2 = [14, 150, "css", null, "javascript", 25];
let array3 = array2.map((item) => {
  if (typeof item == "number") {
    return item * item;
  } else if (typeof item == "string") {
    return item.toUpperCase();
  }
  {
    return item;
  }
});
console.log(array3);
//2
let info = "good day";
let info1 = info.slice(5);
console.log(info1);
//3
let fnc = (str)=>{
let fnc1 = str.length;
return fnc1;
};
console.log(fnc("beautiful"));

//4

let homeTown = prompt("რა არის საქართველოს დედაქალაქი");
if (homeTown.toLowerCase() === "tbilisi") {
  console.log(true);
}else{
  console.log(false);
}
//5
let fruits = ["apple", "mango", "avocado","kiwi",];
fruits.splice(fruits.length,0,"strawberry");
console.log(fruits);

//6
let array4 = [5, 25, 89, 120, 36];
array4.splice(array4.length, 0, "javascript", "python");
array4.splice(0, 0, "html", "css");
array4.push();
array4.pop();
console.log(array4.length);
console.log(array4);

//7

let array5 = ["orange", "banana", "Kiwi",];
array5.splice(array5.length,0, "apple", "ananas")
array5.unshift("watermelon");
array5.splice(2,0, "mango")
array5.shift();
array5.pop();
console.log(array5);
console.log(array5.length);

//8
let array3 =[1, 2, 3, 4, 5,];
array3.splice(3,0,"a", "b", "c")
console.log(array3);

//9

let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let array6 = array5.map((item)=>{
  return item / 3;
})
console.log(array6);

//10
let array7 =  [15, 100, 25, 10, 36];
array7.splice(3,1);
console.log(array7);

//11
let array8 = [1, 2, 3, 4, 5];
array8.splice(2, 1, "three");
console.log(array8);

//12
let array1 = ["hello1", 14, 24, "hello2"];
let array2 = array1.filter((item) => {
  if (typeof item === "number") {
    return item;
  }
});
console.log(array2);

//13
let array4 = [1, 2, 3, 4, 5];
let sum = 0 
array4.forEach(item => {return sum += item;})
console.log(sum);

//14
let languages = ["html", "css", "javascript", "python", "php"];
let languages2 = languages.filter((item)=> {if(item.length > 3){
  return item;
}})
console.log(languages2);

//15
let words = ['Madrid', 'rome', 'Milan', 'berlin'];
let newWords = words.filter((item)=> {if(item.includes("m") || item.includes("M")){
  return item;
}})
console.log(newWords);