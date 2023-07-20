package com.codewitharjun.fullstackbackend.repository;

import com.codewitharjun.fullstackbackend.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course,Long> {
}
