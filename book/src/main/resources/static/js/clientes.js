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
        // console.log("Clientes: ", data);
        let dados = document.getElementById("tabelaClientes");
        let linhas = ""

        for(let dado of data){
            linhas += `
                <tr>
                    <td>${dado.id}</td>
                    <td>${dado.nome}</td>
                    <td>${dado.telefone}</td>
                    <td>${dado.endereco}</td>
                    <td>${dado.cpf}</td>
                </tr>
            
            `
        }

        dados.innerHTML = `
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>CPF</th>
                </tr>
                ${linhas}
            </table>
        `
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function buscarClienteId(){
    let idBuscar = document.getElementById("idBuscarCliente").value;

    if(!idBuscar){
        listarTodosClientes();
        // alert("Insira um ID válido!");
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
        let dados = document.getElementById("tabelaClientes");

        dados.innerHTML = `
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>CPF</th>
                </tr>
                <tr>
                    <td>${data.id}</td>
                    <td>${data.nome}</td>
                    <td>${data.telefone}</td>
                    <td>${data.endereco}</td>
                    <td>${data.cpf}</td>
                </tr>
            </table>
        `
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function buscarClienteNome(){
    let nomeBuscar = document.getElementById("nomeBuscarCliente").value;
    if(!nomeBuscar || nomeBuscar.trim() === ""){
        listarTodosClientes();
        return;
    }
    fetch(`http://localhost:8080/clientes/buscar/${nomeBuscar}`, {
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
        // console.log("Clientes: ", data);
        let dados = document.getElementById("tabelaClientes");
        let linhas = ""

        for(let dado of data){
            linhas += `
                <tr>
                    <td>${dado.id}</td>
                    <td>${dado.nome}</td>
                    <td>${dado.telefone}</td>
                    <td>${dado.endereco}</td>
                    <td>${dado.cpf}</td>
                </tr>
            
            `
        }

        dados.innerHTML = `
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>CPF</th>
                </tr>
                ${linhas}
            </table>
        `
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}


function inserirCliente(){
    let nomeInserir = document.getElementById("nomeInserirCliente").value;
    let enderecoInserir = document.getElementById("enderecoInserirCliente").value;
    let cpfInserir = document.getElementById("cpfInserirCliente").value;
    let telefoneInserir = document.getElementById("telefoneInserirCliente").value;

    if(!nomeInserir || nomeInserir.trim() === "" || !enderecoInserir || enderecoInserir.trim() === "" || !cpfInserir || cpfInserir.trim() === "" || !telefoneInserir || telefoneInserir.trim() === ""){
        alert("Campos inválidos, confira os campos de edição.");
        return;
    }

    fetch(`http://localhost:8080/clientes`, {
        method: "POST",
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
        if(!res.ok) throw new Error("Erro ao inserir cliente.")
    })
    .catch(erro => {
        console.log("Erro: ", erro)
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