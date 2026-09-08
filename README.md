# PulseBrief

A small market briefing agent for the Binance Agent OS Mini Hackathon (Track A).

I built this over a few evenings after work. The idea is simple: ask an AI client that is already connected to Binance Agent OS for a short brief on a few pairs, and have it pull live data through the official MCP instead of scraping or hard-coding API keys.

It does not place trades. That was a deliberate choice. I wanted something I could actually demo without wiring up an Agentic sub-account with trading scopes.

## What it does

You connect Claude Code, Cursor, or another MCP client to:

https://agent.binance.com/mcp/agentic

Then you drop the prompt in `prompts/daily-brief.md` (or just paste it). The agent should:

1. Pull ticker + recent klines for BTCUSDT, ETHUSDT, and BNBUSDT
2. Note last price and 24h change
3. Compute a rough SMA20 / SMA50 from the klines it gets back
4. Flag whether price is sitting above or below those averages
5. Write a short brief in plain English — no “buy now” language

That’s it. If the MCP call fails, it should say so instead of inventing numbers.

## Why this

Agent OS launched mid-August. Most of the examples I saw were either “hello world, what’s the price of BTC” or full trading bots. I wanted something in the middle: real market data, a little analysis, still easy to follow if you have never used MCP before.

Also, a 7-day window is not enough to ship a safe autonomous trader. A briefing agent is honest about that.

## How Agent OS fits in

Binance Agent OS is the platform. The piece this repo uses is the MCP server.

MCP (Model Context Protocol) is just a standard way for an AI client to call external tools. You add Binance’s server once, log in through the browser, pick scopes. Market data does not need an API key on your machine.

Useful official links:

- Product page: https://www.binance.com/en/agent-os
- Intro post: https://www.binance.com/en/blog/ecosystem/5991233187660196794
- MCP docs: https://developers.binance.com/en/docs/agent-native/mcp-server

The agent only needs market-data access. Leave trading, transfers, and wallet scopes off unless you know why you want them.

## Setup (Claude Code)

This is what I used.

1. Install Claude Code if you don’t have it.
2. In a terminal:
claude mcp add binance-mcp-server --transport http https://agent.binance.com/mcp/agentic

3. Open Claude Code, type `/mcp`, select `binance-mcp-server`, authenticate in the browser.
4. Grant market data. Skip trading if you are only running this brief.
5. Open this repo as the working folder and paste the prompt from `prompts/daily-brief.md`.

Cursor / Codex / ChatGPT can talk to the same endpoint. The click-path is slightly different; Binance documents it on the Agent OS page.

You do **not** put Binance API keys in this repo. If a tutorial tells you to paste keys into a `.env` for this project, ignore it.

## Repo layout
prompts/daily-brief.md    # the prompt I actually use
prompts/single-pair.md    # same idea, one symbol
notes/what-i-tried.md     # failed approaches so I don’t repeat them
README.md


There is no custom server in here on purpose. The “app” is the prompt + the official MCP. I started writing a Python wrapper around REST klines, then deleted it. Reimplementing what the MCP already returns was wasted time.

## How I test it

I run the daily brief prompt twice:

- Once during Asia morning hours
- Once later the same day

I check that prices match what I see on the Binance site (or a chart). If SMA numbers look off, it is usually because the agent grabbed the wrong interval or too few candles. The prompt now says “use 1h klines, last 60 candles” for that reason.

I also ask: “What tools did you just call?” If it answers from memory and never hit MCP, I throw the answer out.

## Limits (please read)

- Relies on whatever tools the current Binance MCP actually exposes. If a tool name changes, the prompt may need a tweak.
- SMA here is a quick average over the candles the agent received. It is not a TradingView-grade indicator.
- No order placement, no stop-loss logic, no “strategy.”
- Not available / not intended for restricted jurisdictions listed in the hackathon post (US, UK, EEA, Hong Kong, Singapore, and Binance’s prohibited list).
- This is not financial advice. I would not size a position off this brief.

## What I would do with more time

- Add a second prompt that compares funding rate + basis on one perp pair
- Save the last brief to a markdown file so you can diff days
- Try Skill Hub instead of a raw prompt, if a market-data skill covers this cleanly
