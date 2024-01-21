import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data } = useGetAllSemesterQuery(undefined)
    return (
        <div>
            <h1>Academic Semester route</h1>
        </div>
    );
};

export default AcademicSemester;