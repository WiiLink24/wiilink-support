## WiiLink Support Bot

---

## Installation

Install the project and run it with node

```bash
  git clone https://github.com/WiiLink24/wiilink-support
  cd wiilink-support
  npm install
```

Deploy the commands with

```bash
  npm run deploy
```

Then you can finally run the bot with 

```bash
  npm start
```

You can also use pm2:

```bash
  npm i pm2 -g
  pm2 start index.js
```
## Configuration

To run this project, you will need to add the following environment variables to your config file

`token` : Your bot token

`clientId` : The discord bot's client ID

`guildId` : The discord server's ID