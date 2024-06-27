# Units Network Testnet Bot

This repository contains a Node.js application that automates transactions on the Units Network Testnet using multiple private keys.

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. **Install dependencies:**

   ```bash
   pkg update && pkg upgrade -y
   pkg install nodejs
   git clone https://github.com/axzss/units-testnet
   cd units-testnet
   npm install
   ```

2. **Prepare private keys:**

   - Create or edit `privateKeys.json` to include your Ethereum private keys as an array of strings. Each private key should be enclosed in double quotes.

   **Example `privateKeys.json` (correct format):**
   ```json
   [
       "private_key_1_here",
       "private_key_2_here"
   ]
   ```

   Ensure each private key string is correctly formatted as shown above.

## Usage

- **Run the application:**

  ```bash
  npm start
  ```

- Follow the prompts to enter the number of transactions to send per private key.
