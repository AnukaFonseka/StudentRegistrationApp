import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import LoginForm from "./pages/Login/Login";
import SignInForm from "./pages/SignIn/Signin";
import Courses_Home from "./courses/Courses_Home";
import AddCourse from "./courses/AddCourse";
import ViewCourse from "./courses/ViewCourse";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/signin" element={<SignInForm />} />
          <Route exact path="/courses" element={<Courses_Home />} />
          <Route exact path="/addcourse" element={<AddCourse />} />
          <Route exact path="/viewCourse" element={<ViewCourse />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
