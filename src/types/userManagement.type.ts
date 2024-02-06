


export type TUserAcademicDepartment = {
    _id: string;
    name: string;
    academicFaculty: {
      _id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    createdAt: string;
    updatedAt: string;
  };
  
  
  export type TUser = {
    _id: string;
    id: string;
    email: string;
    needsPasswordChange: boolean;
    role: string;
    status: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  export type TUserName = {
    firstName: string;
    middleName: string;
    lastName: string;
    _id: string;
  };
  
  export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
    _id: string;
  };
  
  export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
    _id: string;
  };
  
  export type TAdmissionSemester = {
    _id: string;
    name: string;
    year: string;
    code: string;
    startMonth: string;
    endMonth: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  
  
  export type TAcademicFaculty = {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  export type TStudent = {
    _id: string;
    id: string;
    user: TUser;
    name: TUserName;
    gender: string;
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloogGroup: string;
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImg: string;
    admissionSemester: TAdmissionSemester;
    isDeleted: boolean;
    academicDepartment: TUserAcademicDepartment;
    academicFaculty: TAcademicFaculty;
    fullName: string;
  };
  