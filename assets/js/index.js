
//PROYECTO FINAL --------------------------------------------------------------->>>>>>>>>>>>>>>>>


const todos = document.getElementById("todos")
const mujeres = document.getElementById("mujeres")
const hombres = document.getElementById("hombres")
const totalPesonajes = document.getElementById("totalPersonajes")
const paginaActual = document.getElementById("pagActual")
const totalPagina = document.getElementById("totalPag")
let url = "https://rickandmortyapi.com/api/character/"

function renderizado (genero, pActual, totalPag){

    fetch(url + "?page=" + pActual + genero)
    .then(res => res.json())
    .then((data) =>{

    console.log(data)
   
    const div = document.getElementById ("tarjetas")
    let html = ""

    for (const nombres of data.results) {
        html = html + //------>> html +=
        `
        <div class="card"><br>

        <p id="nombre">Nombre: ${nombres.name}</p><br>
        <img class="img" src = ${nombres.image} alt=""/><br>
         <p>Genero: ${nombres.gender}</p><br>
         <p>Species: ${nombres.species}</p><br>
         <p>Status: ${nombres.status}</p><br>
         <p>Origin: ${nombres.origin.name}</p><br>
         <p>Location: ${nombres.location.name}</p>
         
        </div>

        `       
    }
    div.innerHTML = html
    totalPesonajes.textContent = `Total de personajes: ${data.info.count}`
    paginaActual.textContent = `Pagina actual: ${pActual}`
    totalPagina.textContent = `Total de paginas: ${totalPag}`
    
})

}

renderizado ("", 1, 42)

let pagActual = 1
let genero = ""
let totalPag = 42


const fetchTodos = () => {
    pagActual = 1
    genero = ""
    totalPag = 42
    renderizado (genero, pagActual, totalPag)
}
const fetchMujeres = () => {
    genero = "&gender=female"
    pagActual = 1
    totalPag = 8
    renderizado (genero, pagActual, totalPag)
}
const fetchHombres = () => {
    genero = "&gender=male"
    pagActual = 1
    totalPag = 31
    renderizado (genero, pagActual, totalPag)
}

todos.onclick = fetchTodos
mujeres.onclick = fetchMujeres
hombres.onclick = fetchHombres


function aanterior (){
    pagActual = 1
    renderizado (genero, pagActual, totalPag)
}
function anterior (){
    if (pagActual > 1) {
    pagActual = pagActual - 1
    }
    renderizado (genero, pagActual, totalPag)
}
function posterior (){
    if (pagActual < totalPag) {
    pagActual = pagActual + 1
    }
    renderizado (genero, pagActual, totalPag)
}
function pposterior (){
    pagActual = totalPag
    renderizado (genero, pagActual, totalPag)
    }

aant.onclick = aanterior
ant.onclick = anterior
post.onclick = posterior
ppost.onclick = pposterior





