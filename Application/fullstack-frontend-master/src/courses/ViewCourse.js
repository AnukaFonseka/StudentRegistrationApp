import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewCourse() {
    const [course, setCourse] = useState({
        name: "",
        description: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadCourse();
    }, []);

    const loadCourse = async () => {
        const result = await axios.get(`http://localhost:8080/courses/${id}`);
        setCourse(result.data);
    };

    return (
        <div className="container container-view">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Course Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of course id : {course.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name:</b>
                                    {course.name}
                                </li>
                                <li className="list-group-item">
                                    <b>UserName:</b>
                                    {course.description}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/courses"}>
                        Back to Courses
                    </Link>
                </div>
            </div>
        </div>
    );
}