var url = window.location.href; 
var res = url.split('?'); 
console.log("URL CAPTURADA: \n\n" + url);
console.log(res);

if (res[1] !== undefined) {
    //tenta localizar os & (pode haver mais de 1)
    var parametros = res[1].split('&');
    console.log(parametros)
    qids = parametros[0].split('=');
    console.log(qids);
    listId = qids[1].split(',');
    console.log(listId)
    token = parametros[1].split('=');
    console.log(token[1]);
    nome = parametros[2].split('=');
    console.log(nome[1])  
}
'ae3d3d1db10ce23a758436abae13783836b1b287'

var nomeAvaliacao = document.getElementById('nome');
//file:///home/jeferson/Documentos/projeto/projetoPdf/create_PDF.oi/index.html?qids=1,65,66&token=ae3d3d1db10ce23a758436abae13783836b1b287&nome=nomedaAvalia

const url1 = 'https://jsonplaceholder.typicode.com/posts'
const ApiGet = axios.create({
    baseURL: 'http://localhost:8000/api/v1/questao', //'https://bq.mat.br/api/v1',
    timeout: 200,
    headers: {'Authorization': 'Token ' + token[1]}
});

var pergunta = document.getElementById('pergunta');
var resposta = document.getElementById('resposta');


for(let ind in listId){    
    if(ind == 0 ){
        pergunta.innerHTML = '<br /><br /><br /><center>'+
        '</span><svg style="width:1.5cm; padding-left:1.5cm" class="ocultar"  onclick = "window.print();" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#286090"  d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"/></svg></center>'+
              '<p class="ocultar">Avaliação nome: <b>'+nome[1]+'</b></p>'+
            '<h4 class="ocultar">PERGUNTAS:</h4>'
        resposta.innerHTML = '<h4 class="ocultar">RESPOSTAS:</h4>'
    }

    ApiGet.get(`/${listId[ind]}/`).then(response => {
        data = response.data; 
        console.log(data)
        pergunta.innerHTML += `<div><p>Pergunta ${parseInt(ind)+1})  ${data.pergunta}</p></div>`
        resposta.innerHTML += `<div><p>Resposta ${parseInt(ind)+1})  ${data.resposta}</p></div>`


    })
}