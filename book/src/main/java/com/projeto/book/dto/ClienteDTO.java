package com.projeto.book.dto;

import java.util.List;

import com.projeto.book.model.Cliente;
import com.projeto.book.model.Livro;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClienteDTO {
    private Long id;
    private String nome;
    private String cpf;
    private String endereco;
    private String telefone;
    private List<Livro> livros;

    public ClienteDTO(Cliente cliente) {
        this.id = cliente.getId();
        this.nome = cliente.getNome();
        this.cpf = cliente.getCpf();
        this.endereco = cliente.getEndereco();
        this.telefone = cliente.getTelefone();
        this.livros = cliente.getLivros();
    }
}
