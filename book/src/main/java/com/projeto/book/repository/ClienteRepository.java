package com.projeto.book.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.book.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{
    public List<Cliente> findByNomeContainingIgnoreCase(String nome, Sort sort);
}
