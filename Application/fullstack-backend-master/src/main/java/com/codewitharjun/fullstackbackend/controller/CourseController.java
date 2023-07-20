package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.exception.CourseNotFoundException;
import com.codewitharjun.fullstackbackend.exception.UserNotFoundException;
import com.codewitharjun.fullstackbackend.model.Course;
import com.codewitharjun.fullstackbackend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/course")
    Course newCourse(@RequestBody Course newCourse) {
        return courseRepository.save(newCourse);
    }

    @GetMapping("/courses")
    List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @GetMapping("/course/{id}")
    Course getCourseById(@PathVariable Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/course/{id}")
    Course updateCourse(@RequestBody Course newCourse, @PathVariable Long id) {
        return courseRepository.findById(id)
                .map(course -> {
                    course.setCourse_name(newCourse.getCourse_name());
                    course.setCourse_description(newCourse.getCourse_description());
                    return courseRepository.save(course);
                }).orElseThrow(() -> new CourseNotFoundException(id));
    }

    @DeleteMapping("/course/{id}")
    String deleteCourse(@PathVariable Long id){
        if(!courseRepository.existsById(id)){
            throw new CourseNotFoundException(id);
        }
        courseRepository.deleteById(id);
        return  "Course with id "+id+" has been deleted success.";
    }

}
