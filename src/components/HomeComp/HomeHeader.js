import React, { useEffect } from "react";
import "./HomeHeader.css";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from '../../assets/bg.webp'
import bgarb from '../../assets/bg-arb.png'
import bgavax from '../../assets/bg-avax.png'
import bgbsc from '../../assets/bg-bsc.png'
import bgftm from '../../assets/bg-ftm.png'

export default function HomeHeader() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="up-your-trade">
      <img
        className="bg"
        src={bg}
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="400"
        data-aos-once="true"
      />
      <div className="trade-now">
        <div className="bg-icon">
          <img
            className="bg-arb "
            src={bgarb}
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="400"
            data-aos-once="true"
          />
          <img
            class="bg-bsc"
            src={bgbsc}
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="400"
            data-aos-once="true"
          />
          <img
            class="bg-avax "
            src={bgavax}
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="400"
            data-aos-once="true"
          />
          <img
            class="bg-ftm "
            src={bgftm}
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="400"
            data-aos-once="true"
          />
        </div>
        <div className="title-box">
          <div
            class="trade-text"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            DECENTRALIZED SELF-CUSTODIAL LEVERAGED TRADING
          </div>
          <div
            class="big-title"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Supercharged
            <br />
            for Traders
          </div>
          <div
            class="sub-title"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Trade crypto with zero price impact, up to 400x leverage and
            aggregated liquidity. MUX protocol takes care of all the hassles so
            that you can experience optimized DEX trading on our platform.
          </div>
          <a
            class="trade-button"
            // href="https://app.MUX.network/#/trade"
            target="_blank"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
            data-aos-once="true"
          >
            Start Trading
          </a>
          <a
            class="trade-button-mobile"
            href="https://app.MUX.network/#/trade"
            target="_self"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
            data-aos-once="true"
          >
            Start Trading
          </a>
        </div>
      </div>
      <img
        class="bg-mobile"
        src="https://MUX.network/bg-mobile.png"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="400"
        data-aos-once="true"
      ></img>
    </div>

    // <div data-aos="fade-left">Fade left</div>
  );
}
