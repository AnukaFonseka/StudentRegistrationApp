package com.codewitharjun.fullstackbackend.repository;

import com.codewitharjun.fullstackbackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Student,Long> {
}
