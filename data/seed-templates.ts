export type CategoryId =
  | "representation"
  | "rent"
  | "corporate"
  | "employment"
  | "sales-oath";

export interface DocumentCategory {
  id: CategoryId;
  slug: CategoryId;
  titleAm: string;
  titleEn: string;
  oneSentenceAm: string;
  oneSentenceEn: string;
  sortOrder: number;
}

export interface DocumentTemplate {
  id: string;
  categoryId: CategoryId;
  titleAm: string;
  titleEn: string;
  purposeAm: string;
  purposeEn: string;
  bodyAm: string;
  legalRefs: string[];
  isApproved: boolean;
  downloadCount: number;
  createdAt: string;
}

export const SEED_CATEGORIES: DocumentCategory[] = [
  {
    id: "representation",
    slug: "representation",
    titleAm: "የውክልና ሥልጣን ሰነዶች",
    titleEn: "Representation (PoA)",
    oneSentenceAm:
      "የንብረት፣ የተሽከርካሪ፣ የባንክ፣ የጉምሩክ፣ የግብርና የውርስ ውክልና ሰነዶችን ለማዘጋጀት ያገለግላል።",
    oneSentenceEn:
      "Drafts powers of attorney for property, vehicles, bank accounts, customs, tax filings, and inheritance.",
    sortOrder: 1,
  },
  {
    id: "rent",
    slug: "rent",
    titleAm: "የኪራይ ውል ስምምነቶች",
    titleEn: "Rent & Lease Agreements",
    oneSentenceAm:
      "የመኖሪያ ቤት፣ የንግድ ሱቅና መጋዘን ኪራይ እንዲሁም የኪራይ ውል ማፍረሻ ስምምነቶችን ያካትታል።",
    oneSentenceEn:
      "Covers residential house leases, commercial shop or warehouse rentals, and lease terminations.",
    sortOrder: 2,
  },
  {
    id: "corporate",
    slug: "corporate",
    titleAm: "የንግድና ቃለ-ጉባዔ ሰነዶች",
    titleEn: "Corporate & Minutes",
    oneSentenceAm:
      "የካፒታል ማሳደግ፣ አዲስ የሥራ ዘርፍ መጨመር ቃለ-ጉባዔዎችን እና የንግድ ፈቃድ መሰረዣ ማመልከቻዎችን ይዟል።",
    oneSentenceEn:
      "Provides meeting minutes for capital increases or new business sectors and trade license cancellations.",
    sortOrder: 3,
  },
  {
    id: "employment",
    slug: "employment",
    titleAm: "የቅጥር ውል ስምምነቶች",
    titleEn: "Employment Agreements",
    oneSentenceAm:
      "የሥራ መደብ፣ የሥራ ሰዓት፣ ደመወዝ፣ ፈቃድና የምስጢር ጥበቃ ግዴታዎችን የያዘ የቅጥር ውል ቅጽ ነው።",
    oneSentenceEn:
      "Structures job title, working hours, gross salary, annual leave, and confidentiality obligations.",
    sortOrder: 4,
  },
  {
    id: "sales-oath",
    slug: "sales-oath",
    titleAm: "የሽያጭና ማረጋገጫ ውሎች",
    titleEn: "Sales & Declarations",
    oneSentenceAm:
      "የንብረትና የተሽከርካሪ ሽያጭ ስምምነቶችን እና በሰነዶች ማረጋገጫ የሚቀርቡ የቃለ-መሃላ መግለጫዎችን ያካትታል።",
    oneSentenceEn:
      "Organizes movable/vehicle sales agreements and sworn declarations for document authentication.",
    sortOrder: 5,
  },
];

export const SEED_TEMPLATES: DocumentTemplate[] = [
  {
    id: "poa-property-digitalization",
    categoryId: "representation",
    titleAm: "የማይንቀሳቀስ ንብረትና ካርታ ዲጂታላይዜሽን የውክልና ሥልጣን",
    titleEn: "Property & Map Digitalization Power of Attorney",
    purposeAm: "ንብረትና ካርታ",
    purposeEn: "Property & Map",
    legalRefs: ["ፍ/ብ/ሕ ቁጥር 2199", "ፍ/ብ/ሕ ቁጥር 2203"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት

የውክልና ሥልጣን

እኔ ወካይ ፡- [ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [ክልል/ከተማ] ክፍለ ከተማ [ክ/ከተማ] ወረዳ [ወረዳ] የቤት ቁጥር [የቤት ቁጥር]
ለተወካይ ፡- [የተወካይ ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [የተወካይ አድራሻ]

በስሜ ተመዝግቦ የሚገኘውን የካርታ ቁጥር [የካርታ ቁጥር]፣ የቤት ቁጥር [የቤት ቁጥር] እና ስፋት [ስፋት] ካ.ሜ የሆነውን የማይንቀሳቀስ ንብረት በተመለከተ ካርታ ወደ ዲጂታል እንዲቀይሩ፣ ዲጂታል ካርታ እንዲያሰሩና እንዲረከቡ፣ ማመልከቻና ደብዳቤ እንዲጽፉና እንዲፈርሙ፣ የውሃ፣ የመብራት፣ የስልክና የኢንተርኔት ውል እንዲያድሱና ክፍያ እንዲከፍሉ፣ በክ/ከተማ፣ በቀበሌ፣ በማዘጋጃ ቤት፣ በመሬት አስተዳደርና በሚመለከታቸው መ/ቤቶች ቀርበው ጉዳይ እንዲያስፈጽሙ በፍ/ብ/ሕ/ቁጥር 2199 እና 2203 መሠረት የውክልና ሥልጣን ሰጥቻለሁ።

የወካይ ስምና ፊርማ ፡- ________________________`,
  },
  {
    id: "poa-vehicle-libre-transfer",
    categoryId: "representation",
    titleAm: "የተሽከርካሪ ሊብሬ፣ ኢንሹራንስና ስም ማዛወሪያ ውክልና",
    titleEn: "Vehicle Libre, Insurance & Transfer PoA",
    purposeAm: "ተሽከርካሪ",
    purposeEn: "Vehicle",
    legalRefs: ["ፍ/ብ/ሕ ቁጥር 2199", "ፍ/ብ/ሕ ቁጥር 2203"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የውክልና ሥልጣን

እኔ ወካይ ፡- [ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [አድራሻ]
ለተወካይ ፡- [የተወካይ ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [የተወካይ አድራሻ]

በስሜ የተመዘገበውን የሊብሬ/ባለቤትነት ደብተር ቁጥር [የሊብሬ ቁጥር]፣ የሰሌዳ ቁጥር [የሰሌዳ ቁጥር]፣ የተሽከርካሪ ዓይነት [ዓይነት]፣ የሞተር ቁጥር [የሞተር ቁጥር] እና የሻንሲ ቁጥር [የሻንሲ ቁጥር] የሆነውን ተሽከርካሪ በተመለከተ ከራይድ፣ ከፈረስ፣ ከሜትር ታክሲ ወይም ትራንስፖርት ድርጅት ጋር ውል እንዲዋዋሉ፣ የኢንሹራንስ ካሳ እንዲቀበሉና ፖሊሲ እንዲፈርሙ፣ ክሊራንስ እንዲያወጡ፣ በመንገድ ትራንስፖርት፣ በትራፊክ ጽ/ቤት፣ በፖሊስ ጣቢያና በሰነዶች ማረጋገጫ ቀርበው ስም እንዲያዞሩና እንዲያስፈጽሙ በፍ/ብ/ሕ/ቁጥር 2199 እና 2203 መሠረት የውክልና ሥልጣን ሰጥቻለሁ።

የወካይ ስምና ፊርማ ፡- ________________________`,
  },
  {
    id: "poa-bank-digital",
    categoryId: "representation",
    titleAm: "የባንክ ሂሳብና ዲጂታል ባንኪንግ ውክልና",
    titleEn: "Bank Account & Digital Banking PoA",
    purposeAm: "ባንክና ሂሳብ",
    purposeEn: "Banking",
    legalRefs: ["ፍ/ብ/ሕ ቁጥር 2199", "ፍ/ብ/ሕ ቁጥር 2203"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የውክልና ሥልጣን

እኔ ወካይ ፡- [ሙሉ ስም] አድራሻ፡- [አድራሻ]
ለተወካይ ፡- [የተወካይ ሙሉ ስም] አድራሻ፡- [የተወካይ አድራሻ]

በስሜ ያሉትን የባንክ ሂሳብ ቁጥሮች [የባንክ ስምና ሂሳብ ቁጥር] እንዲያንቀሳቅሱ፣ ማንኛውንም መጠን ገንዘብ ወጪና ገቢ እንዲያደርጉ፣ የሞባይል ባንኪንግ፣ የኢንተርኔት ባንኪንግና ዲጂታል ባንኪንግ አገልግሎቶችን እንዲጠቀሙ፣ የተጠቃሚ ስም (Username) እና የይለፍ ቃል (Password) እንዲረከቡ፣ የኤቲኤም ካርድ እንዲያመለክቱና PIN እንዲቀበሉ/እንዲቀይሩ፣ የባንክ መግለጫ (Bank Statement) እና የሂሳብ ቀሪ መግለጫ እንዲጠይቁና እንዲረከቡ ሙሉ ሥልጣን ሰጥቻለሁ።

የወካይ ስምና ፊርማ ፡- ________________________`,
  },
  {
    id: "poa-customs-tax",
    categoryId: "representation",
    titleAm: "የጉምሩክ፣ ሎጂስቲክስና የግብር ማጣሪያ ውክልና",
    titleEn: "Customs, Logistics & Tax Clearance PoA",
    purposeAm: "ጉምሩክና ግብር",
    purposeEn: "Customs & Tax",
    legalRefs: ["ፍ/ብ/ሕ ቁጥር 2199", "ፍ/ብ/ሕ ቁጥር 2203"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የውክልና ሥልጣን

እኔ ወካይ ፡- [ሙሉ ስም / ድርጅት] አድራሻ፡- [አድራሻ]
ለተወካይ ፡- [የተወካይ ሙሉ ስም / ድርጅት] አድራሻ፡- [የተወካይ አድራሻ]

ከውጭ ሀገር የሚገቡ እቃዎችን፣ ኮንቴነሮችን፣ ተሽከርካሪዎችንና ሰነዶችን በጉምሩክ ቅርንጫፍ፣ በደረቅ ወደብና በኢትዮጵያ ባህር ትራንስፖርትና ሎጂስቲክ አገልግሎት ድርጅት የጉምሩክ ፎርማሊቲ በማሟላት እንዲረከቡና እንዲያስፈጽሙ፣ እንዲሁም በገቢዎች ሚኒስቴር/ባለሥልጣንና በንግድ ቢሮ ቀርበው ወርሃዊ/ዓመታዊ ሽያጭ፣ ቫት (VAT)፣ የትርፍ ግብርና የደመወዝ ግብር እንዲያስታውቁ፣ ታክስ ክሊራንስ እንዲያወጡና የንግድ ፈቃድ እንዲያድሱ/እንዲያዘጉ ውክልና ሰጥቻለሁ።

የወካይ ስምና ፊርማ ፡- ________________________`,
  },
  {
    id: "poa-inheritance",
    categoryId: "representation",
    titleAm: "የውርስ ንብረት ማስተዳደሪያና ስም ማዛወሪያ ውክልና",
    titleEn: "Inheritance & Estate Transfer PoA",
    purposeAm: "ውርስ",
    purposeEn: "Inheritance",
    legalRefs: ["ፍ/ብ/ሕ ቁጥር 2199", "ፍ/ብ/ሕ ቁጥር 2203"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የውክልና ሥልጣን

እኛ ወካዮች ፡- [የወራሾች ስሞች] አድራሻ፡- [አድራሻ]
ለተወካይ ፡- [የተወካይ ሙሉ ስም] አድራሻ፡- [የተወካይ አድራሻ]

ከሟች [የሟች ስም] በውርስ ያገኘነውን የሚንቀሳቀስና የማይንቀሳቀስ ንብረትና የአክሲዮን ድርሻ በተመለከተ የሞት ምስክር ወረቀት፣ የፍርድ ቤት የወራሽነት ማረጋገጫና የይዞታ ሰነዶችን እንዲቀበሉ፣ የወራሽነት ድርሻ እንዲያሳውጁ፣ በመሬት አስተዳደር፣ በትራንስፖርት፣ በባንክና በሰነዶች ማረጋገጫ ስም እንዲያዞሩና ጉዳዩን እንዲያስፈጽሙ ውክልና ሰጥተናል።

የወካዮች ስምና ፊርማ ፡- ________________________`,
  },
  {
    id: "lease-residential",
    categoryId: "rent",
    titleAm: "የመኖሪያ ቤት ኪራይ ውል ስምምነት",
    titleEn: "Residential House Lease Agreement",
    purposeAm: "መኖሪያ ኪራይ",
    purposeEn: "Residential Lease",
    legalRefs: ["ፍ/ብ/ሕ ቁጥር 1731", "ፍ/ብ/ሕ ቁጥር 1889/1890"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የመኖሪያ ቤት ኪራይ ውል ስምምነት

አከራይ ፡- [የአከራይ ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [አድራሻ]
ተከራይ ፡- [የተከራይ ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [አድራሻ]

በ[ከተማ] ከተማ [ክ/ከተማ] ክፍለ ከተማ ወረዳ [ወረዳ] የቤት ቁጥር [የቤት ቁጥር] የካርታ/ይዞታ ቁጥር [ይዞታ መለያ ቁጥር] ስፋት [ስፋት] ካ.ሜ የሆነውን ለመኖሪያ የተፈቀደ ቤት ከ[መጀመሪያ ቀን] እስከ [ማብቂያ ቀን] ለ[የውል ጊዜ] በወር ብር [ወርሃዊ ኪራይ] (_________) ለማከራየትና የ[ወር ብዛት] ወር ቅድመ ክፍያ ብር [ቅድመ ክፍያ] ለመቀበል/ለመክፈል ተስማምተናል። ተከራይ የውሃና የመብራት ክፍያ በየወሩ ይከፍላሉ፤ ያለአከራይ ፈቃድ ለ3ኛ ወገን ማከራየት አይችሉም። ውሉ በፍ/ብ/ሕ/ቁጥር 1731 እና 1889/1890 መሠረት የጸና ነው።

የአከራይ ስምና ፊርማ ፡- ___________________    የተከራይ ስምና ፊርማ ፡- ___________________`,
  },
  {
    id: "lease-commercial-shop",
    categoryId: "rent",
    titleAm: "የንግድ ቤት / ሱቅ / መጋዘን ኪራይ ውል ስምምነት",
    titleEn: "Commercial Shop / Warehouse Lease Agreement",
    purposeAm: "ንግድ ኪራይ",
    purposeEn: "Commercial Lease",
    legalRefs: ["ፍ/ብ/ሕ ቁጥር 1731", "ፍ/ብ/ሕ ቁጥር 1889/1890"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የንግድ ቤት / ሱቅ ኪራይ ውል ስምምነት

አከራይ ፡- [የአከራይ ሙሉ ስም / ድርጅት] አድራሻ፡- [አድራሻ]
ተከራይ ፡- [የተከራይ ሙሉ ስም / ድርጅት] አድራሻ፡- [አድራሻ]

በ[ከተማ] [ክ/ከተማ] ወረዳ [ወረዳ] የካርታ ቁጥር [የካርታ ቁጥር] የሆነውን የሱቅ/ክፍል ቁጥር [የሱቅ ቁጥር] ለ[የንግድ ዓላማ] አገልግሎት ከ[መጀመሪያ ቀን] እስከ [ማብቂያ ቀን] ለ[ጊዜ] በወር ብር [ወርሃዊ ኪራይ] (_________) ለማከራየት ተስማምተናል። ተከራይ በራሳቸው ስም የንግድ ፈቃድ አውጥተው/አድሰው የንግድ ግብር፣ ቫት (VAT) / ተርን ኦቨር ታክስ (TOT)፣ የመብራት፣ የውሃና የጽዳት ክፍያዎችን ይከፍላሉ፤ ቤቱን ሲለቁ ከገቢዎች ክሊራንስ አቅርበው በተረከቡበት ሁኔታ ያስረክባሉ።

የአከራይ ስምና ፊርማ ፡- ___________________    የተከራይ ስምና ፊርማ ፡- ___________________`,
  },
  {
    id: "lease-termination",
    categoryId: "rent",
    titleAm: "የቤት ኪራይ ውል ማፍረስ ስምምነት ውል",
    titleEn: "Lease Termination Agreement",
    purposeAm: "ውል ማፍረስ",
    purposeEn: "Lease Termination",
    legalRefs: ["ፍ/ብ/ሕ ቁጥር 1815", "ፍ/ብ/ሕ ቁጥር 1819"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የቤት ኪራይ ውል ማፍረስ ስምምነት ውል

ውል አፍራሽ 1 (አከራይ) ፡- [የአከራይ ሙሉ ስም / ድርጅት] አድራሻ፡- [አድራሻ]
ውል አፍራሽ 2 (ተከራይ) ፡- [የተከራይ ሙሉ ስም / ድርጅት] አድራሻ፡- [አድራሻ]

በፍ/ብ/ሕ/ቁጥር 1815/1819 መሠረት በውል ቁጥር [የቀድሞ ውል ቁጥር] እና በቀን [የተዋዋሉበት ቀን] የተፈጸመውን የኪራይ ውል (የካርታ ቁጥር [የካርታ ቁጥር]፣ [አድራሻ]) በሁለቱም ወገኖች ስምምነት ማፍረሳችንን፣ የኪራይና የአገልግሎት ክፍያዎችን መጠናቀቃቸውንና ንብረቱን በተረከቡበት ሁኔታ ማስረከብ/መረከባችንን በፊርማችን እናረጋግጣለን።

የአከራይ ስምና ፊርማ ፡- ___________________    የተከራይ ስምና ፊርማ ፡- ___________________`,
  },
  {
    id: "minutes-capital-increase",
    categoryId: "corporate",
    titleAm: "የካፒታል ማሳደግ ቃለ-ጉባዔ",
    titleEn: "PLC Capital Increase Minutes",
    purposeAm: "ካፒታል ማሳደግ",
    purposeEn: "Capital Increase",
    legalRefs: ["የንግድ ሕግ"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `የ[የድርጅቱ ስም በአማርኛ] ኃ/የተ/የግ/ማህበር
[COMPANY NAME IN ENGLISH] PLC
ቃለ-ጉባዔ

የስብሰባው ቦታ ፡- [የስብሰባው ቦታ]    ቀን ፡- [ቀን] ዓ.ም    ሰዓት ፡- [ሰዓት]
አጀንዳ ፡- ካፒታል ማሳደግ

ተ.ቁ | ሙሉ ስም | የአክሲዮን መጠን | የአንድ አክሲዮን ዋጋ | ጠቅላላ ካፒታል በብር
1 | [የአባል ስም] | [አክሲዮን ብዛት] | [የአንድ ዋጋ] | [ጠቅላላ ድምር]

ውሳኔ ፡- የማህበሩ ጠቅላላ ካፒታል ከብር [የቀድሞ ካፒታል] ወደ ብር [አዲስ ካፒታል] እንዲያድግ አባላቱ በሙሉ ድምፅ ወስነዋል።

የሰብሳቢ ስምና ፊርማ ፡- ___________________    የፀሐፊ ስምና ፊርማ ፡- ___________________`,
  },
  {
    id: "minutes-new-sector",
    categoryId: "corporate",
    titleAm: "አዲስ የሥራ ዘርፍ መጨመርና መመስረቻ ጽሑፍ ማሻሻያ ቃለ-ጉባዔ",
    titleEn: "New Business Sector & MoA Amendment Minutes",
    purposeAm: "የሥራ ዘርፍ ማሻሻያ",
    purposeEn: "Sector Amendment",
    legalRefs: ["የንግድ ሕግ"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `የ[የድርጅቱ ስም] ኃ/የተ/የግ/ማህበር
ቃለ-ጉባዔ

የስብሰባው ቦታ ፡- የማህበሩ መ/ቤት    ቀን ፡- [ቀን] ዓ.ም    ሰዓት ፡- [ሰዓት]
አጀንዳዎች ፡- 1. አዲስ የሥራ ዘርፍ መጨመር  2. የመመስረቻ ጽሑፍ ማሻሻል  3. የውክልና ስልጣን መስጠት

ውሳኔ ፡- ማህበሩ [አዲስ የሥራ ዘርፍ ስም] የሥራ ዘርፍ ጨምሮ እንዲሰራ፣ የመመስረቻ ጽሑፍ እንዲሻሻልና የምዝገባ ሂደቱን እንዲያስፈጽሙ ለ[የተወካይ ስም] ውክልና እንዲሰጥ ተወስኗል።

የሰብሳቢ ስምና ፊርማ ፡- ___________________    የፀሐፊ ስምና ፊርማ ፡- ___________________`,
  },
  {
    id: "app-cancel-trade-license",
    categoryId: "corporate",
    titleAm: "የንግድ ፈቃድና ምዝገባ ማፍረሻ ማመልከቻ",
    titleEn: "Trade License & Registration Cancellation Application",
    purposeAm: "ንግድ ፈቃድ መሰረዝ",
    purposeEn: "License Cancellation",
    legalRefs: ["የንግድ ምዝገባና ፈቃድ አዋጅ"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- [ቀን] ዓ.ም

ጉዳዩ ፡- የንግድ ፈቃድና ምዝገባ እንዲሰረዝ (እንዲፈርስ) ስለመጠየቅ

እኔ [የአመልካች ሙሉ ስም] የ[የድርጅቱ ስም] [ኃላፊነት] ስሆን፣ ድርጅታችን በምዝገባ ቁጥር [የምዝገባ ቁጥር] እና በፈቃድ ቁጥር [የፈቃድ ቁጥር] ሲንቀሳቀስ የቆየ ቢሆንም በ[የመዝጊያ ምክንያት] የተነሳ ሥራውን ሙሉ በሙሉ ያቆምን በመሆኑ የንግድ ምዝገባና ፈቃዳችን እንዲሰረዝ እንጠይቃለን። የግብር ማጣሪያ (Tax Clearance) እና ዋናውን ፈቃድ አያይዘናል።

የአመልካች ስምና ፊርማ ፡- ________________________`,
  },
  {
    id: "employment-contract-standard",
    categoryId: "employment",
    titleAm: "የቅጥር ውል ስምምነት",
    titleEn: "Standard Employment Agreement",
    purposeAm: "ቅጥር ውል",
    purposeEn: "Employment",
    legalRefs: ["የአሰሪና ሠራተኛ አዋጅ"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- [ቀን] ዓ.ም
የቅጥር ውል ስምምነት

አሰሪ ፡- [የድርጅቱ ስም] [የኃላፊነት ስም] አድራሻ፡- [አድራሻ] ስልክ፡- [ስልክ ቁጥር]
ሠራተኛ ፡- [የሠራተኛ ሙሉ ስም] አድራሻ፡- [አድራሻ] ስልክ፡- [ስልክ ቁጥር]

የሥራ መደብ ፡- [የሥራ መደብ]    የሥራ ቦታ ፡- [የሥራ ቦታ]
የሥራ ሰዓት ፡- በሳምንት [ሰዓት] ሰዓት ([የቀናት ዝርዝር])
ደመወዝ ፡- ወርሃዊ ጠቅላላ ደመወዝ ብር [ደመወዝ] (የስራ ግብርና ጡረታ/ፕሮቪደንት በሕግ መሠረት ይቀነሳል)
የዓመት እረፍት ፈቃድ ፡- በሕጉ መሠረት የሚከፈልበት የ15 ቀን ፈቃድ
ምስጢር የመጠበቅ ግዴታ ፡- ሠራተኛው የድርጅቱን የንግድና የሂሳብ መረጃዎች ለ3ኛ ወገን አሳልፎ ላለመስጠት ተስማምቷል።

የአሰሪ ስምና ፊርማ ፡- ___________________    የሠራተኛ ስምና ፊርማ ፡- ___________________`,
  },
  {
    id: "sale-movable-vehicle",
    categoryId: "sales-oath",
    titleAm: "የተሽከርካሪ / ንብረት ሽያጭ ውል ስምምነት",
    titleEn: "Vehicle / Property Sale Agreement",
    purposeAm: "የሽያጭ ውል",
    purposeEn: "Sales Agreement",
    legalRefs: ["ፍ/ብ/ሕ"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሽያጭ ውል ስምምነት

ሻጭ ፡- [የሻጭ ሙሉ ስም] አድራሻ፡- [አድራሻ] ስልክ፡- [ስልክ]
ገዢ ፡- [የገዢ ሙሉ ስም] አድራሻ፡- [አድራሻ] ስልክ፡- [ስልክ]

እኔ ሻጭ በስሜ የተመዘገበውን [የንብረት/ተሽከርካሪ ዝርዝር፣ ሊብሬ/ካርታ ቁጥር፣ ሰሌዳ/ሻንሲ] በጠቅላላ ዋጋ ብር [የሽያጭ ዋጋ] (_________) ለገዢ ሸጬ ገንዘቡን በ[ባንክ/ጥሬ ገንዘብ] የተቀበልኩ ሲሆን የባለቤትነት ስም ዝውውር በሰነዶች ማረጋገጫና በሚመለከተው አካል ለማጽደቅ ተስማምተናል።

የሻጭ ስምና ፊርማ ፡- ___________________    የገዢ ስምና ፊርማ ፡- ___________________`,
  },
  {
    id: "sworn-declaration",
    categoryId: "sales-oath",
    titleAm: "የቃለ-መሃላ / ማረጋገጫ መግለጫ",
    titleEn: "Sworn Declaration / Statement",
    purposeAm: "ማረጋገጫ መግለጫ",
    purposeEn: "Declaration",
    legalRefs: ["የሰነዶች ማረጋገጫና ምዝገባ"],
    isApproved: true,
    downloadCount: 0,
    createdAt: "2026-01-01T00:00:00.000Z",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የማረጋገጫ መግለጫ

እኔ [ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [አድራሻ] ስልክ፡- [ስልክ]

ከዚህ በታች የተገለጸው ሐቅ እውነት መሆኑን በሰነዶች ማረጋገጫና ምዝገባ ፊት በፊርማዬ አረጋግጣለሁ ፡-
[የመግለጫው ዝርዝር ጽሑፍ]

የአረጋጋጭ ስምና ፊርማ ፡- ________________________`,
  },
];
