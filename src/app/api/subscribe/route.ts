import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  const pubId = process.env.NEXT_PUBLIC_BEEHIIV_PUB_ID;

  if (!pubId) {
    return NextResponse.json({ error: 'Server config error' }, { status: 500 });
  }

  try {
    // Use Beehiiv's public embed endpoint (no API key needed)
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('publication_id', pubId);
    formData.append('double_opt_in', 'false');

    const res = await fetch('https://embeds.beehiiv.com/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': 'https://getaiverse.online',
      },
      body: formData.toString(),
    });

    // Beehiiv embed returns redirect, we treat any non-500 as success
    if (res.status < 500) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  } catch (e) {
    return NextResponse.json({ error: 'Network error' }, { status: 500 });
  }
}
