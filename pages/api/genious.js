import { Configuration, OpenAIApi } from "openai";
import { WebClient } from "@slack/web-api";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const client = new WebClient();

  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: soup(req.body.whatIDo),
    temperature: 0.6,
  });

  const slackRequest = await client.users.profile.set({
    token: process.env.YEAH_TOKEN,
    profile: {
      title: `${completion.data.choices[0].text}`,
    },
  });

  res.send(slackRequest);
};

function theWhyQuestions(whatIDo) {
  return `Who am I?
  I am a bot.
  Who do I want to be? 
  I want to make things.
  What is this world I live in? 
  I live in a world.
  What is my relationship with it? 
${whatIDo}`;
}

function soup(whatIDo) {
  return `It's a bird. It's a plane. It's... ${whatIDo}.`;
}
