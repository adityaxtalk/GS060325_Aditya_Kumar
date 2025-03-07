export interface salesDataItem {
    store: string;
    sku: string;
    week: string;
    salesUnits: string;
    salesDollars: string;
    costDollars: string;
    gmDollars: string;
    gmPercent: string;
  }


const salesData: salesDataItem[]=[
    {
        "store": "ST035",
        "sku": "SK00158",
        "week": "W01",
        "salesUnits": "58",
        "salesDollars": " $6,669.42 ",
        "costDollars": " $1,060.44 ",
        "gmDollars": " $5,608.98 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK00158",
        "week": "W07",
        "salesUnits": "107",
        "salesDollars": " $12,303.93 ",
        "costDollars": " $1,956.32 ",
        "gmDollars": " $10,347.61 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK00158",
        "week": "W09",
        "salesUnits": "0",
        "salesDollars": " $-   ",
        "costDollars": " $-   ",
        "gmDollars": " $-   ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK00158",
        "week": "W11",
        "salesUnits": "92",
        "salesDollars": " $10,579.08 ",
        "costDollars": " $1,682.07 ",
        "gmDollars": " $8,897.01 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK00158",
        "week": "W13",
        "salesUnits": "122",
        "salesDollars": " $14,028.78 ",
        "costDollars": " $2,230.58 ",
        "gmDollars": " $11,798.20 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK00158",
        "week": "W15",
        "salesUnits": "38",
        "salesDollars": " $4,369.62 ",
        "costDollars": " $694.77 ",
        "gmDollars": " $3,674.85 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK00158",
        "week": "W23",
        "salesUnits": "88",
        "salesDollars": " $10,119.12 ",
        "costDollars": " $1,608.94 ",
        "gmDollars": " $8,510.18 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK00158",
        "week": "W31",
        "salesUnits": "45",
        "salesDollars": " $5,174.55 ",
        "costDollars": " $822.75 ",
        "gmDollars": " $4,351.80 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK00158",
        "week": "W35",
        "salesUnits": "197",
        "salesDollars": " $22,653.03 ",
        "costDollars": " $3,601.83 ",
        "gmDollars": " $19,051.20 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK00158",
        "week": "W50",
        "salesUnits": "133",
        "salesDollars": " $15,293.67 ",
        "costDollars": " $2,431.69 ",
        "gmDollars": " $12,861.98 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W05",
        "salesUnits": "107",
        "salesDollars": " $1,068.93 ",
        "costDollars": " $904.31 ",
        "gmDollars": " $164.62 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W06",
        "salesUnits": "104",
        "salesDollars": " $1,038.96 ",
        "costDollars": " $878.96 ",
        "gmDollars": " $160.00 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W09",
        "salesUnits": "32",
        "salesDollars": " $319.68 ",
        "costDollars": " $270.45 ",
        "gmDollars": " $49.23 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W18",
        "salesUnits": "174",
        "salesDollars": " $1,738.26 ",
        "costDollars": " $1,470.57 ",
        "gmDollars": " $267.69 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W23",
        "salesUnits": "174",
        "salesDollars": " $1,738.26 ",
        "costDollars": " $1,470.57 ",
        "gmDollars": " $267.69 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W27",
        "salesUnits": "37",
        "salesDollars": " $369.63 ",
        "costDollars": " $312.71 ",
        "gmDollars": " $56.92 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W28",
        "salesUnits": "95",
        "salesDollars": " $949.05 ",
        "costDollars": " $802.90 ",
        "gmDollars": " $146.15 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W29",
        "salesUnits": "161",
        "salesDollars": " $1,608.39 ",
        "costDollars": " $1,360.70 ",
        "gmDollars": " $247.69 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W30",
        "salesUnits": "175",
        "salesDollars": " $1,748.25 ",
        "costDollars": " $1,479.02 ",
        "gmDollars": " $269.23 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W32",
        "salesUnits": "200",
        "salesDollars": " $1,998.00 ",
        "costDollars": " $1,690.31 ",
        "gmDollars": " $307.69 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W33",
        "salesUnits": "120",
        "salesDollars": " $1,198.80 ",
        "costDollars": " $1,014.18 ",
        "gmDollars": " $184.62 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00269",
        "week": "W51",
        "salesUnits": "167",
        "salesDollars": " $1,668.33 ",
        "costDollars": " $1,411.41 ",
        "gmDollars": " $256.92 ",
        "gmPercent": "15%"
    },
    {
        "store": "ST035",
        "sku": "SK00300",
        "week": "W14",
        "salesUnits": "135",
        "salesDollars": " $26,998.65 ",
        "costDollars": " $2,402.88 ",
        "gmDollars": " $24,595.77 ",
        "gmPercent": "91%"
    },
    {
        "store": "ST035",
        "sku": "SK00300",
        "week": "W15",
        "salesUnits": "42",
        "salesDollars": " $8,399.58 ",
        "costDollars": " $747.56 ",
        "gmDollars": " $7,652.02 ",
        "gmPercent": "91%"
    },
    {
        "store": "ST035",
        "sku": "SK00300",
        "week": "W41",
        "salesUnits": "185",
        "salesDollars": " $36,998.15 ",
        "costDollars": " $3,292.84 ",
        "gmDollars": " $33,705.31 ",
        "gmPercent": "91%"
    },
    {
        "store": "ST035",
        "sku": "SK00300",
        "week": "W46",
        "salesUnits": "38",
        "salesDollars": " $7,599.62 ",
        "costDollars": " $676.37 ",
        "gmDollars": " $6,923.25 ",
        "gmPercent": "91%"
    },
    {
        "store": "ST035",
        "sku": "SK00300",
        "week": "W50",
        "salesUnits": "149",
        "salesDollars": " $29,798.51 ",
        "costDollars": " $2,652.07 ",
        "gmDollars": " $27,146.44 ",
        "gmPercent": "91%"
    },
    {
        "store": "ST035",
        "sku": "SK00304",
        "week": "W16",
        "salesUnits": "40",
        "salesDollars": " $5,599.60 ",
        "costDollars": " $431.17 ",
        "gmDollars": " $5,168.43 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK00304",
        "week": "W18",
        "salesUnits": "140",
        "salesDollars": " $19,598.60 ",
        "costDollars": " $1,509.09 ",
        "gmDollars": " $18,089.51 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK00304",
        "week": "W19",
        "salesUnits": "200",
        "salesDollars": " $27,998.00 ",
        "costDollars": " $2,155.85 ",
        "gmDollars": " $25,842.15 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK00304",
        "week": "W23",
        "salesUnits": "108",
        "salesDollars": " $15,118.92 ",
        "costDollars": " $1,164.16 ",
        "gmDollars": " $13,954.76 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK00304",
        "week": "W36",
        "salesUnits": "28",
        "salesDollars": " $3,919.72 ",
        "costDollars": " $301.82 ",
        "gmDollars": " $3,617.90 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK00304",
        "week": "W42",
        "salesUnits": "11",
        "salesDollars": " $1,539.89 ",
        "costDollars": " $118.57 ",
        "gmDollars": " $1,421.32 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK00304",
        "week": "W47",
        "salesUnits": "42",
        "salesDollars": " $5,879.58 ",
        "costDollars": " $452.73 ",
        "gmDollars": " $5,426.85 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W04",
        "salesUnits": "167",
        "salesDollars": " $7,513.33 ",
        "costDollars": " $4,523.02 ",
        "gmDollars": " $2,990.31 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W08",
        "salesUnits": "143",
        "salesDollars": " $6,433.57 ",
        "costDollars": " $3,873.01 ",
        "gmDollars": " $2,560.56 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W10",
        "salesUnits": "120",
        "salesDollars": " $5,398.80 ",
        "costDollars": " $3,250.08 ",
        "gmDollars": " $2,148.72 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W12",
        "salesUnits": "21",
        "salesDollars": " $944.79 ",
        "costDollars": " $568.76 ",
        "gmDollars": " $376.03 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W13",
        "salesUnits": "92",
        "salesDollars": " $4,139.08 ",
        "costDollars": " $2,491.73 ",
        "gmDollars": " $1,647.35 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W14",
        "salesUnits": "141",
        "salesDollars": " $6,343.59 ",
        "costDollars": " $3,818.84 ",
        "gmDollars": " $2,524.75 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W15",
        "salesUnits": "108",
        "salesDollars": " $4,858.92 ",
        "costDollars": " $2,925.07 ",
        "gmDollars": " $1,933.85 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W19",
        "salesUnits": "167",
        "salesDollars": " $7,513.33 ",
        "costDollars": " $4,523.02 ",
        "gmDollars": " $2,990.31 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W21",
        "salesUnits": "1",
        "salesDollars": " $44.99 ",
        "costDollars": " $27.08 ",
        "gmDollars": " $17.91 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W42",
        "salesUnits": "63",
        "salesDollars": " $2,834.37 ",
        "costDollars": " $1,706.29 ",
        "gmDollars": " $1,128.08 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W44",
        "salesUnits": "179",
        "salesDollars": " $8,053.21 ",
        "costDollars": " $4,848.03 ",
        "gmDollars": " $3,205.18 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00766",
        "week": "W49",
        "salesUnits": "110",
        "salesDollars": " $4,948.90 ",
        "costDollars": " $2,979.24 ",
        "gmDollars": " $1,969.66 ",
        "gmPercent": "40%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W02",
        "salesUnits": "100",
        "salesDollars": " $1,499.00 ",
        "costDollars": " $401.73 ",
        "gmDollars": " $1,097.27 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W05",
        "salesUnits": "16",
        "salesDollars": " $239.84 ",
        "costDollars": " $64.28 ",
        "gmDollars": " $175.56 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W09",
        "salesUnits": "76",
        "salesDollars": " $1,139.24 ",
        "costDollars": " $305.32 ",
        "gmDollars": " $833.92 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W11",
        "salesUnits": "66",
        "salesDollars": " $989.34 ",
        "costDollars": " $265.14 ",
        "gmDollars": " $724.20 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W13",
        "salesUnits": "143",
        "salesDollars": " $2,143.57 ",
        "costDollars": " $574.48 ",
        "gmDollars": " $1,569.09 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W17",
        "salesUnits": "95",
        "salesDollars": " $1,424.05 ",
        "costDollars": " $381.65 ",
        "gmDollars": " $1,042.40 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W20",
        "salesUnits": "39",
        "salesDollars": " $584.61 ",
        "costDollars": " $156.68 ",
        "gmDollars": " $427.93 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W21",
        "salesUnits": "6",
        "salesDollars": " $89.94 ",
        "costDollars": " $24.10 ",
        "gmDollars": " $65.84 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W29",
        "salesUnits": "174",
        "salesDollars": " $2,608.26 ",
        "costDollars": " $699.01 ",
        "gmDollars": " $1,909.25 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W35",
        "salesUnits": "128",
        "salesDollars": " $1,918.72 ",
        "costDollars": " $514.22 ",
        "gmDollars": " $1,404.50 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W36",
        "salesUnits": "166",
        "salesDollars": " $2,488.34 ",
        "costDollars": " $666.88 ",
        "gmDollars": " $1,821.46 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W41",
        "salesUnits": "185",
        "salesDollars": " $2,773.15 ",
        "costDollars": " $743.20 ",
        "gmDollars": " $2,029.95 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W43",
        "salesUnits": "47",
        "salesDollars": " $704.53 ",
        "costDollars": " $188.81 ",
        "gmDollars": " $515.72 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00786",
        "week": "W44",
        "salesUnits": "87",
        "salesDollars": " $1,304.13 ",
        "costDollars": " $349.51 ",
        "gmDollars": " $954.62 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK00960",
        "week": "W08",
        "salesUnits": "178",
        "salesDollars": " $13,348.22 ",
        "costDollars": " $8,449.42 ",
        "gmDollars": " $4,898.80 ",
        "gmPercent": "37%"
    },
    {
        "store": "ST035",
        "sku": "SK00960",
        "week": "W13",
        "salesUnits": "195",
        "salesDollars": " $14,623.05 ",
        "costDollars": " $9,256.39 ",
        "gmDollars": " $5,366.66 ",
        "gmPercent": "37%"
    },
    {
        "store": "ST035",
        "sku": "SK00960",
        "week": "W14",
        "salesUnits": "68",
        "salesDollars": " $5,099.32 ",
        "costDollars": " $3,227.87 ",
        "gmDollars": " $1,871.45 ",
        "gmPercent": "37%"
    },
    {
        "store": "ST035",
        "sku": "SK00960",
        "week": "W16",
        "salesUnits": "99",
        "salesDollars": " $7,424.01 ",
        "costDollars": " $4,699.40 ",
        "gmDollars": " $2,724.61 ",
        "gmPercent": "37%"
    },
    {
        "store": "ST035",
        "sku": "SK00960",
        "week": "W21",
        "salesUnits": "58",
        "salesDollars": " $4,349.42 ",
        "costDollars": " $2,753.18 ",
        "gmDollars": " $1,596.24 ",
        "gmPercent": "37%"
    },
    {
        "store": "ST035",
        "sku": "SK00960",
        "week": "W33",
        "salesUnits": "96",
        "salesDollars": " $7,199.04 ",
        "costDollars": " $4,556.99 ",
        "gmDollars": " $2,642.05 ",
        "gmPercent": "37%"
    },
    {
        "store": "ST035",
        "sku": "SK00960",
        "week": "W38",
        "salesUnits": "26",
        "salesDollars": " $1,949.74 ",
        "costDollars": " $1,234.19 ",
        "gmDollars": " $715.55 ",
        "gmPercent": "37%"
    },
    {
        "store": "ST035",
        "sku": "SK00960",
        "week": "W40",
        "salesUnits": "133",
        "salesDollars": " $9,973.67 ",
        "costDollars": " $6,313.33 ",
        "gmDollars": " $3,660.34 ",
        "gmPercent": "37%"
    },
    {
        "store": "ST035",
        "sku": "SK00960",
        "week": "W51",
        "salesUnits": "45",
        "salesDollars": " $3,374.55 ",
        "costDollars": " $2,136.09 ",
        "gmDollars": " $1,238.46 ",
        "gmPercent": "37%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W04",
        "salesUnits": "54",
        "salesDollars": " $2,699.46 ",
        "costDollars": " $1,220.16 ",
        "gmDollars": " $1,479.30 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W07",
        "salesUnits": "46",
        "salesDollars": " $2,299.54 ",
        "costDollars": " $1,039.39 ",
        "gmDollars": " $1,260.15 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W08",
        "salesUnits": "41",
        "salesDollars": " $2,049.59 ",
        "costDollars": " $926.41 ",
        "gmDollars": " $1,123.18 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W12",
        "salesUnits": "83",
        "salesDollars": " $4,149.17 ",
        "costDollars": " $1,875.42 ",
        "gmDollars": " $2,273.75 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W18",
        "salesUnits": "11",
        "salesDollars": " $549.89 ",
        "costDollars": " $248.55 ",
        "gmDollars": " $301.34 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W22",
        "salesUnits": "144",
        "salesDollars": " $7,198.56 ",
        "costDollars": " $3,253.75 ",
        "gmDollars": " $3,944.81 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W28",
        "salesUnits": "75",
        "salesDollars": " $3,749.25 ",
        "costDollars": " $1,694.66 ",
        "gmDollars": " $2,054.59 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W32",
        "salesUnits": "126",
        "salesDollars": " $6,298.74 ",
        "costDollars": " $2,847.03 ",
        "gmDollars": " $3,451.71 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W35",
        "salesUnits": "4",
        "salesDollars": " $199.96 ",
        "costDollars": " $90.38 ",
        "gmDollars": " $109.58 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W38",
        "salesUnits": "51",
        "salesDollars": " $2,549.49 ",
        "costDollars": " $1,152.37 ",
        "gmDollars": " $1,397.12 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W42",
        "salesUnits": "165",
        "salesDollars": " $8,248.35 ",
        "costDollars": " $3,728.25 ",
        "gmDollars": " $4,520.10 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01183",
        "week": "W48",
        "salesUnits": "80",
        "salesDollars": " $3,999.20 ",
        "costDollars": " $1,807.64 ",
        "gmDollars": " $2,191.56 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK01189",
        "week": "W02",
        "salesUnits": "124",
        "salesDollars": " $24,178.76 ",
        "costDollars": " $14,338.00 ",
        "gmDollars": " $9,840.76 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK01189",
        "week": "W21",
        "salesUnits": "16",
        "salesDollars": " $3,119.84 ",
        "costDollars": " $1,850.07 ",
        "gmDollars": " $1,269.77 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK01189",
        "week": "W22",
        "salesUnits": "176",
        "salesDollars": " $34,318.24 ",
        "costDollars": " $20,350.72 ",
        "gmDollars": " $13,967.52 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK01189",
        "week": "W33",
        "salesUnits": "97",
        "salesDollars": " $18,914.03 ",
        "costDollars": " $11,216.02 ",
        "gmDollars": " $7,698.01 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK01189",
        "week": "W40",
        "salesUnits": "24",
        "salesDollars": " $4,679.76 ",
        "costDollars": " $2,775.10 ",
        "gmDollars": " $1,904.66 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK01189",
        "week": "W42",
        "salesUnits": "132",
        "salesDollars": " $25,738.68 ",
        "costDollars": " $15,263.04 ",
        "gmDollars": " $10,475.64 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK01189",
        "week": "W46",
        "salesUnits": "21",
        "salesDollars": " $4,094.79 ",
        "costDollars": " $2,428.21 ",
        "gmDollars": " $1,666.58 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK01193",
        "week": "W02",
        "salesUnits": "136",
        "salesDollars": " $17,678.64 ",
        "costDollars": " $6,399.67 ",
        "gmDollars": " $11,278.97 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK01193",
        "week": "W07",
        "salesUnits": "182",
        "salesDollars": " $23,658.18 ",
        "costDollars": " $8,564.26 ",
        "gmDollars": " $15,093.92 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK01193",
        "week": "W08",
        "salesUnits": "124",
        "salesDollars": " $16,118.76 ",
        "costDollars": " $5,834.99 ",
        "gmDollars": " $10,283.77 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK01193",
        "week": "W09",
        "salesUnits": "66",
        "salesDollars": " $8,579.34 ",
        "costDollars": " $3,105.72 ",
        "gmDollars": " $5,473.62 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK01193",
        "week": "W24",
        "salesUnits": "39",
        "salesDollars": " $5,069.61 ",
        "costDollars": " $1,835.20 ",
        "gmDollars": " $3,234.41 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK01193",
        "week": "W31",
        "salesUnits": "76",
        "salesDollars": " $9,879.24 ",
        "costDollars": " $3,576.28 ",
        "gmDollars": " $6,302.96 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK01193",
        "week": "W35",
        "salesUnits": "113",
        "salesDollars": " $14,688.87 ",
        "costDollars": " $5,317.37 ",
        "gmDollars": " $9,371.50 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK01193",
        "week": "W39",
        "salesUnits": "12",
        "salesDollars": " $1,559.88 ",
        "costDollars": " $564.68 ",
        "gmDollars": " $995.20 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK01193",
        "week": "W49",
        "salesUnits": "181",
        "salesDollars": " $23,528.19 ",
        "costDollars": " $8,517.20 ",
        "gmDollars": " $15,010.99 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK01249",
        "week": "W01",
        "salesUnits": "171",
        "salesDollars": " $3,418.29 ",
        "costDollars": " $229.03 ",
        "gmDollars": " $3,189.26 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK01249",
        "week": "W14",
        "salesUnits": "83",
        "salesDollars": " $1,659.17 ",
        "costDollars": " $111.16 ",
        "gmDollars": " $1,548.01 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK01249",
        "week": "W15",
        "salesUnits": "117",
        "salesDollars": " $2,338.83 ",
        "costDollars": " $156.70 ",
        "gmDollars": " $2,182.13 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK01249",
        "week": "W23",
        "salesUnits": "126",
        "salesDollars": " $2,518.74 ",
        "costDollars": " $168.76 ",
        "gmDollars": " $2,349.98 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK01249",
        "week": "W27",
        "salesUnits": "67",
        "salesDollars": " $1,339.33 ",
        "costDollars": " $89.74 ",
        "gmDollars": " $1,249.59 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK01249",
        "week": "W32",
        "salesUnits": "66",
        "salesDollars": " $1,319.34 ",
        "costDollars": " $88.40 ",
        "gmDollars": " $1,230.94 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK01249",
        "week": "W34",
        "salesUnits": "198",
        "salesDollars": " $3,958.02 ",
        "costDollars": " $265.19 ",
        "gmDollars": " $3,692.83 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK01319",
        "week": "W02",
        "salesUnits": "77",
        "salesDollars": " $384.23 ",
        "costDollars": " $176.36 ",
        "gmDollars": " $207.87 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01319",
        "week": "W03",
        "salesUnits": "59",
        "salesDollars": " $294.41 ",
        "costDollars": " $135.13 ",
        "gmDollars": " $159.28 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01319",
        "week": "W13",
        "salesUnits": "96",
        "salesDollars": " $479.04 ",
        "costDollars": " $219.88 ",
        "gmDollars": " $259.16 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01319",
        "week": "W17",
        "salesUnits": "46",
        "salesDollars": " $229.54 ",
        "costDollars": " $105.36 ",
        "gmDollars": " $124.18 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01319",
        "week": "W22",
        "salesUnits": "117",
        "salesDollars": " $583.83 ",
        "costDollars": " $267.98 ",
        "gmDollars": " $315.85 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01319",
        "week": "W23",
        "salesUnits": "24",
        "salesDollars": " $119.76 ",
        "costDollars": " $54.97 ",
        "gmDollars": " $64.79 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01319",
        "week": "W28",
        "salesUnits": "188",
        "salesDollars": " $938.12 ",
        "costDollars": " $430.60 ",
        "gmDollars": " $507.52 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01319",
        "week": "W33",
        "salesUnits": "100",
        "salesDollars": " $499.00 ",
        "costDollars": " $229.04 ",
        "gmDollars": " $269.96 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01319",
        "week": "W34",
        "salesUnits": "114",
        "salesDollars": " $568.86 ",
        "costDollars": " $261.11 ",
        "gmDollars": " $307.75 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01319",
        "week": "W38",
        "salesUnits": "121",
        "salesDollars": " $603.79 ",
        "costDollars": " $277.14 ",
        "gmDollars": " $326.65 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01319",
        "week": "W44",
        "salesUnits": "198",
        "salesDollars": " $988.02 ",
        "costDollars": " $453.50 ",
        "gmDollars": " $534.52 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W05",
        "salesUnits": "65",
        "salesDollars": " $7,474.35 ",
        "costDollars": " $3,961.41 ",
        "gmDollars": " $3,512.94 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W10",
        "salesUnits": "191",
        "salesDollars": " $21,963.09 ",
        "costDollars": " $11,640.44 ",
        "gmDollars": " $10,322.65 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W11",
        "salesUnits": "12",
        "salesDollars": " $1,379.88 ",
        "costDollars": " $731.34 ",
        "gmDollars": " $648.54 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W13",
        "salesUnits": "130",
        "salesDollars": " $14,948.70 ",
        "costDollars": " $7,922.81 ",
        "gmDollars": " $7,025.89 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W19",
        "salesUnits": "36",
        "salesDollars": " $4,139.64 ",
        "costDollars": " $2,194.01 ",
        "gmDollars": " $1,945.63 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W24",
        "salesUnits": "73",
        "salesDollars": " $8,394.27 ",
        "costDollars": " $4,448.96 ",
        "gmDollars": " $3,945.31 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W26",
        "salesUnits": "188",
        "salesDollars": " $21,618.12 ",
        "costDollars": " $11,457.60 ",
        "gmDollars": " $10,160.52 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W27",
        "salesUnits": "86",
        "salesDollars": " $9,889.14 ",
        "costDollars": " $5,241.24 ",
        "gmDollars": " $4,647.90 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W28",
        "salesUnits": "14",
        "salesDollars": " $1,609.86 ",
        "costDollars": " $853.23 ",
        "gmDollars": " $756.63 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W29",
        "salesUnits": "84",
        "salesDollars": " $9,659.16 ",
        "costDollars": " $5,119.35 ",
        "gmDollars": " $4,539.81 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W35",
        "salesUnits": "172",
        "salesDollars": " $19,778.28 ",
        "costDollars": " $10,482.49 ",
        "gmDollars": " $9,295.79 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W43",
        "salesUnits": "113",
        "salesDollars": " $12,993.87 ",
        "costDollars": " $6,886.75 ",
        "gmDollars": " $6,107.12 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01349",
        "week": "W50",
        "salesUnits": "72",
        "salesDollars": " $8,279.28 ",
        "costDollars": " $4,388.02 ",
        "gmDollars": " $3,891.26 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK01549",
        "week": "W10",
        "salesUnits": "121",
        "salesDollars": " $11,493.79 ",
        "costDollars": " $8,654.82 ",
        "gmDollars": " $2,838.97 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK01549",
        "week": "W14",
        "salesUnits": "28",
        "salesDollars": " $2,659.72 ",
        "costDollars": " $2,002.77 ",
        "gmDollars": " $656.95 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK01549",
        "week": "W17",
        "salesUnits": "32",
        "salesDollars": " $3,039.68 ",
        "costDollars": " $2,288.88 ",
        "gmDollars": " $750.80 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK01549",
        "week": "W19",
        "salesUnits": "173",
        "salesDollars": " $16,433.27 ",
        "costDollars": " $12,374.25 ",
        "gmDollars": " $4,059.02 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK01549",
        "week": "W20",
        "salesUnits": "47",
        "salesDollars": " $4,464.53 ",
        "costDollars": " $3,361.79 ",
        "gmDollars": " $1,102.74 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK01549",
        "week": "W28",
        "salesUnits": "126",
        "salesDollars": " $11,968.74 ",
        "costDollars": " $9,012.46 ",
        "gmDollars": " $2,956.28 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK01549",
        "week": "W33",
        "salesUnits": "93",
        "salesDollars": " $8,834.07 ",
        "costDollars": " $6,652.05 ",
        "gmDollars": " $2,182.02 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK01549",
        "week": "W37",
        "salesUnits": "152",
        "salesDollars": " $14,438.48 ",
        "costDollars": " $10,872.18 ",
        "gmDollars": " $3,566.30 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK01549",
        "week": "W38",
        "salesUnits": "79",
        "salesDollars": " $7,504.21 ",
        "costDollars": " $5,650.67 ",
        "gmDollars": " $1,853.54 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK01549",
        "week": "W42",
        "salesUnits": "66",
        "salesDollars": " $6,269.34 ",
        "costDollars": " $4,720.81 ",
        "gmDollars": " $1,548.53 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W04",
        "salesUnits": "161",
        "salesDollars": " $1,608.39 ",
        "costDollars": " $1,113.01 ",
        "gmDollars": " $495.38 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W05",
        "salesUnits": "48",
        "salesDollars": " $479.52 ",
        "costDollars": " $331.83 ",
        "gmDollars": " $147.69 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W06",
        "salesUnits": "5",
        "salesDollars": " $49.95 ",
        "costDollars": " $34.57 ",
        "gmDollars": " $15.38 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W10",
        "salesUnits": "61",
        "salesDollars": " $609.39 ",
        "costDollars": " $421.70 ",
        "gmDollars": " $187.69 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W11",
        "salesUnits": "53",
        "salesDollars": " $529.47 ",
        "costDollars": " $366.39 ",
        "gmDollars": " $163.08 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W16",
        "salesUnits": "186",
        "salesDollars": " $1,858.14 ",
        "costDollars": " $1,285.83 ",
        "gmDollars": " $572.31 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W28",
        "salesUnits": "2",
        "salesDollars": " $19.98 ",
        "costDollars": " $13.83 ",
        "gmDollars": " $6.15 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W30",
        "salesUnits": "53",
        "salesDollars": " $529.47 ",
        "costDollars": " $366.39 ",
        "gmDollars": " $163.08 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W33",
        "salesUnits": "104",
        "salesDollars": " $1,038.96 ",
        "costDollars": " $718.96 ",
        "gmDollars": " $320.00 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W36",
        "salesUnits": "153",
        "salesDollars": " $1,528.47 ",
        "costDollars": " $1,057.70 ",
        "gmDollars": " $470.77 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W38",
        "salesUnits": "23",
        "salesDollars": " $229.77 ",
        "costDollars": " $159.00 ",
        "gmDollars": " $70.77 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W40",
        "salesUnits": "51",
        "salesDollars": " $509.49 ",
        "costDollars": " $352.57 ",
        "gmDollars": " $156.92 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W44",
        "salesUnits": "152",
        "salesDollars": " $1,518.48 ",
        "costDollars": " $1,050.79 ",
        "gmDollars": " $467.69 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01566",
        "week": "W46",
        "salesUnits": "144",
        "salesDollars": " $1,438.56 ",
        "costDollars": " $995.48 ",
        "gmDollars": " $443.08 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK01642",
        "week": "W01",
        "salesUnits": "31",
        "salesDollars": " $1,704.69 ",
        "costDollars": " $1,847.88 ",
        "gmDollars": " $(143.19)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK01642",
        "week": "W02",
        "salesUnits": "121",
        "salesDollars": " $6,653.79 ",
        "costDollars": " $7,212.71 ",
        "gmDollars": " $(558.92)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK01642",
        "week": "W07",
        "salesUnits": "112",
        "salesDollars": " $6,158.88 ",
        "costDollars": " $6,676.23 ",
        "gmDollars": " $(517.35)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK01642",
        "week": "W10",
        "salesUnits": "119",
        "salesDollars": " $6,543.81 ",
        "costDollars": " $7,093.49 ",
        "gmDollars": " $(549.68)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK01642",
        "week": "W15",
        "salesUnits": "165",
        "salesDollars": " $9,073.35 ",
        "costDollars": " $9,835.51 ",
        "gmDollars": " $(762.16)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK01642",
        "week": "W37",
        "salesUnits": "113",
        "salesDollars": " $6,213.87 ",
        "costDollars": " $6,735.84 ",
        "gmDollars": " $(521.97)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK01642",
        "week": "W38",
        "salesUnits": "145",
        "salesDollars": " $7,973.55 ",
        "costDollars": " $8,643.33 ",
        "gmDollars": " $(669.78)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK01642",
        "week": "W44",
        "salesUnits": "183",
        "salesDollars": " $10,063.17 ",
        "costDollars": " $10,908.48 ",
        "gmDollars": " $(845.31)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK01642",
        "week": "W46",
        "salesUnits": "53",
        "salesDollars": " $2,914.47 ",
        "costDollars": " $3,159.29 ",
        "gmDollars": " $(244.82)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK01733",
        "week": "W05",
        "salesUnits": "114",
        "salesDollars": " $10,828.86 ",
        "costDollars": " $9,626.86 ",
        "gmDollars": " $1,202.00 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK01733",
        "week": "W18",
        "salesUnits": "7",
        "salesDollars": " $664.93 ",
        "costDollars": " $591.12 ",
        "gmDollars": " $73.81 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK01733",
        "week": "W21",
        "salesUnits": "65",
        "salesDollars": " $6,174.35 ",
        "costDollars": " $5,489.00 ",
        "gmDollars": " $685.35 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK01733",
        "week": "W30",
        "salesUnits": "184",
        "salesDollars": " $17,478.16 ",
        "costDollars": " $15,538.08 ",
        "gmDollars": " $1,940.08 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK01733",
        "week": "W39",
        "salesUnits": "12",
        "salesDollars": " $1,139.88 ",
        "costDollars": " $1,013.35 ",
        "gmDollars": " $126.53 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK01733",
        "week": "W47",
        "salesUnits": "20",
        "salesDollars": " $1,899.80 ",
        "costDollars": " $1,688.92 ",
        "gmDollars": " $210.88 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK01733",
        "week": "W48",
        "salesUnits": "86",
        "salesDollars": " $8,169.14 ",
        "costDollars": " $7,262.37 ",
        "gmDollars": " $906.77 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK01733",
        "week": "W51",
        "salesUnits": "116",
        "salesDollars": " $11,018.84 ",
        "costDollars": " $9,795.75 ",
        "gmDollars": " $1,223.09 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W02",
        "salesUnits": "84",
        "salesDollars": " $12,599.16 ",
        "costDollars": " $5,757.82 ",
        "gmDollars": " $6,841.34 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W10",
        "salesUnits": "10",
        "salesDollars": " $1,499.90 ",
        "costDollars": " $685.45 ",
        "gmDollars": " $814.45 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W12",
        "salesUnits": "111",
        "salesDollars": " $16,648.89 ",
        "costDollars": " $7,608.54 ",
        "gmDollars": " $9,040.35 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W15",
        "salesUnits": "94",
        "salesDollars": " $14,099.06 ",
        "costDollars": " $6,443.27 ",
        "gmDollars": " $7,655.79 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W21",
        "salesUnits": "59",
        "salesDollars": " $8,849.41 ",
        "costDollars": " $4,044.18 ",
        "gmDollars": " $4,805.23 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W23",
        "salesUnits": "131",
        "salesDollars": " $19,648.69 ",
        "costDollars": " $8,979.45 ",
        "gmDollars": " $10,669.24 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W24",
        "salesUnits": "96",
        "salesDollars": " $14,399.04 ",
        "costDollars": " $6,580.36 ",
        "gmDollars": " $7,818.68 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W25",
        "salesUnits": "200",
        "salesDollars": " $29,998.00 ",
        "costDollars": " $13,709.09 ",
        "gmDollars": " $16,288.91 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W29",
        "salesUnits": "74",
        "salesDollars": " $11,099.26 ",
        "costDollars": " $5,072.36 ",
        "gmDollars": " $6,026.90 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W35",
        "salesUnits": "175",
        "salesDollars": " $26,248.25 ",
        "costDollars": " $11,995.45 ",
        "gmDollars": " $14,252.80 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W40",
        "salesUnits": "192",
        "salesDollars": " $28,798.08 ",
        "costDollars": " $13,160.72 ",
        "gmDollars": " $15,637.36 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01896",
        "week": "W47",
        "salesUnits": "59",
        "salesDollars": " $8,849.41 ",
        "costDollars": " $4,044.18 ",
        "gmDollars": " $4,805.23 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W01",
        "salesUnits": "23",
        "salesDollars": " $2,299.77 ",
        "costDollars": " $1,538.55 ",
        "gmDollars": " $761.22 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W04",
        "salesUnits": "30",
        "salesDollars": " $2,999.70 ",
        "costDollars": " $2,006.80 ",
        "gmDollars": " $992.90 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W05",
        "salesUnits": "27",
        "salesDollars": " $2,699.73 ",
        "costDollars": " $1,806.12 ",
        "gmDollars": " $893.61 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W06",
        "salesUnits": "78",
        "salesDollars": " $7,799.22 ",
        "costDollars": " $5,217.68 ",
        "gmDollars": " $2,581.54 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W12",
        "salesUnits": "143",
        "salesDollars": " $14,298.57 ",
        "costDollars": " $9,565.74 ",
        "gmDollars": " $4,732.83 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W17",
        "salesUnits": "131",
        "salesDollars": " $13,098.69 ",
        "costDollars": " $8,763.02 ",
        "gmDollars": " $4,335.67 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W19",
        "salesUnits": "85",
        "salesDollars": " $8,499.15 ",
        "costDollars": " $5,685.93 ",
        "gmDollars": " $2,813.22 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W27",
        "salesUnits": "62",
        "salesDollars": " $6,199.38 ",
        "costDollars": " $4,147.39 ",
        "gmDollars": " $2,051.99 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W31",
        "salesUnits": "171",
        "salesDollars": " $17,098.29 ",
        "costDollars": " $11,438.76 ",
        "gmDollars": " $5,659.53 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W32",
        "salesUnits": "80",
        "salesDollars": " $7,999.20 ",
        "costDollars": " $5,351.46 ",
        "gmDollars": " $2,647.74 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W33",
        "salesUnits": "85",
        "salesDollars": " $8,499.15 ",
        "costDollars": " $5,685.93 ",
        "gmDollars": " $2,813.22 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W39",
        "salesUnits": "41",
        "salesDollars": " $4,099.59 ",
        "costDollars": " $2,742.63 ",
        "gmDollars": " $1,356.96 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01927",
        "week": "W49",
        "salesUnits": "11",
        "salesDollars": " $1,099.89 ",
        "costDollars": " $735.83 ",
        "gmDollars": " $364.06 ",
        "gmPercent": "33%"
    },
    {
        "store": "ST035",
        "sku": "SK01950",
        "week": "W17",
        "salesUnits": "110",
        "salesDollars": " $10,998.90 ",
        "costDollars": " $1,462.85 ",
        "gmDollars": " $9,536.05 ",
        "gmPercent": "87%"
    },
    {
        "store": "ST035",
        "sku": "SK01950",
        "week": "W24",
        "salesUnits": "44",
        "salesDollars": " $4,399.56 ",
        "costDollars": " $585.14 ",
        "gmDollars": " $3,814.42 ",
        "gmPercent": "87%"
    },
    {
        "store": "ST035",
        "sku": "SK01950",
        "week": "W29",
        "salesUnits": "111",
        "salesDollars": " $11,098.89 ",
        "costDollars": " $1,476.15 ",
        "gmDollars": " $9,622.74 ",
        "gmPercent": "87%"
    },
    {
        "store": "ST035",
        "sku": "SK01950",
        "week": "W30",
        "salesUnits": "27",
        "salesDollars": " $2,699.73 ",
        "costDollars": " $359.06 ",
        "gmDollars": " $2,340.67 ",
        "gmPercent": "87%"
    },
    {
        "store": "ST035",
        "sku": "SK01950",
        "week": "W33",
        "salesUnits": "91",
        "salesDollars": " $9,099.09 ",
        "costDollars": " $1,210.18 ",
        "gmDollars": " $7,888.91 ",
        "gmPercent": "87%"
    },
    {
        "store": "ST035",
        "sku": "SK02029",
        "week": "W12",
        "salesUnits": "78",
        "salesDollars": " $7,019.22 ",
        "costDollars": " $3,642.98 ",
        "gmDollars": " $3,376.24 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK02029",
        "week": "W26",
        "salesUnits": "37",
        "salesDollars": " $3,329.63 ",
        "costDollars": " $1,728.08 ",
        "gmDollars": " $1,601.55 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK02029",
        "week": "W40",
        "salesUnits": "158",
        "salesDollars": " $14,218.42 ",
        "costDollars": " $7,379.36 ",
        "gmDollars": " $6,839.06 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK02029",
        "week": "W43",
        "salesUnits": "93",
        "salesDollars": " $8,369.07 ",
        "costDollars": " $4,343.55 ",
        "gmDollars": " $4,025.52 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK02029",
        "week": "W44",
        "salesUnits": "38",
        "salesDollars": " $3,419.62 ",
        "costDollars": " $1,774.78 ",
        "gmDollars": " $1,644.84 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK02029",
        "week": "W45",
        "salesUnits": "22",
        "salesDollars": " $1,979.78 ",
        "costDollars": " $1,027.51 ",
        "gmDollars": " $952.27 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK02029",
        "week": "W46",
        "salesUnits": "118",
        "salesDollars": " $10,618.82 ",
        "costDollars": " $5,511.17 ",
        "gmDollars": " $5,107.65 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK02429",
        "week": "W01",
        "salesUnits": "77",
        "salesDollars": " $14,244.23 ",
        "costDollars": " $12,292.77 ",
        "gmDollars": " $1,951.46 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK02429",
        "week": "W11",
        "salesUnits": "9",
        "salesDollars": " $1,664.91 ",
        "costDollars": " $1,436.82 ",
        "gmDollars": " $228.09 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK02429",
        "week": "W13",
        "salesUnits": "164",
        "salesDollars": " $30,338.36 ",
        "costDollars": " $26,182.00 ",
        "gmDollars": " $4,156.36 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK02429",
        "week": "W33",
        "salesUnits": "0",
        "salesDollars": " $-   ",
        "costDollars": " $-   ",
        "gmDollars": " $-   ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK02429",
        "week": "W45",
        "salesUnits": "86",
        "salesDollars": " $15,909.14 ",
        "costDollars": " $13,729.59 ",
        "gmDollars": " $2,179.55 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK02448",
        "week": "W10",
        "salesUnits": "101",
        "salesDollars": " $15,148.99 ",
        "costDollars": " $727.15 ",
        "gmDollars": " $14,421.84 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK02448",
        "week": "W11",
        "salesUnits": "154",
        "salesDollars": " $23,098.46 ",
        "costDollars": " $1,108.73 ",
        "gmDollars": " $21,989.73 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK02448",
        "week": "W12",
        "salesUnits": "114",
        "salesDollars": " $17,098.86 ",
        "costDollars": " $820.75 ",
        "gmDollars": " $16,278.11 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK02448",
        "week": "W15",
        "salesUnits": "185",
        "salesDollars": " $27,748.15 ",
        "costDollars": " $1,331.91 ",
        "gmDollars": " $26,416.24 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK02448",
        "week": "W18",
        "salesUnits": "18",
        "salesDollars": " $2,699.82 ",
        "costDollars": " $129.59 ",
        "gmDollars": " $2,570.23 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK02448",
        "week": "W24",
        "salesUnits": "33",
        "salesDollars": " $4,949.67 ",
        "costDollars": " $237.58 ",
        "gmDollars": " $4,712.09 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK02448",
        "week": "W27",
        "salesUnits": "135",
        "salesDollars": " $20,248.65 ",
        "costDollars": " $971.94 ",
        "gmDollars": " $19,276.71 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK02448",
        "week": "W38",
        "salesUnits": "94",
        "salesDollars": " $14,099.06 ",
        "costDollars": " $676.75 ",
        "gmDollars": " $13,422.31 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK02562",
        "week": "W08",
        "salesUnits": "157",
        "salesDollars": " $20,408.43 ",
        "costDollars": " $7,632.75 ",
        "gmDollars": " $12,775.68 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK02562",
        "week": "W09",
        "salesUnits": "53",
        "salesDollars": " $6,889.47 ",
        "costDollars": " $2,576.66 ",
        "gmDollars": " $4,312.81 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK02562",
        "week": "W10",
        "salesUnits": "195",
        "salesDollars": " $25,348.05 ",
        "costDollars": " $9,480.17 ",
        "gmDollars": " $15,867.88 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK02562",
        "week": "W13",
        "salesUnits": "39",
        "salesDollars": " $5,069.61 ",
        "costDollars": " $1,896.03 ",
        "gmDollars": " $3,173.58 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK02562",
        "week": "W20",
        "salesUnits": "52",
        "salesDollars": " $6,759.48 ",
        "costDollars": " $2,528.05 ",
        "gmDollars": " $4,231.43 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK02562",
        "week": "W36",
        "salesUnits": "99",
        "salesDollars": " $12,869.01 ",
        "costDollars": " $4,813.01 ",
        "gmDollars": " $8,056.00 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK02562",
        "week": "W44",
        "salesUnits": "15",
        "salesDollars": " $1,949.85 ",
        "costDollars": " $729.24 ",
        "gmDollars": " $1,220.61 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK02562",
        "week": "W45",
        "salesUnits": "45",
        "salesDollars": " $5,849.55 ",
        "costDollars": " $2,187.73 ",
        "gmDollars": " $3,661.82 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK02562",
        "week": "W46",
        "salesUnits": "71",
        "salesDollars": " $9,229.29 ",
        "costDollars": " $3,451.75 ",
        "gmDollars": " $5,777.54 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK02562",
        "week": "W48",
        "salesUnits": "36",
        "salesDollars": " $4,679.64 ",
        "costDollars": " $1,750.19 ",
        "gmDollars": " $2,929.45 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK02562",
        "week": "W49",
        "salesUnits": "55",
        "salesDollars": " $7,149.45 ",
        "costDollars": " $2,673.89 ",
        "gmDollars": " $4,475.56 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK02642",
        "week": "W11",
        "salesUnits": "126",
        "salesDollars": " $20,788.74 ",
        "costDollars": " $20,372.97 ",
        "gmDollars": " $415.77 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK02642",
        "week": "W12",
        "salesUnits": "14",
        "salesDollars": " $2,309.86 ",
        "costDollars": " $2,263.66 ",
        "gmDollars": " $46.20 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK02642",
        "week": "W15",
        "salesUnits": "2",
        "salesDollars": " $329.98 ",
        "costDollars": " $323.38 ",
        "gmDollars": " $6.60 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK02642",
        "week": "W17",
        "salesUnits": "32",
        "salesDollars": " $5,279.68 ",
        "costDollars": " $5,174.09 ",
        "gmDollars": " $105.59 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK02642",
        "week": "W18",
        "salesUnits": "6",
        "salesDollars": " $989.94 ",
        "costDollars": " $970.14 ",
        "gmDollars": " $19.80 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK02642",
        "week": "W24",
        "salesUnits": "168",
        "salesDollars": " $27,718.32 ",
        "costDollars": " $27,163.95 ",
        "gmDollars": " $554.37 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK02642",
        "week": "W30",
        "salesUnits": "153",
        "salesDollars": " $25,243.47 ",
        "costDollars": " $24,738.60 ",
        "gmDollars": " $504.87 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK02642",
        "week": "W42",
        "salesUnits": "172",
        "salesDollars": " $28,378.28 ",
        "costDollars": " $27,810.71 ",
        "gmDollars": " $567.57 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W12",
        "salesUnits": "175",
        "salesDollars": " $15,748.25 ",
        "costDollars": " $11,023.78 ",
        "gmDollars": " $4,724.48 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W16",
        "salesUnits": "129",
        "salesDollars": " $11,608.71 ",
        "costDollars": " $8,126.10 ",
        "gmDollars": " $3,482.61 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W17",
        "salesUnits": "26",
        "salesDollars": " $2,339.74 ",
        "costDollars": " $1,637.82 ",
        "gmDollars": " $701.92 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W24",
        "salesUnits": "4",
        "salesDollars": " $359.96 ",
        "costDollars": " $251.97 ",
        "gmDollars": " $107.99 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W25",
        "salesUnits": "196",
        "salesDollars": " $17,638.04 ",
        "costDollars": " $12,346.63 ",
        "gmDollars": " $5,291.41 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W28",
        "salesUnits": "83",
        "salesDollars": " $7,469.17 ",
        "costDollars": " $5,228.42 ",
        "gmDollars": " $2,240.75 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W34",
        "salesUnits": "144",
        "salesDollars": " $12,958.56 ",
        "costDollars": " $9,070.99 ",
        "gmDollars": " $3,887.57 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W36",
        "salesUnits": "19",
        "salesDollars": " $1,709.81 ",
        "costDollars": " $1,196.87 ",
        "gmDollars": " $512.94 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W38",
        "salesUnits": "190",
        "salesDollars": " $17,098.10 ",
        "costDollars": " $11,968.67 ",
        "gmDollars": " $5,129.43 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W39",
        "salesUnits": "81",
        "salesDollars": " $7,289.19 ",
        "costDollars": " $5,102.43 ",
        "gmDollars": " $2,186.76 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W45",
        "salesUnits": "110",
        "salesDollars": " $9,898.90 ",
        "costDollars": " $6,929.23 ",
        "gmDollars": " $2,969.67 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02768",
        "week": "W49",
        "salesUnits": "111",
        "salesDollars": " $9,988.89 ",
        "costDollars": " $6,992.22 ",
        "gmDollars": " $2,996.67 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK02805",
        "week": "W02",
        "salesUnits": "113",
        "salesDollars": " $22,033.87 ",
        "costDollars": " $6,345.75 ",
        "gmDollars": " $15,688.12 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK02805",
        "week": "W05",
        "salesUnits": "191",
        "salesDollars": " $37,243.09 ",
        "costDollars": " $10,726.01 ",
        "gmDollars": " $26,517.08 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK02805",
        "week": "W06",
        "salesUnits": "77",
        "salesDollars": " $15,014.23 ",
        "costDollars": " $4,324.10 ",
        "gmDollars": " $10,690.13 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK02805",
        "week": "W10",
        "salesUnits": "60",
        "salesDollars": " $11,699.40 ",
        "costDollars": " $3,369.43 ",
        "gmDollars": " $8,329.97 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK02805",
        "week": "W11",
        "salesUnits": "129",
        "salesDollars": " $25,153.71 ",
        "costDollars": " $7,244.27 ",
        "gmDollars": " $17,909.44 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK02805",
        "week": "W21",
        "salesUnits": "56",
        "salesDollars": " $10,919.44 ",
        "costDollars": " $3,144.80 ",
        "gmDollars": " $7,774.64 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK02805",
        "week": "W25",
        "salesUnits": "55",
        "salesDollars": " $10,724.45 ",
        "costDollars": " $3,088.64 ",
        "gmDollars": " $7,635.81 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK02805",
        "week": "W26",
        "salesUnits": "123",
        "salesDollars": " $23,983.77 ",
        "costDollars": " $6,907.33 ",
        "gmDollars": " $17,076.44 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK02805",
        "week": "W27",
        "salesUnits": "138",
        "salesDollars": " $26,908.62 ",
        "costDollars": " $7,749.68 ",
        "gmDollars": " $19,158.94 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK02805",
        "week": "W48",
        "salesUnits": "124",
        "salesDollars": " $24,178.76 ",
        "costDollars": " $6,963.48 ",
        "gmDollars": " $17,215.28 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK02805",
        "week": "W49",
        "salesUnits": "55",
        "salesDollars": " $10,724.45 ",
        "costDollars": " $3,088.64 ",
        "gmDollars": " $7,635.81 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK02904",
        "week": "W20",
        "salesUnits": "162",
        "salesDollars": " $14,578.38 ",
        "costDollars": " $11,006.68 ",
        "gmDollars": " $3,571.70 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK02904",
        "week": "W23",
        "salesUnits": "96",
        "salesDollars": " $8,639.04 ",
        "costDollars": " $6,522.48 ",
        "gmDollars": " $2,116.56 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK02904",
        "week": "W24",
        "salesUnits": "98",
        "salesDollars": " $8,819.02 ",
        "costDollars": " $6,658.36 ",
        "gmDollars": " $2,160.66 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK02904",
        "week": "W26",
        "salesUnits": "55",
        "salesDollars": " $4,949.45 ",
        "costDollars": " $3,736.83 ",
        "gmDollars": " $1,212.62 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK02904",
        "week": "W27",
        "salesUnits": "29",
        "salesDollars": " $2,609.71 ",
        "costDollars": " $1,970.33 ",
        "gmDollars": " $639.38 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK02904",
        "week": "W36",
        "salesUnits": "127",
        "salesDollars": " $11,428.73 ",
        "costDollars": " $8,628.69 ",
        "gmDollars": " $2,800.04 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK02904",
        "week": "W40",
        "salesUnits": "94",
        "salesDollars": " $8,459.06 ",
        "costDollars": " $6,386.59 ",
        "gmDollars": " $2,072.47 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK02904",
        "week": "W41",
        "salesUnits": "76",
        "salesDollars": " $6,839.24 ",
        "costDollars": " $5,163.63 ",
        "gmDollars": " $1,675.61 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK02904",
        "week": "W42",
        "salesUnits": "113",
        "salesDollars": " $10,168.87 ",
        "costDollars": " $7,677.50 ",
        "gmDollars": " $2,491.37 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK02904",
        "week": "W44",
        "salesUnits": "147",
        "salesDollars": " $13,228.53 ",
        "costDollars": " $9,987.54 ",
        "gmDollars": " $3,240.99 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK03182",
        "week": "W01",
        "salesUnits": "126",
        "salesDollars": " $15,748.74 ",
        "costDollars": " $2,204.82 ",
        "gmDollars": " $13,543.92 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK03182",
        "week": "W16",
        "salesUnits": "13",
        "salesDollars": " $1,624.87 ",
        "costDollars": " $227.48 ",
        "gmDollars": " $1,397.39 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK03182",
        "week": "W20",
        "salesUnits": "48",
        "salesDollars": " $5,999.52 ",
        "costDollars": " $839.93 ",
        "gmDollars": " $5,159.59 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK03182",
        "week": "W22",
        "salesUnits": "181",
        "salesDollars": " $22,623.19 ",
        "costDollars": " $3,167.25 ",
        "gmDollars": " $19,455.94 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK03182",
        "week": "W25",
        "salesUnits": "95",
        "salesDollars": " $11,874.05 ",
        "costDollars": " $1,662.37 ",
        "gmDollars": " $10,211.68 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK03182",
        "week": "W31",
        "salesUnits": "55",
        "salesDollars": " $6,874.45 ",
        "costDollars": " $962.42 ",
        "gmDollars": " $5,912.03 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK03182",
        "week": "W32",
        "salesUnits": "164",
        "salesDollars": " $20,498.36 ",
        "costDollars": " $2,869.77 ",
        "gmDollars": " $17,628.59 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK03182",
        "week": "W34",
        "salesUnits": "104",
        "salesDollars": " $12,998.96 ",
        "costDollars": " $1,819.85 ",
        "gmDollars": " $11,179.11 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK03182",
        "week": "W40",
        "salesUnits": "90",
        "salesDollars": " $11,249.10 ",
        "costDollars": " $1,574.87 ",
        "gmDollars": " $9,674.23 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK03289",
        "week": "W02",
        "salesUnits": "19",
        "salesDollars": " $3,039.81 ",
        "costDollars": " $2,322.41 ",
        "gmDollars": " $717.40 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK03289",
        "week": "W08",
        "salesUnits": "41",
        "salesDollars": " $6,559.59 ",
        "costDollars": " $5,011.53 ",
        "gmDollars": " $1,548.06 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK03289",
        "week": "W09",
        "salesUnits": "107",
        "salesDollars": " $17,118.93 ",
        "costDollars": " $13,078.86 ",
        "gmDollars": " $4,040.07 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK03289",
        "week": "W17",
        "salesUnits": "104",
        "salesDollars": " $16,638.96 ",
        "costDollars": " $12,712.17 ",
        "gmDollars": " $3,926.79 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK03289",
        "week": "W22",
        "salesUnits": "102",
        "salesDollars": " $16,318.98 ",
        "costDollars": " $12,467.70 ",
        "gmDollars": " $3,851.28 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK03289",
        "week": "W27",
        "salesUnits": "108",
        "salesDollars": " $17,278.92 ",
        "costDollars": " $13,201.09 ",
        "gmDollars": " $4,077.83 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK03289",
        "week": "W28",
        "salesUnits": "150",
        "salesDollars": " $23,998.50 ",
        "costDollars": " $18,334.85 ",
        "gmDollars": " $5,663.65 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK03289",
        "week": "W30",
        "salesUnits": "121",
        "salesDollars": " $19,358.79 ",
        "costDollars": " $14,790.12 ",
        "gmDollars": " $4,568.67 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK03289",
        "week": "W37",
        "salesUnits": "119",
        "salesDollars": " $19,038.81 ",
        "costDollars": " $14,545.65 ",
        "gmDollars": " $4,493.16 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK03289",
        "week": "W47",
        "salesUnits": "0",
        "salesDollars": " $-   ",
        "costDollars": " $-   ",
        "gmDollars": " $-   ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK03289",
        "week": "W51",
        "salesUnits": "50",
        "salesDollars": " $7,999.50 ",
        "costDollars": " $6,111.62 ",
        "gmDollars": " $1,887.88 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK03348",
        "week": "W14",
        "salesUnits": "126",
        "salesDollars": " $20,788.74 ",
        "costDollars": " $1,122.59 ",
        "gmDollars": " $19,666.15 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK03348",
        "week": "W24",
        "salesUnits": "8",
        "salesDollars": " $1,319.92 ",
        "costDollars": " $71.28 ",
        "gmDollars": " $1,248.64 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK03348",
        "week": "W27",
        "salesUnits": "174",
        "salesDollars": " $28,708.26 ",
        "costDollars": " $1,550.25 ",
        "gmDollars": " $27,158.01 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK03348",
        "week": "W35",
        "salesUnits": "6",
        "salesDollars": " $989.94 ",
        "costDollars": " $53.46 ",
        "gmDollars": " $936.48 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK03348",
        "week": "W50",
        "salesUnits": "62",
        "salesDollars": " $10,229.38 ",
        "costDollars": " $552.39 ",
        "gmDollars": " $9,676.99 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK03348",
        "week": "W51",
        "salesUnits": "38",
        "salesDollars": " $6,269.62 ",
        "costDollars": " $338.56 ",
        "gmDollars": " $5,931.06 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK03348",
        "week": "W52",
        "salesUnits": "103",
        "salesDollars": " $16,993.97 ",
        "costDollars": " $917.67 ",
        "gmDollars": " $16,076.30 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK03569",
        "week": "W01",
        "salesUnits": "26",
        "salesDollars": " $259.74 ",
        "costDollars": " $191.69 ",
        "gmDollars": " $68.05 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK03569",
        "week": "W21",
        "salesUnits": "172",
        "salesDollars": " $1,718.28 ",
        "costDollars": " $1,268.09 ",
        "gmDollars": " $450.19 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK03569",
        "week": "W23",
        "salesUnits": "139",
        "salesDollars": " $1,388.61 ",
        "costDollars": " $1,024.79 ",
        "gmDollars": " $363.82 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK03569",
        "week": "W32",
        "salesUnits": "19",
        "salesDollars": " $189.81 ",
        "costDollars": " $140.08 ",
        "gmDollars": " $49.73 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK03569",
        "week": "W36",
        "salesUnits": "178",
        "salesDollars": " $1,778.22 ",
        "costDollars": " $1,312.33 ",
        "gmDollars": " $465.89 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK03569",
        "week": "W37",
        "salesUnits": "18",
        "salesDollars": " $179.82 ",
        "costDollars": " $132.71 ",
        "gmDollars": " $47.11 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK03569",
        "week": "W42",
        "salesUnits": "32",
        "salesDollars": " $319.68 ",
        "costDollars": " $235.92 ",
        "gmDollars": " $83.76 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK03569",
        "week": "W46",
        "salesUnits": "155",
        "salesDollars": " $1,548.45 ",
        "costDollars": " $1,142.76 ",
        "gmDollars": " $405.69 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK03569",
        "week": "W47",
        "salesUnits": "8",
        "salesDollars": " $79.92 ",
        "costDollars": " $58.98 ",
        "gmDollars": " $20.94 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK03569",
        "week": "W48",
        "salesUnits": "99",
        "salesDollars": " $989.01 ",
        "costDollars": " $729.89 ",
        "gmDollars": " $259.12 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK03572",
        "week": "W07",
        "salesUnits": "67",
        "salesDollars": " $8,039.33 ",
        "costDollars": " $3,505.15 ",
        "gmDollars": " $4,534.18 ",
        "gmPercent": "56%"
    },
    {
        "store": "ST035",
        "sku": "SK03572",
        "week": "W08",
        "salesUnits": "154",
        "salesDollars": " $18,478.46 ",
        "costDollars": " $8,056.61 ",
        "gmDollars": " $10,421.85 ",
        "gmPercent": "56%"
    },
    {
        "store": "ST035",
        "sku": "SK03572",
        "week": "W17",
        "salesUnits": "136",
        "salesDollars": " $16,318.64 ",
        "costDollars": " $7,114.93 ",
        "gmDollars": " $9,203.71 ",
        "gmPercent": "56%"
    },
    {
        "store": "ST035",
        "sku": "SK03572",
        "week": "W20",
        "salesUnits": "7",
        "salesDollars": " $839.93 ",
        "costDollars": " $366.21 ",
        "gmDollars": " $473.72 ",
        "gmPercent": "56%"
    },
    {
        "store": "ST035",
        "sku": "SK03572",
        "week": "W27",
        "salesUnits": "165",
        "salesDollars": " $19,798.35 ",
        "costDollars": " $8,632.08 ",
        "gmDollars": " $11,166.27 ",
        "gmPercent": "56%"
    },
    {
        "store": "ST035",
        "sku": "SK03572",
        "week": "W29",
        "salesUnits": "84",
        "salesDollars": " $10,079.16 ",
        "costDollars": " $4,394.51 ",
        "gmDollars": " $5,684.65 ",
        "gmPercent": "56%"
    },
    {
        "store": "ST035",
        "sku": "SK03572",
        "week": "W34",
        "salesUnits": "20",
        "salesDollars": " $2,399.80 ",
        "costDollars": " $1,046.31 ",
        "gmDollars": " $1,353.49 ",
        "gmPercent": "56%"
    },
    {
        "store": "ST035",
        "sku": "SK03572",
        "week": "W40",
        "salesUnits": "29",
        "salesDollars": " $3,479.71 ",
        "costDollars": " $1,517.15 ",
        "gmDollars": " $1,962.56 ",
        "gmPercent": "56%"
    },
    {
        "store": "ST035",
        "sku": "SK03572",
        "week": "W45",
        "salesUnits": "121",
        "salesDollars": " $14,518.79 ",
        "costDollars": " $6,330.19 ",
        "gmDollars": " $8,188.60 ",
        "gmPercent": "56%"
    },
    {
        "store": "ST035",
        "sku": "SK03572",
        "week": "W46",
        "salesUnits": "89",
        "salesDollars": " $10,679.11 ",
        "costDollars": " $4,656.09 ",
        "gmDollars": " $6,023.02 ",
        "gmPercent": "56%"
    },
    {
        "store": "ST035",
        "sku": "SK03572",
        "week": "W47",
        "salesUnits": "189",
        "salesDollars": " $22,678.11 ",
        "costDollars": " $9,887.66 ",
        "gmDollars": " $12,790.45 ",
        "gmPercent": "56%"
    },
    {
        "store": "ST035",
        "sku": "SK03636",
        "week": "W07",
        "salesUnits": "127",
        "salesDollars": " $1,903.73 ",
        "costDollars": " $1,107.97 ",
        "gmDollars": " $795.76 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK03636",
        "week": "W20",
        "salesUnits": "65",
        "salesDollars": " $974.35 ",
        "costDollars": " $567.07 ",
        "gmDollars": " $407.28 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK03636",
        "week": "W25",
        "salesUnits": "27",
        "salesDollars": " $404.73 ",
        "costDollars": " $235.55 ",
        "gmDollars": " $169.18 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK03636",
        "week": "W27",
        "salesUnits": "128",
        "salesDollars": " $1,918.72 ",
        "costDollars": " $1,116.70 ",
        "gmDollars": " $802.02 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK03636",
        "week": "W30",
        "salesUnits": "98",
        "salesDollars": " $1,469.02 ",
        "costDollars": " $854.97 ",
        "gmDollars": " $614.05 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK03636",
        "week": "W34",
        "salesUnits": "153",
        "salesDollars": " $2,293.47 ",
        "costDollars": " $1,334.80 ",
        "gmDollars": " $958.67 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK03636",
        "week": "W35",
        "salesUnits": "154",
        "salesDollars": " $2,308.46 ",
        "costDollars": " $1,343.52 ",
        "gmDollars": " $964.94 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK03636",
        "week": "W45",
        "salesUnits": "62",
        "salesDollars": " $929.38 ",
        "costDollars": " $540.90 ",
        "gmDollars": " $388.48 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK03636",
        "week": "W48",
        "salesUnits": "135",
        "salesDollars": " $2,023.65 ",
        "costDollars": " $1,177.76 ",
        "gmDollars": " $845.89 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK03636",
        "week": "W52",
        "salesUnits": "100",
        "salesDollars": " $1,499.00 ",
        "costDollars": " $872.42 ",
        "gmDollars": " $626.58 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK03725",
        "week": "W02",
        "salesUnits": "40",
        "salesDollars": " $3,199.60 ",
        "costDollars": " $377.55 ",
        "gmDollars": " $2,822.05 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK03725",
        "week": "W30",
        "salesUnits": "87",
        "salesDollars": " $6,959.13 ",
        "costDollars": " $821.18 ",
        "gmDollars": " $6,137.95 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK03725",
        "week": "W32",
        "salesUnits": "73",
        "salesDollars": " $5,839.27 ",
        "costDollars": " $689.03 ",
        "gmDollars": " $5,150.24 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK03725",
        "week": "W34",
        "salesUnits": "130",
        "salesDollars": " $10,398.70 ",
        "costDollars": " $1,227.05 ",
        "gmDollars": " $9,171.65 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK03725",
        "week": "W36",
        "salesUnits": "191",
        "salesDollars": " $15,278.09 ",
        "costDollars": " $1,802.81 ",
        "gmDollars": " $13,475.28 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK03725",
        "week": "W38",
        "salesUnits": "194",
        "salesDollars": " $15,518.06 ",
        "costDollars": " $1,831.13 ",
        "gmDollars": " $13,686.93 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK03980",
        "week": "W15",
        "salesUnits": "138",
        "salesDollars": " $15,178.62 ",
        "costDollars": " $8,515.21 ",
        "gmDollars": " $6,663.41 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK03980",
        "week": "W16",
        "salesUnits": "91",
        "salesDollars": " $10,009.09 ",
        "costDollars": " $5,615.10 ",
        "gmDollars": " $4,393.99 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK03980",
        "week": "W22",
        "salesUnits": "32",
        "salesDollars": " $3,519.68 ",
        "costDollars": " $1,974.54 ",
        "gmDollars": " $1,545.14 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK03980",
        "week": "W24",
        "salesUnits": "127",
        "salesDollars": " $13,968.73 ",
        "costDollars": " $7,836.46 ",
        "gmDollars": " $6,132.27 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK03980",
        "week": "W33",
        "salesUnits": "199",
        "salesDollars": " $21,888.01 ",
        "costDollars": " $12,279.17 ",
        "gmDollars": " $9,608.84 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK03980",
        "week": "W37",
        "salesUnits": "74",
        "salesDollars": " $8,139.26 ",
        "costDollars": " $4,566.12 ",
        "gmDollars": " $3,573.14 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK03980",
        "week": "W38",
        "salesUnits": "67",
        "salesDollars": " $7,369.33 ",
        "costDollars": " $4,134.19 ",
        "gmDollars": " $3,235.14 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK03980",
        "week": "W45",
        "salesUnits": "90",
        "salesDollars": " $9,899.10 ",
        "costDollars": " $5,553.40 ",
        "gmDollars": " $4,345.70 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK03980",
        "week": "W50",
        "salesUnits": "20",
        "salesDollars": " $2,199.80 ",
        "costDollars": " $1,234.09 ",
        "gmDollars": " $965.71 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK04282",
        "week": "W04",
        "salesUnits": "47",
        "salesDollars": " $5,404.53 ",
        "costDollars": " $2,442.85 ",
        "gmDollars": " $2,961.68 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK04282",
        "week": "W22",
        "salesUnits": "3",
        "salesDollars": " $344.97 ",
        "costDollars": " $155.93 ",
        "gmDollars": " $189.04 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK04282",
        "week": "W24",
        "salesUnits": "142",
        "salesDollars": " $16,328.58 ",
        "costDollars": " $7,380.52 ",
        "gmDollars": " $8,948.06 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK04282",
        "week": "W25",
        "salesUnits": "56",
        "salesDollars": " $6,439.44 ",
        "costDollars": " $2,910.63 ",
        "gmDollars": " $3,528.81 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK04282",
        "week": "W26",
        "salesUnits": "51",
        "salesDollars": " $5,864.49 ",
        "costDollars": " $2,650.75 ",
        "gmDollars": " $3,213.74 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK04282",
        "week": "W35",
        "salesUnits": "132",
        "salesDollars": " $15,178.68 ",
        "costDollars": " $6,860.76 ",
        "gmDollars": " $8,317.92 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK04282",
        "week": "W38",
        "salesUnits": "108",
        "salesDollars": " $12,418.92 ",
        "costDollars": " $5,613.35 ",
        "gmDollars": " $6,805.57 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK04282",
        "week": "W39",
        "salesUnits": "105",
        "salesDollars": " $12,073.95 ",
        "costDollars": " $5,457.43 ",
        "gmDollars": " $6,616.52 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK04282",
        "week": "W44",
        "salesUnits": "16",
        "salesDollars": " $1,839.84 ",
        "costDollars": " $831.61 ",
        "gmDollars": " $1,008.23 ",
        "gmPercent": "55%"
    },
    {
        "store": "ST035",
        "sku": "SK04325",
        "week": "W01",
        "salesUnits": "73",
        "salesDollars": " $14,234.27 ",
        "costDollars": " $953.70 ",
        "gmDollars": " $13,280.57 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK04325",
        "week": "W09",
        "salesUnits": "110",
        "salesDollars": " $21,448.90 ",
        "costDollars": " $1,437.08 ",
        "gmDollars": " $20,011.82 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK04325",
        "week": "W22",
        "salesUnits": "192",
        "salesDollars": " $37,438.08 ",
        "costDollars": " $2,508.35 ",
        "gmDollars": " $34,929.73 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK04325",
        "week": "W29",
        "salesUnits": "38",
        "salesDollars": " $7,409.62 ",
        "costDollars": " $496.44 ",
        "gmDollars": " $6,913.18 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK04325",
        "week": "W51",
        "salesUnits": "181",
        "salesDollars": " $35,293.19 ",
        "costDollars": " $2,364.64 ",
        "gmDollars": " $32,928.55 ",
        "gmPercent": "93%"
    },
    {
        "store": "ST035",
        "sku": "SK04707",
        "week": "W03",
        "salesUnits": "27",
        "salesDollars": " $674.73 ",
        "costDollars": " $638.29 ",
        "gmDollars": " $36.44 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK04707",
        "week": "W06",
        "salesUnits": "191",
        "salesDollars": " $4,773.09 ",
        "costDollars": " $4,515.34 ",
        "gmDollars": " $257.75 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK04707",
        "week": "W12",
        "salesUnits": "158",
        "salesDollars": " $3,948.42 ",
        "costDollars": " $3,735.21 ",
        "gmDollars": " $213.21 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK04707",
        "week": "W18",
        "salesUnits": "195",
        "salesDollars": " $4,873.05 ",
        "costDollars": " $4,609.91 ",
        "gmDollars": " $263.14 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK04707",
        "week": "W23",
        "salesUnits": "78",
        "salesDollars": " $1,949.22 ",
        "costDollars": " $1,843.96 ",
        "gmDollars": " $105.26 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK04707",
        "week": "W38",
        "salesUnits": "176",
        "salesDollars": " $4,398.24 ",
        "costDollars": " $4,160.74 ",
        "gmDollars": " $237.50 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK04707",
        "week": "W42",
        "salesUnits": "82",
        "salesDollars": " $2,049.18 ",
        "costDollars": " $1,938.52 ",
        "gmDollars": " $110.66 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK04707",
        "week": "W48",
        "salesUnits": "109",
        "salesDollars": " $2,723.91 ",
        "costDollars": " $2,576.82 ",
        "gmDollars": " $147.09 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W01",
        "salesUnits": "192",
        "salesDollars": " $2,878.08 ",
        "costDollars": " $3,128.47 ",
        "gmDollars": " $(250.39)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W04",
        "salesUnits": "107",
        "salesDollars": " $1,603.93 ",
        "costDollars": " $1,743.47 ",
        "gmDollars": " $(139.54)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W11",
        "salesUnits": "177",
        "salesDollars": " $2,653.23 ",
        "costDollars": " $2,884.06 ",
        "gmDollars": " $(230.83)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W12",
        "salesUnits": "83",
        "salesDollars": " $1,244.17 ",
        "costDollars": " $1,352.41 ",
        "gmDollars": " $(108.24)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W14",
        "salesUnits": "146",
        "salesDollars": " $2,188.54 ",
        "costDollars": " $2,378.94 ",
        "gmDollars": " $(190.40)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W16",
        "salesUnits": "21",
        "salesDollars": " $314.79 ",
        "costDollars": " $342.18 ",
        "gmDollars": " $(27.39)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W20",
        "salesUnits": "132",
        "salesDollars": " $1,978.68 ",
        "costDollars": " $2,150.83 ",
        "gmDollars": " $(172.15)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W23",
        "salesUnits": "153",
        "salesDollars": " $2,293.47 ",
        "costDollars": " $2,493.00 ",
        "gmDollars": " $(199.53)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W24",
        "salesUnits": "101",
        "salesDollars": " $1,513.99 ",
        "costDollars": " $1,645.71 ",
        "gmDollars": " $(131.72)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W26",
        "salesUnits": "121",
        "salesDollars": " $1,813.79 ",
        "costDollars": " $1,971.59 ",
        "gmDollars": " $(157.80)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W31",
        "salesUnits": "121",
        "salesDollars": " $1,813.79 ",
        "costDollars": " $1,971.59 ",
        "gmDollars": " $(157.80)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W33",
        "salesUnits": "154",
        "salesDollars": " $2,308.46 ",
        "costDollars": " $2,509.30 ",
        "gmDollars": " $(200.84)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK04815",
        "week": "W37",
        "salesUnits": "51",
        "salesDollars": " $764.49 ",
        "costDollars": " $831.00 ",
        "gmDollars": " $(66.51)",
        "gmPercent": "-9%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W01",
        "salesUnits": "182",
        "salesDollars": " $14,558.18 ",
        "costDollars": " $3,552.20 ",
        "gmDollars": " $11,005.98 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W03",
        "salesUnits": "143",
        "salesDollars": " $11,438.57 ",
        "costDollars": " $2,791.01 ",
        "gmDollars": " $8,647.56 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W05",
        "salesUnits": "187",
        "salesDollars": " $14,958.13 ",
        "costDollars": " $3,649.78 ",
        "gmDollars": " $11,308.35 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W08",
        "salesUnits": "175",
        "salesDollars": " $13,998.25 ",
        "costDollars": " $3,415.57 ",
        "gmDollars": " $10,582.68 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W10",
        "salesUnits": "178",
        "salesDollars": " $14,238.22 ",
        "costDollars": " $3,474.13 ",
        "gmDollars": " $10,764.09 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W11",
        "salesUnits": "114",
        "salesDollars": " $9,118.86 ",
        "costDollars": " $2,225.00 ",
        "gmDollars": " $6,893.86 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W19",
        "salesUnits": "41",
        "salesDollars": " $3,279.59 ",
        "costDollars": " $800.22 ",
        "gmDollars": " $2,479.37 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W25",
        "salesUnits": "123",
        "salesDollars": " $9,838.77 ",
        "costDollars": " $2,400.66 ",
        "gmDollars": " $7,438.11 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W30",
        "salesUnits": "17",
        "salesDollars": " $1,359.83 ",
        "costDollars": " $331.80 ",
        "gmDollars": " $1,028.03 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W33",
        "salesUnits": "145",
        "salesDollars": " $11,598.55 ",
        "costDollars": " $2,830.05 ",
        "gmDollars": " $8,768.50 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W45",
        "salesUnits": "199",
        "salesDollars": " $15,918.01 ",
        "costDollars": " $3,883.99 ",
        "gmDollars": " $12,034.02 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05097",
        "week": "W46",
        "salesUnits": "34",
        "salesDollars": " $2,719.66 ",
        "costDollars": " $663.60 ",
        "gmDollars": " $2,056.06 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W01",
        "salesUnits": "188",
        "salesDollars": " $36,658.12 ",
        "costDollars": " $5,278.77 ",
        "gmDollars": " $31,379.35 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W04",
        "salesUnits": "138",
        "salesDollars": " $26,908.62 ",
        "costDollars": " $3,874.84 ",
        "gmDollars": " $23,033.78 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W06",
        "salesUnits": "23",
        "salesDollars": " $4,484.77 ",
        "costDollars": " $645.81 ",
        "gmDollars": " $3,838.96 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W13",
        "salesUnits": "28",
        "salesDollars": " $5,459.72 ",
        "costDollars": " $786.20 ",
        "gmDollars": " $4,673.52 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W16",
        "salesUnits": "40",
        "salesDollars": " $7,799.60 ",
        "costDollars": " $1,123.14 ",
        "gmDollars": " $6,676.46 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W20",
        "salesUnits": "53",
        "salesDollars": " $10,334.47 ",
        "costDollars": " $1,488.16 ",
        "gmDollars": " $8,846.31 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W27",
        "salesUnits": "166",
        "salesDollars": " $32,368.34 ",
        "costDollars": " $4,661.04 ",
        "gmDollars": " $27,707.30 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W31",
        "salesUnits": "151",
        "salesDollars": " $29,443.49 ",
        "costDollars": " $4,239.86 ",
        "gmDollars": " $25,203.63 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W37",
        "salesUnits": "44",
        "salesDollars": " $8,579.56 ",
        "costDollars": " $1,235.46 ",
        "gmDollars": " $7,344.10 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W43",
        "salesUnits": "99",
        "salesDollars": " $19,304.01 ",
        "costDollars": " $2,779.78 ",
        "gmDollars": " $16,524.23 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W48",
        "salesUnits": "96",
        "salesDollars": " $18,719.04 ",
        "costDollars": " $2,695.54 ",
        "gmDollars": " $16,023.50 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05194",
        "week": "W50",
        "salesUnits": "63",
        "salesDollars": " $12,284.37 ",
        "costDollars": " $1,768.95 ",
        "gmDollars": " $10,515.42 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK05478",
        "week": "W02",
        "salesUnits": "7",
        "salesDollars": " $1,224.93 ",
        "costDollars": " $1,031.39 ",
        "gmDollars": " $193.54 ",
        "gmPercent": "16%"
    },
    {
        "store": "ST035",
        "sku": "SK05478",
        "week": "W03",
        "salesUnits": "151",
        "salesDollars": " $26,423.49 ",
        "costDollars": " $22,248.58 ",
        "gmDollars": " $4,174.91 ",
        "gmPercent": "16%"
    },
    {
        "store": "ST035",
        "sku": "SK05478",
        "week": "W04",
        "salesUnits": "189",
        "salesDollars": " $33,073.11 ",
        "costDollars": " $27,847.56 ",
        "gmDollars": " $5,225.55 ",
        "gmPercent": "16%"
    },
    {
        "store": "ST035",
        "sku": "SK05478",
        "week": "W05",
        "salesUnits": "108",
        "salesDollars": " $18,898.92 ",
        "costDollars": " $15,912.89 ",
        "gmDollars": " $2,986.03 ",
        "gmPercent": "16%"
    },
    {
        "store": "ST035",
        "sku": "SK05478",
        "week": "W07",
        "salesUnits": "163",
        "salesDollars": " $28,523.37 ",
        "costDollars": " $24,016.68 ",
        "gmDollars": " $4,506.69 ",
        "gmPercent": "16%"
    },
    {
        "store": "ST035",
        "sku": "SK05478",
        "week": "W23",
        "salesUnits": "3",
        "salesDollars": " $524.97 ",
        "costDollars": " $442.02 ",
        "gmDollars": " $82.95 ",
        "gmPercent": "16%"
    },
    {
        "store": "ST035",
        "sku": "SK05478",
        "week": "W25",
        "salesUnits": "175",
        "salesDollars": " $30,623.25 ",
        "costDollars": " $25,784.78 ",
        "gmDollars": " $4,838.47 ",
        "gmPercent": "16%"
    },
    {
        "store": "ST035",
        "sku": "SK05478",
        "week": "W34",
        "salesUnits": "162",
        "salesDollars": " $28,348.38 ",
        "costDollars": " $23,869.34 ",
        "gmDollars": " $4,479.04 ",
        "gmPercent": "16%"
    },
    {
        "store": "ST035",
        "sku": "SK05478",
        "week": "W41",
        "salesUnits": "87",
        "salesDollars": " $15,224.13 ",
        "costDollars": " $12,818.72 ",
        "gmDollars": " $2,405.41 ",
        "gmPercent": "16%"
    },
    {
        "store": "ST035",
        "sku": "SK05478",
        "week": "W46",
        "salesUnits": "73",
        "salesDollars": " $12,774.27 ",
        "costDollars": " $10,755.94 ",
        "gmDollars": " $2,018.33 ",
        "gmPercent": "16%"
    },
    {
        "store": "ST035",
        "sku": "SK05715",
        "week": "W03",
        "salesUnits": "142",
        "salesDollars": " $13,488.58 ",
        "costDollars": " $3,210.28 ",
        "gmDollars": " $10,278.30 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05715",
        "week": "W05",
        "salesUnits": "21",
        "salesDollars": " $1,994.79 ",
        "costDollars": " $474.76 ",
        "gmDollars": " $1,520.03 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05715",
        "week": "W21",
        "salesUnits": "137",
        "salesDollars": " $13,013.63 ",
        "costDollars": " $3,097.24 ",
        "gmDollars": " $9,916.39 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05715",
        "week": "W29",
        "salesUnits": "186",
        "salesDollars": " $17,668.14 ",
        "costDollars": " $4,205.02 ",
        "gmDollars": " $13,463.12 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05715",
        "week": "W30",
        "salesUnits": "169",
        "salesDollars": " $16,053.31 ",
        "costDollars": " $3,820.69 ",
        "gmDollars": " $12,232.62 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05715",
        "week": "W32",
        "salesUnits": "6",
        "salesDollars": " $569.94 ",
        "costDollars": " $135.65 ",
        "gmDollars": " $434.29 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05715",
        "week": "W35",
        "salesUnits": "41",
        "salesDollars": " $3,894.59 ",
        "costDollars": " $926.91 ",
        "gmDollars": " $2,967.68 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05715",
        "week": "W39",
        "salesUnits": "59",
        "salesDollars": " $5,604.41 ",
        "costDollars": " $1,333.85 ",
        "gmDollars": " $4,270.56 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05715",
        "week": "W45",
        "salesUnits": "41",
        "salesDollars": " $3,894.59 ",
        "costDollars": " $926.91 ",
        "gmDollars": " $2,967.68 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05715",
        "week": "W46",
        "salesUnits": "185",
        "salesDollars": " $17,573.15 ",
        "costDollars": " $4,182.41 ",
        "gmDollars": " $13,390.74 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK05928",
        "week": "W01",
        "salesUnits": "29",
        "salesDollars": " $2,029.71 ",
        "costDollars": " $1,207.68 ",
        "gmDollars": " $822.03 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK05928",
        "week": "W02",
        "salesUnits": "71",
        "salesDollars": " $4,969.29 ",
        "costDollars": " $2,956.73 ",
        "gmDollars": " $2,012.56 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK05928",
        "week": "W13",
        "salesUnits": "37",
        "salesDollars": " $2,589.63 ",
        "costDollars": " $1,540.83 ",
        "gmDollars": " $1,048.80 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK05928",
        "week": "W17",
        "salesUnits": "41",
        "salesDollars": " $2,869.59 ",
        "costDollars": " $1,707.41 ",
        "gmDollars": " $1,162.18 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK05928",
        "week": "W23",
        "salesUnits": "15",
        "salesDollars": " $1,049.85 ",
        "costDollars": " $624.66 ",
        "gmDollars": " $425.19 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK05928",
        "week": "W25",
        "salesUnits": "9",
        "salesDollars": " $629.91 ",
        "costDollars": " $374.80 ",
        "gmDollars": " $255.11 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK05928",
        "week": "W28",
        "salesUnits": "184",
        "salesDollars": " $12,878.16 ",
        "costDollars": " $7,662.51 ",
        "gmDollars": " $5,215.65 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK05928",
        "week": "W31",
        "salesUnits": "152",
        "salesDollars": " $10,638.48 ",
        "costDollars": " $6,329.90 ",
        "gmDollars": " $4,308.58 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK05928",
        "week": "W34",
        "salesUnits": "107",
        "salesDollars": " $7,488.93 ",
        "costDollars": " $4,455.91 ",
        "gmDollars": " $3,033.02 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK05928",
        "week": "W43",
        "salesUnits": "68",
        "salesDollars": " $4,759.32 ",
        "costDollars": " $2,831.80 ",
        "gmDollars": " $1,927.52 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK05928",
        "week": "W50",
        "salesUnits": "133",
        "salesDollars": " $9,308.67 ",
        "costDollars": " $5,538.66 ",
        "gmDollars": " $3,770.01 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK06290",
        "week": "W01",
        "salesUnits": "77",
        "salesDollars": " $11,164.23 ",
        "costDollars": " $4,119.60 ",
        "gmDollars": " $7,044.63 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK06290",
        "week": "W03",
        "salesUnits": "186",
        "salesDollars": " $26,968.14 ",
        "costDollars": " $9,951.24 ",
        "gmDollars": " $17,016.90 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK06290",
        "week": "W06",
        "salesUnits": "133",
        "salesDollars": " $19,283.67 ",
        "costDollars": " $7,115.67 ",
        "gmDollars": " $12,168.00 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK06290",
        "week": "W15",
        "salesUnits": "78",
        "salesDollars": " $11,309.22 ",
        "costDollars": " $4,173.10 ",
        "gmDollars": " $7,136.12 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK06290",
        "week": "W24",
        "salesUnits": "21",
        "salesDollars": " $3,044.79 ",
        "costDollars": " $1,123.53 ",
        "gmDollars": " $1,921.26 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK06290",
        "week": "W29",
        "salesUnits": "69",
        "salesDollars": " $10,004.31 ",
        "costDollars": " $3,691.59 ",
        "gmDollars": " $6,312.72 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK06290",
        "week": "W33",
        "salesUnits": "118",
        "salesDollars": " $17,108.82 ",
        "costDollars": " $6,313.15 ",
        "gmDollars": " $10,795.67 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK06290",
        "week": "W38",
        "salesUnits": "168",
        "salesDollars": " $24,358.32 ",
        "costDollars": " $8,988.22 ",
        "gmDollars": " $15,370.10 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK06290",
        "week": "W45",
        "salesUnits": "112",
        "salesDollars": " $16,238.88 ",
        "costDollars": " $5,992.15 ",
        "gmDollars": " $10,246.73 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK06290",
        "week": "W46",
        "salesUnits": "16",
        "salesDollars": " $2,319.84 ",
        "costDollars": " $856.02 ",
        "gmDollars": " $1,463.82 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK06290",
        "week": "W52",
        "salesUnits": "53",
        "salesDollars": " $7,684.47 ",
        "costDollars": " $2,835.57 ",
        "gmDollars": " $4,848.90 ",
        "gmPercent": "63%"
    },
    {
        "store": "ST035",
        "sku": "SK06375",
        "week": "W03",
        "salesUnits": "30",
        "salesDollars": " $4,349.70 ",
        "costDollars": " $3,431.91 ",
        "gmDollars": " $917.79 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK06375",
        "week": "W12",
        "salesUnits": "42",
        "salesDollars": " $6,089.58 ",
        "costDollars": " $4,804.68 ",
        "gmDollars": " $1,284.90 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK06375",
        "week": "W16",
        "salesUnits": "82",
        "salesDollars": " $11,889.18 ",
        "costDollars": " $9,380.56 ",
        "gmDollars": " $2,508.62 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK06375",
        "week": "W17",
        "salesUnits": "137",
        "salesDollars": " $19,863.63 ",
        "costDollars": " $15,672.40 ",
        "gmDollars": " $4,191.23 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK06375",
        "week": "W19",
        "salesUnits": "182",
        "salesDollars": " $26,388.18 ",
        "costDollars": " $20,820.27 ",
        "gmDollars": " $5,567.91 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK06375",
        "week": "W27",
        "salesUnits": "109",
        "salesDollars": " $15,803.91 ",
        "costDollars": " $12,469.28 ",
        "gmDollars": " $3,334.63 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK06375",
        "week": "W35",
        "salesUnits": "17",
        "salesDollars": " $2,464.83 ",
        "costDollars": " $1,944.75 ",
        "gmDollars": " $520.08 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK06375",
        "week": "W36",
        "salesUnits": "132",
        "salesDollars": " $19,138.68 ",
        "costDollars": " $15,100.42 ",
        "gmDollars": " $4,038.26 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK06375",
        "week": "W42",
        "salesUnits": "51",
        "salesDollars": " $7,394.49 ",
        "costDollars": " $5,834.25 ",
        "gmDollars": " $1,560.24 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK06375",
        "week": "W45",
        "salesUnits": "182",
        "salesDollars": " $26,388.18 ",
        "costDollars": " $20,820.27 ",
        "gmDollars": " $5,567.91 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK06375",
        "week": "W48",
        "salesUnits": "31",
        "salesDollars": " $4,494.69 ",
        "costDollars": " $3,546.31 ",
        "gmDollars": " $948.38 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK06559",
        "week": "W04",
        "salesUnits": "177",
        "salesDollars": " $25,663.23 ",
        "costDollars": " $25,842.87 ",
        "gmDollars": " $(179.64)",
        "gmPercent": "-1%"
    },
    {
        "store": "ST035",
        "sku": "SK06559",
        "week": "W14",
        "salesUnits": "148",
        "salesDollars": " $21,458.52 ",
        "costDollars": " $21,608.73 ",
        "gmDollars": " $(150.21)",
        "gmPercent": "-1%"
    },
    {
        "store": "ST035",
        "sku": "SK06559",
        "week": "W15",
        "salesUnits": "69",
        "salesDollars": " $10,004.31 ",
        "costDollars": " $10,074.34 ",
        "gmDollars": " $(70.03)",
        "gmPercent": "-1%"
    },
    {
        "store": "ST035",
        "sku": "SK06559",
        "week": "W20",
        "salesUnits": "34",
        "salesDollars": " $4,929.66 ",
        "costDollars": " $4,964.17 ",
        "gmDollars": " $(34.51)",
        "gmPercent": "-1%"
    },
    {
        "store": "ST035",
        "sku": "SK06559",
        "week": "W28",
        "salesUnits": "21",
        "salesDollars": " $3,044.79 ",
        "costDollars": " $3,066.10 ",
        "gmDollars": " $(21.31)",
        "gmPercent": "-1%"
    },
    {
        "store": "ST035",
        "sku": "SK06559",
        "week": "W31",
        "salesUnits": "169",
        "salesDollars": " $24,503.31 ",
        "costDollars": " $24,674.83 ",
        "gmDollars": " $(171.52)",
        "gmPercent": "-1%"
    },
    {
        "store": "ST035",
        "sku": "SK06559",
        "week": "W50",
        "salesUnits": "51",
        "salesDollars": " $7,394.49 ",
        "costDollars": " $7,446.25 ",
        "gmDollars": " $(51.76)",
        "gmPercent": "-1%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W01",
        "salesUnits": "72",
        "salesDollars": " $4,319.28 ",
        "costDollars": " $2,397.20 ",
        "gmDollars": " $1,922.08 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W02",
        "salesUnits": "30",
        "salesDollars": " $1,799.70 ",
        "costDollars": " $998.83 ",
        "gmDollars": " $800.87 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W03",
        "salesUnits": "65",
        "salesDollars": " $3,899.35 ",
        "costDollars": " $2,164.14 ",
        "gmDollars": " $1,735.21 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W09",
        "salesUnits": "165",
        "salesDollars": " $9,898.35 ",
        "costDollars": " $5,493.58 ",
        "gmDollars": " $4,404.77 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W19",
        "salesUnits": "40",
        "salesDollars": " $2,399.60 ",
        "costDollars": " $1,331.78 ",
        "gmDollars": " $1,067.82 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W21",
        "salesUnits": "170",
        "salesDollars": " $10,198.30 ",
        "costDollars": " $5,660.06 ",
        "gmDollars": " $4,538.24 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W26",
        "salesUnits": "150",
        "salesDollars": " $8,998.50 ",
        "costDollars": " $4,994.17 ",
        "gmDollars": " $4,004.33 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W28",
        "salesUnits": "195",
        "salesDollars": " $11,698.05 ",
        "costDollars": " $6,492.42 ",
        "gmDollars": " $5,205.63 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W33",
        "salesUnits": "111",
        "salesDollars": " $6,658.89 ",
        "costDollars": " $3,695.68 ",
        "gmDollars": " $2,963.21 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W34",
        "salesUnits": "156",
        "salesDollars": " $9,358.44 ",
        "costDollars": " $5,193.93 ",
        "gmDollars": " $4,164.51 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W36",
        "salesUnits": "158",
        "salesDollars": " $9,478.42 ",
        "costDollars": " $5,260.52 ",
        "gmDollars": " $4,217.90 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W39",
        "salesUnits": "0",
        "salesDollars": " $-   ",
        "costDollars": " $-   ",
        "gmDollars": " $-   ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W42",
        "salesUnits": "165",
        "salesDollars": " $9,898.35 ",
        "costDollars": " $5,493.58 ",
        "gmDollars": " $4,404.77 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W43",
        "salesUnits": "72",
        "salesDollars": " $4,319.28 ",
        "costDollars": " $2,397.20 ",
        "gmDollars": " $1,922.08 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06601",
        "week": "W45",
        "salesUnits": "43",
        "salesDollars": " $2,579.57 ",
        "costDollars": " $1,431.66 ",
        "gmDollars": " $1,147.91 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK06651",
        "week": "W20",
        "salesUnits": "87",
        "salesDollars": " $4,349.13 ",
        "costDollars": " $4,570.94 ",
        "gmDollars": " $(221.81)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK06651",
        "week": "W25",
        "salesUnits": "167",
        "salesDollars": " $8,348.33 ",
        "costDollars": " $8,774.09 ",
        "gmDollars": " $(425.76)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK06651",
        "week": "W26",
        "salesUnits": "10",
        "salesDollars": " $499.90 ",
        "costDollars": " $525.39 ",
        "gmDollars": " $(25.49)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK06651",
        "week": "W30",
        "salesUnits": "18",
        "salesDollars": " $899.82 ",
        "costDollars": " $945.71 ",
        "gmDollars": " $(45.89)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK06651",
        "week": "W31",
        "salesUnits": "27",
        "salesDollars": " $1,349.73 ",
        "costDollars": " $1,418.57 ",
        "gmDollars": " $(68.84)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK06651",
        "week": "W37",
        "salesUnits": "34",
        "salesDollars": " $1,699.66 ",
        "costDollars": " $1,786.34 ",
        "gmDollars": " $(86.68)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK06651",
        "week": "W43",
        "salesUnits": "84",
        "salesDollars": " $4,199.16 ",
        "costDollars": " $4,413.32 ",
        "gmDollars": " $(214.16)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK06651",
        "week": "W46",
        "salesUnits": "108",
        "salesDollars": " $5,398.92 ",
        "costDollars": " $5,674.26 ",
        "gmDollars": " $(275.34)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK06651",
        "week": "W49",
        "salesUnits": "142",
        "salesDollars": " $7,098.58 ",
        "costDollars": " $7,460.61 ",
        "gmDollars": " $(362.03)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK06691",
        "week": "W09",
        "salesUnits": "138",
        "salesDollars": " $1,378.62 ",
        "costDollars": " $295.02 ",
        "gmDollars": " $1,083.60 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK06691",
        "week": "W10",
        "salesUnits": "45",
        "salesDollars": " $449.55 ",
        "costDollars": " $96.20 ",
        "gmDollars": " $353.35 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK06691",
        "week": "W11",
        "salesUnits": "92",
        "salesDollars": " $919.08 ",
        "costDollars": " $196.68 ",
        "gmDollars": " $722.40 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK06691",
        "week": "W23",
        "salesUnits": "1",
        "salesDollars": " $9.99 ",
        "costDollars": " $2.14 ",
        "gmDollars": " $7.85 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK06691",
        "week": "W32",
        "salesUnits": "136",
        "salesDollars": " $1,358.64 ",
        "costDollars": " $290.75 ",
        "gmDollars": " $1,067.89 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK06691",
        "week": "W34",
        "salesUnits": "57",
        "salesDollars": " $569.43 ",
        "costDollars": " $121.86 ",
        "gmDollars": " $447.57 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK06691",
        "week": "W39",
        "salesUnits": "35",
        "salesDollars": " $349.65 ",
        "costDollars": " $74.83 ",
        "gmDollars": " $274.82 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK06691",
        "week": "W45",
        "salesUnits": "129",
        "salesDollars": " $1,288.71 ",
        "costDollars": " $275.78 ",
        "gmDollars": " $1,012.93 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK06691",
        "week": "W46",
        "salesUnits": "147",
        "salesDollars": " $1,468.53 ",
        "costDollars": " $314.27 ",
        "gmDollars": " $1,154.26 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK06691",
        "week": "W50",
        "salesUnits": "84",
        "salesDollars": " $839.16 ",
        "costDollars": " $179.58 ",
        "gmDollars": " $659.58 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK06996",
        "week": "W04",
        "salesUnits": "194",
        "salesDollars": " $24,248.06 ",
        "costDollars": " $22,526.45 ",
        "gmDollars": " $1,721.61 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK06996",
        "week": "W05",
        "salesUnits": "11",
        "salesDollars": " $1,374.89 ",
        "costDollars": " $1,277.27 ",
        "gmDollars": " $97.62 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK06996",
        "week": "W12",
        "salesUnits": "105",
        "salesDollars": " $13,123.95 ",
        "costDollars": " $12,192.15 ",
        "gmDollars": " $931.80 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK06996",
        "week": "W18",
        "salesUnits": "172",
        "salesDollars": " $21,498.28 ",
        "costDollars": " $19,971.90 ",
        "gmDollars": " $1,526.38 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK06996",
        "week": "W26",
        "salesUnits": "20",
        "salesDollars": " $2,499.80 ",
        "costDollars": " $2,322.31 ",
        "gmDollars": " $177.49 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK06996",
        "week": "W31",
        "salesUnits": "101",
        "salesDollars": " $12,623.99 ",
        "costDollars": " $11,727.69 ",
        "gmDollars": " $896.30 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK06996",
        "week": "W35",
        "salesUnits": "43",
        "salesDollars": " $5,374.57 ",
        "costDollars": " $4,992.98 ",
        "gmDollars": " $381.59 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK06996",
        "week": "W39",
        "salesUnits": "184",
        "salesDollars": " $22,998.16 ",
        "costDollars": " $21,365.29 ",
        "gmDollars": " $1,632.87 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK06996",
        "week": "W47",
        "salesUnits": "141",
        "salesDollars": " $17,623.59 ",
        "costDollars": " $16,372.32 ",
        "gmDollars": " $1,251.27 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK06996",
        "week": "W50",
        "salesUnits": "181",
        "salesDollars": " $22,623.19 ",
        "costDollars": " $21,016.94 ",
        "gmDollars": " $1,606.25 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK07054",
        "week": "W04",
        "salesUnits": "70",
        "salesDollars": " $12,949.30 ",
        "costDollars": " $11,680.27 ",
        "gmDollars": " $1,269.03 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK07054",
        "week": "W08",
        "salesUnits": "13",
        "salesDollars": " $2,404.87 ",
        "costDollars": " $2,169.19 ",
        "gmDollars": " $235.68 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK07054",
        "week": "W21",
        "salesUnits": "41",
        "salesDollars": " $7,584.59 ",
        "costDollars": " $6,841.30 ",
        "gmDollars": " $743.29 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK07054",
        "week": "W26",
        "salesUnits": "118",
        "salesDollars": " $21,828.82 ",
        "costDollars": " $19,689.60 ",
        "gmDollars": " $2,139.22 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK07054",
        "week": "W29",
        "salesUnits": "141",
        "salesDollars": " $26,083.59 ",
        "costDollars": " $23,527.40 ",
        "gmDollars": " $2,556.19 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK07054",
        "week": "W35",
        "salesUnits": "166",
        "salesDollars": " $30,708.34 ",
        "costDollars": " $27,698.92 ",
        "gmDollars": " $3,009.42 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK07054",
        "week": "W50",
        "salesUnits": "148",
        "salesDollars": " $27,378.52 ",
        "costDollars": " $24,695.43 ",
        "gmDollars": " $2,683.09 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK07054",
        "week": "W51",
        "salesUnits": "96",
        "salesDollars": " $17,759.04 ",
        "costDollars": " $16,018.65 ",
        "gmDollars": " $1,740.39 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK07068",
        "week": "W09",
        "salesUnits": "117",
        "salesDollars": " $1,753.83 ",
        "costDollars": " $1,608.26 ",
        "gmDollars": " $145.57 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07068",
        "week": "W18",
        "salesUnits": "142",
        "salesDollars": " $2,128.58 ",
        "costDollars": " $1,951.91 ",
        "gmDollars": " $176.67 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07068",
        "week": "W29",
        "salesUnits": "84",
        "salesDollars": " $1,259.16 ",
        "costDollars": " $1,154.65 ",
        "gmDollars": " $104.51 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07068",
        "week": "W38",
        "salesUnits": "144",
        "salesDollars": " $2,158.56 ",
        "costDollars": " $1,979.40 ",
        "gmDollars": " $179.16 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07068",
        "week": "W40",
        "salesUnits": "112",
        "salesDollars": " $1,678.88 ",
        "costDollars": " $1,539.53 ",
        "gmDollars": " $139.35 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07068",
        "week": "W41",
        "salesUnits": "142",
        "salesDollars": " $2,128.58 ",
        "costDollars": " $1,951.91 ",
        "gmDollars": " $176.67 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07068",
        "week": "W46",
        "salesUnits": "124",
        "salesDollars": " $1,858.76 ",
        "costDollars": " $1,704.48 ",
        "gmDollars": " $154.28 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07068",
        "week": "W48",
        "salesUnits": "105",
        "salesDollars": " $1,573.95 ",
        "costDollars": " $1,443.31 ",
        "gmDollars": " $130.64 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07322",
        "week": "W13",
        "salesUnits": "10",
        "salesDollars": " $849.90 ",
        "costDollars": " $904.29 ",
        "gmDollars": " $(54.39)",
        "gmPercent": "-6%"
    },
    {
        "store": "ST035",
        "sku": "SK07322",
        "week": "W21",
        "salesUnits": "187",
        "salesDollars": " $15,893.13 ",
        "costDollars": " $16,910.29 ",
        "gmDollars": " $(1,017.16)",
        "gmPercent": "-6%"
    },
    {
        "store": "ST035",
        "sku": "SK07322",
        "week": "W29",
        "salesUnits": "152",
        "salesDollars": " $12,918.48 ",
        "costDollars": " $13,745.26 ",
        "gmDollars": " $(826.78)",
        "gmPercent": "-6%"
    },
    {
        "store": "ST035",
        "sku": "SK07322",
        "week": "W37",
        "salesUnits": "136",
        "salesDollars": " $11,558.64 ",
        "costDollars": " $12,298.39 ",
        "gmDollars": " $(739.75)",
        "gmPercent": "-6%"
    },
    {
        "store": "ST035",
        "sku": "SK07322",
        "week": "W41",
        "salesUnits": "79",
        "salesDollars": " $6,714.21 ",
        "costDollars": " $7,143.92 ",
        "gmDollars": " $(429.71)",
        "gmPercent": "-6%"
    },
    {
        "store": "ST035",
        "sku": "SK07322",
        "week": "W49",
        "salesUnits": "2",
        "salesDollars": " $169.98 ",
        "costDollars": " $180.86 ",
        "gmDollars": " $(10.88)",
        "gmPercent": "-6%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W03",
        "salesUnits": "70",
        "salesDollars": " $349.30 ",
        "costDollars": " $260.93 ",
        "gmDollars": " $88.37 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W05",
        "salesUnits": "59",
        "salesDollars": " $294.41 ",
        "costDollars": " $219.92 ",
        "gmDollars": " $74.49 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W06",
        "salesUnits": "17",
        "salesDollars": " $84.83 ",
        "costDollars": " $63.37 ",
        "gmDollars": " $21.46 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W07",
        "salesUnits": "124",
        "salesDollars": " $618.76 ",
        "costDollars": " $462.21 ",
        "gmDollars": " $156.55 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W15",
        "salesUnits": "69",
        "salesDollars": " $344.31 ",
        "costDollars": " $257.20 ",
        "gmDollars": " $87.11 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W17",
        "salesUnits": "13",
        "salesDollars": " $64.87 ",
        "costDollars": " $48.46 ",
        "gmDollars": " $16.41 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W18",
        "salesUnits": "36",
        "salesDollars": " $179.64 ",
        "costDollars": " $134.19 ",
        "gmDollars": " $45.45 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W19",
        "salesUnits": "16",
        "salesDollars": " $79.84 ",
        "costDollars": " $59.64 ",
        "gmDollars": " $20.20 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W20",
        "salesUnits": "114",
        "salesDollars": " $568.86 ",
        "costDollars": " $424.94 ",
        "gmDollars": " $143.92 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W21",
        "salesUnits": "101",
        "salesDollars": " $503.99 ",
        "costDollars": " $376.48 ",
        "gmDollars": " $127.51 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W26",
        "salesUnits": "116",
        "salesDollars": " $578.84 ",
        "costDollars": " $432.39 ",
        "gmDollars": " $146.45 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W36",
        "salesUnits": "67",
        "salesDollars": " $334.33 ",
        "costDollars": " $249.74 ",
        "gmDollars": " $84.59 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07369",
        "week": "W42",
        "salesUnits": "78",
        "salesDollars": " $389.22 ",
        "costDollars": " $290.75 ",
        "gmDollars": " $98.47 ",
        "gmPercent": "25%"
    },
    {
        "store": "ST035",
        "sku": "SK07447",
        "week": "W02",
        "salesUnits": "72",
        "salesDollars": " $10,079.28 ",
        "costDollars": " $7,025.26 ",
        "gmDollars": " $3,054.02 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK07447",
        "week": "W05",
        "salesUnits": "58",
        "salesDollars": " $8,119.42 ",
        "costDollars": " $5,659.24 ",
        "gmDollars": " $2,460.18 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK07447",
        "week": "W07",
        "salesUnits": "96",
        "salesDollars": " $13,439.04 ",
        "costDollars": " $9,367.01 ",
        "gmDollars": " $4,072.03 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK07447",
        "week": "W13",
        "salesUnits": "40",
        "salesDollars": " $5,599.60 ",
        "costDollars": " $3,902.92 ",
        "gmDollars": " $1,696.68 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK07447",
        "week": "W22",
        "salesUnits": "194",
        "salesDollars": " $27,158.06 ",
        "costDollars": " $18,929.17 ",
        "gmDollars": " $8,228.89 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK07447",
        "week": "W31",
        "salesUnits": "65",
        "salesDollars": " $9,099.35 ",
        "costDollars": " $6,342.25 ",
        "gmDollars": " $2,757.10 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK07447",
        "week": "W34",
        "salesUnits": "12",
        "salesDollars": " $1,679.88 ",
        "costDollars": " $1,170.88 ",
        "gmDollars": " $509.00 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK07447",
        "week": "W36",
        "salesUnits": "100",
        "salesDollars": " $13,999.00 ",
        "costDollars": " $9,757.30 ",
        "gmDollars": " $4,241.70 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK07447",
        "week": "W43",
        "salesUnits": "45",
        "salesDollars": " $6,299.55 ",
        "costDollars": " $4,390.79 ",
        "gmDollars": " $1,908.76 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK07447",
        "week": "W46",
        "salesUnits": "41",
        "salesDollars": " $5,739.59 ",
        "costDollars": " $4,000.49 ",
        "gmDollars": " $1,739.10 ",
        "gmPercent": "30%"
    },
    {
        "store": "ST035",
        "sku": "SK07484",
        "week": "W02",
        "salesUnits": "188",
        "salesDollars": " $33,838.12 ",
        "costDollars": " $30,725.01 ",
        "gmDollars": " $3,113.11 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK07484",
        "week": "W03",
        "salesUnits": "126",
        "salesDollars": " $22,678.74 ",
        "costDollars": " $20,592.30 ",
        "gmDollars": " $2,086.44 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK07484",
        "week": "W09",
        "salesUnits": "101",
        "salesDollars": " $18,178.99 ",
        "costDollars": " $16,506.52 ",
        "gmDollars": " $1,672.47 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK07484",
        "week": "W21",
        "salesUnits": "51",
        "salesDollars": " $9,179.49 ",
        "costDollars": " $8,334.98 ",
        "gmDollars": " $844.51 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK07484",
        "week": "W25",
        "salesUnits": "6",
        "salesDollars": " $1,079.94 ",
        "costDollars": " $980.59 ",
        "gmDollars": " $99.35 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK07484",
        "week": "W26",
        "salesUnits": "117",
        "salesDollars": " $21,058.83 ",
        "costDollars": " $19,121.42 ",
        "gmDollars": " $1,937.41 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK07484",
        "week": "W33",
        "salesUnits": "68",
        "salesDollars": " $12,239.32 ",
        "costDollars": " $11,113.30 ",
        "gmDollars": " $1,126.02 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK07484",
        "week": "W44",
        "salesUnits": "93",
        "salesDollars": " $16,739.07 ",
        "costDollars": " $15,199.08 ",
        "gmDollars": " $1,539.99 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK07484",
        "week": "W51",
        "salesUnits": "195",
        "salesDollars": " $35,098.05 ",
        "costDollars": " $31,869.03 ",
        "gmDollars": " $3,229.02 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK07595",
        "week": "W06",
        "salesUnits": "104",
        "salesDollars": " $5,718.96 ",
        "costDollars": " $5,244.29 ",
        "gmDollars": " $474.67 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07595",
        "week": "W07",
        "salesUnits": "58",
        "salesDollars": " $3,189.42 ",
        "costDollars": " $2,924.70 ",
        "gmDollars": " $264.72 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07595",
        "week": "W12",
        "salesUnits": "168",
        "salesDollars": " $9,238.32 ",
        "costDollars": " $8,471.54 ",
        "gmDollars": " $766.78 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07595",
        "week": "W21",
        "salesUnits": "160",
        "salesDollars": " $8,798.40 ",
        "costDollars": " $8,068.13 ",
        "gmDollars": " $730.27 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07595",
        "week": "W24",
        "salesUnits": "148",
        "salesDollars": " $8,138.52 ",
        "costDollars": " $7,463.02 ",
        "gmDollars": " $675.50 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07595",
        "week": "W26",
        "salesUnits": "106",
        "salesDollars": " $5,828.94 ",
        "costDollars": " $5,345.14 ",
        "gmDollars": " $483.80 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07595",
        "week": "W32",
        "salesUnits": "20",
        "salesDollars": " $1,099.80 ",
        "costDollars": " $1,008.52 ",
        "gmDollars": " $91.28 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07595",
        "week": "W41",
        "salesUnits": "2",
        "salesDollars": " $109.98 ",
        "costDollars": " $100.85 ",
        "gmDollars": " $9.13 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07595",
        "week": "W43",
        "salesUnits": "38",
        "salesDollars": " $2,089.62 ",
        "costDollars": " $1,916.18 ",
        "gmDollars": " $173.44 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07595",
        "week": "W45",
        "salesUnits": "117",
        "salesDollars": " $6,433.83 ",
        "costDollars": " $5,899.82 ",
        "gmDollars": " $534.01 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07595",
        "week": "W51",
        "salesUnits": "20",
        "salesDollars": " $1,099.80 ",
        "costDollars": " $1,008.52 ",
        "gmDollars": " $91.28 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W02",
        "salesUnits": "127",
        "salesDollars": " $24,763.73 ",
        "costDollars": " $24,565.62 ",
        "gmDollars": " $198.11 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W04",
        "salesUnits": "41",
        "salesDollars": " $7,994.59 ",
        "costDollars": " $7,930.63 ",
        "gmDollars": " $63.96 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W06",
        "salesUnits": "151",
        "salesDollars": " $29,443.49 ",
        "costDollars": " $29,207.94 ",
        "gmDollars": " $235.55 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W08",
        "salesUnits": "189",
        "salesDollars": " $36,853.11 ",
        "costDollars": " $36,558.29 ",
        "gmDollars": " $294.82 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W10",
        "salesUnits": "54",
        "salesDollars": " $10,529.46 ",
        "costDollars": " $10,445.22 ",
        "gmDollars": " $84.24 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W13",
        "salesUnits": "146",
        "salesDollars": " $28,468.54 ",
        "costDollars": " $28,240.79 ",
        "gmDollars": " $227.75 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W19",
        "salesUnits": "72",
        "salesDollars": " $14,039.28 ",
        "costDollars": " $13,926.97 ",
        "gmDollars": " $112.31 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W20",
        "salesUnits": "173",
        "salesDollars": " $33,733.27 ",
        "costDollars": " $33,463.40 ",
        "gmDollars": " $269.87 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W26",
        "salesUnits": "58",
        "salesDollars": " $11,309.42 ",
        "costDollars": " $11,218.94 ",
        "gmDollars": " $90.48 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W35",
        "salesUnits": "12",
        "salesDollars": " $2,339.88 ",
        "costDollars": " $2,321.16 ",
        "gmDollars": " $18.72 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W38",
        "salesUnits": "122",
        "salesDollars": " $23,788.78 ",
        "costDollars": " $23,598.47 ",
        "gmDollars": " $190.31 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W39",
        "salesUnits": "42",
        "salesDollars": " $8,189.58 ",
        "costDollars": " $8,124.06 ",
        "gmDollars": " $65.52 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W44",
        "salesUnits": "190",
        "salesDollars": " $37,048.10 ",
        "costDollars": " $36,751.72 ",
        "gmDollars": " $296.38 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07767",
        "week": "W45",
        "salesUnits": "18",
        "salesDollars": " $3,509.82 ",
        "costDollars": " $3,481.74 ",
        "gmDollars": " $28.08 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK07782",
        "week": "W13",
        "salesUnits": "133",
        "salesDollars": " $23,273.67 ",
        "costDollars": " $17,036.33 ",
        "gmDollars": " $6,237.34 ",
        "gmPercent": "27%"
    },
    {
        "store": "ST035",
        "sku": "SK07782",
        "week": "W40",
        "salesUnits": "75",
        "salesDollars": " $13,124.25 ",
        "costDollars": " $9,606.95 ",
        "gmDollars": " $3,517.30 ",
        "gmPercent": "27%"
    },
    {
        "store": "ST035",
        "sku": "SK07782",
        "week": "W52",
        "salesUnits": "125",
        "salesDollars": " $21,873.75 ",
        "costDollars": " $16,011.59 ",
        "gmDollars": " $5,862.17 ",
        "gmPercent": "27%"
    },
    {
        "store": "ST035",
        "sku": "SK07944",
        "week": "W03",
        "salesUnits": "10",
        "salesDollars": " $699.90 ",
        "costDollars": " $454.94 ",
        "gmDollars": " $244.97 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK07944",
        "week": "W09",
        "salesUnits": "185",
        "salesDollars": " $12,948.15 ",
        "costDollars": " $8,416.30 ",
        "gmDollars": " $4,531.85 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK07944",
        "week": "W19",
        "salesUnits": "131",
        "salesDollars": " $9,168.69 ",
        "costDollars": " $5,959.65 ",
        "gmDollars": " $3,209.04 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK07944",
        "week": "W21",
        "salesUnits": "151",
        "salesDollars": " $10,568.49 ",
        "costDollars": " $6,869.52 ",
        "gmDollars": " $3,698.97 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK07944",
        "week": "W26",
        "salesUnits": "191",
        "salesDollars": " $13,368.09 ",
        "costDollars": " $8,689.26 ",
        "gmDollars": " $4,678.83 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK07944",
        "week": "W30",
        "salesUnits": "124",
        "salesDollars": " $8,678.76 ",
        "costDollars": " $5,641.19 ",
        "gmDollars": " $3,037.57 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK07944",
        "week": "W39",
        "salesUnits": "114",
        "salesDollars": " $7,978.86 ",
        "costDollars": " $5,186.26 ",
        "gmDollars": " $2,792.60 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK07944",
        "week": "W40",
        "salesUnits": "185",
        "salesDollars": " $12,948.15 ",
        "costDollars": " $8,416.30 ",
        "gmDollars": " $4,531.85 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK07944",
        "week": "W42",
        "salesUnits": "18",
        "salesDollars": " $1,259.82 ",
        "costDollars": " $818.88 ",
        "gmDollars": " $440.94 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK07944",
        "week": "W47",
        "salesUnits": "49",
        "salesDollars": " $3,429.51 ",
        "costDollars": " $2,229.18 ",
        "gmDollars": " $1,200.33 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK08191",
        "week": "W11",
        "salesUnits": "88",
        "salesDollars": " $9,679.12 ",
        "costDollars": " $4,694.37 ",
        "gmDollars": " $4,984.75 ",
        "gmPercent": "52%"
    },
    {
        "store": "ST035",
        "sku": "SK08191",
        "week": "W20",
        "salesUnits": "46",
        "salesDollars": " $5,059.54 ",
        "costDollars": " $2,453.88 ",
        "gmDollars": " $2,605.66 ",
        "gmPercent": "52%"
    },
    {
        "store": "ST035",
        "sku": "SK08191",
        "week": "W22",
        "salesUnits": "184",
        "salesDollars": " $20,238.16 ",
        "costDollars": " $9,815.51 ",
        "gmDollars": " $10,422.65 ",
        "gmPercent": "52%"
    },
    {
        "store": "ST035",
        "sku": "SK08191",
        "week": "W23",
        "salesUnits": "118",
        "salesDollars": " $12,978.82 ",
        "costDollars": " $6,294.73 ",
        "gmDollars": " $6,684.09 ",
        "gmPercent": "52%"
    },
    {
        "store": "ST035",
        "sku": "SK08191",
        "week": "W28",
        "salesUnits": "76",
        "salesDollars": " $8,359.24 ",
        "costDollars": " $4,054.23 ",
        "gmDollars": " $4,305.01 ",
        "gmPercent": "52%"
    },
    {
        "store": "ST035",
        "sku": "SK08191",
        "week": "W32",
        "salesUnits": "54",
        "salesDollars": " $5,939.46 ",
        "costDollars": " $2,880.64 ",
        "gmDollars": " $3,058.82 ",
        "gmPercent": "52%"
    },
    {
        "store": "ST035",
        "sku": "SK08191",
        "week": "W36",
        "salesUnits": "7",
        "salesDollars": " $769.93 ",
        "costDollars": " $373.42 ",
        "gmDollars": " $396.51 ",
        "gmPercent": "52%"
    },
    {
        "store": "ST035",
        "sku": "SK08191",
        "week": "W38",
        "salesUnits": "114",
        "salesDollars": " $12,538.86 ",
        "costDollars": " $6,081.35 ",
        "gmDollars": " $6,457.51 ",
        "gmPercent": "52%"
    },
    {
        "store": "ST035",
        "sku": "SK08191",
        "week": "W51",
        "salesUnits": "38",
        "salesDollars": " $4,179.62 ",
        "costDollars": " $2,027.12 ",
        "gmDollars": " $2,152.50 ",
        "gmPercent": "52%"
    },
    {
        "store": "ST035",
        "sku": "SK08285",
        "week": "W06",
        "salesUnits": "137",
        "salesDollars": " $17,123.63 ",
        "costDollars": " $15,103.04 ",
        "gmDollars": " $2,020.59 ",
        "gmPercent": "12%"
    },
    {
        "store": "ST035",
        "sku": "SK08285",
        "week": "W11",
        "salesUnits": "74",
        "salesDollars": " $9,249.26 ",
        "costDollars": " $8,157.85 ",
        "gmDollars": " $1,091.41 ",
        "gmPercent": "12%"
    },
    {
        "store": "ST035",
        "sku": "SK08285",
        "week": "W28",
        "salesUnits": "136",
        "salesDollars": " $16,998.64 ",
        "costDollars": " $14,992.80 ",
        "gmDollars": " $2,005.84 ",
        "gmPercent": "12%"
    },
    {
        "store": "ST035",
        "sku": "SK08285",
        "week": "W34",
        "salesUnits": "154",
        "salesDollars": " $19,248.46 ",
        "costDollars": " $16,977.14 ",
        "gmDollars": " $2,271.32 ",
        "gmPercent": "12%"
    },
    {
        "store": "ST035",
        "sku": "SK08285",
        "week": "W43",
        "salesUnits": "15",
        "salesDollars": " $1,874.85 ",
        "costDollars": " $1,653.62 ",
        "gmDollars": " $221.23 ",
        "gmPercent": "12%"
    },
    {
        "store": "ST035",
        "sku": "SK08285",
        "week": "W48",
        "salesUnits": "6",
        "salesDollars": " $749.94 ",
        "costDollars": " $661.45 ",
        "gmDollars": " $88.49 ",
        "gmPercent": "12%"
    },
    {
        "store": "ST035",
        "sku": "SK08285",
        "week": "W52",
        "salesUnits": "46",
        "salesDollars": " $5,749.54 ",
        "costDollars": " $5,071.09 ",
        "gmDollars": " $678.45 ",
        "gmPercent": "12%"
    },
    {
        "store": "ST035",
        "sku": "SK08314",
        "week": "W06",
        "salesUnits": "51",
        "salesDollars": " $3,824.49 ",
        "costDollars": " $439.82 ",
        "gmDollars": " $3,384.67 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK08314",
        "week": "W15",
        "salesUnits": "27",
        "salesDollars": " $2,024.73 ",
        "costDollars": " $232.84 ",
        "gmDollars": " $1,791.89 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK08314",
        "week": "W19",
        "salesUnits": "112",
        "salesDollars": " $8,398.88 ",
        "costDollars": " $965.87 ",
        "gmDollars": " $7,433.01 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK08314",
        "week": "W22",
        "salesUnits": "112",
        "salesDollars": " $8,398.88 ",
        "costDollars": " $965.87 ",
        "gmDollars": " $7,433.01 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK08314",
        "week": "W25",
        "salesUnits": "169",
        "salesDollars": " $12,673.31 ",
        "costDollars": " $1,457.43 ",
        "gmDollars": " $11,215.88 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK08314",
        "week": "W30",
        "salesUnits": "173",
        "salesDollars": " $12,973.27 ",
        "costDollars": " $1,491.93 ",
        "gmDollars": " $11,481.34 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK08314",
        "week": "W32",
        "salesUnits": "15",
        "salesDollars": " $1,124.85 ",
        "costDollars": " $129.36 ",
        "gmDollars": " $995.49 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK08314",
        "week": "W33",
        "salesUnits": "129",
        "salesDollars": " $9,673.71 ",
        "costDollars": " $1,112.48 ",
        "gmDollars": " $8,561.23 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK08314",
        "week": "W43",
        "salesUnits": "149",
        "salesDollars": " $11,173.51 ",
        "costDollars": " $1,284.95 ",
        "gmDollars": " $9,888.56 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK08373",
        "week": "W12",
        "salesUnits": "88",
        "salesDollars": " $16,279.12 ",
        "costDollars": " $11,981.43 ",
        "gmDollars": " $4,297.69 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK08373",
        "week": "W17",
        "salesUnits": "196",
        "salesDollars": " $36,258.04 ",
        "costDollars": " $26,685.92 ",
        "gmDollars": " $9,572.12 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK08373",
        "week": "W25",
        "salesUnits": "8",
        "salesDollars": " $1,479.92 ",
        "costDollars": " $1,089.22 ",
        "gmDollars": " $390.70 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK08373",
        "week": "W28",
        "salesUnits": "194",
        "salesDollars": " $35,888.06 ",
        "costDollars": " $26,413.61 ",
        "gmDollars": " $9,474.45 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK08373",
        "week": "W31",
        "salesUnits": "57",
        "salesDollars": " $10,544.43 ",
        "costDollars": " $7,760.70 ",
        "gmDollars": " $2,783.73 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK08373",
        "week": "W35",
        "salesUnits": "94",
        "salesDollars": " $17,389.06 ",
        "costDollars": " $12,798.35 ",
        "gmDollars": " $4,590.71 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK08373",
        "week": "W37",
        "salesUnits": "75",
        "salesDollars": " $13,874.25 ",
        "costDollars": " $10,211.45 ",
        "gmDollars": " $3,662.80 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK08373",
        "week": "W47",
        "salesUnits": "109",
        "salesDollars": " $20,163.91 ",
        "costDollars": " $14,840.64 ",
        "gmDollars": " $5,323.27 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK08373",
        "week": "W48",
        "salesUnits": "94",
        "salesDollars": " $17,389.06 ",
        "costDollars": " $12,798.35 ",
        "gmDollars": " $4,590.71 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK08373",
        "week": "W52",
        "salesUnits": "134",
        "salesDollars": " $24,788.66 ",
        "costDollars": " $18,244.45 ",
        "gmDollars": " $6,544.21 ",
        "gmPercent": "26%"
    },
    {
        "store": "ST035",
        "sku": "SK08443",
        "week": "W08",
        "salesUnits": "139",
        "salesDollars": " $12,508.61 ",
        "costDollars": " $8,568.40 ",
        "gmDollars": " $3,940.21 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK08443",
        "week": "W10",
        "salesUnits": "56",
        "salesDollars": " $5,039.44 ",
        "costDollars": " $3,452.02 ",
        "gmDollars": " $1,587.42 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK08443",
        "week": "W24",
        "salesUnits": "109",
        "salesDollars": " $9,808.91 ",
        "costDollars": " $6,719.10 ",
        "gmDollars": " $3,089.81 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK08443",
        "week": "W31",
        "salesUnits": "193",
        "salesDollars": " $17,368.07 ",
        "costDollars": " $11,897.13 ",
        "gmDollars": " $5,470.94 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK08443",
        "week": "W32",
        "salesUnits": "127",
        "salesDollars": " $11,428.73 ",
        "costDollars": " $7,828.68 ",
        "gmDollars": " $3,600.05 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK08443",
        "week": "W37",
        "salesUnits": "134",
        "salesDollars": " $12,058.66 ",
        "costDollars": " $8,260.18 ",
        "gmDollars": " $3,798.48 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK08443",
        "week": "W46",
        "salesUnits": "60",
        "salesDollars": " $5,399.40 ",
        "costDollars": " $3,698.59 ",
        "gmDollars": " $1,700.81 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W12",
        "salesUnits": "93",
        "salesDollars": " $4,184.07 ",
        "costDollars": " $3,824.24 ",
        "gmDollars": " $359.83 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W13",
        "salesUnits": "32",
        "salesDollars": " $1,439.68 ",
        "costDollars": " $1,315.87 ",
        "gmDollars": " $123.81 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W14",
        "salesUnits": "161",
        "salesDollars": " $7,243.39 ",
        "costDollars": " $6,620.46 ",
        "gmDollars": " $622.93 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W17",
        "salesUnits": "81",
        "salesDollars": " $3,644.19 ",
        "costDollars": " $3,330.79 ",
        "gmDollars": " $313.40 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W24",
        "salesUnits": "132",
        "salesDollars": " $5,938.68 ",
        "costDollars": " $5,427.95 ",
        "gmDollars": " $510.73 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W32",
        "salesUnits": "29",
        "salesDollars": " $1,304.71 ",
        "costDollars": " $1,192.50 ",
        "gmDollars": " $112.21 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W33",
        "salesUnits": "199",
        "salesDollars": " $8,953.01 ",
        "costDollars": " $8,183.05 ",
        "gmDollars": " $769.96 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W35",
        "salesUnits": "190",
        "salesDollars": " $8,548.10 ",
        "costDollars": " $7,812.96 ",
        "gmDollars": " $735.14 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W43",
        "salesUnits": "60",
        "salesDollars": " $2,699.40 ",
        "costDollars": " $2,467.25 ",
        "gmDollars": " $232.15 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W44",
        "salesUnits": "127",
        "salesDollars": " $5,713.73 ",
        "costDollars": " $5,222.35 ",
        "gmDollars": " $491.38 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W45",
        "salesUnits": "191",
        "salesDollars": " $8,593.09 ",
        "costDollars": " $7,854.08 ",
        "gmDollars": " $739.01 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08544",
        "week": "W52",
        "salesUnits": "146",
        "salesDollars": " $6,568.54 ",
        "costDollars": " $6,003.65 ",
        "gmDollars": " $564.89 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK08557",
        "week": "W06",
        "salesUnits": "110",
        "salesDollars": " $21,448.90 ",
        "costDollars": " $20,805.43 ",
        "gmDollars": " $643.47 ",
        "gmPercent": "3%"
    },
    {
        "store": "ST035",
        "sku": "SK08557",
        "week": "W19",
        "salesUnits": "56",
        "salesDollars": " $10,919.44 ",
        "costDollars": " $10,591.86 ",
        "gmDollars": " $327.58 ",
        "gmPercent": "3%"
    },
    {
        "store": "ST035",
        "sku": "SK08557",
        "week": "W30",
        "salesUnits": "193",
        "salesDollars": " $37,633.07 ",
        "costDollars": " $36,504.08 ",
        "gmDollars": " $1,128.99 ",
        "gmPercent": "3%"
    },
    {
        "store": "ST035",
        "sku": "SK08557",
        "week": "W32",
        "salesUnits": "81",
        "salesDollars": " $15,794.19 ",
        "costDollars": " $15,320.36 ",
        "gmDollars": " $473.83 ",
        "gmPercent": "3%"
    },
    {
        "store": "ST035",
        "sku": "SK08557",
        "week": "W33",
        "salesUnits": "149",
        "salesDollars": " $29,053.51 ",
        "costDollars": " $28,181.90 ",
        "gmDollars": " $871.61 ",
        "gmPercent": "3%"
    },
    {
        "store": "ST035",
        "sku": "SK08557",
        "week": "W40",
        "salesUnits": "40",
        "salesDollars": " $7,799.60 ",
        "costDollars": " $7,565.61 ",
        "gmDollars": " $233.99 ",
        "gmPercent": "3%"
    },
    {
        "store": "ST035",
        "sku": "SK08557",
        "week": "W42",
        "salesUnits": "19",
        "salesDollars": " $3,704.81 ",
        "costDollars": " $3,593.67 ",
        "gmDollars": " $111.14 ",
        "gmPercent": "3%"
    },
    {
        "store": "ST035",
        "sku": "SK08557",
        "week": "W44",
        "salesUnits": "192",
        "salesDollars": " $37,438.08 ",
        "costDollars": " $36,314.94 ",
        "gmDollars": " $1,123.14 ",
        "gmPercent": "3%"
    },
    {
        "store": "ST035",
        "sku": "SK08557",
        "week": "W47",
        "salesUnits": "114",
        "salesDollars": " $22,228.86 ",
        "costDollars": " $21,561.99 ",
        "gmDollars": " $666.87 ",
        "gmPercent": "3%"
    },
    {
        "store": "ST035",
        "sku": "SK08557",
        "week": "W49",
        "salesUnits": "113",
        "salesDollars": " $22,033.87 ",
        "costDollars": " $21,372.85 ",
        "gmDollars": " $661.02 ",
        "gmPercent": "3%"
    },
    {
        "store": "ST035",
        "sku": "SK08783",
        "week": "W11",
        "salesUnits": "59",
        "salesDollars": " $10,029.41 ",
        "costDollars": " $621.82 ",
        "gmDollars": " $9,407.59 ",
        "gmPercent": "94%"
    },
    {
        "store": "ST035",
        "sku": "SK08783",
        "week": "W15",
        "salesUnits": "177",
        "salesDollars": " $30,088.23 ",
        "costDollars": " $1,865.47 ",
        "gmDollars": " $28,222.76 ",
        "gmPercent": "94%"
    },
    {
        "store": "ST035",
        "sku": "SK08783",
        "week": "W16",
        "salesUnits": "22",
        "salesDollars": " $3,739.78 ",
        "costDollars": " $231.87 ",
        "gmDollars": " $3,507.91 ",
        "gmPercent": "94%"
    },
    {
        "store": "ST035",
        "sku": "SK08783",
        "week": "W26",
        "salesUnits": "41",
        "salesDollars": " $6,969.59 ",
        "costDollars": " $432.11 ",
        "gmDollars": " $6,537.48 ",
        "gmPercent": "94%"
    },
    {
        "store": "ST035",
        "sku": "SK08783",
        "week": "W27",
        "salesUnits": "74",
        "salesDollars": " $12,579.26 ",
        "costDollars": " $779.91 ",
        "gmDollars": " $11,799.35 ",
        "gmPercent": "94%"
    },
    {
        "store": "ST035",
        "sku": "SK08783",
        "week": "W28",
        "salesUnits": "76",
        "salesDollars": " $12,919.24 ",
        "costDollars": " $800.99 ",
        "gmDollars": " $12,118.25 ",
        "gmPercent": "94%"
    },
    {
        "store": "ST035",
        "sku": "SK08783",
        "week": "W29",
        "salesUnits": "44",
        "salesDollars": " $7,479.56 ",
        "costDollars": " $463.73 ",
        "gmDollars": " $7,015.83 ",
        "gmPercent": "94%"
    },
    {
        "store": "ST035",
        "sku": "SK08783",
        "week": "W34",
        "salesUnits": "28",
        "salesDollars": " $4,759.72 ",
        "costDollars": " $295.10 ",
        "gmDollars": " $4,464.62 ",
        "gmPercent": "94%"
    },
    {
        "store": "ST035",
        "sku": "SK08783",
        "week": "W43",
        "salesUnits": "127",
        "salesDollars": " $21,588.73 ",
        "costDollars": " $1,338.50 ",
        "gmDollars": " $20,250.23 ",
        "gmPercent": "94%"
    },
    {
        "store": "ST035",
        "sku": "SK08783",
        "week": "W48",
        "salesUnits": "57",
        "salesDollars": " $9,689.43 ",
        "costDollars": " $600.74 ",
        "gmDollars": " $9,088.69 ",
        "gmPercent": "94%"
    },
    {
        "store": "ST035",
        "sku": "SK09245",
        "week": "W03",
        "salesUnits": "151",
        "salesDollars": " $24,913.49 ",
        "costDollars": " $26,059.51 ",
        "gmDollars": " $(1,146.02)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK09245",
        "week": "W05",
        "salesUnits": "87",
        "salesDollars": " $14,354.13 ",
        "costDollars": " $15,014.42 ",
        "gmDollars": " $(660.29)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK09245",
        "week": "W08",
        "salesUnits": "59",
        "salesDollars": " $9,734.41 ",
        "costDollars": " $10,182.19 ",
        "gmDollars": " $(447.78)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK09245",
        "week": "W16",
        "salesUnits": "155",
        "salesDollars": " $25,573.45 ",
        "costDollars": " $26,749.83 ",
        "gmDollars": " $(1,176.38)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK09245",
        "week": "W39",
        "salesUnits": "3",
        "salesDollars": " $494.97 ",
        "costDollars": " $517.74 ",
        "gmDollars": " $(22.77)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK09245",
        "week": "W40",
        "salesUnits": "18",
        "salesDollars": " $2,969.82 ",
        "costDollars": " $3,106.43 ",
        "gmDollars": " $(136.61)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK09245",
        "week": "W41",
        "salesUnits": "44",
        "salesDollars": " $7,259.56 ",
        "costDollars": " $7,593.50 ",
        "gmDollars": " $(333.94)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK09245",
        "week": "W42",
        "salesUnits": "133",
        "salesDollars": " $21,943.67 ",
        "costDollars": " $22,953.08 ",
        "gmDollars": " $(1,009.41)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK09245",
        "week": "W45",
        "salesUnits": "62",
        "salesDollars": " $10,229.38 ",
        "costDollars": " $10,699.93 ",
        "gmDollars": " $(470.55)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK09245",
        "week": "W52",
        "salesUnits": "57",
        "salesDollars": " $9,404.43 ",
        "costDollars": " $9,837.03 ",
        "gmDollars": " $(432.60)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W07",
        "salesUnits": "13",
        "salesDollars": " $129.87 ",
        "costDollars": " $25.45 ",
        "gmDollars": " $104.42 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W09",
        "salesUnits": "11",
        "salesDollars": " $109.89 ",
        "costDollars": " $21.54 ",
        "gmDollars": " $88.35 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W10",
        "salesUnits": "17",
        "salesDollars": " $169.83 ",
        "costDollars": " $33.29 ",
        "gmDollars": " $136.54 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W15",
        "salesUnits": "175",
        "salesDollars": " $1,748.25 ",
        "costDollars": " $342.66 ",
        "gmDollars": " $1,405.59 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W17",
        "salesUnits": "179",
        "salesDollars": " $1,788.21 ",
        "costDollars": " $350.49 ",
        "gmDollars": " $1,437.72 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W21",
        "salesUnits": "144",
        "salesDollars": " $1,438.56 ",
        "costDollars": " $281.96 ",
        "gmDollars": " $1,156.60 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W23",
        "salesUnits": "70",
        "salesDollars": " $699.30 ",
        "costDollars": " $137.06 ",
        "gmDollars": " $562.24 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W28",
        "salesUnits": "90",
        "salesDollars": " $899.10 ",
        "costDollars": " $176.22 ",
        "gmDollars": " $722.88 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W29",
        "salesUnits": "46",
        "salesDollars": " $459.54 ",
        "costDollars": " $90.07 ",
        "gmDollars": " $369.47 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W36",
        "salesUnits": "174",
        "salesDollars": " $1,738.26 ",
        "costDollars": " $340.70 ",
        "gmDollars": " $1,397.56 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W40",
        "salesUnits": "101",
        "salesDollars": " $1,008.99 ",
        "costDollars": " $197.76 ",
        "gmDollars": " $811.23 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09312",
        "week": "W50",
        "salesUnits": "45",
        "salesDollars": " $449.55 ",
        "costDollars": " $88.11 ",
        "gmDollars": " $361.44 ",
        "gmPercent": "80%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W08",
        "salesUnits": "200",
        "salesDollars": " $8,998.00 ",
        "costDollars": " $2,474.45 ",
        "gmDollars": " $6,523.55 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W09",
        "salesUnits": "162",
        "salesDollars": " $7,288.38 ",
        "costDollars": " $2,004.30 ",
        "gmDollars": " $5,284.08 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W10",
        "salesUnits": "3",
        "salesDollars": " $134.97 ",
        "costDollars": " $37.12 ",
        "gmDollars": " $97.85 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W13",
        "salesUnits": "122",
        "salesDollars": " $5,488.78 ",
        "costDollars": " $1,509.41 ",
        "gmDollars": " $3,979.37 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W18",
        "salesUnits": "197",
        "salesDollars": " $8,863.03 ",
        "costDollars": " $2,437.33 ",
        "gmDollars": " $6,425.70 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W20",
        "salesUnits": "3",
        "salesDollars": " $134.97 ",
        "costDollars": " $37.12 ",
        "gmDollars": " $97.85 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W25",
        "salesUnits": "58",
        "salesDollars": " $2,609.42 ",
        "costDollars": " $717.59 ",
        "gmDollars": " $1,891.83 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W32",
        "salesUnits": "11",
        "salesDollars": " $494.89 ",
        "costDollars": " $136.09 ",
        "gmDollars": " $358.80 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W33",
        "salesUnits": "107",
        "salesDollars": " $4,813.93 ",
        "costDollars": " $1,323.83 ",
        "gmDollars": " $3,490.10 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W38",
        "salesUnits": "191",
        "salesDollars": " $8,593.09 ",
        "costDollars": " $2,363.10 ",
        "gmDollars": " $6,229.99 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W47",
        "salesUnits": "19",
        "salesDollars": " $854.81 ",
        "costDollars": " $235.07 ",
        "gmDollars": " $619.74 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W51",
        "salesUnits": "81",
        "salesDollars": " $3,644.19 ",
        "costDollars": " $1,002.15 ",
        "gmDollars": " $2,642.04 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09318",
        "week": "W52",
        "salesUnits": "127",
        "salesDollars": " $5,713.73 ",
        "costDollars": " $1,571.28 ",
        "gmDollars": " $4,142.45 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W04",
        "salesUnits": "74",
        "salesDollars": " $3,329.26 ",
        "costDollars": " $332.93 ",
        "gmDollars": " $2,996.33 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W07",
        "salesUnits": "161",
        "salesDollars": " $7,243.39 ",
        "costDollars": " $724.34 ",
        "gmDollars": " $6,519.05 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W14",
        "salesUnits": "184",
        "salesDollars": " $8,278.16 ",
        "costDollars": " $827.82 ",
        "gmDollars": " $7,450.34 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W15",
        "salesUnits": "126",
        "salesDollars": " $5,668.74 ",
        "costDollars": " $566.87 ",
        "gmDollars": " $5,101.87 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W17",
        "salesUnits": "168",
        "salesDollars": " $7,558.32 ",
        "costDollars": " $755.83 ",
        "gmDollars": " $6,802.49 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W19",
        "salesUnits": "172",
        "salesDollars": " $7,738.28 ",
        "costDollars": " $773.83 ",
        "gmDollars": " $6,964.45 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W28",
        "salesUnits": "194",
        "salesDollars": " $8,728.06 ",
        "costDollars": " $872.81 ",
        "gmDollars": " $7,855.25 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W30",
        "salesUnits": "68",
        "salesDollars": " $3,059.32 ",
        "costDollars": " $305.93 ",
        "gmDollars": " $2,753.39 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W32",
        "salesUnits": "34",
        "salesDollars": " $1,529.66 ",
        "costDollars": " $152.97 ",
        "gmDollars": " $1,376.69 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W33",
        "salesUnits": "39",
        "salesDollars": " $1,754.61 ",
        "costDollars": " $175.46 ",
        "gmDollars": " $1,579.15 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W36",
        "salesUnits": "197",
        "salesDollars": " $8,863.03 ",
        "costDollars": " $886.30 ",
        "gmDollars": " $7,976.73 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W38",
        "salesUnits": "189",
        "salesDollars": " $8,503.11 ",
        "costDollars": " $850.31 ",
        "gmDollars": " $7,652.80 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09414",
        "week": "W46",
        "salesUnits": "32",
        "salesDollars": " $1,439.68 ",
        "costDollars": " $143.97 ",
        "gmDollars": " $1,295.71 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W02",
        "salesUnits": "72",
        "salesDollars": " $7,919.28 ",
        "costDollars": " $7,238.22 ",
        "gmDollars": " $681.06 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W03",
        "salesUnits": "169",
        "salesDollars": " $18,588.31 ",
        "costDollars": " $16,989.72 ",
        "gmDollars": " $1,598.59 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W07",
        "salesUnits": "98",
        "salesDollars": " $10,779.02 ",
        "costDollars": " $9,852.02 ",
        "gmDollars": " $927.00 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W11",
        "salesUnits": "168",
        "salesDollars": " $18,478.32 ",
        "costDollars": " $16,889.18 ",
        "gmDollars": " $1,589.14 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W15",
        "salesUnits": "91",
        "salesDollars": " $10,009.09 ",
        "costDollars": " $9,148.31 ",
        "gmDollars": " $860.78 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W30",
        "salesUnits": "106",
        "salesDollars": " $11,658.94 ",
        "costDollars": " $10,656.27 ",
        "gmDollars": " $1,002.67 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W32",
        "salesUnits": "7",
        "salesDollars": " $769.93 ",
        "costDollars": " $703.72 ",
        "gmDollars": " $66.21 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W36",
        "salesUnits": "125",
        "salesDollars": " $13,748.75 ",
        "costDollars": " $12,566.36 ",
        "gmDollars": " $1,182.39 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W38",
        "salesUnits": "126",
        "salesDollars": " $13,858.74 ",
        "costDollars": " $12,666.89 ",
        "gmDollars": " $1,191.85 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W39",
        "salesUnits": "107",
        "salesDollars": " $11,768.93 ",
        "costDollars": " $10,756.80 ",
        "gmDollars": " $1,012.13 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W43",
        "salesUnits": "94",
        "salesDollars": " $10,339.06 ",
        "costDollars": " $9,449.90 ",
        "gmDollars": " $889.16 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W45",
        "salesUnits": "93",
        "salesDollars": " $10,229.07 ",
        "costDollars": " $9,349.37 ",
        "gmDollars": " $879.70 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09453",
        "week": "W46",
        "salesUnits": "89",
        "salesDollars": " $9,789.11 ",
        "costDollars": " $8,947.25 ",
        "gmDollars": " $841.86 ",
        "gmPercent": "9%"
    },
    {
        "store": "ST035",
        "sku": "SK09469",
        "week": "W22",
        "salesUnits": "127",
        "salesDollars": " $13,968.73 ",
        "costDollars": " $9,987.64 ",
        "gmDollars": " $3,981.09 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09469",
        "week": "W30",
        "salesUnits": "23",
        "salesDollars": " $2,529.77 ",
        "costDollars": " $1,808.79 ",
        "gmDollars": " $720.98 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09469",
        "week": "W33",
        "salesUnits": "1",
        "salesDollars": " $109.99 ",
        "costDollars": " $78.64 ",
        "gmDollars": " $31.35 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09469",
        "week": "W38",
        "salesUnits": "17",
        "salesDollars": " $1,869.83 ",
        "costDollars": " $1,336.93 ",
        "gmDollars": " $532.90 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09469",
        "week": "W39",
        "salesUnits": "153",
        "salesDollars": " $16,828.47 ",
        "costDollars": " $12,032.36 ",
        "gmDollars": " $4,796.11 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09469",
        "week": "W44",
        "salesUnits": "95",
        "salesDollars": " $10,449.05 ",
        "costDollars": " $7,471.07 ",
        "gmDollars": " $2,977.98 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09469",
        "week": "W46",
        "salesUnits": "100",
        "salesDollars": " $10,999.00 ",
        "costDollars": " $7,864.29 ",
        "gmDollars": " $3,134.72 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09469",
        "week": "W49",
        "salesUnits": "185",
        "salesDollars": " $20,348.15 ",
        "costDollars": " $14,548.93 ",
        "gmDollars": " $5,799.22 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09592",
        "week": "W09",
        "salesUnits": "24",
        "salesDollars": " $4,199.76 ",
        "costDollars": " $3,788.18 ",
        "gmDollars": " $411.58 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK09592",
        "week": "W11",
        "salesUnits": "147",
        "salesDollars": " $25,723.53 ",
        "costDollars": " $23,202.62 ",
        "gmDollars": " $2,520.91 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK09592",
        "week": "W19",
        "salesUnits": "132",
        "salesDollars": " $23,098.68 ",
        "costDollars": " $20,835.01 ",
        "gmDollars": " $2,263.67 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK09592",
        "week": "W25",
        "salesUnits": "100",
        "salesDollars": " $17,499.00 ",
        "costDollars": " $15,784.10 ",
        "gmDollars": " $1,714.90 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK09592",
        "week": "W27",
        "salesUnits": "60",
        "salesDollars": " $10,499.40 ",
        "costDollars": " $9,470.46 ",
        "gmDollars": " $1,028.94 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK09592",
        "week": "W30",
        "salesUnits": "62",
        "salesDollars": " $10,849.38 ",
        "costDollars": " $9,786.14 ",
        "gmDollars": " $1,063.24 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK09592",
        "week": "W38",
        "salesUnits": "102",
        "salesDollars": " $17,848.98 ",
        "costDollars": " $16,099.78 ",
        "gmDollars": " $1,749.20 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK09592",
        "week": "W40",
        "salesUnits": "23",
        "salesDollars": " $4,024.77 ",
        "costDollars": " $3,630.34 ",
        "gmDollars": " $394.43 ",
        "gmPercent": "10%"
    },
    {
        "store": "ST035",
        "sku": "SK09659",
        "week": "W02",
        "salesUnits": "132",
        "salesDollars": " $9,238.68 ",
        "costDollars": " $7,677.34 ",
        "gmDollars": " $1,561.34 ",
        "gmPercent": "17%"
    },
    {
        "store": "ST035",
        "sku": "SK09659",
        "week": "W15",
        "salesUnits": "50",
        "salesDollars": " $3,499.50 ",
        "costDollars": " $2,908.08 ",
        "gmDollars": " $591.42 ",
        "gmPercent": "17%"
    },
    {
        "store": "ST035",
        "sku": "SK09659",
        "week": "W16",
        "salesUnits": "175",
        "salesDollars": " $12,248.25 ",
        "costDollars": " $10,178.30 ",
        "gmDollars": " $2,069.95 ",
        "gmPercent": "17%"
    },
    {
        "store": "ST035",
        "sku": "SK09659",
        "week": "W25",
        "salesUnits": "164",
        "salesDollars": " $11,478.36 ",
        "costDollars": " $9,538.52 ",
        "gmDollars": " $1,939.84 ",
        "gmPercent": "17%"
    },
    {
        "store": "ST035",
        "sku": "SK09659",
        "week": "W26",
        "salesUnits": "11",
        "salesDollars": " $769.89 ",
        "costDollars": " $639.78 ",
        "gmDollars": " $130.11 ",
        "gmPercent": "17%"
    },
    {
        "store": "ST035",
        "sku": "SK09659",
        "week": "W42",
        "salesUnits": "32",
        "salesDollars": " $2,239.68 ",
        "costDollars": " $1,861.17 ",
        "gmDollars": " $378.51 ",
        "gmPercent": "17%"
    },
    {
        "store": "ST035",
        "sku": "SK09659",
        "week": "W44",
        "salesUnits": "60",
        "salesDollars": " $4,199.40 ",
        "costDollars": " $3,489.70 ",
        "gmDollars": " $709.70 ",
        "gmPercent": "17%"
    },
    {
        "store": "ST035",
        "sku": "SK09659",
        "week": "W45",
        "salesUnits": "11",
        "salesDollars": " $769.89 ",
        "costDollars": " $639.78 ",
        "gmDollars": " $130.11 ",
        "gmPercent": "17%"
    },
    {
        "store": "ST035",
        "sku": "SK09659",
        "week": "W48",
        "salesUnits": "62",
        "salesDollars": " $4,339.38 ",
        "costDollars": " $3,606.02 ",
        "gmDollars": " $733.36 ",
        "gmPercent": "17%"
    },
    {
        "store": "ST035",
        "sku": "SK09728",
        "week": "W02",
        "salesUnits": "13",
        "salesDollars": " $649.87 ",
        "costDollars": " $699.26 ",
        "gmDollars": " $(49.39)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK09728",
        "week": "W07",
        "salesUnits": "59",
        "salesDollars": " $2,949.41 ",
        "costDollars": " $3,173.57 ",
        "gmDollars": " $(224.16)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK09728",
        "week": "W23",
        "salesUnits": "173",
        "salesDollars": " $8,648.27 ",
        "costDollars": " $9,305.54 ",
        "gmDollars": " $(657.27)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK09728",
        "week": "W24",
        "salesUnits": "98",
        "salesDollars": " $4,899.02 ",
        "costDollars": " $5,271.35 ",
        "gmDollars": " $(372.33)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK09728",
        "week": "W26",
        "salesUnits": "114",
        "salesDollars": " $5,698.86 ",
        "costDollars": " $6,131.97 ",
        "gmDollars": " $(433.11)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK09728",
        "week": "W29",
        "salesUnits": "157",
        "salesDollars": " $7,848.43 ",
        "costDollars": " $8,444.91 ",
        "gmDollars": " $(596.48)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK09728",
        "week": "W32",
        "salesUnits": "40",
        "salesDollars": " $1,999.60 ",
        "costDollars": " $2,151.57 ",
        "gmDollars": " $(151.97)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK09728",
        "week": "W38",
        "salesUnits": "67",
        "salesDollars": " $3,349.33 ",
        "costDollars": " $3,603.88 ",
        "gmDollars": " $(254.55)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK09728",
        "week": "W40",
        "salesUnits": "188",
        "salesDollars": " $9,398.12 ",
        "costDollars": " $10,112.38 ",
        "gmDollars": " $(714.26)",
        "gmPercent": "-8%"
    },
    {
        "store": "ST035",
        "sku": "SK09816",
        "week": "W11",
        "salesUnits": "10",
        "salesDollars": " $1,349.90 ",
        "costDollars": " $958.43 ",
        "gmDollars": " $391.47 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09816",
        "week": "W13",
        "salesUnits": "37",
        "salesDollars": " $4,994.63 ",
        "costDollars": " $3,546.19 ",
        "gmDollars": " $1,448.44 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09816",
        "week": "W14",
        "salesUnits": "26",
        "salesDollars": " $3,509.74 ",
        "costDollars": " $2,491.92 ",
        "gmDollars": " $1,017.82 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09816",
        "week": "W18",
        "salesUnits": "181",
        "salesDollars": " $24,433.19 ",
        "costDollars": " $17,347.56 ",
        "gmDollars": " $7,085.63 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09816",
        "week": "W29",
        "salesUnits": "34",
        "salesDollars": " $4,589.66 ",
        "costDollars": " $3,258.66 ",
        "gmDollars": " $1,331.00 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09816",
        "week": "W32",
        "salesUnits": "162",
        "salesDollars": " $21,868.38 ",
        "costDollars": " $15,526.55 ",
        "gmDollars": " $6,341.83 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK09816",
        "week": "W43",
        "salesUnits": "177",
        "salesDollars": " $23,893.23 ",
        "costDollars": " $16,964.19 ",
        "gmDollars": " $6,929.04 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK10226",
        "week": "W04",
        "salesUnits": "198",
        "salesDollars": " $8,908.02 ",
        "costDollars": " $481.03 ",
        "gmDollars": " $8,426.99 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK10226",
        "week": "W08",
        "salesUnits": "49",
        "salesDollars": " $2,204.51 ",
        "costDollars": " $119.04 ",
        "gmDollars": " $2,085.47 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK10226",
        "week": "W10",
        "salesUnits": "129",
        "salesDollars": " $5,803.71 ",
        "costDollars": " $313.40 ",
        "gmDollars": " $5,490.31 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK10226",
        "week": "W17",
        "salesUnits": "98",
        "salesDollars": " $4,409.02 ",
        "costDollars": " $238.09 ",
        "gmDollars": " $4,170.93 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK10226",
        "week": "W24",
        "salesUnits": "129",
        "salesDollars": " $5,803.71 ",
        "costDollars": " $313.40 ",
        "gmDollars": " $5,490.31 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK10226",
        "week": "W33",
        "salesUnits": "160",
        "salesDollars": " $7,198.40 ",
        "costDollars": " $388.71 ",
        "gmDollars": " $6,809.69 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK10226",
        "week": "W36",
        "salesUnits": "133",
        "salesDollars": " $5,983.67 ",
        "costDollars": " $323.12 ",
        "gmDollars": " $5,660.55 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK10226",
        "week": "W41",
        "salesUnits": "109",
        "salesDollars": " $4,903.91 ",
        "costDollars": " $264.81 ",
        "gmDollars": " $4,639.10 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK10226",
        "week": "W45",
        "salesUnits": "150",
        "salesDollars": " $6,748.50 ",
        "costDollars": " $364.42 ",
        "gmDollars": " $6,384.08 ",
        "gmPercent": "95%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W01",
        "salesUnits": "144",
        "salesDollars": " $9,358.56 ",
        "costDollars": " $7,645.94 ",
        "gmDollars": " $1,712.62 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W05",
        "salesUnits": "121",
        "salesDollars": " $7,863.79 ",
        "costDollars": " $6,424.72 ",
        "gmDollars": " $1,439.07 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W09",
        "salesUnits": "148",
        "salesDollars": " $9,618.52 ",
        "costDollars": " $7,858.33 ",
        "gmDollars": " $1,760.19 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W10",
        "salesUnits": "114",
        "salesDollars": " $7,408.86 ",
        "costDollars": " $6,053.04 ",
        "gmDollars": " $1,355.82 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W12",
        "salesUnits": "19",
        "salesDollars": " $1,234.81 ",
        "costDollars": " $1,008.84 ",
        "gmDollars": " $225.97 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W14",
        "salesUnits": "95",
        "salesDollars": " $6,174.05 ",
        "costDollars": " $5,044.20 ",
        "gmDollars": " $1,129.85 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W18",
        "salesUnits": "152",
        "salesDollars": " $9,878.48 ",
        "costDollars": " $8,070.72 ",
        "gmDollars": " $1,807.76 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W25",
        "salesUnits": "197",
        "salesDollars": " $12,803.03 ",
        "costDollars": " $10,460.08 ",
        "gmDollars": " $2,342.95 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W29",
        "salesUnits": "35",
        "salesDollars": " $2,274.65 ",
        "costDollars": " $1,858.39 ",
        "gmDollars": " $416.26 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W38",
        "salesUnits": "34",
        "salesDollars": " $2,209.66 ",
        "costDollars": " $1,805.29 ",
        "gmDollars": " $404.37 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W42",
        "salesUnits": "153",
        "salesDollars": " $9,943.47 ",
        "costDollars": " $8,123.81 ",
        "gmDollars": " $1,819.66 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W49",
        "salesUnits": "58",
        "salesDollars": " $3,769.42 ",
        "costDollars": " $3,079.62 ",
        "gmDollars": " $689.80 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10286",
        "week": "W51",
        "salesUnits": "177",
        "salesDollars": " $11,503.23 ",
        "costDollars": " $9,398.14 ",
        "gmDollars": " $2,105.09 ",
        "gmPercent": "18%"
    },
    {
        "store": "ST035",
        "sku": "SK10304",
        "week": "W06",
        "salesUnits": "183",
        "salesDollars": " $25,618.17 ",
        "costDollars": " $4,124.53 ",
        "gmDollars": " $21,493.64 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK10304",
        "week": "W12",
        "salesUnits": "56",
        "salesDollars": " $7,839.44 ",
        "costDollars": " $1,262.15 ",
        "gmDollars": " $6,577.29 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK10304",
        "week": "W16",
        "salesUnits": "45",
        "salesDollars": " $6,299.55 ",
        "costDollars": " $1,014.23 ",
        "gmDollars": " $5,285.32 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK10304",
        "week": "W27",
        "salesUnits": "128",
        "salesDollars": " $17,918.72 ",
        "costDollars": " $2,884.91 ",
        "gmDollars": " $15,033.81 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK10304",
        "week": "W33",
        "salesUnits": "62",
        "salesDollars": " $8,679.38 ",
        "costDollars": " $1,397.38 ",
        "gmDollars": " $7,282.00 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK10304",
        "week": "W34",
        "salesUnits": "102",
        "salesDollars": " $14,278.98 ",
        "costDollars": " $2,298.92 ",
        "gmDollars": " $11,980.06 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK10304",
        "week": "W41",
        "salesUnits": "35",
        "salesDollars": " $4,899.65 ",
        "costDollars": " $788.84 ",
        "gmDollars": " $4,110.81 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK10304",
        "week": "W45",
        "salesUnits": "114",
        "salesDollars": " $15,958.86 ",
        "costDollars": " $2,569.38 ",
        "gmDollars": " $13,389.48 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK10304",
        "week": "W52",
        "salesUnits": "26",
        "salesDollars": " $3,639.74 ",
        "costDollars": " $586.00 ",
        "gmDollars": " $3,053.74 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK10514",
        "week": "W15",
        "salesUnits": "31",
        "salesDollars": " $3,409.69 ",
        "costDollars": " $2,011.72 ",
        "gmDollars": " $1,397.97 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK10514",
        "week": "W20",
        "salesUnits": "58",
        "salesDollars": " $6,379.42 ",
        "costDollars": " $3,763.86 ",
        "gmDollars": " $2,615.56 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK10514",
        "week": "W24",
        "salesUnits": "72",
        "salesDollars": " $7,919.28 ",
        "costDollars": " $4,672.38 ",
        "gmDollars": " $3,246.90 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK10514",
        "week": "W36",
        "salesUnits": "101",
        "salesDollars": " $11,108.99 ",
        "costDollars": " $6,554.30 ",
        "gmDollars": " $4,554.69 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK10514",
        "week": "W51",
        "salesUnits": "184",
        "salesDollars": " $20,238.16 ",
        "costDollars": " $11,940.51 ",
        "gmDollars": " $8,297.65 ",
        "gmPercent": "41%"
    },
    {
        "store": "ST035",
        "sku": "SK10565",
        "week": "W02",
        "salesUnits": "64",
        "salesDollars": " $11,199.36 ",
        "costDollars": " $111.99 ",
        "gmDollars": " $11,087.37 ",
        "gmPercent": "99%"
    },
    {
        "store": "ST035",
        "sku": "SK10565",
        "week": "W04",
        "salesUnits": "159",
        "salesDollars": " $27,823.41 ",
        "costDollars": " $278.23 ",
        "gmDollars": " $27,545.18 ",
        "gmPercent": "99%"
    },
    {
        "store": "ST035",
        "sku": "SK10565",
        "week": "W19",
        "salesUnits": "82",
        "salesDollars": " $14,349.18 ",
        "costDollars": " $143.49 ",
        "gmDollars": " $14,205.69 ",
        "gmPercent": "99%"
    },
    {
        "store": "ST035",
        "sku": "SK10565",
        "week": "W22",
        "salesUnits": "87",
        "salesDollars": " $15,224.13 ",
        "costDollars": " $152.24 ",
        "gmDollars": " $15,071.89 ",
        "gmPercent": "99%"
    },
    {
        "store": "ST035",
        "sku": "SK10565",
        "week": "W33",
        "salesUnits": "147",
        "salesDollars": " $25,723.53 ",
        "costDollars": " $257.24 ",
        "gmDollars": " $25,466.29 ",
        "gmPercent": "99%"
    },
    {
        "store": "ST035",
        "sku": "SK10565",
        "week": "W40",
        "salesUnits": "66",
        "salesDollars": " $11,549.34 ",
        "costDollars": " $115.49 ",
        "gmDollars": " $11,433.85 ",
        "gmPercent": "99%"
    },
    {
        "store": "ST035",
        "sku": "SK10565",
        "week": "W41",
        "salesUnits": "141",
        "salesDollars": " $24,673.59 ",
        "costDollars": " $246.74 ",
        "gmDollars": " $24,426.85 ",
        "gmPercent": "99%"
    },
    {
        "store": "ST035",
        "sku": "SK10565",
        "week": "W46",
        "salesUnits": "17",
        "salesDollars": " $2,974.83 ",
        "costDollars": " $29.75 ",
        "gmDollars": " $2,945.08 ",
        "gmPercent": "99%"
    },
    {
        "store": "ST035",
        "sku": "SK10717",
        "week": "W05",
        "salesUnits": "190",
        "salesDollars": " $18,048.10 ",
        "costDollars": " $9,475.25 ",
        "gmDollars": " $8,572.85 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK10717",
        "week": "W09",
        "salesUnits": "126",
        "salesDollars": " $11,968.74 ",
        "costDollars": " $6,283.59 ",
        "gmDollars": " $5,685.15 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK10717",
        "week": "W11",
        "salesUnits": "147",
        "salesDollars": " $13,963.53 ",
        "costDollars": " $7,330.85 ",
        "gmDollars": " $6,632.68 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK10717",
        "week": "W13",
        "salesUnits": "44",
        "salesDollars": " $4,179.56 ",
        "costDollars": " $2,194.27 ",
        "gmDollars": " $1,985.29 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK10717",
        "week": "W15",
        "salesUnits": "177",
        "salesDollars": " $16,813.23 ",
        "costDollars": " $8,826.95 ",
        "gmDollars": " $7,986.28 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK10717",
        "week": "W21",
        "salesUnits": "80",
        "salesDollars": " $7,599.20 ",
        "costDollars": " $3,989.58 ",
        "gmDollars": " $3,609.62 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK10717",
        "week": "W25",
        "salesUnits": "82",
        "salesDollars": " $7,789.18 ",
        "costDollars": " $4,089.32 ",
        "gmDollars": " $3,699.86 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK10717",
        "week": "W33",
        "salesUnits": "184",
        "salesDollars": " $17,478.16 ",
        "costDollars": " $9,176.03 ",
        "gmDollars": " $8,302.13 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK10717",
        "week": "W42",
        "salesUnits": "21",
        "salesDollars": " $1,994.79 ",
        "costDollars": " $1,047.26 ",
        "gmDollars": " $947.53 ",
        "gmPercent": "48%"
    },
    {
        "store": "ST035",
        "sku": "SK10760",
        "week": "W13",
        "salesUnits": "107",
        "salesDollars": " $12,838.93 ",
        "costDollars": " $3,094.18 ",
        "gmDollars": " $9,744.75 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK10760",
        "week": "W18",
        "salesUnits": "48",
        "salesDollars": " $5,759.52 ",
        "costDollars": " $1,388.04 ",
        "gmDollars": " $4,371.48 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK10760",
        "week": "W27",
        "salesUnits": "175",
        "salesDollars": " $20,998.25 ",
        "costDollars": " $5,060.58 ",
        "gmDollars": " $15,937.67 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK10760",
        "week": "W36",
        "salesUnits": "163",
        "salesDollars": " $19,558.37 ",
        "costDollars": " $4,713.57 ",
        "gmDollars": " $14,844.80 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK10760",
        "week": "W49",
        "salesUnits": "79",
        "salesDollars": " $9,479.21 ",
        "costDollars": " $2,284.49 ",
        "gmDollars": " $7,194.72 ",
        "gmPercent": "76%"
    },
    {
        "store": "ST035",
        "sku": "SK11103",
        "week": "W20",
        "salesUnits": "128",
        "salesDollars": " $3,198.72 ",
        "costDollars": " $3,179.53 ",
        "gmDollars": " $19.19 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK11103",
        "week": "W26",
        "salesUnits": "38",
        "salesDollars": " $949.62 ",
        "costDollars": " $943.92 ",
        "gmDollars": " $5.70 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK11103",
        "week": "W28",
        "salesUnits": "200",
        "salesDollars": " $4,998.00 ",
        "costDollars": " $4,968.01 ",
        "gmDollars": " $29.99 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK11103",
        "week": "W29",
        "salesUnits": "129",
        "salesDollars": " $3,223.71 ",
        "costDollars": " $3,204.37 ",
        "gmDollars": " $19.34 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK11103",
        "week": "W33",
        "salesUnits": "179",
        "salesDollars": " $4,473.21 ",
        "costDollars": " $4,446.37 ",
        "gmDollars": " $26.84 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK11103",
        "week": "W48",
        "salesUnits": "84",
        "salesDollars": " $2,099.16 ",
        "costDollars": " $2,086.57 ",
        "gmDollars": " $12.59 ",
        "gmPercent": "1%"
    },
    {
        "store": "ST035",
        "sku": "SK11147",
        "week": "W16",
        "salesUnits": "74",
        "salesDollars": " $13,689.26 ",
        "costDollars": " $4,832.31 ",
        "gmDollars": " $8,856.95 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK11147",
        "week": "W21",
        "salesUnits": "71",
        "salesDollars": " $13,134.29 ",
        "costDollars": " $4,636.40 ",
        "gmDollars": " $8,497.89 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK11147",
        "week": "W22",
        "salesUnits": "177",
        "salesDollars": " $32,743.23 ",
        "costDollars": " $11,558.36 ",
        "gmDollars": " $21,184.87 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK11147",
        "week": "W28",
        "salesUnits": "37",
        "salesDollars": " $6,844.63 ",
        "costDollars": " $2,416.15 ",
        "gmDollars": " $4,428.48 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK11147",
        "week": "W31",
        "salesUnits": "165",
        "salesDollars": " $30,523.35 ",
        "costDollars": " $10,774.74 ",
        "gmDollars": " $19,748.61 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK11147",
        "week": "W36",
        "salesUnits": "39",
        "salesDollars": " $7,214.61 ",
        "costDollars": " $2,546.76 ",
        "gmDollars": " $4,667.85 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK11147",
        "week": "W38",
        "salesUnits": "131",
        "salesDollars": " $24,233.69 ",
        "costDollars": " $8,554.49 ",
        "gmDollars": " $15,679.20 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK11147",
        "week": "W43",
        "salesUnits": "25",
        "salesDollars": " $4,624.75 ",
        "costDollars": " $1,632.54 ",
        "gmDollars": " $2,992.21 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK11147",
        "week": "W45",
        "salesUnits": "96",
        "salesDollars": " $17,759.04 ",
        "costDollars": " $6,268.94 ",
        "gmDollars": " $11,490.10 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK11147",
        "week": "W50",
        "salesUnits": "125",
        "salesDollars": " $23,123.75 ",
        "costDollars": " $8,162.68 ",
        "gmDollars": " $14,961.07 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W06",
        "salesUnits": "66",
        "salesDollars": " $6,929.34 ",
        "costDollars": " $3,436.95 ",
        "gmDollars": " $3,492.39 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W09",
        "salesUnits": "85",
        "salesDollars": " $8,924.15 ",
        "costDollars": " $4,426.38 ",
        "gmDollars": " $4,497.77 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W10",
        "salesUnits": "91",
        "salesDollars": " $9,554.09 ",
        "costDollars": " $4,738.83 ",
        "gmDollars": " $4,815.26 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W12",
        "salesUnits": "105",
        "salesDollars": " $11,023.95 ",
        "costDollars": " $5,467.88 ",
        "gmDollars": " $5,556.07 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W17",
        "salesUnits": "196",
        "salesDollars": " $20,578.04 ",
        "costDollars": " $10,206.71 ",
        "gmDollars": " $10,371.33 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W22",
        "salesUnits": "95",
        "salesDollars": " $9,974.05 ",
        "costDollars": " $4,947.13 ",
        "gmDollars": " $5,026.92 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W29",
        "salesUnits": "91",
        "salesDollars": " $9,554.09 ",
        "costDollars": " $4,738.83 ",
        "gmDollars": " $4,815.26 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W43",
        "salesUnits": "108",
        "salesDollars": " $11,338.92 ",
        "costDollars": " $5,624.10 ",
        "gmDollars": " $5,714.82 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W44",
        "salesUnits": "34",
        "salesDollars": " $3,569.66 ",
        "costDollars": " $1,770.55 ",
        "gmDollars": " $1,799.11 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W45",
        "salesUnits": "39",
        "salesDollars": " $4,094.61 ",
        "costDollars": " $2,030.93 ",
        "gmDollars": " $2,063.68 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W49",
        "salesUnits": "195",
        "salesDollars": " $20,473.05 ",
        "costDollars": " $10,154.63 ",
        "gmDollars": " $10,318.42 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11260",
        "week": "W51",
        "salesUnits": "38",
        "salesDollars": " $3,989.62 ",
        "costDollars": " $1,978.85 ",
        "gmDollars": " $2,010.77 ",
        "gmPercent": "50%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W03",
        "salesUnits": "36",
        "salesDollars": " $5,399.64 ",
        "costDollars": " $5,194.45 ",
        "gmDollars": " $205.19 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W06",
        "salesUnits": "2",
        "salesDollars": " $299.98 ",
        "costDollars": " $288.58 ",
        "gmDollars": " $11.40 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W08",
        "salesUnits": "12",
        "salesDollars": " $1,799.88 ",
        "costDollars": " $1,731.48 ",
        "gmDollars": " $68.40 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W10",
        "salesUnits": "68",
        "salesDollars": " $10,199.32 ",
        "costDollars": " $9,811.75 ",
        "gmDollars": " $387.57 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W11",
        "salesUnits": "44",
        "salesDollars": " $6,599.56 ",
        "costDollars": " $6,348.78 ",
        "gmDollars": " $250.78 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W12",
        "salesUnits": "83",
        "salesDollars": " $12,449.17 ",
        "costDollars": " $11,976.10 ",
        "gmDollars": " $473.07 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W16",
        "salesUnits": "103",
        "salesDollars": " $15,448.97 ",
        "costDollars": " $14,861.91 ",
        "gmDollars": " $587.06 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W18",
        "salesUnits": "46",
        "salesDollars": " $6,899.54 ",
        "costDollars": " $6,637.36 ",
        "gmDollars": " $262.18 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W21",
        "salesUnits": "191",
        "salesDollars": " $28,648.09 ",
        "costDollars": " $27,559.46 ",
        "gmDollars": " $1,088.63 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W32",
        "salesUnits": "61",
        "salesDollars": " $9,149.39 ",
        "costDollars": " $8,801.71 ",
        "gmDollars": " $347.68 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W33",
        "salesUnits": "83",
        "salesDollars": " $12,449.17 ",
        "costDollars": " $11,976.10 ",
        "gmDollars": " $473.07 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W37",
        "salesUnits": "194",
        "salesDollars": " $29,098.06 ",
        "costDollars": " $27,992.33 ",
        "gmDollars": " $1,105.73 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W43",
        "salesUnits": "170",
        "salesDollars": " $25,498.30 ",
        "costDollars": " $24,529.36 ",
        "gmDollars": " $968.94 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W45",
        "salesUnits": "175",
        "salesDollars": " $26,248.25 ",
        "costDollars": " $25,250.82 ",
        "gmDollars": " $997.43 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W49",
        "salesUnits": "168",
        "salesDollars": " $25,198.32 ",
        "costDollars": " $24,240.78 ",
        "gmDollars": " $957.54 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11808",
        "week": "W50",
        "salesUnits": "57",
        "salesDollars": " $8,549.43 ",
        "costDollars": " $8,224.55 ",
        "gmDollars": " $324.88 ",
        "gmPercent": "4%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W02",
        "salesUnits": "34",
        "salesDollars": " $3,739.66 ",
        "costDollars": " $108.45 ",
        "gmDollars": " $3,631.21 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W05",
        "salesUnits": "79",
        "salesDollars": " $8,689.21 ",
        "costDollars": " $251.99 ",
        "gmDollars": " $8,437.22 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W08",
        "salesUnits": "183",
        "salesDollars": " $20,128.17 ",
        "costDollars": " $583.72 ",
        "gmDollars": " $19,544.45 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W09",
        "salesUnits": "189",
        "salesDollars": " $20,788.11 ",
        "costDollars": " $602.86 ",
        "gmDollars": " $20,185.25 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W10",
        "salesUnits": "8",
        "salesDollars": " $879.92 ",
        "costDollars": " $25.52 ",
        "gmDollars": " $854.40 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W12",
        "salesUnits": "84",
        "salesDollars": " $9,239.16 ",
        "costDollars": " $267.94 ",
        "gmDollars": " $8,971.22 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W18",
        "salesUnits": "43",
        "salesDollars": " $4,729.57 ",
        "costDollars": " $137.16 ",
        "gmDollars": " $4,592.41 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W24",
        "salesUnits": "197",
        "salesDollars": " $21,668.03 ",
        "costDollars": " $628.37 ",
        "gmDollars": " $21,039.66 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W30",
        "salesUnits": "8",
        "salesDollars": " $879.92 ",
        "costDollars": " $25.52 ",
        "gmDollars": " $854.40 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W36",
        "salesUnits": "172",
        "salesDollars": " $18,918.28 ",
        "costDollars": " $548.63 ",
        "gmDollars": " $18,369.65 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W43",
        "salesUnits": "190",
        "salesDollars": " $20,898.10 ",
        "costDollars": " $606.04 ",
        "gmDollars": " $20,292.06 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK11860",
        "week": "W52",
        "salesUnits": "124",
        "salesDollars": " $13,638.76 ",
        "costDollars": " $395.52 ",
        "gmDollars": " $13,243.24 ",
        "gmPercent": "97%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W01",
        "salesUnits": "85",
        "salesDollars": " $13,599.15 ",
        "costDollars": " $9,274.62 ",
        "gmDollars": " $4,324.53 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W07",
        "salesUnits": "40",
        "salesDollars": " $6,399.60 ",
        "costDollars": " $4,364.53 ",
        "gmDollars": " $2,035.07 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W08",
        "salesUnits": "113",
        "salesDollars": " $18,078.87 ",
        "costDollars": " $12,329.79 ",
        "gmDollars": " $5,749.08 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W12",
        "salesUnits": "53",
        "salesDollars": " $8,479.47 ",
        "costDollars": " $5,783.00 ",
        "gmDollars": " $2,696.47 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W14",
        "salesUnits": "126",
        "salesDollars": " $20,158.74 ",
        "costDollars": " $13,748.26 ",
        "gmDollars": " $6,410.48 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W15",
        "salesUnits": "108",
        "salesDollars": " $17,278.92 ",
        "costDollars": " $11,784.22 ",
        "gmDollars": " $5,494.70 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W21",
        "salesUnits": "2",
        "salesDollars": " $319.98 ",
        "costDollars": " $218.23 ",
        "gmDollars": " $101.75 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W23",
        "salesUnits": "187",
        "salesDollars": " $29,918.13 ",
        "costDollars": " $20,404.16 ",
        "gmDollars": " $9,513.97 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W26",
        "salesUnits": "44",
        "salesDollars": " $7,039.56 ",
        "costDollars": " $4,800.98 ",
        "gmDollars": " $2,238.58 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W29",
        "salesUnits": "4",
        "salesDollars": " $639.96 ",
        "costDollars": " $436.45 ",
        "gmDollars": " $203.51 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W30",
        "salesUnits": "11",
        "salesDollars": " $1,759.89 ",
        "costDollars": " $1,200.24 ",
        "gmDollars": " $559.65 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W34",
        "salesUnits": "181",
        "salesDollars": " $28,958.19 ",
        "costDollars": " $19,749.49 ",
        "gmDollars": " $9,208.70 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W38",
        "salesUnits": "11",
        "salesDollars": " $1,759.89 ",
        "costDollars": " $1,200.24 ",
        "gmDollars": " $559.65 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W41",
        "salesUnits": "74",
        "salesDollars": " $11,839.26 ",
        "costDollars": " $8,074.38 ",
        "gmDollars": " $3,764.88 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W45",
        "salesUnits": "160",
        "salesDollars": " $25,598.40 ",
        "costDollars": " $17,458.11 ",
        "gmDollars": " $8,140.29 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W48",
        "salesUnits": "44",
        "salesDollars": " $7,039.56 ",
        "costDollars": " $4,800.98 ",
        "gmDollars": " $2,238.58 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W49",
        "salesUnits": "115",
        "salesDollars": " $18,398.85 ",
        "costDollars": " $12,548.02 ",
        "gmDollars": " $5,850.83 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12148",
        "week": "W52",
        "salesUnits": "14",
        "salesDollars": " $2,239.86 ",
        "costDollars": " $1,527.58 ",
        "gmDollars": " $712.28 ",
        "gmPercent": "32%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W10",
        "salesUnits": "170",
        "salesDollars": " $8,498.30 ",
        "costDollars": " $8,481.30 ",
        "gmDollars": " $17.00 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W12",
        "salesUnits": "97",
        "salesDollars": " $4,849.03 ",
        "costDollars": " $4,839.33 ",
        "gmDollars": " $9.70 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W14",
        "salesUnits": "197",
        "salesDollars": " $9,848.03 ",
        "costDollars": " $9,828.33 ",
        "gmDollars": " $19.70 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W21",
        "salesUnits": "3",
        "salesDollars": " $149.97 ",
        "costDollars": " $149.67 ",
        "gmDollars": " $0.30 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W25",
        "salesUnits": "73",
        "salesDollars": " $3,649.27 ",
        "costDollars": " $3,641.97 ",
        "gmDollars": " $7.30 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W29",
        "salesUnits": "52",
        "salesDollars": " $2,599.48 ",
        "costDollars": " $2,594.28 ",
        "gmDollars": " $5.20 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W33",
        "salesUnits": "96",
        "salesDollars": " $4,799.04 ",
        "costDollars": " $4,789.44 ",
        "gmDollars": " $9.60 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W35",
        "salesUnits": "193",
        "salesDollars": " $9,648.07 ",
        "costDollars": " $9,628.77 ",
        "gmDollars": " $19.30 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W36",
        "salesUnits": "0",
        "salesDollars": " $-   ",
        "costDollars": " $-   ",
        "gmDollars": " $-   ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W38",
        "salesUnits": "20",
        "salesDollars": " $999.80 ",
        "costDollars": " $997.80 ",
        "gmDollars": " $2.00 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W39",
        "salesUnits": "99",
        "salesDollars": " $4,949.01 ",
        "costDollars": " $4,939.11 ",
        "gmDollars": " $9.90 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W44",
        "salesUnits": "47",
        "salesDollars": " $2,349.53 ",
        "costDollars": " $2,344.83 ",
        "gmDollars": " $4.70 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W47",
        "salesUnits": "119",
        "salesDollars": " $5,948.81 ",
        "costDollars": " $5,936.91 ",
        "gmDollars": " $11.90 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12418",
        "week": "W49",
        "salesUnits": "167",
        "salesDollars": " $8,348.33 ",
        "costDollars": " $8,331.63 ",
        "gmDollars": " $16.70 ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK12460",
        "week": "W07",
        "salesUnits": "189",
        "salesDollars": " $943.11 ",
        "costDollars": " $129.21 ",
        "gmDollars": " $813.90 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK12460",
        "week": "W13",
        "salesUnits": "140",
        "salesDollars": " $698.60 ",
        "costDollars": " $95.71 ",
        "gmDollars": " $602.89 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK12460",
        "week": "W16",
        "salesUnits": "1",
        "salesDollars": " $4.99 ",
        "costDollars": " $0.68 ",
        "gmDollars": " $4.31 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK12460",
        "week": "W26",
        "salesUnits": "138",
        "salesDollars": " $688.62 ",
        "costDollars": " $94.34 ",
        "gmDollars": " $594.28 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK12460",
        "week": "W31",
        "salesUnits": "33",
        "salesDollars": " $164.67 ",
        "costDollars": " $22.56 ",
        "gmDollars": " $142.11 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK12460",
        "week": "W32",
        "salesUnits": "137",
        "salesDollars": " $683.63 ",
        "costDollars": " $93.66 ",
        "gmDollars": " $589.97 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK12460",
        "week": "W38",
        "salesUnits": "91",
        "salesDollars": " $454.09 ",
        "costDollars": " $62.21 ",
        "gmDollars": " $391.88 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK12460",
        "week": "W41",
        "salesUnits": "18",
        "salesDollars": " $89.82 ",
        "costDollars": " $12.31 ",
        "gmDollars": " $77.51 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK12460",
        "week": "W45",
        "salesUnits": "80",
        "salesDollars": " $399.20 ",
        "costDollars": " $54.69 ",
        "gmDollars": " $344.51 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK12460",
        "week": "W46",
        "salesUnits": "131",
        "salesDollars": " $653.69 ",
        "costDollars": " $89.56 ",
        "gmDollars": " $564.13 ",
        "gmPercent": "86%"
    },
    {
        "store": "ST035",
        "sku": "SK12478",
        "week": "W01",
        "salesUnits": "35",
        "salesDollars": " $6,474.65 ",
        "costDollars": " $1,385.58 ",
        "gmDollars": " $5,089.07 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK12478",
        "week": "W02",
        "salesUnits": "167",
        "salesDollars": " $30,893.33 ",
        "costDollars": " $6,611.17 ",
        "gmDollars": " $24,282.16 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK12478",
        "week": "W04",
        "salesUnits": "194",
        "salesDollars": " $35,888.06 ",
        "costDollars": " $7,680.04 ",
        "gmDollars": " $28,208.02 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK12478",
        "week": "W12",
        "salesUnits": "3",
        "salesDollars": " $554.97 ",
        "costDollars": " $118.76 ",
        "gmDollars": " $436.21 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK12478",
        "week": "W20",
        "salesUnits": "172",
        "salesDollars": " $31,818.28 ",
        "costDollars": " $6,809.11 ",
        "gmDollars": " $25,009.17 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK12478",
        "week": "W25",
        "salesUnits": "102",
        "salesDollars": " $18,868.98 ",
        "costDollars": " $4,037.96 ",
        "gmDollars": " $14,831.02 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK12478",
        "week": "W31",
        "salesUnits": "85",
        "salesDollars": " $15,724.15 ",
        "costDollars": " $3,364.97 ",
        "gmDollars": " $12,359.18 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK12478",
        "week": "W44",
        "salesUnits": "20",
        "salesDollars": " $3,699.80 ",
        "costDollars": " $791.76 ",
        "gmDollars": " $2,908.04 ",
        "gmPercent": "79%"
    },
    {
        "store": "ST035",
        "sku": "SK12670",
        "week": "W12",
        "salesUnits": "151",
        "salesDollars": " $29,443.49 ",
        "costDollars": " $8,067.52 ",
        "gmDollars": " $21,375.97 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK12670",
        "week": "W13",
        "salesUnits": "186",
        "salesDollars": " $36,268.14 ",
        "costDollars": " $9,937.47 ",
        "gmDollars": " $26,330.67 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK12670",
        "week": "W16",
        "salesUnits": "114",
        "salesDollars": " $22,228.86 ",
        "costDollars": " $6,090.71 ",
        "gmDollars": " $16,138.15 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK12670",
        "week": "W20",
        "salesUnits": "4",
        "salesDollars": " $779.96 ",
        "costDollars": " $213.71 ",
        "gmDollars": " $566.25 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK12670",
        "week": "W25",
        "salesUnits": "17",
        "salesDollars": " $3,314.83 ",
        "costDollars": " $908.26 ",
        "gmDollars": " $2,406.57 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK12670",
        "week": "W28",
        "salesUnits": "46",
        "salesDollars": " $8,969.54 ",
        "costDollars": " $2,457.65 ",
        "gmDollars": " $6,511.89 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK12670",
        "week": "W33",
        "salesUnits": "89",
        "salesDollars": " $17,354.11 ",
        "costDollars": " $4,755.03 ",
        "gmDollars": " $12,599.08 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK12670",
        "week": "W46",
        "salesUnits": "122",
        "salesDollars": " $23,788.78 ",
        "costDollars": " $6,518.13 ",
        "gmDollars": " $17,270.65 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK12670",
        "week": "W51",
        "salesUnits": "75",
        "salesDollars": " $14,624.25 ",
        "costDollars": " $4,007.04 ",
        "gmDollars": " $10,617.21 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK12670",
        "week": "W52",
        "salesUnits": "42",
        "salesDollars": " $8,189.58 ",
        "costDollars": " $2,243.94 ",
        "gmDollars": " $5,945.64 ",
        "gmPercent": "73%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W01",
        "salesUnits": "133",
        "salesDollars": " $1,328.67 ",
        "costDollars": " $1,267.55 ",
        "gmDollars": " $61.12 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W02",
        "salesUnits": "27",
        "salesDollars": " $269.73 ",
        "costDollars": " $257.32 ",
        "gmDollars": " $12.41 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W09",
        "salesUnits": "167",
        "salesDollars": " $1,668.33 ",
        "costDollars": " $1,591.59 ",
        "gmDollars": " $76.74 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W10",
        "salesUnits": "183",
        "salesDollars": " $1,828.17 ",
        "costDollars": " $1,744.07 ",
        "gmDollars": " $84.10 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W12",
        "salesUnits": "123",
        "salesDollars": " $1,228.77 ",
        "costDollars": " $1,172.25 ",
        "gmDollars": " $56.52 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W14",
        "salesUnits": "19",
        "salesDollars": " $189.81 ",
        "costDollars": " $181.08 ",
        "gmDollars": " $8.73 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W18",
        "salesUnits": "196",
        "salesDollars": " $1,958.04 ",
        "costDollars": " $1,867.97 ",
        "gmDollars": " $90.07 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W26",
        "salesUnits": "197",
        "salesDollars": " $1,968.03 ",
        "costDollars": " $1,877.50 ",
        "gmDollars": " $90.53 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W35",
        "salesUnits": "113",
        "salesDollars": " $1,128.87 ",
        "costDollars": " $1,076.94 ",
        "gmDollars": " $51.93 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W37",
        "salesUnits": "193",
        "salesDollars": " $1,928.07 ",
        "costDollars": " $1,839.38 ",
        "gmDollars": " $88.69 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W40",
        "salesUnits": "14",
        "salesDollars": " $139.86 ",
        "costDollars": " $133.43 ",
        "gmDollars": " $6.43 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12760",
        "week": "W50",
        "salesUnits": "184",
        "salesDollars": " $1,838.16 ",
        "costDollars": " $1,753.60 ",
        "gmDollars": " $84.56 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W06",
        "salesUnits": "14",
        "salesDollars": " $2,169.86 ",
        "costDollars": " $752.94 ",
        "gmDollars": " $1,416.92 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W07",
        "salesUnits": "120",
        "salesDollars": " $18,598.80 ",
        "costDollars": " $6,453.78 ",
        "gmDollars": " $12,145.02 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W11",
        "salesUnits": "22",
        "salesDollars": " $3,409.78 ",
        "costDollars": " $1,183.19 ",
        "gmDollars": " $2,226.59 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W15",
        "salesUnits": "159",
        "salesDollars": " $24,643.41 ",
        "costDollars": " $8,551.26 ",
        "gmDollars": " $16,092.15 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W16",
        "salesUnits": "192",
        "salesDollars": " $29,758.08 ",
        "costDollars": " $10,326.05 ",
        "gmDollars": " $19,432.03 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W22",
        "salesUnits": "56",
        "salesDollars": " $8,679.44 ",
        "costDollars": " $3,011.77 ",
        "gmDollars": " $5,667.67 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W25",
        "salesUnits": "69",
        "salesDollars": " $10,694.31 ",
        "costDollars": " $3,710.93 ",
        "gmDollars": " $6,983.38 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W29",
        "salesUnits": "112",
        "salesDollars": " $17,358.88 ",
        "costDollars": " $6,023.53 ",
        "gmDollars": " $11,335.35 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W30",
        "salesUnits": "23",
        "salesDollars": " $3,564.77 ",
        "costDollars": " $1,236.98 ",
        "gmDollars": " $2,327.79 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W33",
        "salesUnits": "139",
        "salesDollars": " $21,543.61 ",
        "costDollars": " $7,475.63 ",
        "gmDollars": " $14,067.98 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W46",
        "salesUnits": "73",
        "salesDollars": " $11,314.27 ",
        "costDollars": " $3,926.05 ",
        "gmDollars": " $7,388.22 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W47",
        "salesUnits": "24",
        "salesDollars": " $3,719.76 ",
        "costDollars": " $1,290.76 ",
        "gmDollars": " $2,429.00 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W51",
        "salesUnits": "76",
        "salesDollars": " $11,779.24 ",
        "costDollars": " $4,087.40 ",
        "gmDollars": " $7,691.84 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12773",
        "week": "W52",
        "salesUnits": "191",
        "salesDollars": " $29,603.09 ",
        "costDollars": " $10,272.27 ",
        "gmDollars": " $19,330.82 ",
        "gmPercent": "65%"
    },
    {
        "store": "ST035",
        "sku": "SK12919",
        "week": "W01",
        "salesUnits": "169",
        "salesDollars": " $18,588.31 ",
        "costDollars": " $15,130.88 ",
        "gmDollars": " $3,457.43 ",
        "gmPercent": "19%"
    },
    {
        "store": "ST035",
        "sku": "SK12919",
        "week": "W11",
        "salesUnits": "132",
        "salesDollars": " $14,518.68 ",
        "costDollars": " $11,818.21 ",
        "gmDollars": " $2,700.47 ",
        "gmPercent": "19%"
    },
    {
        "store": "ST035",
        "sku": "SK12919",
        "week": "W28",
        "salesUnits": "82",
        "salesDollars": " $9,019.18 ",
        "costDollars": " $7,341.61 ",
        "gmDollars": " $1,677.57 ",
        "gmPercent": "19%"
    },
    {
        "store": "ST035",
        "sku": "SK12919",
        "week": "W44",
        "salesUnits": "171",
        "salesDollars": " $18,808.29 ",
        "costDollars": " $15,309.95 ",
        "gmDollars": " $3,498.34 ",
        "gmPercent": "19%"
    },
    {
        "store": "ST035",
        "sku": "SK12919",
        "week": "W46",
        "salesUnits": "82",
        "salesDollars": " $9,019.18 ",
        "costDollars": " $7,341.61 ",
        "gmDollars": " $1,677.57 ",
        "gmPercent": "19%"
    },
    {
        "store": "ST035",
        "sku": "SK12919",
        "week": "W47",
        "salesUnits": "101",
        "salesDollars": " $11,108.99 ",
        "costDollars": " $9,042.72 ",
        "gmDollars": " $2,066.27 ",
        "gmPercent": "19%"
    },
    {
        "store": "ST035",
        "sku": "SK13050",
        "week": "W21",
        "salesUnits": "32",
        "salesDollars": " $4,319.68 ",
        "costDollars": " $2,419.02 ",
        "gmDollars": " $1,900.66 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK13050",
        "week": "W25",
        "salesUnits": "156",
        "salesDollars": " $21,058.44 ",
        "costDollars": " $11,792.73 ",
        "gmDollars": " $9,265.71 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK13050",
        "week": "W26",
        "salesUnits": "34",
        "salesDollars": " $4,589.66 ",
        "costDollars": " $2,570.21 ",
        "gmDollars": " $2,019.45 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK13050",
        "week": "W39",
        "salesUnits": "56",
        "salesDollars": " $7,559.44 ",
        "costDollars": " $4,233.29 ",
        "gmDollars": " $3,326.15 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK13050",
        "week": "W41",
        "salesUnits": "135",
        "salesDollars": " $18,223.65 ",
        "costDollars": " $10,205.24 ",
        "gmDollars": " $8,018.41 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK13050",
        "week": "W46",
        "salesUnits": "150",
        "salesDollars": " $20,248.50 ",
        "costDollars": " $11,339.16 ",
        "gmDollars": " $8,909.34 ",
        "gmPercent": "44%"
    },
    {
        "store": "ST035",
        "sku": "SK13226",
        "week": "W07",
        "salesUnits": "176",
        "salesDollars": " $12,318.24 ",
        "costDollars": " $11,431.33 ",
        "gmDollars": " $886.91 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK13226",
        "week": "W16",
        "salesUnits": "193",
        "salesDollars": " $13,508.07 ",
        "costDollars": " $12,535.49 ",
        "gmDollars": " $972.58 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK13226",
        "week": "W26",
        "salesUnits": "49",
        "salesDollars": " $3,429.51 ",
        "costDollars": " $3,182.59 ",
        "gmDollars": " $246.92 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK13226",
        "week": "W32",
        "salesUnits": "55",
        "salesDollars": " $3,849.45 ",
        "costDollars": " $3,572.29 ",
        "gmDollars": " $277.16 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK13226",
        "week": "W45",
        "salesUnits": "42",
        "salesDollars": " $2,939.58 ",
        "costDollars": " $2,727.93 ",
        "gmDollars": " $211.65 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK13226",
        "week": "W50",
        "salesUnits": "156",
        "salesDollars": " $10,918.44 ",
        "costDollars": " $10,132.31 ",
        "gmDollars": " $786.13 ",
        "gmPercent": "7%"
    },
    {
        "store": "ST035",
        "sku": "SK13248",
        "week": "W01",
        "salesUnits": "71",
        "salesDollars": " $8,874.29 ",
        "costDollars": " $1,650.62 ",
        "gmDollars": " $7,223.67 ",
        "gmPercent": "81%"
    },
    {
        "store": "ST035",
        "sku": "SK13248",
        "week": "W06",
        "salesUnits": "78",
        "salesDollars": " $9,749.22 ",
        "costDollars": " $1,813.35 ",
        "gmDollars": " $7,935.87 ",
        "gmPercent": "81%"
    },
    {
        "store": "ST035",
        "sku": "SK13248",
        "week": "W11",
        "salesUnits": "63",
        "salesDollars": " $7,874.37 ",
        "costDollars": " $1,464.63 ",
        "gmDollars": " $6,409.74 ",
        "gmPercent": "81%"
    },
    {
        "store": "ST035",
        "sku": "SK13248",
        "week": "W16",
        "salesUnits": "169",
        "salesDollars": " $21,123.31 ",
        "costDollars": " $3,928.94 ",
        "gmDollars": " $17,194.37 ",
        "gmPercent": "81%"
    },
    {
        "store": "ST035",
        "sku": "SK13248",
        "week": "W20",
        "salesUnits": "34",
        "salesDollars": " $4,249.66 ",
        "costDollars": " $790.44 ",
        "gmDollars": " $3,459.22 ",
        "gmPercent": "81%"
    },
    {
        "store": "ST035",
        "sku": "SK13248",
        "week": "W22",
        "salesUnits": "0",
        "salesDollars": " $-   ",
        "costDollars": " $-   ",
        "gmDollars": " $-   ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK13248",
        "week": "W29",
        "salesUnits": "169",
        "salesDollars": " $21,123.31 ",
        "costDollars": " $3,928.94 ",
        "gmDollars": " $17,194.37 ",
        "gmPercent": "81%"
    },
    {
        "store": "ST035",
        "sku": "SK13248",
        "week": "W30",
        "salesUnits": "151",
        "salesDollars": " $18,873.49 ",
        "costDollars": " $3,510.47 ",
        "gmDollars": " $15,363.02 ",
        "gmPercent": "81%"
    },
    {
        "store": "ST035",
        "sku": "SK13248",
        "week": "W47",
        "salesUnits": "81",
        "salesDollars": " $10,124.19 ",
        "costDollars": " $1,883.10 ",
        "gmDollars": " $8,241.09 ",
        "gmPercent": "81%"
    },
    {
        "store": "ST035",
        "sku": "SK13248",
        "week": "W49",
        "salesUnits": "46",
        "salesDollars": " $5,749.54 ",
        "costDollars": " $1,069.41 ",
        "gmDollars": " $4,680.13 ",
        "gmPercent": "81%"
    },
    {
        "store": "ST035",
        "sku": "SK13498",
        "week": "W12",
        "salesUnits": "149",
        "salesDollars": " $20,858.51 ",
        "costDollars": " $11,493.04 ",
        "gmDollars": " $9,365.47 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK13498",
        "week": "W26",
        "salesUnits": "179",
        "salesDollars": " $25,058.21 ",
        "costDollars": " $13,807.07 ",
        "gmDollars": " $11,251.14 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK13498",
        "week": "W27",
        "salesUnits": "179",
        "salesDollars": " $25,058.21 ",
        "costDollars": " $13,807.07 ",
        "gmDollars": " $11,251.14 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK13498",
        "week": "W34",
        "salesUnits": "7",
        "salesDollars": " $979.93 ",
        "costDollars": " $539.94 ",
        "gmDollars": " $439.99 ",
        "gmPercent": "45%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W06",
        "salesUnits": "109",
        "salesDollars": " $1,633.91 ",
        "costDollars": " $1,168.25 ",
        "gmDollars": " $465.66 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W07",
        "salesUnits": "72",
        "salesDollars": " $1,079.28 ",
        "costDollars": " $771.69 ",
        "gmDollars": " $307.59 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W09",
        "salesUnits": "2",
        "salesDollars": " $29.98 ",
        "costDollars": " $21.44 ",
        "gmDollars": " $8.54 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W10",
        "salesUnits": "193",
        "salesDollars": " $2,893.07 ",
        "costDollars": " $2,068.55 ",
        "gmDollars": " $824.52 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W11",
        "salesUnits": "12",
        "salesDollars": " $179.88 ",
        "costDollars": " $128.61 ",
        "gmDollars": " $51.27 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W16",
        "salesUnits": "198",
        "salesDollars": " $2,968.02 ",
        "costDollars": " $2,122.13 ",
        "gmDollars": " $845.89 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W23",
        "salesUnits": "55",
        "salesDollars": " $824.45 ",
        "costDollars": " $589.48 ",
        "gmDollars": " $234.97 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W27",
        "salesUnits": "152",
        "salesDollars": " $2,278.48 ",
        "costDollars": " $1,629.11 ",
        "gmDollars": " $649.37 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W30",
        "salesUnits": "48",
        "salesDollars": " $719.52 ",
        "costDollars": " $514.46 ",
        "gmDollars": " $205.06 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W33",
        "salesUnits": "0",
        "salesDollars": " $-   ",
        "costDollars": " $-   ",
        "gmDollars": " $-   ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W41",
        "salesUnits": "67",
        "salesDollars": " $1,004.33 ",
        "costDollars": " $718.10 ",
        "gmDollars": " $286.23 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W42",
        "salesUnits": "1",
        "salesDollars": " $14.99 ",
        "costDollars": " $10.72 ",
        "gmDollars": " $4.27 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W47",
        "salesUnits": "35",
        "salesDollars": " $524.65 ",
        "costDollars": " $375.12 ",
        "gmDollars": " $149.53 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13532",
        "week": "W50",
        "salesUnits": "186",
        "salesDollars": " $2,788.14 ",
        "costDollars": " $1,993.52 ",
        "gmDollars": " $794.62 ",
        "gmPercent": "29%"
    },
    {
        "store": "ST035",
        "sku": "SK13740",
        "week": "W03",
        "salesUnits": "172",
        "salesDollars": " $2,578.28 ",
        "costDollars": " $783.80 ",
        "gmDollars": " $1,794.48 ",
        "gmPercent": "70%"
    },
    {
        "store": "ST035",
        "sku": "SK13740",
        "week": "W16",
        "salesUnits": "161",
        "salesDollars": " $2,413.39 ",
        "costDollars": " $733.67 ",
        "gmDollars": " $1,679.72 ",
        "gmPercent": "70%"
    },
    {
        "store": "ST035",
        "sku": "SK13740",
        "week": "W24",
        "salesUnits": "10",
        "salesDollars": " $149.90 ",
        "costDollars": " $45.57 ",
        "gmDollars": " $104.33 ",
        "gmPercent": "70%"
    },
    {
        "store": "ST035",
        "sku": "SK13740",
        "week": "W29",
        "salesUnits": "153",
        "salesDollars": " $2,293.47 ",
        "costDollars": " $697.21 ",
        "gmDollars": " $1,596.26 ",
        "gmPercent": "70%"
    },
    {
        "store": "ST035",
        "sku": "SK13740",
        "week": "W35",
        "salesUnits": "84",
        "salesDollars": " $1,259.16 ",
        "costDollars": " $382.78 ",
        "gmDollars": " $876.38 ",
        "gmPercent": "70%"
    },
    {
        "store": "ST035",
        "sku": "SK13740",
        "week": "W37",
        "salesUnits": "62",
        "salesDollars": " $929.38 ",
        "costDollars": " $282.53 ",
        "gmDollars": " $646.85 ",
        "gmPercent": "70%"
    },
    {
        "store": "ST035",
        "sku": "SK13740",
        "week": "W38",
        "salesUnits": "176",
        "salesDollars": " $2,638.24 ",
        "costDollars": " $802.02 ",
        "gmDollars": " $1,836.22 ",
        "gmPercent": "70%"
    },
    {
        "store": "ST035",
        "sku": "SK13740",
        "week": "W39",
        "salesUnits": "190",
        "salesDollars": " $2,848.10 ",
        "costDollars": " $865.82 ",
        "gmDollars": " $1,982.28 ",
        "gmPercent": "70%"
    },
    {
        "store": "ST035",
        "sku": "SK13740",
        "week": "W44",
        "salesUnits": "12",
        "salesDollars": " $179.88 ",
        "costDollars": " $54.68 ",
        "gmDollars": " $125.20 ",
        "gmPercent": "70%"
    },
    {
        "store": "ST035",
        "sku": "SK13740",
        "week": "W45",
        "salesUnits": "50",
        "salesDollars": " $749.50 ",
        "costDollars": " $227.85 ",
        "gmDollars": " $521.65 ",
        "gmPercent": "70%"
    },
    {
        "store": "ST035",
        "sku": "SK13740",
        "week": "W52",
        "salesUnits": "184",
        "salesDollars": " $2,758.16 ",
        "costDollars": " $838.48 ",
        "gmDollars": " $1,919.68 ",
        "gmPercent": "70%"
    },
    {
        "store": "ST035",
        "sku": "SK13952",
        "week": "W04",
        "salesUnits": "138",
        "salesDollars": " $27,598.62 ",
        "costDollars": " $15,979.60 ",
        "gmDollars": " $11,619.02 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK13952",
        "week": "W07",
        "salesUnits": "66",
        "salesDollars": " $13,199.34 ",
        "costDollars": " $7,642.42 ",
        "gmDollars": " $5,556.92 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK13952",
        "week": "W22",
        "salesUnits": "49",
        "salesDollars": " $9,799.51 ",
        "costDollars": " $5,673.92 ",
        "gmDollars": " $4,125.59 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK13952",
        "week": "W25",
        "salesUnits": "110",
        "salesDollars": " $21,998.90 ",
        "costDollars": " $12,737.36 ",
        "gmDollars": " $9,261.54 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK13952",
        "week": "W26",
        "salesUnits": "168",
        "salesDollars": " $33,598.32 ",
        "costDollars": " $19,453.43 ",
        "gmDollars": " $14,144.89 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK13952",
        "week": "W29",
        "salesUnits": "102",
        "salesDollars": " $20,398.98 ",
        "costDollars": " $11,811.01 ",
        "gmDollars": " $8,587.97 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK13952",
        "week": "W38",
        "salesUnits": "63",
        "salesDollars": " $12,599.37 ",
        "costDollars": " $7,295.04 ",
        "gmDollars": " $5,304.33 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK13952",
        "week": "W44",
        "salesUnits": "68",
        "salesDollars": " $13,599.32 ",
        "costDollars": " $7,874.01 ",
        "gmDollars": " $5,725.31 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK13952",
        "week": "W45",
        "salesUnits": "92",
        "salesDollars": " $18,399.08 ",
        "costDollars": " $10,653.07 ",
        "gmDollars": " $7,746.01 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK13952",
        "week": "W47",
        "salesUnits": "18",
        "salesDollars": " $3,599.82 ",
        "costDollars": " $2,084.30 ",
        "gmDollars": " $1,515.52 ",
        "gmPercent": "42%"
    },
    {
        "store": "ST035",
        "sku": "SK13952",
        "week": "W48",
        "salesUnits": "0",
        "salesDollars": " $-   ",
        "costDollars": " $-   ",
        "gmDollars": " $-   ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK14045",
        "week": "W01",
        "salesUnits": "184",
        "salesDollars": " $22,998.16 ",
        "costDollars": " $9,958.20 ",
        "gmDollars": " $13,039.96 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14045",
        "week": "W07",
        "salesUnits": "80",
        "salesDollars": " $9,999.20 ",
        "costDollars": " $4,329.65 ",
        "gmDollars": " $5,669.55 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14045",
        "week": "W15",
        "salesUnits": "126",
        "salesDollars": " $15,748.74 ",
        "costDollars": " $6,819.20 ",
        "gmDollars": " $8,929.54 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14045",
        "week": "W25",
        "salesUnits": "191",
        "salesDollars": " $23,873.09 ",
        "costDollars": " $10,337.05 ",
        "gmDollars": " $13,536.04 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14045",
        "week": "W35",
        "salesUnits": "187",
        "salesDollars": " $23,373.13 ",
        "costDollars": " $10,120.57 ",
        "gmDollars": " $13,252.56 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14045",
        "week": "W37",
        "salesUnits": "145",
        "salesDollars": " $18,123.55 ",
        "costDollars": " $7,847.50 ",
        "gmDollars": " $10,276.05 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14045",
        "week": "W38",
        "salesUnits": "46",
        "salesDollars": " $5,749.54 ",
        "costDollars": " $2,489.55 ",
        "gmDollars": " $3,259.99 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14045",
        "week": "W47",
        "salesUnits": "49",
        "salesDollars": " $6,124.51 ",
        "costDollars": " $2,651.91 ",
        "gmDollars": " $3,472.60 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14045",
        "week": "W48",
        "salesUnits": "169",
        "salesDollars": " $21,123.31 ",
        "costDollars": " $9,146.39 ",
        "gmDollars": " $11,976.92 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14045",
        "week": "W51",
        "salesUnits": "12",
        "salesDollars": " $1,499.88 ",
        "costDollars": " $649.45 ",
        "gmDollars": " $850.43 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W11",
        "salesUnits": "126",
        "salesDollars": " $2,518.74 ",
        "costDollars": " $455.89 ",
        "gmDollars": " $2,062.85 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W15",
        "salesUnits": "62",
        "salesDollars": " $1,239.38 ",
        "costDollars": " $224.33 ",
        "gmDollars": " $1,015.05 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W17",
        "salesUnits": "56",
        "salesDollars": " $1,119.44 ",
        "costDollars": " $202.62 ",
        "gmDollars": " $916.82 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W18",
        "salesUnits": "117",
        "salesDollars": " $2,338.83 ",
        "costDollars": " $423.33 ",
        "gmDollars": " $1,915.50 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W19",
        "salesUnits": "33",
        "salesDollars": " $659.67 ",
        "costDollars": " $119.40 ",
        "gmDollars": " $540.27 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W21",
        "salesUnits": "83",
        "salesDollars": " $1,659.17 ",
        "costDollars": " $300.31 ",
        "gmDollars": " $1,358.86 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W24",
        "salesUnits": "85",
        "salesDollars": " $1,699.15 ",
        "costDollars": " $307.55 ",
        "gmDollars": " $1,391.60 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W26",
        "salesUnits": "18",
        "salesDollars": " $359.82 ",
        "costDollars": " $65.13 ",
        "gmDollars": " $294.69 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W27",
        "salesUnits": "104",
        "salesDollars": " $2,078.96 ",
        "costDollars": " $376.29 ",
        "gmDollars": " $1,702.67 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W28",
        "salesUnits": "29",
        "salesDollars": " $579.71 ",
        "costDollars": " $104.93 ",
        "gmDollars": " $474.78 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W30",
        "salesUnits": "20",
        "salesDollars": " $399.80 ",
        "costDollars": " $72.36 ",
        "gmDollars": " $327.44 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W34",
        "salesUnits": "44",
        "salesDollars": " $879.56 ",
        "costDollars": " $159.20 ",
        "gmDollars": " $720.36 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W38",
        "salesUnits": "7",
        "salesDollars": " $139.93 ",
        "costDollars": " $25.33 ",
        "gmDollars": " $114.60 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W42",
        "salesUnits": "112",
        "salesDollars": " $2,238.88 ",
        "costDollars": " $405.24 ",
        "gmDollars": " $1,833.64 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W43",
        "salesUnits": "102",
        "salesDollars": " $2,038.98 ",
        "costDollars": " $369.06 ",
        "gmDollars": " $1,669.92 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W47",
        "salesUnits": "152",
        "salesDollars": " $3,038.48 ",
        "costDollars": " $549.96 ",
        "gmDollars": " $2,488.52 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14051",
        "week": "W49",
        "salesUnits": "191",
        "salesDollars": " $3,818.09 ",
        "costDollars": " $691.07 ",
        "gmDollars": " $3,127.02 ",
        "gmPercent": "82%"
    },
    {
        "store": "ST035",
        "sku": "SK14104",
        "week": "W04",
        "salesUnits": "135",
        "salesDollars": " $20,923.65 ",
        "costDollars": " $16,592.45 ",
        "gmDollars": " $4,331.20 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK14104",
        "week": "W05",
        "salesUnits": "125",
        "salesDollars": " $19,373.75 ",
        "costDollars": " $15,363.38 ",
        "gmDollars": " $4,010.37 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK14104",
        "week": "W06",
        "salesUnits": "138",
        "salesDollars": " $21,388.62 ",
        "costDollars": " $16,961.18 ",
        "gmDollars": " $4,427.44 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK14104",
        "week": "W08",
        "salesUnits": "162",
        "salesDollars": " $25,108.38 ",
        "costDollars": " $19,910.95 ",
        "gmDollars": " $5,197.43 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK14104",
        "week": "W10",
        "salesUnits": "32",
        "salesDollars": " $4,959.68 ",
        "costDollars": " $3,933.03 ",
        "gmDollars": " $1,026.65 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK14104",
        "week": "W11",
        "salesUnits": "87",
        "salesDollars": " $13,484.13 ",
        "costDollars": " $10,692.92 ",
        "gmDollars": " $2,791.21 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK14104",
        "week": "W13",
        "salesUnits": "30",
        "salesDollars": " $4,649.70 ",
        "costDollars": " $3,687.21 ",
        "gmDollars": " $962.49 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK14104",
        "week": "W22",
        "salesUnits": "58",
        "salesDollars": " $8,989.42 ",
        "costDollars": " $7,128.61 ",
        "gmDollars": " $1,860.81 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK14104",
        "week": "W31",
        "salesUnits": "130",
        "salesDollars": " $20,148.70 ",
        "costDollars": " $15,977.92 ",
        "gmDollars": " $4,170.78 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK14104",
        "week": "W32",
        "salesUnits": "100",
        "salesDollars": " $15,499.00 ",
        "costDollars": " $12,290.71 ",
        "gmDollars": " $3,208.29 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W05",
        "salesUnits": "112",
        "salesDollars": " $3,918.88 ",
        "costDollars": " $462.43 ",
        "gmDollars": " $3,456.45 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W06",
        "salesUnits": "57",
        "salesDollars": " $1,994.43 ",
        "costDollars": " $235.34 ",
        "gmDollars": " $1,759.09 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W19",
        "salesUnits": "63",
        "salesDollars": " $2,204.37 ",
        "costDollars": " $260.12 ",
        "gmDollars": " $1,944.25 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W25",
        "salesUnits": "61",
        "salesDollars": " $2,134.39 ",
        "costDollars": " $251.86 ",
        "gmDollars": " $1,882.53 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W29",
        "salesUnits": "168",
        "salesDollars": " $5,878.32 ",
        "costDollars": " $693.64 ",
        "gmDollars": " $5,184.68 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W34",
        "salesUnits": "70",
        "salesDollars": " $2,449.30 ",
        "costDollars": " $289.02 ",
        "gmDollars": " $2,160.28 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W35",
        "salesUnits": "33",
        "salesDollars": " $1,154.67 ",
        "costDollars": " $136.25 ",
        "gmDollars": " $1,018.42 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W40",
        "salesUnits": "141",
        "salesDollars": " $4,933.59 ",
        "costDollars": " $582.16 ",
        "gmDollars": " $4,351.43 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W43",
        "salesUnits": "77",
        "salesDollars": " $2,694.23 ",
        "costDollars": " $317.92 ",
        "gmDollars": " $2,376.31 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W44",
        "salesUnits": "60",
        "salesDollars": " $2,099.40 ",
        "costDollars": " $247.73 ",
        "gmDollars": " $1,851.67 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W47",
        "salesUnits": "14",
        "salesDollars": " $489.86 ",
        "costDollars": " $57.80 ",
        "gmDollars": " $432.06 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14223",
        "week": "W52",
        "salesUnits": "170",
        "salesDollars": " $5,948.30 ",
        "costDollars": " $701.90 ",
        "gmDollars": " $5,246.40 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14232",
        "week": "W01",
        "salesUnits": "49",
        "salesDollars": " $5,634.51 ",
        "costDollars": " $2,434.11 ",
        "gmDollars": " $3,200.40 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14232",
        "week": "W08",
        "salesUnits": "195",
        "salesDollars": " $22,423.05 ",
        "costDollars": " $9,686.76 ",
        "gmDollars": " $12,736.29 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14232",
        "week": "W14",
        "salesUnits": "180",
        "salesDollars": " $20,698.20 ",
        "costDollars": " $8,941.62 ",
        "gmDollars": " $11,756.58 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14232",
        "week": "W17",
        "salesUnits": "112",
        "salesDollars": " $12,878.88 ",
        "costDollars": " $5,563.68 ",
        "gmDollars": " $7,315.20 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14232",
        "week": "W18",
        "salesUnits": "89",
        "salesDollars": " $10,234.11 ",
        "costDollars": " $4,421.14 ",
        "gmDollars": " $5,812.97 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14232",
        "week": "W29",
        "salesUnits": "86",
        "salesDollars": " $9,889.14 ",
        "costDollars": " $4,272.11 ",
        "gmDollars": " $5,617.03 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14232",
        "week": "W39",
        "salesUnits": "19",
        "salesDollars": " $2,184.81 ",
        "costDollars": " $943.84 ",
        "gmDollars": " $1,240.97 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14232",
        "week": "W40",
        "salesUnits": "74",
        "salesDollars": " $8,509.26 ",
        "costDollars": " $3,676.00 ",
        "gmDollars": " $4,833.26 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14232",
        "week": "W51",
        "salesUnits": "92",
        "salesDollars": " $10,579.08 ",
        "costDollars": " $4,570.16 ",
        "gmDollars": " $6,008.92 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK14409",
        "week": "W35",
        "salesUnits": "45",
        "salesDollars": " $7,424.55 ",
        "costDollars": " $2,836.18 ",
        "gmDollars": " $4,588.37 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK14409",
        "week": "W38",
        "salesUnits": "37",
        "salesDollars": " $6,104.63 ",
        "costDollars": " $2,331.97 ",
        "gmDollars": " $3,772.66 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK14409",
        "week": "W42",
        "salesUnits": "2",
        "salesDollars": " $329.98 ",
        "costDollars": " $126.05 ",
        "gmDollars": " $203.93 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK14409",
        "week": "W43",
        "salesUnits": "21",
        "salesDollars": " $3,464.79 ",
        "costDollars": " $1,323.55 ",
        "gmDollars": " $2,141.24 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK14409",
        "week": "W50",
        "salesUnits": "163",
        "salesDollars": " $26,893.37 ",
        "costDollars": " $10,273.27 ",
        "gmDollars": " $16,620.10 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK14424",
        "week": "W03",
        "salesUnits": "181",
        "salesDollars": " $26,243.19 ",
        "costDollars": " $3,122.94 ",
        "gmDollars": " $23,120.25 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14424",
        "week": "W13",
        "salesUnits": "183",
        "salesDollars": " $26,533.17 ",
        "costDollars": " $3,157.45 ",
        "gmDollars": " $23,375.72 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14424",
        "week": "W19",
        "salesUnits": "166",
        "salesDollars": " $24,068.34 ",
        "costDollars": " $2,864.13 ",
        "gmDollars": " $21,204.21 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14424",
        "week": "W31",
        "salesUnits": "192",
        "salesDollars": " $27,838.08 ",
        "costDollars": " $3,312.73 ",
        "gmDollars": " $24,525.35 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14424",
        "week": "W33",
        "salesUnits": "26",
        "salesDollars": " $3,769.74 ",
        "costDollars": " $448.60 ",
        "gmDollars": " $3,321.14 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14424",
        "week": "W40",
        "salesUnits": "196",
        "salesDollars": " $28,418.04 ",
        "costDollars": " $3,381.75 ",
        "gmDollars": " $25,036.29 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14424",
        "week": "W41",
        "salesUnits": "122",
        "salesDollars": " $17,688.78 ",
        "costDollars": " $2,104.96 ",
        "gmDollars": " $15,583.82 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14424",
        "week": "W46",
        "salesUnits": "6",
        "salesDollars": " $869.94 ",
        "costDollars": " $103.52 ",
        "gmDollars": " $766.42 ",
        "gmPercent": "88%"
    },
    {
        "store": "ST035",
        "sku": "SK14528",
        "week": "W08",
        "salesUnits": "194",
        "salesDollars": " $22,308.06 ",
        "costDollars": " $8,053.21 ",
        "gmDollars": " $14,254.85 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK14528",
        "week": "W10",
        "salesUnits": "174",
        "salesDollars": " $20,008.26 ",
        "costDollars": " $7,222.98 ",
        "gmDollars": " $12,785.28 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK14528",
        "week": "W12",
        "salesUnits": "64",
        "salesDollars": " $7,359.36 ",
        "costDollars": " $2,656.73 ",
        "gmDollars": " $4,702.63 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK14528",
        "week": "W18",
        "salesUnits": "147",
        "salesDollars": " $16,903.53 ",
        "costDollars": " $6,102.17 ",
        "gmDollars": " $10,801.36 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK14528",
        "week": "W30",
        "salesUnits": "100",
        "salesDollars": " $11,499.00 ",
        "costDollars": " $4,151.14 ",
        "gmDollars": " $7,347.86 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK14528",
        "week": "W35",
        "salesUnits": "89",
        "salesDollars": " $10,234.11 ",
        "costDollars": " $3,694.51 ",
        "gmDollars": " $6,539.60 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK14528",
        "week": "W48",
        "salesUnits": "143",
        "salesDollars": " $16,443.57 ",
        "costDollars": " $5,936.13 ",
        "gmDollars": " $10,507.44 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK14528",
        "week": "W52",
        "salesUnits": "149",
        "salesDollars": " $17,133.51 ",
        "costDollars": " $6,185.20 ",
        "gmDollars": " $10,948.31 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK14566",
        "week": "W08",
        "salesUnits": "4",
        "salesDollars": " $739.96 ",
        "costDollars": " $775.48 ",
        "gmDollars": " $(35.52)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK14566",
        "week": "W20",
        "salesUnits": "15",
        "salesDollars": " $2,774.85 ",
        "costDollars": " $2,908.04 ",
        "gmDollars": " $(133.19)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK14566",
        "week": "W23",
        "salesUnits": "24",
        "salesDollars": " $4,439.76 ",
        "costDollars": " $4,652.87 ",
        "gmDollars": " $(213.11)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK14566",
        "week": "W29",
        "salesUnits": "104",
        "salesDollars": " $19,238.96 ",
        "costDollars": " $20,162.43 ",
        "gmDollars": " $(923.47)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK14566",
        "week": "W34",
        "salesUnits": "168",
        "salesDollars": " $31,078.32 ",
        "costDollars": " $32,570.08 ",
        "gmDollars": " $(1,491.76)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK14566",
        "week": "W36",
        "salesUnits": "146",
        "salesDollars": " $27,008.54 ",
        "costDollars": " $28,304.95 ",
        "gmDollars": " $(1,296.41)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK14566",
        "week": "W39",
        "salesUnits": "25",
        "salesDollars": " $4,624.75 ",
        "costDollars": " $4,846.74 ",
        "gmDollars": " $(221.99)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK14566",
        "week": "W43",
        "salesUnits": "102",
        "salesDollars": " $18,868.98 ",
        "costDollars": " $19,774.69 ",
        "gmDollars": " $(905.71)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK14566",
        "week": "W47",
        "salesUnits": "59",
        "salesDollars": " $10,914.41 ",
        "costDollars": " $11,438.30 ",
        "gmDollars": " $(523.89)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK14566",
        "week": "W50",
        "salesUnits": "75",
        "salesDollars": " $13,874.25 ",
        "costDollars": " $14,540.21 ",
        "gmDollars": " $(665.96)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK14566",
        "week": "W51",
        "salesUnits": "168",
        "salesDollars": " $31,078.32 ",
        "costDollars": " $32,570.08 ",
        "gmDollars": " $(1,491.76)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W04",
        "salesUnits": "103",
        "salesDollars": " $16,478.97 ",
        "costDollars": " $11,354.01 ",
        "gmDollars": " $5,124.96 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W06",
        "salesUnits": "100",
        "salesDollars": " $15,999.00 ",
        "costDollars": " $11,023.31 ",
        "gmDollars": " $4,975.69 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W10",
        "salesUnits": "21",
        "salesDollars": " $3,359.79 ",
        "costDollars": " $2,314.90 ",
        "gmDollars": " $1,044.89 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W13",
        "salesUnits": "105",
        "salesDollars": " $16,798.95 ",
        "costDollars": " $11,574.48 ",
        "gmDollars": " $5,224.47 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W16",
        "salesUnits": "123",
        "salesDollars": " $19,678.77 ",
        "costDollars": " $13,558.67 ",
        "gmDollars": " $6,120.10 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W17",
        "salesUnits": "51",
        "salesDollars": " $8,159.49 ",
        "costDollars": " $5,621.89 ",
        "gmDollars": " $2,537.60 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W25",
        "salesUnits": "25",
        "salesDollars": " $3,999.75 ",
        "costDollars": " $2,755.83 ",
        "gmDollars": " $1,243.92 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W29",
        "salesUnits": "176",
        "salesDollars": " $28,158.24 ",
        "costDollars": " $19,401.03 ",
        "gmDollars": " $8,757.21 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W31",
        "salesUnits": "91",
        "salesDollars": " $14,559.09 ",
        "costDollars": " $10,031.21 ",
        "gmDollars": " $4,527.88 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W40",
        "salesUnits": "145",
        "salesDollars": " $23,198.55 ",
        "costDollars": " $15,983.80 ",
        "gmDollars": " $7,214.75 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W43",
        "salesUnits": "164",
        "salesDollars": " $26,238.36 ",
        "costDollars": " $18,078.23 ",
        "gmDollars": " $8,160.13 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W47",
        "salesUnits": "85",
        "salesDollars": " $13,599.15 ",
        "costDollars": " $9,369.81 ",
        "gmDollars": " $4,229.34 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14651",
        "week": "W49",
        "salesUnits": "14",
        "salesDollars": " $2,239.86 ",
        "costDollars": " $1,543.26 ",
        "gmDollars": " $696.60 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK14807",
        "week": "W03",
        "salesUnits": "38",
        "salesDollars": " $3,419.62 ",
        "costDollars": " $294.09 ",
        "gmDollars": " $3,125.53 ",
        "gmPercent": "91%"
    },
    {
        "store": "ST035",
        "sku": "SK14807",
        "week": "W19",
        "salesUnits": "119",
        "salesDollars": " $10,708.81 ",
        "costDollars": " $920.96 ",
        "gmDollars": " $9,787.85 ",
        "gmPercent": "91%"
    },
    {
        "store": "ST035",
        "sku": "SK14807",
        "week": "W22",
        "salesUnits": "49",
        "salesDollars": " $4,409.51 ",
        "costDollars": " $379.22 ",
        "gmDollars": " $4,030.29 ",
        "gmPercent": "91%"
    },
    {
        "store": "ST035",
        "sku": "SK14807",
        "week": "W31",
        "salesUnits": "44",
        "salesDollars": " $3,959.56 ",
        "costDollars": " $340.52 ",
        "gmDollars": " $3,619.04 ",
        "gmPercent": "91%"
    },
    {
        "store": "ST035",
        "sku": "SK14807",
        "week": "W32",
        "salesUnits": "62",
        "salesDollars": " $5,579.38 ",
        "costDollars": " $479.83 ",
        "gmDollars": " $5,099.55 ",
        "gmPercent": "91%"
    },
    {
        "store": "ST035",
        "sku": "SK14807",
        "week": "W36",
        "salesUnits": "118",
        "salesDollars": " $10,618.82 ",
        "costDollars": " $913.22 ",
        "gmDollars": " $9,705.60 ",
        "gmPercent": "91%"
    },
    {
        "store": "ST035",
        "sku": "SK14940",
        "week": "W05",
        "salesUnits": "118",
        "salesDollars": " $11,798.82 ",
        "costDollars": " $1,144.49 ",
        "gmDollars": " $10,654.33 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK14940",
        "week": "W12",
        "salesUnits": "163",
        "salesDollars": " $16,298.37 ",
        "costDollars": " $1,580.94 ",
        "gmDollars": " $14,717.43 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK14940",
        "week": "W16",
        "salesUnits": "159",
        "salesDollars": " $15,898.41 ",
        "costDollars": " $1,542.15 ",
        "gmDollars": " $14,356.26 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK14940",
        "week": "W21",
        "salesUnits": "165",
        "salesDollars": " $16,498.35 ",
        "costDollars": " $1,600.34 ",
        "gmDollars": " $14,898.01 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK14940",
        "week": "W35",
        "salesUnits": "65",
        "salesDollars": " $6,499.35 ",
        "costDollars": " $630.44 ",
        "gmDollars": " $5,868.91 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK14940",
        "week": "W37",
        "salesUnits": "44",
        "salesDollars": " $4,399.56 ",
        "costDollars": " $426.76 ",
        "gmDollars": " $3,972.80 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK14940",
        "week": "W41",
        "salesUnits": "165",
        "salesDollars": " $16,498.35 ",
        "costDollars": " $1,600.34 ",
        "gmDollars": " $14,898.01 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK14940",
        "week": "W46",
        "salesUnits": "96",
        "salesDollars": " $9,599.04 ",
        "costDollars": " $931.11 ",
        "gmDollars": " $8,667.93 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK14940",
        "week": "W52",
        "salesUnits": "1",
        "salesDollars": " $99.99 ",
        "costDollars": " $9.70 ",
        "gmDollars": " $90.29 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W03",
        "salesUnits": "155",
        "salesDollars": " $11,623.45 ",
        "costDollars": " $1,906.25 ",
        "gmDollars": " $9,717.20 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W08",
        "salesUnits": "52",
        "salesDollars": " $3,899.48 ",
        "costDollars": " $639.51 ",
        "gmDollars": " $3,259.97 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W09",
        "salesUnits": "26",
        "salesDollars": " $1,949.74 ",
        "costDollars": " $319.76 ",
        "gmDollars": " $1,629.98 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W18",
        "salesUnits": "40",
        "salesDollars": " $2,999.60 ",
        "costDollars": " $491.93 ",
        "gmDollars": " $2,507.67 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W20",
        "salesUnits": "51",
        "salesDollars": " $3,824.49 ",
        "costDollars": " $627.22 ",
        "gmDollars": " $3,197.27 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W22",
        "salesUnits": "111",
        "salesDollars": " $8,323.89 ",
        "costDollars": " $1,365.12 ",
        "gmDollars": " $6,958.77 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W24",
        "salesUnits": "12",
        "salesDollars": " $899.88 ",
        "costDollars": " $147.58 ",
        "gmDollars": " $752.30 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W25",
        "salesUnits": "60",
        "salesDollars": " $4,499.40 ",
        "costDollars": " $737.90 ",
        "gmDollars": " $3,761.50 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W31",
        "salesUnits": "167",
        "salesDollars": " $12,523.33 ",
        "costDollars": " $2,053.83 ",
        "gmDollars": " $10,469.50 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W35",
        "salesUnits": "151",
        "salesDollars": " $11,323.49 ",
        "costDollars": " $1,857.05 ",
        "gmDollars": " $9,466.44 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W40",
        "salesUnits": "164",
        "salesDollars": " $12,298.36 ",
        "costDollars": " $2,016.93 ",
        "gmDollars": " $10,281.43 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W46",
        "salesUnits": "104",
        "salesDollars": " $7,798.96 ",
        "costDollars": " $1,279.03 ",
        "gmDollars": " $6,519.93 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14945",
        "week": "W47",
        "salesUnits": "129",
        "salesDollars": " $9,673.71 ",
        "costDollars": " $1,586.49 ",
        "gmDollars": " $8,087.22 ",
        "gmPercent": "84%"
    },
    {
        "store": "ST035",
        "sku": "SK14974",
        "week": "W02",
        "salesUnits": "37",
        "salesDollars": " $6,844.63 ",
        "costDollars": " $739.22 ",
        "gmDollars": " $6,105.41 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK14974",
        "week": "W07",
        "salesUnits": "24",
        "salesDollars": " $4,439.76 ",
        "costDollars": " $479.49 ",
        "gmDollars": " $3,960.27 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK14974",
        "week": "W12",
        "salesUnits": "86",
        "salesDollars": " $15,909.14 ",
        "costDollars": " $1,718.19 ",
        "gmDollars": " $14,190.95 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK14974",
        "week": "W32",
        "salesUnits": "89",
        "salesDollars": " $16,464.11 ",
        "costDollars": " $1,778.12 ",
        "gmDollars": " $14,685.99 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK14974",
        "week": "W33",
        "salesUnits": "3",
        "salesDollars": " $554.97 ",
        "costDollars": " $59.94 ",
        "gmDollars": " $495.03 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK14974",
        "week": "W37",
        "salesUnits": "6",
        "salesDollars": " $1,109.94 ",
        "costDollars": " $119.87 ",
        "gmDollars": " $990.07 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK14974",
        "week": "W43",
        "salesUnits": "13",
        "salesDollars": " $2,404.87 ",
        "costDollars": " $259.73 ",
        "gmDollars": " $2,145.14 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK14974",
        "week": "W46",
        "salesUnits": "157",
        "salesDollars": " $29,043.43 ",
        "costDollars": " $3,136.69 ",
        "gmDollars": " $25,906.74 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK14974",
        "week": "W52",
        "salesUnits": "108",
        "salesDollars": " $19,978.92 ",
        "costDollars": " $2,157.72 ",
        "gmDollars": " $17,821.20 ",
        "gmPercent": "89%"
    },
    {
        "store": "ST035",
        "sku": "SK15217",
        "week": "W03",
        "salesUnits": "129",
        "salesDollars": " $12,898.71 ",
        "costDollars": " $11,157.38 ",
        "gmDollars": " $1,741.33 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK15217",
        "week": "W04",
        "salesUnits": "118",
        "salesDollars": " $11,798.82 ",
        "costDollars": " $10,205.98 ",
        "gmDollars": " $1,592.84 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK15217",
        "week": "W13",
        "salesUnits": "180",
        "salesDollars": " $17,998.20 ",
        "costDollars": " $15,568.44 ",
        "gmDollars": " $2,429.76 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK15217",
        "week": "W15",
        "salesUnits": "97",
        "salesDollars": " $9,699.03 ",
        "costDollars": " $8,389.66 ",
        "gmDollars": " $1,309.37 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK15217",
        "week": "W21",
        "salesUnits": "7",
        "salesDollars": " $699.93 ",
        "costDollars": " $605.44 ",
        "gmDollars": " $94.49 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK15217",
        "week": "W23",
        "salesUnits": "87",
        "salesDollars": " $8,699.13 ",
        "costDollars": " $7,524.75 ",
        "gmDollars": " $1,174.38 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK15217",
        "week": "W28",
        "salesUnits": "182",
        "salesDollars": " $18,198.18 ",
        "costDollars": " $15,741.43 ",
        "gmDollars": " $2,456.75 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK15217",
        "week": "W43",
        "salesUnits": "187",
        "salesDollars": " $18,698.13 ",
        "costDollars": " $16,173.88 ",
        "gmDollars": " $2,524.25 ",
        "gmPercent": "14%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W02",
        "salesUnits": "21",
        "salesDollars": " $1,679.79 ",
        "costDollars": " $959.16 ",
        "gmDollars": " $720.63 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W08",
        "salesUnits": "160",
        "salesDollars": " $12,798.40 ",
        "costDollars": " $7,307.89 ",
        "gmDollars": " $5,490.51 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W10",
        "salesUnits": "47",
        "salesDollars": " $3,759.53 ",
        "costDollars": " $2,146.69 ",
        "gmDollars": " $1,612.84 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W15",
        "salesUnits": "136",
        "salesDollars": " $10,878.64 ",
        "costDollars": " $6,211.70 ",
        "gmDollars": " $4,666.94 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W22",
        "salesUnits": "125",
        "salesDollars": " $9,998.75 ",
        "costDollars": " $5,709.29 ",
        "gmDollars": " $4,289.46 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W28",
        "salesUnits": "72",
        "salesDollars": " $5,759.28 ",
        "costDollars": " $3,288.55 ",
        "gmDollars": " $2,470.73 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W32",
        "salesUnits": "11",
        "salesDollars": " $879.89 ",
        "costDollars": " $502.42 ",
        "gmDollars": " $377.47 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W33",
        "salesUnits": "185",
        "salesDollars": " $14,798.15 ",
        "costDollars": " $8,449.74 ",
        "gmDollars": " $6,348.41 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W34",
        "salesUnits": "137",
        "salesDollars": " $10,958.63 ",
        "costDollars": " $6,257.38 ",
        "gmDollars": " $4,701.25 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W41",
        "salesUnits": "57",
        "salesDollars": " $4,559.43 ",
        "costDollars": " $2,603.43 ",
        "gmDollars": " $1,956.00 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W44",
        "salesUnits": "71",
        "salesDollars": " $5,679.29 ",
        "costDollars": " $3,242.87 ",
        "gmDollars": " $2,436.42 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W47",
        "salesUnits": "137",
        "salesDollars": " $10,958.63 ",
        "costDollars": " $6,257.38 ",
        "gmDollars": " $4,701.25 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15290",
        "week": "W52",
        "salesUnits": "172",
        "salesDollars": " $13,758.28 ",
        "costDollars": " $7,855.98 ",
        "gmDollars": " $5,902.30 ",
        "gmPercent": "43%"
    },
    {
        "store": "ST035",
        "sku": "SK15291",
        "week": "W03",
        "salesUnits": "94",
        "salesDollars": " $10,809.06 ",
        "costDollars": " $4,972.17 ",
        "gmDollars": " $5,836.89 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK15291",
        "week": "W04",
        "salesUnits": "39",
        "salesDollars": " $4,484.61 ",
        "costDollars": " $2,062.92 ",
        "gmDollars": " $2,421.69 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK15291",
        "week": "W22",
        "salesUnits": "174",
        "salesDollars": " $20,008.26 ",
        "costDollars": " $9,203.80 ",
        "gmDollars": " $10,804.46 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK15291",
        "week": "W24",
        "salesUnits": "154",
        "salesDollars": " $17,708.46 ",
        "costDollars": " $8,145.89 ",
        "gmDollars": " $9,562.57 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK15291",
        "week": "W28",
        "salesUnits": "197",
        "salesDollars": " $22,653.03 ",
        "costDollars": " $10,420.39 ",
        "gmDollars": " $12,232.64 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK15291",
        "week": "W29",
        "salesUnits": "121",
        "salesDollars": " $13,913.79 ",
        "costDollars": " $6,400.34 ",
        "gmDollars": " $7,513.45 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK15291",
        "week": "W37",
        "salesUnits": "88",
        "salesDollars": " $10,119.12 ",
        "costDollars": " $4,654.80 ",
        "gmDollars": " $5,464.32 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK15291",
        "week": "W39",
        "salesUnits": "38",
        "salesDollars": " $4,369.62 ",
        "costDollars": " $2,010.03 ",
        "gmDollars": " $2,359.59 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK15291",
        "week": "W48",
        "salesUnits": "148",
        "salesDollars": " $17,018.52 ",
        "costDollars": " $7,828.52 ",
        "gmDollars": " $9,190.00 ",
        "gmPercent": "54%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W01",
        "salesUnits": "58",
        "salesDollars": " $11,599.42 ",
        "costDollars": " $4,686.17 ",
        "gmDollars": " $6,913.25 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W05",
        "salesUnits": "154",
        "salesDollars": " $30,798.46 ",
        "costDollars": " $12,442.58 ",
        "gmDollars": " $18,355.88 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W06",
        "salesUnits": "189",
        "salesDollars": " $37,798.11 ",
        "costDollars": " $15,270.44 ",
        "gmDollars": " $22,527.67 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W10",
        "salesUnits": "16",
        "salesDollars": " $3,199.84 ",
        "costDollars": " $1,292.74 ",
        "gmDollars": " $1,907.10 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W18",
        "salesUnits": "107",
        "salesDollars": " $21,398.93 ",
        "costDollars": " $8,645.17 ",
        "gmDollars": " $12,753.76 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W20",
        "salesUnits": "100",
        "salesDollars": " $19,999.00 ",
        "costDollars": " $8,079.60 ",
        "gmDollars": " $11,919.40 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W21",
        "salesUnits": "108",
        "salesDollars": " $21,598.92 ",
        "costDollars": " $8,725.96 ",
        "gmDollars": " $12,872.96 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W23",
        "salesUnits": "0",
        "salesDollars": " $-   ",
        "costDollars": " $-   ",
        "gmDollars": " $-   ",
        "gmPercent": "0%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W33",
        "salesUnits": "81",
        "salesDollars": " $16,199.19 ",
        "costDollars": " $6,544.47 ",
        "gmDollars": " $9,654.72 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W37",
        "salesUnits": "42",
        "salesDollars": " $8,399.58 ",
        "costDollars": " $3,393.43 ",
        "gmDollars": " $5,006.15 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W42",
        "salesUnits": "113",
        "salesDollars": " $22,598.87 ",
        "costDollars": " $9,129.94 ",
        "gmDollars": " $13,468.93 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W44",
        "salesUnits": "50",
        "salesDollars": " $9,999.50 ",
        "costDollars": " $4,039.80 ",
        "gmDollars": " $5,959.70 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15526",
        "week": "W52",
        "salesUnits": "102",
        "salesDollars": " $20,398.98 ",
        "costDollars": " $8,241.19 ",
        "gmDollars": " $12,157.79 ",
        "gmPercent": "60%"
    },
    {
        "store": "ST035",
        "sku": "SK15631",
        "week": "W07",
        "salesUnits": "46",
        "salesDollars": " $7,589.54 ",
        "costDollars": " $4,910.43 ",
        "gmDollars": " $2,679.11 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK15631",
        "week": "W08",
        "salesUnits": "52",
        "salesDollars": " $8,579.48 ",
        "costDollars": " $5,550.92 ",
        "gmDollars": " $3,028.56 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK15631",
        "week": "W13",
        "salesUnits": "32",
        "salesDollars": " $5,279.68 ",
        "costDollars": " $3,415.95 ",
        "gmDollars": " $1,863.73 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK15631",
        "week": "W21",
        "salesUnits": "42",
        "salesDollars": " $6,929.58 ",
        "costDollars": " $4,483.44 ",
        "gmDollars": " $2,446.14 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK15631",
        "week": "W22",
        "salesUnits": "154",
        "salesDollars": " $25,408.46 ",
        "costDollars": " $16,439.27 ",
        "gmDollars": " $8,969.19 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK15631",
        "week": "W34",
        "salesUnits": "44",
        "salesDollars": " $7,259.56 ",
        "costDollars": " $4,696.94 ",
        "gmDollars": " $2,562.62 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK15631",
        "week": "W36",
        "salesUnits": "105",
        "salesDollars": " $17,323.95 ",
        "costDollars": " $11,208.60 ",
        "gmDollars": " $6,115.35 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK15631",
        "week": "W38",
        "salesUnits": "133",
        "salesDollars": " $21,943.67 ",
        "costDollars": " $14,197.55 ",
        "gmDollars": " $7,746.12 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK15631",
        "week": "W45",
        "salesUnits": "196",
        "salesDollars": " $32,338.04 ",
        "costDollars": " $20,922.71 ",
        "gmDollars": " $11,415.33 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK15631",
        "week": "W49",
        "salesUnits": "13",
        "salesDollars": " $2,144.87 ",
        "costDollars": " $1,387.73 ",
        "gmDollars": " $757.14 ",
        "gmPercent": "35%"
    },
    {
        "store": "ST035",
        "sku": "SK15722",
        "week": "W16",
        "salesUnits": "141",
        "salesDollars": " $14,098.59 ",
        "costDollars": " $12,942.51 ",
        "gmDollars": " $1,156.08 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK15722",
        "week": "W23",
        "salesUnits": "174",
        "salesDollars": " $17,398.26 ",
        "costDollars": " $15,971.60 ",
        "gmDollars": " $1,426.66 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK15722",
        "week": "W26",
        "salesUnits": "161",
        "salesDollars": " $16,098.39 ",
        "costDollars": " $14,778.32 ",
        "gmDollars": " $1,320.07 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK15722",
        "week": "W45",
        "salesUnits": "40",
        "salesDollars": " $3,999.60 ",
        "costDollars": " $3,671.63 ",
        "gmDollars": " $327.97 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK15722",
        "week": "W50",
        "salesUnits": "64",
        "salesDollars": " $6,399.36 ",
        "costDollars": " $5,874.61 ",
        "gmDollars": " $524.75 ",
        "gmPercent": "8%"
    },
    {
        "store": "ST035",
        "sku": "SK15739",
        "week": "W03",
        "salesUnits": "31",
        "salesDollars": " $2,014.69 ",
        "costDollars": " $2,149.67 ",
        "gmDollars": " $(134.98)",
        "gmPercent": "-7%"
    },
    {
        "store": "ST035",
        "sku": "SK15739",
        "week": "W06",
        "salesUnits": "82",
        "salesDollars": " $5,329.18 ",
        "costDollars": " $5,686.24 ",
        "gmDollars": " $(357.06)",
        "gmPercent": "-7%"
    },
    {
        "store": "ST035",
        "sku": "SK15739",
        "week": "W11",
        "salesUnits": "162",
        "salesDollars": " $10,528.38 ",
        "costDollars": " $11,233.78 ",
        "gmDollars": " $(705.40)",
        "gmPercent": "-7%"
    },
    {
        "store": "ST035",
        "sku": "SK15739",
        "week": "W20",
        "salesUnits": "131",
        "salesDollars": " $8,513.69 ",
        "costDollars": " $9,084.11 ",
        "gmDollars": " $(570.42)",
        "gmPercent": "-7%"
    },
    {
        "store": "ST035",
        "sku": "SK15739",
        "week": "W22",
        "salesUnits": "61",
        "salesDollars": " $3,964.39 ",
        "costDollars": " $4,230.00 ",
        "gmDollars": " $(265.61)",
        "gmPercent": "-7%"
    },
    {
        "store": "ST035",
        "sku": "SK15739",
        "week": "W29",
        "salesUnits": "48",
        "salesDollars": " $3,119.52 ",
        "costDollars": " $3,328.53 ",
        "gmDollars": " $(209.01)",
        "gmPercent": "-7%"
    },
    {
        "store": "ST035",
        "sku": "SK15739",
        "week": "W36",
        "salesUnits": "131",
        "salesDollars": " $8,513.69 ",
        "costDollars": " $9,084.11 ",
        "gmDollars": " $(570.42)",
        "gmPercent": "-7%"
    },
    {
        "store": "ST035",
        "sku": "SK15739",
        "week": "W43",
        "salesUnits": "58",
        "salesDollars": " $3,769.42 ",
        "costDollars": " $4,021.97 ",
        "gmDollars": " $(252.55)",
        "gmPercent": "-7%"
    },
    {
        "store": "ST035",
        "sku": "SK15739",
        "week": "W44",
        "salesUnits": "113",
        "salesDollars": " $7,343.87 ",
        "costDollars": " $7,835.91 ",
        "gmDollars": " $(492.04)",
        "gmPercent": "-7%"
    },
    {
        "store": "ST035",
        "sku": "SK15761",
        "week": "W05",
        "salesUnits": "113",
        "salesDollars": " $8,473.87 ",
        "costDollars": " $8,075.60 ",
        "gmDollars": " $398.27 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK15761",
        "week": "W07",
        "salesUnits": "81",
        "salesDollars": " $6,074.19 ",
        "costDollars": " $5,788.70 ",
        "gmDollars": " $285.49 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK15761",
        "week": "W16",
        "salesUnits": "161",
        "salesDollars": " $12,073.39 ",
        "costDollars": " $11,505.94 ",
        "gmDollars": " $567.45 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK15761",
        "week": "W20",
        "salesUnits": "115",
        "salesDollars": " $8,623.85 ",
        "costDollars": " $8,218.53 ",
        "gmDollars": " $405.32 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK15761",
        "week": "W25",
        "salesUnits": "176",
        "salesDollars": " $13,198.24 ",
        "costDollars": " $12,577.92 ",
        "gmDollars": " $620.32 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK15761",
        "week": "W30",
        "salesUnits": "78",
        "salesDollars": " $5,849.22 ",
        "costDollars": " $5,574.31 ",
        "gmDollars": " $274.91 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK15761",
        "week": "W47",
        "salesUnits": "97",
        "salesDollars": " $7,274.03 ",
        "costDollars": " $6,932.15 ",
        "gmDollars": " $341.88 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK15761",
        "week": "W49",
        "salesUnits": "77",
        "salesDollars": " $5,774.23 ",
        "costDollars": " $5,502.84 ",
        "gmDollars": " $271.39 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK15761",
        "week": "W51",
        "salesUnits": "143",
        "salesDollars": " $10,723.57 ",
        "costDollars": " $10,219.56 ",
        "gmDollars": " $504.01 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK16210",
        "week": "W04",
        "salesUnits": "125",
        "salesDollars": " $14,998.75 ",
        "costDollars": " $14,728.77 ",
        "gmDollars": " $269.98 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK16210",
        "week": "W11",
        "salesUnits": "83",
        "salesDollars": " $9,959.17 ",
        "costDollars": " $9,779.90 ",
        "gmDollars": " $179.27 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK16210",
        "week": "W15",
        "salesUnits": "29",
        "salesDollars": " $3,479.71 ",
        "costDollars": " $3,417.08 ",
        "gmDollars": " $62.63 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK16210",
        "week": "W16",
        "salesUnits": "54",
        "salesDollars": " $6,479.46 ",
        "costDollars": " $6,362.83 ",
        "gmDollars": " $116.63 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK16210",
        "week": "W18",
        "salesUnits": "27",
        "salesDollars": " $3,239.73 ",
        "costDollars": " $3,181.41 ",
        "gmDollars": " $58.32 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK16210",
        "week": "W19",
        "salesUnits": "138",
        "salesDollars": " $16,558.62 ",
        "costDollars": " $16,260.56 ",
        "gmDollars": " $298.06 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK16210",
        "week": "W24",
        "salesUnits": "193",
        "salesDollars": " $23,158.07 ",
        "costDollars": " $22,741.22 ",
        "gmDollars": " $416.85 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK16210",
        "week": "W29",
        "salesUnits": "45",
        "salesDollars": " $5,399.55 ",
        "costDollars": " $5,302.36 ",
        "gmDollars": " $97.19 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK16210",
        "week": "W51",
        "salesUnits": "46",
        "salesDollars": " $5,519.54 ",
        "costDollars": " $5,420.19 ",
        "gmDollars": " $99.35 ",
        "gmPercent": "2%"
    },
    {
        "store": "ST035",
        "sku": "SK16364",
        "week": "W06",
        "salesUnits": "137",
        "salesDollars": " $8,903.63 ",
        "costDollars": " $6,793.47 ",
        "gmDollars": " $2,110.16 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK16364",
        "week": "W13",
        "salesUnits": "56",
        "salesDollars": " $3,639.44 ",
        "costDollars": " $2,776.89 ",
        "gmDollars": " $862.55 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK16364",
        "week": "W20",
        "salesUnits": "104",
        "salesDollars": " $6,758.96 ",
        "costDollars": " $5,157.09 ",
        "gmDollars": " $1,601.87 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK16364",
        "week": "W21",
        "salesUnits": "98",
        "salesDollars": " $6,369.02 ",
        "costDollars": " $4,859.56 ",
        "gmDollars": " $1,509.46 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK16364",
        "week": "W25",
        "salesUnits": "142",
        "salesDollars": " $9,228.58 ",
        "costDollars": " $7,041.41 ",
        "gmDollars": " $2,187.17 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK16364",
        "week": "W36",
        "salesUnits": "186",
        "salesDollars": " $12,088.14 ",
        "costDollars": " $9,223.25 ",
        "gmDollars": " $2,864.89 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK16364",
        "week": "W37",
        "salesUnits": "123",
        "salesDollars": " $7,993.77 ",
        "costDollars": " $6,099.25 ",
        "gmDollars": " $1,894.52 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK16364",
        "week": "W43",
        "salesUnits": "40",
        "salesDollars": " $2,599.60 ",
        "costDollars": " $1,983.49 ",
        "gmDollars": " $616.11 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK16364",
        "week": "W46",
        "salesUnits": "143",
        "salesDollars": " $9,293.57 ",
        "costDollars": " $7,090.99 ",
        "gmDollars": " $2,202.58 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK16364",
        "week": "W47",
        "salesUnits": "73",
        "salesDollars": " $4,744.27 ",
        "costDollars": " $3,619.88 ",
        "gmDollars": " $1,124.39 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK16364",
        "week": "W48",
        "salesUnits": "87",
        "salesDollars": " $5,654.13 ",
        "costDollars": " $4,314.10 ",
        "gmDollars": " $1,340.03 ",
        "gmPercent": "24%"
    },
    {
        "store": "ST035",
        "sku": "SK16370",
        "week": "W08",
        "salesUnits": "138",
        "salesDollars": " $26,218.62 ",
        "costDollars": " $3,959.01 ",
        "gmDollars": " $22,259.61 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16370",
        "week": "W11",
        "salesUnits": "143",
        "salesDollars": " $27,168.57 ",
        "costDollars": " $4,102.45 ",
        "gmDollars": " $23,066.12 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16370",
        "week": "W16",
        "salesUnits": "114",
        "salesDollars": " $21,658.86 ",
        "costDollars": " $3,270.49 ",
        "gmDollars": " $18,388.37 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16370",
        "week": "W22",
        "salesUnits": "61",
        "salesDollars": " $11,589.39 ",
        "costDollars": " $1,750.00 ",
        "gmDollars": " $9,839.39 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16370",
        "week": "W27",
        "salesUnits": "11",
        "salesDollars": " $2,089.89 ",
        "costDollars": " $315.57 ",
        "gmDollars": " $1,774.32 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16370",
        "week": "W28",
        "salesUnits": "101",
        "salesDollars": " $19,188.99 ",
        "costDollars": " $2,897.54 ",
        "gmDollars": " $16,291.45 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16370",
        "week": "W30",
        "salesUnits": "109",
        "salesDollars": " $20,708.91 ",
        "costDollars": " $3,127.05 ",
        "gmDollars": " $17,581.86 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16370",
        "week": "W38",
        "salesUnits": "91",
        "salesDollars": " $17,289.09 ",
        "costDollars": " $2,610.65 ",
        "gmDollars": " $14,678.44 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16370",
        "week": "W48",
        "salesUnits": "166",
        "salesDollars": " $31,538.34 ",
        "costDollars": " $4,762.29 ",
        "gmDollars": " $26,776.05 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16370",
        "week": "W51",
        "salesUnits": "8",
        "salesDollars": " $1,519.92 ",
        "costDollars": " $229.51 ",
        "gmDollars": " $1,290.41 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W05",
        "salesUnits": "112",
        "salesDollars": " $4,478.88 ",
        "costDollars": " $2,355.89 ",
        "gmDollars": " $2,122.99 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W06",
        "salesUnits": "105",
        "salesDollars": " $4,198.95 ",
        "costDollars": " $2,208.65 ",
        "gmDollars": " $1,990.30 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W15",
        "salesUnits": "50",
        "salesDollars": " $1,999.50 ",
        "costDollars": " $1,051.74 ",
        "gmDollars": " $947.76 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W17",
        "salesUnits": "72",
        "salesDollars": " $2,879.28 ",
        "costDollars": " $1,514.50 ",
        "gmDollars": " $1,364.78 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W19",
        "salesUnits": "114",
        "salesDollars": " $4,558.86 ",
        "costDollars": " $2,397.96 ",
        "gmDollars": " $2,160.90 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W21",
        "salesUnits": "179",
        "salesDollars": " $7,158.21 ",
        "costDollars": " $3,765.22 ",
        "gmDollars": " $3,392.99 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W23",
        "salesUnits": "140",
        "salesDollars": " $5,598.60 ",
        "costDollars": " $2,944.86 ",
        "gmDollars": " $2,653.74 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W24",
        "salesUnits": "30",
        "salesDollars": " $1,199.70 ",
        "costDollars": " $631.04 ",
        "gmDollars": " $568.66 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W32",
        "salesUnits": "63",
        "salesDollars": " $2,519.37 ",
        "costDollars": " $1,325.19 ",
        "gmDollars": " $1,194.18 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W41",
        "salesUnits": "73",
        "salesDollars": " $2,919.27 ",
        "costDollars": " $1,535.54 ",
        "gmDollars": " $1,383.73 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W42",
        "salesUnits": "64",
        "salesDollars": " $2,559.36 ",
        "costDollars": " $1,346.22 ",
        "gmDollars": " $1,213.14 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W43",
        "salesUnits": "104",
        "salesDollars": " $4,158.96 ",
        "costDollars": " $2,187.61 ",
        "gmDollars": " $1,971.35 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W46",
        "salesUnits": "108",
        "salesDollars": " $4,318.92 ",
        "costDollars": " $2,271.75 ",
        "gmDollars": " $2,047.17 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W47",
        "salesUnits": "27",
        "salesDollars": " $1,079.73 ",
        "costDollars": " $567.94 ",
        "gmDollars": " $511.79 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W48",
        "salesUnits": "133",
        "salesDollars": " $5,318.67 ",
        "costDollars": " $2,797.62 ",
        "gmDollars": " $2,521.05 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16474",
        "week": "W52",
        "salesUnits": "17",
        "salesDollars": " $679.83 ",
        "costDollars": " $357.59 ",
        "gmDollars": " $322.24 ",
        "gmPercent": "47%"
    },
    {
        "store": "ST035",
        "sku": "SK16642",
        "week": "W05",
        "salesUnits": "187",
        "salesDollars": " $25,243.13 ",
        "costDollars": " $3,887.44 ",
        "gmDollars": " $21,355.69 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16642",
        "week": "W22",
        "salesUnits": "20",
        "salesDollars": " $2,699.80 ",
        "costDollars": " $415.77 ",
        "gmDollars": " $2,284.03 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16642",
        "week": "W37",
        "salesUnits": "156",
        "salesDollars": " $21,058.44 ",
        "costDollars": " $3,243.00 ",
        "gmDollars": " $17,815.44 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16642",
        "week": "W38",
        "salesUnits": "94",
        "salesDollars": " $12,689.06 ",
        "costDollars": " $1,954.12 ",
        "gmDollars": " $10,734.94 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16642",
        "week": "W42",
        "salesUnits": "199",
        "salesDollars": " $26,863.01 ",
        "costDollars": " $4,136.90 ",
        "gmDollars": " $22,726.11 ",
        "gmPercent": "85%"
    },
    {
        "store": "ST035",
        "sku": "SK16722",
        "week": "W12",
        "salesUnits": "33",
        "salesDollars": " $5,114.67 ",
        "costDollars": " $3,703.02 ",
        "gmDollars": " $1,411.65 ",
        "gmPercent": "28%"
    },
    {
        "store": "ST035",
        "sku": "SK16722",
        "week": "W14",
        "salesUnits": "103",
        "salesDollars": " $15,963.97 ",
        "costDollars": " $11,557.91 ",
        "gmDollars": " $4,406.06 ",
        "gmPercent": "28%"
    },
    {
        "store": "ST035",
        "sku": "SK16722",
        "week": "W16",
        "salesUnits": "193",
        "salesDollars": " $29,913.07 ",
        "costDollars": " $21,657.06 ",
        "gmDollars": " $8,256.01 ",
        "gmPercent": "28%"
    },
    {
        "store": "ST035",
        "sku": "SK16722",
        "week": "W30",
        "salesUnits": "110",
        "salesDollars": " $17,048.90 ",
        "costDollars": " $12,343.40 ",
        "gmDollars": " $4,705.50 ",
        "gmPercent": "28%"
    },
    {
        "store": "ST035",
        "sku": "SK16722",
        "week": "W37",
        "salesUnits": "174",
        "salesDollars": " $26,968.26 ",
        "costDollars": " $19,525.02 ",
        "gmDollars": " $7,443.24 ",
        "gmPercent": "28%"
    },
    {
        "store": "ST035",
        "sku": "SK16722",
        "week": "W39",
        "salesUnits": "70",
        "salesDollars": " $10,849.30 ",
        "costDollars": " $7,854.89 ",
        "gmDollars": " $2,994.41 ",
        "gmPercent": "28%"
    },
    {
        "store": "ST035",
        "sku": "SK16722",
        "week": "W43",
        "salesUnits": "6",
        "salesDollars": " $929.94 ",
        "costDollars": " $673.28 ",
        "gmDollars": " $256.66 ",
        "gmPercent": "28%"
    },
    {
        "store": "ST035",
        "sku": "SK16722",
        "week": "W44",
        "salesUnits": "191",
        "salesDollars": " $29,603.09 ",
        "costDollars": " $21,432.64 ",
        "gmDollars": " $8,170.45 ",
        "gmPercent": "28%"
    },
    {
        "store": "ST035",
        "sku": "SK16722",
        "week": "W46",
        "salesUnits": "121",
        "salesDollars": " $18,753.79 ",
        "costDollars": " $13,577.74 ",
        "gmDollars": " $5,176.05 ",
        "gmPercent": "28%"
    },
    {
        "store": "ST035",
        "sku": "SK16722",
        "week": "W52",
        "salesUnits": "23",
        "salesDollars": " $3,564.77 ",
        "costDollars": " $2,580.89 ",
        "gmDollars": " $983.88 ",
        "gmPercent": "28%"
    },
    {
        "store": "ST035",
        "sku": "SK16745",
        "week": "W08",
        "salesUnits": "127",
        "salesDollars": " $3,173.73 ",
        "costDollars": " $2,830.97 ",
        "gmDollars": " $342.76 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK16745",
        "week": "W09",
        "salesUnits": "150",
        "salesDollars": " $3,748.50 ",
        "costDollars": " $3,343.66 ",
        "gmDollars": " $404.84 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK16745",
        "week": "W16",
        "salesUnits": "2",
        "salesDollars": " $49.98 ",
        "costDollars": " $44.58 ",
        "gmDollars": " $5.40 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK16745",
        "week": "W20",
        "salesUnits": "171",
        "salesDollars": " $4,273.29 ",
        "costDollars": " $3,811.77 ",
        "gmDollars": " $461.52 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK16745",
        "week": "W25",
        "salesUnits": "196",
        "salesDollars": " $4,898.04 ",
        "costDollars": " $4,369.05 ",
        "gmDollars": " $528.99 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK16745",
        "week": "W28",
        "salesUnits": "180",
        "salesDollars": " $4,498.20 ",
        "costDollars": " $4,012.39 ",
        "gmDollars": " $485.81 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK16745",
        "week": "W33",
        "salesUnits": "143",
        "salesDollars": " $3,573.57 ",
        "costDollars": " $3,187.62 ",
        "gmDollars": " $385.95 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK16745",
        "week": "W38",
        "salesUnits": "32",
        "salesDollars": " $799.68 ",
        "costDollars": " $713.31 ",
        "gmDollars": " $86.37 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK16745",
        "week": "W40",
        "salesUnits": "192",
        "salesDollars": " $4,798.08 ",
        "costDollars": " $4,279.89 ",
        "gmDollars": " $518.19 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK16745",
        "week": "W46",
        "salesUnits": "15",
        "salesDollars": " $374.85 ",
        "costDollars": " $334.37 ",
        "gmDollars": " $40.48 ",
        "gmPercent": "11%"
    },
    {
        "store": "ST035",
        "sku": "SK16750",
        "week": "W01",
        "salesUnits": "33",
        "salesDollars": " $2,144.67 ",
        "costDollars": " $1,419.77 ",
        "gmDollars": " $724.90 ",
        "gmPercent": "34%"
    },
    {
        "store": "ST035",
        "sku": "SK16750",
        "week": "W06",
        "salesUnits": "37",
        "salesDollars": " $2,404.63 ",
        "costDollars": " $1,591.87 ",
        "gmDollars": " $812.76 ",
        "gmPercent": "34%"
    },
    {
        "store": "ST035",
        "sku": "SK16750",
        "week": "W10",
        "salesUnits": "7",
        "salesDollars": " $454.93 ",
        "costDollars": " $301.16 ",
        "gmDollars": " $153.77 ",
        "gmPercent": "34%"
    },
    {
        "store": "ST035",
        "sku": "SK16750",
        "week": "W11",
        "salesUnits": "58",
        "salesDollars": " $3,769.42 ",
        "costDollars": " $2,495.36 ",
        "gmDollars": " $1,274.06 ",
        "gmPercent": "34%"
    },
    {
        "store": "ST035",
        "sku": "SK16750",
        "week": "W14",
        "salesUnits": "151",
        "salesDollars": " $9,813.49 ",
        "costDollars": " $6,496.53 ",
        "gmDollars": " $3,316.96 ",
        "gmPercent": "34%"
    },
    {
        "store": "ST035",
        "sku": "SK16750",
        "week": "W22",
        "salesUnits": "126",
        "salesDollars": " $8,188.74 ",
        "costDollars": " $5,420.95 ",
        "gmDollars": " $2,767.79 ",
        "gmPercent": "34%"
    },
    {
        "store": "ST035",
        "sku": "SK16750",
        "week": "W25",
        "salesUnits": "49",
        "salesDollars": " $3,184.51 ",
        "costDollars": " $2,108.15 ",
        "gmDollars": " $1,076.36 ",
        "gmPercent": "34%"
    },
    {
        "store": "ST035",
        "sku": "SK16750",
        "week": "W32",
        "salesUnits": "59",
        "salesDollars": " $3,834.41 ",
        "costDollars": " $2,538.38 ",
        "gmDollars": " $1,296.03 ",
        "gmPercent": "34%"
    },
    {
        "store": "ST035",
        "sku": "SK16750",
        "week": "W35",
        "salesUnits": "34",
        "salesDollars": " $2,209.66 ",
        "costDollars": " $1,462.79 ",
        "gmDollars": " $746.87 ",
        "gmPercent": "34%"
    },
    {
        "store": "ST035",
        "sku": "SK16750",
        "week": "W40",
        "salesUnits": "53",
        "salesDollars": " $3,444.47 ",
        "costDollars": " $2,280.24 ",
        "gmDollars": " $1,164.23 ",
        "gmPercent": "34%"
    },
    {
        "store": "ST035",
        "sku": "SK16750",
        "week": "W48",
        "salesUnits": "104",
        "salesDollars": " $6,758.96 ",
        "costDollars": " $4,474.43 ",
        "gmDollars": " $2,284.53 ",
        "gmPercent": "34%"
    },
    {
        "store": "ST035",
        "sku": "SK16871",
        "week": "W05",
        "salesUnits": "181",
        "salesDollars": " $1,808.19 ",
        "costDollars": " $144.66 ",
        "gmDollars": " $1,663.53 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK16871",
        "week": "W06",
        "salesUnits": "29",
        "salesDollars": " $289.71 ",
        "costDollars": " $23.18 ",
        "gmDollars": " $266.53 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK16871",
        "week": "W19",
        "salesUnits": "113",
        "salesDollars": " $1,128.87 ",
        "costDollars": " $90.31 ",
        "gmDollars": " $1,038.56 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK16871",
        "week": "W25",
        "salesUnits": "5",
        "salesDollars": " $49.95 ",
        "costDollars": " $4.00 ",
        "gmDollars": " $45.95 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK16871",
        "week": "W31",
        "salesUnits": "62",
        "salesDollars": " $619.38 ",
        "costDollars": " $49.55 ",
        "gmDollars": " $569.83 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK16871",
        "week": "W47",
        "salesUnits": "135",
        "salesDollars": " $1,348.65 ",
        "costDollars": " $107.89 ",
        "gmDollars": " $1,240.76 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK16871",
        "week": "W52",
        "salesUnits": "153",
        "salesDollars": " $1,528.47 ",
        "costDollars": " $122.28 ",
        "gmDollars": " $1,406.19 ",
        "gmPercent": "92%"
    },
    {
        "store": "ST035",
        "sku": "SK17623",
        "week": "W06",
        "salesUnits": "145",
        "salesDollars": " $19,573.55 ",
        "costDollars": " $6,968.18 ",
        "gmDollars": " $12,605.37 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK17623",
        "week": "W07",
        "salesUnits": "145",
        "salesDollars": " $19,573.55 ",
        "costDollars": " $6,968.18 ",
        "gmDollars": " $12,605.37 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK17623",
        "week": "W08",
        "salesUnits": "4",
        "salesDollars": " $539.96 ",
        "costDollars": " $192.23 ",
        "gmDollars": " $347.73 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK17623",
        "week": "W10",
        "salesUnits": "166",
        "salesDollars": " $22,408.34 ",
        "costDollars": " $7,977.37 ",
        "gmDollars": " $14,430.97 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK17623",
        "week": "W23",
        "salesUnits": "149",
        "salesDollars": " $20,113.51 ",
        "costDollars": " $7,160.41 ",
        "gmDollars": " $12,953.10 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK17623",
        "week": "W28",
        "salesUnits": "112",
        "salesDollars": " $15,118.88 ",
        "costDollars": " $5,382.32 ",
        "gmDollars": " $9,736.56 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK17623",
        "week": "W38",
        "salesUnits": "22",
        "salesDollars": " $2,969.78 ",
        "costDollars": " $1,057.24 ",
        "gmDollars": " $1,912.54 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK17623",
        "week": "W43",
        "salesUnits": "78",
        "salesDollars": " $10,529.22 ",
        "costDollars": " $3,748.40 ",
        "gmDollars": " $6,780.82 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK17623",
        "week": "W45",
        "salesUnits": "129",
        "salesDollars": " $17,413.71 ",
        "costDollars": " $6,199.28 ",
        "gmDollars": " $11,214.43 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK17623",
        "week": "W47",
        "salesUnits": "6",
        "salesDollars": " $809.94 ",
        "costDollars": " $288.34 ",
        "gmDollars": " $521.60 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK17623",
        "week": "W50",
        "salesUnits": "29",
        "salesDollars": " $3,914.71 ",
        "costDollars": " $1,393.64 ",
        "gmDollars": " $2,521.07 ",
        "gmPercent": "64%"
    },
    {
        "store": "ST035",
        "sku": "SK17867",
        "week": "W24",
        "salesUnits": "13",
        "salesDollars": " $129.87 ",
        "costDollars": " $102.08 ",
        "gmDollars": " $27.79 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK17867",
        "week": "W28",
        "salesUnits": "27",
        "salesDollars": " $269.73 ",
        "costDollars": " $212.01 ",
        "gmDollars": " $57.72 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK17867",
        "week": "W32",
        "salesUnits": "157",
        "salesDollars": " $1,568.43 ",
        "costDollars": " $1,232.79 ",
        "gmDollars": " $335.64 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK17867",
        "week": "W34",
        "salesUnits": "108",
        "salesDollars": " $1,078.92 ",
        "costDollars": " $848.03 ",
        "gmDollars": " $230.89 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK17867",
        "week": "W47",
        "salesUnits": "66",
        "salesDollars": " $659.34 ",
        "costDollars": " $518.24 ",
        "gmDollars": " $141.10 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK18018",
        "week": "W07",
        "salesUnits": "72",
        "salesDollars": " $4,319.28 ",
        "costDollars": " $1,252.59 ",
        "gmDollars": " $3,066.69 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK18018",
        "week": "W11",
        "salesUnits": "113",
        "salesDollars": " $6,778.87 ",
        "costDollars": " $1,965.87 ",
        "gmDollars": " $4,813.00 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK18018",
        "week": "W17",
        "salesUnits": "168",
        "salesDollars": " $10,078.32 ",
        "costDollars": " $2,922.71 ",
        "gmDollars": " $7,155.61 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK18018",
        "week": "W21",
        "salesUnits": "12",
        "salesDollars": " $719.88 ",
        "costDollars": " $208.77 ",
        "gmDollars": " $511.11 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK18018",
        "week": "W22",
        "salesUnits": "3",
        "salesDollars": " $179.97 ",
        "costDollars": " $52.19 ",
        "gmDollars": " $127.78 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK18018",
        "week": "W23",
        "salesUnits": "6",
        "salesDollars": " $359.94 ",
        "costDollars": " $104.38 ",
        "gmDollars": " $255.56 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK18018",
        "week": "W28",
        "salesUnits": "129",
        "salesDollars": " $7,738.71 ",
        "costDollars": " $2,244.23 ",
        "gmDollars": " $5,494.48 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK18018",
        "week": "W35",
        "salesUnits": "22",
        "salesDollars": " $1,319.78 ",
        "costDollars": " $382.74 ",
        "gmDollars": " $937.04 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK18018",
        "week": "W48",
        "salesUnits": "50",
        "salesDollars": " $2,999.50 ",
        "costDollars": " $869.86 ",
        "gmDollars": " $2,129.65 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK18018",
        "week": "W51",
        "salesUnits": "65",
        "salesDollars": " $3,899.35 ",
        "costDollars": " $1,130.81 ",
        "gmDollars": " $2,768.54 ",
        "gmPercent": "71%"
    },
    {
        "store": "ST035",
        "sku": "SK18148",
        "week": "W01",
        "salesUnits": "34",
        "salesDollars": " $3,909.66 ",
        "costDollars": " $4,101.23 ",
        "gmDollars": " $(191.57)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK18148",
        "week": "W02",
        "salesUnits": "104",
        "salesDollars": " $11,958.96 ",
        "costDollars": " $12,544.95 ",
        "gmDollars": " $(585.99)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK18148",
        "week": "W03",
        "salesUnits": "132",
        "salesDollars": " $15,178.68 ",
        "costDollars": " $15,922.44 ",
        "gmDollars": " $(743.76)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK18148",
        "week": "W19",
        "salesUnits": "112",
        "salesDollars": " $12,878.88 ",
        "costDollars": " $13,509.95 ",
        "gmDollars": " $(631.07)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK18148",
        "week": "W34",
        "salesUnits": "168",
        "salesDollars": " $19,318.32 ",
        "costDollars": " $20,264.92 ",
        "gmDollars": " $(946.60)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK18148",
        "week": "W37",
        "salesUnits": "88",
        "salesDollars": " $10,119.12 ",
        "costDollars": " $10,614.96 ",
        "gmDollars": " $(495.84)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK18148",
        "week": "W39",
        "salesUnits": "180",
        "salesDollars": " $20,698.20 ",
        "costDollars": " $21,712.41 ",
        "gmDollars": " $(1,014.21)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK18148",
        "week": "W45",
        "salesUnits": "135",
        "salesDollars": " $15,523.65 ",
        "costDollars": " $16,284.31 ",
        "gmDollars": " $(760.66)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK18148",
        "week": "W49",
        "salesUnits": "98",
        "salesDollars": " $11,269.02 ",
        "costDollars": " $11,821.20 ",
        "gmDollars": " $(552.18)",
        "gmPercent": "-5%"
    },
    {
        "store": "ST035",
        "sku": "SK18224",
        "week": "W04",
        "salesUnits": "52",
        "salesDollars": " $7,019.48 ",
        "costDollars": " $5,545.39 ",
        "gmDollars": " $1,474.09 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK18224",
        "week": "W22",
        "salesUnits": "194",
        "salesDollars": " $26,188.06 ",
        "costDollars": " $20,688.57 ",
        "gmDollars": " $5,499.49 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK18224",
        "week": "W26",
        "salesUnits": "195",
        "salesDollars": " $26,323.05 ",
        "costDollars": " $20,795.21 ",
        "gmDollars": " $5,527.84 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK18224",
        "week": "W31",
        "salesUnits": "182",
        "salesDollars": " $24,568.18 ",
        "costDollars": " $19,408.86 ",
        "gmDollars": " $5,159.32 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK18224",
        "week": "W38",
        "salesUnits": "140",
        "salesDollars": " $18,898.60 ",
        "costDollars": " $14,929.89 ",
        "gmDollars": " $3,968.71 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK18224",
        "week": "W46",
        "salesUnits": "61",
        "salesDollars": " $8,234.39 ",
        "costDollars": " $6,505.17 ",
        "gmDollars": " $1,729.22 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK18224",
        "week": "W51",
        "salesUnits": "68",
        "salesDollars": " $9,179.32 ",
        "costDollars": " $7,251.66 ",
        "gmDollars": " $1,927.66 ",
        "gmPercent": "21%"
    },
    {
        "store": "ST035",
        "sku": "SK18623",
        "week": "W06",
        "salesUnits": "196",
        "salesDollars": " $6,858.04 ",
        "costDollars": " $6,542.57 ",
        "gmDollars": " $315.47 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK18623",
        "week": "W07",
        "salesUnits": "161",
        "salesDollars": " $5,633.39 ",
        "costDollars": " $5,374.25 ",
        "gmDollars": " $259.14 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK18623",
        "week": "W10",
        "salesUnits": "192",
        "salesDollars": " $6,718.08 ",
        "costDollars": " $6,409.05 ",
        "gmDollars": " $309.03 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK18623",
        "week": "W18",
        "salesUnits": "20",
        "salesDollars": " $699.80 ",
        "costDollars": " $667.61 ",
        "gmDollars": " $32.19 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK18623",
        "week": "W21",
        "salesUnits": "116",
        "salesDollars": " $4,058.84 ",
        "costDollars": " $3,872.13 ",
        "gmDollars": " $186.71 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK18623",
        "week": "W23",
        "salesUnits": "65",
        "salesDollars": " $2,274.35 ",
        "costDollars": " $2,169.73 ",
        "gmDollars": " $104.62 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK18623",
        "week": "W31",
        "salesUnits": "79",
        "salesDollars": " $2,764.21 ",
        "costDollars": " $2,637.06 ",
        "gmDollars": " $127.15 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK18623",
        "week": "W35",
        "salesUnits": "188",
        "salesDollars": " $6,578.12 ",
        "costDollars": " $6,275.53 ",
        "gmDollars": " $302.59 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK18623",
        "week": "W36",
        "salesUnits": "31",
        "salesDollars": " $1,084.69 ",
        "costDollars": " $1,034.79 ",
        "gmDollars": " $49.90 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK18623",
        "week": "W51",
        "salesUnits": "92",
        "salesDollars": " $3,219.08 ",
        "costDollars": " $3,071.00 ",
        "gmDollars": " $148.08 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK18623",
        "week": "W52",
        "salesUnits": "61",
        "salesDollars": " $2,134.39 ",
        "costDollars": " $2,036.21 ",
        "gmDollars": " $98.18 ",
        "gmPercent": "5%"
    },
    {
        "store": "ST035",
        "sku": "SK18665",
        "week": "W03",
        "salesUnits": "100",
        "salesDollars": " $5,499.00 ",
        "costDollars": " $2,095.12 ",
        "gmDollars": " $3,403.88 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK18665",
        "week": "W07",
        "salesUnits": "40",
        "salesDollars": " $2,199.60 ",
        "costDollars": " $838.05 ",
        "gmDollars": " $1,361.55 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK18665",
        "week": "W10",
        "salesUnits": "151",
        "salesDollars": " $8,303.49 ",
        "costDollars": " $3,163.63 ",
        "gmDollars": " $5,139.86 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK18665",
        "week": "W15",
        "salesUnits": "79",
        "salesDollars": " $4,344.21 ",
        "costDollars": " $1,655.14 ",
        "gmDollars": " $2,689.07 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK18665",
        "week": "W22",
        "salesUnits": "38",
        "salesDollars": " $2,089.62 ",
        "costDollars": " $796.15 ",
        "gmDollars": " $1,293.47 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK18665",
        "week": "W23",
        "salesUnits": "194",
        "salesDollars": " $10,668.06 ",
        "costDollars": " $4,064.53 ",
        "gmDollars": " $6,603.53 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK18665",
        "week": "W36",
        "salesUnits": "28",
        "salesDollars": " $1,539.72 ",
        "costDollars": " $586.63 ",
        "gmDollars": " $953.09 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK18665",
        "week": "W40",
        "salesUnits": "186",
        "salesDollars": " $10,228.14 ",
        "costDollars": " $3,896.92 ",
        "gmDollars": " $6,331.22 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK18665",
        "week": "W44",
        "salesUnits": "156",
        "salesDollars": " $8,578.44 ",
        "costDollars": " $3,268.39 ",
        "gmDollars": " $5,310.05 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK18665",
        "week": "W45",
        "salesUnits": "76",
        "salesDollars": " $4,179.24 ",
        "costDollars": " $1,592.29 ",
        "gmDollars": " $2,586.95 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK18665",
        "week": "W49",
        "salesUnits": "36",
        "salesDollars": " $1,979.64 ",
        "costDollars": " $754.24 ",
        "gmDollars": " $1,225.40 ",
        "gmPercent": "62%"
    },
    {
        "store": "ST035",
        "sku": "SK18753",
        "week": "W09",
        "salesUnits": "131",
        "salesDollars": " $3,928.69 ",
        "costDollars": " $2,710.80 ",
        "gmDollars": " $1,217.89 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK18753",
        "week": "W17",
        "salesUnits": "174",
        "salesDollars": " $5,218.26 ",
        "costDollars": " $3,600.60 ",
        "gmDollars": " $1,617.66 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK18753",
        "week": "W39",
        "salesUnits": "85",
        "salesDollars": " $2,549.15 ",
        "costDollars": " $1,758.91 ",
        "gmDollars": " $790.24 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK18753",
        "week": "W42",
        "salesUnits": "71",
        "salesDollars": " $2,129.29 ",
        "costDollars": " $1,469.21 ",
        "gmDollars": " $660.08 ",
        "gmPercent": "31%"
    },
    {
        "store": "ST035",
        "sku": "SK18791",
        "week": "W05",
        "salesUnits": "183",
        "salesDollars": " $14,638.17 ",
        "costDollars": " $15,106.59 ",
        "gmDollars": " $(468.42)",
        "gmPercent": "-3%"
    },
    {
        "store": "ST035",
        "sku": "SK18791",
        "week": "W10",
        "salesUnits": "141",
        "salesDollars": " $11,278.59 ",
        "costDollars": " $11,639.50 ",
        "gmDollars": " $(360.91)",
        "gmPercent": "-3%"
    },
    {
        "store": "ST035",
        "sku": "SK19521",
        "week": "W04",
        "salesUnits": "49",
        "salesDollars": " $734.51 ",
        "costDollars": " $318.04 ",
        "gmDollars": " $416.47 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK19521",
        "week": "W09",
        "salesUnits": "61",
        "salesDollars": " $914.39 ",
        "costDollars": " $395.93 ",
        "gmDollars": " $518.46 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK19521",
        "week": "W13",
        "salesUnits": "82",
        "salesDollars": " $1,229.18 ",
        "costDollars": " $532.23 ",
        "gmDollars": " $696.95 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK19521",
        "week": "W15",
        "salesUnits": "53",
        "salesDollars": " $794.47 ",
        "costDollars": " $344.01 ",
        "gmDollars": " $450.46 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK19521",
        "week": "W16",
        "salesUnits": "50",
        "salesDollars": " $749.50 ",
        "costDollars": " $324.53 ",
        "gmDollars": " $424.97 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK19521",
        "week": "W29",
        "salesUnits": "74",
        "salesDollars": " $1,109.26 ",
        "costDollars": " $480.31 ",
        "gmDollars": " $628.95 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK19521",
        "week": "W40",
        "salesUnits": "14",
        "salesDollars": " $209.86 ",
        "costDollars": " $90.87 ",
        "gmDollars": " $118.99 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK19521",
        "week": "W45",
        "salesUnits": "77",
        "salesDollars": " $1,154.23 ",
        "costDollars": " $499.78 ",
        "gmDollars": " $654.45 ",
        "gmPercent": "57%"
    },
    {
        "store": "ST035",
        "sku": "SK19547",
        "week": "W01",
        "salesUnits": "46",
        "salesDollars": " $4,829.54 ",
        "costDollars": " $507.10 ",
        "gmDollars": " $4,322.44 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK19547",
        "week": "W02",
        "salesUnits": "60",
        "salesDollars": " $6,299.40 ",
        "costDollars": " $661.44 ",
        "gmDollars": " $5,637.96 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK19547",
        "week": "W06",
        "salesUnits": "117",
        "salesDollars": " $12,283.83 ",
        "costDollars": " $1,289.80 ",
        "gmDollars": " $10,994.03 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK19547",
        "week": "W07",
        "salesUnits": "180",
        "salesDollars": " $18,898.20 ",
        "costDollars": " $1,984.31 ",
        "gmDollars": " $16,913.89 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK19547",
        "week": "W28",
        "salesUnits": "169",
        "salesDollars": " $17,743.31 ",
        "costDollars": " $1,863.05 ",
        "gmDollars": " $15,880.26 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK19547",
        "week": "W37",
        "salesUnits": "193",
        "salesDollars": " $20,263.07 ",
        "costDollars": " $2,127.62 ",
        "gmDollars": " $18,135.45 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK19547",
        "week": "W41",
        "salesUnits": "107",
        "salesDollars": " $11,233.93 ",
        "costDollars": " $1,179.56 ",
        "gmDollars": " $10,054.37 ",
        "gmPercent": "90%"
    },
    {
        "store": "ST035",
        "sku": "SK19857",
        "week": "W03",
        "salesUnits": "157",
        "salesDollars": " $13,343.43 ",
        "costDollars": " $5,590.90 ",
        "gmDollars": " $7,752.53 ",
        "gmPercent": "58%"
    },
    {
        "store": "ST035",
        "sku": "SK19857",
        "week": "W06",
        "salesUnits": "75",
        "salesDollars": " $6,374.25 ",
        "costDollars": " $2,670.81 ",
        "gmDollars": " $3,703.44 ",
        "gmPercent": "58%"
    },
    {
        "store": "ST035",
        "sku": "SK19857",
        "week": "W24",
        "salesUnits": "170",
        "salesDollars": " $14,448.30 ",
        "costDollars": " $6,053.84 ",
        "gmDollars": " $8,394.46 ",
        "gmPercent": "58%"
    },
    {
        "store": "ST035",
        "sku": "SK19857",
        "week": "W29",
        "salesUnits": "75",
        "salesDollars": " $6,374.25 ",
        "costDollars": " $2,670.81 ",
        "gmDollars": " $3,703.44 ",
        "gmPercent": "58%"
    },
    {
        "store": "ST035",
        "sku": "SK19857",
        "week": "W31",
        "salesUnits": "83",
        "salesDollars": " $7,054.17 ",
        "costDollars": " $2,955.70 ",
        "gmDollars": " $4,098.47 ",
        "gmPercent": "58%"
    },
    {
        "store": "ST035",
        "sku": "SK19857",
        "week": "W48",
        "salesUnits": "168",
        "salesDollars": " $14,278.32 ",
        "costDollars": " $5,982.62 ",
        "gmDollars": " $8,295.70 ",
        "gmPercent": "58%"
    }
]

export default salesData;