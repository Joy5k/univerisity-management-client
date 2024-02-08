import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import AcademicDepartment from "../pages/admin/academicManagment/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagment/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagment/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagment/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagment/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagment/CreateAcademicSemester";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import Courses from "../pages/admin/courseManagement/Courses";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import RegisteredSemesters from "../pages/admin/courseManagement/RegisteredSemesters";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import OfferedCourse from "../pages/faculty/OfferedCourse";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";



export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Managment",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester></CreateAcademicSemester>,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester></AcademicSemester>,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty></CreateAcademicFaculty>,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty></AcademicFaculty>,
      }
      ,
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment></CreateAcademicDepartment>,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment></AcademicDepartment>,
      }
    ]
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Students",
        path: "student-data",
        element: <StudentData></StudentData>,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetails></StudentDetails>,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    
    ],
  },
  {
    name: 'Course Management',
    children: [
      {
        name: 'Semester Registration',
        path: 'semester-registration',
        element: <SemesterRegistration />,
      },
      {
        name: 'Registered Semesters',
        path: 'registered-semesters',
        element: <RegisteredSemesters />,
      },
      {
        name: 'Create Course',
        path: 'create-course',
        element: <CreateCourse />,
      },
      {
        name: 'Courses',
        path: 'courses',
        element: <Courses />,
      },
      {
        name: 'Offer Course',
        path: 'offer-course',
        element: <OfferCourse />,
      },
      {
        name: 'Offered Courses',
        path: 'offered-courses',
        element: <OfferedCourse />,
      },
    ],
  },
];

// export const adminSidebarItems = adminPath.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.path,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//       return acc;
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }
//     return acc;
//   },
//   []
// );

/**
 * Remove below code in utils file for reusing.
 */
// export const adminRoutes = adminPath.reduce((acc: TRoutes[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//     }
//     return acc
// }, []);
