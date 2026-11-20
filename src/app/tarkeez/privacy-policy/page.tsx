export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-800 dark:text-gray-300">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Privacy Policy for Tarkeez
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Last updated: November 20, 2026
      </p>

      <p className="mt-6 leading-7">
        Tarkeez (“we”, “our”, or “the app”) is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, store, and
        share information when you use the Tarkeez mobile application.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">
        1. Information We Collect
      </h2>

      <p className="mt-4 font-semibold">Account Information</p>
      <p className="mt-2 leading-7">
        When you sign in with Google, we receive your Google account email
        address, name, and profile picture (if available).
      </p>

      <p className="mt-4 font-semibold">Usage Data</p>
      <ul className="mt-2 list-disc space-y-2 pl-6 leading-7">
        <li>Focus sessions (start time, end time, duration)</li>
        <li>Projects you create (name and color)</li>
        <li>Daily and project-based time tracking data</li>
        <li>App preferences (theme, tracking mode, report period)</li>
      </ul>

      <p className="mt-4 font-semibold">Purchase Information</p>
      <p className="mt-2 leading-7">
        Premium purchase details (transaction ID, product purchased, purchase
        date) when you buy a premium plan through Google Play, the App Store, or
        our website.
      </p>

      <p className="mt-4 font-semibold">Device & Technical Data</p>
      <p className="mt-2 leading-7">
        Device identifiers necessary for authentication and sync, app version,
        and basic diagnostic information for improving reliability.
      </p>

      <p className="mt-4 leading-7">
        We do <strong>not</strong> collect precise location data, contacts,
        photos, microphone, camera, or any other sensitive personal information
        beyond what is listed above.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">
        2. How We Use Your Information
      </h2>

      <p className="mt-4 leading-7">We use the collected information to:</p>
      <ul className="mt-2 list-disc space-y-2 pl-6 leading-7">
        <li>Provide and maintain the Tarkeez service</li>
        <li>Sync your data across your devices</li>
        <li>Process premium purchases and manage your premium status</li>
        <li>Improve app performance and fix bugs</li>
        <li>Respond to support requests</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">
        3. Data Storage and Sync
      </h2>

      <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
        <li>
          Tarkeez is an <strong>offline-first</strong> app. Your data is
          primarily stored locally on your device.
        </li>
        <li>
          When you are online, your data is securely synced to our servers
          (powered by Supabase) so you can access it across multiple devices.
        </li>
        <li>
          All data transmitted between the app and our servers is encrypted in
          transit.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">
        4. Data Sharing
      </h2>

      <p className="mt-4 leading-7">
        We do <strong>not</strong> sell your personal data.
      </p>

      <p className="mt-4 leading-7">We only share data with:</p>
      <ul className="mt-2 list-disc space-y-2 pl-6 leading-7">
        <li>
          <strong>Google</strong> – for Google Sign-In authentication and Google
          Play billing
        </li>
        <li>
          <strong>Apple</strong> – for App Store billing (if applicable)
        </li>
        <li>
          <strong>Supabase</strong> – our backend infrastructure provider (for
          data storage and sync)
        </li>
        <li>Payment processors involved in web purchases</li>
      </ul>

      <p className="mt-4 leading-7">
        These service providers only process data as necessary to provide their
        services to us and are bound by appropriate data protection agreements.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">
        5. Data Retention
      </h2>

      <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
        <li>
          Your account data and tracking history are kept until you delete your
          account or request deletion.
        </li>
        <li>
          You can request deletion of your account and associated data at any
          time (see section 7).
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">
        6. Children’s Privacy
      </h2>

      <p className="mt-4 leading-7">
        Tarkeez is not directed at children under the age of 13. We do not
        knowingly collect personal information from children under 13.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">
        7. Your Rights & Account Deletion
      </h2>

      <p className="mt-4 leading-7">You have the right to:</p>
      <ul className="mt-2 list-disc space-y-2 pl-6 leading-7">
        <li>Access the data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your account and associated data</li>
      </ul>

      <p className="mt-4 font-semibold">
        To delete your Tarkeez account and data:
      </p>
      <p className="mt-2 leading-7">
        Please email us at{" "}
        <a
          href="mailto:tarkeez247@gmail.com"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          tarkeez247@gmail.com
        </a>{" "}
        with the subject line “Delete Tarkeez Account” and include the Google
        account email you used to sign in. We will process your request and
        permanently delete your account and associated data within 30 days.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">
        8. Changes to This Privacy Policy
      </h2>

      <p className="mt-4 leading-7">
        We may update this Privacy Policy from time to time. We will notify you
        of any significant changes by updating the “Last updated” date at the
        top of this page.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">
        9. Contact Us
      </h2>

      <p className="mt-4 leading-7">
        If you have any questions about this Privacy Policy or your data, please
        contact us at:
      </p>

      <p className="mt-2 leading-7">
        <strong>Email:</strong>{" "}
        <a
          href="mailto:tarkeez247@gmail.com"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          tarkeez247@gmail.com
        </a>
      </p>

      <p className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500 dark:border-gray-800">
        Tarkeez · Pomodoro and Linear Time Tracker
      </p>
    </main>
  );
}
