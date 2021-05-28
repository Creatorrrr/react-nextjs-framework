import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import { AgGridColumn } from "ag-grid-react/lib/agGridColumn";
import { format, parseISO } from "date-fns";
import fileSize from "filesize";
import ContentIcon from "components/commons/icon/ContentIcon";
import { forwardRef, Fragment, useEffect, useImperativeHandle, useRef, useState } from "react";
import ContextMenuLayout from "@/components/commons/contextmenu/ContextMenuLayout";
import DefaultHeader from "@/components/commons/aggrid/DefaultHeader";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

console.debug("AgGridSample.js");

export default function AgGridSample({ onGridReady, rowData, onNameClick }) {
  // 컬럼 기본값 정의
  const defaultColDef = {
    resizable: true,
    sortable: true,
    rowSelection: "multiple",
  };

  // 렌더러 설정
  const frameworkComponents = {
    agColumnHeader: ({ displayName }) => <DefaultHeader text={displayName} onFilterClick={clickFilter} />,
    nameRenderer: ({ data, valueFormatted, value }) => (
      <Fragment>
        <ContentIcon nodeTypeCode={data.nodeTypeCode} />
        <span>{valueFormatted ? valueFormatted : value}</span>
      </Fragment>
    ),
    nameEditor: forwardRef((props, ref) => {
      const [value, setValue] = useState(props.value);
      const refInput = useRef(null);

      useEffect(() => {
        setTimeout(() => refInput.current.focus());
      }, []);

      useImperativeHandle(ref, () => ({
        getValue: () => value,
      }));

      // 값 변경
      const onChange = (event) => {
        setValue(event.target.value);
      };

      return (
        <Fragment>
          <ContentIcon nodeTypeCode={data.nodeTypeCode} />
          <input type="text" ref={refInput} value={value} onChange={onChange} style={{ width: "100%" }} />
        </Fragment>
      );
    }),
  };

  // 컬럼 정의
  const columnDefs = [
    {
      headerName: "이름",
      field: "name",
      flex: 1,
      width: 850,
      cellRenderer: "nameRenderer",
      cellEditor: "nameEditor",
      onCellClicked: onNameClick,
      editable: true,
      filter: true,
    },
    {
      headerName: "상태",
      field: "status",
      width: 80,
    },
    {
      headerName: "작성자",
      field: "creator.name",
      width: 100,
    },
    {
      headerName: "Feedback",
      field: "feedback",
      width: 100,
    },
    {
      headerName: "결재정보",
      field: "approval",
      width: 100,
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
      width: 100,
    },
    {
      headerName: "확장자",
      field: "extension",
      width: 100,
    },
    {
      headerName: "분류",
      field: "type",
      width: 80,
    },
  ];

  /**
   * 필터 클릭
   */
  const clickFilter = (props) => {
    alert("clickFilter " + props.text);
  };

  return (
    <ContextMenuLayout
      menus={[
        {
          name: "메뉴1",
          onClick: () => {
            alert("메뉴1클릭");
          },
        },
        {
          name: "메뉴2",
          children: [
            {
              name: "메뉴2하위1",
              onClick: () => {
                alert("메뉴2하위1클릭");
              },
            },
            {
              name: "메뉴2하위2",
              onClick: () => {
                alert("메뉴2하위2클릭");
              },
            },
            {
              name: "메뉴2하위3",
              children: [
                {
                  name: "메뉴2하위3하위1",
                  onClick: () => {
                    alert("메뉴2하위3하위1클릭");
                  },
                },
                {
                  name: "메뉴2하위3하위2",
                  onClick: () => {
                    alert("메뉴2하위3하위2클릭");
                  },
                },
              ],
            },
          ],
        },
        {
          name: "메뉴3",
          onClick: () => {
            alert("메뉴3클릭");
          },
        },
      ]}
    >
      <div className="ag-theme-balham" style={{ height: 400 }}>
        <AgGridReact frameworkComponents={frameworkComponents} defaultColDef={defaultColDef} onGridReady={onGridReady} rowData={rowData}>
          {columnDefs.map((columnDef, index) => (
            <AgGridColumn key={index} {...columnDef}></AgGridColumn>
          ))}
        </AgGridReact>
      </div>
    </ContextMenuLayout>
  );
}
