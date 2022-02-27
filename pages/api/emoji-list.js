import { WebClient } from "@slack/web-api";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const client = new WebClient();

  const slackRequest = await client.emoji.list({
    token: process.env.YEAH_TOKEN,
  });
  res.send(Object.keys(slackRequest.emoji));
};
