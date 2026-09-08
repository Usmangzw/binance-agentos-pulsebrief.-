# PulseBrief

> Pull the tape. Write the brief. Don't invent the rest.

PulseBrief is a market briefing agent for the Binance Agent OS Mini Hackathon (Track A).

It reads live Binance market data for a few USDT pairs, computes a simple SMA20 / SMA50 from hourly candles, and prints a short brief. It does not place trades and it does not guess missing numbers.

## How it works

```text
Binance public market data
        ↓
Tickers + 1h klines
        ↓
SMA20 / SMA50
        ↓
Above / below averages
        ↓
Plain-language brief
