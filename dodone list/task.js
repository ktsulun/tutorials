{
const input = document.querySelector(".input");
const button = document.querySelector("button");
const activeList = document.querySelector(".active_list");
const false_list = document.querySelector(".false_list");

 let ID = 1;
const id  =()=> ID++;



const list = [
  {
    value: 'H\'ello',
    status: false,
    _id: id()
  },
  {
    value: 'H\'elloFalse   s',
    status: false,
    _id: id()
  },
  {
    value: 'H\'e',
    status: true,
    _id: id()
  },
]



function listCreator(){
  false_list.innerHTML = ""; activeList.innerHTML = "";
list.map((e,index)=>{e.status
? activeList.innerHTML +=`

<li class="currentLi">
<input onclick="checkedNew(${index})" type="checkbox" checked>
<div id="${index}" ondblclick="onDoubleClick(this, ${index})" 
>
<span >${e.value} </span>
</div>
<button onclick="removeLi(${index})">X</button>
</li>
` 
: false_list.innerHTML +=`
<li class="currentLi"  onblur="newContent(this)">
<input onclick="checkedNew(${index})" type="checkbox">
<div id="${index}" ondblclick="onDoubleClick(this, ${index})">
<span>${e.value} </span>
</div>
<button onclick="removeLi(${index})">X</button>
</li>`
}
)}

function onDoubleClick(e,i){

  // console.log(e,i);
 console.log(list[i].value);
e.innerHTML=`<input 
onblur="newContent(this,${i})"
type='text' value="${list[i].value}">`





  // document.querySelector("currentLi").innerHTML = `<input onclick="checkedNew(${index})" type="checkbox">
  // <input type="text>
  // <button onclick="removeLi(${index})">X</button>`

}

function newValue(i,text){
list[i].value = text

}
function newContent(e,i){
list[i].value = e.value;

  console.log(document.getElementById(`${i}`));
document.getElementById(`${i}`).innerHTML= 
`<span ondblclick="onDoubleClick(this, ${i})">${e.value} 
</span>`
}


function removeLi(i){
  list.splice(i,1)
  listCreator()
}


function checkedNew(i){
  list[i].status = !list[i].status
  // ? list[i].status = false
  // : list[i].status = true
  listCreator()
}

let a = false;
console.log(a);
console.log(!a);



function onClick(){
  if(input.value.trim()){
    list.push({ value: input.value, status: false, _id: id()});
    listCreator()
  }
  input.value = "";

}

button.addEventListener("click", onClick)


listCreator()


}


// function allnew(e){
//   console.log(e);
// }

// neweleminput.addEventListener('click', function(e){
//   console.log(this);
// })
