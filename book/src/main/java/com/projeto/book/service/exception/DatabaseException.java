package com.projeto.book.service.exception;

public class DatabaseException extends RuntimeException {
    public DatabaseException(String msg){
        super(msg);
    }
}