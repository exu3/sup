import { WebClient } from "@slack/web-api";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const client = new WebClient();

  const id = "U02A67DA1QX" // @liv's id
  const channelId = "C02EL47E9TN" // tasks channel

  try {
    const slackRequest = await client.conversations.invite({
        token: process.env.SLACK_TOKEN,
        channel: channelId,
        users: id,
      });
  } catch(err) {
      console.log('error, liv already in channel')
  }
    res.send("added to channel")
};
