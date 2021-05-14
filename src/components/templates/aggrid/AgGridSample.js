import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import { AgGridColumn } from "ag-grid-react/lib/agGridColumn";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

console.debug("AgGridSample.js");

export default function AgGridSample({ onGridReady, rowData, onNameClick }) {
  // 컬럼 기본값 정의
  const defaultColDef = {
    resizable: true,
    sortable: true,
  };

  // 컬럼 정의
  const columnDefs = [
    {
      width: 50,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      resizable: false,
    },
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
      onCellClicked: onNameClick,
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
    <div className="ag-theme-balham" style={{ height: 400 }}>
      <AgGridReact defaultColDef={defaultColDef} onGridReady={onGridReady} rowData={rowData}>
        {columnDefs.map((columnDef, index) => (
          <AgGridColumn key={index} {...columnDef}></AgGridColumn>
        ))}
      </AgGridReact>
    </div>
  );
}
