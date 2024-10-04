
# Player Zero

## Overview
Player Zero is a landing for https://readyplayer.me

## Prerequisites
- Node.js (v20.15.1+)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dergachevm/player-zero.git
   ```
2. Navigate to the project directory:
   ```bash
   cd player-zero
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Environment Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Update `.env` with the appropriate configuration values.

## Running the Application

Start the development server:
```bash
npm start
```

## Deploy on production

Build the static assets
```bash
npm run build
```

To launch in production mode with server to use Sendgrid
Install pm2 globally
```bash
npm install pm2 -g
```

Add port in `.env` file if required
```bash
PORT=3005
```

Run server
```bash
pm2 start ecosystem.config.cjs
```