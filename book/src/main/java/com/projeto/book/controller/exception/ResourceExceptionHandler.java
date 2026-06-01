package com.projeto.book.controller.exception;

import java.time.Instant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.projeto.book.service.exception.DatabaseException;
import com.projeto.book.service.exception.EntityNotFoundException;

import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ResourceExceptionHandler {
    
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<StandardError> entityNotFound(EntityNotFoundException e, HttpServletRequest request){
        StandardError err = new StandardError();
        err.setTimeInstant(Instant.now());
        err.setStatus(HttpStatus.NOT_FOUND.value());
        err.setError("Não Encontrado.");
        err.setMensage(e.getMessage());
        err.setPath(request.getRequestURI());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }

    @ExceptionHandler(DatabaseException.class)
    public ResponseEntity<StandardError> databaseException(DatabaseException e, HttpServletRequest request){
        StandardError err = new StandardError();
        HttpStatus status = HttpStatus.BAD_REQUEST;
        err.setTimeInstant(Instant.now());
        err.setStatus(status.value());
        err.setError("Not Found");
        err.setPath(request.getRequestURI());
        return ResponseEntity.status(status).body(err);
    }
}