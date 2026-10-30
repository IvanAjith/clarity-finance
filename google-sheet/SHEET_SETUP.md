# Google Sheet Setup

**Sheet URL:** https://docs.google.com/spreadsheets/d/1rd_tUzWcjBO9H_J7WxxTZ1aHjzjLGrS4SuVL2-2CQwM/edit  
**Sheet ID:** `1rd_tUzWcjBO9H_J7WxxTZ1aHjzjLGrS4SuVL2-2CQwM`

## Column Structure (Sheet1)

| Column | Header | Type | Description |
|--------|--------|------|-------------|
| A | Timestamp | Auto | Auto-filled by onEdit trigger |
| B | Month | Auto | Auto-filled as YYYY-M (e.g. "2026-10") |
| C | HDFC Balance | Manual | User types actual HDFC savings balance |
| D | One-time Expense | Optional | Any large expense this month |
| E | Notes | Optional | Free-text notes |

## How to Enter Your Monthly Balance

1. Open the sheet
2. Go to the first empty row in **Column C**
3. Type your HDFC balance (e.g. `45000`)
4. Press Enter — columns A and B auto-fill
5. Refresh the dashboard — it picks up the latest balance automatically

## Apps Script Deployment

See `apps-script-doGet.js` for the full script and deployment steps.

The doGet web app URL must be set in `Ajith_Financial_Advisor_v2.html`:
```javascript
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
```

## Current Data (as of Oct 2026)

| Row | Month | Balance |
|-----|-------|---------|
| 2 | 2026-8 | ₹1,200 |
| 3 | 2026-10 | ₹5,600 |
| 4 | 2026-10 | ₹1,090 |
