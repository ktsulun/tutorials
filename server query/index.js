const URL = 'https://jsonplaceholder.typicode.com/posts';
const container = document.querySelector(".container");
const users = document.querySelector(".users");
const button = document.querySelector(".button")

let isSpinner = true;

function Spinner(Spinner=isSpinner, htmlEl=container){
    console.log(Spinner);
    console.log(htmlEl)
    Spinner
    ? htmlEl.insertAdjacentHTML("beforeend",'<img src="./74H8.gif" alt="spinner" srcset="">')
    : htmlEl.innerHTML= ""
}

// Сделать так, чтобы возвращало 10 штук 

let count = 10;
// <---почему нельзя просто вызвать функцию?--->

button.addEventListener("click",fetchAPI) 
function fetchAPI(){
  Spinner(true)
  return setTimeout(e=>fetch(URL)
.then(response=>{
    // Spinner()
    return  response.ok && response.status ===200
      ? response.json()
      : Promise.reject(response )
  })
  .then(response=>{
      Markup(response);
      if(count<response.length){
        return count+=10
      }else{
        button.className="is-hidden";
      }
    
  })
  .catch(error=>console.error(error))
  .finally(()=>Spinner(false)),500)

}



fetchAPI()



  
  function Markup(response){
    
users.innerHTML=
response
.map((elem,ind)=>{
  if(ind<count){
    return `<div id="userId_${elem.id}">
    <h1>${elem.title}</h1>
    <p>${elem.body}</p>
    </div>`
  }

  return
  })
.join("")}




// const URL = 'https://api.github.com/users/1';




// fetch(URL)

