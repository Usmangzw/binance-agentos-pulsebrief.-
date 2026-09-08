export function sma(values, period) {
  if (!values || values.length < period) return null;

  const slice = values.slice(-period);
  const sum = slice.reduce((total, n) => total + n, 0);
  return Number((sum / period).toFixed(4));
}

export function vsAverages(price, sma20, sma50) {
  if (sma20 == null || sma50 == null) return "not enough candles";
  if (price > sma20 && price > sma50) return "above SMA20 and SMA50";
  if (price < sma20 && price < sma50) return "below SMA20 and SMA50";
  return "mixed vs SMA20 / SMA50";
}
