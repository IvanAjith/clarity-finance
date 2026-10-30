# app/ — Future Interactive Web App

This folder is reserved for the **fully interactive Clarity Finance web app** — the productised version of the mockup in `../clarity-app/`.

## What Goes Here

When development starts, this folder will contain:

```
app/
├── index.html          ← Main app entry point
├── onboarding.html     ← Customer onboarding flow (minimum input)
├── dashboard.html      ← Personalised dashboard after onboarding
├── css/
│   └── styles.css
├── js/
│   ├── amortization.js ← Loan balance calculator (shared logic from dashboard)
│   ├── avalanche.js    ← Debt repayment strategy engine
│   └── app.js          ← Main app logic
└── README.md
```

## Core Product Concept

**Minimum customer input → Full personalised dashboard**

Customer types:
- Monthly take-home salary
- For each loan: balance, EMI, interest rate (%)

App auto-generates:
- Exact debt-free date
- Total interest remaining
- Which loan to attack first (avalanche method)
- Daily safe-to-spend budget
- Full bill calendar
- SIP recommendation

## Reference

- Mockup (8 screens): `../clarity-app/clarity-app.html`
- Artifact URL: https://claude.ai/artifact/KF1cfK1vN35DwLX4G2xqGD
- Working dashboard (Ajith's numbers): `../dashboard/Ajith_Financial_Advisor_v2.html`
- Artifact URL: https://claude.ai/artifact/PQZUpcvGmAGo4myCV2KvmV
