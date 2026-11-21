export type CategoryId =
  | "representation"
  | "rent"
  | "corporate"
  | "employment"
  | "sales-oath";

export interface DocumentTemplate {
  id: string;
  categoryId: CategoryId;
  subCategoryAm: string;
  subCategoryEn: string;
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
    titleEn: "Representation & Attorney (PoA)",
    count: 6,
    oneSentenceAm:
      "የንብረት፣ የተሽከርካሪ፣ የጠበቃ/ፍርድ ቤት፣ የባንክ፣ የግብርና የጉምሩክ ውክልና ሰነዶችን ለማዘጋጀት ያገለግላል።",
    oneSentenceEn:
      "Covers powers of attorney for legal/court representation, property, vehicles, bank accounts, tax, and customs.",
  },
  {
    id: "sales-oath",
    titleAm: "የሽያጭ፣ ስጦታና ማረጋገጫ ውሎች",
    titleEn: "Sales, Gifts & Declarations",
    count: 6,
    oneSentenceAm:
      "የመኪና ሽያጭ፣ የቤት/ንብረት ሽያጭ፣ የድርጅት አክሲዮን ሽያጭ፣ የስጦታ ውሎችን እና የባለቤትነት ማረጋገጫዎችን ያካትታል።",
    oneSentenceEn:
      "Organizes vehicle sales, house/property sales, company share transfers, deeds of gift, and sworn declarations.",
  },
  {
    id: "rent",
    titleAm: "የኪራይ ውል ስምምነቶች",
    titleEn: "Rent & Lease Agreements",
    count: 4,
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
    count: 3,
    oneSentenceAm:
      "የሥራ መደብ፣ የሥራ ሰዓት፣ ደመወዝ፣ ፈቃድና የምስጢር ጥበቃ ግዴታዎችን የያዘ የቅጥር ውል ቅጽ ነው።",
    oneSentenceEn:
      "Structures job duties, working hours, salary, annual leave, and confidentiality obligations.",
  },
];

export const TEMPLATES: DocumentTemplate[] = [
  // ================= 1. REPRESENTATION & ATTORNEY (POA) =================
  {
    id: "poa-attorney-court",
    categoryId: "representation",
    subCategoryAm: "የጠበቃና ፍርድ ቤት ውክልና",
    subCategoryEn: "Attorney & Court Representation",
    titleAm: "የጠበቃ ሙሉ የፍርድ ቤት ክርክር ውክልና ሥልጣን",
    titleEn: "Attorney Legal & Court Representation PoA",
    purposeAm: "ጠበቃና ፍርድ ቤት",
    purposeEn: "Legal / Court",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት

የጠበቃ የውክልና ሥልጣን

እኔ ወካይ ፡- [የወካይ ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [ክልል/ከተማ፣ ክ/ከተማ፣ ወረዳ፣ የቤት ቁጥር]
ለተወካይ ጠበቃ ፡- [የጠበቃው ሙሉ ስም] የጥብቅና ፈቃድ ቁጥር [የፈቃድ ቁጥር] አድራሻ፡- [አድራሻ]

በ[የፍርድ ቤቱ ስም] ፍርድ ቤት በመዝገብ ቁጥር [የመዝገብ ቁጥር] በእኔ እና በ[የተከሳሽ/ከሳሽ ስም] መካከል ስላለው የ[ፍትሐብሔር / ወንጀል / አስተዳደር] ክርክር በማንኛውም ደረጃ ፍርድ ቤት ቀርበው ክስ እንዲመሰርቱ፣ መልስና የመልስ መልስ እንዲያቀርቡ፣ ማስረጃ እንዲያሰሙ፣ ይግባኝ እንዲጠይቁ፣ ድርድርና እርቅ እንዲፈጽሙ እንዲሁም አፈጻጸም እንዲያስፈጽሙ በፍ/ብ/ሕ/ቁጥር 2199፣ 2203 እና በፍ/ብ/ሥ/ሥ/ሕ/ቁጥር 58 መሠረት ሙሉ የውክልና ሥልጣን ሰጥቻለሁ።

የወካይ ስምና ፊርማ ፡- ________________________`,
  },
  {
    id: "poa-general-family",
    categoryId: "representation",
    subCategoryAm: "ጠቅላላ እና የቤተሰብ ውክልና",
    subCategoryEn: "General & Family Representation",
    titleAm: "ጠቅላላ አስተዳደራዊና የቤተሰብ ጉዳዮች ውክልና",
    titleEn: "General Administrative & Family Affairs PoA",
    purposeAm: "ጠቅላላ ውክልና",
    purposeEn: "General PoA",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት

ጠቅላላ የውክልና ሥልጣን

እኔ ወካይ ፡- [ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [አድራሻ]
ለተወካይ ፡- [የተወካይ ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [አድራሻ]

ተወካዬ እንደ እኔ ሆነው በማንኛውም የመንግሥት መሥሪያ ቤት፣ በክፍለ ከተማ፣ በወረዳ፣ በኢሚግሬሽን፣ በትምህርትና ጤና ተቋማት በመቅረብ በስሜ ማመልከቻ እንዲያስገቡ፣ ማንኛውንም የምስክር ወረቀትና ማስረጃ እንዲያወጡ፣ አስፈላጊውን ክፍያ እንዲፈጽሙ እና ሰነዶችን እንዲረከቡ በፍ/ብ/ሕ/ቁጥር 2199 እና 2203 መሠረት ወክያለሁ።

የወካይ ስምና ፊርማ ፡- ________________________`,
  },
  {
    id: "poa-property-card",
    categoryId: "representation",
    subCategoryAm: "የንብረትና ቤት ውክልና",
    subCategoryEn: "Property & Real Estate PoA",
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
    subCategoryAm: "የተሽከርካሪ ውክልና",
    subCategoryEn: "Vehicle Representation",
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
    id: "poa-bank-finance",
    categoryId: "representation",
    subCategoryAm: "የባንክና ፋይናንስ ውክልና",
    subCategoryEn: "Banking & Finance PoA",
    titleAm: "የባንክ ሂሳብ ማንቀሳቀሻና ገንዘብ ማውጫ ውክልና",
    titleEn: "Bank Account Operation & Withdrawal PoA",
    purposeAm: "ባንክና ፋይናንስ",
    purposeEn: "Banking",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት

የባንክ ውክልና ሥልጣን

እኔ ወካይ ፡- [ሙሉ ስም] አድራሻ፡- [አድራሻ]
ለተወካይ ፡- [የተወካይ ሙሉ ስም] አድራሻ፡- [አድራሻ]

በ[የባንኩ ስም] ባንክ [ቅርንጫፍ] ቅርንጫፍ በሂሳብ ቁጥር [የባንክ ሂሳብ ቁጥር] በስሜ የሚገኘውን የቁጠባ/ተንቀሳቃሽ ሂሳብ በተመለከተ ገንዘብ እንዲያወጡ፣ እንዲያስገቡ፣ ቼክ እንዲፈርሙ፣ የሂሳብ መግለጫ (Bank Statement) እንዲወስዱ እና አስፈላጊውን የባንክ አገልግሎት እንዲያስፈጽሙ በፍ/ብ/ሕ/ቁጥር 2199 እና 2203 መሠረት የውክልና ሥልጣን ሰጥቻለሁ።

የወካይ ስምና ፊርማ ፡- ________________________`,
  },
  {
    id: "poa-tax-customs",
    categoryId: "representation",
    subCategoryAm: "የግብርና ጉምሩክ ውክልና",
    subCategoryEn: "Tax & Customs PoA",
    titleAm: "የገቢዎች ግብር ማጣሪያና ጉምሩክ ዕቃ ማስወጫ ውክልና",
    titleEn: "Tax Clearance & Customs Clearing PoA",
    purposeAm: "ግብርና ጉምሩክ",
    purposeEn: "Tax & Customs",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት

የግብርና ጉምሩክ ውክልና ሥልጣን

እኔ ወካይ ፡- [ሙሉ ስም / ድርጅት] የግብር ከፋይ መለያ ቁጥር (TIN)፡- [TIN ቁጥር]
ለተወካይ ፡- [የተወካይ ሙሉ ስም / ጉምሩክ አስተላላፊ] አድራሻ፡- [አድራሻ]

በኢትዮጵያ ገቢዎች ሚኒስቴር እና በጉምሩክ ኮሚሽን ቅርንጫፍ መሥሪያ ቤቶች በመቅረብ የግብር ማሳወቂያ (Tax Declaration) እንዲያቀርቡ፣ ግብር እንዲከፍሉ፣ ክሊራንስ (Tax Clearance) እንዲወስዱ እንዲሁም ከውጭ የሚገቡ ዕቃዎችን የጉምሩክ ፎርማሊቲ አሟልተው እንዲያስወጡ ወክያለሁ።

የወካይ ስምና ፊርማ ፡- ________________________`,
  },

  // ================= 2. SALES, GIFTS & DECLARATIONS =================
  {
    id: "sales-vehicle-car",
    categoryId: "sales-oath",
    subCategoryAm: "የተሽከርካሪ ሽያጭ",
    subCategoryEn: "Vehicle / Car Sales",
    titleAm: "የተሽከርካሪ (መኪና) ሽያጭ ውል ስምምነት",
    titleEn: "Motor Vehicle (Car) Sale Agreement",
    purposeAm: "የመኪና ሽያጭ",
    purposeEn: "Car Sale",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት

የተሽከርካሪ ሽያጭ ውል ስምምነት

ሻጭ ፡- [የሻጭ ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [ክ/ከተማ፣ ወረዳ፣ የቤት ቁጥር] ስልክ፡- [ስልክ]
ገዥ ፡- [የገዥ ሙሉ ስም] ዜግነት ኢትዮጵያዊ አድራሻ፡- [ክ/ከተማ፣ ወረዳ፣ የቤት ቁጥር] ስልክ፡- [ስልክ]

1. የተሽከርካሪው መለያ፡-
የተሽከርካሪው ዓይነት/ሞዴል፡- [ሞዴል] | የሰሌዳ ቁጥር፡- [ሰሌዳ]
የሻንሲ ቁጥር፡- [ሻንሲ] | የሞተር ቁጥር፡- [ሞተር] | የሊብሬ ቁጥር፡- [ሊብሬ]

2. የሽያጭ ዋጋና አከፋፈል፡-
ሻጭ ከላይ የተገለጸውን ተሽከርካሪ በጠቅላላ ብር [የገንዘብ መጠን] (በፊደል [በፊደል]) ለገዥ ለመሸጥ፣ ገዥም በዚሁ ዋጋ ለመግዛት ተስማምተዋል። ገንዘቡ በ[ባንክ ዝውውር / ቼክ] ተከፍሏል።

3. ዋስትናና ርክክብ፡-
ሻጭ ተሽከርካሪው ከማንኛውም የባንክ ዕዳ፣ እገዳ እና የሦስተኛ ወገን የይገባኛል ጥያቄ ነፃ መሆኑን በፍ/ብ/ሕ/ቁጥር 2266 እና ተከታዮቹ መሠረት ዋስትና ሰጥቷል።

የሻጭ ፊርማ ፡- ___________________    የገዥ ፊርማ ፡- ___________________
ምስክሮች ፡- 1. ___________________    2. ___________________`,
  },
  {
    id: "sales-house-property",
    categoryId: "sales-oath",
    subCategoryAm: "የቤትና ንብረት ሽያጭ",
    subCategoryEn: "House & Real Estate Sales",
    titleAm: "የመኖሪያ ቤት እና የማይንቀሳቀስ ንብረት ሽያጭ ውል",
    titleEn: "Residential House & Real Estate Sale Agreement",
    purposeAm: "የቤት ሽያጭ",
    purposeEn: "House Sale",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት

የመኖሪያ ቤት ሽያጭ ውል ስምምነት

ሻጭ ፡- [የሻጭ ሙሉ ስም] አድራሻ፡- [አድራሻ] የግብር ከፋይ መለያ (TIN)፡- [TIN]
ገዥ ፡- [የገዥ ሙሉ ስም] አድራሻ፡- [አድራሻ] የግብር ከፋይ መለያ (TIN)፡- [TIN]

1. የንብረቱ መግለጫ፡-
በ[ከተማ] ከተማ [ክ/ከተማ] ክፍለ ከተማ ወረዳ [ወረዳ] ውስጥ የሚገኝ፣ የይዞታ ማረጋገጫ ካርታ ቁጥር [የካርታ ቁጥር]፣ የቤት ቁጥር [የቤት ቁጥር] እና የቦታው ስፋት [ስፋት] ካሬ ሜትር የሆነ መኖሪያ ቤት።

2. የሽያጭ ዋጋ፡-
ንብረቱ በጠቅላላ ብር [የሽያጭ ዋጋ] (በፊደል [በፊደል]) ተሸጧል። ሻጭ ንብረቱ በዕዳ ያልተያዘ መሆኑን በማረጋገጥ ስም ወደ ገዥ እንዲዛወር ተስማምቷል።

የሻጭ ፊርማ ፡- ___________________    የገዥ ፊርማ ፡- ___________________
ምስክሮች ፡- 1. ___________________    2. ___________________`,
  },
  {
    id: "sales-company-shares",
    categoryId: "sales-oath",
    subCategoryAm: "የድርጅትና አክሲዮን ሽያጭ",
    subCategoryEn: "Company & Share Sales",
    titleAm: "የኃ/የተ/የግ/ማህበር ድርሻ (አክሲዮን) ሽያጭና ማዛወሪያ ውል",
    titleEn: "Company Share / Equity Sale & Transfer Agreement",
    purposeAm: "የድርጅት አክሲዮን ሽያጭ",
    purposeEn: "Company Share Sale",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት

የድርጅት አክሲዮን (ድርሻ) ሽያጭ ውል

ሻጭ ፡- [የሻጭ ሙሉ ስም] አድራሻ፡- [አድራሻ]
ገዥ ፡- [የገዥ ሙሉ ስም] አድራሻ፡- [አድራሻ]

በንግድ ምዝገባ ቁጥር [የንግድ ምዝገባ ቁጥር] በተመዘገበው [የድርጅቱ ስም] ኃ/የተ/የግ/ማህበር ውስጥ ሻጭ ያለውን [የአክሲዮን ብዛት] አክሲዮኖች (የድርጅቱን [መቶኛ]% ድርሻ) እያንዳንዱን በብር [የአንዱ ዋጋ] በጠቅላላው በብር [ጠቅላላ ዋጋ] ለገዥ ለመሸጥ፣ ገዥም ከነመብትና ግዴታው ለመግዛት በኢትዮጵያ የንግድ ሕግ መሠረት ተስማምተዋል።

የሻጭ ፊርማ ፡- ___________________    የገዥ ፊርማ ፡- ___________________`,
  },
  {
    id: "sales-business-assets",
    categoryId: "sales-oath",
    subCategoryAm: "የንግድ ድርጅት ዕቃዎች ሽያጭ",
    subCategoryEn: "Business Assets & Equipment Sale",
    titleAm: "የንግድ ድርጅት ቋሚ ዕቃዎችና ንብረት ሽያጭ ውል",
    titleEn: "Business Equipment & Inventory Sale Agreement",
    purposeAm: "የድርጅት ንብረት ሽያጭ",
    purposeEn: "Business Asset Sale",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም

የንግድ ድርጅት ንብረት ሽያጭ ውል ስምምነት

ሻጭ ፡- [የሻጭ ስም / ድርጅት] አድራሻ፡- [አድራሻ]
ገዥ ፡- [የገዥ ስም / ድርጅት] አድራሻ፡- [አድራሻ]

በ[ቦታ] የሚገኘውን የ[የንግድ ዓይነት] ድርጅት ቋሚ መገልገያ ዕቃዎችንና ያለውን የንግድ ዕቃ (Inventory) በዝርዝር ቆጠራ መሠረት በጠቅላላ ብር [ጠቅላላ ዋጋ] ሻጭ ለገዥ ሸጦ አስረክቧል። ከርክክቡ ቀን በፊት ለነበረው ማንኛውም ግብር፣ ኪራይና የሠራተኛ ዕዳ ሻጭ ኃላፊነት ይወስዳል።

የሻጭ ፊርማ ፡- ___________________    የገዥ ፊርማ ፡- ___________________`,
  },
  {
    id: "deed-of-gift",
    categoryId: "sales-oath",
    subCategoryAm: "የስጦታ ውል",
    subCategoryEn: "Deed of Gift",
    titleAm: "የንብረት ወይም የገንዘብ ስጦታ ውል ስምምነት",
    titleEn: "Property or Asset Deed of Gift",
    purposeAm: "የስጦታ ውል",
    purposeEn: "Deed of Gift",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት

የስጦታ ውል ስምምነት

ስጦታ ሰጪ ፡- [የሰጪ ሙሉ ስም] አድራሻ፡- [አድራሻ]
ስጦታ ተቀባይ ፡- [የተቀባይ ሙሉ ስም] አድራሻ፡- [አድራሻ]

ስጦታ ሰጪ በፍ/ብ/ሕ/ቁጥር 2427 እና ተከታዮቹ መሠረት በስማቸው ተመዝግቦ የሚገኘውን [የንብረቱ ዓይነት / የካርታ ወይም የሰሌዳ ቁጥር] ያለምንም ክፍያና ያለምንም ቅድመ ሁኔታ በነፃ ስጦታ ለስጦታ ተቀባይ ሰጥተዋል፤ ስጦታ ተቀባይም ስጦታውን በደስታ ተቀብለዋል።

የስጦታ ሰጪ ፊርማ ፡- ___________________    የስጦታ ተቀባይ ፊርማ ፡- ___________________`,
  },
  {
    id: "sworn-declaration-ownership",
    categoryId: "sales-oath",
    subCategoryAm: "ቃለ-መሃላና ማረጋገጫ",
    subCategoryEn: "Sworn Declarations",
    titleAm: "የነጠላነት / የባለቤትነት ማረጋገጫ ቃለ-መሃላ መግለጫ",
    titleEn: "Sworn Declaration of Marital Status / Ownership",
    purposeAm: "ቃለ-መሃላ መግለጫ",
    purposeEn: "Sworn Declaration",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት

የቃለ-መሃላ መግለጫ

እኔ አመልካች ፡- [ሙሉ ስም] ዕድሜ [ዕድሜ] ዜግነት ኢትዮጵያዊ አድራሻ፡- [አድራሻ]

ይህንን ቃለ-መሃላ የምፈጽመው በሕግ ፊት ቀርቤ ሐሰተኛ መግለጫ መስጠት በወንጀል እንደሚያስቀጣ እያወቅሁ ነው። እኔ ከዚህ ቀን በፊት [ጋብቻ ያልፈጸምኩ መሆኔን / ንብረቱ የግሌ ብቻ መሆኑን] በቃለ-መሃላ አረጋግጣለሁ።

የአመልካች ስምና ፊርማ ፡- ________________________`,
  },

  // ================= 3. RENT & LEASE AGREEMENTS =================
  {
    id: "lease-residential-house",
    categoryId: "rent",
    subCategoryAm: "የመኖሪያ ቤት ኪራይ",
    subCategoryEn: "Residential Leases",
    titleAm: "የመኖሪያ ቤት ኪራይ ውል ስምምነት",
    titleEn: "Residential House / Apartment Lease Agreement",
    purposeAm: "መኖሪያ ቤት ኪራይ",
    purposeEn: "Residential Lease",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የመኖሪያ ቤት ኪራይ ውል ስምምነት

አከራይ ፡- [የአከራይ ሙሉ ስም] አድራሻ፡- [አድራሻ] ስልክ፡- [ስልክ]
ተከራይ ፡- [የተከራይ ሙሉ ስም] አድራሻ፡- [አድራሻ] ስልክ፡- [ስልክ]

በ[ከተማ/ክ/ከተማ/ወረዳ] የሚገኘውን የቤት ቁጥር [የቤት ቁጥር] የሆነውን መኖሪያ ቤት ለመኖሪያ አገልግሎት ብቻ ከ[መጀመሪያ ቀን] እስከ [ማብቂያ ቀን] ለ[ጊዜ] በወር ብር [መጠን] (_________) ለማከራየት ተስማምተናል። ተከራይ የ[ወራት ብዛት] ወር ቅድሚያ ክፍያ ብር [ጠቅላላ] ከፍሏል።

የአከራይ ፊርማ ፡- ___________________    የተከራይ ፊርማ ፡- ___________________`,
  },
  {
    id: "lease-commercial-shop",
    categoryId: "rent",
    subCategoryAm: "የንግድ ቤትና ቢሮ ኪራይ",
    subCategoryEn: "Commercial & Office Leases",
    titleAm: "የንግድ ቤት / ሱቅ / ቢሮ ኪራይ ውል ስምምነት",
    titleEn: "Commercial Shop / Office Lease Agreement",
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
    id: "lease-warehouse-land",
    categoryId: "rent",
    subCategoryAm: "የመጋዘን ኪራይ",
    subCategoryEn: "Warehouse Rentals",
    titleAm: "የመጋዘን (Warehouse) ኪራይ ውል ስምምነት",
    titleEn: "Warehouse & Storage Facility Lease Agreement",
    purposeAm: "መጋዘን ኪራይ",
    purposeEn: "Warehouse Lease",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የመጋዘን ኪራይ ውል ስምምነት

አከራይ ፡- [የአከራይ ስም / ድርጅት] አድራሻ፡- [አድራሻ]
ተከራይ ፡- [የተከራይ ስም / ድርጅት] አድራሻ፡- [አድራሻ]

በ[ቦታ] የሚገኝ ስፋቱ [ስፋት ካ.ሜ] ካሬ ሜትር የሆነ መጋዘን ለዕቃ ማከማቻ አገልግሎት በወር ብር [መጠን] (ተ.እ.ታን ጨምሮ/ሳይጨምር) ከ[መጀመሪያ ቀን] እስከ [ማብቂያ ቀን] ተከራይቷል።

የአከራይ ፊርማ ፡- ___________________    የተከራይ ፊርማ ፡- ___________________`,
  },
  {
    id: "lease-termination",
    categoryId: "rent",
    subCategoryAm: "የኪራይ ውል ማፍረሻ",
    subCategoryEn: "Lease Termination",
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

  // ================= 4. CORPORATE & MINUTES =================
  {
    id: "minutes-capital-sector",
    categoryId: "corporate",
    subCategoryAm: "የአባላት ቃለ-ጉባዔ",
    subCategoryEn: "Member & Board Minutes",
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
    id: "minutes-manager-appointment",
    categoryId: "corporate",
    subCategoryAm: "የሥራ አስኪያጅ ሹመትና ሽረት",
    subCategoryEn: "Manager Appointment & Removal",
    titleAm: "ዋና ሥራ አስኪያጅ ለመሾም / ለመቀየር የተያዘ ቃለ-ጉባዔ",
    titleEn: "Minutes for Appointment / Change of General Manager",
    purposeAm: "ሥራ አስኪያጅ ሹመት",
    purposeEn: "Manager Change",
    bodyAm: `የ[የድርጅቱ ስም] ኃ/የተ/የግ/ማህበር
የአባላት አስቸኳይ ስብሰባ ቃለ-ጉባዔ

ቀን ፡- ____/____/20____ ዓ.ም    ቦታ ፡- [ቦታ]
አጀንዳ ፡- የድርጅቱን ዋና ሥራ አስኪያጅ ስለመሾም / ስለመቀየር

ውሳኔ ፡- አባላቱ ከዛሬ [ቀን] ጀምሮ አቶ/ወ/ሮ [የአዲሱ ሥራ አስኪያጅ ስም] የድርጅቱ ዋና ሥራ አስኪያጅ ሆነው እንዲያገለግሉና የድርጅቱን የባንክ ሂሳብ እንዲያንቀሳቅሱ በሙሉ ድምፅ ወስነዋል።

የሰብሳቢ ፊርማ ፡- ___________________    የፀሐፊ ፊርማ ፡- ___________________`,
  },
  {
    id: "corporate-mou-amendment",
    categoryId: "corporate",
    subCategoryAm: "የመመሥረቻ ጽሑፍ ማሻሻያ",
    subCategoryEn: "Memorandum Amendments",
    titleAm: "የኃ/የተ/የግ/ማህበር የመመሥረቻ ጽሑፍ ማሻሻያ ቃለ-ጉባዔ",
    titleEn: "LLC Memorandum of Association Amendment Minutes",
    purposeAm: "መመሥረቻ ጽሑፍ ማሻሻያ",
    purposeEn: "MoA Amendment",
    bodyAm: `የ[የድርጅቱ ስም] ኃ/የተ/የግ/ማህበር
የመመሥረቻ ጽሑፍ ማሻሻያ ቃለ-ጉባዔ

ቀን ፡- ____/____/20____ ዓ.ም
አጀንዳ ፡- የመመሥረቻ ጽሑፍ አንቀጽ [ቁጥር] ማሻሻል

ውሳኔ ፡- በ[ቀን] በሰነዶች ማረጋገጫና ምዝገባ አገልግሎት የጸደቀውን የድርጅቱን መመሥረቻ ጽሑፍ አንቀጽ [ቁጥር] በአዲሱ የአባላት ድርሻ / አድራሻ መሠረት ለማሻሻል በሙሉ ድምፅ ተወስኗል።

የአባላት ፊርማ ፡- 1. ___________________    2. ___________________`,
  },
  {
    id: "corporate-license-cancellation",
    categoryId: "corporate",
    subCategoryAm: "የንግድ ፈቃድ መሰረዣ",
    subCategoryEn: "License Cancellation",
    titleAm: "የንግድ ሥራ ፈቃድ መሰረዣ ማመልከቻ",
    titleEn: "Trade License Cancellation Request Letter",
    purposeAm: "ፈቃድ መሰረዣ",
    purposeEn: "License Cancellation",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
ለ[ከተማ/ክ/ከተማ] ንግድ ጽ/ቤት

ጉዳዩ፡- የንግድ ሥራ ፈቃድ እንዲሰረዝልን ስለመጠየቅ

በንግድ ምዝገባ ቁጥር [ቁጥር] እና የንግድ ፈቃድ ቁጥር [ቁጥር] በ[የሥራ ዘርፍ] ሥራ ላይ ተሰማርተን የቆየን ሲሆን ከ[ቀን] ጀምሮ ሥራውን ያቆምን በመሆኑ እና ከገቢዎች ሚኒስቴር የግብር ክሊራንስ ያቀረብን ስለሆነ የንግድ ፈቃዳችን እንዲሰረዝልን በአክብሮት እንጠይቃለን።

ከሰላምታ ጋር
ስምና ፊርማ ፡- ________________________`,
  },

  // ================= 5. EMPLOYMENT AGREEMENTS =================
  {
    id: "employment-contract",
    categoryId: "employment",
    subCategoryAm: "መደበኛ የቅጥር ውል",
    subCategoryEn: "Standard Employment",
    titleAm: "ላልተወሰነ ጊዜ የሚደረግ መደበኛ የቅጥር ውል ስምምነት",
    titleEn: "Indefinite Period Employment Agreement",
    purposeAm: "መደበኛ ቅጥር",
    purposeEn: "Indefinite Employment",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የቅጥር ውል ስምምነት

አሰሪ ፡- [የድርጅቱ ስም] አድራሻ፡- [አድራሻ] ስልክ፡- [ስልክ]
ሠራተኛ ፡- [ሙሉ ስም] አድራሻ፡- [አድራሻ] ስልክ፡- [ስልክ]

የሥራ መደብ ፡- [የሥራ መደብ]    የሥራ ቦታ ፡- [ቦታ]
የሥራ ሰዓት ፡- በሳምንት [ሰዓት] ሰዓት    ወርሃዊ ደመወዝ ፡- ብር [መጠን]
የሙከራ ጊዜ ፡- በአሠሪና ሠራተኛ አዋጅ ቁጥር 1156/2011 መሠረት የመጀመሪያዎቹ 60 የሥራ ቀናት የሙከራ ጊዜ ይሆናሉ።

የአሰሪ ፊርማ ፡- ___________________    የሠራተኛ ፊርማ ፡- ___________________`,
  },
  {
    id: "employment-fixed-term",
    categoryId: "employment",
    subCategoryAm: "ለተወሰነ ጊዜ / ፕሮጀክት ቅጥር",
    subCategoryEn: "Fixed-Term & Project",
    titleAm: "ለተወሰነ ጊዜ ወይም ለፕሮጀክት የሚደረግ የቅጥር ውል",
    titleEn: "Fixed-Term / Project Employment Contract",
    purposeAm: "የተወሰነ ጊዜ ቅጥር",
    purposeEn: "Fixed-Term Contract",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
ለተወሰነ ጊዜ የሚደረግ የቅጥር ውል ስምምነት

አሰሪ ፡- [የድርጅቱ ስም] አድራሻ፡- [አድራሻ]
ሠራተኛ ፡- [ሙሉ ስም] አድራሻ፡- [አድራሻ]

ሠራተኛው በ[የፕሮጀክቱ ስም] ፕሮጀክት ላይ በ[የሥራ መደብ] የሥራ መደብ ከ[መጀመሪያ ቀን] እስከ [ማብቂያ ቀን] ድረስ በወር ብር [መጠን] ደመወዝ ለመሥራት ተስማምተዋል።

የአሰሪ ፊርማ ፡- ___________________    የሠራተኛ ፊርማ ፡- ___________________`,
  },
  {
    id: "employment-nda",
    categoryId: "employment",
    subCategoryAm: "የምስጢር ጥበቃ ስምምነት (NDA)",
    subCategoryEn: "Confidentiality & NDA",
    titleAm: "የድርጅት ሚስጥር የመጠበቅ ግዴታ ስምምነት (NDA)",
    titleEn: "Employee Non-Disclosure & Confidentiality Agreement",
    purposeAm: "ሚስጥር ጥበቃ (NDA)",
    purposeEn: "Confidentiality NDA",
    bodyAm: `ቀን፡- ____/____/20____ ዓ.ም
የሚስጥር ጥበቃ ስምምነት

አሰሪ ፡- [የድርጅቱ ስም] አድራሻ፡- [አድራሻ]
ሠራተኛ / ተዋዋይ ፡- [ሙሉ ስም] አድራሻ፡- [አድራሻ]

ተዋዋይ ወገን በሥራ አጋጣሚ የሚያውቃቸውን የድርጅቱን የንግድ ሚስጥሮች፣ የደንበኞች መረጃ፣ ሶፍትዌርና የፋይናንስ ሰነዶች በሥራ ላይ እያለም ሆነ ከሥራ ከለቀቀ በኋላ ለሦስተኛ ወገን አሳልፎ ላለመስጠት ተስማምቷል።

የአሰሪ ፊርማ ፡- ___________________    የሠራተኛ ፊርማ ፡- ___________________`,
  },
];