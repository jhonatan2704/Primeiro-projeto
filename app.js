function pesquisar(){
//console.log("clicou");
// Obtém a seção HTML onde os resultados serão exibidos
let section = document.getElementById("Resultado-pesquisa")

let campoPesquisa = document.getElementById("campo-pesquisa").value
//  || campoPesquisa != dados
if(!campoPesquisa){
    section.innerHTML = "<p>Nada foi encotrado. Você precisa digitar algo para que a busca seja feita</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados
let resultados ="";
let titulo ="";
let descricao ="";
let tags ="";

// Itera sobre cada dado da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
// Se titulo inclides campoPesquisa

if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
// então faça
// Cria um novo elemento HTML para cada  resultado
resultados += `<div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p>${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`
    }
    
if(!resultados){
    resultados = "<p>Nada foi encotrado</p>"
}

}

// Atribui os resultados gerados a seção HTML
section.innerHTML = resultados

}
