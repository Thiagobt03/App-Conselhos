// const descricaoConselho = document.getElementById('descricao-conselho');


// function atualizarConselho() {
//     fetch('https://api.adviceslip.com/advice')
//     .then(response => response.json())
//     .then(data => {
        
//         descricaoConselho.innerHTML = `${data.slip.advice}`;
//         console.log(data)
//     })
//     .catch(err => {
//         console.err('Erro ao obter conselho da API', err);
//     });
// }

const botaoUp = document.getElementById("conselho-update")
const descricaoConselho = document.getElementById("descricao-conselho")
const titulo = document.querySelector(".id-conselho")

async function buscarConselho() {
    try{
        const url = "https://api.adviceslip.com/advice"
        const resposta = await fetch(url)
        const json = await resposta.json()
        return json.slip
    } catch (error) {
        console.log(`O erro é ${error}`)
    }
}

async function mostrar(){
    let resultado = await buscarConselho()
    descricaoConselho.innerHTML = `"${resultado.advice}"`
    titulo.innerHTML = `"${resultado.id}"`
}

botaoUp.addEventListener("click", () => mostrar())