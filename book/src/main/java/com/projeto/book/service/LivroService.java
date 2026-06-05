package com.projeto.book.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projeto.book.dto.LivroDTO;
import com.projeto.book.model.Livro;
import com.projeto.book.repository.LivroRepository;
import com.projeto.book.service.exception.DatabaseException;

import jakarta.persistence.EntityNotFoundException;


@Service
public class LivroService {
    @Autowired
    private LivroRepository repository;

    @Transactional(readOnly = true)
    public List<LivroDTO> findAll(){
        List<Livro> list = repository.findAll(Sort.by("id"));
        List<LivroDTO> dto = new ArrayList<>();
        for(Livro l : list){
            dto.add(new LivroDTO(l));
        }
        return dto;
    }

    @Transactional(readOnly = true)
    public LivroDTO findById(Long id){
        Optional<Livro> obj = repository.findById(id);
        Livro entity = obj.orElseThrow(() -> new EntityNotFoundException("Não encontrado."));
        return new LivroDTO(entity);
    }

    @Transactional
    public LivroDTO insert(LivroDTO dto){
        Livro entity = new Livro();
        entity.setAutor(dto.getAutor());
        entity.setCliente(dto.getCliente());
        entity.setDataLancamento(dto.getDataLancamento());
        entity.setNome(dto.getNome());
        entity = repository.save(entity);
        return new LivroDTO(entity);
    }

    @Transactional
    public LivroDTO update(Long id, LivroDTO dto){
        Livro entity = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Não encontrado."));
        entity.setAutor(dto.getAutor());
        entity.setCliente(entity.getCliente());
        entity.setDataLancamento(dto.getDataLancamento());
        entity.setNome(dto.getNome());
        entity = repository.save(entity);
        return new LivroDTO(entity);
    }

    @Transactional
    public void delete(Long id){
        try{
            repository.deleteById(id);
        } catch (Exception e ){
            throw new DatabaseException("Integridade Violada");
        }
    }

    @Transactional
    public List<LivroDTO> findByNome(String nome){
        List<Livro> list = repository.findByNomeContainingIgnoreCase(nome, Sort.by("id"));
        List<LivroDTO> dto = new ArrayList<>();
        for(Livro l : list){
            dto.add(new LivroDTO(l));
        }
        return dto;
    }

    @Transactional
    public List<LivroDTO> findDisponiveis(){
        List<Livro> list = repository.findLivrosDisponiveis(Sort.by("id"));
        List<LivroDTO> dto = new ArrayList<>();
        for(Livro l : list){
            dto.add(new LivroDTO(l));
        }
        return dto;
    }

    @Transactional
    public List<LivroDTO> findEmprestados(){
        List<Livro> list = repository.findLivrosEmprestados(Sort.by("id"));
        List<LivroDTO> dto = new ArrayList<>();
        for(Livro l : list){
            dto.add(new LivroDTO(l));
        }
        return dto;
    }

    @Transactional
    public void devolver(Long id){
        Livro livro = repository.findById(id).orElseThrow(() -> new EntityNotFoundException());
        livro.setCliente(null);
        repository.save(livro);
    }
}
