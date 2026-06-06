async function buscarLivrosDisponiveis(){
    const clientes = await selectClientesOption();

    fetch("http://localhost:8080/livros/disponivel", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao buscar livros");
        return res.json();
    })
    .then(data => {
        console.log(data);
        dados = document.getElementById("tabelaEmprestimoDisponivel");

        let linhas = ``

        for(const el of data){
            linhas += `
                <tr>
                    <td>${el.id}</td>
                    <td>${el.nome}</td>
                    <td>${el.autor}</td>
                    <td>${el.dataLancamento}</td>
                    <td>
                        <select id="cliente-livro-${el.id}">${clientes}</select>
                    </td>
                    <td>
                        <button onclick="emprestarLivro(${el.id})" style = "padding: 2px;">Emprestar</button>
                    </td>
                </tr>
            `
        }

        dados.innerHTML = `
            <table>
                <tr>
                    <th>ID Livro</th>
                    <th>Livro</th>
                    <th>Autor</th>
                    <th>Ano Pub.</th>
                    <th>Cliente</th>
                    <th>Emprestar</th>
                </tr>
                ${linhas}
            </table>  
        `
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function buscarLivrosEmprestados(){
    fetch("http://localhost:8080/livros/emprestado", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao consultar livros emprestados.");
        return res.json();
    })
    .then(data => {
        // console.log(data);
        dados = document.getElementById("tabelaLivrosEmprestados");

        let linhas = ``

        data.forEach(el => {
            console.log("Livro:", el.nome);
            console.log("Cliente:", el.cliente);
        });

        for(const el of data){
            linhas += `
                <tr>
                    <td>${el.id}</td>
                    <td>${el.nome}</td>
                    <td>${el.autor}</td>
                    <td>${el.dataLancamento}</td>
                    <td>${el.cliente.id}</td>
                    <td>${el.cliente.nome}</td>
                    <td>${el.cliente.telefone}</td>
                    <td><button onclick="devolverLivro(${el.id})" style = "padding: 2px;">Devolver</button></td>
                </tr>
            `
        }

        dados.innerHTML = `
            <table>
                <tr>
                    <th>ID Livro</th>
                    <th>Livro</th>
                    <th>Autor</th>
                    <th>Ano Pub.</th>
                    <th>ID Cliente</th>
                    <th>Nome Cliente</th>
                    <th>Contato</th>
                    <th>Devolver</th>
                </tr>
                ${linhas}
            </table>        
        `
        
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    });
}

function devolverLivro(id){
    fetch(`http://localhost:8080/livros/devolver/${id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao atualizar livro.");
        atualizarTabela();
    })
    .catch(erro => {
        console.log("Erro: ", erro)
    })
}

async function selectClientesOption(){
    const res = await fetch("http://localhost:8080/clientes", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })

    if(!res.ok) throw new Error("Erro ao buscar clientes disponiveis.");
    
    const data = await res.json();

    let text = "";

    for(const el of data){
        text += `<option id = "cliente-${el.id}" value = "${el.id}">${el.id} - ${el.nome}</option>`
    }

    return text;
}

function emprestarLivro(id){
    const clienteId = document.getElementById(`cliente-livro-${id}`).value;

    console.log("id livro", id);
    console.log("Cliente id", clienteId);

    fetch(`http://localhost:8080/livros/emprestar/${id}/${clienteId}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao emprestar livro.");
        atualizarTabela();
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function atualizarTabela(){
    setTimeout(() => {
        buscarLivrosDisponiveis();
        buscarLivrosEmprestados();
    }, 100);
}

