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
        // console.log("Livros: ", data);
        let dados = document.getElementById("tabelaLivros");
        let linhas = ""

        for(let dado of data){
            linhas += `
                <tr>
                    <td>${dado.id}</td>
                    <td>${dado.nome}</td>
                    <td>${dado.autor}</td>
                    <td>${dado.dataLancamento}</td>
                    <td>${dado.cliente != null ? "Não" : "Sim"}</td>
                </tr>
            `
        }

        dados.innerHTML = `
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Autor</th>
                    <th>Data de Lançamento</th>
                    <th>Disponível</th>
                </tr>
                ${linhas}
            </table>
        `
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function buscarLivroNome(){
    nomeBuscar = document.getElementById("nomeBuscarLivro").value;

    if(!nomeBuscar || nomeBuscar.trim() === ""){
        listarTodosLivros();
        return;
    }

    fetch(`http://localhost:8080/livros/buscar/${nomeBuscar}`, {
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
        // console.log("Livros: ", data);
        let dados = document.getElementById("tabelaLivros");
        let linhas = ""

        for(let dado of data){
            linhas += `
                <tr>
                    <td>${dado.id}</td>
                    <td>${dado.nome}</td>
                    <td>${dado.autor}</td>
                    <td>${dado.dataLancamento}</td>
                    <td>${dado.cliente != null ? "Não" : "Sim"}</td>
                </tr>
            `
        }

        dados.innerHTML = `
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Autor</th>
                    <th>Data de Lançamento</th>
                    <th>Disponível</th>
                </tr>
                ${linhas}
            </table>
        `
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function buscarLivroId(){
    let idBuscar = document.getElementById("idBuscarLivro").value;

    if(!idBuscar){
        listarTodosLivros();
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
        // console.log("Livro: ", data);
        let dados = document.getElementById("tabelaLivros");

        dados.innerHTML = `
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Autor</th>
                    <th>Data de Lançamento</th>
                    <th>Disponível</th>
                </tr>
                <tr>
                    <td>${data.id}</td>
                    <td>${data.nome}</td>
                    <td>${data.autor}</td>
                    <td>${data.dataLancamento}</td>
                    <td>${data.cliente != null ? "Não" : "Sim"}</td>
                </tr>
            </table>
        `
    })
    .then(erro => {
        console.log("Erro: ", erro);
    })
}

function deletarLivro(){
    idDeletar = document.getElementById("idDeletarLivro").value;

    if(!idDeletar){
        alert("Insira um ID válido.");
        return;
    }

    fetch(`http://localhost:8080/livros/${idDeletar}`, {
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
    let idEditar = document.getElementById("idEditarLivro").value;
    let nomeEditar = document.getElementById("nomeEditarLivro").value;
    let autorEditar = document.getElementById("autorEditarLivro").value;
    let dataEditar = document.getElementById("dataEditarLivro").value;

    if(!idEditar || !nomeEditar || nomeEditar.trim() === "" || !autorEditar || autorEditar.trim() === "" || !dataEditar){
        alert("Campos inválidos, confira os campos de edição.");
        return;
    }

    fetch(`http://localhost:8080/livros/${idEditar}`, {
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

function cadastrarLivro(){
    let nomeCadastro = document.getElementById("nomeCadastrarLivro").value;
    let autorCadastro = document.getElementById("autorCadastrarLivro").value;
    let dataCadastro = document.getElementById("dataCadastrarLivro").value;

    if(!nomeCadastro || nomeCadastro.trim() === "" || !autorCadastro || autorCadastro.trim() === "" || !dataCadastro){
        alert("Campos inválidos, confira os campos de edição.");
        return;
    }

    fetch(`http://localhost:8080/livros`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nomeCadastro,
            autor: autorCadastro,
            dataLancamento: dataCadastro
        })
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao cadastrar livro.")
    })
    .catch(erro => {
        console.log("Erro: ", erro)
    })
}

function atualizarTabela(){
    setTimeout(() => {
        listarTodosLivros();
    }, 100);
}

