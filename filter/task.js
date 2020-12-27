
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
  value: 4,
  price: 20
  },
  {name: "Cалат",
  photo: './i/im2.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 5,
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
  value: 1,
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
  value: 4,
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
  value: 5,
  price: 50
  },
  {name: "Холодец",
  photo: './i/im10.jpg',
  _id: crreateNewId(),
  text: "I write it down now",
  value: 4,
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





// При нажатии all должно опять вернуть мне 2 первых элемента после применения фильтров


const image_container = document.querySelector(".image_container");
const button_container = document.querySelector(".button_container");
const button =   document.querySelector(".button")
const allBtn = document.querySelector(".W0")


// allBtn.addEventListener("click",AllBtnOnclick)

button_container.addEventListener("click",e=>{
  MarkUp(+e.target.value)
 
})


let counter = 2;

// let clickCounter = 0;

// function AllBtnOnclick(){
//   clickCounter+=1;
// }


function MarkUp(i=-1, html_elem=image_container){ 

 
  switch(i){

    case -1:

    // if(clickCounter>0){ 
  
      addButton()
      html_elem.innerHTML = 
      ObjItems.map((e,a)=>{
    
        if(a<counter){
        return Paint(a)
     
      }}).join("")


    // }

    addButton()
    html_elem.innerHTML = 
    ObjItems.map((e,a)=>{
  
      if(a<counter){
      return Paint(a)
   
    }}).join("")
    

      break

      default: 
        removeBtn();
        counter=2;
        html_elem.innerHTML = 
      ObjItems.map((e,ind)=>{
        if(i===e.value){

        return Paint(ind)
     
      }
    }).join("")
  }
  
  
}

function Paint(a){
return(
  `<img src="${ObjItems[a].photo}">
  <p>${ObjItems[a].text}</p>`
)
} 

function addButton(){
  button.innerHTML = `<button onclick="onClickChange()">Дальше</button>`
if(counter>=ObjItems.length){
  removeBtn()
} 
}

function onClickChange(){
  if(counter<ObjItems.length){
  counter+=2
  MarkUp()}
return counter
}
MarkUp()

function removeBtn()
{
  button.innerHTML = "";
}

function returnDefault(){
  if(counter>ObjItems.length){
    html_elem.innerHTML = 
      ObjItems.map((e,a)=>{
        if(a<2){
        return Paint(a)
     
      }}).join("")
  }
}

