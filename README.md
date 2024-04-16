# Solana Bot Setup

## Installation

To install Solana, run the following command:

```sh
sh -c "$(curl -sSfL https://release.solana.com/v1.18.4/install)"

## run to generate keypair
solana-keygen new --no-bip39-passphrase --silent --outfile ./my-keypair.json

## ENV DETAILS

## # Replace with your Your Solana wallet secret key
 SECRET_KEY = []
# Replace with your QuickNode Solana Mainnet RPC endpoint
 SOLANA_ENDPOINT = https://evocative-practical-sheet.solana-mainnet.quiknode.pro/22a93d79e19562571a4f2607c065283556ff0345/
# Replace with your QuickNode Jupiter API endpoint (or a public one: https://www.jupiterapi.com/)
METIS_ENDPOINT = https://public.jupiterapi.com

 # To test the bot run the following (yarn wont work lol)
```

npm install -g typescript
npm install -g ts-node

ts-node src/index.ts

### NOTE

### THE BOT SETUP AND FUNCTIONALITY IS IN THE BOT.TS NOW WE NEED TO MODIFY THE INDEX.TS INTERFACE TO FIX A TELEGRAM BOT STANDARD

`./images/importantBotInfo.png`

## TELEGRAM BOT DATA PROVIDED BY CLIENT

You can use this token to access HTTP API

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
