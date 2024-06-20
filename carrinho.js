const carrinho = [];
criarcarrinho();

function criarcarrinho(){
    const stringJson = localStorage.getItem('carrinho');
    const vetor = JSON.parse(stringJson);

    for(let i=0; i<vetor.length; i++){
        carrinho.push(vetor[i]);
    }
    mostrar(vetor);
}

function atualizar(){
    const stringJson = localStorage.getItem("carrinho");
    const vetor = JSON.parse(stringJson);

    mostrar(vetor);
}

function mostrar(vetor){

    var lista = document.getElementById("carrinho");
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
            <td><button onclick="removercarrinho(${i})" id="botao" class="vermelho">-</button></td>
        </tr>`;

        lista.appendChild(tabela);

    
    }
    calctotal(vetor);
    console.log(vetor);
}

function calctotal(vetor){
    var mostrar = document.getElementById('total');
    mostrar.innerHTML = "";
    let total = 0;

    for(let i=0; i<vetor.length; i++){
        total += Number(vetor[i].preco);
    }

    let p = document.createElement('p');
    p.innerHTML = `Total: R$${total.toFixed(2)}`
    mostrar.appendChild(p);

}

function removercarrinho(item){
    carrinho.splice(item, 1);
    localStorage.removeItem('carrinho');

    const stringJson = JSON.stringify(carrinho);
    localStorage.setItem('carrinho', stringJson);
    atualizar();
    checarcarrinho();
}

function finalizar(){
    if(carrinho.length == 0){
        alert("CARRINHO VAZIO");
    }else{
    if(confirm("Deseja mesmo finalizar a compra?")){
        alert("Muito obrigado por comprar conosco!");
        window.location.href = "fazopix.html";
        limparcarrinho();
    }
}
}

function checarcarrinho(){
    if(carrinho.length == 0){
        document.getElementById('aviso').innerHTML = "Carrinho vazio";
        document.getElementById('total').innerHTML = "";
    }else{
        document.getElementById('aviso').innerHTML = "";
    }

}

function limparcarrinho(){
    carrinho.splice(0, carrinho.length);
    localStorage.removeItem('carrinho');
}

