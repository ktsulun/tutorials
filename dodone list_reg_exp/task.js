const button = document.querySelector('button');
const input = document.querySelector('input');
const text = document.querySelector('.text-container');






const transformButton = document.querySelector('.button');

transformButton.addEventListener("click", (e)=>{
let rexFrase = /javascript\b/gi
text.textContent  = text.textContent.replace(rexFrase, "JAVASCRIPT")
})




























const rex = /\(?(\d{3})\)?[\s-]?(\d{3})?[\s-]?(\d{4})/g



let numbers = `065-233-3242 (333) 232-2334
2345677890
`;

// console.log(numbers.replace(rex, `($1) $2 $3`))





button.addEventListener("click",(e)=>{
  input.style.boxShadow = "0px 2px red"
  

if(!input.value.replace(/\s/g, '')){
  input.value=""
}else{


// console.log(input.value);

let Rex = /(\w)+@(\w)+\.\w{1,4}/gi
let current_text = Rex.test(input.value)

if(current_text){

let match = input.value.match(Rex)
console.log(match);
console.log(input.value)


if(match[0]===input.value){
  input.style.boxShadow = ""
  console.log("555");
}

} else {
  console.log(`${input.value} - почта некорректна`);
}
 
}








})


let a =[1,23,4,5]

console.log('string'.__proto__.__proto__);

console.log([2,4].__proto__.__proto__);

let b = new Array(2,3);
console.log(b.__proto__); 

b.__proto__.find = function(){
  console.log(...this);
}

b.find()

console.log([].__proto__.find);

b.__proto__.replace = function(a){
this.push(a)
console.log(this);
}

b.replace(2)


const obj = {
  name: `Mango`,
  age: 15,
  city: `NewYork`,
  info: function(city,w){
    console.group('Наш инфо')
    console.log(`My name is ${this.name}`);
    console.log(`My age is ${this.age}`);
    console.log(`I am from ${city} ${w}`);
    console.groupEnd()
  }

}

const person = {
  name: `Jumbo`,
  age: 25, 
}

// const newElem = obj.info.bind(person, `Moscow`,2)
// newElem()


obj.info.apply(person, [`Moscow`,2])




function mainCounter(){
  let counter = 0;
  return function(){
    return ++counter
  }
}

let y = mainCounter()
let v = mainCounter()

y()
y()
y()
console.log(y());

console.log(v());

// найти ошибку, чтобы работала, замыкание

function DecrIncr(){
  let counter = 0;
up = function(){
return ++counter;
}
down = function(){
  return --counter;
  }
}

let newCounter = new DecrIncr()
console.log(newCounter.up());
