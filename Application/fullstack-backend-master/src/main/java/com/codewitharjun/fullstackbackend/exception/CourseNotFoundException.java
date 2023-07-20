package com.codewitharjun.fullstackbackend.exception;

public class CourseNotFoundException extends RuntimeException {

    public CourseNotFoundException(Long id) { super(("Could not find the course with id" + id));}
}
