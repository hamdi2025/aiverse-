import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

  const pubId = process.env.NEXT_PUBLIC_BEEHIIV_PUB_ID;
  if (!pubId) return NextResponse.json({ error: 'Config error' }, { status: 500 });

  try {
    // Try Beehiiv API v2 first
    const apiKey = process.env.BEEHIIV_API_KEY;
    if (apiKey) {
      const id = pubId.startsWith('pub_') ? pubId : `pub_${pubId}`;
      const r = await fetch(`https://api.beehiiv.com/v2/publications/${id}/subscriptions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({ email, reactivate_existing: true, send_welcome_email: true }),
      });
      if (r.ok) return NextResponse.json({ success: true });
    }

    // Fallback: Beehiiv embed endpoint
    const id = pubId.startsWith('pub_') ? pubId.replace('pub_', '') : pubId;
    const form = new URLSearchParams({ email, publication_id: id });
    const r2 = await fetch('https://embeds.beehiiv.com/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form.toString(),
      redirect: 'manual',
    });
    if (r2.status < 500) return NextResponse.json({ success: true });

    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  } catch {
    return NextResponse.json({ error: 'Network error' }, { status: 500 });
  }
}
