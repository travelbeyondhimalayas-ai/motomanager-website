import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-50/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-brand-600">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
                M
              </span>
              MotoManager
            </div>
            <p className="mt-3 text-sm text-gray-600">
              The all-in-one app for bike &amp; scooter rental shop owners across India.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-brand">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-brand">Pricing</Link></li>
              <li><Link href="/get-started" className="hover:text-brand">Get Started</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/privacy" className="hover:text-brand">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Get the app</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-brand">App Store (coming soon)</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand">Google Play (coming soon)</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-100 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} MotoManager. Made for bike &amp; scooter rental shops in Rishikesh, Dehradun &amp; beyond.
        </div>
      </div>
    </footer>
  );
}
