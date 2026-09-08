export function printBrief(pairs, summary) {
  console.log("\nPULSEBRIEF");
  console.log("==========");

  for (const p of pairs) {
    const sign = p.changePct >= 0 ? "+" : "";
    console.log(`\n${p.symbol}`);
    console.log(`Last: ${p.price}  24h: ${sign}${p.changePct}%`);
    console.log(`SMA20 (1h): ${p.sma20 ?? "n/a"}`);
    console.log(`SMA50 (1h): ${p.sma50 ?? "n/a"}`);
    console.log(`Vs averages: ${p.vsAverages}`);
  }

  console.log("\nBrief");
  console.log(summary);

  console.log("\nSources: public Binance spot ticker + 1h klines");
  console.log("Note: informational only. Not financial advice.\n");
}
