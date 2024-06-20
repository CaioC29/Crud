const carrinho = [];
atualizar();
//----------------------------------------------------------------------------------

function logar(){
    if(document.getElementById('usuario').value === "" || document.getElementById('senha').value === ""){
        document.getElementById('aviso').innerHTML = "Preencha todos os campos";
    }else{
        if(document.getElementById('usuario').value === "caioba" && document.getElementById('senha').value === "tests"){
            alert("Olá caioba");
            window.location.href = "adm.html";
        }else{
            alert("Seja bem vindo!");
            window.location.href = "catalogo.html";
        }
    }
}

//----------------------------------------------------------------------------------

function atualizar(){
    const stringJson = localStorage.getItem("catalogo");
    const vetor = JSON.parse(stringJson);

    mostrar(vetor);
}

function mostrar(vetor){

    var lista = document.getElementById("catalogo");
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
            <td><button onclick="addcarrinho(${i})" id="botao">+</button></td>
            
        </tr>`;

        lista.appendChild(tabela);
    
    }
    console.log(vetor);
}

//----------------------------------------------------------------------------------

function addcarrinho(item){
    const stringJson = localStorage.getItem('catalogo');
    const obj = JSON.parse(stringJson);

    carrinho.push(obj[item]);
    const stringNova = JSON.stringify(carrinho);
    localStorage.setItem('carrinho', stringNova);
    alert("ITEM ADICIONADO");
}