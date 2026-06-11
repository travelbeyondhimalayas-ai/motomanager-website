export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 prose prose-headings:font-bold prose-a:text-brand">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-gray-500">Last updated: [DATE — TODO]</p>

      <p>
        MotoManager (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides a
        mobile application that helps bike and scooter rental shop owners
        (&quot;Shop Owners&quot;, &quot;you&quot;) manage rentals, customers,
        fleet, and staff. This Privacy Policy explains how we collect, use,
        store, and protect personal data, in accordance with the Digital
        Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;) and other
        applicable Indian laws.
      </p>

      <h2>1. Data we collect</h2>
      <p>As a Shop Owner using MotoManager, you may enter or capture:</p>
      <ul>
        <li>Your shop&apos;s account details (name, phone number, email, address)</li>
        <li>Staff account details (name, role, login credentials)</li>
        <li>
          Customer (renter) data, including: name, phone number, address,
          government ID proof (front/back photos — e.g. Aadhaar, Passport,
          Voter ID), driving licence photo, and a digital signature captured
          at the time of rental
        </li>
        <li>Rental records: vehicle assigned, rental dates, charges, security deposit amounts</li>
        <li>Vehicle and fleet records, maintenance and expense logs</li>
        <li>Subscription and billing information processed via Razorpay</li>
        <li>Basic device and usage information for app functionality and support</li>
      </ul>

      <h2>2. Itemized purpose of collection (DPDP Act consent notice)</h2>
      <p>
        In line with the DPDP Act&apos;s requirement for clear, itemized
        consent, the following table sets out why each category of customer
        data is collected:
      </p>
      <table>
        <thead>
          <tr>
            <th>Data category</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID proof (front/back photos)</td>
            <td>Identity verification and fraud prevention for vehicle handover</td>
          </tr>
          <tr>
            <td>Driving licence photo</td>
            <td>Verifying the renter is legally permitted to operate the vehicle</td>
          </tr>
          <tr>
            <td>Digital signature</td>
            <td>Recording acceptance of rental terms &amp; conditions on the receipt</td>
          </tr>
          <tr>
            <td>Name, phone, address</td>
            <td>Contacting the customer regarding the rental, disputes, or recovery of the vehicle/dues</td>
          </tr>
          <tr>
            <td>Rental &amp; charge details</td>
            <td>Generating receipts, invoicing, and accounting for the Shop Owner</td>
          </tr>
        </tbody>
      </table>
      <p>
        Within the app, customers (or the Shop Owner on their behalf, where
        permitted) are shown an itemized consent notice covering the above
        categories before their data is captured.
      </p>

      <h2>3. How customer data is stored</h2>
      <p>
        Customer ID documents, licence photos, and signatures are stored
        securely using Supabase&apos;s cloud infrastructure with
        access-controlled storage buckets. Access is restricted to the Shop
        Owner&apos;s account and authorized staff logins for that shop only.
        Data is encrypted in transit (HTTPS/TLS).
      </p>

      <h2>4. Data retention</h2>
      <p>
        Customer rental records and associated documents are retained for as
        long as the Shop Owner&apos;s account remains active and as required
        for legitimate business, accounting, and legal purposes (e.g.
        resolving disputes about damages or traffic violations). Shop Owners
        may delete individual customer records from within the app, subject
        to any minimum retention required by law. [TODO: confirm specific
        retention period, e.g. 3 years from rental end date.]
      </p>

      <h2>5. Your rights (Data Principals)</h2>
      <p>Customers whose data is processed via MotoManager have the right to:</p>
      <ul>
        <li><strong>Access</strong> a copy of their personal data held by a Shop Owner</li>
        <li><strong>Correction</strong> of inaccurate or outdated personal data</li>
        <li><strong>Erasure</strong> of personal data, where retention is no longer required by law</li>
        <li>Withdraw consent for future processing (this does not affect processing already carried out)</li>
      </ul>
      <p>
        Requests should be directed to the relevant Shop Owner in the first
        instance, or to us at{" "}
        <a href="mailto:privacy@motomanager.app">privacy@motomanager.app</a>{" "}
        [TODO: confirm contact email].
      </p>

      <h2>6. Sharing of data</h2>
      <p>
        We do not sell personal data. Data may be shared with:
      </p>
      <ul>
        <li>Supabase (cloud database &amp; storage provider)</li>
        <li>Razorpay (payment processing for shop subscriptions)</li>
        <li>Law enforcement or regulatory authorities, where legally required</li>
      </ul>

      <h2>7. Shop Owner responsibilities</h2>
      <p>
        Shop Owners act as the data controller for their customers&apos;
        data collected through the app. By using MotoManager, Shop Owners
        agree to obtain appropriate consent from their customers before
        capturing ID documents, licence photos, and signatures, and to use
        such data only for legitimate rental business purposes as described
        in this policy.
      </p>

      <h2>8. Security</h2>
      <p>
        We implement reasonable technical and organizational measures —
        including encrypted storage, access controls, and role-based staff
        permissions — to protect personal data against unauthorized access,
        alteration, disclosure, or destruction.
      </p>

      <h2>9. Children&apos;s data</h2>
      <p>
        MotoManager is not intended for use by individuals under 18.
        Customer ID documents collected for rentals pertain to adult
        renters as required by vehicle rental regulations.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material
        changes will be notified within the app.
      </p>

      <h2>11. Contact us</h2>
      <p>
        For privacy-related queries or to exercise your rights, contact us
        at <a href="mailto:privacy@motomanager.app">privacy@motomanager.app</a>{" "}
        [TODO: confirm contact email and registered business address].
      </p>
    </div>
  );
}
