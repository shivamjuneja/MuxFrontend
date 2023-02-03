import React, { useEffect } from "react";
import "./NewTechnology.css";
import AOS from "aos";
import "aos/dist/aos.css";
import techbg from '../../assets/tech-bg.webp'
import tradeblue1 from '../../assets/trade-blue-1.svg'
import tradeblue2 from '../../assets/trade-blue-2.svg'
import tradeicon1 from '../../assets/trade-icon-1.svg'
import tradeicon2 from '../../assets/trade-icon-2.svg'
import tradeicon3 from '../../assets/trade-icon-3.svg'
import tradeicon4 from '../../assets/trade-icon-4.svg'
import liquidityblue1 from '../../assets/liquidity-blue-1.svg'
import liquidityblue2 from '../../assets/liquidity-blue-2.svg'
import stakeblue1 from '../../assets/stake-blue-1.svg'
import stakeblue2 from '../../assets/stake-blue-2.svg'
import stakebluemobile from '../../assets/stake-blue-mobile.svg'
import tradebluemobile from '../../assets/trade-blue-mobile.svg'
import liquiditybluemobile from '../../assets/liquidity-blue-mobile.svg'
export default function NewTechnology() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="new-tech">
      <div className="container">
        <img
          className="bg"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-offset="600"
          src={techbg}
        />
        <div className="tech-container">
          <div
            className="title"
            data-aos="fade-up"
            data-aos-duration="1200"
            // data-aos-offset="40"
          >
            New Technology Behind
            <br />
            Every Feature
          </div>
          <div
            className="tech-box"
            data-aos="fade-zoom-in"
            data-aos-duration="1200"
            data-aos-offset="280"
          >
            <div className="tech-item">
              <div className="sub-title-box">
                <img src={tradeicon1} />
                <div className="sub-title">Universal Liquidity</div>
              </div>
              <div className="prompt">
                The YDEX liquidity pool unifies assets from all deployed chains,
                supported by multiplexing layer infrastructures.
              </div>
            </div>
            <div className="tech-item">
              <div className="sub-title-box">
                <img src={tradeicon2} />
                <div className="sub-title">Liquidity Multiplexing</div>
              </div>
              <div className="prompt">
                Pooled liquidity will be dynamically shared between YDEX margin
                trading and third-party DEX mining across chains to achieve high
                utilization.
              </div>
            </div>
            <div className="tech-item">
              <div className="sub-title-box">
                <img src={tradeicon3} />
                <div className="sub-title">Liquidity Aggregation</div>
              </div>
              <div className="prompt">
                YDEX aggregates scattered liquidity from different protocols,
                further offering a consistent and convenient trading experience.
              </div>
            </div>
            <div className="tech-item">
              <div className="sub-title-box">
                <img src={tradeicon4} />
                <div className="sub-title">Multi-Asset Pool</div>
              </div>
              <div className="prompt">
                YDEX liquidity pool holds a portfolio of blue-chip assets and
                uses dynamic open interest caps to eliminate traders'
                counterparty risks.
              </div>
            </div>
          </div>
        </div>
        <div className="feature-container">
          <div class="feature-box">
            <div
              class="feature-item trade-item"
              data-aos="fade-up"
              data-aos-duration="950"
              data-v-0680bbc3=""
            >
              <div class="bg-1"></div>
              <div class="bg-2"></div>
              <div class="bg-3"></div>
              <div class="img-box">
                <img
                  className="trade-icon1"
                  src={tradeblue1}
                />
                <img
                  className="trade-icon2"
                  src={tradeblue2}
                />
              </div>
              <div class="img-box-mobile">
                <img
                  className="liquidity-icon1"
                  src={tradebluemobile}
                />
              </div>
              <div>
                <div className="sub-title">Trade</div>
                <div className="prompt">
                  Open long or short positions with up to 100x leverage and 0%
                  price impact
                </div>
              </div>
            </div>
            <div
              className="feature-item liquidity-item"
              data-aos="fade-up"
              data-aos-duration="950"
              data-aos-delay="200"
            >
              <div className="bg-1"></div>
              <div className="bg-2"></div>
              <div className="bg-3"></div>
              <div className="img-box">
                <img
                  className="liquidity-icon1"
                  src={liquidityblue1}
                />
                <img
                  className="liquidity-icon2"
                  src={liquidityblue2}
                />
              </div>
              <div className="img-box-mobile">
                <img
                  className="liquidity-icon1"
                  src={liquiditybluemobile}
                />
              </div>
              <div>
                <div className="sub-title">Provide Liquidity</div>
                <div className="prompt">
                  Buy and stake YDEXLP to earn protocol income and YDEX rewards
                </div>
              </div>
            </div>
            <div
              className="feature-item stake-item"
              data-aos="fade-up"
              data-aos-duration="950"
              data-aos-delay="400"
            >
              <div className="bg-1"></div>
              <div class="bg-2"></div>
              <div className="bg-3"></div>
              <div className="img-box">
                <img
                  className="stake-icon1"
                  src={stakeblue1}
                />
                <img
                  class="stake-icon2"
                  src={stakeblue2}
                />
              </div>
              <div className="img-box-mobile">
                <img
                  className="liquidity-icon1"
                  src={stakebluemobile}
                />
              </div>
              <div>
                <div className="sub-title">Stake</div>
                <div className="prompt">
                  Stake MCB to receive veYDEX, which can be used to earn
                  protocol income and YDEX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
