function listarTodosLivros(){
    fetch("http://localhost:8080/livros", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao consultar livros.");
        return res.json();
    })
    .then(data => {
        console.log("Livros: ", data);
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function buscarLivroId(){
    let idBuscar = document.getElementById("").value;

    if(!idBuscar){
        alert("Insira um ID válido!");
        return;
    }

    fetch(`http://localhost:8080/livros/${idBuscar}`, {
        method: "GET",
        headers: {
            "Accept" : "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao consultar livro por ID.");
        return res.json();
    })
    .then(data => {
        console.log("Livro: ", data);
    })
    .then(erro => {
        console.log("Erro: ", erro);
    })
}

function deletarLivro(){
    idDeletar = document.getElementById("").value;

    fetch(`htpp://localhost:8080/livros/${idDeletar}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao deletar livro.");
        return;
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function editarLivro(){
    let idEditar;
    let nomeEditar;
    let autorEditar;
    let dataEditar;
    // let clienteEditar;

    // validarCAMPOS

    fetch(`htpp://localhost:8080/livros/${idEditar}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nomeEditar,
            autor: autorEditar,
            dataLancamento: dataEditar
        })
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao atualizar livro.")
    })
    .catch(erro => {
        console.log("Erro: ", erro)
    })
}