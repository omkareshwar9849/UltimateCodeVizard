const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config()
const cors = require('cors')


const app = express();
const port = 5000;

// For parsing application/json
app.use(express.json());
app.use(cors());

// Access your API key as an environment variable
const apiKey = process.env.GOOGLE_API_KEY; // Make sure to set up your API key

const genAI = new GoogleGenerativeAI(apiKey);

app.post('/generate', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = req.body.prompt || 'Write a story about a magic backpack.';
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.json({ output: text });
  } catch (error) {
    console.error('Error generating story:', error);
    res.status(500).json({ error: 'An error occurred while generating the story' });
  }
});

app.post('/test',(req,res)=>{
    // const input = req.body.input || "No input";
    console.log(req.body.input);
    res.send("Hello world!");
})

app.get('/',(req,res)=>{
    res.send("Hello world!");
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
