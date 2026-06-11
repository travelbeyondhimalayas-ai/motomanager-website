import Link from "next/link";

const features = [
  {
    title: "Rentals at a glance",
    desc: "Track active and past rentals — vehicle, customer, dates, charges, and security deposit — all in one list.",
    icon: "📋",
  },
  {
    title: "ID & licence capture",
    desc: "Snap photos of customer ID proof (front/back), driving licence, and capture a digital signature on handover.",
    icon: "🪪",
  },
  {
    title: "Auto-generated PDF receipts",
    desc: "Professional rental receipts with photos, signatures, and full terms & conditions — damage charges, late fees, traffic violation liability, generated instantly.",
    icon: "🧾",
  },
  {
    title: "Edit & extend rentals",
    desc: "Extend a rental or update charges and the receipt regenerates automatically — no manual rework.",
    icon: "🔁",
  },
  {
    title: "Fleet, agents & blacklist",
    desc: "Manage your full vehicle fleet, your booking agents, and keep a blacklist of problem customers.",
    icon: "🏍️",
  },
  {
    title: "Maintenance & expenses",
    desc: "Log servicing, repairs, and other expenses per vehicle to track real profitability.",
    icon: "🔧",
  },
  {
    title: "Owner & staff logins",
    desc: "Role-based access for multiple staff members, with the owner keeping full control.",
    icon: "👥",
  },
  {
    title: "QR codes for reviews & UPI",
    desc: "Print or display QR codes for Google Reviews and UPI payments at your counter.",
    icon: "🔳",
  },
  {
    title: "Real-time cloud sync",
    desc: "Built on Supabase — every staff phone stays in sync, in real time, across devices.",
    icon: "☁️",
  },
  {
    title: "DPDP Act 2023 compliant",
    desc: "Itemized data consent notices and secure private storage for customer ID documents, in line with India's Digital Personal Data Protection Act.",
    icon: "🔒",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-12 sm:px-6 md:flex-row md:py-20">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
              For bike & scooter rental shops in India
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Run your bike rental business{" "}
              <span className="text-brand">from your phone</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Receipts, fleet, staff, and customers — all in one app. Built by
              a rental shop owner in Rishikesh, for rental shop owners across
              India.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-white shadow-sm transition hover:bg-gray-800 sm:w-auto"
              >
                <span aria-hidden></span>
                <span className="text-left">
                  <span className="block text-[10px] leading-none">
                    Download on the
                  </span>
                  <span className="block text-sm font-semibold leading-tight">
                    App Store
                  </span>
                </span>
              </a>
              <a
                href="#"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-white shadow-sm transition hover:bg-gray-800 sm:w-auto"
              >
                <span aria-hidden></span>
                <span className="text-left">
                  <span className="block text-[10px] leading-none">
                    GET IT ON
                  </span>
                  <span className="block text-sm font-semibold leading-tight">
                    Google Play
                  </span>
                </span>
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              App Store / Play Store links coming soon
            </p>
          </div>

          <div className="flex flex-1 justify-center">
            <div className="flex h-[420px] w-[230px] items-center justify-center rounded-[2rem] border-8 border-gray-900 bg-brand-50 text-center text-sm text-brand-600 shadow-xl sm:h-[520px] sm:w-[280px]">
              App screenshot
              <br />
              placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Everything your rental counter needs
          </h2>
          <p className="mt-2 text-gray-600">
            One app to replace the notebook, the WhatsApp photos, and the
            Word-doc receipt template.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots strip */}
      <section className="bg-brand-50/50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            See it in action
          </h2>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
            {["Rentals", "New Rental", "Receipt PDF", "Fleet", "Dashboard"].map(
              (label) => (
                <div
                  key={label}
                  className="flex h-72 w-40 flex-shrink-0 items-center justify-center rounded-xl border-4 border-gray-900 bg-white text-center text-xs text-brand-600 shadow"
                >
                  {label}
                  <br />
                  screenshot
                  <br />
                  placeholder
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Ready to ditch the paperwork?
        </h2>
        <p className="mt-2 text-gray-600">
          Start your free trial today — no credit card needed to try it out.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/get-started"
            className="rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-dark"
          >
            Get Started
          </Link>
          <Link
            href="/pricing"
            className="rounded-full border border-brand-200 px-6 py-3 font-semibold text-brand-600 transition hover:bg-brand-50"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
