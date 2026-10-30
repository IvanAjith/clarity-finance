# 💰 Clarity Finance

> Personal finance dashboard built around Ajith Khan's real financial data.  
> Debt payoff tracker · Daily safe-to-spend calculator · Loan amortization · Clarity Finance product concept.

**Last Updated:** 30 Oct 2026  
**Owner:** Ajith Khan (IvanAjith) — khanajith.official@gmail.com  
**Built with:** Claude (multi-session AI-assisted development)

---

## 📁 Repository Structure

```
clarity-finance/
├── dashboard/                        ← Main financial dashboard HTML app
│   ├── Ajith_Financial_Advisor_v2.html   ← LATEST (V80) — use this
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

1. **Open the dashboard:** `dashboard/Ajith_Financial_Advisor_v2.html` in any browser — works offline
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

| Loan | Balance | EMI | Rate p.a. | Closes |
|------|---------|-----|-----------|--------|
| Solar Roof | ₹1,89,492 | ₹6,025 | 8.95% | Dec 2027 |
| Car Loan | ₹3,44,727 | ₹9,296 | 9.25% | Sep 2028 |
| Personal Loan | ₹1,87,335 | ₹6,883 | 13.00% | Nov 2028 |
| CRED Loan | ₹97,768 | ₹4,982 | 14.99% | Oct 2028 |
| MF Pledge | ₹35,000 | ₹375 | 0% | Dec 2027 |
| **TOTAL** | **₹8,54,322** | **₹27,561** | — | **Dec 2028** |

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

### SIP Schedule (April step-ups)

| Period | Monthly SIP | Phase |
|--------|-------------|-------|
| Oct 2026 – Mar 2027 | ₹15,750 | Push |
| Apr 2027 – Mar 2028 | ₹18,900 | Push |
| Apr 2028 – Mar 2029 | ₹22,680 | Push |
| Apr 2029 – Mar 2030 | ₹27,216 | Push |
| Apr 2030 – Mar 2031 | ₹28,577 | Grow |
| Apr 2031 onward | ₹30,006 | Grow |

### Goals Queue

| Priority | Goal | Amount | Target Date |
|----------|------|--------|-------------|
| 1 | Laptop | ₹15,000 | Dec 2026 |
| 2 | Vacation | ₹1,00,000 | Apr 2028 |
| 3 | Gold Chain | ₹50,000 | Sep 2028 |
| 4 | iPhone | ₹80,000 | Dec 2028 |

### Key Milestones

| Date | Milestone |
|------|-----------|
| Dec 2026 | Buy Laptop |
| Dec 2027 | Solar Roof + MF Pledge close |
| Apr 2028 | Vacation fund ready |
| Sep 2028 | Car Loan closes |
| Oct 2028 | CRED closes |
| Nov 2028 | Personal Loan closes |
| **Dec 2028** | **🎉 DEBT FREE** (26 months from Oct 2026) |

**Total remaining interest across all loans: ₹1,41,035**

---

## 🔧 Technical Work — Dashboard

### Dashboard HTML App (`dashboard/Ajith_Financial_Advisor_v2.html`)

- **Version:** V80 (latest)
- **Works:** Fully offline, all calculations in JS
- **Published Artifact:** https://claude.ai/artifact/PQZUpcvGmAGo4myCV2KvmV
- **Features:**
  - Live loan balances (formula-calculated for current month)
  - Avalanche payoff plan with milestone dates
  - Free cash calculator (salary − all outflows)
  - SIP tracker with step-up schedule
  - Goals tracker with target dates
  - Google Sheet HDFC balance auto-load (see below)

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

---

## ✅ Open Tasks

| Task | Status | Action |
|------|--------|--------|
| Google Sheet balance auto-load | ⏳ Blocked | Deploy Apps Script `doGet`, update URL in dashboard |
| Build fully interactive Clarity Finance web app | 🆕 New | Say "build the interactive Clarity Finance app" in new chat |
| Apps Script URL wiring | ⏳ Waiting | Receive URL from Ajith, update `fetchSheetBalance()` |

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

---

*Maintained by Claude (Anthropic). Updated after every significant session.*
