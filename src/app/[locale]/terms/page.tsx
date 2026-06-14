import Link from 'next/link';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const BASE = 'https://getaiverse.online';
const LAST_UPDATED = 'June 14, 2026';

export async function generateMetadata({ params }: Props) {
  const locale = params.locale;
  const titleMap: Record<Locale, string> = {
    en: 'Terms of Service | AIverse',
    fr: 'Conditions d\'Utilisation | AIverse',
    es: 'Términos de Servicio | AIverse',
    ar: 'شروط الخدمة | AIverse',
  };
  const descMap: Record<Locale, string> = {
    en: 'The terms and conditions governing your use of the AIverse AI tools directory.',
    fr: 'Les conditions générales régissant votre utilisation de l\'annuaire d\'outils IA AIverse.',
    es: 'Los términos y condiciones que rigen tu uso del directorio de herramientas IA AIverse.',
    ar: 'الشروط والأحكام التي تحكم استخدامك لدليل أدوات الذكاء الاصطناعي AIverse.',
  };
  return {
    title: titleMap[locale],
    description: descMap[locale],
    alternates: {
      canonical: `${BASE}/${locale}/terms`,
      languages: {
        en: `${BASE}/en/terms`, fr: `${BASE}/fr/terms`,
        es: `${BASE}/es/terms`, ar: `${BASE}/ar/terms`,
      },
    },
    openGraph: {
      title: titleMap[locale], description: descMap[locale],
      url: `${BASE}/${locale}/terms`, siteName: 'AIverse', type: 'website',
    },
  };
}

export default function TermsPage({ params }: Props) {
  const { locale } = params;
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Link href={`/${locale}`} className="text-sm text-gray-400 hover:text-white">← Back to AIverse</Link>
      <h1 className="text-3xl sm:text-4xl font-black text-white mt-6 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {LAST_UPDATED}</p>

      <div className="space-y-6 text-gray-300 leading-relaxed text-[15px]">
        <p>These Terms of Service (&quot;Terms&quot;) govern your access to and use of the AIverse website at
          getaiverse.online (the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms.
          If you do not agree, please do not use the Service.</p>

        <h2 className="text-xl font-bold text-white pt-4">1. About the Service</h2>
        <p>AIverse is an independent directory that catalogs, describes, and compares artificial-intelligence tools and
          agents. We provide informational content, reviews, comparisons, and buying guides to help users discover software.</p>

        <h2 className="text-xl font-bold text-white pt-4">2. No Affiliation or Endorsement</h2>
        <p>Tool names, logos, and trademarks referenced on AIverse belong to their respective owners. Listing a tool does not
          imply partnership with or endorsement by that tool&apos;s provider unless explicitly stated. Pricing, features, and
          availability are provided for convenience and may change without notice; always verify details on the official
          website of each tool.</p>

        <h2 className="text-xl font-bold text-white pt-4">3. Informational Purpose &amp; No Warranty</h2>
        <p>Content on AIverse is provided &quot;as is&quot; for general information only. While we strive for accuracy, we make
          no warranties, express or implied, regarding completeness, reliability, or fitness for a particular purpose. Your
          use of any third-party tool is at your own risk and subject to that tool&apos;s own terms.</p>

        <h2 className="text-xl font-bold text-white pt-4">4. Affiliate Relationships</h2>
        <p>AIverse participates in affiliate programs and may earn commissions from qualifying purchases made through links on
          the site. This does not affect the price you pay. See our
          {' '}<Link href={`/${locale}/disclosure`} className="text-[#7C3AED] hover:underline">Affiliate Disclosure</Link>.</p>

        <h2 className="text-xl font-bold text-white pt-4">5. Acceptable Use</h2>
        <p>You agree not to misuse the Service, including by scraping at a scale that disrupts the site, attempting to gain
          unauthorized access, introducing malicious code, or using the Service for unlawful purposes.</p>

        <h2 className="text-xl font-bold text-white pt-4">6. User Submissions</h2>
        <p>If you submit a tool or other content, you confirm you have the right to do so and grant us a non-exclusive license
          to review, display, and edit the submission. We may decline or remove any submission at our discretion.</p>

        <h2 className="text-xl font-bold text-white pt-4">7. Intellectual Property</h2>
        <p>The AIverse name, original editorial content, design, and compilation of listings are protected by intellectual
          property laws. You may share links to our pages, but you may not republish substantial portions without permission.</p>

        <h2 className="text-xl font-bold text-white pt-4">8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, AIverse shall not be liable for any indirect, incidental, or consequential
          damages arising from your use of the Service or reliance on its content.</p>

        <h2 className="text-xl font-bold text-white pt-4">9. Changes to These Terms</h2>
        <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of
          the revised Terms.</p>

        <h2 className="text-xl font-bold text-white pt-4">10. Contact</h2>
        <p>Questions about these Terms? Reach us at
          {' '}<a className="text-[#7C3AED] hover:underline" href="mailto:contact@getaiverse.online">contact@getaiverse.online</a>
          {' '}or via our <Link href={`/${locale}/contact`} className="text-[#7C3AED] hover:underline">Contact</Link> page.</p>
      </div>
    </article>
  );
}
