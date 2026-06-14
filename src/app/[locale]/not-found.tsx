import Link from 'next/link';

const POPULAR = [
  { label: '🤖 AI Agents', href: '/en?cat=agents' },
  { label: '✍️ Writing', href: '/en?cat=writing' },
  { label: '🎨 Image', href: '/en?cat=image' },
  { label: '💻 Code', href: '/en?cat=code' },
  { label: '🎬 Video', href: '/en?cat=video' },
  { label: '🎙️ Audio', href: '/en?cat=audio' },
];

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 text-center px-4 max-w-2xl mx-auto">
      <p className="text-7xl font-black bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">404</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-white">This page could not be found</h1>
      <p className="text-gray-400 max-w-md">
        The page you&apos;re looking for may have moved or no longer exists. Try one of these instead:
      </p>

      <div className="flex flex-wrap gap-2 justify-center">
        {POPULAR.map((c) => (
          <Link key={c.href} href={c.href}
            className="text-sm text-gray-300 border border-white/[0.08] hover:border-violet-500/50 hover:bg-violet-500/10 rounded-xl px-4 py-2 transition-all">
            {c.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 justify-center mt-2">
        <Link href="/en"
          className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition">
          Browse all AI tools
        </Link>
        <Link href="/en/compare"
          className="border border-white/20 hover:border-violet-500/50 text-gray-300 hover:text-white px-5 py-2.5 rounded-xl font-semibold transition">
          ⚡ Compare tools
        </Link>
        <Link href="/en/blog"
          className="border border-white/20 hover:border-cyan-500/50 text-gray-300 hover:text-white px-5 py-2.5 rounded-xl font-semibold transition">
          📚 Read the blog
        </Link>
      </div>
    </div>
  );
}
