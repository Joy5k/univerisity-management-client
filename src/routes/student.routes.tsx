import StudentDashboard from "../pages/student/StudentDashboard";
import StudentOfferedCourse from "../pages/student/StudentOfferedCourse";

export const studentPaths = [
    {
        name: "Student",
        path: "student",
        element:<StudentDashboard></StudentDashboard>
    },
    {
        name: "Offered Course",
        path: "offered-course",
        element:<StudentOfferedCourse></StudentOfferedCourse>
    }
]