package com.projeto.book.dto;

import java.time.LocalDate;

import com.projeto.book.model.Livro;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LivroDTO {
    private Long id;
    private String nome;
    private String autor;
    private LocalDate dataLancamento;

    public LivroDTO(Livro livro){
        this.id = livro.getId();
        this.nome = livro.getNome();
        this.autor = livro.getAutor();
        this.dataLancamento = livro.getDataLancamento();
    }
}
