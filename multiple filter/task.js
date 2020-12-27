
  let newId = 0;
// function crreateNewId(){
//   return (newId++)
// }

const crreateNewId = () =>  newId++;


const ObjItems = [
  {name: "Каша",
  photo: './i/im1.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 1,
  price: 20
  },
  {name: "Cалат",
  photo: './i/im2.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 1,
  price: 25
  },
  {name: "Alltheproduct",
  photo: './i/im3.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 1,
  price: 50
  },
  {name: "Суп",
  photo: './i/im4.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 3,
  price: 20
  },
  {name: "Сырники",
  photo: './i/im5.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 3,
  price: 40
  },
  {name: "Суп2",
  photo: './i/im6.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 2,
  price: 80
  },
  {name: "Крем суп",
  photo: './i/im7.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 2,
  price: 65
  },
  {name: "Борщ",
  photo: './i/im8.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 3,
  price: 35
  },
  {name: "Суп3",
  photo: './i/im9.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 1,
  price: 50
  },
  {name: "Холодец",
  photo: './i/im10.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 2,
  price: 55
  },
  {name: "Картошка",
  photo: './i/im11.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 2,
  price: 45
  },

];

const images = document.querySelector(".image_container");
const priceRange = document.querySelector(".price");
const foodType = document.querySelector(".type");



// foodType.addEventListener("change", ()=>Markup(ObjItems))
// priceRange.addEventListener("change",()=>Markup(ObjItems))

document.querySelector(".container").addEventListener("change", (e)=>{Markup(ObjItems)

// console.log(e.target.className);

// switch(e.target.className){
//   case "type": 
//   case "price": Markup(ObjItems)
// }

// if(e.target.className === "type" || e.target.className === "price"){
//   Markup(ObjItems)
// } 
})

function Markup(arr=ObjItems) {
let Objtype = arr;




// if(+priceRange.value === -1 && +foodType.value === -1){
//   Objtype = arr;
// } else if(+priceRange.value === -1)
// {  Objtype = arr.filter(e=>e.value===+foodType.value)}
//  else if(+foodType.value === -1){
//   Objtype = arr.filter(e=>e.price<=+priceRange.value)}
// else{
//   Objtype = arr.filter(e=>e.price<=+priceRange.value && e.value===+foodType.value)
// }



+foodType.value && (Objtype = arr.filter(e=>e.value=== +foodType.value))

// let ObjPrice = Objtype;



// switch(foodType.value){
//   case "-1": Objtype = arr;
//   break
//   default:
//     Objtype = arr.filter(e=>e.value===+foodType.value)
// }


+priceRange.value && (Objtype = Objtype.filter(e=>e.price<= +priceRange.value))


console.log(Objtype);

images.innerHTML =
Objtype
.map(e=>
  `<div id="id_${e._id}"><img src="${e.photo}">
  <h2>${e.name}</h2>
  <p>${e.price}</p></div>`)
  .join("")
}

Markup();













// switch(1){
//   case 1: console.log('1');
//   case 2: console.log('2');
//   case 3: console.log('3');
//   break
//   default: console.log('123');
  
// }







































// let Objtype = []; 

// // arr.map(e => foodType.value===e.value  && Objtype.push(e))

// // console.log(typeof (+foodType.value && Objtype.push([])));

// switch(foodType.value){  



//   case '-1': Objtype = arr
//   break
//   // case '1': arr.map(e=>e.value === 1? Objtype.push(e) : null) 
//   // case '2': arr.map(e=>e.value === 2? Objtype.push(e) : null) 
//   // case '3': arr.map(e=>e.value === 3? Objtype.push(e) : null) 
//   default: 
//   // arr.map(e=>e.value === +foodType.value && Objtype.push(e))
//   Objtype = arr.filter(e=>e.value === +foodType.value)
   

// }
