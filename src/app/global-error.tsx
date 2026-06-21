'use client';

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body style={{ background: '#FFFFFF', color: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', gap: '16px', fontFamily: 'sans-serif' }}>
        <h2>Something went wrong</h2>
        <button onClick={reset} style={{ background: '#7C3AED', color: 'white', padding: '8px 24px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          Try again
        </button>
      </body>
    </html>
  );
}
