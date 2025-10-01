export const API_BASE = "https://v2.api.noroff.dev";

// Auth endpoints
export const API_AUTH = `${API_BASE}/auth`;
export const API_AUTH_LOGIN = `${API_AUTH}/login`;
export const API_AUTH_REGISTER = `${API_AUTH}/register`;

// Social endpoints
export const API_SOCIAL = `${API_BASE}/social`;
export const API_SOCIAL_POSTS = `${API_SOCIAL}/posts`;
export const API_SOCIAL_PROFILES = `${API_SOCIAL}/profiles`;

export const API_KEY = import.meta.env.VITE_API_KEY;
