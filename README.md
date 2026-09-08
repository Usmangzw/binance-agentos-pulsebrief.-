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

Two ways to run it:
1. Node demo: npm start (public REST, good for a video)
2. Agent OS: connect MCP, then use AGENT.md and prompts/daily-brief.md

Quick start
Need Node 18+.
git clone https://github.com/Usmangzw/binance-agentos-pulsebrief.-.git
cd binance-agentos-pulsebrief.-
npm start
One pair:
node src/index.js ETHUSDT
No API keys.

Agent OS / MCP
claude mcp add binance-mcp-server --transport http https://agent.binance.com/mcp/agentic
Authenticate in the browser. Grant market data only. Leave trading off.
Give the model AGENT.md, then paste prompts/daily-brief.md
Product: https://www.binance.com/en/agent-os

Repo
AGENT.md
skills.md
package.json
prompts/daily-brief.md
prompts/single-pair.md
src/index.js
src/binance.js
src/sma.js
src/brief.js
src/reporter.js
