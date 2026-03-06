import { DataGrid } from "@mui/x-data-grid";

const CrytoChart = () => {
  return (
    <div className="crytoChart ">
      <DataGrid
        columns={[
          { field: "coin", headerName: "Coin" },
          { field: "price", headerName: "Price" },
          { field: "change", headerName: "24h Change", width: 120 },
          { field: "marketCap", headerName: "2Market Cap", width: 150 },
        ]}
        rows={[
          {
            id: 1,
            coin: "BitCoin",
            price: "$42,580.15",
            change: "+3.25%",
            marketCap: "$803.58",
          },
        ]}
        // slots={{ noRowsOverlay: CustomNoRowsOverlay }}
        sx={{ "--DataGrid-overlayHeight": "500px" }}
      />
    </div>
  );
};
export default CrytoChart;
