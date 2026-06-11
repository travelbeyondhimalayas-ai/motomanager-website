import Link from "next/link";

// TODO: finalize pricing — these are placeholder amounts (in INR).
// Annual price = monthly x 10 (≈17% off, "2 months free").
const plans = [
  {
    name: "Free Trial",
    vehicles: "Up to 30 vehicles",
    staff: "1 owner account only",
    monthly: 0,
    introMonthly: 0,
    tagline: "Try MotoManager free for 1 week",
    isTrial: true,
    features: [
      "Full access to Tier 2 features",
      "Rental form & customer management",
      "ID, licence & digital signature capture",
      "Auto-generated PDF receipts",
      "Edit & extend rentals",
      "Fleet management",
      "QR codes for Google Reviews & UPI",
      "Finance & expense tracking",
      "Vehicle maintenance tracking",
      "Agent management",
      "DPDP-compliant consent & secure storage",
      "No card required",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Tier 1",
    vehicles: "Up to 15 vehicles",
    staff: "1 owner + 1 staff account",
    monthly: 199,
    introMonthly: 99,
    tagline: "For small shops just getting started",
    features: [
      "Rental form & customer management",
      "ID, licence & digital signature capture",
      "Auto-generated PDF receipts",
      "Edit & extend rentals",
      "Fleet management",
      "QR codes for Google Reviews & UPI",
      "DPDP-compliant consent & secure storage",
    ],
    cta: "Start Tier 1",
  },
  {
    name: "Tier 2",
    vehicles: "Up to 30 vehicles",
    staff: "1 owner + 2 staff accounts",
    monthly: 399,
    introMonthly: 199,
    tagline: "For shops adding agents & tracking expenses",
    features: [
      "Everything in Tier 1, plus:",
      "Finance & expense tracking",
      "Vehicle maintenance tracking",
      "Agent management",
    ],
    cta: "Start Tier 2",
  },
  {
    name: "Tier 3",
    vehicles: "Up to 60 vehicles",
    staff: "1 owner + 3 staff accounts",
    monthly: 799,
    introMonthly: 399,
    tagline: "For established multi-staff fleets",
    highlighted: true,
    features: [
      "Everything in Tier 2, plus:",
      "Customer blacklist management",
      "Excel report generation",
    ],
    cta: "Start Tier 3",
  },
  {
    name: "Tier 4",
    vehicles: "Up to 200 vehicles",
    staff: "1 owner + 5 staff accounts",
    monthly: 1499,
    introMonthly: 750,
    tagline: "For your largest, multi-location operations",
    features: [
      "Everything in Tier 3",
      "Higher vehicle & staff limits",
    ],
    cta: "Start Tier 4",
  },
];

function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-3 text-gray-600">
          Pick the plan that matches your fleet size. Billed monthly or
          annually. Cancel anytime from inside the app.
        </p>
        <p className="mt-1 text-xs text-amber-600">
          Pricing shown below is placeholder — final amounts to be confirmed.
        </p>
        <div className="mt-4 inline-block rounded-full bg-brand text-white px-4 py-1.5 text-sm font-semibold">
          🎉 Limited-time intro offer: 50% off for early adopters
        </div>
      </div>

      <div className="mt-12 -mx-4 flex gap-6 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible">
        {plans.map((plan) => {
          return (
            <div
              key={plan.name}
              className={`relative flex w-72 flex-shrink-0 flex-col rounded-2xl border p-6 shadow-sm sm:w-auto ${
                plan.highlighted
                  ? "border-brand bg-brand-50/40 shadow-md"
                  : "border-brand-100 bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}

              <h2 className="text-lg font-bold">{plan.name}</h2>
              <p className="mt-1 text-xs text-gray-600">{plan.tagline}</p>

              <div className="mt-4 space-y-1 text-sm font-medium text-brand-700">
                <div>{plan.vehicles}</div>
                <div>{plan.staff}</div>
              </div>

              <div className="mt-4">
                {plan.isTrial ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold">Free</span>
                    <span className="text-sm text-gray-500">for 7 days</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold">
                        {formatINR(plan.introMonthly)}
                      </span>
                      <span className="text-sm text-gray-500">/ month</span>
                      <span className="text-sm text-gray-400 line-through">
                        {formatINR(plan.monthly)}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      or {formatINR(plan.introMonthly * 10)} / year (2 months
                      free)
                    </div>
                    <div className="mt-1 text-xs font-semibold text-brand-600">
                      Intro price — 50% off
                    </div>
                  </>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-brand">✓</span>
                    <span
                      className={
                        f.endsWith(":")
                          ? "font-semibold text-gray-700"
                          : "text-gray-600"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/get-started"
                className={`mt-6 block rounded-full px-4 py-2.5 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-brand text-white hover:bg-brand-dark"
                    : "border border-brand-200 text-brand-600 hover:bg-brand-50"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-brand-100 bg-brand-50/40 p-6 text-center text-sm text-gray-600">
        <p>
          <strong>How billing works:</strong> Subscriptions are managed
          directly inside the MotoManager app via Razorpay (cards, UPI
          autopay, netbanking). Download the app, create your shop account,
          and pick a plan to start your subscription.
        </p>
      </div>
    </div>
  );
}
