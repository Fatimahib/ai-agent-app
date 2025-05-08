// src/services/openai.js
import OpenAI from 'openai'

export const chatWithAI = async (apiKey, messages) => {
  if (!apiKey) {
    throw new Error('Please set your OpenAI API key in the Profile section')
  }

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  })

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      temperature: 0.7
    })
    return completion.choices[0].message.content
  } catch (error) {
    console.error('Error calling OpenAI API:', error)
    throw error
  }
}

export const transcribeAudio = async (apiKey, audioFile) => {
    if (!apiKey) {
      throw new Error('Please set your OpenAI API key in the Profile section')
    }
  
    const openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true
    })
  
    try {
      const transcription = await openai.audio.transcriptions.create({
        file: audioFile,
        model: "whisper-1"
      })
      return transcription.text
    } catch (error) {
      console.error('Error transcribing audio:', error)
      throw error
    }
  }
