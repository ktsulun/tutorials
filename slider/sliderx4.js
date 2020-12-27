

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
  value: 0,
  price: 20
  },
  {name: "Сырники",
  photo: './i/im5.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 1,
  price: 40
  },
  {name: "Суп2",
  photo: './i/im6.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 0,
  price: 80
  },
  {name: "Крем суп",
  photo: './i/im7.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 0,
  price: 65
  },
  {name: "Борщ",
  photo: './i/im8.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 0,
  price: 35
  },
  {name: "Суп3",
  photo: './i/im9.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 0,
  price: 50
  },
  {name: "Холодец",
  photo: './i/im10.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 0,
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

const imageEl = document.getElementById("image");
const forwBtn = document.querySelector(".forwardbtn");
const backwBtn = document.querySelector(".backwardsbtn");
let i = 0;
function imageMarkup(){
  imageEl.innerHTML = `<img src="${ObjItems[i].photo}">`
}

// forwBtn.onclick = function(){
//   i++
//   if(i>ObjItems.length-1){ 
//     i = 0;
//   }
//   imageMarkup()
// }
// backwBtn.onclick = function(){
//   i--
//   if(i<0){
//     i = ObjItems.length-1
//   }
//   imageMarkup()
// }


imageMarkup();

document.querySelector(".buttonPlusOrMinus").addEventListener("click",e=>{
console.log(e);
switch(e.target.className){
case "backwardsbtn":
  i--
  if(i<0){
    i = ObjItems.length-1
  }
  imageMarkup() 

break;

case "forwardbtn":
  i++
  if(i>ObjItems.length-1){ 
    i = 0;
  }
  imageMarkup()
 
}

})

