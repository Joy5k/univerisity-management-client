import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();
  return (
    <div>
      <h3>student id {studentId}</h3>
    </div>
  );
};

export default StudentDetails;
