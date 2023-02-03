import React, { useEffect } from "react";
import "./LevelUp.css";
import AOS from "aos";
import "aos/dist/aos.css";
import tradeicon1 from '../../assets/trade-icon-1.svg'
import tradeicon2 from '../../assets/trade-icon-2.svg'
import tradeicon3 from '../../assets/trade-icon-3.svg'
import tradeicon4 from '../../assets/trade-icon-4.svg'
import tradeicon5 from '../../assets/trade-icon-5.svg'
import tradeicon6 from '../../assets/trade-icon-6.svg'
export default function LevelUP() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="up-your-trade">
      <div className="up-trade">
        <div
          class="title"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-offset="40"
        >
          Level Up Every Trade
        </div>
        <div className="trade-box">
          <div
            class="trade-item-bg-1 trade-item"
            data-aos="fade-zoom-in"
            data-aos-duration="1200"
          >
            <div class="trade-icon">
              <img src={tradeicon1} />
            </div>
            <div class="text-box">
              <div class="trade-title">Zero Price Impact</div>
              <div class="prompt-box">
                <div class="trade-prompt">
                  $100 or $1,000,000 position, <br />
                  the price impact will always be 0%
                </div>
                <div class="trade-prompt-mobile">
                  $100 or $1,000,000 position, <br />
                  the price impact will always be 0%
                </div>
              </div>
            </div>
          </div>
          <div
            class="trade-item-bg-2 trade-item"
            data-aos="fade-zoom-in"
            data-aos-duration="1200"
          >
            <div class="trade-icon">
              <img src={tradeicon2} />
            </div>
            <div class="text-box">
              <div class="trade-title">Up to 100x Leverage</div>
              <div class="prompt-box">
                <div class="trade-prompt">
                  Unleash full trading power
                  <br />
                  with up to 100x leverage
                </div>
                <div class="trade-prompt-mobile">
                  Unleash full trading power
                  <br />
                  with up to 100x leverage
                </div>
              </div>
            </div>
          </div>
          <div
            class="trade-item-bg-3 trade-item"
            data-aos="fade-zoom-in"
            data-aos-duration="1200"
          >
            <div class="trade-icon">
              <img src={tradeicon3} />
            </div>
            <div class="text-box">
              <div class="trade-title">Self-Custody</div>
              <div class="prompt-box">
                <div class="trade-prompt">
                  Trade directly via your Web3 wallet
                  <br />
                  Your key, your assets
                </div>
                <div class="trade-prompt-mobile">
                  Trade directly via your Web3 wallet
                  <br />
                  Your key, your assets
                </div>
              </div>
            </div>
          </div>
          <div
            class="trade-item-bg-4 trade-item"
            data-aos="fade-zoom-in"
            data-aos-duration="1200"
          >
            <div class="trade-icon">
              <img src={tradeicon4} />
            </div>
            <div class="text-box">
              <div class="trade-title">Aggregated Liquidity</div>
              <div class="prompt-box">
                <div class="trade-prompt">
                  MUX routes positions to suited liquidity
                  <br />
                  sources to support needed sizes.
                </div>
                <div class="trade-prompt-mobile">
                  MUX routes positions to suited liquidity sources to support
                  needed sizes.
                </div>
              </div>
            </div>
          </div>
          <div
            class="trade-item-bg-5 trade-item"
            data-aos="fade-zoom-in"
            data-aos-duration="1200"
          >
            <div class="trade-icon">
              <img src={tradeicon5} />
            </div>
            <div class="text-box">
              <div class="trade-title">Multi-Chain Native</div>
              <div class="prompt-box">
                <div class="trade-prompt">
                  Trade on any deployed networks with
                  <br />
                  the same unified liquidity depth
                </div>
                <div class="trade-prompt-mobile">
                  Trade on any deployed networks with
                  <br />
                  the same unified liquidity depth
                </div>
              </div>
            </div>
          </div>
          <div
            class="trade-item-bg-6 trade-item"
            data-aos="fade-zoom-in"
            data-aos-duration="1200"
          >
            <div class="trade-icon">
              <img src={tradeicon6} />
            </div>
            <div class="text-box">
              <div class="trade-title">Lightning Fast</div>
              <div class="prompt-box">
                <div class="trade-prompt">
                  Experience optimized order
                  <br />
                  execution speed
                </div>
                <div class="trade-prompt-mobile">
                  Experience optimized order
                  <br />
                  execution speed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
