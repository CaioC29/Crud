let nome = document.getElementById("nome");
let descricao = document.getElementById("descricao");
let preco = document.getElementById("preco");

const catalogo = [];
criarcatalogo();

function criarcatalogo(){
    const stringJson = localStorage.getItem('catalogo');
    const vetor = JSON.parse(stringJson);


    for(let i=0; i<vetor.length; i++){
        catalogo.push(vetor[i]);
    }
    mostrar(vetor);
}

function adicionar(){
    if(document.getElementById('nome').value === "" || document.getElementById('descricao').value === "" || document.getElementById('preco').value === ""){
        document.getElementById('aviso').innerHTML = "Preencha todos os campos";
    }else{
        document.getElementById('aviso').innerHTML = "";
        const obj = {
            nome: nome.value,
            descricao: descricao.value,
            preco: preco.value
        };
    add(obj);
    }
}


function add(obj){
    catalogo.push(obj);
    const stringJson = JSON.stringify(catalogo);
    localStorage.setItem("catalogo", stringJson);
    atualizar();
}

function atualizar(){
    const stringJson = localStorage.getItem("catalogo");
    const vetor = JSON.parse(stringJson);

    mostrar(vetor);
}

function mostrar(vetor){

    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    for(let i=0; i<vetor.length; i++){
        let obj = vetor[i];

        let tabela = document.createElement("table");
        tabela.innerHTML =
        `<tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Ação</th>
        </tr>
        <tr>
            <td>${obj.nome}</td>
            <td>${obj.descricao}</td>
            <td>R$${obj.preco}</td>
            <td><button onclick="editar(${i})" id="botao">Editar</button></td>
            <td><button onclick="deletar(${i})" id="botao" class="vermelho">Deletar</button></td>
        </tr>`;

        lista.appendChild(tabela);
    
    }
    console.log(vetor);
}

function editar(item){
    let edit = JSON.parse(localStorage.getItem('catalogo'));

    document.getElementById('nome').value = edit[item].nome;
    document.getElementById('descricao').value = edit[item].descricao;
    document.getElementById('preco').value = edit[item].preco;
    deletar(item);
}
   

function deletar(item){
    catalogo.splice(item, 1);
    localStorage.removeItem('catalogo');

    const stringJson = JSON.stringify(catalogo);
    localStorage.setItem('catalogo', stringJson);
    atualizar();
}