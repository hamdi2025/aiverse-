import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email = body?.data?.email_addresses?.[0]?.email_address;
  if (!email) return NextResponse.json({ ok: true });

  const pubId = process.env.NEXT_PUBLIC_BEEHIIV_PUB_ID;
  const apiKey = process.env.BEEHIIV_API_KEY;

  if (pubId) {
    const id = pubId.startsWith('pub_') ? pubId : `pub_${pubId}`;
    if (apiKey) {
      await fetch(`https://api.beehiiv.com/v2/publications/${id}/subscriptions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({ email, reactivate_existing: false, send_welcome_email: true }),
      }).catch(() => {});
    }
  }
  return NextResponse.json({ ok: true });
}
