"use client";

import "./Ticker.css";
import { useTranslations } from "next-intl";

function Ticker() {
  const t = useTranslations("home.ticker");

  const items = [
    t("noCruelty"),
    t("noAbusivePrice"),
    t("noTransFat"),
    t("noPreservatives"),
    t("noColorants"),
    t("noAntibiotics"),
    t("noHormones"),
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="tickerContainer">
        <ul>
          {items.map((item, index) => (
            <>
              <li key={`item-${index}`} className="tickerItem">
                {item}
              </li>
              <li key={`dot-${index}`} className="tickerItem">
                •
              </li>
            </>
          ))}
        </ul>

        <ul aria-hidden="true">
          {items.map((item, index) => (
            <>
              <li key={`item-dup-${index}`} className="tickerItem">
                {item}
              </li>
              <li key={`dot-dup-${index}`} className="tickerItem">
                •
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Ticker;
