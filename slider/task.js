let newId = 0;
// function crreateNewId(){
//   return (newId++)
// }

const crreateNewId = () => newId++;

const ObjItems = [
  {
    name: "Каша",
    photo: "./i/im1.jpg",
    _id: crreateNewId(),
    text: "I write it down now",
    value: 1,
    price: 20,
  },
  {
    name: "Cалат",
    photo: "./i/im2.jpg",
    _id: crreateNewId(),
    text: "I write it down now",
    value: 1,
    price: 25,
  },
  {
    name: "Alltheproduct",
    photo: "./i/im3.jpg",
    _id: crreateNewId(),
    text: "I write it down now",
    value: 1,
    price: 50,
  },
  {
    name: "Суп",
    photo: "./i/im4.jpg",
    _id: crreateNewId(),
    text: "I write it down now",
    value: 0,
    price: 20,
  },
  {
    name: "Сырники",
    photo: "./i/im5.jpg",
    _id: crreateNewId(),
    text: "I write it down now",
    value: 1,
    price: 40,
  },
  {
    name: "Суп2",
    photo: "./i/im6.jpg",
    _id: crreateNewId(),
    text: "I write it down now",
    value: 0,
    price: 80,
  },
  {
    name: "Крем суп",
    photo: "./i/im7.jpg",
    _id: crreateNewId(),
    text: "I write it down now",
    value: 0,
    price: 65,
  },
  {
    name: "Борщ",
    photo: "./i/im8.jpg",
    _id: crreateNewId(),
    text: "I write it down now",
    value: 0,
    price: 35,
  },
  {
    name: "Суп3",
    photo: "./i/im9.jpg",
    _id: crreateNewId(),
    text: "I write it down now",
    value: 0,
    price: 50,
  },
  {
    name: "Холодец",
    photo: "./i/im10.jpg",
    _id: crreateNewId(),
    text: "I write it down now",
    value: 0,
    price: 55,
  },
  {
    name: "Картошка",
    photo: "./i/im11.jpg",
    _id: crreateNewId(),
    text: "I write it down now",
    value: 2,
    price: 45,
  },
];
const bigImage = document.getElementById("main-image");
const images = document.querySelector(".images");
const forwBtn = document.querySelector(".forwardbtn");
const backwBtn = document.querySelector(".backwardsbtn");

let i = 1;

function minus() {
  let currentRes = i - 1;
  if (currentRes < 0) {
    currentRes = ObjItems.length - 1;
  }
  return currentRes;
}

function plus(el) {
  let currentRes = i + el;
  if (currentRes > ObjItems.length - 1) {
    switch (currentRes) {
      case ObjItems.length:
        currentRes = 0;
        break;
      case ObjItems.length + 1:
        currentRes = 1;
    }
  }
  return currentRes;
}

function imagesMarkup() {
  bigImage.innerHTML = `<img src="${ObjItems[i].photo}">`;

  // bigImage.insertAdjacentHTML("afterbegin",`<img src="${ObjItems[i].photo}">`)

  images.innerHTML = `
  <img src="${ObjItems[minus()].photo}">
  <img src="${ObjItems[i].photo}">
  <img src="${ObjItems[plus(1)].photo}">
  <img src="${ObjItems[plus(2)].photo}">`;
}

document.querySelector(".buttonPlusOrMinus").addEventListener("click", (e) => {
  switch (e.target.className) {
    case "forwardbtn":
      drowElemslider();

      break;
    case "backwardsbtn":
      drowElemsliderback();

      break;
  }
});

function drowElemslider() {
  i++;
  if (i > ObjItems.length - 1) {
    i = 0;
  }
  imagesMarkup();
}
function drowElemsliderback() {
  i--;
  if (i < 0) {
    i = ObjItems.length - 1;
  }

  imagesMarkup();
}
imagesMarkup();
