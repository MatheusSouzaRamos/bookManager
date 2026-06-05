package com.projeto.book.repository;


import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.projeto.book.model.Livro;

public interface LivroRepository extends JpaRepository<Livro, Long> {
    
    // public List<Livro> findByClienteId(Long id);

    public List<Livro> findByNomeContainingIgnoreCase(String nome, Sort sort);

    @Query("SELECT l FROM Livro l WHERE l.cliente IS NULL")
    public List<Livro> findLivrosDisponiveis(Sort sort);

    @Query("SELECT l FROM Livro l WHERE l.cliente IS NOT NULL")
    public List<Livro> findLivrosEmprestados(Sort sort);

}
