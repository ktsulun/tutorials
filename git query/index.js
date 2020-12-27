const input = document.querySelector(".input");
const button = document.querySelector(".button");
const container = document.querySelector(".container");
const spinner = document.querySelector(".spinner")
const URL = "https://api.github.com/users/";




button.addEventListener("click",fetchAPI)

function Spinner(isSpinner=true){
spinner.innerHTML = isSpinner ? `<img src="./74H8.gif">` : '';
}

function fetchAPI(){

 Spinner(); 

fetch(URL+input.value)
.then(response=> response.ok && response.status === 200
? response.json()
: Promise.reject(response)
)
.then(
  response => Markup(response)
)
.catch(error=>console.error(error))
.finally(Spinner(false))
input.value="";
}


function idConsole(id){
console.log(id);
}


function Markup(response){
container.innerHTML += `<div id="id_${response.id}">
<h1>${response.name}</h1>
<img src="${response.avatar_url}" onclick="idConsole(${response.id})">
<p>${response.emeil ? response.emeil : "no email"}</p>
<p>${response.location}</p>
${response.site_admin ? '<p>i am admin</p>' : ''}
</div>`

}


// let a = 'aa'
// a +=  ' lo'
