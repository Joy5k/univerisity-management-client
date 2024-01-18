import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { adminPath } from "./admin.routes";
import { routeGeneration } from "../utils/routeGeneration";
import { facultyPath } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGeneration(adminPath),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGeneration(facultyPath),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGeneration(studentPaths),
  },

  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);
export default router;
