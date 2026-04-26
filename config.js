// =====================================
// VALIANT LIFECARE - DASHBOARD CONFIG
// =====================================
// 
// SETUP INSTRUCTIONS:
// 1. Get your Google Sheets API Key:
//    - Go to https://console.cloud.google.com/
//    - Create new project (or use existing)
//    - Enable "Google Sheets API"
//    - Create credentials → API Key
//    - Restrict key to "Google Sheets API" only
//
// 2. Make your Sheet PUBLIC (read-only):
//    - Open your Google Sheet
//    - Click "Share" → "Anyone with the link" → "Viewer"
//    - Copy the Sheet ID from URL:
//      https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
//
// 3. Update values below
// =====================================

const CONFIG = {
  // Replace with your actual values
  SHEET_ID: '1RCGBCFQQKQF0cCaylnMLLqQE5rItnncm0c5r94zjygQ',
  SHEET_NAME: 'Sheet1',
  API_KEY: 'YOUR_GOOGLE_SHEETS_API_KEY_HERE',
  
  // Refresh interval in milliseconds (30 seconds)
  REFRESH_INTERVAL: 30000,
  
  // Branding
  COMPANY_NAME: 'Valiant LifeCare',
  TAGLINE: 'Healthcare RCM Patient Engagement',
  ADMIN_NAME: 'Rajat Bhasin',
  ADMIN_INITIALS: 'RB',
  ADMIN_ROLE: 'Admin'
};
