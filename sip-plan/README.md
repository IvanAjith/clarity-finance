# 25-Year SIP Plan (Nov 2026 – Mar 2052)

Latest plan, updated 10/11/2026. Contains SIP amounts and projections only — no salary, loan or family-cost details.

## Files
| File | What it has |
|---|---|
| [`../SIP_Monthly_Schedule_Dashboard.csv`](../SIP_Monthly_Schedule_Dashboard.csv) | One row per month (Nov 2026 – Mar 2052): SIP, change, phase, invested and corpus at 10%/12%/14%, plus the debt-bucket corpus at 12%. Look up a month by `month_key` (for example `2028-07`). |
| [`SIP_Plan_Yearly_Summary.csv`](SIP_Plan_Yearly_Summary.csv) | One row per financial year: SIP, cumulative invested, corpus at 10%/12%/14%. |
| [`SIP_Projection_By_Age_Before_After_Tax.csv`](SIP_Projection_By_Age_Before_After_Tax.csv) | Ages 52–57 and maturity: invested, before-tax and after-tax values at 10%/12%/14%. |

## The plan (₹ per month)
| Period | SIP | Change |
|---|---|---|
| Nov 2026 – Dec 2027 | ₹15,750 | start, held flat |
| Jan 2028 – Sep 2028 | ₹18,250 | +15.9% |
| Oct 2028 | ₹20,850 | +14.3% |
| Nov 2028 | ₹23,800 | +14.1% |
| Dec 2028 – Mar 2034 | ₹27,900 | +17.2% |
| Apr 2034 – Mar 2038 | ₹29,600 | +6.1% |
| Apr 2038 – Mar 2039 | ₹31,550 | +6.6% |
| Apr 2039 – Mar 2043 | ₹34,650 | +9.8% |
| Apr 2043 – Mar 2047 | ₹15,750 | planned step-down (−54.5%) |
| Apr 2047 – Mar 2048 | ₹26,500 | planned step-up (+68.3%) |
| Apr 2048 – Mar 2052 | ₹0 | SIP stops; corpus keeps compounding |

Total invested: **₹69.0L** (₹67.5L of SIPs + ₹1.5L opening corpus).

## Projection by age (last 3 years in debt)
Equity grows at 10% / 12% / 14% until 31/03/2049; from 01/04/2049 the corpus is in debt at 6.5%. Each row assumes everything is sold on that date.

| Age | Date | Invested | Before tax 10% | Before tax 12% | Before tax 14% | After tax 10% | After tax 12% | After tax 14% | After tax 12%, in today's money |
|---|---|---|---|---|---|---|---|---|---|
| 52 | 30/09/2046 | ₹64.9L | ₹1.95 Cr | ₹2.47 Cr | ₹3.13 Cr | ₹1.78 Cr | ₹2.23 Cr | ₹2.81 Cr | ₹0.70 Cr |
| 53 | 30/09/2047 | ₹67.4L | ₹2.17 Cr | ₹2.79 Cr | ₹3.60 Cr | ₹1.98 Cr | ₹2.51 Cr | ₹3.22 Cr | ₹0.74 Cr |
| 54 | 30/09/2048 | ₹69.0L | ₹2.40 Cr | ₹3.14 Cr | ₹4.12 Cr | ₹2.18 Cr | ₹2.82 Cr | ₹3.67 Cr | ₹0.79 Cr |
| 55 | 30/09/2049 | ₹69.0L | ₹2.60 Cr | ₹3.43 Cr | ₹4.54 Cr | ₹2.33 Cr | ₹3.05 Cr | ₹4.00 Cr | ₹0.80 Cr |
| 56 | 30/09/2050 | ₹69.0L | ₹2.77 Cr | ₹3.65 Cr | ₹4.83 Cr | ₹2.44 Cr | ₹3.19 Cr | ₹4.18 Cr | ₹0.79 Cr |
| 57 | 30/09/2051 | ₹69.0L | ₹2.95 Cr | ₹3.89 Cr | ₹5.15 Cr | ₹2.55 Cr | ₹3.33 Cr | ₹4.38 Cr | ₹0.78 Cr |
| 57y7m (maturity) | 31/03/2052 | ₹69.0L | ₹3.05 Cr | ₹4.01 Cr | ₹5.31 Cr | ₹2.61 Cr | ₹3.41 Cr | ₹4.48 Cr | ₹0.78 Cr |

"Before tax" ignores the tax triggered by the switch to debt on 31/03/2049; "after tax" includes it.

### Tax assumptions
- Equity gains: 12.5% + 4% cess on gains above ₹1.25L (long-term). The 31/03/2049 switch from equity to debt is a sale, so this tax is paid on that date (about ₹34L at 12%).
- Debt-fund gains: slab rate, taken as 30% + 4% cess = 31.2%, charged on redemption.
- Surcharge is not included. Rules may change — check at redemption.

### Hold-phase options (maturity at 12%, before tax)
| Option | Normal | If equity falls 40% in the final year |
|---|---|---|
| 100% equity to the end | ₹4.67 Cr | ₹2.50 Cr |
| 100% debt from 01/04/2048 | ₹3.82 Cr | ₹3.82 Cr |
| Equity to 31/03/2049, debt for the last 3 years (chosen) | ₹4.01 Cr | ₹4.01 Cr |
| Gradual shift to 30% equity | ₹4.35 Cr | ₹3.44 Cr |

After tax at 12%, all-equity gives ₹4.15 Cr against ₹3.41 Cr for the debt bucket, so the crash protection costs about ₹0.74 Cr. An equity-taxed low-risk fund (such as arbitrage) for the last 3 years would give about ₹3.52 Cr.

## Assumptions
- Monthly compounding at an effective annual 10% / 12% / 14% on equity; debt at 6.5%; each SIP is invested at month end.
- Today's-money values use 6% inflation.
- Figures are projections, not guarantees.
