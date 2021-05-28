import { DataGrid } from "@material-ui/data-grid";

export default function DataGridSample({ rows, pageSize, onNameClick }) {
  // 컬럼 정의
  const columns = [
    {
      headerName: "종류",
      field: "type",
      width: 80,
    },
    {
      headerName: "이름",
      field: "name",
      flex: 1,
      width: 850,
      renderCell: (params) => (
        <span
          onClick={() => {
            onNameClick(params);
          }}
        >
          {params.value}
        </span>
      ),
    },
    {
      headerName: "버전",
      field: "version",
      width: 80,
    },
    {
      headerName: "용량",
      field: "size",
      width: 100,
    },
    {
      headerName: "소유자",
      field: "ownerName",
      width: 150,
    },
    {
      headerName: "최종수정일",
      field: "modDate",
      width: 180,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={pageSize} checkboxSelection />
    </div>
  );
}
