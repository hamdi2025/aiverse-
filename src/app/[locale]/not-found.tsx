export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
      <h2 className="text-2xl font-bold text-white">404 — Page not found</h2>
      <a
        href="/"
        className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white px-6 py-2 rounded-xl font-semibold"
      >
        Go Home
      </a>
    </div>
  );
}
