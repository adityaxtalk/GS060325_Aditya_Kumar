import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef, themeQuartz } from "ag-grid-community";
import salesData from "../../assets/planning";

const myTheme = themeQuartz.withParams({
    
    wrapperBorder: false,
    
  });


const getMonthFromWeek = (weekNumber: string): string => {
  const week = parseInt(weekNumber.replace("W", ""), 10);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const weekRanges = [4, 8, 13, 17, 22, 26, 30, 35, 39, 44, 48, 52];

  for (let i = 0; i < weekRanges.length; i++) {
    if (week <= weekRanges[i]) return months[i];
  }
  return "Unknown";
};

const SalesPlanning = () => {
  const { rowData, columnDefs } = useMemo(() => {
    if (!salesData || salesData.length === 0) return { rowData: [], columnDefs: [] };

    salesData.sort((a, b) => {
      const week1: number = Number(a.week.match(/\d+/g)?.[0]) || 0;
      const week2: number = Number(b.week.match(/\d+/g)?.[0]) || 0;
      return week1 - week2;
    });
    
    const transformedData: Record<string, any> = {};

    const allWeeks = new Set<string>();

    salesData.forEach(({ week }) => {
      allWeeks.add(week);
    });
    const cleanValue = (val: string) =>
      Number(val.replace(/[$,()]/g, "").trim()) || 0;
    salesData.forEach(({ store, sku, week, salesUnits, salesDollars, costDollars, gmDollars, gmPercent }) => {
      const key = `${store}-${sku}`;
      if (!transformedData[key]) { 
        transformedData[key] = { store, sku }; 
        allWeeks.forEach((week) => {
          transformedData[key][`${week}_SalesUnits`] = 0;
          transformedData[key][`${week}_SalesDollars`] = "0.0";
          transformedData[key][`${week}_CostDollars`] = "0.0";
          transformedData[key][`${week}_GMDollars`] = "0.0";
          transformedData[key][`${week}_GMPercent`] = "0.0";
        });
    }

      transformedData[key][`${week}_SalesUnits`] = cleanValue(salesUnits);
      transformedData[key][`${week}_SalesDollars`] = `${salesDollars} `;
      transformedData[key][`${week}_CostDollars`] = `${costDollars}`;
      transformedData[key][`${week}_GMDollars`] = `${gmDollars}`;
      transformedData[key][`${week}_GMPercent`] = `${gmPercent}`;
    });

    const rowData = Object.values(transformedData);

    const monthGroups: Record<string, string[]> = {};
    salesData.forEach(({ week }) => {
      const month = getMonthFromWeek(week);
      if (!monthGroups[month]) monthGroups[month] = [];
      if (!monthGroups[month].includes(week)) monthGroups[month].push(week);
    });

    const columnDefs: ColDef[] = [
      { headerName: "Store", field: "store", pinned: "left", width: 100 },
      { headerName: "SKU", field: "sku", pinned: "left", width: 120 },
      ...Object.entries(monthGroups).map(([month, weeks]) => ({
        headerName: month,
        children: weeks.map((week) => ({
          headerName: `Week ${week.match(/\d+/g)?.[0] || "?"}`,
          children: [
            {
              headerName: "Units",
              field: `${week}_SalesUnits`,
              editable: true,
              width: 100,
            },
            { headerName: "Sales", field: `${week}_SalesDollars` },
            { headerName: "Cost", field: `${week}_CostDollars` },
            { headerName: "GM$", field: `${week}_GMDollars` },
            {
              headerName: "GM%",
              field: `${week}_GMPercent`,
              cellStyle: (params) => {
                const value = parseFloat(params.value);
                if (isNaN(value)) return {};
                if (value >= 40) return { backgroundColor: "green", color: "white" };
                if (value >= 10) return { backgroundColor: "yellow", color: "black" };
                if (value >= 5) return { backgroundColor: "orange", color: "white" };
                return { backgroundColor: "red", color: "white" };
              },
            },
          ],
        })),
      })),
    ];

    return { rowData, columnDefs };
  }, [salesData]);

  return (
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
          </div>
  );
};

export default SalesPlanning;
