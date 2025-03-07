import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const data = [
    { week: "W01", GM_Dollars: 140061.78, Sales_Dollars: 239526.34, GM_Percentage: 58 },
    { week: "W02", GM_Dollars: 110391.21, Sales_Dollars: 258634.60, GM_Percentage: 43 },
    { week: "W03", GM_Dollars: 101657.28, Sales_Dollars: 263774.46, GM_Percentage: 39 },
    { week: "W04", GM_Dollars: 134341.07, Sales_Dollars: 332652.41, GM_Percentage: 40 },
    { week: "W05", GM_Dollars: 130398.15, Sales_Dollars: 275162.26, GM_Percentage: 47 },
    { week: "W06", GM_Dollars: 137438.96, Sales_Dollars: 319884.60, GM_Percentage: 43 },
    { week: "W07", GM_Dollars: 116387.03, Sales_Dollars: 252500.95, GM_Percentage: 46 },
    { week: "W08", GM_Dollars: 159070.65, Sales_Dollars: 335894.42, GM_Percentage: 47 },
    { week: "W09", GM_Dollars: 88328.55, Sales_Dollars: 174790.68, GM_Percentage: 51 },
    { week: "W10", GM_Dollars: 119284.46, Sales_Dollars: 261782.66, GM_Percentage: 46 },
    { week: "W11", GM_Dollars: 130099.18, Sales_Dollars: 292137.38, GM_Percentage: 45 },
    { week: "W12", GM_Dollars: 139360.58, Sales_Dollars: 284207.55, GM_Percentage: 49 },
    { week: "W13", GM_Dollars: 128456.87, Sales_Dollars: 294047.89, GM_Percentage: 44 },
    { week: "W14", GM_Dollars: 86661.91, Sales_Dollars: 189073.83, GM_Percentage: 46 },
    { week: "W15", GM_Dollars: 151592.15, Sales_Dollars: 271421.42, GM_Percentage: 56 },
    { week: "W16", GM_Dollars: 151686.17, Sales_Dollars: 347732.00, GM_Percentage: 44 },
    { week: "W17", GM_Dollars: 88672.61, Sales_Dollars: 206735.46, GM_Percentage: 43 },
    { week: "W18", GM_Dollars: 81851.01, Sales_Dollars: 175256.89, GM_Percentage: 47 },
    { week: "W19", GM_Dollars: 117644.42, Sales_Dollars: 257209.45, GM_Percentage: 46 },
    { week: "W20", GM_Dollars: 75460.72, Sales_Dollars: 196483.55, GM_Percentage: 38 },
    { week: "W21", GM_Dollars: 89873.37, Sales_Dollars: 232307.36, GM_Percentage: 39 },
    { week: "W22", GM_Dollars: 217801.24, Sales_Dollars: 400567.98, GM_Percentage: 54 },
    { week: "W23", GM_Dollars: 80015.21, Sales_Dollars: 187739.22, GM_Percentage: 43 },
    { week: "W24", GM_Dollars: 99365.58, Sales_Dollars: 233854.94, GM_Percentage: 42 },
    { week: "W25", GM_Dollars: 146165.37, Sales_Dollars: 338581.81, GM_Percentage: 43 },
    { week: "W26", GM_Dollars: 90708.15, Sales_Dollars: 281071.52, GM_Percentage: 32 },
    { week: "W27", GM_Dollars: 180504.75, Sales_Dollars: 276942.13, GM_Percentage: 65 },
    { week: "W28", GM_Dollars: 139442.48, Sales_Dollars: 303695.38, GM_Percentage: 46 },
    { week: "W29", GM_Dollars: 139216.77, Sales_Dollars: 314421.17, GM_Percentage: 44 },
    { week: "W30", GM_Dollars: 100489.04, Sales_Dollars: 262484.91, GM_Percentage: 38 },
    { week: "W31", GM_Dollars: 152765.66, Sales_Dollars: 316858.04, GM_Percentage: 48 },
    { week: "W32", GM_Dollars: 75704.04, Sales_Dollars: 169452.56, GM_Percentage: 45 },
    { week: "W33", GM_Dollars: 167605.48, Sales_Dollars: 340037.18, GM_Percentage: 49 },
    { week: "W34", GM_Dollars: 79485.96, Sales_Dollars: 234269.32, GM_Percentage: 34 },
    { week: "W35", GM_Dollars: 119596.45, Sales_Dollars: 256836.52, GM_Percentage: 47 },
    { week: "W36", GM_Dollars: 120675.47, Sales_Dollars: 260032.26, GM_Percentage: 46 },
    { week: "W37", GM_Dollars: 97413.66, Sales_Dollars: 257055.42, GM_Percentage: 38 },
    { week: "W38", GM_Dollars: 155962.01, Sales_Dollars: 340058.58, GM_Percentage: 46 },
    { week: "W39", GM_Dollars: 37571.16, Sales_Dollars: 161007.90, GM_Percentage: 23 },
    { week: "W40", GM_Dollars: 121974.94, Sales_Dollars: 242047.42, GM_Percentage: 50 },
    { week: "W41", GM_Dollars: 128438.16, Sales_Dollars: 196580.97, GM_Percentage: 65 },
    { week: "W42", GM_Dollars: 71208.94, Sales_Dollars: 201049.32, GM_Percentage: 35 },
    { week: "W43", GM_Dollars: 128752.29, Sales_Dollars: 293362.74, GM_Percentage: 44 },
    { week: "W44", GM_Dollars: 55866.91, Sales_Dollars: 259462.35, GM_Percentage: 22 },
    { week: "W45", GM_Dollars: 134230.98, Sales_Dollars: 358561.15, GM_Percentage: 37 },
    { week: "W46", GM_Dollars: 146587.86, Sales_Dollars: 281889.16, GM_Percentage: 52 },
    { week: "W47", GM_Dollars: 73497.75, Sales_Dollars: 209428.43, GM_Percentage: 35 },
    { week: "W48", GM_Dollars: 133371.47, Sales_Dollars: 233990.84, GM_Percentage: 57 },
    { week: "W49", GM_Dollars: 73773.56, Sales_Dollars: 225732.78, GM_Percentage: 33 },
    { week: "W50", GM_Dollars: 110037.62, Sales_Dollars: 244378.20, GM_Percentage: 45 },
    { week: "W51", GM_Dollars: 96149.38, Sales_Dollars: 266757.29, GM_Percentage: 36 },
    { week: "W52", GM_Dollars: 138093.51, Sales_Dollars: 245570.72, GM_Percentage: 56 }
  ];
  
  

  const options = {
    chart: {
      type: "line",
      height: 350,
      background: "transparent",
      zoom: {
        enabled: false
      }
    },
    stroke: {
      width: [0, 3], 
      curve: "smooth",
    },
    title: {
      text: "Gross Margin",
      align: "center",
      style: { color: "#fff", fontSize: "18px" },
    },
    xaxis: {
      categories: data.map((d) => d.week),
      labels: { style: { colors: "#fff" } },
    },
    yaxis: [
      {
        title: { text: "GM Dollars ($)", style: { color: "#fff" } },
        labels: { style: { colors: "#fff" } },
      },
      {
        opposite: true,
        title: { text: "GM %", style: { color: "#fff" } },
        labels: { style: { colors: "#fff" } },
      },
    ],
    tooltip: { theme: "dark" },
    legend: {
      labels: { colors: "#fff" },
    },
  };

  const series = [
    {
      name: "GM Dollars",
      type: "column",
      data: data.map((d) => d.GM_Dollars),
    },
    {
      name: "GM %",
      type: "line",
      data: data.map((d) => d.GM_Percentage),
    },
  ];

  return (
    <div style={{ background: "#222", padding: "20px", borderRadius: "10px" }}>
      <ReactApexChart options={options} series={series} type="line" height={500} />
    </div>
  );
}

export default Chart