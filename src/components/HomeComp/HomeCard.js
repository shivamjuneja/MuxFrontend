import React from "react";
import "./HomeCard.css";
export default function () {
  return (
    <div style={{ backgroundColor: "#040818", height: "100vh" }}>
      <div className="container-fluid">
        <div className="row p-3">
          <div className="col-lg-4">
            <div
              className="card card-main  m-2"
              style={{ backgroundColor: "#0b1229" }}
            >
              <div className="card-body home-card">
                <img
                  style={{ width: "25vw", height: "65vh" }}
                  class="card-img-top"
                  src="https://MUX.network/trade-blue-1.svg"
                  alt="Card image"
                ></img>
                <h2>Trade</h2>
                <p class="card-text">
                  Open long or short positions with up to
                  <br />
                  100x leverage and 0% price impact
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="card card-main  m-2"
              style={{ backgroundColor: "#0b1229" }}
            >
              <div className="card-body home-card">
                <img
                  style={{ width: "25vw", height: "65vh" }}
                  class="card-img-top"
                  src="https://MUX.network/liquidity-blue-1.svg"
                  alt="Card image"
                ></img>
                <h2>Provide Liquidity</h2>
                <p class="card-text">
                  Buy and stake MUXLP to earn protocol
                  <br />
                  income and MUX rewards
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="card card-main m-2"
              style={{ backgroundColor: "#0b1229" }}
            >
              <div className="card-body home-card">
                <img
                  style={{ width: "25vw", height: "65vh" }}
                  class="card-img-top"
                  src="https://MUX.network/stake-blue-1.svg"
                  alt="Card image"
                ></img>
                <h2>Stake </h2>
                <p class="card-text">
                  Stake MCB to receive veMUX, which can
                  <br />
                  be used to earn protocol income and MUX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
