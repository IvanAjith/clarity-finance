# 💰 Clarity Finance

> Personal finance dashboard built around Ajith Khan's real financial data.  
> Debt payoff tracker · Daily safe-to-spend calculator · Loan amortization · Clarity Finance product concept.

**Last Updated:** 31 Oct 2026  
**Owner:** Ajith Khan (IvanAjith) — khanajith.official@gmail.com  
**Built with:** Claude (multi-session AI-assisted development)

---

## 📁 Repository Structure

```
clarity-finance/
├── dashboard/                        ← Main financial dashboard HTML app
│   ├── Ajith_Financial_Advisor_v3.html   ← LATEST (V3, 01 Nov 2026) — use this
│   ├── Ajith_Financial_Advisor_v2.html   ← Previous version
│   └── Ajith_Financial_Advisor_v1.html   ← Original V1 (offline only)
│
├── loan-repayment-schedule/          ← Excel financial plan
│   └── Ajith_Financial_Plan_v1_Fresh.xlsx  ← 5-sheet full plan
│
├── google-sheet/                     ← Live balance tracking via Google Sheet
│   ├── apps-script-doGet.js          ← Deploy this to fix auto-load in dashboard
│   └── SHEET_SETUP.md                ← How to use the Google Sheet
│
├── clarity-app/                      ← Product concept mockup (8 screens)
│   └── clarity-app.html              ← Phone-shell UI mockup with Ajith's numbers
│
├── app/                              ← Future interactive web app (empty, reserved)
│   └── PLACEHOLDER.md                ← What goes here when development starts
│
└── README.md                         ← This file
```

---

## 🚀 Quick Start (for any AI or developer picking this up)

1. **Open the dashboard:** `dashboard/Ajith_Financial_Advisor_v3.html` in any browser — works offline
2. **Fix Google Sheet auto-load:** Deploy `google-sheet/apps-script-doGet.js`, update URL in dashboard (see below)
3. **See the product mockup:** Open `clarity-app/clarity-app.html` — 8-screen phone UI

---

## 👤 Ajith Khan — Financial Profile

| Field | Value |
|-------|-------|
| Name | Ajith Khan |
| Employee ID | IN1661 |
| Company | Systech Solutions, Chennai |
| Email | khanajith.official@gmail.com |
| Role | Senior Consultant |
| Stack | Microsoft Fabric, Power BI, Snowflake, DAX, Python, SQL |
| Certs | DP-600 (Fabric Analytics Engineer), Tableau Desktop Specialist, IBM Data Science PG |

---

## 💸 Complete Financial Data (Oct 2026)

### Net Take-Home Salary

| Period | Monthly Net |
|--------|-------------|
| Oct 2026 – Dec 2026 | ₹1,01,720 |
| Jan 2027 – Dec 2027 | ₹1,09,858 |
| Jan 2028 – Dec 2028 | ₹1,18,646 |
| Jan 2029 onward | ₹1,28,138 |

### Fixed Monthly Outflows

| Item | Amount |
|------|--------|
| Rent | ₹10,000 |
| Life Insurance | ₹2,290 |
| Health Insurance | ₹991 |
| ActiveOne | ₹1,633 |
| Family Plan | ₹11,500 |
| Credit Card (avg, paid in full) | ₹35,000 |
| Miscellaneous | ₹5,000 |
| Safety floor (min cash retained) | ₹20,000 |

### Loans — Oct 2026 Opening Balances

| Loan | Balance (Nov 2026) | EMI | Rate p.a. | Closes | Source |
|------|-------------------|-----|-----------|--------|--------|
| Solar Roof | ₹1,94,380 | ₹6,025 | 10.2% | Jun 2030 | CreditFair PDF macro0274220 |
| Car Loan | ₹3,54,023 | ₹9,296 | 13.5% | Nov 2030 | Bajaj Finance PDF P403PZC59921523 |
| Personal Loan | ₹1,87,335 | ₹6,883 | 13.00% | Nov 2028 | Confirmed correct |
| CRED Loan | ₹97,768 | ₹4,982 | 14.99% | Oct 2028 | Confirmed correct |
| MF Pledge | ₹35,000 | ₹375 | 0% | Dec 2027 | Confirmed correct |
| **TOTAL** | **₹8,68,506** | **₹27,561** | — | **Nov 2030** | |

> ⚠️ Solar and Car loan values corrected 01 Nov 2026 from actual lender repayment schedule PDFs (CreditFair & Bajaj Finance). EMIs were always correct; principals and rates were estimated wrongly in earlier sessions.

> CRED loan: ₹1,02,750 total / 24 months / auto-pay HDFC XX0090

**Loan balance formula:** `P × (1+r)^n − EMI × ((1+r)^n − 1) / r`  
where `n` = months from Oct 2026, `r` = monthly rate = annual rate / 12

---

## 📈 Financial Strategy

### Debt Repayment — Avalanche Method

Minimum EMIs on all loans; any extra free cash attacks the **highest interest rate loan first**:

1. CRED (14.99%) ← attack first
2. Personal Loan (13%)
3. Car Loan (9.25%)
4. Solar Roof (8.95%)
5. MF Pledge (0%)

**Plan:** Build Loan Emergency Fund to ₹1,00,000 → lump-sum prepay CRED loan early.

### Emergency Fund — Split EF Model

| Period | Loan EF Split | Goals EF Split |
|--------|---------------|----------------|
| Oct–Dec 2026 | 50% | 50% |
| Jan–Sep 2027 | 65% | 35% |
| Oct 2027–Feb 2028 | 70% | 30% |
| Mar 2028+ | 80% | 20% |

- Loan EF target: ₹1,00,000
- Goals EF target: ₹2,50,000

---

## 🏆 Primary Retirement Plan — Age 57 (USE THIS FOR ALL CALCULATIONS)

> **This is the canonical plan. Always use Age 57 unless Ajith explicitly asks for Age 55.**

### SIP Schedule — Age 57 Plan

| Period | Monthly SIP | Phase | Notes |
|--------|-------------|-------|-------|
| Oct 2026 – Mar 2027 | ₹15,750 | Push | During debt paydown |
| Apr 2027 – Mar 2028 | ₹18,900 | Push | +20% step-up |
| Apr 2028 – Dec 2028 | ₹22,680 | Push | +20% step-up |
| Jan 2029 – Dec 2029 | ₹33,000 | Boost | Debt-free! Jump to ₹33k |
| Jan 2030 – Dec 2030 | ₹34,650 | Boost | +5%/yr |
| Jan 2031 – Dec 2031 | ₹36,382 | Boost | +5%/yr |
| Jan 2032 – Dec 2032 | ₹38,202 | Grow | +3%/yr begins |
| Jan 2033 – Dec 2033 | ₹39,348 | Grow | +3%/yr |
| ... | +3%/yr | Grow | — |
| Jan 2050 – Dec 2050 | ₹65,036 | Grow | — |
| **Jan 2051 – Dec 2051** | **₹66,987** | **Grow** | **Final SIP — Age 57** |

**Key numbers (Age 57 plan @ 14% XIRR):**
- Plan end: Dec 2051 (age 57, 25 years of investing)
- Final monthly SIP: **₹66,987**
- Target corpus: **₹9.85 Cr**
- Total invested: ~₹1.41 Cr
- Wealth ratio: ~7.0×
- Bond lump sum: ₹27,086 added to equity corpus in Jan 2027

### Age 55 Alternative Plan (for reference only)

| Key Metric | Value |
|-----------|-------|
| Plan end | Dec 2048 (23 years) |
| Boost start | ₹41,000 (+12%/yr × 3yrs) |
| Final SIP | ₹92,434 (Dec 2048) |
| Target corpus | ~₹10.1 Cr |
| Extra cost vs Age 57 | ~₹42L more invested |

---

## 🔄 Revised SIP Plan (Oct 2026 Decision)

Ajith considered redeeming MF or pausing SIP to build emergency fund. Final analysis:

### MF Portfolio — Actual Position (Oct 2026)

| Item | Value |
|------|-------|
| Total MF portfolio | ₹1,33,887 |
| Of which pledged (locked till Dec 2027) | ₹35,000 |
| Freely redeemable | ₹98,887 |
| CRED loan payoff cost | ₹94,007 |
| Leftover after CRED payoff | ₹4,880 |

### Three Options Analysed

**Option A — Redeem MF to pay off a loan:** Redeem ₹98,887 → pay CRED (₹94,007) → only ₹4,880 left as EF seed. Starting corpus drops to ₹39,880 (pledge ₹35k + ₹4,880). Final Age 57 corpus drops significantly.

**Option B — Keep MF, continue as planned:** Maintain ₹1,55,111 corpus. Cash flow stays tight (ending each month with ₹5–6k).

**Option C — Pause SIP 5 months, build EF:** Pause Nov 2026, reduce Dec–Mar to ₹8,000, resume ₹18,900 Apr 2027. Analysis showed this barely moves the needle on EF given fixed expenses.

### Revised Plan Comparison (if Option A chosen — Age 57 basis)

| Metric | Original Plan | Revised Plan | Difference |
|--------|--------------|-------------|-----------|
| Starting corpus | ₹1,55,111 | ₹39,880 | −₹1,15,231 |
| PUSH phase SIP total | ₹5,25,420 | ₹4,62,920 | −₹62,500 |
| BOOST + GROW SIP | Identical | Identical | ₹0 |
| Total SIP invested | ₹1.72 Cr | ~₹1.71 Cr | −₹62,500 |

> Note: Full revised corpus figure for Age 57 plan not yet calculated — the ₹8.72 Cr / ₹9.11 Cr comparison was done on the Age 55 plan. For Age 57, recalculate if needed.

### SIP Amount Clarification (CONFIRMED)

- **Age 57 plan final SIP: ₹66,987/month (Dec 2051)** — this is what the dashboard shows
- **Age 57 plan max SIP ever: ₹66,987**
- Age 55 plan final SIP: ₹92,434/month (Dec 2048) — alternative only
- All future calculations: **use Age 57 plan**

---

## 🔧 Technical Work — Dashboard

### Dashboard HTML App (`dashboard/Ajith_Financial_Advisor_v2.html`)

- **Version:** V3 (01 Nov 2026 — latest, corrected loan data)
- **Works:** Fully offline, all calculations in JS
- **Published Artifact:** https://claude.ai/artifact/PQZUpcvGmAGo4myCV2KvmV
- **File:** `dashboard/Ajith_Financial_Advisor_v3.html`
- **Features:**
  - Live loan balances (formula-calculated for current month)
  - Avalanche payoff plan with milestone dates
  - Free cash calculator (salary − all outflows)
  - SIP tracker with step-up schedule
  - Goals tracker with target dates
  - Google Sheet HDFC balance auto-load (see below)
  - Two retirement plan toggles: Age 57 (primary) and Age 55 (alternative)

### Dashboard Key Constants

```javascript
existingCorpus: 155111   // Oct 2026 opening equity MF corpus
bondFundValue:   20631   // ICICI Pru Dynamic Bond Fund
bondLumpJan27:   27086   // Bond fund redeemed Jan 2027, added to equity corpus
```

> ⚠️ If Ajith proceeds with CRED payoff using MF redemption, update `existingCorpus` to `39880`

### Google Sheet Integration

**Sheet URL:** https://docs.google.com/spreadsheets/d/1rd_tUzWcjBO9H_J7WxxTZ1aHjzjLGrS4SuVL2-2CQwM/edit

**Columns:**
- A: Timestamp (auto)
- B: Month key YYYY-M (auto)
- C: HDFC Savings Balance (user types this)
- D: One-time expense (optional)
- E: Notes (optional)

#### ⚠️ Known Issue — Balance Auto-Load Broken

**Root cause:** Claude Artifact's Content Security Policy (CSP) blocks all external fetches.
- `fetch()` to `docs.google.com` → blocked
- JSONP `<script src="docs.google.com/...">` → blocked
- Only CDN scripts from cdnjs/jsdelivr/unpkg/tailwind/jquery are allowed

**Fix (pending deployment):**

Deploy `google-sheet/apps-script-doGet.js` as a Google Apps Script Web App:
1. Open Sheet → Extensions → Apps Script
2. Paste the script (keep existing `onEdit`)
3. Deploy → New deployment → Web app
4. Execute as: Me | Who has access: Anyone
5. Copy the URL: `https://script.google.com/macros/s/.../exec`
6. In `Ajith_Financial_Advisor_v2.html`, update:
   ```javascript
   const APPS_SCRIPT_URL = 'YOUR_URL_HERE';
   ```
7. Republish the Claude Artifact

---

## 📱 Clarity Finance — Product Concept

### What It Is

A productised personal finance app. Customer enters minimum details → instant personalised dashboard.

### 8 Screens (Mockup)

| Screen | Description |
|--------|-------------|
| Home | Available cash, total debt, daily safe-to-spend, upcoming bills |
| Streams | All recurring income + expenses (EMIs, SIP, salary, rent) |
| Debt Tracker | All loans ranked by interest rate, avalanche auto-applied |
| Clarity/Transactions | Report card, spend alerts, transaction log by category |
| Budget Planner | Category-wise limits with red/amber/green progress bars |
| Privacy Mode | One tap hides all numbers (•••••) |
| Payoff Calculator | Exact debt-free date + all loan milestones |
| Onboarding | Minimum input flow — salary + loans → dashboard auto-generates |

### Onboarding Flow (Minimum Friction)

**Customer inputs:**
- Monthly take-home salary
- For each loan: balance, EMI, interest rate

**Auto-generated:**
- Exact debt-free date
- Total interest remaining
- Which loan to attack first (avalanche)
- Daily safe-to-spend budget
- Full streams + bill calendar

### Mockup Artifact
https://claude.ai/artifact/KF1cfK1vN35DwLX4G2xqGD

---

## ❌ CRED Consolidation — Analysis (Oct 2026)

**CRED offer:** ₹8,60,000 at 14.99% p.a. + ₹6,999 processing fee

**Verdict: DON'T CONSOLIDATE**

| Option | EMI | Extra Interest | Debt-free Pushed By |
|--------|-----|----------------|---------------------|
| Current avalanche | ₹27,561 (drops) | — | — |
| 36M consolidation | ₹30,051 | +₹76,321 | 9 months |
| 48M consolidation | ₹24,125 | +₹1,51,778 | 21 months |
| 60M consolidation | ₹20,621 | +₹2,30,243 | 34 months |
| 72M consolidation | ₹18,328 | +₹3,11,608 | 46 months |

**Why:** Same 14.99% rate as CRED loan. All current loan interest totals ₹1,41,035. Consolidation costs ₹2.1L–₹4.5L extra. Stick to avalanche.

---

## 📋 Session History

| Session | Date | What Was Done |
|---------|------|---------------|
| 1 | Earlier 2026 | Built financial plan from scratch; `Ajith_Financial_Plan_v1_Fresh.xlsx`; V1 dashboard; Google Sheet + onEdit trigger |
| 2 | Oct 2026 | Built V80 dashboard; JSONP → fetch() CSP debugging; Apps Script fix identified; published Artifact; CRED analysis |
| 3 | Oct 2026 | CRED verdict re-confirmed; built 8-screen Clarity Finance mockup; created README; created this GitHub repo |
| 4 | 31 Oct 2026 | Financial advisory: MF redemption vs SIP pause vs keep-as-is. Discovered ₹35k MF pledged (only ₹98,887 redeemable). Option A/B/C analysis. Chose Option C (pause SIP Dec–Apr). Confirmed Age 57 as primary plan. Chit fund ₹1.5L potential in Dec 2027 (not confirmed — excluded from plan). |
| 5 | 01 Nov 2026 | **LOAN DATA CORRECTION** — Cross-verified all loans against actual lender PDFs. Solar (CreditFair) and Car (Bajaj Finance) had wrong principals and rates. EMIs were correct. Debt-free date corrected from Dec 2028 → Nov 2030. All dashboard visuals, tables, charts, milestones, and chatbot updated. |

---

## ✅ Open Tasks

| Task | Status | Action |
|------|--------|--------|
| Google Sheet balance auto-load | ⏳ Blocked | Deploy Apps Script `doGet`, update URL in dashboard |
| Build fully interactive Clarity Finance web app | 🆕 New | Say "build the interactive Clarity Finance app" in new chat |
| Apps Script URL wiring | ⏳ Waiting | Receive URL from Ajith, update `fetchSheetBalance()` |
| Decide: redeem MF to pay CRED or keep as-is | ⏳ Pending | Ajith to confirm; if yes, update `existingCorpus` to ₹39,880 in dashboard |
| Recalculate revised plan corpus for Age 57 | ⏳ Pending | If Option A chosen, run simulation with ₹39,880 seed on Age 57 schedule |

---

## 💬 How to Continue in a New Chat

Paste this into your first message:

```
I'm Ajith Khan. My finance project is at GitHub repo IvanAjith/clarity-finance.
Read the README.md — it has all financial data and session history.
Here's what I want to do next: [describe task]
```

Or with file attached:
```
Read this README.md and continue the Clarity Finance project.
[attach README.md]
```

> **Important for AI reading this:** Always use the **Age 57 plan** for all SIP and corpus calculations unless Ajith explicitly asks for Age 55. The Age 57 plan has a final SIP of ₹66,987/month and targets ₹9.85 Cr by Dec 2051.

---

*Maintained by Claude (Anthropic). Updated after every significant session.*
