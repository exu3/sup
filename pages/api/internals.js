import { WebClient } from "@slack/web-api";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const client = new WebClient();

  const d = new Date();
  const minute = d.getMinutes();

  const slackRequest = await client.chat.postMessage({
    token: process.env.SLACK_TOKEN,
    channel: process.env.INTERNALS_CHANNEL_ID,
    text: `
	y‎e‎ah (${minute} minutes)
	
_Sent via <#C02EA7XCGKW>_
	`,
  });
  res.send("thump thump");
};
