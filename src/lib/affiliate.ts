export interface AffiliateNetworkConfig {
  [toolId: string]: {
    baseUrl: string;
    network: 'impact' | 'shareasale' | 'cj' | 'direct' | 'custom';
    affiliateId: string;
    linkId?: string;
    trackedUrl?: string; // override direct tracked URL
  };
}

// ── Real affiliate program links (replace IDs with yours after signup) ──────
export const AFFILIATE_CONFIG: AffiliateNetworkConfig = {
  // Jasper — Impact.com (~30% recurring)
  jasper: {
    baseUrl: 'https://jasper.ai',
    network: 'impact',
    affiliateId: 'YOUR_IMPACT_ID',
    linkId: 'jasper-ai',
    trackedUrl: 'https://jasper.ai/?fpr=aiverse'
  },
  // Writesonic — direct affiliate (~30% recurring)
  writesonic: {
    baseUrl: 'https://writesonic.com',
    network: 'direct',
    affiliateId: 'aiverse',
    trackedUrl: 'https://writesonic.com/?via=aiverse'
  },
  // Copy.ai — direct (~45% recurring)
  'copy-ai': {
    baseUrl: 'https://copy.ai',
    network: 'direct',
    affiliateId: 'aiverse',
    trackedUrl: 'https://copy.ai/?via=aiverse'
  },
  // Surfer SEO — ShareASale (~25% recurring)
  'surfer-seo': {
    baseUrl: 'https://surferseo.com',
    network: 'shareasale',
    affiliateId: 'YOUR_SHAREASALE_ID',
    linkId: '157883',
    trackedUrl: 'https://surferseo.com/?via=aiverse'
  },
  // ElevenLabs — direct (~22%)
  elevenlabs: {
    baseUrl: 'https://elevenlabs.io',
    network: 'direct',
    affiliateId: 'aiverse',
    trackedUrl: 'https://elevenlabs.io/?from=aiverse'
  },
  // Murf AI — direct (~20%)
  'murf-ai': {
    baseUrl: 'https://murf.ai',
    network: 'direct',
    affiliateId: 'aiverse',
    trackedUrl: 'https://murf.ai/?via=aiverse'
  },
  // HeyGen — Rewardful (25% recurring, 3 months)
  heygen: {
    baseUrl: 'https://heygen.com',
    network: 'direct',
    affiliateId: 'abdelwahed',
    trackedUrl: 'https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=influencerb&via=abdelwahed'
  },
  // Descript — direct (~15%)
  descript: {
    baseUrl: 'https://descript.com',
    network: 'direct',
    affiliateId: 'aiverse',
    trackedUrl: 'https://get.descript.com/aiverse'
  },
  // AdCreative.ai — direct (~30%)
  'adcreative-ai': {
    baseUrl: 'https://adcreative.ai',
    network: 'direct',
    affiliateId: 'aiverse',
    trackedUrl: 'https://adcreative.ai/?via=aiverse'
  },
  // Semrush — Impact.com (~$200 per sale)
  'semrush-ai': {
    baseUrl: 'https://semrush.com',
    network: 'impact',
    affiliateId: 'YOUR_IMPACT_ID',
    trackedUrl: 'https://www.semrush.com/?ref=aiverse'
  },
  // Instantly AI — direct (~30%)
  'instantly-ai': {
    baseUrl: 'https://instantly.ai',
    network: 'direct',
    affiliateId: 'aiverse',
    trackedUrl: 'https://instantly.ai/?via=aiverse'
  },
  // Cursor — custom
  cursor: {
    baseUrl: 'https://cursor.sh',
    network: 'custom',
    affiliateId: 'aiverse',
  },
  // Suno — direct
  suno: {
    baseUrl: 'https://suno.com',
    network: 'direct',
    affiliateId: 'aiverse',
    trackedUrl: 'https://suno.com/?via=aiverse'
  },
  // Synthesia — Rewardful (25% recurring, 12 months)
  synthesia: {
    baseUrl: 'https://synthesia.io',
    network: 'direct',
    affiliateId: 'abdelwahed',
    trackedUrl: 'https://www.synthesia.io?via=abdelwahed'
  },
  'synthesia-io': {
    baseUrl: 'https://synthesia.io',
    network: 'direct',
    affiliateId: 'abdelwahed',
    trackedUrl: 'https://www.synthesia.io?via=abdelwahed'
  },
  'synthesia-elearning': {
    baseUrl: 'https://synthesia.io',
    network: 'direct',
    affiliateId: 'abdelwahed',
    trackedUrl: 'https://www.synthesia.io/use-cases/training?via=abdelwahed'
  },
};

export function buildAffiliateUrl(toolId: string, destinationUrl: string): string {
  const affiliate = AFFILIATE_CONFIG[toolId];

  if (affiliate?.trackedUrl) {
    return affiliate.trackedUrl;
  }

  // Default: UTM tracking
  try {
    const url = new URL(destinationUrl);
    url.searchParams.set('ref', 'aiverse');
    url.searchParams.set('utm_source', 'aiverse.io');
    url.searchParams.set('utm_medium', 'directory');
    url.searchParams.set('utm_campaign', toolId);
    return url.toString();
  } catch {
    return `${destinationUrl}?ref=aiverse&utm_source=aiverse.io&utm_medium=directory&utm_campaign=${toolId}`;
  }
}
