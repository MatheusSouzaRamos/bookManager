package com.projeto.book.controller.exception;

import java.time.Instant;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StandardError {
    private Instant timeInstant;
    private Integer Status;
    private String error;
    private String mensage;
    private String path;
}