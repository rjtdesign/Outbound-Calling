# 🚀 Valiant LifeCare — Outreach Command Center

> Healthcare RCM Patient Engagement Dashboard
> Production-grade dashboard with patient detail page, transcripts, recordings, AI insights

---

## 📦 What's Inside

```
valiant-dashboard/
├── index.html              ← Main dashboard
├── patient-detail.html     ← Patient detail page (transcript + recording)
├── dr-sarah.png            ← Dr. Sarah AI mascot image
├── config.js               ← Google Sheets API config (for Phase 2)
├── vercel.json             ← Vercel deployment config
└── README.md               ← This file
```

---

## ⚡ QUICK TEST (Local Preview - 30 Seconds)

1. **Download all files** from this folder
2. **Keep them in same folder** (important!)
3. **Double-click `index.html`** → Opens in browser
4. Click any patient row → opens `patient-detail.html`

**That's it for local preview!** 🎉

---

## 🌐 DEPLOY TO VERCEL (Free, 5 Minutes)

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Sign up with **GitHub** (free, no credit card)

### Step 2: Deploy via Drag & Drop
1. Go to https://vercel.com/new
2. **Drag the entire `valiant-dashboard` folder** into Vercel
3. Click "Deploy"
4. **Done!** URL like: `https://valiant-dashboard.vercel.app`

### Step 3: Custom Domain (Optional)
1. Vercel Dashboard → Settings → Domains
2. Add `dashboard.valiantlifecare.com`
3. Update DNS records as Vercel guides

---

## 🔌 PHASE 2: Connect Live Google Sheets Data

> Currently shows demo data. To connect your real Sheet:

### Step 1: Make Sheet Publicly Viewable
1. Open Google Sheet "Vapi - Valiant Life Care"
2. Share → "Anyone with link" → Viewer

### Step 2: Get API Key
1. https://console.cloud.google.com/
2. New Project → "valiant-dashboard"
3. Enable APIs → "Google Sheets API"
4. Credentials → Create API Key

### Step 3: Update config.js
```javascript
const CONFIG = {
  SHEET_ID: '1RCGBCFQQKQF0cCaylnMLLqQE5rItnncm0c5r94zjygQ',
  API_KEY: 'YOUR_API_KEY_HERE',
  REFRESH_INTERVAL: 30000
};
```

### Step 4: Add to index.html before `</body>`:
```html
<script src="config.js"></script>
<script>
  async function fetchSheetData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.SHEET_ID}/values/Sheet1?key=${CONFIG.API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.values;
  }

  async function refreshDashboard() {
    const rows = await fetchSheetData();
    if (!rows) return;
    const total = rows.length - 1;
    const booked = rows.filter(r => r[23] === 'Booked').length;
    const pending = rows.filter(r => r[4] === 'Pending').length;
    // Update DOM with real values
    console.log({ total, booked, pending });
  }

  refreshDashboard();
  setInterval(refreshDashboard, CONFIG.REFRESH_INTERVAL);
</script>
```

---

## 🎨 DESIGN FEATURES

### ✨ Animations:
- Animated counters (count-up on load)
- Calendar bounce (current day pulsing)
- Dr. Sarah bobbing
- Orbital rings rotating
- Sparkles glowing
- ECG line drawing
- Heart pulsing
- Live clock + call timer
- Background dots with connecting lines
- Hover lift on cards
- Toast on booking

### 🎯 Interactions:
- Click patient row → detail page with transcript
- Click "Accept" → calendar bounces + toast appears
- Hover cards → lift with shadow

### 🏥 Healthcare Touches:
- ECG waveform animations
- Heart pulse on health score
- Medical cross + heart + shield icons floating
- Stethoscope branded lime green

---

## 📊 PATIENT DETAIL PAGE

Click any patient row to see:
- ✅ Hero profile card
- ✅ 4 stat boxes (Calls, Duration, Interest, Revenue)
- ✅ Call timeline (3 calls)
- ✅ **Custom waveform audio player** (play/pause)
- ✅ AI summary with sentiment tags
- ✅ Transcript preview with "Read full" button
- ✅ Quick Actions (Call, Email, Callback, DNC)
- ✅ Engagement trend chart
- ✅ AI Insights (best time, talking points, cautions)

---

## 🔧 TECH STACK

- HTML5 + CSS3 + Vanilla JS (no frameworks)
- Google Fonts: Inter + Plus Jakarta Sans
- No build step — open in browser directly
- Mobile responsive

---

## ⚖️ LICENSE NOTE

Dr. Sarah PNG is from Pngtree.
- **Demo / non-commercial:** Generally OK
- **Commercial deployment:** Verify your Pngtree license

---

## 💡 BOSS DEMO TIPS

1. **Open in Chrome** for best performance
2. **Press F11** for fullscreen
3. **Demo flow:**
   - Show dashboard → "Real-time outreach metrics"
   - Click patient row → "Full call history with AI insights"
   - Show waveform → "Audio recordings with transcripts"
   - Click "Accept" pending → "Calendar bounces, toast notification"
4. **Mention:** "Connected to Vapi calling system + n8n workflow + Google Sheets backend"

---

## 🎉 BUILT IN 3 DAYS

- **Day 1:** Vapi + n8n outbound calling system
- **Day 2:** Post-call data extraction & sheet updates
- **Day 3:** This dashboard

**Boss demo ready!** 🚀

---

**Built for:** Rajat Bhasin — VLMS Global Healthcare / Valiant LifeCare

*Brand: Royal Blue (#1E3A8A) + Lime Green (#C5F76C) + Indigo (#5B5FED)*
