export type NavigationItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type BenefitItem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ShowcaseItem = {
  title: string;
  subtitle: string;
  demoUrl: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactFieldPlaceholder = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type SiteContent = {
  brand: {
    name: string;
    domain: string;
    eyebrow: string;
    location: string;
  };
  navigation: NavigationItem[];
  hero: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
    panelTitle: string;
    panelItems: string[];
  };
  services: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
  benefits: {
    title: string;
    description: string;
    items: BenefitItem[];
  };
  process: {
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  showcase: {
    title: string;
    description: string;
    items: ShowcaseItem[];
  };
  pricing: {
    title: string;
    description: string;
    note: string;
    plans: PricingPlan[];
  };
  about: {
    title: string;
    paragraphs: string[];
    points: string[];
  };
  faq: {
    title: string;
    description: string;
    items: FaqItem[];
  };
  contact: {
    title: string;
    description: string;
    cta: string;
    email: string;
    phone: string;
    ico: string;
    availability: string;
    placeholders: ContactFieldPlaceholder;
  };
  finalCta: {
    title: string;
    description: string;
    buttonLabel: string;
  };
  footer: {
    claim: string;
    note: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
};

export const siteContent: SiteContent = {
  brand: {
    name: "Web na míru",
    domain: "webnamiru.online",
    eyebrow: "Weby na míru pro firmy, živnostníky a podnikatele",
    location: "Česká republika",
  },
  navigation: [
    { label: "Služby", href: "#sluzby" },
    { label: "Ukázky", href: "#ukazky" },
    { label: "Proč já", href: "#proc-ja" },
    { label: "Ceník", href: "#cenik" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  hero: {
    title: "Web, který působí profesionálně a přivádí nové poptávky.",
    description:
      "Tvořím rychlé a přehledné weby na míru pro menší firmy, služby a podnikatele. Bez chaosu, bez zbytečností, s důrazem na jasnou nabídku a důvěryhodný první dojem.",
    primaryCta: "Nezávazná poptávka",
    secondaryCta: "Zjistit více",
    highlights: [
      "Responzivní design",
      "Rychlé načítání",
      "SEO-ready základ",
      "Snadná další správa",
    ],
    panelTitle: "Co od webu potřebujete nejčastěji?",
    panelItems: [
      "Aby návštěvník rychle pochopil, co nabízíte.",
      "Aby web vypadal důvěryhodně na mobilu i desktopu.",
      "Aby měl jasné CTA a vedl k poptávce, ne ke zmatku.",
    ],
  },
  services: {
    title: "Služby, které dávají smysl pro menší byznys",
    description:
      "Každý web stavím podle cíle: získat poptávku, přehledně představit službu nebo posunout stávající web na profesionálnější úroveň.",
    items: [
      {
        title: "Tvorba webů na míru",
        description:
          "Řešení navržené podle vašeho oboru, nabídky a cíle. Bez univerzální šablony, která neodpovídá vašemu podnikání.",
      },
      {
        title: "Firemní weby",
        description:
          "Web, který jasně vysvětlí, co děláte, proč vám věřit a jak vás může klient snadno kontaktovat.",
      },
      {
        title: "Landing page",
        description:
          "Jedna silná stránka pro konkrétní službu, nabídku nebo kampaň. Přehledná struktura a jasná výzva k akci.",
      },
      {
        title: "Redesign webu",
        description:
          "Pokud současný web působí zastarale nebo neplní svůj účel, navrhnu čistší, srozumitelnější a výkonnější variantu.",
      },
      {
        title: "Základní SEO nastavení",
        description:
          "Web připravím tak, aby měl správné technické základy pro vyhledávače a byl dobře čitelný pro uživatele.",
      },
      {
        title: "Technická správa a úpravy",
        description:
          "Po spuštění nezůstáváte sami. Pomohu s dalšími úpravami, rozšířením obsahu i technickou údržbou.",
      },
    ],
  },
  benefits: {
    title: "Proč si vybrat právě mě",
    description:
      "Neprodávám zbytečně složité řešení. Cílem je web, který vypadá dobře, funguje rychle a pomáhá vám obchodně.",
    items: [
      {
        title: "Individuální přístup",
        description:
          "Nehledám univerzální šablonu. Návrh přizpůsobuji tomu, co opravdu potřebujete vy a váš byznys.",
      },
      {
        title: "Rychlá komunikace",
        description:
          "Odpovědi bez zdržování, jasné kroky a průběžné informace, abyste věděli, v jaké fázi se web nachází.",
      },
      {
        title: "Web zaměřený na výkon",
        description:
          "Struktura, texty a CTA směřují k tomu, aby se návštěvník snadno rozhodl udělat další krok.",
      },
      {
        title: "Moderní design",
        description:
          "Čistý a aktuální vzhled, který působí důvěryhodně dnes i za několik let, ne jen při prvním dojmu.",
      },
      {
        title: "Přehledné řešení bez zbytečností",
        description:
          "Žádný vizuální chaos ani funkce navíc jen proto, že to jde. Každá část webu má jasný účel.",
      },
    ],
  },
  process: {
    title: "Jak probíhá spolupráce",
    description:
      "Spolupráce je jednoduchá, srozumitelná a bez zbytečných koleček. Potřebuji od vás hlavně jasný cíl a základní podklady.",
    steps: [
      {
        title: "Úvodní konzultace",
        description:
          "Probereme, co nabízíte, komu je web určený a jaký má mít výsledek.",
      },
      {
        title: "Návrh řešení",
        description:
          "Navrhnu vhodnou strukturu, rozsah a směr webu včetně doporučení dalšího postupu.",
      },
      {
        title: "Tvorba webu",
        description:
          "Postavím web s důrazem na čitelnost, rychlost, mobilní zobrazení a jasné CTA.",
      },
      {
        title: "Úpravy a spuštění",
        description:
          "Doladíme detaily, projdeme připomínky a připravíme web ke spuštění.",
      },
      {
        title: "Podpora po dokončení",
        description:
          "Pokud budete chtít, navážeme další správou, úpravami nebo rozvojem webu.",
      },
    ],
  },
  showcase: {
    title: "Ukázky vybraných webů",
    description:
      "Tři různé směry zpracování pro business, gastro a lokální služby. Čistě, moderně a bez zbytečné omáčky.",
    items: [
      {
        title: "Business studio prezentace",
        subtitle:
          "Moderní firemní web s čistou strukturou a prémiovým dojmem.",
        demoUrl: "https://samolol.github.io/DEMO1/",
      },
      {
        title: "Gastro prezentace restaurace",
        subtitle:
          "Elegantní web pro restauraci s atmosférou, menu a rezervací.",
        demoUrl: "https://samolol.github.io/DEMO2/",
      },
      {
        title: "Web pro autoservis",
        subtitle:
          "Praktický lokální web zaměřený na důvěru a rychlou poptávku.",
        demoUrl: "https://samolol.github.io/DEMO3/",
      },
    ],
  },
  pricing: {
    title: "Orientační ceník",
    description:
      "Každý web má jiný rozsah, takže finální nabídka je vždy individuální. Pro první orientaci ale dává smysl mít jasný rámec.",
    note: "Uvedené ceny jsou startovací. Konečná cena se odvíjí od rozsahu, obsahu a požadovaných funkcí.",
    plans: [
      {
        name: "Starter web",
        price: "od 19 900 Kč",
        description:
          "Pro jednoduchou prezentaci služby nebo menšího podnikání.",
        features: [
          "Jedna až několik přehledných sekcí",
          "Responzivní zobrazení",
          "Silné CTA a kontaktní formulář",
          "Základní technické SEO",
        ],
      },
      {
        name: "Firemní web",
        price: "od 34 900 Kč",
        description:
          "Pro firmy a živnostníky, kteří chtějí důvěryhodný a profesionální web.",
        features: [
          "Více obsahových sekcí a jasná struktura",
          "Individuální vizuální návrh",
          "Obsah zaměřený na poptávky",
          "Příprava na další rozšíření",
        ],
        featured: true,
      },
      {
        name: "Web na míru",
        price: "od 59 900 Kč",
        description:
          "Pro specifické zadání, rozsáhlejší obsah nebo individuální funkce.",
        features: [
          "Návrh řešení podle konkrétního cíle",
          "Vyšší rozsah a více podstránek",
          "Pokročilejší obsahová struktura",
          "Individuální nabídka a konzultace",
        ],
      },
    ],
  },
  about: {
    title: "O mně",
    paragraphs: [
      "Jsem podnikatel z ČR a tvořím weby na míru pro firmy, živnostníky a menší podnikatele, kteří chtějí na internetu působit profesionálně a získávat nové klienty.",
      "Na web se dívám prakticky. Nestačí, aby jen vypadal dobře. Musí být srozumitelný, rychlý a pomáhat návštěvníkovi udělat další krok.",
      "Zakládám si na osobním přístupu, stručné komunikaci a řešení bez zbytečností. Cílem je web, který má obchodní smysl a dobře se s ním pracuje i do budoucna.",
    ],
    points: [
      "Osobní spolupráce bez zbytečných mezičlánků",
      "Praktický pohled na web jako nástroj pro byznys",
      "Řešení, které se dá dále rozvíjet",
    ],
  },
  faq: {
    title: "Často kladené dotazy",
    description:
      "To nejdůležitější k průběhu spolupráce, rozsahu dodání a následné podpoře.",
    items: [
      {
        question: "Jak dlouho trvá vytvoření webu?",
        answer:
          "Záleží na rozsahu. Jednodušší prezentační web může být hotový během několika týdnů, větší řešení trvá déle podle obsahu a připomínek.",
      },
      {
        question: "Co budeš ode mě potřebovat?",
        answer:
          "Ideálně základní informace o službách, cílové skupině, případné texty, logo a představu o cíli webu. Pokud vše ještě nemáte, pomohu nastavit rozumný základ.",
      },
      {
        question: "Děláš i úpravy starého webu?",
        answer:
          "Ano. Pokud dává větší smysl upravit nebo redesignovat stávající web než stavět nový, navrhnu vhodný postup.",
      },
      {
        question: "Je v ceně i mobilní verze?",
        answer:
          "Ano. Web je od začátku navržený tak, aby fungoval a dobře vypadal na mobilu, tabletu i desktopu.",
      },
      {
        question: "Pomůžeš i po spuštění webu?",
        answer:
          "Ano. Po dokončení můžeme navázat další správou, úpravami obsahu nebo technickou podporou podle potřeby.",
      },
    ],
  },
  contact: {
    title: "Pojďme probrat váš web",
    description:
      "Napište mi, co potřebujete, a ozvu se s návrhem dalšího postupu. První poptávka je nezávazná.",
    cta: "Pojďme probrat váš web",
    email: "poptavky@webnamiru.online",
    phone: "+420 725 161 471",
    ico: " IČO:24638161",
    availability: "Online spolupráce pro klienty z celé ČR",
    placeholders: {
      name: "Jak se jmenujete",
      email: "vas@email.cz",
      phone: "+420 777 000 000",
      message: "Stručně popište, co potřebujete a jaký má web splnit cíl.",
    },
  },
  finalCta: {
    title: "Chcete web, který působí profesionálně už na první pohled?",
    description:
      "Začněme krátkou nezávaznou poptávkou. Stačí napsat, co řešíte, a navrhnu vhodný směr.",
    buttonLabel: "Nezávazně poptat web",
  },
  footer: {
    claim: "Web na míru pro firmy, živnostníky a menší podnikatele.",
    note: "Připraveno pro jednoduché nasazení na Vercel a další rozvoj.",
  },
  seo: {
    title: "Web na míru | Tvorba webů na míru pro firmy a podnikatele",
    description:
      "Tvorba webů na míru pro firmy, živnostníky a menší podnikatele. Moderní, rychlé a přehledné weby zaměřené na důvěru a nové poptávky.",
    keywords: [
      "tvorba webů na míru",
      "firemní web",
      "web pro živnostníky",
      "landing page",
      "redesign webu",
      "webnamiru.online",
    ],
    ogTitle: "Web na míru pro firmy a podnikatele",
    ogDescription:
      "Moderní a přehledné weby na míru, které pomáhají působit profesionálně a získávat poptávky.",
  },
};
