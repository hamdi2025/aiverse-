'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '16px', color: 'white' }}>
      <h2>Something went wrong</h2>
      <button onClick={reset} style={{ background: '#7C3AED', color: 'white', padding: '8px 24px', borderRadius: '12px', border: 'none', cursor: 'pointer' }}>
        Try again
      </button>
    </div>
  );
}
