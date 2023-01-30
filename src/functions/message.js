import { web } from '../api/slack-api'

export const genericMessage = async (channel, text)=> {
    await web.chat.postMessage({
        channel,
        text,
    })
}