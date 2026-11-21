export type CategoryId =
  | "representation"
  | "rent"
  | "corporate"
  | "employment"
  | "sales-oath";

export interface DocumentTemplate {
  id: string;
  categoryId: CategoryId;
  titleAm: string;
  titleEn: string;
  purposeAm: string;
  purposeEn: string;
  bodyAm: string;
}

export interface DocumentCategory {
  id: CategoryId;
  titleAm: string;
  titleEn: string;
  count: number;
  oneSentenceAm: string;
  oneSentenceEn: string;
}

export const CATEGORIES: DocumentCategory[] = [
  {
    id: "representation",
    titleAm: "የውክልና ሥልጣን ሰነዶች",
    titleEn: "Representation (PoA)",
    count: 6,
    oneSentenceAm:
      "የንብረት፣ የተሽከርካሪ፣ የባንክ፣ የግብርና የጉምሩክ ውክልና ሰነዶችን ለማዘጋጀት ያገለግላል።",
    oneSentenceEn:
      "Covers powers of attorney for property, vehicles, bank accounts, tax/trade filings, and customs.",
  },
  {
    id: "rent",
    titleAm: "የኪራይ ውል ስምምነቶች",
    titleEn: "Rent & Lease Agreements",
    count: 8,
    oneSentenceAm:
      "የመኖሪያ ቤት፣ የንግድ ሱቅና መጋዘን ኪራይ እንዲሁም የኪራይ ውል ማፍረሻ ስምምነቶችን ያካትታል።",
    oneSentenceEn:
      "Includes residential leases, commercial shop or warehouse rentals, and lease termination agreements.",
  },
  {
    id: "corporate",
    titleAm: "የንግድና ቃለ-ጉባዔ ሰነዶች",
    titleEn: "Corporate & Minutes",
    count: 4,
    oneSentenceAm:
      "የካፒታል ማሳደግ፣ አዲስ የሥራ ዘርፍ መጨመር ቃለ-ጉባዔዎችን እና የንግድ ፈቃድ መሰረዣ ማመልከቻዎችን ይዟል።",
    oneSentenceEn:
      "Provides meeting minutes for capital increases or new sectors and trade license cancellation requests.",
  },
  {
    id: "employment",
    titleAm: "የቅጥር ውል ስምምነቶች",
    titleEn: "Employment Agreements",
    count: 2,
    oneSentenceAm:
      "የሥራ መደብ፣ የሥራ ሰዓት፣ ደመወዝ፣ ፈቃድና የምስጢር ጥበቃ ግዴታዎችን የያዘ የቅጥር ውል ቅጽ ነው።",
    oneSentenceEn:
      "Structures job duties, working hours, salary, annual leave, and confidentiality obligations.",
  },
  {
    id: "sales-oath",
    titleAm: "የሽያጭና ማረጋገጫ ውሎች",
    titleEn: "Sales & Declarations",
    count: 3,
    oneSentenceAm:
      "የሽያጭ ስምምነቶችን፣ የባለቤትነት ማረጋገጫዎችን እና በሰነዶች ማረጋገጫ የሚቀርቡ መግለጫዎችን ያካትታል።",
    oneSentenceEn:
      "Organizes sales agreements, ownership confirmations, and declarations for authentication offices.",
  },
];

export const TEMPLATES: DocumentTemplate[] = [
  {
    id: "poa-property-card",
    categoryId: "representation",
    titleAm: "የማይንቀሳቀስ ንብረትና ካርታ ዲጂታላይዜሽን የውክልና ሥልጣን",
    titleEn: "Property & Map Digitalization Power of Attorney",
    purposeAm: "ንብረትና ካርታ",
    purposeEn: "Property & Map",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት

የውክልና ሥልጣን

እኔ ወካይ ፡- [ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [ክልል/ከተማ፣ ክ/ከተማ፣ ወረዳ፣ የቤት ቁጥር]
ለተወካይ ፡- [የተወካይ ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [አድራሻ]

በስሜ ተመዝግቦ የሚገኘውን የካርታ ቁጥር [የካርታ ቁጥር]፣ የቤት ቁጥር [የቤት ቁጥር] እና ስፋት [ስፋት ካ.ሜ] የሆነውን ንብረት በተመለከተ ካርታ ወደ ዲጂታል እንዲቀይሩ፣ ማመልከቻ እንዲያስገቡ፣ ክፍያ እንዲከፍሉ እና የተጠናቀቀውን ዲጂታል ካርታ እንዲረከቡ በፍ/ብ/ሕ/ቁጥር 2199 እና 2203 መሠረት የውክልና ሥልጣን ሰጥቻለሁ።

የወካይ ስምና ፊርማ ፡- ________________________`,
  },
  {
    id: "poa-vehicle-libre",
    categoryId: "representation",
    titleAm: "የተሽከርካሪ ሊብሬ፣ ኢንሹራንስና ስም ማዛወሪያ ውክልና",
    titleEn: "Vehicle Libre, Insurance & Transfer PoA",
    purposeAm: "ተሽከርካሪ",
    purposeEn: "Vehicle",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የውክልና ሥልጣን

እኔ ወካይ ፡- [ሙሉ ስም] በስሜ የተመዘገበውን የሊብሬ/ባለቤትነት ደብተር ቁጥር [ቁጥር]፣ የሰሌዳ ቁጥር [ሰሌዳ]፣ የሞተር ቁጥር [ሞተር] እና የሻንሲ ቁጥር [ሻንሲ] የሆነውን ተሽከርካሪ በተመለከተ በመንገድ ትራንስፖርት፣ በኢንሹራንስና በሰነዶች ማረጋገጫ ቀርበው ጉዳይ እንዲያስፈጽሙ፣ ስም እንዲያዞሩና ደረሰኝ እንዲቀበሉ ወክያለሁ።

የወካይ ስምና ፊርማ ፡- ________________________`,
  },
  {
    id: "lease-commercial-shop",
    categoryId: "rent",
    titleAm: "የንግድ ቤት / ሱቅ ኪራይ ውል ስምምነት",
    titleEn: "Commercial Shop Lease Agreement",
    purposeAm: "ንግድ ኪራይ",
    purposeEn: "Commercial Lease",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የንግድ ቤት ኪራይ ውል ስምምነት

አከራይ ፡- [የአከራይ ሙሉ ስም / ድርጅት] አድራሻ፡- [አድራሻ]
ተከራይ ፡- [የተከራይ ሙሉ ስም / ድርጅት] አድራሻ፡- [አድራሻ]

በ[ከተማ/ክ/ከተማ/ወረዳ] የሚገኘውን የካርታ ቁጥር [ካርታ] እና የሱቅ/ቤት ቁጥር [ቁጥር] የሆነውን ክፍል ለ[የንግድ ዓላማ] አገልግሎት ከ[መጀመሪያ ቀን] እስከ [ማብቂያ ቀን] ለ[ጊዜ] በወር ብር [መጠን] (_________) ለማከራየት ተስማምተናል።

የአከራይ ፊርማ ፡- ___________________    የተከራይ ፊርማ ፡- ___________________`,
  },
  {
    id: "lease-termination",
    categoryId: "rent",
    titleAm: "የቤት ኪራይ ውል ማፍረስ ስምምነት ውል",
    titleEn: "Lease Termination Agreement",
    purposeAm: "ውል ማፍረስ",
    purposeEn: "Termination",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የቤት ኪራይ ውል ማፍረስ ስምምነት ውል

ውል አፍራሽ 1 (አከራይ) ፡- [ሙሉ ስም] አድራሻ፡- [አድራሻ]
ውል አፍራሽ 2 (ተከራይ) ፡- [ሙሉ ስም] አድራሻ፡- [አድራሻ]

በፍ/ብ/ሕ/ቁጥር 1815/1819 መሠረት በውል ቁጥር [የውል ቁጥር] እና በቀን [ቀን] የተፈጸመውን የኪራይ ውል በሁለቱም ወገኖች ሙሉ ስምምነት ማፍረሳችንንና ንብረቱን በተረከቡበት ሁኔታ ማስረከብ/መረከባችንን እናረጋግጣለን።

የአከራይ ፊርማ ፡- ___________________    የተከራይ ፊርማ ፡- ___________________`,
  },
  {
    id: "minutes-capital-sector",
    categoryId: "corporate",
    titleAm: "የቃለ-ጉባዔ ቅጽ (ካፒታል ማሳደግ / አዲስ የሥራ ዘርፍ)",
    titleEn: "Corporate Minutes (Capital Increase / New Sector)",
    purposeAm: "ቃለ-ጉባዔ",
    purposeEn: "Board/Member Minutes",
    bodyAm: `የ[የድርጅቱ ስም] ኃ/የተ/የግ/ማህበር
ቃለ-ጉባዔ

የስብሰባው ቀን ፡- ____/____/20____ ዓ.ም    ሰዓት ፡- [ሰዓት]    ቦታ ፡- [ቦታ]
አጀንዳ ፡- [ካፒታል ማሳደግ / አዲስ የሥራ ዘርፍ መጨመር]

ውሳኔ ፡- የድርጅቱ አባላት በሙሉ ድምፅ ተወያይተው ውሳኔውን ያጸደቁ ሲሆን አስፈላጊውን ሰነድ በሰነዶች ማረጋገጫና ምዝገባ ለማጽደቅ ተስማምተዋል።

የሰብሳቢ ስምና ፊርማ ፡- ___________________    የፀሐፊ ስምና ፊርማ ፡- ___________________`,
  },
  {
    id: "employment-contract",
    categoryId: "employment",
    titleAm: "የቅጥር ውል ስምምነት",
    titleEn: "Employment Agreement",
    purposeAm: "ቅጥር ውል",
    purposeEn: "Employment",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የቅጥር ውል ስምምነት

አሰሪ ፡- [የድርጅቱ ስም] አድራሻ፡- [አድራሻ] ስልክ፡- [ስልክ]
ሠራተኛ ፡- [ሙሉ ስም] አድራሻ፡- [አድራሻ] ስልክ፡- [ስልክ]

የሥራ መደብ ፡- [የሥራ መደብ]    የሥራ ቦታ ፡- [ቦታ]
የሥራ ሰዓት ፡- በሳምንት [ሰዓት] ሰዓት    ወርሃዊ ደመወዝ ፡- ብር [መጠን]

የአሰሪ ፊርማ ፡- ___________________    የሠራተኛ ፊርማ ፡- ___________________`,
  },
];
