import { useState } from "react";
import skuData, { skuItem } from "./../../assets/skuItem";
import { ColDef, themeQuartz } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddSku from "../components/AddSku";

const myTheme = themeQuartz.withParams({
    
    wrapperBorder: false,
    
  });
const SKU = () => {
  const [rowData, setRowData] = useState<skuItem[]>(skuData);
  const [showModal, setShowModal] = useState<boolean>(false);
  

  const handleDelete = (id: string) => {
    setRowData((prevData) => prevData.filter((row) => row.id !== id));
  };

  const handleAdd = (values:skuItem) => {
    setRowData(prevData=> [...prevData, values]);
  };

  const columnDefs: ColDef<skuItem>[] = [
    {
      headerName: "",
      field: "id",
      suppressSizeToFit: true, 
      cellRenderer: (params: any) => (
            <RiDeleteBin6Line  onClick={() => handleDelete(params.data.id)} size={20} />
      ),
      pinned: "left"
    },
    {
      headerName: "SKU",
      field: "id",
      suppressSizeToFit: true,
      pinned: "left"
    },
    {
      headerName: "Price",
      field: "price",
      editable: true,
      suppressSizeToFit: true,
      valueFormatter: (params) => `$ ${params.value.toFixed(2)}`,
    },
    {
      headerName: "Cost",
      field: "cost",
      editable: true,
      suppressSizeToFit: true,
      valueFormatter: (params) => `$ ${params.value.toFixed(2)}`,
    },
  ];

  return (
    <>
        <div className="p-4 h-100 w-100">
      <div className="ag-theme-quartz shadow-sm" style={{ width: "100%", height: "80%" }}>
        <AgGridReact
          rowData={rowData}
          theme={myTheme}
          columnDefs={columnDefs}
          defaultColDef={{  editable: true }}
          rowModelType="clientSide"
          autoSizeStrategy={{
            type: "fitCellContents",
            

          }}
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={()=> setShowModal(true)}
          className="bg-orange text-dark px-4 py-2 rounded outline-none"
        >
          NEW SKU
        </button>
      </div>
    </div>
    <AddSku showModal={showModal} setShowModal={setShowModal} handleAdd={handleAdd} />
    </>
    
  );
};

export default SKU;
