# PulseBrief

> Pull the tape. Write the brief. Don't invent the rest.

PulseBrief is a market briefing agent for the Binance Agent OS Mini Hackathon (Track A).

It reads live Binance data for BTCUSDT, ETHUSDT, and BNBUSDT, computes SMA20 / SMA50 from 1h candles, and prints a short brief. It does not place trades.

## How it works

```text
Binance market data
        ↓
Ticker + 1h klines
        ↓
SMA20 / SMA50
        ↓
Short brief
