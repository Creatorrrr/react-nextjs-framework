import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import { AgGridColumn } from "ag-grid-react/lib/agGridColumn";
import { format, parseISO } from "date-fns";
import fileSize from "filesize";
import IconFolder from "assets/imgs/icon-folder.svg";
import IconFile from "assets/imgs/icon-file.svg";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

console.debug("AgGridSample.js");

export default function AgGridSample({ onGridReady, rowData, onNameClick }) {
  // 컬럼 기본값 정의
  const defaultColDef = {
    resizable: true,
    sortable: true,
  };

  // 렌더러 설정
  const frameworkComponents = {
    nameRenderer: (props) => (
      <div>
        {props.data.nodeTypeCode === "FOLDER" ? (
          <IconFolder style={{ height: 20 }} />
        ) : props.data.nodeTypeCode === "DOCUMENT" ? (
          <IconFile style={{ height: 20 }} />
        ) : null}
        <span>{props.valueFormatted ? props.valueFormatted : props.value}</span>
      </div>
    ),
  };

  // 컬럼 정의
  const columnDefs = [
    {
      headerName: "이름",
      field: "name",
      flex: 1,
      width: 850,
      cellRenderer: "nameRenderer",
      onCellClicked: onNameClick,
    },
    {
      headerName: "상태",
      field: "status",
      width: 80,
    },
    {
      headerName: "작성자",
      field: "creator.name",
      width: 80,
    },
    {
      headerName: "Feedback",
      field: "feedback",
      width: 80,
    },
    {
      headerName: "결재정보",
      field: "approval",
      width: 80,
    },
    {
      headerName: "최종결재자",
      field: "lastApproval",
      width: 100,
    },
    {
      headerName: "수정일",
      field: "modDate",
      width: 100,
      valueFormatter: (params) => format(parseISO(params.value), "yyyy-MM-dd"),
      cellStyle: () => ({ textAlign: "center" }),
    },
    {
      headerName: "버전",
      field: "version",
      width: 80,
    },
    {
      headerName: "공유구분",
      field: "shareType",
      width: 80,
    },
    {
      headerName: "크기",
      field: "document.size",
      width: 80,
      valueFormatter: (params) => fileSize(parseInt(params.value) || 0),
      cellStyle: () => ({ textAlign: "right" }),
    },
    {
      headerName: "보안등급",
      field: "securityLevel",
      width: 80,
    },
    {
      headerName: "생성일",
      field: "regDate",
      width: 100,
      valueFormatter: (params) => format(parseISO(params.value), "yyyy-MM-dd"),
      cellStyle: () => ({ textAlign: "center" }),
    },
    {
      headerName: "태그",
      field: "tag",
      width: 80,
    },
    {
      headerName: "확장자",
      field: "extension",
      width: 80,
    },
    {
      headerName: "분류",
      field: "type",
      width: 80,
    },
  ];

  return (
    <div className="ag-theme-balham" style={{ height: 400 }}>
      <AgGridReact frameworkComponents={frameworkComponents} defaultColDef={defaultColDef} onGridReady={onGridReady} rowData={rowData}>
        {columnDefs.map((columnDef, index) => (
          <AgGridColumn key={index} {...columnDef}></AgGridColumn>
        ))}
      </AgGridReact>
    </div>
  );
}
