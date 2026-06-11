const steps = [
  {
    title: "Download MotoManager",
    desc: "Get the app from the App Store or Google Play (links coming soon).",
  },
  {
    title: "Create your shop account",
    desc: "Sign up with your phone number and shop details. Add your vehicles and staff.",
  },
  {
    title: "Pick a plan & subscribe",
    desc: "Choose Basic or Pro, and pay securely via Razorpay (cards, UPI autopay, netbanking) — right inside the app.",
  },
  {
    title: "Start renting",
    desc: "Create your first rental, capture customer documents, and generate a PDF receipt in under a minute.",
  },
];

export default function GetStartedPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Get started with MotoManager
        </h1>
        <p className="mt-3 text-gray-600">
          The MotoManager app is where everything happens — including
          choosing your plan and subscribing. Here&apos;s how to get set up.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
              {i + 1}
            </div>
            <div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href="#"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-white shadow-sm transition hover:bg-gray-800 sm:w-auto"
        >
          <span className="text-left">
            <span className="block text-[10px] leading-none">GET IT ON</span>
            <span className="block text-sm font-semibold leading-tight">
              Google Play
            </span>
          </span>
        </a>
      </div>
      <p className="mt-3 text-center text-xs text-gray-400">
        App Store / Play Store links coming soon
      </p>
    </div>
  );
}
