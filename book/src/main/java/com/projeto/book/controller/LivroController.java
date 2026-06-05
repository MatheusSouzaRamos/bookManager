package com.projeto.book.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.projeto.book.dto.LivroDTO;
import com.projeto.book.service.LivroService;


@RestController
@RequestMapping(value = "/livros")
@CrossOrigin("*")
public class LivroController {
    @Autowired
    private LivroService service;

    @GetMapping
    public ResponseEntity<List<LivroDTO>> findAll(){
        List<LivroDTO> dto = service.findAll();
        return ResponseEntity.ok().body(dto);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<LivroDTO> findById(@PathVariable Long id){
        LivroDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<LivroDTO> insert(@RequestBody LivroDTO dto){
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LivroDTO> update(@PathVariable Long id, @RequestBody LivroDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<LivroDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping(value = "/buscar/{nome}")
    public ResponseEntity<List<LivroDTO>> findByNome(@PathVariable String nome){
        List<LivroDTO> dto = service.findByNome(nome);
        return ResponseEntity.ok().body(dto);
    }

    @GetMapping(value = "/disponivel")
    public ResponseEntity<List<LivroDTO>> findDisponiveis(){
        List<LivroDTO> dto = service.findDisponiveis();
        return ResponseEntity.ok().body(dto);
    }

    @GetMapping(value = "/emprestado")
    public ResponseEntity<List<LivroDTO>> findEmprestados(){
        List<LivroDTO> dto = service.findEmprestados();
        return ResponseEntity.ok().body(dto);
    }
    
}
