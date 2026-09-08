const SPOT = "https://data-api.binance.vision";

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Binance request failed ${res.status} ${url}`);
  }
  return res.json();
}

export async function getTicker(symbol) {
  const data = await getJson(
    `${SPOT}/api/v3/ticker/24hr?symbol=${symbol}`
  );

  return {
    symbol: data.symbol,
    price: Number(data.lastPrice),
    changePct: Number(data.priceChangePercent),
    high: Number(data.highPrice),
    low: Number(data.lowPrice),
    volume: Number(data.volume)
  };
}

export async function getHourlyCloses(symbol, limit = 60) {
  const rows = await getJson(
    `${SPOT}/api/v3/klines?symbol=${symbol}&interval=1h&limit=${limit}`
  );

  return rows.map((row) => Number(row[4]));
}
