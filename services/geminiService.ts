
import { GoogleGenAI, Type } from "@google/genai";
import { PanchangaData } from "../types";

export const fetchPanchangaFromAI = async (date: string, language: 'telugu' | 'kannada'): Promise<PanchangaData | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const langLabel = language === 'telugu' ? 'Telugu' : 'Kannada';
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide the Hindu Panchanga details for the date ${date}. 
      CRITICAL: You MUST provide all values exclusively in the ${langLabel} script. DO NOT mix languages.
      Format the response as a JSON object matching these fields: 
      samvatsara (year name), ayana, rutu (season), masa (month), paksha, tithi, nakshatra, vaara (day), yoga, karana, 
      shraddhaTithi (which tithi for shraddha rituals), visesha (speciality of day), shubhaSamayam (auspicious time), 
      uthamaRashulu (lucky zodiacs), viseshamNote (extra notes).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            date: { type: Type.STRING },
            samvatsara: { type: Type.STRING },
            ayana: { type: Type.STRING },
            rutu: { type: Type.STRING },
            masa: { type: Type.STRING },
            paksha: { type: Type.STRING },
            tithi: { type: Type.STRING },
            nakshatra: { type: Type.STRING },
            vaara: { type: Type.STRING },
            yoga: { type: Type.STRING },
            karana: { type: Type.STRING },
            shraddhaTithi: { type: Type.STRING },
            visesha: { type: Type.STRING },
            shubhaSamayam: { type: Type.STRING },
            uthamaRashulu: { type: Type.STRING },
            viseshamNote: { type: Type.STRING },
          },
          required: ["samvatsara", "ayana", "masa", "tithi"]
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text);
      return { ...data, date, language };
    }
    return null;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
