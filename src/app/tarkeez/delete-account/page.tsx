export default function DeleteAccountPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-bold">Delete your Tarkeez account</h1>

      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
        To request permanent deletion of your Tarkeez account and all associated
        data (projects, sessions, etc.), please email us at{" "}
        <a
          href="mailto:your-email@domain.com"
          className="text-blue-600 hover:underline"
        >
          tarkeez247@gmail.com
        </a>{" "}
        with the subject <strong>&quot;Delete Tarkeez Account&quot;</strong> and
        the Google account email you used to sign in.
      </p>

      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
        We will process the request and delete your data within 30 days.
      </p>
    </main>
  );
}
