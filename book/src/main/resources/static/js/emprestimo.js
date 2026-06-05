function buscarLivrosDisponiveis(){
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
        console.log(data);
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    });
}