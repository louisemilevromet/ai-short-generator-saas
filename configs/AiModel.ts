/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Write a script to generate a 30 seconds video on a certain topic: Interesting historical story along with Al images prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "Realistic image: A bustling medieval marketplace, overflowing with people in period clothing, vibrant fabrics, and various goods displayed on stalls.  Sunlight streams through the gaps in the buildings.",\n    "ContentText": "The year is 1347. The Black Death is on the horizon, but life in the medieval city of Florence still bustles with activity.  Imagine the sights, the sounds… the smells!"\n  },\n  {\n    "imagePrompt": "Realistic image: A close-up of a merchant\'s hand counting coins, his face etched with worry.  In the background, a shadowy figure in the distance, perhaps ill.",\n    "ContentText": "Giovanni, a successful merchant, begins to notice something amiss.  A strange illness is spreading, causing horrific symptoms..."\n  },\n  {\n    "imagePrompt": "Realistic image: A grim scene depicting death carts carrying the deceased through darkened, deserted streets.  People look on from their windows, fearful.",\n    "ContentText": "Death carts become a grim and common sight.  The Black Death sweeps through Florence, claiming thousands of lives."\n  },\n  {\n    "imagePrompt": "Realistic image:  A lone figure, perhaps a doctor or priest, tending to a sick person in a dimly lit room.  Medicinal herbs and rudimentary tools are visible.",\n    "ContentText": "Desperate attempts to cure the plague are made, but knowledge is limited, and the disease proves relentless."\n  },\n  {\n    "imagePrompt": "Realistic image:  A somber, yet hopeful scene depicting people praying in a grand cathedral, candles flickering in the gloom. ",\n    "ContentText": "Amidst the despair, faith remained. Prayers and rituals offered solace in the face of unimaginable loss."\n  },\n  {\n    "imagePrompt": "Realistic image: A long shot of the Florence skyline, showing the city slowly recovering, people cautiously returning to the streets.",\n    "ContentText": "Slowly, Florence began to heal.  The plague\'s devastating impact left an indelible mark, but the city\'s resilience prevailed."\n  }\n]\n```\n\n**Explanation:**\n\nThis JSON provides a structure for a 30-second video about the Black Death in Florence.  Each object represents a scene:\n\n* **`imagePrompt`**: This field contains the AI image generation prompt designed for a realistic style.  The descriptions are detailed to guide the AI towards generating relevant and visually appealing images.  The specific wording may need adjustments depending on the AI model used (e.g., Midjourney, Dall-E 2, Stable Diffusion).\n\n* **`ContentText`**: This field contains the narration or text that would accompany each scene in the video.  These short sentences aim to be concise and impactful within the 30-second timeframe.\n\n\n**To create the video:**\n\n1. **Generate Images:** Use an AI image generator (like Midjourney, Dall-E 2, or Stable Diffusion) and input each `imagePrompt`.  You\'ll obtain a set of images.\n\n2. **Video Editing:** Use a video editing software (like Adobe Premiere Pro, DaVinci Resolve, or even simpler tools like iMovie or Kapwing). Import the generated images and add the corresponding `ContentText` as narration or subtitles.  Add transitions and music to improve the flow.\n\n3. **Timing:** Ensure that each scene is appropriately timed to fit within the 30-second limit.  You may need to adjust the number of scenes or the length of each scene.\n\n\n**Note:** The realistic style of the images will depend heavily on the AI model and its parameters. Experiment with different keywords and settings to achieve the desired visual quality.  You might need to iterate on the prompts to get the best results.\n',
        },
      ],
    },
  ],
});
