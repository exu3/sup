import { WebClient } from "@slack/web-api";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const client = new WebClient();
  const d = new Date();

  // get the day of the week
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const dayString = weekday[d.getDay()];

  // get the month
  const month = new Array(12);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  const monthString = month[d.getMonth()];

  const day = d.getDate();
  const dailyTopic =
    `sup_today_is_${dayString}_${monthString}_${day}`.toUpperCase();

  const slackRequest = await client.conversations.setTopic({
    token: process.env.SLACK_TOKEN,
    channel: process.env.CHANNEL_ID,
    topic: dailyTopic,
  });
  res.send("sup");
};
