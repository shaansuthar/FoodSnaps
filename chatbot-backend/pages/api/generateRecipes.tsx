import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let query = `The following is a conversation with an AI assistant. The assistant tends to ask clarifying questions to narrow down interest and generates recipes based on the ingredients provided by the human.\n\nAI: Hi! I am a recipe bot. I can help you find recipes based on ingredients.`

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured.",
      }
    });
    return;
  }

  const ingredient = req.body.ingredient || '';
  if (ingredient.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid ingredient",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(ingredient),
      temperature: 0.9,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],      
    });
    query =`${query}${completion.data.choices[0].text}`
    console.log(query)
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(humanQuery) {
  query = `${query}\nHuman: ${humanQuery}\n`
  console.log(query)
  return query
}