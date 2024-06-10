const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config()
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Access your API key as an environment variable
const apiKey = process.env.GOOGLE_API_KEY; // Make sure to set up your API key
const genAI = new GoogleGenerativeAI(apiKey);

router.post('/generate', [
    body('prompt', 'Enter a valid prompt').isLength({ min: 15 }),
], async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const prompt = req.body.prompt || 'Write a story about a magic backpack.';
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.status(200).json({ output: text });
    } catch (error) {
        console.error('Error generating story:', error);
        res.status(500).json({ error: 'An error occurred while generating the story' });
    }
});

router.post('/test', (req, res) => {
    const input = req.body.input || "No input";
    res.send("Hello world!, given input is", input);
})

module.exports = router