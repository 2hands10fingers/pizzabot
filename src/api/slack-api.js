import { RTMClient } from '@slack/rtm-api'
import { WebClient } from '@slack/web-api'
import { App } from '@slack/bolt';
import { homeHandler } from '../functions/routeHandlers';
require('dotenv').config();

export const rtm = new RTMClient(process.env.SLACK_OAUTH_TOKEN, {
    useRtmConnect: true,
});
export const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);

export const app = new App({
    customRoutes: [ // Routes very similar to a server route
        {
          path: '/',
          method: ['POST'],
          handler: (req, res) => homeHandler(req, res)
        },
      ],
    token: process.env.SLACK_OAUTH_TOKEN, //Find in the Oauth  & Permissions tab
    signingSecret: process.env.SIGNING_SECRET, // Find in Basic Information Tab
    socketMode: true,
    port: 3000,

    appToken: process.env.APP_TOKEN // Token from the App-level Token that we created
});