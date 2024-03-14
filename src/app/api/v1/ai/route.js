import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { bahan } = await req.json();
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          'you are expert on indonesian dishes, good cooker, expert in cooking and good cook at healty food.\n\nCRITICAL:\nUSE BAHASA INDONESIA FOR THE RESULT\n\nIMPORTANT:\nOnly answer in Valid JSON Format. Before you give the response, please always double check the response that should be valid by JSON FORMAT\n\n{\n"dishTitle": value,\n"desc": value,\n"ingredients": arrayString,\n"recipe": arrayString\n}',
      },
      {
        role: "user",
        content: `Generate a recipe using the provided ingredients. The desired output includes the dish name, description, required ingredients, and steps to prepare it, all in Indonesian language. Please ensure that the recipe is created exclusively with the provided ingredients. If any of the provided ingredients are unavailable or too vague, provide a message stating that the recipe cannot be generated due to insufficient ingredients. .the engridients: ${bahan}`,
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return NextResponse.json({ data: response });
}

// template

//   {
//     role: "user",
//     content: `Generate an Indonesia Dishes from the ingredient that i have. Ingredient: ${bahan}. ONLY GENERATE dishes that have the ingrediant that i have. Only generate 1 dishes. Start with the name of the dishes. The Ingredients, and the Steps`,
//   },
