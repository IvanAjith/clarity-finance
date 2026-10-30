/**
 * Clarity Finance — Google Apps Script Web App Proxy
 *
 * PURPOSE:
 *   Claude Artifacts have a strict Content Security Policy (CSP) that blocks
 *   all external fetches except approved CDN scripts. This doGet function acts
 *   as a CORS-friendly proxy: the Artifact fetches this web app URL (on
 *   script.google.com, which IS allowed), and this script reads the Google
 *   Sheet and returns plain JSON.
 *
 * DEPLOYMENT STEPS:
 *   1. Open the Google Sheet:
 *      https://docs.google.com/spreadsheets/d/1rd_tUzWcjBO9H_J7WxxTZ1aHjzjLGrS4SuVL2-2CQwM/edit
 *   2. Extensions → Apps Script
 *   3. Paste this ENTIRE file (keep the existing onEdit function below too)
 *   4. Click Deploy → New deployment
 *   5. Type: Web app
 *   6. Execute as: Me (IvanAjith / khanajith.official@gmail.com)
 *   7. Who has access: Anyone
 *   8. Click Deploy → Authorize → Allow
 *   9. Copy the web app URL — looks like:
 *      https://script.google.com/macros/s/AKfycb.../exec
 *  10. In Ajith_Financial_Advisor_v2.html, replace the doGet URL constant:
 *      const APPS_SCRIPT_URL = 'YOUR_URL_HERE';
 *      Then republish the Claude Artifact.
 *
 * GOOGLE SHEET STRUCTURE (Sheet1):
 *   Column A — Timestamp (auto-filled by onEdit)
 *   Column B — Month (YYYY-M format, e.g. "2026-10") (auto-filled by onEdit)
 *   Column C — HDFC Savings Balance (₹ amount, user types this)
 *   Column D — One-time Expense this month (optional)
 *   Column E — Notes (optional)
 */

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const data = sheet.getDataRange().getValues();

  const rows = data.slice(1).map(r => ({
    timestamp: r[0] ? r[0].toString() : '',
    month:     r[1] ? Utilities.formatDate(new Date(r[1]), 'Asia/Kolkata', 'yyyy-M') : '',
    balance:   r[2] || 0,
    onetimeExpense: r[3] || 0,
    notes:     r[4] || ''
  }));

  return ContentService
    .createTextOutput(JSON.stringify({ rows }))
    .setMimeType(ContentService.MimeType.JSON);
}


/**
 * onEdit trigger — auto-fills Timestamp (col A) and Month (col B)
 * when user types a balance in column C.
 * This trigger is ALREADY INSTALLED on the live sheet.
 * Include it here so re-deploying doesn't lose it.
 */
function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  if (sheet.getName() !== 'Sheet1') return;

  const range = e.range;
  if (range.getColumn() !== 3) return; // Only trigger on column C (balance)

  const row = range.getRow();
  if (row === 1) return; // Skip header

  const now = new Date();
  sheet.getRange(row, 1).setValue(now);                   // Column A: timestamp
  sheet.getRange(row, 2).setValue(                         // Column B: month key
    now.getFullYear() + '-' + (now.getMonth() + 1)
  );
}
