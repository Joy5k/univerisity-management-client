import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types/global";
import { TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagementApi";

type TTableData = Pick<TStudent, "name" | "id">;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery(params);
  const tableData = studentData?.data?.map(({ _id, fullName, id }) => ({
    key: _id,
    fullName,
    id,
  }));
console.log(studentData,'studentData');
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
      title: "Action",
      render: () => (
        <Space>
          <Button>Details</Button>
          <Button>Update</Button>
          <Button>Block</Button>
        </Space>
        ),
      width:"1%"
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
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default StudentData;
