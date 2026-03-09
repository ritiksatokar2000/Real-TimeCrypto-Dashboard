import { DataGrid } from "@mui/x-data-grid";

const CrytoChart = ({ coin, setSelectedCoin }) => {
  const rows = coin.map((c, index) => ({
    id: c.id,
    srno: index + 1,
    img: c.image,
    coin: c.name,
    price: `$${c.current_price}`,
    change: `${(c.price_change_percentage_24h ?? 0).toFixed(2)}%`,
    marketCap: `$${c.market_cap}`,
  }));

  const columns = [
    { field: "srno", headerName: "SrNo.", width: 50 },
    {
      field: "img",
      headerName: "",
      width: 60,
      renderCell: (params) => <img src={params.value} width={25} />,
    },
    { field: "coin", headerName: "Coin", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "change", headerName: "24h Change", width: 150 ,
      renderCell:(params) => {
        const value = parseFloat(params.value);
        return(
          <span style={{color: value > 0 ? "green" : "red"}}>
{params.value}
          </span>
        )
      }
    },
    { field: "marketCap", headerName: "Market Cap", width: 180 },
  ];

  return (
    <div className="crytoChart ">
      <DataGrid
        columns={columns}
        rows={rows}
        onRowClick={(params) => {
          setSelectedCoin(params.row);
        }}
        pageSizeOptions={[10]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        // slots={{ noRowsOverlay: CustomNoRowsOverlay }}
        sx={{ "--DataGrid-overlayHeight": "100px" }}
      />
    </div>
  );
};
export default CrytoChart;
