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
```

Two ways to run it:

1. Node demo: `npm start`
2. Agent OS: MCP + AGENT.md + prompts/daily-brief.md

## Quick start

Need Node 18+.

```bash
git clone https://github.com/Usmangzw/binance-agentos-pulsebrief.-.git
cd binance-agentos-pulsebrief.-
npm start
```

One pair:

```bash
node src/index.js ETHUSDT
```

No API keys.

## Agent OS / MCP

```bash
claude mcp add binance-mcp-server --transport http https://agent.binance.com/mcp/agentic
```

Grant market data only. Leave trading off.

Product: https://www.binance.com/en/agent-os

## Repo

- AGENT.md
- skills.md
- package.json
- prompts/daily-brief.md
- prompts/single-pair.md
- src/index.js
- src/binance.js
- src/sma.js
- src/brief.js
- src/reporter.js

## Limits

No orders. Not financial advice. Restricted regions in the official post cannot enter.

## Hackathon

Track A  
Demo: https://youtube.com/shorts/SJxNpnXkEYM?si=JpucGWY5vPRktZKJ
Repo: https://github.com/Usmangzw/binance-agentos-pulsebrief.-
