import Link from "next/link";

// TODO: finalize pricing — these are placeholder amounts (in INR).
// Annual price = monthly x 10 (≈17% off, "2 months free").
const plans = [
  {
    name: "Starter",
    vehicles: "Up to 10 vehicles",
    staff: "1 staff login (owner only)",
    monthly: 299,
    tagline: "For small shops just getting started",
    features: [
      "Unlimited rentals & PDF receipts",
      "Customer ID & licence capture + signature",
      "DPDP-compliant consent & storage",
    ],
    cta: "Start Starter",
  },
  {
    name: "Standard",
    vehicles: "Up to 20 vehicles",
    staff: "Up to 3 staff logins",
    monthly: 599,
    tagline: "For shops adding their first staff",
    features: [
      "Everything in Starter, plus:",
      "Custom shop logo & branding on receipts",
      "Customer blacklist management",
      "Vehicle expense tracking",
    ],
    cta: "Start Standard",
  },
  {
    name: "Growth",
    vehicles: "Up to 50 vehicles",
    staff: "Up to 5 staff logins",
    monthly: 999,
    tagline: "For the typical multi-staff fleet",
    highlighted: true,
    features: [
      "Everything in Standard, plus:",
      "Agent management",
      "QR codes for Google Reviews & UPI",
    ],
    cta: "Start Growth",
  },
  {
    name: "Fleet",
    vehicles: "Up to 100 vehicles",
    staff: "Up to 10 staff logins",
    monthly: 1799,
    tagline: "For larger multi-location fleets",
    features: ["Everything in Growth, plus:", "Priority support"],
    cta: "Start Fleet",
  },
  {
    name: "Enterprise",
    vehicles: "101–150 vehicles",
    staff: "Unlimited staff logins",
    monthly: 2499,
    tagline: "For your biggest operations",
    features: ["Everything in Fleet, plus:", "Unlimited staff logins"],
    cta: "Start Enterprise",
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
      </div>

      <div className="mt-12 -mx-4 flex gap-6 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible">
        {plans.map((plan) => {
          const annual = plan.monthly * 10; // 2 months free
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
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">
                    {formatINR(plan.monthly)}
                  </span>
                  <span className="text-sm text-gray-500">/ month</span>
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  or {formatINR(annual)} / year (2 months free)
                </div>
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
