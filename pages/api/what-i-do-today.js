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

  let day = d.getDate() + "th";
  if (d.getDate().toString().endsWith("1") && d.getDate() !== 11) {
    day = d.getDate() + "st";
  } else if (d.getDate().toString().endsWith("2") && d.getDate() !== 12) {
    day = d.getDate() + "nd";
  } else if (d.getDate().toString().endsWith("3") && d.getDate() !== 13) {
    day = d.getDate() + "rd";
  } else {
    day = d.getDate() + "th";
  }

  const slackRequest = await client.users.profile.set({
    token: process.env.YEAH_TOKEN,
    profile: {
      title: `Hello there. I'm a bot. You are viewing my profile on the ${day} of ${monthString} in the year ${d.getFullYear()}.`,
    },
  });

  res.send(slackRequest);
};
