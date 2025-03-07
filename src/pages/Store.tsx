import { useState } from "react";
import { ColDef, themeQuartz } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddStore from "../components/AddStore";
import store, { storeItem } from "../../assets/store";


const myTheme = themeQuartz.withParams({
  wrapperBorder: false,
});

const StoreList = () => {
  const [rowData, setRowData] = useState<storeItem[]>(store);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDelete = (id: string) => {
    setRowData((prevData) => prevData.filter((row) => row.id !== id));
  };

  const handleAdd = (values: storeItem) => {
    setRowData((prevData) => [...prevData, {...values, seqNo: prevData.length + 1}]);
  };

  const columnDefs: ColDef<storeItem>[] = [
    {
      headerName: "",
      field: "id",
      suppressSizeToFit: true,
      cellRenderer: (params: any) => (
        <RiDeleteBin6Line
          onClick={() => handleDelete(params.data.id)}
          size={20}
        />
      ),
      pinned: "left"
    },
    {
      headerName: "S. No.",
      field: "seqNo",
      rowDrag: true,
      suppressSizeToFit: true,
      pinned: "left"
    },
    {
      headerName: "Label",
      field: "label",
      editable: true,
      suppressSizeToFit: true,
    },
    {
      headerName: "City",
      field: "city",
      editable: true,
      suppressSizeToFit: true,
    },
    {
      headerName: "State",
      field: "state",
      editable: true,
      suppressSizeToFit: true,
    },
  ];

  return (
    <>
      <div className="p-4 w-100 h-100">
        <div
          className="ag-theme-quartz shadow-sm"
          style={{ width: "100%", height: "80%" }}
        >
          <AgGridReact
            rowData={rowData}
            theme={myTheme}
            columnDefs={columnDefs}
            rowDragManaged={true}
            animateRows={true}
            defaultColDef={{ editable: true }}
            rowModelType="clientSide"
            autoSizeStrategy={{ type: "fitCellContents" }}
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange text-dark px-4 py-2 rounded outline-none"
          >
            NEW STORE
          </button>
        </div>
      </div>
      <AddStore
        showModal={showModal}
        setShowModal={setShowModal}
        handleAdd={handleAdd}
      />
    </>
  );
};

export default StoreList;
