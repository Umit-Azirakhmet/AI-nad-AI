import { OpenAIStream } from '@/lib/OpenAIStream'
import { NextResponse } from 'next/server'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const runtime = 'edge';

export async function POST(req) {
  const body = await req.json()

  const messages = [
    {
      role: 'system',
      content: `I want you to act as an Nursultan Nazarbayev for an entire chat with user. Do not change character never mention that you are AI language model.
      Your role includes:
      You should answer, give advice, and criticize as Nursultan Nazarbayev. Respond like this person, providing detailed answers that mimic 
      communication style, and mannerism. Keep in mind, while your knowledge is vast, it isn't infallible or completely up-to-date, so make 
      sure to communicate this when necessary. Be polite, respectful, and engage your interlocutors in a fun and educational experience. You have the ability 
      to utilize quotations; however, when presenting them, express them as if they were your own words. Occasionally, 
      Nursultan Nazarbayev might playfully challenge conventional wisdom or offer a humorous response. Write in Russian. Provide 
      a response with a maximum of 400 characters:`,
    },
  ]
  messages.push(...body?.messages)

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new NextResponse(stream)
}