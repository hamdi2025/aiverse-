import { AITool } from './tools';
import { tl, tlCategory } from './dataI18n';

type Locale = 'en' | 'fr' | 'es' | 'ar';

export interface ArticleSection {
  h2: string;
  paras: string[];
}

const AND: Record<Locale, string> = { en: 'and', fr: 'et', es: 'y', ar: 'و' };

function listToSentence(items: string[], locale: Locale): string {
  const arr = items.map((i) => tl(i, locale));
  if (arr.length === 0) return '';
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return `${arr[0]} ${AND[locale]} ${arr[1]}`;
  return `${arr.slice(0, -1).join(', ')} ${AND[locale]} ${arr[arr.length - 1]}`;
}

function lower(s: string): string {
  return s ? s.charAt(0).toLowerCase() + s.slice(1) : s;
}

// Build a unique, multi-paragraph editorial review for each tool, derived from
// its own data (name, category, pricing, company, description, use cases…).
// This turns thin listing pages into substantial original content.
export function buildToolArticle(tool: AITool, locale: Locale): ArticleSection[] {
  const n = tool.name;
  const desc = tool.description[locale] || tool.description.en;
  const cat = lower(tlCategory(tool.category, locale));
  const priceText = tool.pricingLocalized[locale];
  const rating = tool.rating.toFixed(1);
  const company = tool.company;
  const founded = tool.founded;
  const useCases = tool.useCases || [];
  const tags = tool.tags || [];
  const pros = tool.pros || [];
  const cons = tool.cons || [];
  const sections: ArticleSection[] = [];

  if (locale === 'fr') {
    const overview: string[] = [];
    overview.push(`${desc}`);
    overview.push(
      `${n} appartient à la catégorie ${cat} et figure dans l'annuaire d'outils IA d'AIverse, où il obtient une note éditoriale de ${rating} sur 5, attribuée selon ses capacités, sa facilité d'utilisation, son rapport qualité-prix et sa fiabilité.` +
      (company ? ` Cet outil est développé par ${company}${founded ? `, fondé en ${founded}` : ''}.` : '')
    );
    sections.push({ h2: `Qu'est-ce que ${n} ?`, paras: overview });

    const feat: string[] = [];
    feat.push(
      useCases.length
        ? `On utilise principalement ${n} pour ${listToSentence(useCases, locale)}.`
        : `${n} est conçu pour aider les utilisateurs à gagner du temps dans le domaine « ${cat} » en automatisant des tâches qui prendraient autrement beaucoup d'efforts.`
    );
    const extras: string[] = [];
    if (tags.length) extras.push(`Il est souvent associé aux thèmes suivants : ${listToSentence(tags, locale)}.`);
    if (tool.hasAPI) extras.push(`Les développeurs peuvent l'intégrer à leurs propres produits via son API${tool.hasMobileApp ? ', et une application mobile est également disponible' : ''}.`);
    else if (tool.hasMobileApp) extras.push(`Une application mobile est disponible pour l'utiliser en déplacement.`);
    if (extras.length) feat.push(extras.join(' '));
    sections.push({ h2: `Fonctionnalités et cas d'usage de ${n}`, paras: feat });

    const pr: string[] = [];
    pr.push(
      tool.pricing === 'Free'
        ? `${n} est entièrement gratuit (${priceText}). Vous pouvez l'utiliser sans abonnement.`
        : tool.pricing === 'Freemium'
        ? `${n} propose une formule gratuite, avec des offres payantes (${priceText}) qui débloquent des fonctionnalités avancées et des limites d'usage plus élevées.`
        : `${n} est un outil payant (${priceText}).`
    );
    pr.push(`Comme pour tout outil IA, la formule idéale dépend de l'intensité de votre utilisation. Nous vous recommandons de tester ${n} avant de vous engager sur une offre payante.`);
    sections.push({ h2: `Tarifs de ${n}`, paras: pr });

    const bl: string[] = [];
    const quality = tool.rating >= 4.7 ? 'un excellent' : tool.rating >= 4.3 ? 'un très bon' : 'un bon';
    bl.push(
      `En résumé, ${n} est ${quality} choix dans la catégorie ${cat} en 2026.` +
      (pros.length ? ` Parmi ses points forts : ${listToSentence(pros.slice(0, 2), locale)}.` : '') +
      (cons.length ? ` À garder à l'esprit : ${listToSentence(cons.slice(0, 2), locale)}.` : '') +
      ` S'il correspond à votre flux de travail, ${n} mérite d'être essayé${tool.pricing !== 'Paid' ? ` — d'autant plus que vous pouvez commencer ${tool.pricing === 'Free' ? 'gratuitement' : 'avec une offre gratuite'}` : ''}.`
    );
    sections.push({ h2: `${n} en vaut-il la peine ? Notre conclusion`, paras: bl });
    return sections;
  }

  if (locale === 'es') {
    const overview: string[] = [];
    overview.push(`${desc}`);
    overview.push(
      `${n} pertenece a la categoría ${cat} y aparece en el directorio de herramientas de IA de AIverse, donde obtiene una valoración editorial de ${rating} sobre 5, basada en sus capacidades, facilidad de uso, relación calidad-precio y fiabilidad.` +
      (company ? ` Esta herramienta está desarrollada por ${company}${founded ? `, fundada en ${founded}` : ''}.` : '')
    );
    sections.push({ h2: `¿Qué es ${n}?`, paras: overview });

    const feat: string[] = [];
    feat.push(
      useCases.length
        ? `${n} se usa principalmente para ${listToSentence(useCases, locale)}.`
        : `${n} está diseñado para ayudar a los usuarios a ahorrar tiempo en el ámbito «${cat}», automatizando tareas que de otro modo requerirían mucho esfuerzo.`
    );
    const extras: string[] = [];
    if (tags.length) extras.push(`Suele asociarse con: ${listToSentence(tags, locale)}.`);
    if (tool.hasAPI) extras.push(`Los desarrolladores pueden integrarlo en sus propios productos mediante su API${tool.hasMobileApp ? ', y también hay una aplicación móvil disponible' : ''}.`);
    else if (tool.hasMobileApp) extras.push(`Hay una aplicación móvil disponible para usarlo sobre la marcha.`);
    if (extras.length) feat.push(extras.join(' '));
    sections.push({ h2: `Funciones y casos de uso de ${n}`, paras: feat });

    const pr: string[] = [];
    pr.push(
      tool.pricing === 'Free'
        ? `${n} es totalmente gratuito (${priceText}). Puedes usarlo sin suscripción.`
        : tool.pricing === 'Freemium'
        ? `${n} ofrece un plan gratuito, con planes de pago (${priceText}) que desbloquean funciones avanzadas y límites de uso más altos.`
        : `${n} es una herramienta de pago (${priceText}).`
    );
    pr.push(`Como con cualquier herramienta de IA, el plan ideal depende de cuánto la uses. Recomendamos probar ${n} antes de pasar a un plan de pago.`);
    sections.push({ h2: `Precios de ${n}`, paras: pr });

    const bl: string[] = [];
    const quality = tool.rating >= 4.7 ? 'una excelente' : tool.rating >= 4.3 ? 'una muy buena' : 'una buena';
    bl.push(
      `En resumen, ${n} es ${quality} opción en la categoría ${cat} en 2026.` +
      (pros.length ? ` Entre sus puntos fuertes: ${listToSentence(pros.slice(0, 2), locale)}.` : '') +
      (cons.length ? ` Ten en cuenta: ${listToSentence(cons.slice(0, 2), locale)}.` : '') +
      ` Si encaja en tu flujo de trabajo, ${n} merece una prueba${tool.pricing !== 'Paid' ? ` — sobre todo porque puedes empezar ${tool.pricing === 'Free' ? 'gratis' : 'con un plan gratuito'}` : ''}.`
    );
    sections.push({ h2: `¿Vale la pena ${n}? Nuestra conclusión`, paras: bl });
    return sections;
  }

  if (locale === 'ar') {
    const overview: string[] = [];
    overview.push(`${desc}`);
    overview.push(
      `ينتمي ${n} إلى فئة ${cat} ويظهر في دليل أدوات الذكاء الاصطناعي على AIverse، حيث يحصل على تقييم تحريري قدره ${rating} من 5، مبنيّ على قدراته وسهولة استخدامه وقيمته مقابل سعره وموثوقيته.` +
      (company ? ` هذه الأداة من تطوير ${company}${founded ? `، التي تأسست عام ${founded}` : ''}.` : '')
    );
    sections.push({ h2: `ما هو ${n}؟`, paras: overview });

    const feat: string[] = [];
    feat.push(
      useCases.length
        ? `يُستخدم ${n} بشكل أساسي في: ${listToSentence(useCases, locale)}.`
        : `صُمّم ${n} لمساعدة المستخدمين على توفير الوقت في مجال «${cat}» عبر أتمتة مهام تتطلّب جهداً كبيراً لولا ذلك.`
    );
    const extras: string[] = [];
    if (tags.length) extras.push(`غالباً ما يرتبط بالمواضيع التالية: ${listToSentence(tags, locale)}.`);
    if (tool.hasAPI) extras.push(`يمكن للمطوّرين دمجه في منتجاتهم عبر واجهته البرمجية (API)${tool.hasMobileApp ? '، كما يتوفّر تطبيق للهاتف المحمول' : ''}.`);
    else if (tool.hasMobileApp) extras.push(`يتوفّر تطبيق للهاتف المحمول لاستخدامه أثناء التنقّل.`);
    if (extras.length) feat.push(extras.join(' '));
    sections.push({ h2: `ميزات ${n} وحالات استخدامه`, paras: feat });

    const pr: string[] = [];
    pr.push(
      tool.pricing === 'Free'
        ? `${n} مجاني بالكامل (${priceText})، ويمكنك استخدامه دون اشتراك.`
        : tool.pricing === 'Freemium'
        ? `يوفّر ${n} باقة مجانية، مع باقات مدفوعة (${priceText}) تفتح ميزات متقدّمة وحدود استخدام أعلى.`
        : `${n} أداة مدفوعة (${priceText}).`
    );
    pr.push(`كما هو الحال مع أي أداة ذكاء اصطناعي، تعتمد الباقة المثالية على مدى استخدامك لها. ننصح بتجربة ${n} قبل الالتزام بباقة مدفوعة.`);
    sections.push({ h2: `أسعار ${n}`, paras: pr });

    const bl: string[] = [];
    const quality = tool.rating >= 4.7 ? 'خياراً ممتازاً' : tool.rating >= 4.3 ? 'خياراً جيداً جداً' : 'خياراً جيداً';
    bl.push(
      `باختصار، يُعدّ ${n} ${quality} ضمن فئة ${cat} في 2026.` +
      (pros.length ? ` من أبرز نقاط قوّته: ${listToSentence(pros.slice(0, 2), locale)}.` : '') +
      (cons.length ? ` مع الأخذ في الحسبان: ${listToSentence(cons.slice(0, 2), locale)}.` : '') +
      ` إذا كان يناسب سير عملك، فإن ${n} يستحقّ التجربة${tool.pricing !== 'Paid' ? `، خصوصاً أنه يمكنك البدء ${tool.pricing === 'Free' ? 'مجاناً' : 'بباقة مجانية'}` : ''}.`
    );
    sections.push({ h2: `هل يستحق ${n} العناء؟ خلاصتنا`, paras: bl });
    return sections;
  }

  // English (default)
  const overview: string[] = [];
  overview.push(`${desc}`);
  overview.push(
    `${n} sits in the ${cat} category and is listed in the AIverse AI tools directory, where it holds an editorial rating of ${rating} out of 5 based on its capabilities, usability, value for money and reliability.` +
    (company ? ` It is developed by ${company}${founded ? `, founded in ${founded}` : ''}.` : '')
  );
  sections.push({ h2: `What is ${n}?`, paras: overview });

  const feat: string[] = [];
  feat.push(
    useCases.length
      ? `People typically use ${n} for ${listToSentence(useCases, locale)}.`
      : `${n} is designed to help users save time in the ${cat} space by automating tasks that would otherwise take significant effort.`
  );
  const extras: string[] = [];
  if (tags.length) extras.push(`It is often associated with ${listToSentence(tags, locale)}.`);
  if (tool.hasAPI) extras.push(`Developers can integrate ${n} into their own products through its API${tool.hasMobileApp ? ', and a mobile app is available too' : ''}.`);
  else if (tool.hasMobileApp) extras.push(`A mobile app is available for use on the go.`);
  if (extras.length) feat.push(extras.join(' '));
  sections.push({ h2: `${n} features and use cases`, paras: feat });

  const pr: string[] = [];
  pr.push(
    tool.pricing === 'Free'
      ? `${n} is completely free (${priceText}). You can use it without a subscription.`
      : tool.pricing === 'Freemium'
      ? `${n} offers a free plan, with paid tiers (${priceText}) that unlock more advanced features and higher usage limits.`
      : `${n} is a paid tool (${priceText}).`
  );
  pr.push(`As with any AI tool, the right plan depends on how heavily you use it. We recommend trying ${n} before committing to a paid plan.`);
  sections.push({ h2: `${n} pricing`, paras: pr });

  const bl: string[] = [];
  const quality = tool.rating >= 4.7 ? 'an excellent' : tool.rating >= 4.3 ? 'a strong' : 'a solid';
  bl.push(
    `Overall, ${n} is ${quality} choice in the ${cat} category for 2026.` +
    (pros.length ? ` Its standout strengths include ${listToSentence(pros.slice(0, 2), locale)}.` : '') +
    (cons.length ? ` Bear in mind ${listToSentence(cons.slice(0, 2), locale)}.` : '') +
    ` If it matches your workflow, ${n} is well worth a try${tool.pricing !== 'Paid' ? ` — especially since you can start ${tool.pricing === 'Free' ? 'for free' : 'on a free plan'}` : ''}.`
  );
  sections.push({ h2: `Is ${n} worth it? Our bottom line`, paras: bl });
  return sections;
}
