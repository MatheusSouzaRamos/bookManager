package com.projeto.book.repository;


import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.book.model.Livro;

public interface LivroRepository extends JpaRepository<Livro, Long> {
    
    // public List<Livro> findByClienteId(Long id);

    public List<Livro> findByNomeContainingIgnoreCase(String nome, Sort sort);

}
