export default function TarkeezPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Tarkeez
      </h1>

      <p className="mt-4 max-w-lg text-lg leading-7 text-gray-600 dark:text-gray-300">
        Tarkeez is a Pomodoro timer and time-tracking app that helps you stay
        focused, track your work sessions, organize projects, and build better
        habits.
      </p>

      <div className="mt-8 max-w-md text-left text-sm leading-6 text-gray-600 dark:text-gray-400">
        <p className="font-medium text-gray-900 dark:text-white mb-2">
          What you can do with Tarkeez:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Start focused work sessions with the Pomodoro technique</li>
          <li>Track time spent on different projects</li>
          <li>View daily and project-based reports</li>
          <li>Sync your data across devices (optional)</li>
        </ul>
      </div>

      <p className="mt-8 max-w-lg text-sm leading-6 text-gray-600 dark:text-gray-400">
        Tarkeez uses <strong>Google Sign-In</strong> so you can create an
        account and optionally sync your focus sessions and projects across
        devices. We only request basic profile information (name, email, and
        profile picture) needed for authentication.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Search for{" "}
        <strong className="text-gray-900 dark:text-white">Tarkeez</strong> on
        the Google Play Store to download the app.
      </p>

      {/* Required links for Google OAuth verification */}
      <nav className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
        <a
          href="/tarkeez/privacy-policy"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Privacy Policy
        </a>
        <a
          href="/tarkeez/terms-of-service"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Terms of Service
        </a>
      </nav>
    </main>
  );
}
