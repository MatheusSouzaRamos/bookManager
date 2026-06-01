package com.projeto.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.book.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{
}
