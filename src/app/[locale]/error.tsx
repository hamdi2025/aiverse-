'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
      <h2 className="text-2xl font-bold text-gray-900">Something went wrong</h2>
      <button
        onClick={reset}
        className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white px-6 py-2 rounded-xl font-semibold"
      >
        Try again
      </button>
    </div>
  );
}
