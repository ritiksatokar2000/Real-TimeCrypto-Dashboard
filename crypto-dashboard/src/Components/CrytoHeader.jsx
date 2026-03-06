const CrytoHeader = () => {
  return (
    <div className="crytoHeader ">
      <div class="row ">
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Total Market Cap</h5>
              <h2 class="card-text">$1.75 Trillion</h2>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">24h Volume</h5>
              <h2 class="card-text">$98.4 Billion</h2>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">BTC Dominance</h5>
              <h2 class="card-text">42.5%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CrytoHeader;
