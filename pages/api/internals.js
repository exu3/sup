import { WebClient } from "@slack/web-api";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const client = new WebClient();

  const d = new Date();
  const minute = d.getMinutes();
  const zwj = "‎";

  const slackRequest = await client.chat.postMessage({
    token: process.env.SLACK_TOKEN,
    channel: process.env.INTERNALS_CHANNEL_ID,
    text: `yeah (${minute} mminutes)`,
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `y${zwj.repeat(minute)}e${zwj.repeat(minute+1)}a${zwj.repeat(minute+7)}h (${minute} minutes) \n\n_Sent via <#C02EA7XCGKW>_`
        }
      }
    ]
    
  });
  res.send("thump thump");
};
