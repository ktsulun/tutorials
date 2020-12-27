


// let a =[1,23,4,5]

// console.log('string'.__proto__.__proto__);

// console.log([2,4].__proto__.__proto__);

// let b = new Array(2,3);
// console.log(b.__proto__); 

// b.__proto__.find = function(){
//   console.log(...this);
// }

// b.find()

// console.log([].__proto__.find);

// b.__proto__.replace = function(a){
// this.push(a)
// console.log(this);
// }

// b.replace(2)

//__proto__ End

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


//obj.info.apply(person, [`Moscow`,2])




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
//console.log(y());

//console.log(v());

// найти ошибку, чтобы работала, замыкание

function DecrIncr(){
  let counter = 0;
this.up = function(){
return ++counter;
}
this.down = function(){
  return --counter;
  }
this.log = function(){
//  return console.log(counter);
}
}

//DecrIncr.up()

let newCounter = new DecrIncr()
// console.log(newCounter.up());
newCounter.up();
newCounter.up();
newCounter.up();
newCounter.up();
newCounter.log();
newCounter.down();
newCounter.log();



let newounter2 = newCounter;
let counter3 = new DecrIncr;
counter3.log()



// function int(a=2,b=5){
//   return console.log(a+b);
// }

function Cclc(a){
return function(b){
return a+b;
}
}
//,4console.log(Cclc(2)(6));

function Interval(a,b){
 return function(c){
return c>=a && c<=b
  }
}



let arr = [1,16,2,6,11,44,51,7,8,10]


//console.log(Interval(5,10)(8));



let arr1 = arr.filter(e =>Interval(5,10)(e))
let arr2 = arr.filter(Interval(5,10))



//console.log(arr2);

function FNC(a,b){
 let result = 1;

for(let i = 1;i<=b;i++){
  result *= a;
}
return result;
}


// function pow(x, n){
//   if(n === 1){
//     return x
//   } else {
//     return x * pow(x, n-1)
//   }
// }


function pow(x,n){
 return  n === 1 ? x : x*pow(x, n-1)
}


///console.log(pow(3,100));
// console.log(FNC(3,4));

// let r = 4
// r = 3*4
// r = 3*4
// r = 3*4

function Add(e){  
  // let arr = [0,1];
  //return e>1? &&? e : e+Add(e-1)
  // for(let i = 2; i<=e; i++){
  //   let a = arr[i-1]+arr[i-2]
  //   arr.push(a)
  // }
return e < 2 ? e : Add(e-1)+Add(e-2)
}

//.log(Add(10));

function fib(n){
  if(n === 0) return 0
  let a = 1;
  let b = 1;
  for(let i = 3; i <=n;i++){

let c = a + b;
a = b;
b = c;

  }
  return b
}
// console.log(fib(3))



// function Calc(a){
//   let result = a;
//   for(let i = 0; i<a; i++){
//     result +=i;
//   }
//   return result;
// }

// console.log(Calc(6))

function CalcR(a){
  return a < 2 ? a: a + CalcR(a-1) 
}

console.log(CalcR(6));

let list = {
  value: 11,
  next : {
    value: 33,
    next : {
      value: 45,
      next: {
        value: 63,
        next: null
      }
    }
  }
}

// ссумировать обект 