import { app } from './api/slack-api'
import { genericMessage } from './functions/message'
require('dotenv').config();
const packageJson = require('../package.json')

// EVENTS
app.event('app_mention', async ({ message, say }) => {
  await genericMessage(process.env.BOT_SPAM_CHANNEL, `Hey there <@${message.user}>!`)
  // await say({
  //   blocks: [
  //     {
  //       "type": "section",
  //       "text": {
  //         "type": "mrkdwn",
  //         "text": `Hey there <@${message.user}>!`
  //       },
  //       "accessory": {
  //         "type": "button",
  //         "text": {
  //           "type": "plain_text",
  //           "text": "Click Me"
  //         },
  //         "action_id": "button_click"
  //       }
  //     }
  //   ],
  //   text: `Hey there <@${message.user}>!`
  // });
})

app.message('hello', async ({ message, say }) => {
    console.log(message)
    await genericMessage(process.env.BOT_SPAM_CHANNEL, `Hey there <@${message.user}>!`)

  });
  

async function init () {
    await app.start();
    console.log(`
        🍕🍕 🍕 🍕  🍕 🍕🍕
        🍕🍕  PIZZA TIME 🍕🍕
        🍕🍕 🍕 🍕  🍕  🍕🍕
      `)
        genericMessage(process.env.BOT_SPAM_CHANNEL, `🍕 PizzaBot ${packageJson.version} is ready to serve up slices 🍕.`)
}

init()




