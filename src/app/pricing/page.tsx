import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — MotoManager",
  description:
    "Simple INR pricing for bike & scooter rental shops. Free 1-week trial, plans from ₹99/month with 50% intro discount.",
};

// TODO: finalize pricing — these are placeholder amounts (in INR).
// Annual price = monthly x 10 (≈17% off, "2 months free").
const plans = [
  {
    name: "Free Trial",
    vehicles: "Up to 10 vehicles",
    staff: "1 owner account only",
    monthly: 0,
    introMonthly: 0,
    tagline: "Try MotoManager free for 1 week",
    isTrial: true,
    features: [
      "Full access to Growth features",
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
    name: "Starter",
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
    cta: "Start Starter",
  },
  {
    name: "Growth",
    vehicles: "Up to 30 vehicles",
    staff: "1 owner + 2 staff accounts",
    monthly: 399,
    introMonthly: 199,
    tagline: "For shops adding agents & tracking expenses",
    features: [
      "Everything in Starter, plus:",
      "Finance & expense tracking",
      "Vehicle maintenance tracking",
      "Agent management",
    ],
    cta: "Start Growth",
  },
  {
    name: "Pro",
    vehicles: "Up to 60 vehicles",
    staff: "1 owner + 3 staff accounts",
    monthly: 799,
    introMonthly: 399,
    tagline: "For established multi-staff fleets",
    highlighted: true,
    features: [
      "Everything in Growth, plus:",
      "Customer blacklist management",
      "Excel report generation",
    ],
    cta: "Start Pro",
  },
  {
    name: "Enterprise",
    vehicles: "Up to 200 vehicles",
    staff: "1 owner + 5 staff accounts",
    monthly: 1499,
    introMonthly: 750,
    tagline: "For your largest, multi-location operations",
    features: [
      "Everything in Pro",
      "Higher vehicle & staff limits",
    ],
    cta: "Start Enterprise",
  },
];

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade anytime from inside the app. Upgrades apply immediately; downgrades take effect from your next billing cycle.",
  },
  {
    q: "What happens when my free trial ends?",
    a: "Your data stays safe. You'll be asked to pick a paid plan to continue — nothing is deleted, and you can pick up exactly where you left off.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your records remain stored securely for a grace period so you can re-subscribe and continue, or request an export. After the grace period, data is deleted in line with our Privacy Policy.",
  },
  {
    q: "How do payments work?",
    a: "Subscriptions are billed through Razorpay inside the app — pay via UPI autopay, debit/credit card, or netbanking. You can cancel anytime; access continues until the end of the paid period.",
  },
  {
    q: "Does it work on multiple phones?",
    a: "Yes. Your shop's data syncs in real time across all owner and staff devices via secure cloud sync.",
  },
  {
    q: "Is my customers' ID data safe?",
    a: "Yes. ID documents and signatures are stored in private, access-controlled cloud storage, encrypted in transit, and handled in line with India's DPDP Act 2023 with itemized consent.",
  },
  {
    q: "What if I have more than 200 vehicles?",
    a: "Get in touch with us — we'll set up a custom plan for larger operations.",
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

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="text-center text-2xl font-bold">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-brand-100 bg-white p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="ml-4 text-brand transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
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
