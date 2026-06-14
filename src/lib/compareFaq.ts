import type { AITool } from './tools';
import type { Locale, FAQItem } from './faq';

const pricingScore = (p: string) => (p === 'Free' ? 3 : p === 'Freemium' ? 2 : 1);

function betterQuestion(n1: string, n2: string): Record<Locale, string> {
  return {
    en: `Which is better: ${n1} or ${n2}?`,
    fr: `Lequel est le meilleur : ${n1} ou ${n2} ?`,
    es: `¿Cuál es mejor: ${n1} o ${n2}?`,
    ar: `أيهما أفضل: ${n1} أم ${n2}؟`,
  };
}

function betterAnswer(t1: AITool, t2: AITool): Record<Locale, string> {
  const winner = t1.rating > t2.rating ? t1 : t2.rating > t1.rating ? t2 : null;
  const loser = winner === t1 ? t2 : t1;
  if (winner) {
    return {
      en: `${winner.name} has the higher user rating (${winner.rating}/5 vs ${loser.rating}/5), making it the stronger overall pick. That said, ${loser.name} can still be the better fit depending on your budget and specific needs — see the full comparison above.`,
      fr: `${winner.name} affiche la meilleure note (${winner.rating}/5 contre ${loser.rating}/5), ce qui en fait le choix le plus solide globalement. ${loser.name} peut toutefois rester pertinent selon votre budget et vos besoins — voir le comparatif complet ci-dessus.`,
      es: `${winner.name} tiene la valoración más alta (${winner.rating}/5 frente a ${loser.rating}/5), lo que lo convierte en la opción más sólida en general. Aun así, ${loser.name} puede ser mejor según tu presupuesto y necesidades — consulta la comparación completa arriba.`,
      ar: `يحصل ${winner.name} على تقييم أعلى (${winner.rating}/5 مقابل ${loser.rating}/5)، مما يجعله الخيار الأقوى بشكل عام. ومع ذلك، قد يظل ${loser.name} الأنسب حسب ميزانيتك واحتياجاتك — راجع المقارنة الكاملة أعلاه.`,
    };
  }
  return {
    en: `${t1.name} and ${t2.name} are rated equally (${t1.rating}/5), so the better choice depends on your specific use case, pricing preference, and feature needs — see the full comparison above for details.`,
    fr: `${t1.name} et ${t2.name} ont la même note (${t1.rating}/5), le meilleur choix dépend donc de votre usage, de votre budget et des fonctionnalités recherchées — voir le comparatif complet ci-dessus.`,
    es: `${t1.name} y ${t2.name} tienen la misma valoración (${t1.rating}/5), por lo que la mejor opción depende de tu caso de uso, presupuesto y funciones necesarias — consulta la comparación completa arriba.`,
    ar: `يحصل ${t1.name} و${t2.name} على نفس التقييم (${t1.rating}/5)، فالخيار الأفضل يعتمد على استخدامك وميزانيتك والميزات التي تحتاجها — راجع المقارنة الكاملة أعلاه.`,
  };
}

function cheaperQuestion(n1: string, n2: string): Record<Locale, string> {
  return {
    en: `Is ${n1} or ${n2} cheaper?`,
    fr: `${n1} ou ${n2} : lequel est le moins cher ?`,
    es: `¿${n1} o ${n2} es más barato?`,
    ar: `أيهما أرخص: ${n1} أم ${n2}؟`,
  };
}

function cheaperAnswer(t1: AITool, t2: AITool): Record<Locale, string> {
  const s1 = pricingScore(t1.pricing);
  const s2 = pricingScore(t2.pricing);
  if (s1 === s2) {
    return {
      en: `${t1.name} (${t1.pricingLocalized.en}) and ${t2.name} (${t2.pricingLocalized.en}) sit at a similar price point. The best way to compare actual cost is to check each tool's plans for the specific features and usage limits you need.`,
      fr: `${t1.name} (${t1.pricingLocalized.fr}) et ${t2.name} (${t2.pricingLocalized.fr}) se situent à un niveau de prix similaire. Pour comparer le coût réel, vérifiez les offres de chaque outil selon vos besoins et limites d'usage.`,
      es: `${t1.name} (${t1.pricingLocalized.es}) y ${t2.name} (${t2.pricingLocalized.es}) tienen un precio similar. Para comparar el coste real, revisa los planes de cada herramienta según tus necesidades y límites de uso.`,
      ar: `يقع ${t1.name} (${t1.pricingLocalized.ar}) و${t2.name} (${t2.pricingLocalized.ar}) في نطاق سعري مماثل. للمقارنة الدقيقة، تحقق من خطط كل أداة بحسب الميزات وحدود الاستخدام التي تحتاجها.`,
    };
  }
  const cheaper = s1 > s2 ? t1 : t2;
  const pricier = cheaper === t1 ? t2 : t1;
  return {
    en: `${cheaper.name} (${cheaper.pricingLocalized.en}) is generally more budget-friendly than ${pricier.name} (${pricier.pricingLocalized.en}). If cost is your main concern, ${cheaper.name} is worth trying first — but compare the feature sets above to confirm it covers what you need.`,
    fr: `${cheaper.name} (${cheaper.pricingLocalized.fr}) est globalement plus abordable que ${pricier.name} (${pricier.pricingLocalized.fr}). Si le budget est votre priorité, testez d'abord ${cheaper.name} — mais comparez les fonctionnalités ci-dessus pour vérifier qu'il couvre vos besoins.`,
    es: `${cheaper.name} (${cheaper.pricingLocalized.es}) suele ser más económico que ${pricier.name} (${pricier.pricingLocalized.es}). Si el precio es tu prioridad, prueba primero ${cheaper.name}, pero compara las funciones arriba para confirmar que cubre lo que necesitas.`,
    ar: `${cheaper.name} (${cheaper.pricingLocalized.ar}) أرخص بشكل عام من ${pricier.name} (${pricier.pricingLocalized.ar}). إذا كانت التكلفة أولويتك، جرّب ${cheaper.name} أولاً — لكن قارن الميزات أعلاه للتأكد من أنه يلبي حاجتك.`,
  };
}

function switchQuestion(n1: string, n2: string): Record<Locale, string> {
  return {
    en: `Can I switch from ${n1} to ${n2}?`,
    fr: `Peut-on passer de ${n1} à ${n2} ?`,
    es: `¿Puedo cambiar de ${n1} a ${n2}?`,
    ar: `هل يمكنني التبديل من ${n1} إلى ${n2}؟`,
  };
}

function switchAnswer(t1: AITool, t2: AITool): Record<Locale, string> {
  return {
    en: `Yes — switching between ${t1.name} and ${t2.name} is usually straightforward since both are ${t1.category} tools with similar core workflows. Most users can export their data and get started with ${t2.name} within a day; just check ${t2.name}'s free plan before committing to a paid tier.`,
    fr: `Oui — passer de ${t1.name} à ${t2.name} est généralement simple, les deux étant des outils de ${t1.category} avec des workflows similaires. La plupart des utilisateurs peuvent exporter leurs données et démarrer sur ${t2.name} en une journée ; testez son plan gratuit avant de souscrire une offre payante.`,
    es: `Sí — cambiar de ${t1.name} a ${t2.name} suele ser sencillo, ya que ambos son herramientas de ${t1.category} con flujos de trabajo similares. La mayoría de usuarios pueden exportar sus datos y empezar con ${t2.name} en un día; prueba su plan gratuito antes de pagar.`,
    ar: `نعم — التبديل بين ${t1.name} و${t2.name} يكون سهلاً عادةً لأن كلاهما أداة ${t1.category} بسير عمل مشابه. يمكن لمعظم المستخدمين تصدير بياناتهم والبدء باستخدام ${t2.name} في يوم واحد؛ جرّب خطته المجانية قبل الالتزام بخطة مدفوعة.`,
  };
}

// Expert verdict: a real, data-driven recommendation for /compare/[slug] pages.
export function getExpertVerdict(t1: AITool, t2: AITool): Record<Locale, string> {
  const tie = t1.rating === t2.rating;
  const winner = t1.rating >= t2.rating ? t1 : t2;
  const other = winner === t1 ? t2 : t1;
  const s1 = pricingScore(t1.pricing);
  const s2 = pricingScore(t2.pricing);
  const cheaper = s1 > s2 ? t1 : s2 > s1 ? t2 : null;
  const wStrength = winner.pros && winner.pros.length ? winner.pros[0] : '';
  const oStrength = other.pros && other.pros.length ? other.pros[0] : '';
  const wUse = winner.useCases && winner.useCases.length ? winner.useCases[0] : '';
  const cat = winner.category;

  return {
    en: `Our expert verdict: ${tie
      ? `${t1.name} and ${t2.name} are very evenly matched at ${t1.rating}/5, so the right pick comes down to your priorities`
      : `${winner.name} is the stronger all-round choice, scoring ${winner.rating}/5 versus ${other.rating}/5 for ${other.name}`}${wStrength ? `, and it stands out for "${wStrength}"` : ''}. ${cheaper && cheaper !== winner ? `If budget is your priority, ${cheaper.name} (${cheaper.pricingLocalized.en}) is the more affordable option. ` : ''}Choose ${winner.name} if you want the best ${cat} tool overall${wUse ? `, especially for ${wUse.toLowerCase()}` : ''}; pick ${other.name} if ${oStrength ? `"${oStrength}"` : 'its pricing or specific features'} matters more for your workflow.`,
    fr: `Notre avis d'expert : ${tie
      ? `${t1.name} et ${t2.name} sont au coude-à-coude (${t1.rating}/5 chacun), le bon choix dépend donc de vos priorités`
      : `${winner.name} est le choix le plus solide globalement, avec ${winner.rating}/5 contre ${other.rating}/5 pour ${other.name}`}${wStrength ? `, et il se distingue par « ${wStrength} »` : ''}. ${cheaper && cheaper !== winner ? `Si le budget prime, ${cheaper.name} (${cheaper.pricingLocalized.fr}) est l'option la plus abordable. ` : ''}Choisissez ${winner.name} pour le meilleur outil de ${cat} dans l'ensemble${wUse ? `, surtout pour « ${wUse} »` : ''} ; préférez ${other.name} si ${oStrength ? `« ${oStrength} »` : 'son prix ou ses fonctionnalités spécifiques'} compte davantage pour vous.`,
    es: `Nuestro veredicto experto: ${tie
      ? `${t1.name} y ${t2.name} están muy igualados (${t1.rating}/5 cada uno), así que la mejor opción depende de tus prioridades`
      : `${winner.name} es la opción más sólida en general, con ${winner.rating}/5 frente a ${other.rating}/5 de ${other.name}`}${wStrength ? `, y destaca por «${wStrength}»` : ''}. ${cheaper && cheaper !== winner ? `Si el presupuesto es tu prioridad, ${cheaper.name} (${cheaper.pricingLocalized.es}) es la opción más económica. ` : ''}Elige ${winner.name} si quieres la mejor herramienta de ${cat} en general${wUse ? `, especialmente para ${wUse.toLowerCase()}` : ''}; elige ${other.name} si ${oStrength ? `«${oStrength}»` : 'su precio o funciones específicas'} importa más para ti.`,
    ar: `رأي خبرائنا: ${tie
      ? `${t1.name} و${t2.name} متقاربان جدًا (${t1.rating}/5 لكليهما)، لذا يعتمد الاختيار على أولوياتك`
      : `${winner.name} هو الخيار الأقوى عمومًا بتقييم ${winner.rating}/5 مقابل ${other.rating}/5 لـ ${other.name}`}${wStrength ? `، ويتميّز بـ «${wStrength}»` : ''}. ${cheaper && cheaper !== winner ? `إذا كانت الميزانية أولويتك، فإن ${cheaper.name} (${cheaper.pricingLocalized.ar}) هو الخيار الأوفر. ` : ''}اختر ${winner.name} إذا أردت أفضل أداة ${cat} إجمالاً${wUse ? `، خاصةً لـ ${wUse}` : ''}؛ واختر ${other.name} إذا كان ${oStrength ? `«${oStrength}»` : 'سعره أو ميزاته'} أهم بالنسبة لسير عملك.`,
  };
}

// Generic, direct-answer-first (AEO) FAQ for /compare/[slug] pages.
export function getCompareFaq(t1: AITool, t2: AITool): FAQItem[] {
  return [
    { question: betterQuestion(t1.name, t2.name), answer: betterAnswer(t1, t2) },
    { question: cheaperQuestion(t1.name, t2.name), answer: cheaperAnswer(t1, t2) },
    { question: switchQuestion(t1.name, t2.name), answer: switchAnswer(t1, t2) },
  ];
}
