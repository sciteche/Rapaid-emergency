import { GoogleGenerativeAI } from "@google/generative-ai";

let genAI = null;

export function initializeGemini(apiKey) {
  if (!apiKey) {
    console.warn('Gemini API key not provided');
    return false;
  }
  try {
    genAI = new GoogleGenerativeAI(apiKey);
    return true;
  } catch (error) {
    console.error('Failed to initialize Gemini:', error);
    return false;
  }
}

// List all available models (hardcoded for this SDK version)
export async function listAvailableModels() {
  // These are the models available in Google Generative AI API
  const availableModels = [
    {
      name: "models/gemini-2.0-flash",
      displayName: "Gemini 2.0 Flash",
      description: "Fast and efficient model for most tasks",
      version: "2.0",
      inputTokenLimit: 1000000,
      outputTokenLimit: 4096,
      supportedGenerationMethods: ["generateContent", "countTokens"],
    },
    {
      name: "models/gemini-2.0-flash-exp",
      displayName: "Gemini 2.0 Flash Experimental",
      description: "Experimental version of Gemini 2.0 Flash",
      version: "2.0-exp",
      inputTokenLimit: 1000000,
      outputTokenLimit: 4096,
      supportedGenerationMethods: ["generateContent", "countTokens"],
    },
    {
      name: "models/gemini-1.5-pro",
      displayName: "Gemini 1.5 Pro",
      description: "Advanced model with extended context",
      version: "1.5",
      inputTokenLimit: 1000000,
      outputTokenLimit: 8192,
      supportedGenerationMethods: ["generateContent", "countTokens"],
    },
    {
      name: "models/gemini-1.5-flash",
      displayName: "Gemini 1.5 Flash",
      description: "Faster variant of Gemini 1.5",
      version: "1.5",
      inputTokenLimit: 1000000,
      outputTokenLimit: 4096,
      supportedGenerationMethods: ["generateContent", "countTokens"],
    },
    {
      name: "models/gemini-1.0-pro",
      displayName: "Gemini 1.0 Pro",
      description: "Original Gemini Pro model",
      version: "1.0",
      inputTokenLimit: 32000,
      outputTokenLimit: 8192,
      supportedGenerationMethods: ["generateContent", "countTokens"],
    },
  ];
  
  console.log('Available Models:');
  availableModels.forEach(model => {
    console.log(`- ${model.name}`);
  });
  
  return availableModels;
}

// Helper to format error messages
function getErrorMessage(error) {
  const message = error.message || '';
  
  // Check for quota exceeded error (only if 429 status or explicit quota mention)
  if (message.includes('429') || (message.includes('quota') && message.includes('429'))) {
    return 'Free tier quota exceeded. Please upgrade your Gemini API plan to use paid tier at https://console.cloud.google.com/billing';
  }
  
  // Check for authentication error
  if (message.includes('API key') || message.includes('authentication') || message.includes('401') || message.includes('UNAUTHENTICATED')) {
    return 'Invalid or expired API key. Please check your Gemini API key and try again.';
  }
  
  // Check for invalid request
  if (message.includes('INVALID_ARGUMENT') || message.includes('400')) {
    return 'Invalid request. Please try again with different input.';
  }
  
  return message || 'An error occurred. Please try again.';
}

export async function analyzeSymptoms(symptoms) {
  if (!genAI) {
    throw new Error('Gemini API key not configured. Please provide an API key.');
  }
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `You are a medical first aid analysis assistant. Analyze the following symptoms and respond ONLY with a valid JSON object (no additional text or markdown).

Symptoms: ${symptoms}

Respond with ONLY this JSON structure (no markdown, no extra text):
{
  "condition": "Most likely medical condition",
  "severity": "critical|high|medium|low",
  "confidence": 85,
  "symptoms": ["symptom1", "symptom2"],
  "firstAid": ["step1", "step2", "step3"],
  "emergencyId": null
}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text().trim();
    
    // Remove markdown code blocks if present
    if (text.startsWith('```json')) {
      text = text.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    } else if (text.startsWith('```')) {
      text = text.replace(/^```\n?/, '').replace(/\n?```$/, '');
    }
    
    const parsed = JSON.parse(text);
    return parsed;
  } catch (error) {
    console.error('Symptom Analysis Error:', error);
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    
    // Try to extract JSON from response if parsing failed
    if (error instanceof SyntaxError) {
      throw new Error('Failed to parse AI response. Please try again with simpler symptoms.');
    }
    
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
}

export async function getChatResponse(message) {
  if (!genAI) {
    throw new Error('Gemini API key not configured. Please provide an API key.');
  }
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `You are a helpful first aid and medical safety assistant. Answer questions about:
- First aid techniques and CPR
- Emergency response procedures
- Common medical conditions and how to help
- When to call emergency services
- Home remedies vs professional care

User question: ${message}

Provide a clear, concise, and accurate response focused on practical first aid guidance. If it's a medical emergency, always recommend calling emergency services.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();
    
    if (!text) {
      throw new Error('AI returned empty response. Please try again.');
    }
    
    return text;
  } catch (error) {
    console.error('ChatBot AI Error:', error);
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    
    const errorMessage = getErrorMessage(error);
    const customError = new Error(errorMessage);
    throw customError;
  }
}