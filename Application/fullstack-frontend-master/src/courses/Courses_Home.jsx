import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../pages/Home/home.css"

export default function Courses_Home() {
  const [courses, setCourses] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/courses");
    setCourses(result.data);
  };

  const deleteCourse = async (id) => {
    await axios.delete(`http://localhost:8080/course/${id}`);
    await loadCourses();
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="add-button">
          <Link className="btn btn-primary" to="/addcourse">
            Add Course
          </Link>
          <Link className="btn btn-primary" to="/home">
            Students
          </Link>
        </div>
        <br/>
        <table className="table border shadow table-home">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Course Name</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{course.course_name}</td>
                <td>{course.course_description}</td>

                <td>
                  {/*<Link*/}
                  {/*  className="btn btn-primary mx-2"*/}
                  {/*  to={`/viewCourse/${course.id}`}*/}
                  {/*>*/}
                  {/*  View*/}
                  {/*</Link>*/}
                  {/*<Link*/}
                  {/*  className="btn btn-outline-primary mx-2"*/}
                  {/*  to={`/editcourse/${course.id}`}*/}
                  {/*>*/}
                  {/*  Edit*/}
                  {/*</Link>*/}
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteCourse(course.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
