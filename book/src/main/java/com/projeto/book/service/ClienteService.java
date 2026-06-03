package com.projeto.book.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projeto.book.dto.ClienteDTO;
import com.projeto.book.model.Cliente;
import com.projeto.book.repository.ClienteRepository;
import com.projeto.book.service.exception.DatabaseException;
import com.projeto.book.service.exception.EntityNotFoundException;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository repository;

    @Transactional(readOnly = true)
    public List<ClienteDTO> findAll(){
        List<Cliente> list = repository.findAll(Sort.by("id"));
        List<ClienteDTO> dto = new ArrayList<>();
        for(Cliente c : list){
            dto.add(new ClienteDTO(c));
        }
        return dto;
    }

    @Transactional(readOnly = true)
    public ClienteDTO findById(Long id){
        Optional<Cliente> obj = repository.findById(id);
        Cliente entity = obj.orElseThrow(() -> new EntityNotFoundException("Não encontrado."));
        return new ClienteDTO(entity);
    }

    @Transactional
    public ClienteDTO insert(ClienteDTO dto){
        Cliente entity = new Cliente();
        entity.setCpf(dto.getCpf());
        entity.setEndereco(dto.getEndereco());
        // entity.setLivros(dto.getLivros());
        entity.setNome(dto.getNome());
        entity.setTelefone(dto.getTelefone());
        entity = repository.save(entity);
        return new ClienteDTO(entity);
    }

    @Transactional
    public ClienteDTO update(Long id, ClienteDTO dto){
        Cliente entity = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Não encontrado."));
        entity.setCpf(dto.getCpf());
        entity.setEndereco(dto.getEndereco());
        // entity.setLivros(dto.getLivros());
        entity.setNome(dto.getNome());
        entity.setTelefone(dto.getTelefone());
        entity = repository.save(entity);
        return new ClienteDTO(entity);
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
    public List<ClienteDTO> findByNome(String nome){
        List<Cliente> list = repository.findByNomeContainingIgnoreCase(nome, Sort.by("id"));
        List<ClienteDTO> dto = new ArrayList<>();
        for(Cliente c : list){
            dto.add(new ClienteDTO(c));
        }
        return dto;
    }

}
