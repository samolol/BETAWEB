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

export type PrivacyContent = {
  href: string;
  linkLabel: string;
  checkboxLabelPrefix: string;
  checkboxLinkLabel: string;
  pageTitle: string;
  pageDescription: string;
  backLabel: string;
  controllerHeading: string;
  dataHeading: string;
  dataItems: string[];
  purposeHeading: string;
  purposeItems: string[];
  retentionHeading: string;
  retentionText: string;
  accessHeading: string;
  accessItems: string[];
  rightsHeading: string;
  rightsItems: string[];
};

export type TermsSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  showSupplierDetails?: boolean;
};

export type TermsContent = {
  href: string;
  linkLabel: string;
  pageTitle: string;
  pageDescription: string;
  backLabel: string;
  introTitle: string;
  sections: TermsSection[];
  closingPlace: string;
  closingDate: string;
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
    offerNote: string;
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
    responseNote: string;
    email: string;
    phone: string;
    ico: string;
    availability: string;
    placeholders: ContactFieldPlaceholder;
  };
  legal: {
    privacy: PrivacyContent;
    terms: TermsContent;
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
    { label: "Problém", href: "#problem" },
    { label: "Řešení", href: "#reseni" },
    { label: "Reference", href: "#reference" },
    { label: "Proces", href: "#proces" },
    { label: "O mně", href: "#o-mne" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  hero: {
    title: "Web, který Vám pomůže získat víc poptávek.",
    description:
      "Pro malé firmy a služby, které chtějí působit důvěryhodně a usnadnit lidem kontakt.",
    primaryCta: "Napsat mi",
    secondaryCta: "Zjistit více",
    offerNote: "Osobně, jednoduše a bez zbytečných koleček.",
    highlights: ["Jasná nabídka", "Přímá spolupráce", "Víc poptávek"],
    panelTitle: "Co od webu potřebujete nejčastěji?",
    panelItems: [
      "Aby návštěvník rychle pochopil, co nabízíte.",
      "Aby web vypadal důvěryhodně na mobilu i desktopu.",
      "Aby měl jasné CTA a vedl k poptávce, ne ke zmatku.",
    ],
  },
  services: {
    title: "Proč web často nepřivede ani jednu zprávu",
    description:
      "Když není hned jasné, co děláte a proč se ozvat, lidé jdou dál.",
    items: [
      {
        title: "Nejasná nabídka",
        description: "Návštěvník rychle nepochopí, co vlastně nabízíte.",
      },
      {
        title: "Slabá důvěra",
        description: "Chaotický nebo zastaralý web snižuje chuť se ozvat.",
      },
      {
        title: "Bez jasné akce",
        description: "Když web nevede ke kontaktu, návštěvník jen odejde.",
      },
    ],
  },
  benefits: {
    title: "Co se změní",
    description:
      "Jednoduchý web, ve kterém se lidé rychle zorientují a snáz se ozvou.",
    items: [
      {
        title: "Jasnou strukturu",
        description: "Hned je jasné, co nabízíte a proč se ozvat.",
      },
      {
        title: "Důvěryhodný vzhled",
        description:
          "Web působí dobře na mobilu i desktopu a budí větší důvěru.",
      },
      {
        title: "Jasnou výzvu k akci",
        description: "Lidé ví, co udělat dál a jak Vám napsat.",
      },
    ],
  },
  process: {
    title: "Jak probíhá spolupráce",
    description: "Jednoduše, přímo a bez zbytečného přeposílání.",
    steps: [
      {
        title: "Domluvíme zadání",
        description: "Krátce si ujasníme, co má web splnit.",
      },
      {
        title: "Připravím web",
        description: "Navrhnu strukturu a postavím web pro Váš obor.",
      },
      {
        title: "Doladíme a spustíme",
        description: "Doladíme detaily a web pustíme ven.",
      },
    ],
  },
  showcase: {
    title: "Ukázky webů",
    description: "Tři různé styly pro firmy, gastro a lokální služby.",
    items: [
      {
        title: "Firemní web",
        subtitle: "Čistá prezentace služby pro lepší první dojem.",
        demoUrl: "https://samolol.github.io/DEMO1/",
      },
      {
        title: "Gastro web",
        subtitle: "Atmosféra, menu a jasná cesta k více rezervacím.",
        demoUrl: "https://samolol.github.io/DEMO2/",
      },
      {
        title: "Web pro autoservis",
        subtitle: "Praktický web pro lokální službu a rychlejší kontakt.",
        demoUrl: "https://samolol.github.io/DEMO3/",
      },
    ],
  },
  pricing: {
    title: "Balíčky a orientační ceny",
    description:
      "Vyberte si rozsah, který dává smysl pro Váš projekt. Přesná nabídka se vždy odvíjí od konkrétního zadání.",
    note:
      "Uvedené ceny jsou orientační. Přesnou nabídku připravím podle rozsahu, obsahu a případných funkcí.",
    plans: [
      {
        name: "Starter web",
        price: "od 8 900 Kč",
        description:
          "Pro jednoduchou online prezentaci služby nebo menšího podnikání.",
        features: [
          "1 přehledná stránka / landing page",
          "Responzivní zobrazení pro mobil i desktop",
          "Kontaktní formulář a výrazná CTA tlačítka",
          "Základní technické SEO",
          "Dodání rychle a bez zbytečné složitosti",
        ],
      },
      {
        name: "Firemní web",
        price: "od 16 900 Kč",
        description:
          "Pro firmy a živnostníky, kteří chtějí profesionální web, který budí důvěru a přivádí poptávky.",
        features: [
          "3–5 podstránek s jasnou strukturou",
          "Individuálně upravený vzhled na základě šablony",
          "Obsah zaměřený na poptávky",
          "Základní SEO a responzivita",
          "Připraveno pro další rozšíření",
        ],
        featured: true,
      },
      {
        name: "Web na míru",
        price: "od 29 900 Kč",
        description:
          "Pro specifičtější zadání, rozsáhlejší obsah nebo individuální funkce.",
        features: [
          "Návrh řešení podle konkrétního cíle",
          "Větší rozsah a více podstránek",
          "Pokročilejší obsahová struktura",
          "Individuální konzultace a návrh postupu",
          "Možnost navazujícího rozvoje",
        ],
      },
    ],
  },
  about: {
    title: "Kdo za tím stojí",
    paragraphs: [
      "Jsem freelancer, který tvoří jednoduché a funkční weby pro malé firmy, živnostníky a služby. Neřeším zbytečnosti ani složité procesy. Důležité je, aby web vypadal dobře, dával smysl a hlavně přiváděl poptávky.",
      "Spolupracujete přímo se mnou – bez agentury, bez zdlouhavé komunikace a bez zbytečných kol úprav. Domluvíme se jednoduše, vysvětlím vám vše lidsky a postarám se o celý web od návrhu až po spuštění.",
      "Cílem není jen „mít web“, ale mít web, který vám opravdu pomůže získat nové zákazníky.",
    ],
    points: [
      "Přímá komunikace bez prostředníků",
      "Jednoduchý a rychlý proces",
      "Weby zaměřené na výsledky",
      "Pomůžu vám i po spuštění",
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
    title: "Napište mi",
    description:
      "Stačí pár vět o tom, co potřebujete. Ozvu se co nejdříve a domluvíme další krok.",
    cta: "Napsat mi",
    responseNote: "Stačí pár vět. Odpovím do 24 hodin. Žádný spam.",
    email: "poptavky@webnamiru.online",
    phone: "+420 725 161 471",
    ico: "IČO: 24638161",
    availability: "Přímo se mnou, online pro klienty z celé ČR",
    placeholders: {
      name: "Jak Vám mám říkat",
      email: "Kam se Vám mám ozvat",
      phone: "Telefon, pokud chcete",
      message: "Stačí pár vět o tom, co potřebujete.",
    },
  },
  legal: {
    privacy: {
      href: "/ochrana-osobnich-udaju",
      linkLabel: "Ochrana osobních údajů",
      checkboxLabelPrefix: "Souhlasím se zpracováním osobních údajů podle",
      checkboxLinkLabel: "zásad ochrany osobních údajů",
      pageTitle: "Ochrana osobních údajů",
      pageDescription:
        "Základní informace o tom, jak nakládám s osobními údaji při odeslání poptávky přes tento web.",
      backLabel: "Zpět na hlavní stránku",
      controllerHeading: "Správce osobních údajů",
      dataHeading: "Jaké údaje zpracovávám",
      dataItems: ["jméno", "e-mail", "telefon (pokud uvedete)", "obsah zprávy"],
      purposeHeading: "Účel",
      purposeItems: ["odpověď na poptávku", "komunikace ohledně služeb"],
      retentionHeading: "Doba uchování",
      retentionText:
        "Pouze po dobu nezbytně nutnou k vyřízení poptávky nebo spolupráce.",
      accessHeading: "Přístup k údajům",
      accessItems: ["pouze správce", "údaje nepředávám třetím stranám"],
      rightsHeading: "Práva uživatele",
      rightsItems: ["přístup k údajům", "oprava", "výmaz", "námitka proti zpracování"],
    },
    terms: {
      href: "/obchodni-podminky",
      linkLabel: "Obchodní podmínky",
      pageTitle: "Obchodní podmínky",
      pageDescription:
        "Základní obchodní podmínky pro poskytování služeb tvorby webových stránek na míru.",
      backLabel: "Zpět na hlavní stránku",
      introTitle: "Obchodní podmínky",
      sections: [
        {
          title: "1. Úvodní ustanovení",
          paragraphs: [
            "Tyto obchodní podmínky upravují vztah mezi dodavatelem a objednatelem při poskytování služeb tvorby webových stránek.",
          ],
          showSupplierDetails: true,
        },
        {
          title: "2. Služby",
          paragraphs: [
            "Dodavatel poskytuje služby v oblasti tvorby webových stránek na míru dle individuální dohody s klientem.",
          ],
        },
        {
          title: "3. Uzavření spolupráce",
          paragraphs: [
            "Spolupráce vzniká na základě potvrzení nabídky, například e-mailem nebo podpisem smlouvy.",
          ],
        },
        {
          title: "4. Cena a platební podmínky",
          bullets: [
            "cena je stanovena individuálně",
            "obvykle se hradí záloha 50 % před zahájením práce",
            "Bez uhrazení zálohy není práce zahájena.",
            "doplatek je splatný před předáním hotového webu",
          ],
        },
        {
          title: "5. Dodání a termíny",
          paragraphs: [
            "Termín dodání je individuální a závisí na rozsahu projektu a dodání podkladů ze strany klienta.",
          ],
        },
        {
          title: "6. Povinnosti objednatele",
          paragraphs: [
            "Objednatel je povinen dodat potřebné podklady, například texty, obrázky a přístupy, včas.",
            "Zpoždění může ovlivnit termín dodání.",
          ],
        },
        {
          title: "7. Úpravy",
          paragraphs: [
            "V ceně jsou zahrnuty pouze dohodnuté úpravy. Další úpravy mohou být zpoplatněny.",
          ],
        },
        {
          title: "8. Předání díla",
          paragraphs: [
            "Web je předán po uhrazení celé částky.",
            "Do té doby zůstává majetkem dodavatele.",
          ],
        },
        {
          title: "9. Odpovědnost",
          paragraphs: [
            "Dodavatel nenese odpovědnost za obsah dodaný objednatelem.",
          ],
        },
        {
          title: "10. Zrušení spolupráce",
          paragraphs: [
            "V případě zrušení spolupráce ze strany objednatele se zaplacená záloha nevrací.",
          ],
        },
        {
          title: "11. Závěrečná ustanovení",
          paragraphs: ["Tyto podmínky mohou být aktualizovány."],
        },
      ],
      closingPlace: "[město]",
      closingDate: "[datum]",
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
