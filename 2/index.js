const refs = {
inputEl: document.querySelector(".input"),
optionsList: document.querySelector(".options")
}


const arr = [
    {id: 1, name: "Mango"},
    {id: 2, name: "Orange"},
    {id: 3, name: "Kiwi"},
    {id:4, name: "Pineapple"},
    {id:5, name: "Banana"},
    {id:5, name: "Grape"},
    {id:5, name: "Jackfruit"}
];


function onInput(a="", arrElm=arr, htmlEl = refs.optionsList){
    htmlEl.innerHTML = arrElm
    .filter(e=>e.name.toLocaleLowerCase().includes(a.toLocaleLowerCase()))
    .map(e=>`<li>${e.name}</li>`)
    .join("")
}

onInput();



refs.inputEl.addEventListener("input",e=>onInput(e.target.value))



// let a = arr.map(e=>
//   e.name
// )
// console.log(document);
// // console.log(a);
// inputEl.addEventListener('input', 

// (e)=>{ console.log(e.target.value);}
// // function(){console.log(this)}
// )
// function newFunctionSum(a=1,c=4){
//     console.log(a);
//     console.log(c);


// }

// newFunctionSum(5,4)
// newFunctionSum()