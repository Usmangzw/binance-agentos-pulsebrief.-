import { sma, vsAverages } from "./sma.js";

export function buildPairBrief(ticker, closes) {
  const sma20 = sma(closes, 20);
  const sma50 = sma(closes, 50);

  return {
    symbol: ticker.symbol,
    price: ticker.price,
    changePct: ticker.changePct,
    sma20,
    sma50,
    vsAverages: vsAverages(ticker.price, sma20, sma50)
  };
}

export function buildSummary(pairs) {
  const lines = pairs.map((p) => {
    const sign = p.changePct >= 0 ? "+" : "";
    return `${p.symbol} ${p.price} (${sign}${p.changePct}%), ${p.vsAverages}.`;
  });

  return lines.join(" ");
}
