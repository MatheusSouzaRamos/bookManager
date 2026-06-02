function listarTodosClientes(){
    fetch("http://localhost:8080/clientes", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao consultar clientes.");
        return res.json();
    })
    .then(data => {
        console.log("Clientes: ", data);
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function buscarClienteId(){
    let idBuscar = document.getElementById("idBuscarCliente").value;

    if(!idBuscar){
        alert("Insira um ID válido!");
        return;
    }

    fetch(`http://localhost:8080/clientes/${idBuscar}`, {
        method: "GET",
        headers: {
            "Accept" : "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao consultar cliente por ID.");
        return res.json();
    })
    .then(data => {
        console.log("Cliente: ", data);
    })
    .then(erro => {
        console.log("Erro: ", erro);
    })
}

function deletarCliente(){
    idDeletar = document.getElementById("idDeletarCliente").value;

    if(!idDeletar){
        alert("Insira um ID válido.");
        return;
    }

    fetch(`http://localhost:8080/clientes/${idDeletar}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao deletar cliente.");
        return;
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function editarCliente(){
    let idEditar = document.getElementById("idEditarCliente").value;
    let nomeEditar = document.getElementById("nomeEditarCliente").value;
    let enderecoEditar = document.getElementById("enderecoEditarCliente").value;
    let cpfEditar = document.getElementById("cpfEditarCliente").value;
    let telefoneEditar = document.getElementById("telefoneEditarCliente").value;

    if(!idEditar || !nomeEditar || nomeEditar.trim() === "" || !enderecoEditar || enderecoEditar.trim() === "" || !cpfEditar || cpfEditar.trim() === "" || !telefoneEditar || telefoneEditar.trim() === ""){
        alert("Campos inválidos, confira os campos de edição.");
        return;
    }

    fetch(`http://localhost:8080/clientes/${idEditar}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            cpf: cpfEditar,
            endereco: enderecoEditar,
            nome: nomeEditar,
            teledone: telefoneEditar,
        })
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao atualizar cliente.")
    })
    .catch(erro => {
        console.log("Erro: ", erro)
    })
}