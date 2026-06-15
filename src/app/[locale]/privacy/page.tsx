import Link from 'next/link';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const BASE = 'https://getaiverse.online';
const LAST_UPDATED = 'June 14, 2026';

export async function generateMetadata({ params }: Props) {
  const locale = params.locale;
  const titleMap: Record<Locale, string> = {
    en: 'Privacy Policy | AIverse',
    fr: 'Politique de Confidentialité | AIverse',
    es: 'Política de Privacidad | AIverse',
    ar: 'سياسة الخصوصية | AIverse',
  };
  const descMap: Record<Locale, string> = {
    en: 'How AIverse collects, uses, and protects your data, including cookies, analytics, advertising (Google AdSense), and affiliate links.',
    fr: 'Comment AIverse collecte, utilise et protège vos données : cookies, analytics, publicité (Google AdSense) et liens d\'affiliation.',
    es: 'Cómo AIverse recopila, usa y protege tus datos: cookies, analítica, publicidad (Google AdSense) y enlaces de afiliados.',
    ar: 'كيف يجمع AIverse بياناتك ويستخدمها ويحميها، بما في ذلك ملفات تعريف الارتباط والتحليلات والإعلانات وروابط الإحالة.',
  };
  return {
    title: titleMap[locale],
    description: descMap[locale],
    alternates: {
      canonical: `${BASE}/${locale}/privacy`,
      languages: {
        en: `${BASE}/en/privacy`, fr: `${BASE}/fr/privacy`,
        es: `${BASE}/es/privacy`, ar: `${BASE}/ar/privacy`,
      },
    },
    openGraph: {
      title: titleMap[locale], description: descMap[locale],
      url: `${BASE}/${locale}/privacy`, siteName: 'AIverse', type: 'website',
    },
  };
}

export default function PrivacyPage({ params }: Props) {
  const { locale } = params;
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose-invert">
      <Link href={`/${locale}`} className="text-sm text-gray-600 hover:text-gray-900">← Back to AIverse</Link>
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-6 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {LAST_UPDATED}</p>

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <p>This Privacy Policy explains how AIverse (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), operating the website
          getaiverse.online, collects, uses, and safeguards information when you visit our AI tools directory.
          By using AIverse, you agree to the practices described below.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">1. Information We Collect</h2>
        <p>AIverse is primarily an informational directory and does not require you to create an account to browse.
          We collect limited information in the following ways:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Information you provide:</strong> when you subscribe to our newsletter or submit a tool, you may
            share your email address and the details you enter in those forms.</li>
          <li><strong>Account data:</strong> if you choose to sign in, authentication is handled by our provider (Clerk),
            which processes your email and basic profile information on our behalf.</li>
          <li><strong>Usage data:</strong> we automatically collect anonymous analytics such as pages visited, device type,
            browser, approximate region, and referring source.</li>
          <li><strong>Cookies and similar technologies:</strong> used for analytics, advertising, and remembering preferences.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 pt-4">2. How We Use Information</h2>
        <p>We use the information we collect to operate and improve AIverse, respond to inquiries, send the newsletter you
          requested, measure traffic and content performance, display relevant advertising, and detect or prevent abuse.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">3. Advertising &amp; Google AdSense</h2>
        <p>AIverse displays advertising through Google AdSense. Third-party vendors, including Google, use cookies to serve
          ads based on your prior visits to this and other websites. Google&apos;s use of advertising cookies enables it and
          its partners to serve ads to you based on your visit to AIverse and/or other sites on the Internet.</p>
        <p>You may opt out of personalized advertising by visiting
          {' '}<a className="text-[#7C3AED] hover:underline" href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
          For more information about how Google uses data, see
          {' '}<a className="text-[#7C3AED] hover:underline" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy &amp; Terms</a>.
          Visitors in the EEA, UK, and Switzerland are shown a consent message governing the use of cookies and data for
          personalized advertising where required.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">4. Analytics</h2>
        <p>We use privacy-respecting analytics (including Vercel Analytics and Speed Insights) to understand aggregate usage.
          These tools collect anonymized data and do not build advertising profiles of individual users.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">5. Affiliate Links</h2>
        <p>Some links on AIverse are affiliate links. If you click one and make a purchase, we may earn a commission at no
          additional cost to you. See our <Link href={`/${locale}/disclosure`} className="text-[#7C3AED] hover:underline">Affiliate Disclosure</Link> for details.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">6. Your Rights</h2>
        <p>Depending on your location (including under the GDPR and CCPA), you may have the right to access, correct, delete,
          or restrict the processing of your personal data, and to object to certain processing. To exercise these rights,
          contact us using the details on our <Link href={`/${locale}/contact`} className="text-[#7C3AED] hover:underline">Contact</Link> page.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">7. Data Retention &amp; Security</h2>
        <p>We retain personal data only as long as necessary for the purposes described here and apply reasonable technical
          and organizational measures to protect it. No method of transmission over the Internet is fully secure, so we cannot
          guarantee absolute security.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">8. Children&apos;s Privacy</h2>
        <p>AIverse is not directed to children under 13, and we do not knowingly collect personal data from them.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Material changes will be reflected by updating the
          &quot;Last updated&quot; date above.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">10. Contact</h2>
        <p>Questions about this policy? Reach us at
          {' '}<a className="text-[#7C3AED] hover:underline" href="mailto:contact@getaiverse.online">contact@getaiverse.online</a>
          {' '}or via our <Link href={`/${locale}/contact`} className="text-[#7C3AED] hover:underline">Contact</Link> page.</p>
      </div>
    </article>
  );
}
