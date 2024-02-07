import {
  Button,
  Modal,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types/global";
import { TStudent } from "../../../types";
import {
  useGetAllStudentsQuery,
  useUpdateStudentStatusMutation,
} from "../../../redux/features/admin/userManagementApi";
import { Link } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

type TTableData = Pick<TStudent, "fullName" | "id" | "email" | "contactNo">;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentStatus, setStudentStatus] = useState("in-progress");
  const [studentId, setStudentId] = useState("");
  const [updateStudentStatus] = useUpdateStudentStatusMutation(undefined);

  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery([
    { name: "limit", value: 10 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  const metaData = studentData?.meta;
  const tableData = studentData?.data?.map(
    ({ _id, fullName, id, email, contactNo, user }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
      user,
    })
  );

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
  

    if (studentStatus === "in-progress") {
      const blockStudent = {
        id: studentId,
        data: { status: "blocked" },
      };
      const res = await updateStudentStatus(blockStudent);
      console.log(res, "blocked response");
    }
    if (studentStatus === "blocked") {
      setStudentStatus("in-progress");
      const unBlockStudent = {
        id: studentId,
        data: { status: "in-progress" },
      };

      const res = await updateStudentStatus(unBlockStudent);
      console.log(res, "unblocked response");
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "fullName",
    },

    {
      title: "Roll No.",
      dataIndex: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact No.",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      render: (item) => (
        <Space>
          <Link to={`/admin/student-data/${item.key}`}>
            <Button>Details</Button>
          </Link>
          <Button>Update</Button>

          <Button
            style={{ backgroundColor: "#FFA732", color: "white" }}
            type="default"
            onClick={() => {
              showModal();
              setStudentId(item.user._id);
              setStudentStatus(item.user.status)
            }}
          >
            {item.user.status === "blocked" ? "un-block" : "Block"}
          </Button>
        </Space>
      ),
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      setParams(queryParams);
    }
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      ></Pagination>
    </>
  );
};

export default StudentData;
