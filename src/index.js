import { getTicker, getHourlyCloses } from "./binance.js";
import { buildPairBrief, buildSummary } from "./brief.js";
import { printBrief } from "./reporter.js";

const defaults = ["BTCUSDT", "ETHUSDT", "BNBUSDT"];
const symbols = process.argv.slice(2);
const watchlist = symbols.length ? symbols : defaults;

async function run() {
  try {
    console.log("\nPulseBrief");
    console.log("pairs:", watchlist.join(", "));

    const pairs = [];

    for (const symbol of watchlist) {
      const ticker = await getTicker(symbol);
      const closes = await getHourlyCloses(symbol, 60);
      pairs.push(buildPairBrief(ticker, closes));
    }

    printBrief(pairs, buildSummary(pairs));
  } catch (err) {
    console.error("\nBrief failed.");
    console.error(err.message);
    process.exitCode = 1;
  }
}

run();
