const imagem1 = document.querySelector('#img01');
const descricao1 = document.querySelector('#descricao01');
const imagem2 = document.querySelector('#img02');
const descricao2 = document.querySelector('#descricao02');
const imagem3 = document.querySelector('#img03');
const descricao3 = document.querySelector('#descricao03');
const imagem4 = document.querySelector('#img04');
const descricao4 = document.querySelector('#descricao04');

const resetButton = document.querySelector('#reset-button');


gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

personagem = (imagem, descricao) => {
    let numeroimgAleatorio = gerarValorAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${numeroimgAleatorio}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            "content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        descricao.innerHTML = data.name;
    });

}

atualizarPersonagem = () => {
    personagem(imagem1, descricao1);
    personagem(imagem2, descricao2);
    personagem(imagem3, descricao3);
    personagem(imagem4, descricao4);

}

atualizarPersonagem();
//botao atualizar personagem
resetButton.onclick = atualizarPersonagem;



