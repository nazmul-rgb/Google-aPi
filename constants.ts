import type { Language } from './types';
import { GoogleGenAI } from "@google/genai";

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'zh', name: 'Chinese (Mandarin)' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ar', name: 'Arabic' },
  { code: 'bn', name: 'Bangla' },
];

export const API_KEY = process.env.API_KEY;

// Initialize the AI client once and export it for use across the app.
// If the API key is not set, `ai` will be null.
export const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;
