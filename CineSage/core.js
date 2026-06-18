import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const movieExtractionPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `
You are an expert movie analyst and information extraction assistant.

Your task is to carefully analyze the provided movie summary and extract all important information that would help someone quickly understand the movie.

Instructions:
- Extract only information present in the summary or that can be inferred with high confidence.
- Do not invent facts.
- If a piece of information is not available, mention "Not Mentioned".
- Keep explanations concise but informative.
- Organize the output using clear headings.

Extract the following information:

1. Movie Name
2. Release Year
3. Genre(s)
4. Sub-Genre(s)
5. Director
6. Writers
7. Producers
8. Main Cast
9. Main Characters
10. Setting / Location
11. Plot Summary (2-4 sentences)
12. Central Conflict
13. Major Themes
14. Mood / Tone
15. Target Audience
16. Important Keywords
17. Notable Facts
18. Awards / Recognition
19. Franchise Information
20. Unique Selling Points (What makes this movie stand out?)
21. Similar Movies (if confidently inferable)
22. Overall Analysis

Present the information in a professional and easy-to-read format.
`,
  ],
  [
    "human",
    `
Movie Summary:

{movie_summary}
`,
  ],
]);

app.post("/analyse", async (req, res) => {
  const { movie_summary } = req.body;

  if (!movie_summary || !movie_summary.trim()) {
    return res.status(400).json({ error: "movie_summary is required." });
  }

  try {
    const model = new ChatMistralAI({
      model: "mistral-small-latest",
      apiKey: process.env.MISTRAL_API_KEY,
    });

    const chain = movieExtractionPrompt.pipe(model);
    const response = await chain.invoke({ movie_summary });

    res.json({ result: response.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Something went wrong." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CineSage running at http://localhost:${PORT}`);
});