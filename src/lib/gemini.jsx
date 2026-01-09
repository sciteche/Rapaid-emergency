import React from 'react';

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export async function analyzeSymptoms(symptoms, apiKey) {
  if (!apiKey) {
    throw new Error('API key is required');
  }
  
  try {
    const response = await fetch(`${API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a medical AI assistant. Analyze these symptoms and provide a response in valid JSON format.
            
            Symptoms: ${symptoms}
            
            Rules:
            1. Response MUST be ONLY valid JSON, no other text
            2. Response MUST follow this EXACT format:
            {
              "condition": "condition name",
              "severity": "critical/high/medium/low",
              "confidence": 85,
              "symptoms": ["symptom1", "symptom2"],
              "firstAid": ["step1", "step2"],
              "emergencyId": "id or null"
            }
            3. DO NOT include any markdown formatting, quotes, or extra text
            4. ONLY return the JSON object`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid response format from Gemini API');
    }

    const text = data.candidates[0].content.parts[0].text.trim();
    
    // Remove any potential markdown formatting or extra text
    const jsonStr = text.replace(/```json\n?|\n?```/g, '').trim();
    
    try {
      const parsedData = JSON.parse(jsonStr);
      
      // Validate required fields
      if (!parsedData.condition || !parsedData.severity || !Array.isArray(parsedData.symptoms) || !Array.isArray(parsedData.firstAid)) {
        throw new Error('Missing required fields in response');
      }
      
      return parsedData;
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError, 'Raw text:', text);
      return {
        condition: "Unable to determine",
        severity: "medium",
        confidence: 0,
        symptoms: [symptoms],
        firstAid: ["Please consult a medical professional for accurate diagnosis"],
        emergencyId: null
      };
    }
  } catch (error) {
    console.error('Gemini AI Error:', error);
    return {
      condition: "Service unavailable",
      severity: "medium",
      confidence: 0,
      symptoms: [symptoms],
      firstAid: ["Unable to analyze symptoms. Please try again or consult a medical professional."],
      emergencyId: null
    };
  }
}

export async function getChatResponse(message, apiKey) {
  if (!apiKey) {
    throw new Error('API key is required');
  }
  
  try {
    const response = await fetch(`${API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a medical first aid assistant. Provide clear, concise guidance for: ${message}

            Rules:
            1. Focus ONLY on immediate first aid steps and emergency guidance
            2. If critical, always recommend emergency services
            3. Use clear, simple language
            4. Include step-by-step instructions
            5. Keep response focused and brief
            6. DO NOT include any markdown formatting or special characters`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid response format from Gemini API');
    }

    return data.candidates[0].content.parts[0].text.trim();
  } catch (error) {
    console.error('Gemini AI Error:', error);
    return "I apologize, but I'm having trouble processing your request right now. For medical emergencies, please call emergency services immediately. For non-emergencies, try refreshing the page or asking your question again.";
  }
}