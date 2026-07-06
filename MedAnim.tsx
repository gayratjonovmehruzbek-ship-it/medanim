import { useState, useEffect, useRef, useMemo } from "react";
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, ArrowLeft, Stethoscope, Heart, Droplet, Brain, Activity, Sun, Moon, Search, CheckCircle2, Lightbulb, Award, RefreshCw, Zap, AlertTriangle, BookOpen, ChevronDown, ChevronUp, Wind, BarChart3, Trophy, Sparkles, Volume2, VolumeX, User, Flame, Settings, Trash2, Check, Filter, Syringe, HeartPulse, ClipboardList, Gauge, Bug, Star, Bone, Eye, Bandage, Baby, Waves } from "lucide-react";

/* ------------------------- GLOBAL STYLES ------------------------- */

function GlobalStyles() {
  return (
    <style>{`
      @keyframes floatBlob { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(30px,-40px) scale(1.15);} 66%{transform:translate(-25px,25px) scale(0.92);} }
      @keyframes floatParticle { 0%{transform:translateY(0) translateX(0); opacity:0;} 10%{opacity:0.55;} 90%{opacity:0.55;} 100%{transform:translateY(-620px) translateX(30px); opacity:0;} }
      @keyframes fadeSlideIn { from{opacity:0; transform:translateY(14px);} to{opacity:1; transform:translateY(0);} }
      .blob { position:absolute; border-radius:9999px; filter:blur(55px); animation:floatBlob 14s ease-in-out infinite; }
      .particle { position:absolute; border-radius:9999px; animation:floatParticle linear infinite; }
      .page-enter { animation: fadeSlideIn 0.45s ease both; }
      .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
      .card-hover:hover { transform: translateY(-4px) scale(1.01); box-shadow: 0 20px 40px -12px rgba(0,0,0,0.25); }
      @keyframes splashPulse { 0%,100%{ transform:scale(1); } 50%{ transform:scale(1.12); } }
      @keyframes splashFadeOut { from{ opacity:1; } to{ opacity:0; visibility:hidden; } }
      @keyframes heartbeatDraw { 0%{ stroke-dashoffset: 300; } 60%{ stroke-dashoffset: 0; } 100%{ stroke-dashoffset: 0; } }
      @keyframes splashTextIn { from{ opacity:0; transform:translateY(8px); } to{ opacity:1; transform:translateY(0); } }
      .splash-icon { animation: splashPulse 1.1s ease-in-out infinite; }
      .splash-line { stroke-dasharray: 300; stroke-dashoffset: 300; animation: heartbeatDraw 1.6s ease-out forwards; }
      .splash-text { animation: splashTextIn 0.6s ease 0.3s both; }
      .splash-exit { animation: splashFadeOut 0.5s ease forwards; }
      .btn-press { transition: transform 0.15s ease; }
      .btn-press:active { transform: scale(0.9); }
      .fade-key { animation: fadeSlideIn 0.35s ease both; }
      @keyframes ringPop { 0%{ transform: scale(0.85); opacity: 0.4; } 100%{ transform: scale(1); opacity: 1; } }
      .ring-pop { animation: ringPop 0.5s ease both; }
      @keyframes diagramPulse { 0%{ box-shadow: 0 0 0 0 rgba(59,130,246,0.35); } 100%{ box-shadow: 0 0 0 22px rgba(59,130,246,0); } }
      .diagram-tap { cursor: pointer; transition: transform 0.15s ease; }
      .diagram-tap:active { transform: scale(0.985); }
      .diagram-pulse { animation: diagramPulse 0.6s ease-out; }
      div[class*="overflow-hidden"][class*="rounded-2xl"] { transition: transform 0.15s ease; cursor: pointer; }
      div[class*="overflow-hidden"][class*="rounded-2xl"]:active { transform: scale(0.983); animation: diagramPulse 0.5s ease-out; }
    `}</style>
  );
}

/* ------------------------- LOGOTIP ------------------------- */

function Logo({ size = 40 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size}>
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="200" height="200" rx="46" fill="url(#logoGrad)" />
      <path d="M28 62 H58 L68 42 L80 78 L90 54 L98 62 H172" fill="none" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <circle cx="80" cy="78" r="4" fill="#fb923c" />
      <text x="100" y="150" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="72" fill="#ffffff" letterSpacing="-2">MA</text>
      <rect x="62" y="164" width="76" height="6" rx="3" fill="#fb923c" />
    </svg>
  );
}

function CamuBadge({ size = 64, showTitle = false }) {
  return (
    <div className="flex flex-col items-center flex-shrink-0" style={{ width: size }}>
      {showTitle && (
        <span className="font-extrabold text-blue-900 mb-1" style={{ fontSize: size * 0.2, letterSpacing: 1 }}>CAMU</span>
      )}
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <circle cx="100" cy="100" r="96" fill="#1e3a8a" />
        <circle cx="100" cy="100" r="90" fill="none" stroke="#93c5fd" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="#93c5fd" strokeWidth="2" />
        <path id="camuTopArc" d="M 24 106 A 76 76 0 0 1 176 106" fill="none" />
        <text fill="#ffffff" fontSize="11" fontWeight="700" letterSpacing="1.5">
          <textPath href="#camuTopArc" startOffset="50%" textAnchor="middle">CENTRAL ASIAN MEDICAL UNIVERSITY</textPath>
        </text>
        <g transform="translate(100,100)">
          <rect x="-24" y="6" width="48" height="32" rx="3" fill="none" stroke="#ffffff" strokeWidth="3.5" />
          <line x1="-24" y1="19" x2="24" y2="19" stroke="#ffffff" strokeWidth="2.5" />
          <polygon points="0,-30 -32,-13 0,4 32,-13" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinejoin="round" />
          <line x1="32" y1="-13" x2="32" y2="5" stroke="#ffffff" strokeWidth="3.5" />
          <circle cx="32" cy="7" r="3" fill="#ffffff" />
        </g>
        <line x1="55" y1="153" x2="80" y2="150" stroke="#93c5fd" strokeWidth="1.5" />
        <line x1="120" y1="150" x2="145" y2="153" stroke="#93c5fd" strokeWidth="1.5" />
        <text x="100" y="157" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="2">SINCE 2022</text>
      </svg>
    </div>
  );
}

/* ------------------------- FON ------------------------- */

const BLOB_COLORS = {
  rose: ["#fb7185", "#f472b6", "#fda4af"],
  purple: ["#c084fc", "#e879f9", "#d8b4fe"],
  blue: ["#38bdf8", "#818cf8", "#7dd3fc"],
  amber: ["#fbbf24", "#fb923c", "#fcd34d"],
  emerald: ["#34d399", "#6ee7b7", "#10b981"],
  cyan: ["#22d3ee", "#67e8f9", "#06b6d4"],
  indigo: ["#818cf8", "#a5b4fc", "#6366f1"],
  teal: ["#2dd4bf", "#5eead4", "#0d9488"],
  violet: ["#a78bfa", "#c4b5fd", "#8b5cf6"],
  orange: ["#fb923c", "#fdba74", "#f97316"],
  sky: ["#38bdf8", "#a78bfa", "#f0abfc"],
};

function AnimatedBackground({ theme = "sky", isDark }) {
  const colors = BLOB_COLORS[theme] || BLOB_COLORS.sky;
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        left: Math.round(Math.random() * 100),
        size: 3 + Math.round(Math.random() * 5),
        duration: 10 + Math.round(Math.random() * 10),
        delay: Math.round(Math.random() * 10),
        color: colors[i % colors.length],
      })),
    [theme]
  );

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="blob" style={{ width: 320, height: 320, top: -60, left: -60, background: colors[0], opacity: 0.35 }} />
      <div className="blob" style={{ width: 280, height: 280, bottom: -40, right: -40, background: colors[1], opacity: 0.3, animationDelay: "3s" }} />
      <div className="blob" style={{ width: 220, height: 220, top: "40%", left: "60%", background: colors[2], opacity: isDark ? 0.22 : 0.25, animationDelay: "6s" }} />
      {particles.map((p, i) => (
        <div key={i} className="particle" style={{ left: `${p.left}%`, bottom: -20, width: p.size, height: p.size, background: p.color, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }} />
      ))}
    </div>
  );
}

/* ------------------------- BOSQICHLAR MA'LUMOTLARI ------------------------- */

const ATHERO_STAGES = [
  { id: 0, title: "Normal arteriya", subtitle: "Sog'lom holat", desc: "Arteriya devori uch qatlamdan iborat: intima, media va adventitsiya. Qon erkin va bir tekis oqadi.", plaque: 0 },
  { id: 1, title: "Endotelial shikastlanish", subtitle: "Boshlang'ich bosqich", desc: "Yuqori qon bosimi, chekish yoki diabet endoteliyni shikastlaydi. LDL zarrachalari devor ichiga kira boshlaydi.", plaque: 10 },
  { id: 2, title: "LDL to'planishi va oksidlanishi", subtitle: "Yog' dog'i", desc: "LDL xolesterin intima qatlamida to'planib oksidlanadi. Yallig'lanish reaksiyasi boshlanadi.", plaque: 25 },
  { id: 3, title: "Makrofaglar va ko'pikli hujayralar", subtitle: "Yallig'lanish bosqichi", desc: "Monotsitlar makrofaglarga aylanadi va oksidlangan LDL ni yutib \"ko'pikli hujayralar\" hosil qiladi.", plaque: 40 },
  { id: 4, title: "Fibroz qopqoq hosil bo'lishi", subtitle: "Ateroma plyonkasi", desc: "Silliq mushak hujayralari plyonka ustida qattiq fibroz qopqoq hosil qiladi.", plaque: 60 },
  { id: 5, title: "Arteriya torayishi (stenoz)", subtitle: "Qon oqimi kamayadi", desc: "Plyonka kattalashib arteriyani toraytiradi, to'qimalarga kislorod yetishmasligi mumkin.", plaque: 80 },
  { id: 6, title: "Plyonka yorilishi va tromboz", subtitle: "Xavfli asorat", desc: "Fibroz qopqoq yorilib tromb hosil bo'lishi mumkin, arteriya to'liq bekilib qolishi mumkin.", plaque: 95 },
];

const CYCLE_PHASES = [
  { id: 0, title: "Hayz (Menstruatsiya)", subtitle: "1—5 kunlar", desc: "Bachadon shilliq qavati qon bilan tashqariga chiqadi. Estrogen va progesteron eng past nuqtada.", dayRange: [1, 5], hormone: { estrogen: 15, progesterone: 10, lh: 10, fsh: 25 }, ovaryState: "rest", uterusState: "shedding" },
  { id: 1, title: "Follikulyar faza", subtitle: "1—13 kunlar", desc: "FSH follikulalar o'sishini rag'batlantiradi. Follikulalar estrogen ishlab chiqara boshlaydi.", dayRange: [1, 13], hormone: { estrogen: 45, progesterone: 8, lh: 15, fsh: 35 }, ovaryState: "follicle-growing", uterusState: "rebuilding" },
  { id: 2, title: "Ovulyatsiya", subtitle: "~14-kun", desc: "LH keskin ko'tarilishi tuxum hujayrasining chiqishiga sabab bo'ladi — eng unumdor davr.", dayRange: [14, 14], hormone: { estrogen: 90, progesterone: 15, lh: 95, fsh: 40 }, ovaryState: "ovulating", uterusState: "ready" },
  { id: 3, title: "Lyuteal faza", subtitle: "15—28 kunlar", desc: "Sariq tanacha progesteron ishlab chiqaradi, bachadon shilliq qavati qalinlashadi.", dayRange: [15, 28], hormone: { estrogen: 55, progesterone: 85, lh: 20, fsh: 15 }, ovaryState: "corpus-luteum", uterusState: "thickened" },
  { id: 4, title: "Sikl yakuni", subtitle: "~28-kun", desc: "Urug'lantirish bo'lmasa, sariq tanacha yemiriladi va yangi sikl boshlanadi.", dayRange: [28, 28], hormone: { estrogen: 20, progesterone: 20, lh: 12, fsh: 20 }, ovaryState: "regressing", uterusState: "breaking-down" },
];

const STROKE_STAGES = [
  { id: 0, title: "Sog'lom miya qon aylanishi", subtitle: "Normal holat", desc: "Miya arteriyalari uzluksiz kislorod va glyukoza yetkazadi. Miya zaxira qilmaydi.", clotSize: 0, brainDamage: 0, stage: "normal" },
  { id: 1, title: "Tromb yoki emboliya hosil bo'lishi", subtitle: "Boshlang'ich bosqich", desc: "Uzilgan qon ivindisi miya arteriyasini to'sib qo'yishi mumkin.", clotSize: 30, brainDamage: 0, stage: "clot-forming" },
  { id: 2, title: "Arteriya to'liq bekiladi", subtitle: "O'tkir ishemiya", desc: "Tromb arteriyani to'liq berkitadi — \"ishemik insult\" boshlanadi.", clotSize: 80, brainDamage: 5, stage: "occluded" },
  { id: 3, title: "Yadro zonasi", subtitle: "Daqiqalar ichida", desc: "Markaziy hudud daqiqalar ichida qaytarib bo'lmas tarzda o'la boshlaydi.", clotSize: 80, brainDamage: 25, stage: "core-death" },
  { id: 4, title: "Penumbra — xavf ostidagi zona", subtitle: "Qutqarish mumkin bo'lgan davr", desc: "Qisman qon ta'minoti saqlangan hujayralar tezkor yordam bo'lmasa nobud bo'ladi.", clotSize: 80, brainDamage: 45, stage: "penumbra" },
  { id: 5, title: "Davolash: tromb eritish", subtitle: "\"Oltin soat\" ichida", desc: "Tromblitik dori yoki trombektomiya bilan qon oqimi tiklanadi.", clotSize: 15, brainDamage: 45, stage: "treatment" },
  { id: 6, title: "Oqibat: to'qima nekrozi", subtitle: "Kech murojaat", desc: "Kech yordamda keng hudud shikastlanib nevrologik asoratlarga olib keladi.", clotSize: 5, brainDamage: 70, stage: "necrosis" },
];

const DIABETES_STAGES = [
  { id: 0, title: "Normal glyukoza tartibga solinishi", subtitle: "Sog'lom holat", desc: "Pankreas insulin ishlab chiqaradi, u glyukozaning hujayraga kirishiga \"kalit\" bo'ladi.", glucose: 30, insulin: 30, receptorWorks: true, betaCells: 100 },
  { id: 1, title: "Insulin rezistentligi", subtitle: "Boshlang'ich bosqich", desc: "Hujayra retseptorlari insulinga kam sezgir bo'lib qoladi.", glucose: 55, insulin: 45, receptorWorks: false, betaCells: 100 },
  { id: 2, title: "Pankreasning kompensatsiyasi", subtitle: "Giperinsulinemiya", desc: "Pankreas ko'proq insulin ishlab chiqaradi, beta-hujayralar ortiqcha ishlaydi.", glucose: 45, insulin: 80, receptorWorks: false, betaCells: 90 },
  { id: 3, title: "Beta-hujayralarning charchashi", subtitle: "Progressiv bosqich", desc: "Beta-hujayralar shikastlanadi va sonini yo'qota boshlaydi.", glucose: 65, insulin: 55, receptorWorks: false, betaCells: 55 },
  { id: 4, title: "Surunkali giperglikemiya", subtitle: "2-tur qandli diabet", desc: "Qondagi glyukoza doimiy yuqori saqlanadi — diabet tashxisi qo'yiladi.", glucose: 90, insulin: 35, receptorWorks: false, betaCells: 40 },
  { id: 5, title: "Uzoq muddatli asoratlar", subtitle: "Angiopatiya va nevropatiya", desc: "Yuqori glyukoza qon tomirlari va nervlarni shikastlaydi.", glucose: 95, insulin: 25, receptorWorks: false, betaCells: 25 },
];

const SYNAPSE_STAGES = [
  { id: 0, title: "Tinch holat (resting potential)", subtitle: "Normal holat", desc: "Neyron membranasi taxminan -70 mV manfiy zaryadga ega. Ionlar nazorat ostida saqlanadi.", potential: -70, phase: "rest" },
  { id: 1, title: "Depolarizatsiya", subtitle: "Signal boshlanishi", desc: "Natriy kanallari ochiladi. Na+ ionlari hujayra ichiga oqib kiradi, potensial keskin ko'tariladi.", potential: 30, phase: "depolarize" },
  { id: 2, title: "Harakat potensiali", subtitle: "Nerv impulsi", desc: "Harakat potensiali akson bo'ylab domino effekti kabi tarqaladi — bu nerv impulsining o'zi.", potential: 40, phase: "peak" },
  { id: 3, title: "Repolarizatsiya", subtitle: "Tiklanish boshlanishi", desc: "Kaliy kanallari ochiladi, K+ chiqadi, potensial qaytadan manfiy tomonga qaytadi.", potential: -60, phase: "repolarize" },
  { id: 4, title: "Sinapsga yetib kelish", subtitle: "Akson uchi", desc: "Harakat potensiali presinaptik terminalga yetib keladi va kaltsiy kanallarini ochadi.", potential: -50, phase: "arrival" },
  { id: 5, title: "Neyrotransmitter chiqishi", subtitle: "Kimyoviy signal", desc: "Vezikulalar neyrotransmitterlarni sinaptik yoriqqa chiqaradi.", potential: -40, phase: "release" },
  { id: 6, title: "Retseptorga bog'lanish", subtitle: "Signal qabul qilinishi", desc: "Neyrotransmitterlar keyingi neyron retseptorlariga bog'lanib yangi signalni boshlaydi.", potential: -70, phase: "bind" },
];

const ALLERGY_STAGES = [
  { id: 0, title: "Birinchi ta'sir (sensitizatsiya)", subtitle: "Boshlang'ich uchrashuv", desc: "Allergen birinchi marta organizmga kiradi. Immun tizim uni xato ravishda \"xavfli\" deb belgilaydi.", phase: "first-exposure" },
  { id: 1, title: "IgE antikorlari ishlab chiqarilishi", subtitle: "Immun javob", desc: "B-limfotsitlar shu allergenga xos IgE antikorlarini ishlab chiqara boshlaydi.", phase: "ige-produced" },
  { id: 2, title: "Mast hujayralarga bog'lanish", subtitle: "Sensitizatsiya yakuni", desc: "IgE antikorlari mast hujayralar sirtidagi retseptorlarga bog'lanadi. Hali simptom yo'q.", phase: "bound" },
  { id: 3, title: "Qayta ta'sir (re-exposure)", subtitle: "Ikkinchi uchrashuv", desc: "Xuddi shu allergen yana kirganda, u mast hujayra sirtidagi IgE larga bog'lanadi.", phase: "reexposure" },
  { id: 4, title: "Degranulyatsiya", subtitle: "Hujayra portlashi", desc: "Mast hujayra granulalarini chiqaradi — gistamin ajraladi.", phase: "degranulate" },
  { id: 5, title: "Gistamin ta'siri", subtitle: "Simptomlar boshlanishi", desc: "Gistamin qon tomirlarini kengaytiradi — qichishish, shish, bronxospazm.", phase: "histamine" },
  { id: 6, title: "Og'ir holat: anafilaksiya", subtitle: "Shoshilinch tibbiy holat", desc: "Reaksiya butun tanaga tarqalib, hayotga xavf tug'diruvchi holat yuzaga kelishi mumkin.", phase: "anaphylaxis" },
];

const ASTHMA_STAGES = [
  { id: 0, title: "Normal bronxlar", subtitle: "Sog'lom holat", desc: "Nafas yo'llari keng va ochiq. Havo erkin kirib-chiqadi.", narrowing: 0, phase: "normal" },
  { id: 1, title: "Trigger ta'siri", subtitle: "Qo'zg'atuvchi omil", desc: "Allergen, sovuq havo yoki zo'riqish bronxlarni \"qo'zg'atadi\".", narrowing: 10, phase: "trigger" },
  { id: 2, title: "Yallig'lanish boshlanishi", subtitle: "Immun javob", desc: "Bronx devorlari yallig'lanadi va shishadi.", narrowing: 30, phase: "inflammation" },
  { id: 3, title: "Silliq mushaklar spazmi", subtitle: "Bronxospazm", desc: "Bronx atrofidagi mushaklar keskin qisqaradi, havo yo'li toraladi.", narrowing: 55, phase: "spasm" },
  { id: 4, title: "Shilliq ajralishi ortishi", subtitle: "Qo'shimcha to'siq", desc: "Ortiqcha shilliq havo yo'lini yanada bekitadi.", narrowing: 75, phase: "mucus" },
  { id: 5, title: "Nafas qisilishi (astma hurujida)", subtitle: "O'tkir holat", desc: "Torayish, spazm va shilliq birgalikda nafas qisilishiga olib keladi. Bronxdilatator dorilar yordam beradi.", narrowing: 85, phase: "attack" },
];

const KIDNEY_STAGES = [
  { id: 0, title: "Qonning buyrakka kirishi", subtitle: "Boshlang'ich bosqich", desc: "Buyrak arteriyasi orqali qon buyrakka kiradi.", segment: "artery" },
  { id: 1, title: "Glomerulyar filtratsiya", subtitle: "Nefron — glomerula", desc: "Qon glomeruladan o'tadi. Suv, tuzlar, glyukoza va chiqindilar Bowman kapsulasiga filtrlanadi.", segment: "glomerulus" },
  { id: 2, title: "Proksimal kanalcha reabsorbsiyasi", subtitle: "Foydali moddalarni qaytarish", desc: "Glyukoza, aminokislotalar, suv va ionlar qonga qaytadan so'riladi.", segment: "proximal" },
  { id: 3, title: "Genle qovuzlog'i", subtitle: "Konsentratsiya gradienti", desc: "Suv va tuzlar harakati buyrak medullasida tuz konsentratsiyasini yaratadi.", segment: "henle" },
  { id: 4, title: "Distal kanalcha", subtitle: "Nozik sozlash", desc: "Ion balansi va pH nozik sozlanadi, ortiqcha moddalar ajratiladi.", segment: "distal" },
  { id: 5, title: "Yig'uvchi naycha va peshob hosil bo'lishi", subtitle: "Yakuniy bosqich", desc: "ADH ta'sirida suv qaytarilishi sozlanadi, yakuniy peshob siydik pufagiga yo'naladi.", segment: "collecting" },
];

const VACCINE_STAGES = [
  { id: 0, title: "Vaksina yuborilishi", subtitle: "Boshlang'ich bosqich", desc: "Vaksina orqali antigen organizmga kiritiladi. Bu haqiqiy kasallikni keltirib chiqarmaydi.", phase: "inject" },
  { id: 1, title: "Antigenni aniqlash", subtitle: "Dastlabki immun javob", desc: "Antigen taqdim etuvchi hujayralar antigenni yutib, uni boshqa immun hujayralarga taqdim qiladi.", phase: "detect" },
  { id: 2, title: "T-hujayralarning faollashuvi", subtitle: "Hujayrali immunitet", desc: "Yordamchi T-hujayralar faollashadi va boshqa hujayralarni safarbar qiladi.", phase: "tcell" },
  { id: 3, title: "B-hujayralar va antikor ishlab chiqarish", subtitle: "Gumoral immunitet", desc: "B-hujayralar plazma hujayralariga aylanib maxsus antikorlar ishlab chiqaradi.", phase: "antibody" },
  { id: 4, title: "Xotira hujayralari hosil bo'lishi", subtitle: "Uzoq muddatli himoya", desc: "Xotira hujayralari yillar davomida saqlanib qoladi.", phase: "memory" },
  { id: 5, title: "Haqiqiy infeksiya bilan uchrashuv", subtitle: "Tezkor himoya javobi", desc: "Xotira hujayralari patogenni darhol tanib, tez javob boshlaydi.", phase: "reencounter" },
];

const CARDIAC_STAGES = [
  { id: 0, title: "Diastola (umumiy bo'shashish)", subtitle: "Bosqich 1", desc: "Yurak kamerlari bo'shashgan. Qon AV qopqoqlar orqali erkin oqib kiradi.", phase: "diastole" },
  { id: 1, title: "Bo'lmalar sistolasi", subtitle: "Bosqich 2", desc: "Bo'lmalar qisqaradi, qorinchalardagi qon hajmini oshiradi.", phase: "atrial-systole" },
  { id: 2, title: "Izovolyumetrik qisqarish", subtitle: "Bosqich 3", desc: "Qorinchalar qisqara boshlaydi, AV qopqoqlar yopiladi, semilunar qopqoqlar hali yopiq.", phase: "isovol-contract" },
  { id: 3, title: "Qorinchalar sistolasi (chiqarish)", subtitle: "Bosqich 4", desc: "Semilunar qopqoqlar ochiladi, qon aorta va o'pka arteriyasiga chiqariladi.", phase: "ejection" },
  { id: 4, title: "Izovolyumetrik bo'shashish", subtitle: "Bosqich 5", desc: "Qorinchalar bo'shashadi, semilunar qopqoqlar yopiladi.", phase: "isovol-relax" },
  { id: 5, title: "Passiv to'lish (sikl yakuni)", subtitle: "Bosqich 6", desc: "AV qopqoqlar qayta ochiladi, sikl diastoladan boshlanadi.", phase: "filling" },
];

const THYROID_STAGES = [
  { id: 0, title: "Normal ishlash (HPT o'qi)", subtitle: "Sog'lom holat", desc: "Gipotalamus TRH, gipofiz esa TSH gormonini ishlab chiqaradi. Bu qalqonsimon bezni T3/T4 gormonlarini ishlab chiqarishga undaydi. Teskari aloqa mexanizmi darajani muvozanatda ushlab turadi.", tsh: 50, t4: 50, glandSize: 1, metabolism: 50, cause: "normal" },
  { id: 1, title: "Gipertireoz boshlanishi", subtitle: "Ortiqcha faollik", desc: "Qalqonsimon bez me'yordan ortiq T3/T4 ishlab chiqara boshlaydi. Teskari aloqa orqali TSH pasayadi, ammo bez baribir faol ishlashda davom etadi. Metabolizm sezilarli tezlashadi.", tsh: 15, t4: 90, glandSize: 1.15, metabolism: 85, cause: "hyper" },
  { id: 2, title: "Greyvs kasalligi (autoimmun sabab)", subtitle: "Gipertireozning tipik sababi", desc: "Immun tizim TSH retseptorini \"taqlid qiluvchi\" maxsus antikorlar ishlab chiqaradi. Bu antikorlar bezni doimiy ravishda rag'batlantiradi, natijada bez kattalashadi (bo'qoq) va haddan tashqari faol ishlaydi.", tsh: 8, t4: 95, glandSize: 1.5, metabolism: 92, cause: "graves" },
  { id: 3, title: "Gipotireoz boshlanishi", subtitle: "Kamaygan faollik", desc: "Qalqonsimon bez yetarli miqdorda T3/T4 ishlab chiqarmaydi. Gipofiz buni kompensatsiya qilish uchun ko'proq TSH ishlab chiqaradi, ammo bez javob bera olmaydi. Metabolizm sezilarli sekinlashadi.", tsh: 85, t4: 20, glandSize: 0.9, metabolism: 22, cause: "hypo" },
  { id: 4, title: "Xashimoto tiroiditi (autoimmun sabab)", subtitle: "Gipotireozning tipik sababi", desc: "Immun tizim xato ravishda qalqonsimon bez to'qimasiga hujum qiladi va uni asta-sekin shikastlaydi. Vaqt o'tishi bilan bez funksiyasini yo'qotadi va hajmi kichrayishi mumkin.", tsh: 95, t4: 10, glandSize: 0.7, metabolism: 15, cause: "hashimoto" },
  { id: 5, title: "Simptomlarni taqqoslash", subtitle: "Gipertireoz vs Gipotireoz", desc: "Gipertireozda: yurak tez uradi, vazn kamayadi, asabiylashish, issiqqa sezgirlik. Gipotireozda: yurak sekin uradi, vazn ortadi, charchoq, sovuqqa sezgirlik. Ikkalasi ham qon tahlili (TSH, T4) orqali aniqlanadi.", tsh: 50, t4: 50, glandSize: 1, metabolism: 50, cause: "compare" },
];

const LIVER_STAGES = [
  { id: 0, title: "Normal jigar ishi", subtitle: "Sog'lom holat", desc: "Jigar qonni filtrlaydi, zaharli moddalarni zararsizlantiradi, safro ishlab chiqaradi va qon ivishi uchun zarur oqsillarni sintez qiladi.", phase: "normal", damage: 0, virusLevel: 0 },
  { id: 1, title: "Virusning kirishi", subtitle: "Yuqish bosqichi", desc: "Gepatit virusi (masalan, B yoki C turi) qon orqali jigarga yetib boradi va gepatotsitlar (jigar hujayralari) ichiga kirib oladi.", phase: "entry", damage: 5, virusLevel: 20 },
  { id: 2, title: "Virusning ko'payishi", subtitle: "Replikatsiya bosqichi", desc: "Virus gepatotsitlar ichida faol ko'payadi. Immun tizim infitsirlangan hujayralarni aniqlab, ularga qarshi kurash boshlaydi.", phase: "replicate", damage: 20, virusLevel: 70 },
  { id: 3, title: "O'tkir gepatit", subtitle: "Yallig'lanish bosqichi", desc: "Immun hujayralar infitsirlangan gepatotsitlarni yo'q qiladi, bu esa yallig'lanishga olib keladi. Jigar fermentlari (ALT/AST) qonda ko'tariladi va bilirubin to'planib sariqlik (teri sarg'ayishi) paydo bo'lishi mumkin.", phase: "acute", damage: 45, virusLevel: 60 },
  { id: 4, title: "Surunkali gepatit", subtitle: "Davomiy yallig'lanish", desc: "Agar immun tizim virusni to'liq yo'q qila olmasa, yallig'lanish oylab yoki yillab davom etadi. Doimiy shikastlanish fibroz (chandiq) to'qima hosil bo'lishiga olib keladi.", phase: "chronic", damage: 65, virusLevel: 40 },
  { id: 5, title: "Sirroz", subtitle: "Og'ir asorat", desc: "Uzoq muddatli fibroz jigar to'qimasini bosib boradi, sog'lom to'qima o'rnini chandiq to'qima egallaydi. Jigar funksiyasi jiddiy buziladi va bu asqotish hamda jigar yetishmovchiligiga olib kelishi mumkin.", phase: "cirrhosis", damage: 90, virusLevel: 25 },
];

const ARTHRITIS_STAGES = [
  { id: 0, title: "Normal bo'g'im ishi", subtitle: "Sog'lom holat", desc: "Suyak uchlari silliq tog'ay bilan qoplangan, sinovial suyuqlik bo'g'imni moylab, ishqalanishni deyarli yo'qqa chiqaradi. Harakat erkin va og'riqsiz.", cartilage: 100, phase: "normal" },
  { id: 1, title: "Tog'ay yeyilishi boshlanishi", subtitle: "Boshlang'ich bosqich", desc: "Yosh, ortiqcha vazn, doimiy zo'riqish yoki jarohat tufayli tog'ay to'qimasi asta-sekin yeyila boshlaydi.", cartilage: 75, phase: "early-wear" },
  { id: 2, title: "Tog'ay yupqalashishi", subtitle: "Progressiv bosqich", desc: "Tog'ay qatlami sezilarli yupqalashadi, bu bo'g'imning zarbani yutish qobiliyatini kamaytiradi.", cartilage: 45, phase: "thinning" },
  { id: 3, title: "Suyak-suyakka ishqalanishi", subtitle: "Og'riq boshlanishi", desc: "Tog'ay deyarli yo'qolgani sababli suyak uchlari to'g'ridan-to'g'ri bir-biriga ishqalana boshlaydi. Bu harakat vaqtida og'riq va noqulaylikka olib keladi.", cartilage: 15, phase: "friction" },
  { id: 4, title: "Osteofitlar (suyak o'siqlari) hosil bo'lishi", subtitle: "Kompensatsiya urinishi", desc: "Organizm bo'g'imni barqarorlashtirish uchun suyak chekkalarida qo'shimcha suyak o'siqlari (osteofitlar) hosil qiladi. Bu harakat doirasini yanada cheklashi mumkin.", cartilage: 10, phase: "osteophytes" },
  { id: 5, title: "Bo'g'im yallig'lanishi va qattiqlashishi", subtitle: "Surunkali holat", desc: "Sinovial parda yallig'lanadi, bo'g'im shishadi va qattiqlashadi. Harakat doirasi sezilarli kamayadi, surunkali og'riq va ertalabki qotib qolish kuzatiladi.", cartilage: 8, phase: "inflamed" },
];

const EYE_STAGES = [
  { id: 0, title: "Yorug'lik ko'zga kirishi", subtitle: "Boshlang'ich bosqich", desc: "Yorug'lik shox parda (kornea) orqali ko'zga kiradi. Qorachiq (pupilla) atrofidagi rangdor parda (iris) yorug'lik miqdorini nazorat qilib, qorachiqni kengaytiradi yoki toraytiradi.", pupilSize: 1, phase: "entry" },
  { id: 1, title: "Linzaning fokuslashi", subtitle: "Akkomodatsiya", desc: "Ko'z linzasi shaklini o'zgartirib (akkomodatsiya), yorug'lik nurlarini aniq bir nuqtaga to'playdi. Yaqin narsalarga qaraganda linza qavariqroq bo'ladi.", pupilSize: 0.9, phase: "focus" },
  { id: 2, title: "Tasvir retinaga tushishi", subtitle: "Proyeksiya", desc: "Fokuslangan yorug'lik ko'zning orqa devoridagi to'r parda (retina)ga tushadi. Bu yerda tasvir teskari va kichraytirilgan holda hosil bo'ladi.", pupilSize: 0.85, phase: "project" },
  { id: 3, title: "Fotoretseptorlar faollashuvi", subtitle: "Fototransduksiya", desc: "Retinadagi tayoqcha va kolbacha hujayralari yorug'likni elektr signaliga aylantiradi. Kolbachalar rangni, tayoqchalar esa past yorug'likda ko'rishni ta'minlaydi.", pupilSize: 0.85, phase: "photoreceptor" },
  { id: 4, title: "Signal ko'z nervi orqali uzatiladi", subtitle: "Nerv impulsi", desc: "Fotoretseptorlarda hosil bo'lgan elektr signali ko'z nervi (optik nerv) orqali miyaga yuboriladi.", pupilSize: 0.85, phase: "transmit" },
  { id: 5, title: "Miyada tasvir qayta ishlanadi", subtitle: "Vizual korteks", desc: "Miyaning ensa qismidagi vizual korteks signalni qayta ishlaydi, teskari tasvirni \"to'g'rilaydi\" va biz ko'rayotgan aniq, rangli tasvirni shakllantiradi.", pupilSize: 0.85, phase: "brain" },
];

const WOUND_STAGES = [
  { id: 0, title: "Jarohat va qon to'xtashi", subtitle: "Gemostaz bosqichi", desc: "Teri shikastlanganda qon tomirlari torayadi va trombotsitlar jarohat joyida to'planib, qon ivishini boshlaydi — bu qon ketishini to'xtatadi.", phase: "hemostasis" },
  { id: 1, title: "Yallig'lanish bosqichi", subtitle: "Tozalash jarayoni", desc: "Immun hujayralar (neytrofillar va makrofaglar) jarohat joyiga kelib, bakteriyalar va o'lik to'qimalarni tozalaydi. Bu bosqichda qizarish va shish kuzatiladi.", phase: "inflammation" },
  { id: 2, title: "Proliferatsiya bosqichi", subtitle: "Yangi to'qima o'sishi", desc: "Fibroblastlar kollagen ishlab chiqara boshlaydi, yangi qon tomirlari hosil bo'ladi (angiogenez) va granulyatsion to'qima jarohat bo'shlig'ini to'ldiradi.", phase: "proliferation" },
  { id: 3, title: "Epitelizatsiya", subtitle: "Teri qoplamasi tiklanishi", desc: "Teri hujayralari (keratinotsitlar) jarohat chekkalaridan markazga qarab harakatlanib, yangi teri qoplamasini hosil qiladi.", phase: "epithelialization" },
  { id: 4, title: "Remodellash", subtitle: "Qayta shakllanish", desc: "Kollagen tolalar oylar davomida qayta tashkil topib, mustahkamlanadi. Chandiq to'qimasi asta-sekin kuchayadi, lekin asl teridan biroz zaifroq bo'lib qoladi.", phase: "remodeling" },
  { id: 5, title: "Yakuniy chandiq hosil bo'lishi", subtitle: "Bitish yakuni", desc: "Jarohat to'liq bitadi va yetuk chandiq to'qimasi qoladi. Bu to'qima funksional, ammo asl terining elastikligi va qon tomir zichligiga to'liq ega emas.", phase: "scar" },
];

const PREGNANCY_STAGES = [
  { id: 0, title: "Urug'lantirish", subtitle: "1-hafta", desc: "Sperma hujayrasi tuxum hujayrasi bilan qo'shilib, zigota hosil qiladi — bu yangi hayotning boshlanishi. Zigota darhol bo'linishni boshlaydi.", phase: "fertilization", size: 1 },
  { id: 1, title: "Blastotsista va implantatsiya", subtitle: "1-2 hafta", desc: "Hujayralar bo'linishda davom etib, blastotsista hosil qiladi. Bu tuzilma bachadon devoriga implantatsiya qilinadi (o'rnashadi).", phase: "implantation", size: 1.2 },
  { id: 2, title: "Embrion davri boshlanishi", subtitle: "3-4 hafta", desc: "Asosiy organ tizimlarining dastlabki tuzilmalari (jumladan nerv naychasi) shakllana boshlaydi.", phase: "embryo-early", size: 1.6 },
  { id: 3, title: "Asosiy organlar shakllanishi", subtitle: "5-8 hafta", desc: "Yurak urishni boshlaydi, qo'l-oyoq kurtaklari paydo bo'ladi va asosiy organlar (organogenez) shakllanadi.", phase: "organogenesis", size: 2.2 },
  { id: 4, title: "Fetal davr — jadal o'sish", subtitle: "9-24 hafta", desc: "Homila (fetus) tezda o'sadi, harakatlana boshlaydi va yuz-tana xususiyatlari aniqroq shakllanadi.", phase: "fetal-growth", size: 3 },
  { id: 5, title: "Tug'ilishga tayyorgarlik", subtitle: "25-40 hafta", desc: "O'pkalar yetiladi, homila vazn oladi va tug'ilish uchun boshini pastga qaratib joylashadi.", phase: "birth-prep", size: 3.8 },
];

const MIGRAINE_STAGES = [
  { id: 0, title: "Normal miya qon aylanishi", subtitle: "Boshlang'ich holat", desc: "Miya qon tomirlari va nerv faolligi normal holatda. Og'riq signali mavjud emas.", phase: "normal" },
  { id: 1, title: "Trigger ta'siri", subtitle: "Qo'zg'atuvchi omil", desc: "Stress, uyqu yetishmasligi, ba'zi ovqat mahsulotlari yoki gormonal o'zgarishlar migren hurujini qo'zg'atishi mumkin.", phase: "trigger" },
  { id: 2, title: "Aura bosqichi", subtitle: "Kortikal tarqaluvchi depressiya", desc: "Ba'zi odamlarda miya po'stlog'i bo'ylab elektr faollik to'lqini sekin tarqaladi. Bu vaqtinchalik ko'rish buzilishlari (chaqnoq nurlar, ko'r nuqtalar) yoki boshqa sezgi o'zgarishlariga olib kelishi mumkin.", phase: "aura" },
  { id: 3, title: "Trigeminovaskulyar tizim faollashuvi", subtitle: "Nerv faollashuvi", desc: "Uch shoxli nerv (trigeminal nerv) faollashadi va CGRP kabi yallig'lanish moddalarini miya pardasidagi qon tomirlari atrofiga chiqaradi.", phase: "trigeminal" },
  { id: 4, title: "Qon tomirlarining kengayishi va yallig'lanishi", subtitle: "Neyrogen yallig'lanish", desc: "Miya pardalaridagi qon tomirlari kengayadi va yallig'lanadi. Bu zonkillovchi (pulsatsion) og'riqni keltirib chiqaradi.", phase: "inflammation" },
  { id: 5, title: "Og'riq signali va sezuvchanlik oshishi", subtitle: "Markaziy sensitizatsiya", desc: "Og'riq signali miyaga uzatiladi va nerv tizimi vaqt o'tishi bilan tobora sezgir bo'lib boradi. Bu yorug'lik va tovushga sezgirlik hamda uzoq davom etuvchi og'riqqa olib keladi.", phase: "pain" },
];

const TOPICS = [
  { key: "athero", title: "Ateroskleroz", subtitle: "7 bosqich • Yurak-qon tomir tizimi", icon: Heart, color: "rose" },
  { key: "cycle", title: "Hayz sikli", subtitle: "5 bosqich • Reproduktiv tizim", icon: Droplet, color: "purple" },
  { key: "stroke", title: "Insult", subtitle: "7 bosqich • Nerv tizimi", icon: Brain, color: "blue" },
  { key: "diabetes", title: "Qandli diabet", subtitle: "6 bosqich • Endokrin tizim", icon: Activity, color: "amber" },
  { key: "synapse", title: "Nerv impulsi (sinaps)", subtitle: "7 bosqich • Nerv tizimi", icon: Zap, color: "emerald" },
  { key: "allergy", title: "Allergik reaksiya", subtitle: "7 bosqich • Immunitet tizimi", icon: AlertTriangle, color: "cyan" },
  { key: "asthma", title: "Astma", subtitle: "6 bosqich • Nafas tizimi", icon: Wind, color: "indigo" },
  { key: "kidney", title: "Buyrak ishi (filtratsiya)", subtitle: "6 bosqich • Ayirish tizimi", icon: Filter, color: "teal" },
  { key: "vaccine", title: "Vaksinatsiya mexanizmi", subtitle: "6 bosqich • Immunitet tizimi", icon: Syringe, color: "violet" },
  { key: "cardiac", title: "Yurak sikli", subtitle: "6 bosqich • Yurak-qon tomir tizimi", icon: HeartPulse, color: "orange" },
  { key: "thyroid", title: "Qalqonsimon bez ishi", subtitle: "6 bosqich • Endokrin tizim", icon: Gauge, color: "fuchsia" },
  { key: "liver", title: "Gepatit / jigar ishi", subtitle: "6 bosqich • Ovqat hazm qilish tizimi", icon: Bug, color: "lime" },
  { key: "arthritis", title: "Osteoartrit (bo'g'im ishi)", subtitle: "6 bosqich • Tayanch-harakat tizimi", icon: Bone, color: "stone" },
  { key: "eye", title: "Ko'z ishi (ko'rish jarayoni)", subtitle: "6 bosqich • Sezgi organlari", icon: Eye, color: "yellow" },
  { key: "wound", title: "Yara bitishi (regeneratsiya)", subtitle: "6 bosqich • To'qima tiklanishi", icon: Bandage, color: "red" },
  { key: "pregnancy", title: "Homiladorlik bosqichlari", subtitle: "6 bosqich • Rivojlanish biologiyasi", icon: Baby, color: "pink" },
  { key: "migraine", title: "Migren mexanizmi", subtitle: "6 bosqich • Nerv tizimi", icon: Waves, color: "slate" },
];

const THEME = {
  rose: { accent: "bg-rose-500", accentHover: "hover:bg-rose-600", chipLight: "bg-rose-50 text-rose-500", chipDark: "bg-rose-500/20 text-rose-300", dotActive: "bg-rose-500", dotDone: "bg-rose-300", cardLight: "bg-rose-50/90 border border-rose-100", cardDark: "bg-rose-950/40 border border-rose-800/40" },
  purple: { accent: "bg-purple-500", accentHover: "hover:bg-purple-600", chipLight: "bg-purple-50 text-purple-500", chipDark: "bg-purple-500/20 text-purple-300", dotActive: "bg-purple-500", dotDone: "bg-purple-300", cardLight: "bg-purple-50/90 border border-purple-100", cardDark: "bg-purple-950/40 border border-purple-800/40" },
  blue: { accent: "bg-blue-500", accentHover: "hover:bg-blue-600", chipLight: "bg-blue-50 text-blue-500", chipDark: "bg-blue-500/20 text-blue-300", dotActive: "bg-blue-500", dotDone: "bg-blue-300", cardLight: "bg-blue-50/90 border border-blue-100", cardDark: "bg-blue-950/40 border border-blue-800/40" },
  amber: { accent: "bg-amber-500", accentHover: "hover:bg-amber-600", chipLight: "bg-amber-50 text-amber-600", chipDark: "bg-amber-500/20 text-amber-300", dotActive: "bg-amber-500", dotDone: "bg-amber-300", cardLight: "bg-amber-50/90 border border-amber-100", cardDark: "bg-amber-950/40 border border-amber-800/40" },
  emerald: { accent: "bg-emerald-500", accentHover: "hover:bg-emerald-600", chipLight: "bg-emerald-50 text-emerald-600", chipDark: "bg-emerald-500/20 text-emerald-300", dotActive: "bg-emerald-500", dotDone: "bg-emerald-300", cardLight: "bg-emerald-50/90 border border-emerald-100", cardDark: "bg-emerald-950/40 border border-emerald-800/40" },
  cyan: { accent: "bg-cyan-500", accentHover: "hover:bg-cyan-600", chipLight: "bg-cyan-50 text-cyan-600", chipDark: "bg-cyan-500/20 text-cyan-300", dotActive: "bg-cyan-500", dotDone: "bg-cyan-300", cardLight: "bg-cyan-50/90 border border-cyan-100", cardDark: "bg-cyan-950/40 border border-cyan-800/40" },
  indigo: { accent: "bg-indigo-500", accentHover: "hover:bg-indigo-600", chipLight: "bg-indigo-50 text-indigo-600", chipDark: "bg-indigo-500/20 text-indigo-300", dotActive: "bg-indigo-500", dotDone: "bg-indigo-300", cardLight: "bg-indigo-50/90 border border-indigo-100", cardDark: "bg-indigo-950/40 border border-indigo-800/40" },
  teal: { accent: "bg-teal-500", accentHover: "hover:bg-teal-600", chipLight: "bg-teal-50 text-teal-600", chipDark: "bg-teal-500/20 text-teal-300", dotActive: "bg-teal-500", dotDone: "bg-teal-300", cardLight: "bg-teal-50/90 border border-teal-100", cardDark: "bg-teal-950/40 border border-teal-800/40" },
  violet: { accent: "bg-violet-500", accentHover: "hover:bg-violet-600", chipLight: "bg-violet-50 text-violet-600", chipDark: "bg-violet-500/20 text-violet-300", dotActive: "bg-violet-500", dotDone: "bg-violet-300", cardLight: "bg-violet-50/90 border border-violet-100", cardDark: "bg-violet-950/40 border border-violet-800/40" },
  orange: { accent: "bg-orange-500", accentHover: "hover:bg-orange-600", chipLight: "bg-orange-50 text-orange-600", chipDark: "bg-orange-500/20 text-orange-300", dotActive: "bg-orange-500", dotDone: "bg-orange-300", cardLight: "bg-orange-50/90 border border-orange-100", cardDark: "bg-orange-950/40 border border-orange-800/40" },
  fuchsia: { accent: "bg-fuchsia-500", accentHover: "hover:bg-fuchsia-600", chipLight: "bg-fuchsia-50 text-fuchsia-600", chipDark: "bg-fuchsia-500/20 text-fuchsia-300", dotActive: "bg-fuchsia-500", dotDone: "bg-fuchsia-300", cardLight: "bg-fuchsia-50/90 border border-fuchsia-100", cardDark: "bg-fuchsia-950/40 border border-fuchsia-800/40" },
  lime: { accent: "bg-lime-500", accentHover: "hover:bg-lime-600", chipLight: "bg-lime-50 text-lime-600", chipDark: "bg-lime-500/20 text-lime-300", dotActive: "bg-lime-500", dotDone: "bg-lime-300", cardLight: "bg-lime-50/90 border border-lime-100", cardDark: "bg-lime-950/40 border border-lime-800/40" },
  stone: { accent: "bg-stone-500", accentHover: "hover:bg-stone-600", chipLight: "bg-stone-100 text-stone-600", chipDark: "bg-stone-500/20 text-stone-300", dotActive: "bg-stone-500", dotDone: "bg-stone-300", cardLight: "bg-stone-100/90 border border-stone-200", cardDark: "bg-stone-800/40 border border-stone-700/40" },
  yellow: { accent: "bg-yellow-500", accentHover: "hover:bg-yellow-600", chipLight: "bg-yellow-50 text-yellow-600", chipDark: "bg-yellow-500/20 text-yellow-300", dotActive: "bg-yellow-500", dotDone: "bg-yellow-300", cardLight: "bg-yellow-50/90 border border-yellow-100", cardDark: "bg-yellow-950/40 border border-yellow-800/40" },
  red: { accent: "bg-red-500", accentHover: "hover:bg-red-600", chipLight: "bg-red-50 text-red-600", chipDark: "bg-red-500/20 text-red-300", dotActive: "bg-red-500", dotDone: "bg-red-300", cardLight: "bg-red-50/90 border border-red-100", cardDark: "bg-red-950/40 border border-red-800/40" },
  pink: { accent: "bg-pink-500", accentHover: "hover:bg-pink-600", chipLight: "bg-pink-50 text-pink-600", chipDark: "bg-pink-500/20 text-pink-300", dotActive: "bg-pink-500", dotDone: "bg-pink-300", cardLight: "bg-pink-50/90 border border-pink-100", cardDark: "bg-pink-950/40 border border-pink-800/40" },
  slate: { accent: "bg-slate-500", accentHover: "hover:bg-slate-600", chipLight: "bg-slate-100 text-slate-600", chipDark: "bg-slate-500/20 text-slate-300", dotActive: "bg-slate-500", dotDone: "bg-slate-300", cardLight: "bg-slate-100/90 border border-slate-200", cardDark: "bg-slate-800/40 border border-slate-700/40" },
  sky: { accent: "bg-sky-500", accentHover: "hover:bg-sky-600", chipLight: "bg-sky-50 text-sky-500", chipDark: "bg-sky-500/20 text-sky-300", dotActive: "bg-sky-500", dotDone: "bg-sky-300", cardLight: "bg-sky-50/90 border border-sky-100", cardDark: "bg-sky-950/40 border border-sky-800/40" },
};

const STAGE_COUNTS = {
  athero: ATHERO_STAGES.length, cycle: CYCLE_PHASES.length, stroke: STROKE_STAGES.length,
  diabetes: DIABETES_STAGES.length, synapse: SYNAPSE_STAGES.length, allergy: ALLERGY_STAGES.length,
  asthma: ASTHMA_STAGES.length, kidney: KIDNEY_STAGES.length, vaccine: VACCINE_STAGES.length, cardiac: CARDIAC_STAGES.length,
  thyroid: THYROID_STAGES.length,
  liver: LIVER_STAGES.length,
  arthritis: ARTHRITIS_STAGES.length,
  eye: EYE_STAGES.length,
  wound: WOUND_STAGES.length,
  pregnancy: PREGNANCY_STAGES.length,
  migraine: MIGRAINE_STAGES.length,
};

const COLOR_HEX = {
  rose: "#f43f5e", purple: "#a855f7", blue: "#3b82f6", amber: "#f59e0b",
  emerald: "#10b981", cyan: "#06b6d4", indigo: "#6366f1", teal: "#0d9488",
  violet: "#8b5cf6", orange: "#f97316", fuchsia: "#d946ef", lime: "#84cc16",
  stone: "#78716c", yellow: "#eab308", red: "#ef4444", pink: "#ec4899",
  slate: "#64748b", sky: "#0ea5e9",
};

function ProgressRing({ pct, size = 56, stroke = 4, colorHex }) {
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (Math.min(pct, 100) / 100) * circumference;
  return (
    <svg width={size} height={size} className="absolute inset-0" style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(148,163,184,0.25)" strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={colorHex} strokeWidth={stroke} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.6s ease" }} />
    </svg>
  );
}

/* ------------------------- FAKTLAR ------------------------- */

const FACTS = {
  athero: ["Ateroskleroz jarayoni ko'pincha bolalikdanoq boshlanadi, lekin simptomlar faqat o'nlab yillardan keyin namoyon bo'ladi.", "Muntazam jismoniy mashqlar HDL (\"yaxshi\") xolesterinni oshirib, plyonka to'planishini sekinlashtirishi mumkin.", "Chekish endoteliyga zarar berishning eng kuchli omillaridan biri hisoblanadi."],
  cycle: ["O'rtacha sikl 21 dan 35 kungacha bo'lishi normal hisoblanadi.", "Ovulyatsiya paytida tana harorati odatda 0.3-0.5°C ga ko'tariladi.", "Bir ayolning umri davomida taxminan 400-500 marta ovulyatsiya bo'ladi."],
  stroke: ["Insult vaqtida har daqiqada taxminan 1.9 million neyron nobud bo'ladi.", "Insultning belgilarini FAST (Face, Arm, Speech, Time) tamoyili orqali eslab qolish mumkin.", "Insultlarning taxminan 87% ishemik turga tegishli."],
  diabetes: ["2-tur qandli diabet dunyodagi barcha diabet holatlarining taxminan 90-95% ni tashkil qiladi.", "Jismoniy faollik hujayralarning insulinga sezgirligini oshirishga yordam beradi.", "Erta bosqichlarda turmush tarzini o'zgartirish orqali kasallik oldini olish mumkin."],
  synapse: ["Nerv impulsi taxminan 1 dan 120 metr/soniyagacha tezlikda tarqalishi mumkin.", "Inson miyasida taxminan 86 milliard neyron mavjud.", "Dofamin, serotonin va GABA — bularning barchasi neyrotransmitterlar."],
  allergy: ["Antigistamin dorilar gistaminning retseptorlarga bog'lanishini blokirovka qiladi.", "Birinchi marta duch kelganda odatda hech qanday simptom sezilmaydi.", "Anafilaksiya daqiqalar ichida rivojlanishi mumkin, adrenalin in'yeksiyasi hayot saqlab qolishi mumkin."],
  asthma: ["Astma dunyoda 260 milliondan ortiq odamga ta'sir qiladi.", "Tezkor ta'sir qiluvchi ingalyatorlar bir necha daqiqada nafasni yengillashtiradi.", "Astma hurujlari ko'pincha sovuq havo yoki zo'riqish tufayli boshlanadi."],
  kidney: ["Har bir buyrakda taxminan 1 million nefron mavjud.", "Buyraklar har kuni taxminan 180 litr filtrat hosil qiladi, 99% i qonga qaytadi.", "ADH gormoni suvsizlanganda ko'proq ishlab chiqariladi."],
  vaccine: ["Xotira hujayralari ba'zi vaksinalar uchun butun umr saqlanadi.", "mRNA vaksinalar hujayralarga antigen ishlab chiqarish ko'rsatmasini yetkazadi.", "Populyatsiya immuniteti kasallik tarqalishini qiyinlashtiradi."],
  cardiac: ["Sog'lom kattalar yuragi tinch holatda daqiqasiga 60-100 marta uriladi.", "\"Lab-dab\" tovushlari qopqoqlarning yopilishidan hosil bo'ladi.", "Bo'lma zarbi qorinchalarning to'lishiga taxminan 10-20% qon qo'shadi."],
  thyroid: ["Qalqonsimon bez tanadagi deyarli har bir hujayraning metabolizmiga ta'sir qiladi.", "Yodning yetishmasligi dunyoning ba'zi mintaqalarida gipotireozning eng keng tarqalgan sababi hisoblanadi.", "Ayollarda tiroid kasalliklari erkaklarga qaraganda taxminan 5-8 baravar ko'proq uchraydi."],
  liver: ["Jigar — organizmdagi eng katta ichki a'zo bo'lib, o'rtacha 1.5 kilogrammga yaqin og'irlikka ega.", "Jigar o'ziga xos regeneratsiya (tiklanish) qobiliyatiga ega — hatto to'qimasining 70% olib tashlansa ham, u qayta o'sib chiqishi mumkin.", "Gepatit B va C uchun surunkali holatga o'tish ehtimoli har xil — gepatit C ko'pincha surunkali holatga o'tadi, gepatit B esa kattalarda kamroq."],
  arthritis: ["Osteoartrit dunyoda eng keng tarqalgan bo'g'im kasalligi hisoblanadi va ko'pincha yosh bilan bog'liq.", "Ortiqcha vazn tizza bo'g'imiga tushadigan yukni sezilarli darajada oshiradi, bu esa tog'ay yeyilishini tezlashtiradi.", "Muntazam, ammo mo''tadil jismoniy faollik bo'g'im atrofidagi mushaklarni mustahkamlab, yukni kamaytirishga yordam beradi."],
  eye: ["Inson ko'zi taxminan 10 million turli rang ottenkasini farqlay oladi.", "Retinada 120 milliondan ortiq tayoqcha va 6 milliondan ortiq kolbacha hujayralari mavjud.", "Miya haqiqatda teskari tasvirni qabul qiladi, lekin uni avtomatik ravishda \"to'g'irlab\" ko'rsatadi."],
  wound: ["Yara bitishi jarayoni odatda bir necha soatdan bir necha yilgacha (chandiq to'liq mustahkamlanishi uchun) davom etishi mumkin.", "Vitamin C kollagen sintezi uchun zarur, shuning uchun uning yetishmasligi yara bitishini sekinlashtiradi.", "Cheksiz tozalik va namlik saqlash zamonaviy yara parvarishida bitishni tezlashtiruvchi asosiy omillardan biri hisoblanadi."],
  pregnancy: ["Homiladorlik odatda oxirgi hayz sanasidan hisoblanganda taxminan 40 hafta (yoki 9 oy) davom etadi.", "Yurak — homilada shakllanadigan birinchi funksional organ bo'lib, taxminan 5-hafta atrofida ura boshlaydi.", "Fetus miya rivojlanishining katta qismi homiladorlikning oxirgi uch oyligida (uchinchi trimestrda) sodir bo'ladi."],
  migraine: ["Migren ayollarda erkaklarga qaraganda taxminan 2-3 baravar ko'proq uchraydi.", "Migrenning faqat taxminan 25-30% hollarida aura kuzatiladi — ko'pchilikda aura bo'lmaydi.", "CGRP (kalsitonin genga bog'liq peptid) migren mexanizmida asosiy rol o'ynaydi va zamonaviy dorilar aynan shu moddani nishonga oladi."],
};

/* ------------------------- VIKTORINALAR ------------------------- */

const QUIZZES = {
  athero: [
    { q: "Ateroskleroz qaysi qatlamdan boshlanadi?", options: ["Adventitsiya", "Intima (endoteliy)", "Media"], correct: 1 },
    { q: "\"Ko'pikli hujayralar\" nimadan hosil bo'ladi?", options: ["Eritrotsitlardan", "Oksidlangan LDL yutgan makrofaglardan", "Trombotsitlardan"], correct: 1 },
    { q: "Plyonka yorilishi nimaga olib kelishi mumkin?", options: ["Qon bosimi pasayishiga", "Tromboz va arteriya bekilishiga", "Endoteliy tiklanishiga"], correct: 1 },
  ],
  cycle: [
    { q: "Ovulyatsiya odatda qaysi kunda sodir bo'ladi?", options: ["1-kun", "~14-kun", "28-kun"], correct: 1 },
    { q: "Progesteron asosan qaysi fazada yuqori bo'ladi?", options: ["Follikulyar faza", "Lyuteal faza", "Hayz fazasi"], correct: 1 },
    { q: "LH gormonining keskin ko'tarilishi nimaga sabab bo'ladi?", options: ["Endometriy yemirilishiga", "Tuxum hujayrasi chiqishiga", "Follikula o'sishining to'xtashiga"], correct: 1 },
  ],
  stroke: [
    { q: "Ishemik insult asosan nima sababli yuzaga keladi?", options: ["Qon tomir yorilishi", "Arteriya trombi bilan bekilishi", "Yurak urishi tezlashishi"], correct: 1 },
    { q: "\"Penumbra\" zonasi nimani anglatadi?", options: ["To'liq o'lgan to'qima", "Qutqarib qolish mumkin bo'lgan xavf ostidagi zona", "Sog'lom to'qima"], correct: 1 },
    { q: "Insultda nima uchun vaqt juda muhim?", options: ["Chunki dorilar qimmat", "Chunki neyronlar tez nobud bo'ladi", "Chunki bemor uxlab qolishi mumkin"], correct: 1 },
  ],
  diabetes: [
    { q: "Insulin rezistentligi nima?", options: ["Insulin umuman ishlab chiqarilmasligi", "Hujayralarning insulinga kam sezgir bo'lishi", "Glyukozaning qonda kamayishi"], correct: 1 },
    { q: "2-tur diabetda beta-hujayralarga nima bo'ladi?", options: ["Ular kuchayadi", "Ular asta-sekin charchaydi/kamayadi", "Ular o'zgarmaydi"], correct: 1 },
    { q: "Surunkali giperglikemiya nimalarga zarar yetkazishi mumkin?", options: ["Faqat mushaklarga", "Qon tomirlar va nervlarga", "Faqat terisiga"], correct: 1 },
  ],
  synapse: [
    { q: "Depolarizatsiya vaqtida qaysi ion hujayra ichiga kiradi?", options: ["Kaliy (K+)", "Natriy (Na+)", "Xlor (Cl-)"], correct: 1 },
    { q: "Neyrotransmitterlar qayerdan chiqariladi?", options: ["Postsinaptik neyrondan", "Presinaptik terminaldagi vezikulalardan", "Miyelin qobig'idan"], correct: 1 },
    { q: "Repolarizatsiya vaqtida membrana potensiali qanday o'zgaradi?", options: ["Yanada musbat bo'ladi", "Qaytadan manfiy tomonga qaytadi", "O'zgarmaydi"], correct: 1 },
  ],
  allergy: [
    { q: "Sensitizatsiya bosqichida nima sodir bo'ladi?", options: ["Darhol og'ir reaksiya yuzaga keladi", "IgE antikorlari ishlab chiqariladi, simptom yo'q", "Allergen darhol zararsizlantiriladi"], correct: 1 },
    { q: "Degranulyatsiya vaqtida mast hujayra nima qiladi?", options: ["Bo'linadi", "Gistamin va boshqa moddalarni chiqaradi", "Uxlab qoladi"], correct: 1 },
    { q: "Anafilaksiya nima uchun xavfli?", options: ["Sekin rivojlanadi", "Daqiqalar ichida hayotga xavf tug'diradi", "Faqat terida bo'ladi"], correct: 1 },
  ],
  asthma: [
    { q: "Astma hurujida bronxlar nima uchun toraladi?", options: ["Faqat shilliq tufayli", "Yallig'lanish, mushak spazmi va shilliq birgalikda", "Faqat sovuq havo tufayli"], correct: 1 },
    { q: "Bronxospazm nima?", options: ["Bronx devorining yupqalashishi", "Bronx atrofidagi silliq mushaklarning keskin qisqarishi", "Bronxning kengayishi"], correct: 1 },
    { q: "Tezkor ta'sir qiluvchi ingalyator nima uchun ishlatiladi?", options: ["Uzoq muddatli oldini olish uchun", "Hurujda bronxlarni tez kengaytirish uchun", "Yallig'lanishni butunlay davolash uchun"], correct: 1 },
  ],
  kidney: [
    { q: "Glomerulyar filtratsiya vaqtida nima Bowman kapsulasiga o'tadi?", options: ["Faqat qon hujayralari", "Suv, tuzlar, glyukoza va chiqindilar", "Faqat yirik oqsillar"], correct: 1 },
    { q: "Proksimal kanalchada nima sodir bo'ladi?", options: ["Foydali moddalarning qonga qaytadan so'rilishi", "Peshobning siydik pufagiga tushishi", "Qonning filtrlanishi"], correct: 0 },
    { q: "ADH gormoni nimani tartibga soladi?", options: ["Qon bosimini to'g'ridan-to'g'ri", "Yig'uvchi naychada suvning qaytarilishini", "Glyukoza darajasini"], correct: 1 },
  ],
  vaccine: [
    { q: "Vaksinaning asosiy maqsadi nima?", options: ["Kasallikni darhol davolash", "Immun tizimga antigenni \"tanishtirish\"", "Bakteriyalarni to'g'ridan-to'g'ri o'ldirish"], correct: 1 },
    { q: "Xotira hujayralari nima uchun muhim?", options: ["Ular antigenlarni yo'q qiladi", "Ular kelajakda tezkor immun javobni ta'minlaydi", "Ular faqat bir marta ishlaydi"], correct: 1 },
    { q: "Ikkinchi marta xuddi shu patogen bilan uchrashganda nima bo'ladi?", options: ["Immun tizim sekinroq javob beradi", "Tezkor va kuchli antikor javobi boshlanadi", "Hech qanday farq bo'lmaydi"], correct: 1 },
  ],
  cardiac: [
    { q: "Izovolyumetrik qisqarish bosqichida qopqoqlar holati qanday?", options: ["Barcha qopqoqlar ochiq", "Barcha qopqoqlar yopiq", "Faqat semilunar qopqoqlar ochiq"], correct: 1 },
    { q: "Qon aorta va o'pka arteriyasiga qaysi bosqichda chiqariladi?", options: ["Diastola", "Bo'lmalar sistolasi", "Qorinchalar sistolasi (chiqarish)"], correct: 2 },
    { q: "Bo'lma zarbi (atrial kick) nima uchun xizmat qiladi?", options: ["Qonni aortaga chiqarish uchun", "Qorinchalarning to'lishini yakunlash uchun", "Qopqoqlarni yopish uchun"], correct: 1 },
  ],
  thyroid: [
    { q: "Gipertireozda TSH darajasi odatda qanday bo'ladi?", options: ["Yuqori", "Past", "O'zgarmaydi"], correct: 1 },
    { q: "Greyvs kasalligi qaysi mexanizm bilan bog'liq?", options: ["Yod yetishmasligi", "TSH retseptorini rag'batlantiruvchi antikorlar", "Bezning jarohatlanishi"], correct: 1 },
    { q: "Gipotireozda metabolizm qanday o'zgaradi?", options: ["Tezlashadi", "Sekinlashadi", "O'zgarmaydi"], correct: 1 },
  ],
  liver: [
    { q: "O'tkir gepatitda sariqlik nima sababdan yuzaga keladi?", options: ["Qon bosimi oshishi", "Bilirubinning to'planishi", "Glyukoza ko'tarilishi"], correct: 1 },
    { q: "Surunkali gepatit qanday rivojlanadi?", options: ["Virus darhol yo'qoladi", "Yallig'lanish uzoq davom etib fibrozga olib keladi", "Jigar darhol tiklanadi"], correct: 1 },
    { q: "Sirrozda jigar to'qimasiga nima bo'ladi?", options: ["Kattalashadi va sog'lomlashadi", "Sog'lom to'qima chandiq (fibroz) to'qima bilan almashadi", "O'zgarishsiz qoladi"], correct: 1 },
  ],
  arthritis: [
    { q: "Osteoartritda birinchi navbatda nima shikastlanadi?", options: ["Suyak", "Tog'ay", "Mushak"], correct: 1 },
    { q: "Osteofitlar nima uchun hosil bo'ladi?", options: ["Bezni rag'batlantirish uchun", "Bo'g'imni barqarorlashtirishga urinish natijasida", "Yallig'lanishni to'xtatish uchun"], correct: 1 },
    { q: "Suyak-suyakka ishqalanish nimaga olib keladi?", options: ["Harakat yengillashadi", "Og'riq va noqulaylik yuzaga keladi", "Bo'g'im mustahkamlanadi"], correct: 1 },
  ],
  eye: [
    { q: "Yorug'lik miqdorini nima nazorat qiladi?", options: ["Retina", "Iris (qorachiq atrofidagi parda)", "Optik nerv"], correct: 1 },
    { q: "Yorug'likni elektr signaliga kim aylantiradi?", options: ["Linza", "Fotoretseptorlar (tayoqcha/kolbacha)", "Kornea"], correct: 1 },
    { q: "Retinadagi tasvir qanday holatda bo'ladi?", options: ["To'g'ri va katta", "Teskari va kichraytirilgan", "Rangsiz"], correct: 1 },
  ],
  wound: [
    { q: "Gemostaz bosqichida nima sodir bo'ladi?", options: ["Yangi teri hosil bo'ladi", "Qon ivishi va qon to'xtashi", "Chandiq mustahkamlanadi"], correct: 1 },
    { q: "Granulyatsion to'qima qaysi bosqichda hosil bo'ladi?", options: ["Gemostaz", "Proliferatsiya", "Remodellash"], correct: 1 },
    { q: "Remodellash bosqichida nima sodir bo'ladi?", options: ["Qon ivishi boshlanadi", "Kollagen qayta tashkil topib mustahkamlanadi", "Yallig'lanish boshlanadi"], correct: 1 },
  ],
  pregnancy: [
    { q: "Zigota qachon hosil bo'ladi?", options: ["Implantatsiyada", "Urug'lantirishda", "Organogenezda"], correct: 1 },
    { q: "Asosiy organlar qaysi davrda shakllanadi?", options: ["1-2 hafta", "5-8 hafta (organogenez)", "35-40 hafta"], correct: 1 },
    { q: "Homiladorlikning oxirgi haftalarida nima sodir bo'ladi?", options: ["Urug'lantirish", "Implantatsiya", "O'pkalar yetiladi va tug'ilishga tayyorgarlik ko'riladi"], correct: 2 },
  ],
  migraine: [
    { q: "Aura bosqichida miyada nima sodir bo'ladi?", options: ["Qon bosimi keskin oshadi", "Kortikal tarqaluvchi depressiya to'lqini", "Yurak urishi tezlashadi"], correct: 1 },
    { q: "CGRP moddasi qaysi tizim tomonidan chiqariladi?", options: ["Trigeminovaskulyar tizim", "Qandli diabet tizimi", "Immunitet tizimi"], correct: 0 },
    { q: "Markaziy sensitizatsiya nimaga olib keladi?", options: ["Og'riqqa sezgirlikning kamayishiga", "Yorug'lik/tovushga sezgirlik va uzoq og'riqqa", "Migrenning darhol to'xtashiga"], correct: 1 },
  ],
};

/* ------------------------- LUG'AT ------------------------- */

const GLOSSARY = {
  athero: [
    { term: "Endoteliy", def: "Arteriya devorining eng ichki qatlami." },
    { term: "LDL xolesterin", def: "\"Yomon\" xolesterin — arteriya devorida to'planib plyonka hosil qiladi." },
    { term: "Makrofag", def: "Begona zarrachalarni yutuvchi immun hujayra." },
    { term: "Stenoz", def: "Qon tomirining torayishi." },
  ],
  cycle: [
    { term: "Endometriy", def: "Bachadonning ichki shilliq qavati." },
    { term: "Follikula", def: "Tuxum hujayrasini o'rab turgan hujayralar to'plami." },
    { term: "Sariq tanacha", def: "Ovulyatsiyadan keyin progesteron ishlab chiqaruvchi tuzilma." },
    { term: "LH", def: "Ovulyatsiyani boshlab beruvchi gormon." },
  ],
  stroke: [
    { term: "Ishemiya", def: "To'qimaga qon ta'minoti yetishmasligi." },
    { term: "Tromb", def: "Qon tomiri ichida hosil bo'lgan qon ivindisi." },
    { term: "Penumbra", def: "Qutqarib qolish mumkin bo'lgan xavf ostidagi zona." },
    { term: "Trombektomiya", def: "Trombni mexanik olib tashlash amaliyoti." },
  ],
  diabetes: [
    { term: "Insulin", def: "Glyukozaning hujayraga kirishiga yordam beruvchi gormon." },
    { term: "Insulin rezistentligi", def: "Hujayralarning insulinga kam sezgir bo'lishi." },
    { term: "Beta-hujayralar", def: "Pankreasdagi insulin ishlab chiqaruvchi hujayralar." },
    { term: "Giperglikemiya", def: "Qondagi glyukozaning yuqori bo'lishi." },
  ],
  synapse: [
    { term: "Neyron", def: "Nerv tizimining asosiy birligi." },
    { term: "Sinaps", def: "Ikki neyron orasidagi aloqa nuqtasi." },
    { term: "Neyrotransmitter", def: "Sinapsda signal uzatuvchi molekula." },
    { term: "Membrana potensiali", def: "Hujayra membranasi ichi va tashqarisi orasidagi zaryad farqi." },
  ],
  allergy: [
    { term: "Allergen", def: "Ortiqcha immun javobni keltirib chiqaruvchi zararsiz modda." },
    { term: "IgE", def: "Allergik reaksiyada ishtirok etuvchi antikor." },
    { term: "Mast hujayra", def: "Gistamin saqlovchi immun hujayra." },
    { term: "Gistamin", def: "Qichishish va shishga sabab bo'luvchi modda." },
  ],
  asthma: [
    { term: "Bronx", def: "O'pkaga havo olib boruvchi nafas yo'li." },
    { term: "Bronxospazm", def: "Bronx mushaklarining keskin qisqarishi." },
    { term: "Trigger", def: "Astma hurujini boshlaydigan omil." },
    { term: "Bronxdilatator", def: "Bronxlarni kengaytiruvchi dori." },
  ],
  kidney: [
    { term: "Nefron", def: "Buyrakning asosiy funksional birligi." },
    { term: "Glomerula", def: "Qonni filtrlaydigan kapillyarlar to'plami." },
    { term: "Reabsorbsiya", def: "Foydali moddalarning qonga qaytishi." },
    { term: "ADH", def: "Suvning qaytarilishini boshqaruvchi gormon." },
  ],
  vaccine: [
    { term: "Antigen", def: "Immun javobni qo'zg'atuvchi molekula." },
    { term: "Antikor", def: "Antigenga bog'lanadigan himoya oqsili." },
    { term: "Xotira hujayrasi", def: "Antigenni eslab qoluvchi uzoq umr ko'ruvchi hujayra." },
    { term: "Populyatsiya immuniteti", def: "Jamiyat immunitetga ega bo'lganda kasallik tarqalishi qiyinlashishi." },
  ],
  cardiac: [
    { term: "Sistola", def: "Yurak mushagining qisqarish bosqichi." },
    { term: "Diastola", def: "Yurak mushagining bo'shashish bosqichi." },
    { term: "AV qopqoq", def: "Bo'lma va qorincha orasidagi qopqoq." },
    { term: "Semilunar qopqoq", def: "Qorincha bilan arteriya orasidagi qopqoq." },
  ],
  thyroid: [
    { term: "TSH", def: "Gipofiz ishlab chiqaradigan, qalqonsimon bezni rag'batlantiruvchi gormon." },
    { term: "T3/T4", def: "Qalqonsimon bez ishlab chiqaradigan, metabolizmni boshqaruvchi gormonlar." },
    { term: "Gipertireoz", def: "Qalqonsimon bezning haddan tashqari faol ishlashi holati." },
    { term: "Gipotireoz", def: "Qalqonsimon bezning yetarlicha faol bo'lmasligi holati." },
  ],
  liver: [
    { term: "Gepatotsit", def: "Jigarning asosiy funksional hujayrasi." },
    { term: "Bilirubin", def: "Eritrotsitlar parchalanishidan hosil bo'ladigan, jigar tomonidan qayta ishlanadigan pigment; to'planib qolsa sariqlikka sabab bo'ladi." },
    { term: "Fibroz", def: "Shikastlangan to'qima o'rnida chandiq to'qima hosil bo'lishi." },
    { term: "Sirroz", def: "Jigarning keng fibroz tufayli qattiq va funksiyasiz holatga kelishi." },
  ],
  arthritis: [
    { term: "Tog'ay", def: "Suyak uchlarini qoplab, ishqalanishni kamaytiruvchi silliq to'qima." },
    { term: "Sinovial suyuqlik", def: "Bo'g'im ichini moylab turuvchi maxsus suyuqlik." },
    { term: "Osteofit", def: "Bo'g'im chekkasida hosil bo'ladigan qo'shimcha suyak o'simtasi." },
    { term: "Osteoartrit", def: "Tog'ayning asta-sekin yeyilishi bilan bog'liq bo'g'im kasalligi." },
  ],
  eye: [
    { term: "Kornea", def: "Ko'zning old tomonidagi shaffof shox parda." },
    { term: "Retina", def: "Ko'zning orqa devorida joylashgan, yorug'likni sezuvchi to'r parda." },
    { term: "Fotoretseptor", def: "Yorug'likni elektr signaliga aylantiruvchi retina hujayrasi (tayoqcha yoki kolbacha)." },
    { term: "Optik nerv", def: "Ko'zdan miyaga vizual signalni uzatuvchi nerv." },
  ],
  wound: [
    { term: "Trombotsit", def: "Qon ivishida ishtirok etuvchi qon hujayrasi." },
    { term: "Fibroblast", def: "Kollagen ishlab chiqaruvchi biriktiruvchi to'qima hujayrasi." },
    { term: "Angiogenez", def: "Yangi qon tomirlarining hosil bo'lishi jarayoni." },
    { term: "Granulyatsion to'qima", def: "Yara bitishida hosil bo'ladigan yangi, qizil rangli to'qima." },
  ],
  pregnancy: [
    { term: "Zigota", def: "Sperma va tuxum hujayrasi qo'shilishidan hosil bo'lgan birinchi hujayra." },
    { term: "Blastotsista", def: "Bo'linish jarayonidagi erta embrion tuzilmasi." },
    { term: "Organogenez", def: "Asosiy organlarning shakllanish jarayoni." },
    { term: "Platsenta", def: "Ona va homila orasida ozuqa va kislorod almashinuvini ta'minlovchi organ." },
  ],
  migraine: [
    { term: "Aura", def: "Migren boshlanishidan oldin yuzaga keladigan vaqtinchalik sezgi buzilishi (ko'pincha ko'rish sohasida)." },
    { term: "Trigeminal nerv", def: "Yuz va bosh sohasidan sezgi signallarini olib boruvchi nerv, migrenda muhim rol o'ynaydi." },
    { term: "CGRP", def: "Qon tomirlarini kengaytiruvchi va yallig'lanishni kuchaytiruvchi peptid, migren dorilarining nishoni." },
    { term: "Markaziy sensitizatsiya", def: "Nerv tizimining og'riqqa nisbatan haddan tashqari sezgir bo'lib qolishi holati." },
  ],
};

/* ------------------------- YORDAMCHI FUNKSIYALAR ------------------------- */

function glassCard(isDark) {
  return isDark ? "bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 shadow-xl" : "bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl";
}
function textMain(isDark) { return isDark ? "text-slate-100" : "text-slate-800"; }
function textSub(isDark) { return isDark ? "text-slate-400" : "text-slate-500"; }
function textFaint(isDark) { return isDark ? "text-slate-500" : "text-slate-400"; }

function speakText(text, onStatus) {
  try {
    if (!window.speechSynthesis) { if (onStatus) onStatus("unsupported"); return; }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.pitch = 1;
    utter.onstart = () => { if (onStatus) onStatus("speaking"); };
    utter.onend = () => { if (onStatus) onStatus("done"); };
    utter.onerror = () => { if (onStatus) onStatus("error"); };
    window.speechSynthesis.speak(utter);
    if (onStatus) onStatus("started");
  } catch (e) { if (onStatus) onStatus("unsupported"); }
}

function stopSpeaking() {
  try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) { /* e'tiborsiz qoldiriladi */ }
}

/* ------------------------- KICHIK KOMPONENTLAR ------------------------- */

function DarkToggle({ isDark, onToggle }) {
  return (
    <button onClick={onToggle} className={`btn-press p-2.5 rounded-full ${isDark ? "bg-slate-800/70 text-amber-300 border border-slate-700" : "bg-white/70 text-slate-600 border border-white/60"} backdrop-blur-xl shadow-md transition-colors`} title={isDark ? "Yorug' rejim" : "Qorong'i rejim"}>
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

function SpeakButton({ text, color, isDark }) {
  const [status, setStatus] = useState("idle");
  const handleClick = () => {
    if (status === "speaking" || status === "started") { stopSpeaking(); setStatus("idle"); return; }
    speakText(text, setStatus);
  };
  const isSpeaking = status === "speaking" || status === "started";
  return (
    <div className="flex flex-col items-center gap-1 mb-2">
      <button onClick={handleClick} className={`btn-press flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${isSpeaking ? `${THEME[color].accent} text-white` : glassCard(isDark) + " " + textMain(isDark)}`}>
        {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        {isSpeaking ? "To'xtatish" : "Ovozda tinglash"}
      </button>
      {status === "unsupported" && <p className="text-[10px] text-red-500">Bu qurilmada ovozli o'qish qo'llab-quvvatlanmaydi.</p>}
      {status === "error" && <p className="text-[10px] text-red-500">Ovozli o'qishda xatolik yuz berdi.</p>}
    </div>
  );
}

function OfflineBanner({ show }) {
  if (!show) return null;
  return (
    <div className="fixed top-0 inset-x-0 z-40 bg-amber-500 text-white text-xs font-semibold text-center py-2 px-3 fade-key shadow-md">
      📴 Oflaynsiz — animatsiyalar ishlayveradi, lekin AI tushuntirish internetni talab qiladi
    </div>
  );
}

function ScreenHeader({ onBack, isDark, onToggleDark }) {
  return (
    <div className="flex items-center justify-between mb-4 pt-2">
      <button onClick={onBack} className={`flex items-center gap-1.5 text-sm ${textSub(isDark)} hover:opacity-80`}><ArrowLeft className="w-4 h-4" /> Mavzular</button>
      <DarkToggle isDark={isDark} onToggle={onToggleDark} />
    </div>
  );
}

function StageControls({ index, total, onPrev, onNext, onToggle, onReset, playing, color, isDark }) {
  const t = THEME[color];
  return (
    <div className="flex items-center justify-center gap-3">
      <button onClick={onPrev} disabled={index === 0} className={`btn-press p-2.5 rounded-full ${glassCard(isDark)} ${textMain(isDark)} disabled:opacity-30 transition-colors`}><ChevronLeft className="w-5 h-5" /></button>
      <button onClick={onToggle} className={`btn-press p-3.5 rounded-full ${t.accent} ${t.accentHover} text-white shadow-lg transition-colors`}>{playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" fill="white" />}</button>
      <button onClick={onNext} disabled={index === total - 1} className={`btn-press p-2.5 rounded-full ${glassCard(isDark)} ${textMain(isDark)} disabled:opacity-30 transition-colors`}><ChevronRight className="w-5 h-5" /></button>
      <button onClick={onReset} className={`btn-press p-2.5 rounded-full ${glassCard(isDark)} ${textSub(isDark)} ml-2 transition-colors`} title="Boshidan"><RotateCcw className="w-4 h-4" /></button>
    </div>
  );
}

function ProgressDots({ count, index, onSelect, color }) {
  const t = THEME[color];
  return (
    <div className="flex justify-center gap-2 mb-6 flex-wrap px-2">
      {Array.from({ length: count }).map((_, i) => (
        <button key={i} onClick={() => onSelect(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? `w-8 ${t.dotActive}` : i < index ? `w-2.5 ${t.dotDone}` : "w-2.5 bg-slate-300/50"}`} />
      ))}
    </div>
  );
}

function FactBox({ topicKey, stageIndex, isDark, color }) {
  const facts = FACTS[topicKey] || [];
  if (facts.length === 0) return null;
  const fact = facts[stageIndex % facts.length];
  return (
    <div key={stageIndex} className={`fade-key rounded-2xl p-4 mb-4 flex gap-3 items-start ${glassCard(isDark)}`}>
      <div className={`${THEME[color].accent} p-2 rounded-lg flex-shrink-0`}><Lightbulb className="w-4 h-4 text-white" /></div>
      <div>
        <p className={`text-xs font-semibold mb-0.5 ${textMain(isDark)}`}>Bilasizmi?</p>
        <p className={`text-xs leading-relaxed ${textSub(isDark)}`}>{fact}</p>
      </div>
    </div>
  );
}

function GlossaryPanel({ topicKey, isDark, color }) {
  const [open, setOpen] = useState(false);
  const terms = GLOSSARY[topicKey] || [];
  if (terms.length === 0) return null;
  return (
    <div className={`rounded-2xl mb-4 overflow-hidden ${glassCard(isDark)}`}>
      <button onClick={() => setOpen((o) => !o)} className="btn-press w-full flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className={`${THEME[color].accent} p-1.5 rounded-lg`}><BookOpen className="w-3.5 h-3.5 text-white" /></div>
          <span className={`text-sm font-semibold ${textMain(isDark)}`}>Lug'at — asosiy atamalar</span>
        </div>
        {open ? <ChevronUp className={`w-4 h-4 ${textFaint(isDark)}`} /> : <ChevronDown className={`w-4 h-4 ${textFaint(isDark)}`} />}
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3">
          {terms.map((t) => (
            <div key={t.term} className="border-t border-slate-300/20 pt-3 first:border-t-0 first:pt-0">
              <p className={`text-xs font-bold mb-0.5 ${textMain(isDark)}`}>{t.term}</p>
              <p className={`text-xs leading-relaxed ${textSub(isDark)}`}>{t.def}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AIExplain({ topicTitle, stageTitle, stageDesc, color, isDark }) {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const fetchExplain = async () => {
    if (text) { setOpen((o) => !o); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 700,
          messages: [
            {
              role: "user",
              content: `Sen tibbiyot fanini talabalarga sodda va qiziqarli tarzda tushuntiruvchi murabbiysan. Mavzu: "${topicTitle}". Hozirgi bosqich: "${stageTitle}". Qisqa tavsif: "${stageDesc}". Shu bosqichni talaba uchun chuqurroq, sodda tilda, taxminan 2 ta qisqa paragrafda o'zbek tilida tushuntirib ber. Murakkab atamalarni izohla va imkon bo'lsa kundalik hayotdan o'xshatish keltir. Faqat tushuntirish matnini yoz, sarlavha yoki qo'shimcha izoh yozma.`,
            },
          ],
        }),
      });
      const data = await res.json();
      const combined = (data.content || []).map((b) => b.text || "").join("\n").trim();
      setText(combined || "Tushuntirish topilmadi, qaytadan urinib ko'ring.");
      setOpen(true);
    } catch (e) {
      setError("Tushuntirishni olishda xatolik yuz berdi. Internetni tekshirib qayta urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`rounded-2xl mb-4 overflow-hidden ${glassCard(isDark)}`}>
      <button onClick={fetchExplain} disabled={loading} className="w-full flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className={`${THEME[color].accent} p-1.5 rounded-lg`}>
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
          <span className={`text-sm font-semibold ${textMain(isDark)}`}>{loading ? "AI tushuntirmoqda..." : "AI orqali qo'shimcha tushuntirish"}</span>
        </div>
        {text ? (open ? <ChevronUp className={`w-4 h-4 ${textFaint(isDark)}`} /> : <ChevronDown className={`w-4 h-4 ${textFaint(isDark)}`} />) : null}
      </button>
      {open && text && (
        <div className="px-4 pb-4">
          <p className={`text-xs leading-relaxed whitespace-pre-line ${textSub(isDark)}`}>{text}</p>
        </div>
      )}
      {error && (
        <div className="px-4 pb-4">
          <p className="text-xs text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
}

/* ------------------------- VIKTORINA EKRANI ------------------------- */

function QuizScreen({ topicKey, color, isDark, onBack, onToggleDark, onFinish }) {
  const questions = QUIZZES[topicKey] || [];
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[qIndex];

  const submit = () => {
    if (selected === null) return;
    const correct = selected === current.correct;
    const newScore = correct ? score + 1 : score;
    setScore(newScore);
    if (qIndex < questions.length - 1) {
      setQIndex((i) => i + 1);
      setSelected(null);
    } else {
      setDone(true);
      onFinish(newScore, questions.length);
    }
  };

  const restart = () => { setQIndex(0); setSelected(null); setScore(0); setDone(false); };

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme={color} isDark={isDark} />
      <div className="max-w-2xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-5">
          <h1 className={`text-xl font-bold ${textMain(isDark)}`}>Bilimni tekshirish</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>{done ? "Natija" : `Savol ${qIndex + 1} / ${questions.length}`}</p>
        </div>

        {!done ? (
          <div className={`rounded-2xl p-5 ${glassCard(isDark)}`}>
            <h2 className={`text-base font-semibold mb-4 ${textMain(isDark)}`}>{current.q}</h2>
            <div className="space-y-2">
              {current.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors border ${
                    selected === i
                      ? `${THEME[color].accent} text-white border-transparent`
                      : isDark ? "bg-slate-700/40 border-slate-600 text-slate-200" : "bg-white/60 border-slate-200 text-slate-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={submit}
              disabled={selected === null}
              className={`btn-press w-full mt-5 ${THEME[color].accent} ${THEME[color].accentHover} text-white rounded-xl py-3 text-sm font-medium disabled:opacity-40 transition-colors`}
            >
              {qIndex < questions.length - 1 ? "Keyingisi" : "Yakunlash"}
            </button>
          </div>
        ) : (
          <div className={`rounded-2xl p-6 text-center ${glassCard(isDark)}`}>
            <Award className={`w-12 h-12 mx-auto mb-3 ${textMain(isDark)}`} />
            <p className={`text-2xl font-bold mb-1 ${textMain(isDark)}`}>{score} / {questions.length}</p>
            <p className={`text-sm mb-5 ${textSub(isDark)}`}>{score === questions.length ? "Ajoyib! Barcha savollarga to'g'ri javob berdingiz." : "Yaxshi urinish! Mavzuni qayta ko'rib chiqishingiz mumkin."}</p>
            <div className="flex gap-2 justify-center">
              <button onClick={restart} className={`btn-press flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm ${glassCard(isDark)} ${textMain(isDark)}`}><RefreshCw className="w-4 h-4" /> Qayta urinish</button>
              <button onClick={onBack} className={`btn-press ${THEME[color].accent} ${THEME[color].accentHover} text-white px-4 py-2.5 rounded-xl text-sm font-medium`}>Mavzularga qaytish</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------- ATEROSKLEROZ ------------------------- */

function AtherosclerosisScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= ATHERO_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 2800);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = ATHERO_STAGES[stage];
  const plaqueThickness = current.plaque;
  const wallThickness = 16;
  const lumenFull = 140 - wallThickness * 2;
  const narrowing = (plaqueThickness / 100) * (lumenFull * 0.75);
  const foamCellCount = stage >= 3 ? Math.min(6 + stage * 3, 24) : 0;
  const showRupture = stage === 6;
  const isLast = stage === ATHERO_STAGES.length - 1;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="rose" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Ateroskleroz rivojlanishi</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={ATHERO_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="rose" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 600 220" className="w-full h-56">
            <defs>
              <linearGradient id="bloodGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#dc2626" /><stop offset="100%" stopColor="#ef4444" /></linearGradient>
              <linearGradient id="plaqueGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fbbf24" /><stop offset="60%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#d97706" /></linearGradient>
            </defs>
            <rect x="20" y="40" width="560" height="140" rx="20" fill="#fecdd3" stroke="#fda4af" strokeWidth="2" />
            <rect x="20" y={40 + wallThickness / 2} width="560" height={140 - wallThickness} rx="16" fill="#fff1f2" />
            {plaqueThickness > 5 && <ellipse cx="300" cy={40 + wallThickness + 8} rx="180" ry={8 + narrowing * 0.5} fill="url(#plaqueGrad)" opacity="0.9" style={{ transition: "all 0.8s ease" }} />}
            {Array.from({ length: foamCellCount }).map((_, i) => {
              const cx = 160 + (i * 280) / Math.max(foamCellCount - 1, 1);
              const cy = 40 + wallThickness + 6 + (i % 3) * 6;
              return <circle key={i} cx={cx} cy={cy} r="3.5" fill="#fde68a" stroke="#d97706" strokeWidth="0.8" opacity={showRupture ? 0.4 : 0.9} style={{ transition: "opacity 0.6s ease" }} />;
            })}
            {stage >= 4 && <path d={`M 130 ${40 + wallThickness + 6 + narrowing * 0.55} Q 300 ${40 + wallThickness + 6 + narrowing * 0.95}, 470 ${40 + wallThickness + 6 + narrowing * 0.55}`} fill="none" stroke={showRupture ? "#dc2626" : "#78350f"} strokeWidth={showRupture ? "2" : "2.5"} strokeDasharray={showRupture ? "4,4" : "0"} opacity="0.8" style={{ transition: "all 0.6s ease" }} />}
            {showRupture && (<><circle cx="300" cy={40 + wallThickness + 6 + narrowing * 0.9} r="10" fill="#7f1d1d" opacity="0.85"><animate attributeName="r" values="8;13;8" dur="1.2s" repeatCount="indefinite" /></circle><text x="300" y="34" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="700">⚠ Tromb hosil bo'lmoqda</text></>)}
            {Array.from({ length: 8 }).map((_, i) => (<circle key={`blood-${i}`} r="4" fill="url(#bloodGrad)" opacity="0.85"><animateMotion dur={`${3.5 + (plaqueThickness / 100) * 2.5}s`} repeatCount="indefinite" begin={`${i * 0.45}s`} path={`M 30 ${100 + narrowing * 0.3} Q 300 ${100 + narrowing * 0.65}, 570 ${100 + narrowing * 0.3}`} /></circle>))}
            <text x="300" y="20" textAnchor="middle" fill="#64748b" fontSize="11">Arteriya devori kesimi</text>
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.rose.chipDark : THEME.rose.chipLight}`}>Bosqich {stage + 1} / {ATHERO_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="athero" stageIndex={stage} isDark={isDark} color="rose" />
        <AIExplain topicTitle="Ateroskleroz" stageTitle={current.title} stageDesc={current.desc} color="rose" isDark={isDark} />
        <GlossaryPanel topicKey="athero" isDark={isDark} color="rose" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="rose" isDark={isDark} />
        <StageControls index={stage} total={ATHERO_STAGES.length} color="rose" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(ATHERO_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("athero")} className={`btn-press w-full mt-4 ${THEME.rose.accent} ${THEME.rose.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- HAYZ SIKLI (REPRODUKTIV) ------------------------- */

function CycleScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [phase, setPhase] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(phase); }, [phase]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setPhase((p) => { if (p >= CYCLE_PHASES.length - 1) { setPlaying(false); return p; } return p + 1; }); }, 3200);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = CYCLE_PHASES[phase];
  const cycleDay = current.dayRange[0] === current.dayRange[1] ? `${current.dayRange[0]}-kun` : `${current.dayRange[0]}—${current.dayRange[1]}-kunlar`;
  const midDay = (current.dayRange[0] + current.dayRange[1]) / 2;
  const angle = (midDay / 28) * 360 - 90;
  const uterusThickness = current.uterusState === "shedding" ? 8 : current.uterusState === "rebuilding" ? 18 : current.uterusState === "ready" ? 26 : current.uterusState === "thickened" ? 32 : 14;
  const follicleSize = current.ovaryState === "rest" ? 6 : current.ovaryState === "follicle-growing" ? 14 : current.ovaryState === "ovulating" ? 20 : current.ovaryState === "corpus-luteum" ? 16 : 8;
  const follicleColor = current.ovaryState === "corpus-luteum" || current.ovaryState === "regressing" ? "#fbbf24" : "#f472b6";
  const isLast = phase === CYCLE_PHASES.length - 1;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="purple" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Hayz sikli fiziologiyasi</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={CYCLE_PHASES.length} index={phase} onSelect={(i) => { setPlaying(false); setPhase(i); }} color="purple" />

        <div className={`rounded-2xl p-6 mb-4 ${glassCard(isDark)}`}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <svg viewBox="0 0 400 240" className="w-full h-48">
                <circle cx="200" cy="110" r="70" fill="none" stroke="#e2e8f0" strokeWidth="14" />
                <circle cx="200" cy="110" r="70" fill="none" stroke="#a855f7" strokeWidth="14" strokeDasharray={`${(midDay / 28) * 439.8} 439.8`} strokeLinecap="round" transform="rotate(-90 200 110)" style={{ transition: "stroke-dasharray 0.8s ease" }} />
                <circle cx={200 + 70 * Math.cos((angle * Math.PI) / 180)} cy={110 + 70 * Math.sin((angle * Math.PI) / 180)} r="9" fill="#7e22ce" style={{ transition: "cx 0.8s ease, cy 0.8s ease" }} />
                <text x="200" y="105" textAnchor="middle" fontSize="22" fontWeight="700" fill="#581c87">{cycleDay}</text>
                <text x="200" y="125" textAnchor="middle" fontSize="11" fill="#94a3b8">28 kunlik sikl</text>
              </svg>
              <p className={`text-center text-xs -mt-2 ${textFaint(isDark)}`}>Sikldagi joylashuv</p>
            </div>
            <div>
              <svg viewBox="0 0 300 240" className="w-full h-48">
                <rect x="90" y="20" width="120" height="60" rx="10" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="2" />
                <rect x="98" y={72 - uterusThickness} width="104" height={uterusThickness} rx="4" fill="#f472b6" opacity="0.8" style={{ transition: "all 0.8s ease" }} />
                <text x="150" y="14" textAnchor="middle" fontSize="10" fill="#94a3b8">Bachadon shilliq qavati</text>
                <ellipse cx="150" cy="160" rx="55" ry="40" fill="#fef3c7" stroke="#fde68a" strokeWidth="2" />
                <circle cx="150" cy="160" r={follicleSize} fill={follicleColor} style={{ transition: "all 0.8s ease" }} />
                {current.ovaryState === "ovulating" && (<circle cx="150" cy="160" r={follicleSize + 8} fill="none" stroke="#f472b6" strokeWidth="2" opacity="0.6"><animate attributeName="r" values="20;32;20" dur="1.4s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.6;0;0.6" dur="1.4s" repeatCount="indefinite" /></circle>)}
                <text x="150" y="215" textAnchor="middle" fontSize="10" fill="#94a3b8">Tuxumdon</text>
              </svg>
              <p className={`text-center text-xs -mt-2 ${textFaint(isDark)}`}>{current.ovaryState === "ovulating" ? "Tuxum hujayrasi chiqmoqda" : "Follikula holati"}</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-300/20 grid grid-cols-4 gap-2">
            {[{ label: "Estrogen", val: current.hormone.estrogen, color: "bg-pink-400" }, { label: "Progesteron", val: current.hormone.progesterone, color: "bg-amber-400" }, { label: "LH", val: current.hormone.lh, color: "bg-purple-400" }, { label: "FSH", val: current.hormone.fsh, color: "bg-blue-400" }].map((h) => (
              <div key={h.label} className="text-center">
                <div className="h-16 w-full bg-slate-500/10 rounded-md flex items-end overflow-hidden"><div className={`${h.color} w-full rounded-md transition-all duration-700`} style={{ height: `${h.val}%` }} /></div>
                <p className={`text-[10px] mt-1 ${textFaint(isDark)}`}>{h.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.purple.chipDark : THEME.purple.chipLight}`}>Bosqich {phase + 1} / {CYCLE_PHASES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="cycle" stageIndex={phase} isDark={isDark} color="purple" />
        <AIExplain topicTitle="Hayz sikli" stageTitle={current.title} stageDesc={current.desc} color="purple" isDark={isDark} />
        <GlossaryPanel topicKey="cycle" isDark={isDark} color="purple" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="purple" isDark={isDark} />
        <StageControls index={phase} total={CYCLE_PHASES.length} color="purple" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setPhase((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setPhase((s) => Math.min(CYCLE_PHASES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setPhase(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setPhase(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("cycle")} className={`btn-press w-full mt-4 ${THEME.purple.accent} ${THEME.purple.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- INSULT ------------------------- */

function StrokeScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= STROKE_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 3000);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = STROKE_STAGES[stage];
  const clotWidth = (current.clotSize / 100) * 90;
  const isOccluded = current.stage === "occluded" || current.stage === "core-death" || current.stage === "penumbra";
  const showPenumbra = current.stage === "penumbra" || current.stage === "treatment";
  const showTreatmentFlow = current.stage === "treatment";
  const damagePct = current.brainDamage;
  const isLast = stage === STROKE_STAGES.length - 1;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="blue" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Insult (ishemik)</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={STROKE_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="blue" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 500 240" className="w-full h-56">
            <defs><radialGradient id="brainDead" cx="50%" cy="50%" r="60%"><stop offset="0%" stopColor="#78716c" /><stop offset="100%" stopColor="#57534e" /></radialGradient></defs>
            <ellipse cx="180" cy="120" rx="140" ry="95" fill="#fee2e2" stroke="#fca5a5" strokeWidth="2" />
            {damagePct > 0 && <ellipse cx="130" cy="110" rx={20 + damagePct * 0.9} ry={16 + damagePct * 0.6} fill="url(#brainDead)" opacity="0.85" style={{ transition: "all 0.9s ease" }} />}
            {showPenumbra && <ellipse cx="130" cy="110" rx={20 + damagePct * 0.9 + 22} ry={16 + damagePct * 0.6 + 18} fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6,4" opacity="0.8" style={{ transition: "all 0.9s ease" }} />}
            {showTreatmentFlow && (<g><circle cx="130" cy="110" r="6" fill="#22c55e" opacity="0.8"><animate attributeName="r" values="4;10;4" dur="1s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite" /></circle><text x="180" y="215" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="700">✓ Qon oqimi tiklanmoqda</text></g>)}
            <rect x="360" y="100" width="120" height="26" rx="13" fill="#fecdd3" stroke="#fda4af" strokeWidth="2" />
            <rect x="360" y="106" width="120" height="14" rx="7" fill="#fff1f2" />
            {clotWidth > 2 && <rect x={470 - clotWidth} y="103" width={clotWidth} height="20" rx="8" fill="#7f1d1d" opacity="0.85" style={{ transition: "all 0.9s ease" }} />}
            {!isOccluded && Array.from({ length: 5 }).map((_, i) => (<circle key={i} r="3.5" fill="#dc2626" opacity="0.85"><animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.4}s`} path="M 480 113 Q 420 113, 320 113" /></circle>))}
            {showTreatmentFlow && Array.from({ length: 5 }).map((_, i) => (<circle key={`t-${i}`} r="3.5" fill="#22c55e" opacity="0.85"><animateMotion dur="1.8s" repeatCount="indefinite" begin={`${i * 0.35}s`} path="M 480 113 Q 420 113, 320 113" /></circle>))}
            <text x="420" y="88" textAnchor="middle" fill="#64748b" fontSize="11">Miya arteriyasi</text>
            <text x="180" y="230" textAnchor="middle" fill="#64748b" fontSize="11">Miya (kesim)</text>
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.blue.chipDark : THEME.blue.chipLight}`}>Bosqich {stage + 1} / {STROKE_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="stroke" stageIndex={stage} isDark={isDark} color="blue" />
        <AIExplain topicTitle="Insult" stageTitle={current.title} stageDesc={current.desc} color="blue" isDark={isDark} />
        <GlossaryPanel topicKey="stroke" isDark={isDark} color="blue" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="blue" isDark={isDark} />
        <StageControls index={stage} total={STROKE_STAGES.length} color="blue" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(STROKE_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("stroke")} className={`btn-press w-full mt-4 ${THEME.blue.accent} ${THEME.blue.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- QANDLI DIABET ------------------------- */

function DiabetesScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= DIABETES_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 3000);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = DIABETES_STAGES[stage];
  const glucoseCount = Math.round((current.glucose / 100) * 10);
  const insulinCount = Math.round((current.insulin / 100) * 8);
  const isLast = stage === DIABETES_STAGES.length - 1;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="amber" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Qandli diabet (2-tur)</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={DIABETES_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="amber" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 500 240" className="w-full h-56">
            <ellipse cx="90" cy="120" rx="60" ry="42" fill="#fef3c7" stroke="#fde68a" strokeWidth="2" />
            <text x="90" y="80" textAnchor="middle" fontSize="10" fill="#94a3b8">Pankreas</text>
            <text x="90" y="126" textAnchor="middle" fontSize="10" fill="#78350f" fontWeight="700">Beta-hujayralar</text>
            <text x="90" y="140" textAnchor="middle" fontSize="10" fill="#78350f">{current.betaCells}%</text>
            {Array.from({ length: insulinCount }).map((_, i) => (<circle key={`ins-${i}`} r="4" fill="#f59e0b" opacity="0.85"><animateMotion dur="2.4s" repeatCount="indefinite" begin={`${i * 0.3}s`} path="M 130 110 Q 260 90, 340 110" /></circle>))}
            <rect x="330" y="70" width="140" height="100" rx="16" fill="#fffbeb" stroke="#fde68a" strokeWidth="2" />
            <text x="400" y="60" textAnchor="middle" fontSize="10" fill="#94a3b8">Nishon hujayra</text>
            <rect x="330" y="112" width="14" height="16" rx="3" fill={current.receptorWorks ? "#22c55e" : "#dc2626"} />
            <text x="337" y="150" textAnchor="middle" fontSize="8" fill={current.receptorWorks ? "#16a34a" : "#dc2626"} fontWeight="700">{current.receptorWorks ? "OCHIQ" : "BERK"}</text>
            {Array.from({ length: glucoseCount }).map((_, i) => {
              const insideCell = current.receptorWorks && i < glucoseCount * 0.6;
              const cx = insideCell ? 390 + (i % 4) * 18 : 250 + (i * 22) % 200;
              const cy = insideCell ? 100 + Math.floor(i / 4) * 20 : 190 + (i % 3) * 8;
              return <circle key={`glu-${i}`} cx={cx} cy={cy} r="5" fill="#3b82f6" opacity="0.75" style={{ transition: "all 0.9s ease" }} />;
            })}
            <text x="250" y="215" textAnchor="middle" fontSize="10" fill="#64748b">Qondagi glyukoza</text>
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 grid grid-cols-3 gap-3 ${glassCard(isDark)}`}>
          {[{ label: "Qon glyukozasi", val: current.glucose, color: current.glucose > 70 ? "bg-red-400" : "bg-blue-400" }, { label: "Insulin darajasi", val: current.insulin, color: "bg-amber-400" }, { label: "Beta-hujayralar", val: current.betaCells, color: "bg-emerald-400" }].map((h) => (
            <div key={h.label} className="text-center">
              <div className="h-16 w-full bg-slate-500/10 rounded-md flex items-end overflow-hidden"><div className={`${h.color} w-full rounded-md transition-all duration-700`} style={{ height: `${h.val}%` }} /></div>
              <p className={`text-[10px] mt-1 ${textFaint(isDark)}`}>{h.label}</p>
            </div>
          ))}
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.amber.chipDark : THEME.amber.chipLight}`}>Bosqich {stage + 1} / {DIABETES_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="diabetes" stageIndex={stage} isDark={isDark} color="amber" />
        <AIExplain topicTitle="Qandli diabet" stageTitle={current.title} stageDesc={current.desc} color="amber" isDark={isDark} />
        <GlossaryPanel topicKey="diabetes" isDark={isDark} color="amber" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="amber" isDark={isDark} />
        <StageControls index={stage} total={DIABETES_STAGES.length} color="amber" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(DIABETES_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("diabetes")} className={`btn-press w-full mt-4 ${THEME.amber.accent} ${THEME.amber.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- NERV IMPULSI ------------------------- */

function SynapseScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= SYNAPSE_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 2800);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = SYNAPSE_STAGES[stage];
  const isLast = stage === SYNAPSE_STAGES.length - 1;
  const potentialPct = Math.round(((current.potential + 80) / 130) * 100);
  const showImpulseTravel = current.phase === "peak" || current.phase === "arrival";
  const showRelease = current.phase === "release" || current.phase === "bind";
  const showChannelsOpen = current.phase === "depolarize" || current.phase === "peak";

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="emerald" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Nerv impulsi va sinaps</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={SYNAPSE_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="emerald" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 520 220" className="w-full h-56">
            <rect x="20" y="90" width="300" height="30" rx="15" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="2" />
            {showImpulseTravel && (<circle r="9" fill="#f59e0b" opacity="0.9"><animateMotion dur="1.6s" repeatCount="indefinite" path="M 30 105 L 300 105" /></circle>)}
            <text x="170" y="80" textAnchor="middle" fontSize="10" fill="#64748b">Akson</text>
            <path d="M320 70 Q 360 70, 360 105 Q 360 140, 320 140 Z" fill="#a7f3d0" stroke="#6ee7b7" strokeWidth="2" />
            {!showRelease ? (
              <>
                <circle cx="335" cy="90" r="6" fill="#059669" opacity="0.8" />
                <circle cx="340" cy="105" r="6" fill="#059669" opacity="0.8" />
                <circle cx="333" cy="120" r="6" fill="#059669" opacity="0.8" />
              </>
            ) : (
              Array.from({ length: 8 }).map((_, i) => (
                <circle key={i} r="3" fill="#059669" opacity="0.8"><animateMotion dur="1.2s" repeatCount="indefinite" begin={`${i * 0.1}s`} path={`M 335 ${90 + (i % 3) * 15} L ${400 + (i % 4) * 10} ${100 + (i % 3) * 10}`} /></circle>
              ))
            )}
            <rect x="362" y="60" width="26" height="90" fill={isDark ? "#0f172a" : "#f8fafc"} opacity="0.4" />
            <text x="375" y="55" textAnchor="middle" fontSize="9" fill="#64748b">Sinaptik yoriq</text>
            <rect x="390" y="60" width="110" height="90" rx="14" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="2" />
            <rect x="392" y="95" width="10" height="20" rx="3" fill={showRelease && current.phase === "bind" ? "#22c55e" : "#94a3b8"} style={{ transition: "fill 0.6s ease" }} />
            <rect x="392" y="125" width="10" height="20" rx="3" fill={showRelease && current.phase === "bind" ? "#22c55e" : "#94a3b8"} style={{ transition: "fill 0.6s ease" }} />
            <text x="445" y="55" textAnchor="middle" fontSize="9" fill="#64748b">Keyingi neyron</text>
            {showChannelsOpen && (<text x="170" y="130" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="700">Na+ kanallari ochiq</text>)}
          </svg>
        </div>

        <div className={`rounded-2xl p-4 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className={`text-xs font-medium ${textSub(isDark)}`}>Membrana potensiali</span>
            <span className={`text-xs font-bold ${current.potential > 0 ? "text-red-500" : "text-emerald-500"}`}>{current.potential} mV</span>
          </div>
          <div className="h-3 w-full bg-slate-500/10 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-700 ${current.potential > 0 ? "bg-red-400" : "bg-emerald-400"}`} style={{ width: `${Math.max(potentialPct, 4)}%` }} />
          </div>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.emerald.chipDark : THEME.emerald.chipLight}`}>Bosqich {stage + 1} / {SYNAPSE_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="synapse" stageIndex={stage} isDark={isDark} color="emerald" />
        <AIExplain topicTitle="Nerv impulsi va sinaps" stageTitle={current.title} stageDesc={current.desc} color="emerald" isDark={isDark} />
        <GlossaryPanel topicKey="synapse" isDark={isDark} color="emerald" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="emerald" isDark={isDark} />
        <StageControls index={stage} total={SYNAPSE_STAGES.length} color="emerald" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(SYNAPSE_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("synapse")} className={`btn-press w-full mt-4 ${THEME.emerald.accent} ${THEME.emerald.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- ALLERGIK REAKSIYA ------------------------- */

function AllergyScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= ALLERGY_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 2900);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = ALLERGY_STAGES[stage];
  const isLast = stage === ALLERGY_STAGES.length - 1;
  const showIgE = current.phase !== "first-exposure";
  const showAllergenIncoming = current.phase === "first-exposure" || current.phase === "reexposure";
  const showDegranulation = current.phase === "degranulate" || current.phase === "histamine" || current.phase === "anaphylaxis";
  const severity = current.phase === "anaphylaxis" ? 3 : current.phase === "histamine" ? 2 : current.phase === "degranulate" ? 1 : 0;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="cyan" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Allergik reaksiya</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={ALLERGY_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="cyan" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 500 220" className="w-full h-56">
            <circle cx="250" cy="120" r="70" fill="#cffafe" stroke="#67e8f9" strokeWidth="2" />
            <text x="250" y="42" textAnchor="middle" fontSize="11" fill="#64748b">Mast hujayra</text>
            {!showDegranulation ? (
              Array.from({ length: 10 }).map((_, i) => {
                const ang = (i / 10) * Math.PI * 2;
                const rad = 30 + (i % 3) * 8;
                return <circle key={i} cx={250 + Math.cos(ang) * rad} cy={120 + Math.sin(ang) * rad} r="5" fill="#f59e0b" opacity="0.85" />;
              })
            ) : (
              Array.from({ length: 14 }).map((_, i) => {
                const ang = (i / 14) * Math.PI * 2;
                return (
                  <circle key={i} r="4" fill="#f59e0b" opacity="0.85">
                    <animateMotion dur="1.4s" repeatCount="indefinite" begin={`${i * 0.05}s`} path={`M 250 120 L ${250 + Math.cos(ang) * 130} ${120 + Math.sin(ang) * 130}`} />
                  </circle>
                );
              })
            )}
            {showIgE && Array.from({ length: 8 }).map((_, i) => {
              const ang = (i / 8) * Math.PI * 2;
              const bx = 250 + Math.cos(ang) * 70;
              const by = 120 + Math.sin(ang) * 70;
              const tx = 250 + Math.cos(ang) * 90;
              const ty = 120 + Math.sin(ang) * 90;
              return <line key={i} x1={bx} y1={by} x2={tx} y2={ty} stroke="#0891b2" strokeWidth="3" strokeLinecap="round" opacity="0.8" />;
            })}
            {showAllergenIncoming && Array.from({ length: 4 }).map((_, i) => (
              <circle key={i} r="6" fill="#dc2626" opacity="0.85"><animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.5}s`} path={`M ${30 + i * 15} ${30 + i * 20} L ${230 + i * 5} ${100 + i * 6}`} /></circle>
            ))}
            {severity >= 2 && (
              <>
                <circle cx="250" cy="120" r={90 + severity * 12} fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,4" opacity="0.5">
                  <animate attributeName="r" values={`${90 + severity * 12};${105 + severity * 12};${90 + severity * 12}`} dur="1.6s" repeatCount="indefinite" />
                </circle>
                <text x="250" y="200" textAnchor="middle" fontSize="11" fill="#dc2626" fontWeight="700">
                  {severity === 3 ? "⚠ Anafilaksiya — shoshilinch yordam kerak!" : "Gistamin ta'siri: shish, qichishish"}
                </text>
              </>
            )}
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.cyan.chipDark : THEME.cyan.chipLight}`}>Bosqich {stage + 1} / {ALLERGY_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="allergy" stageIndex={stage} isDark={isDark} color="cyan" />
        <AIExplain topicTitle="Allergik reaksiya" stageTitle={current.title} stageDesc={current.desc} color="cyan" isDark={isDark} />
        <GlossaryPanel topicKey="allergy" isDark={isDark} color="cyan" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="cyan" isDark={isDark} />
        <StageControls index={stage} total={ALLERGY_STAGES.length} color="cyan" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(ALLERGY_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("allergy")} className={`btn-press w-full mt-4 ${THEME.cyan.accent} ${THEME.cyan.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- ASTMA ------------------------- */

function AsthmaScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= ASTHMA_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 2900);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = ASTHMA_STAGES[stage];
  const isLast = stage === ASTHMA_STAGES.length - 1;
  const wallThickness = 14;
  const lumenFull = 90;
  const narrowAmt = (current.narrowing / 100) * (lumenFull * 0.8);
  const showMucus = current.phase === "mucus" || current.phase === "attack";
  const showSpasm = current.phase === "spasm" || current.phase === "mucus" || current.phase === "attack";

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="indigo" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Astma (bronxlar torayishi)</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={ASTHMA_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="indigo" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 500 220" className="w-full h-56">
            <circle cx="250" cy="110" r="95" fill="none" stroke="#c7d2fe" strokeWidth={wallThickness + 4} opacity="0.5" />
            <circle cx="250" cy="110" r="95" fill="none" stroke={showSpasm ? "#818cf8" : "#a5b4fc"} strokeWidth={wallThickness} style={{ transition: "all 0.8s ease" }} />
            <circle cx="250" cy="110" r={Math.max(95 - wallThickness / 2 - narrowAmt, 12)} fill={isDark ? "#1e293b" : "#eef2ff"} style={{ transition: "all 0.8s ease" }} />
            {showMucus && (<circle cx="250" cy="110" r={Math.max(95 - wallThickness / 2 - narrowAmt + 8, 14)} fill="none" stroke="#fbbf24" strokeWidth="6" strokeDasharray="8,6" opacity="0.7" style={{ transition: "all 0.8s ease" }} />)}
            {Array.from({ length: 6 }).map((_, i) => {
              const r = Math.max(95 - wallThickness / 2 - narrowAmt - 10, 4);
              const ang = (i / 6) * Math.PI * 2;
              return (
                <circle key={i} r="3" fill="#60a5fa" opacity="0.8"><animateMotion dur={`${1.4 + current.narrowing / 40}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} path={`M 250 110 L ${250 + Math.cos(ang) * r} ${110 + Math.sin(ang) * r}`} /></circle>
              );
            })}
            <text x="250" y="20" textAnchor="middle" fontSize="11" fill="#64748b">Bronx kesimi</text>
            {current.narrowing > 0 && (<text x="250" y="205" textAnchor="middle" fontSize="11" fill={current.narrowing > 60 ? "#dc2626" : "#6366f1"} fontWeight="700">Havo yo'li torayishi: {current.narrowing}%</text>)}
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.indigo.chipDark : THEME.indigo.chipLight}`}>Bosqich {stage + 1} / {ASTHMA_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="asthma" stageIndex={stage} isDark={isDark} color="indigo" />
        <AIExplain topicTitle="Astma" stageTitle={current.title} stageDesc={current.desc} color="indigo" isDark={isDark} />
        <GlossaryPanel topicKey="asthma" isDark={isDark} color="indigo" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="indigo" isDark={isDark} />
        <StageControls index={stage} total={ASTHMA_STAGES.length} color="indigo" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(ASTHMA_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("asthma")} className={`btn-press w-full mt-4 ${THEME.indigo.accent} ${THEME.indigo.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- BUYRAK ISHI ------------------------- */

function KidneyScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= KIDNEY_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 3000);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = KIDNEY_STAGES[stage];
  const isLast = stage === KIDNEY_STAGES.length - 1;
  const seg = current.segment;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="teal" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Buyrak ishi (filtratsiya)</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={KIDNEY_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="teal" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 520 220" className="w-full h-56">
            <rect x="10" y="95" width="70" height="20" rx="10" fill={seg === "artery" ? "#0d9488" : "#99f6e4"} style={{ transition: "fill 0.6s ease" }} />
            {seg === "artery" && Array.from({ length: 4 }).map((_, i) => (<circle key={i} r="3.5" fill="#dc2626" opacity="0.85"><animateMotion dur="1.4s" repeatCount="indefinite" begin={`${i * 0.3}s`} path="M 15 105 L 80 105" /></circle>))}
            <text x="45" y="85" textAnchor="middle" fontSize="9" fill="#64748b">Arteriya</text>
            <circle cx="115" cy="105" r="26" fill={seg === "glomerulus" ? "#0d9488" : "#ccfbf1"} stroke="#5eead4" strokeWidth="2" style={{ transition: "fill 0.6s ease" }} />
            <text x="115" y="145" textAnchor="middle" fontSize="9" fill="#64748b">Glomerula</text>
            {seg === "glomerulus" && Array.from({ length: 6 }).map((_, i) => (<circle key={i} r="2.5" fill="#fbbf24" opacity="0.9"><animateMotion dur="1.2s" repeatCount="indefinite" begin={`${i * 0.15}s`} path="M 115 105 L 160 60" /></circle>))}
            <rect x="150" y="45" width="90" height="16" rx="8" fill={seg === "proximal" ? "#0d9488" : "#99f6e4"} style={{ transition: "fill 0.6s ease" }} />
            <text x="195" y="35" textAnchor="middle" fontSize="9" fill="#64748b">Proksimal kanalcha</text>
            {seg === "proximal" && Array.from({ length: 4 }).map((_, i) => (<circle key={i} r="2.5" fill="#3b82f6" opacity="0.85"><animateMotion dur="1.1s" repeatCount="indefinite" begin={`${i * 0.2}s`} path="M 190 53 L 130 100" /></circle>))}
            <path d="M 240 53 L 280 53 L 280 150 L 240 150" fill="none" stroke={seg === "henle" ? "#0d9488" : "#99f6e4"} strokeWidth="14" strokeLinecap="round" style={{ transition: "stroke 0.6s ease" }} />
            <text x="295" y="100" fontSize="9" fill="#64748b">Genle qovuzlog'i</text>
            <rect x="240" y="160" width="90" height="16" rx="8" fill={seg === "distal" ? "#0d9488" : "#99f6e4"} style={{ transition: "fill 0.6s ease" }} />
            <text x="285" y="196" textAnchor="middle" fontSize="9" fill="#64748b">Distal kanalcha</text>
            {seg === "distal" && Array.from({ length: 4 }).map((_, i) => (<circle key={i} r="2.5" fill="#f59e0b" opacity="0.85"><animateMotion dur="1.1s" repeatCount="indefinite" begin={`${i * 0.2}s`} path="M 260 168 L 260 130" /></circle>))}
            <rect x="345" y="60" width="18" height="120" rx="9" fill={seg === "collecting" ? "#0d9488" : "#99f6e4"} style={{ transition: "fill 0.6s ease" }} />
            <text x="354" y="50" textAnchor="middle" fontSize="9" fill="#64748b">Yig'uvchi naycha</text>
            {(seg === "distal" || seg === "collecting") && (<circle r="3" fill="#0ea5e9" opacity="0.85"><animateMotion dur="1.3s" repeatCount="indefinite" path="M 335 168 L 354 168" /></circle>)}
            {seg === "collecting" && Array.from({ length: 4 }).map((_, i) => (<circle key={i} r="2.5" fill="#eab308" opacity="0.85"><animateMotion dur="1s" repeatCount="indefinite" begin={`${i * 0.2}s`} path="M 354 65 L 354 175" /></circle>))}
            <ellipse cx="440" cy="175" rx="34" ry="26" fill={seg === "collecting" ? "#fde68a" : "#fef3c7"} stroke="#fde047" strokeWidth="2" style={{ transition: "fill 0.6s ease" }} />
            <text x="440" y="207" textAnchor="middle" fontSize="9" fill="#64748b">Siydik pufagi</text>
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.teal.chipDark : THEME.teal.chipLight}`}>Bosqich {stage + 1} / {KIDNEY_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="kidney" stageIndex={stage} isDark={isDark} color="teal" />
        <AIExplain topicTitle="Buyrak ishi (filtratsiya)" stageTitle={current.title} stageDesc={current.desc} color="teal" isDark={isDark} />
        <GlossaryPanel topicKey="kidney" isDark={isDark} color="teal" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="teal" isDark={isDark} />
        <StageControls index={stage} total={KIDNEY_STAGES.length} color="teal" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(KIDNEY_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("kidney")} className={`btn-press w-full mt-4 ${THEME.teal.accent} ${THEME.teal.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- VAKSINATSIYA MEXANIZMI ------------------------- */

function VaccineScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= VACCINE_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 3000);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = VACCINE_STAGES[stage];
  const isLast = stage === VACCINE_STAGES.length - 1;
  const ph = current.phase;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="violet" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Vaksinatsiya mexanizmi</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={VACCINE_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="violet" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 500 220" className="w-full h-56">
            {ph === "inject" && (
              <>
                <rect x="30" y="95" width="70" height="10" rx="5" fill="#8b5cf6" transform="rotate(-20 30 95)" />
                <text x="60" y="70" textAnchor="middle" fontSize="10" fill="#64748b">Vaksina</text>
                {Array.from({ length: 5 }).map((_, i) => (<circle key={i} r="4" fill="#c4b5fd" opacity="0.9"><animateMotion dur="1.5s" repeatCount="indefinite" begin={`${i * 0.25}s`} path="M 90 100 L 160 110" /></circle>))}
              </>
            )}
            <circle cx="180" cy="115" r="34" fill={ph === "detect" ? "#8b5cf6" : "#ddd6fe"} style={{ transition: "fill 0.6s ease" }} />
            <text x="180" y="165" textAnchor="middle" fontSize="9" fill="#64748b">Antigen taqdim etuvchi hujayra</text>
            {(ph === "detect" || ph === "tcell") && (<polygon points="180,90 186,102 174,102" fill="#fbbf24" />)}
            <circle cx="270" cy="70" r="20" fill={ph === "tcell" ? "#8b5cf6" : "#ede9fe"} style={{ transition: "fill 0.6s ease" }} />
            <text x="270" y="42" textAnchor="middle" fontSize="9" fill="#64748b">T-hujayra</text>
            {ph === "tcell" && (<circle r="3" fill="#fbbf24"><animateMotion dur="1.2s" repeatCount="indefinite" path="M 205 105 L 255 78" /></circle>)}
            <circle cx="270" cy="165" r="20" fill={ph === "antibody" || ph === "memory" || ph === "reencounter" ? "#8b5cf6" : "#ede9fe"} style={{ transition: "fill 0.6s ease" }} />
            <text x="270" y="197" textAnchor="middle" fontSize="9" fill="#64748b">B-hujayra</text>
            {ph === "antibody" && Array.from({ length: 6 }).map((_, i) => {
              const ang = (i / 6) * Math.PI * 2;
              return <polygon key={i} points="0,-4 3,3 -3,3" fill="#22c55e" transform={`translate(${270 + Math.cos(ang) * 45}, ${165 + Math.sin(ang) * 45})`} />;
            })}
            {(ph === "memory" || ph === "reencounter") && (
              <>
                <circle cx="360" cy="90" r="12" fill="#fbbf24" opacity="0.9" />
                <circle cx="380" cy="140" r="12" fill="#fbbf24" opacity="0.9" />
                <text x="370" y="60" textAnchor="middle" fontSize="9" fill="#64748b">Xotira hujayralari</text>
              </>
            )}
            {ph === "reencounter" && (
              <>
                <circle cx="450" cy="115" r="14" fill="#dc2626" opacity="0.85" />
                <text x="450" y="140" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="700">Haqiqiy patogen</text>
                {Array.from({ length: 5 }).map((_, i) => (
                  <polygon key={i} points="0,-4 3,3 -3,3" fill="#22c55e" opacity="0.9">
                    <animateMotion dur="1s" repeatCount="indefinite" begin={`${i * 0.15}s`} path="M 375 130 L 445 118" />
                  </polygon>
                ))}
              </>
            )}
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.violet.chipDark : THEME.violet.chipLight}`}>Bosqich {stage + 1} / {VACCINE_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="vaccine" stageIndex={stage} isDark={isDark} color="violet" />
        <AIExplain topicTitle="Vaksinatsiya mexanizmi" stageTitle={current.title} stageDesc={current.desc} color="violet" isDark={isDark} />
        <GlossaryPanel topicKey="vaccine" isDark={isDark} color="violet" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="violet" isDark={isDark} />
        <StageControls index={stage} total={VACCINE_STAGES.length} color="violet" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(VACCINE_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("vaccine")} className={`btn-press w-full mt-4 ${THEME.violet.accent} ${THEME.violet.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- YURAK SIKLI (KARDIAK) ------------------------- */

function CardiacScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= CARDIAC_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 2600);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = CARDIAC_STAGES[stage];
  const isLast = stage === CARDIAC_STAGES.length - 1;
  const ph = current.phase;

  const atriaContract = ph === "atrial-systole";
  const ventContract = ph === "isovol-contract" || ph === "ejection";
  const avOpen = ph === "diastole" || ph === "atrial-systole" || ph === "filling";
  const semiOpen = ph === "ejection";
  const showEjection = ph === "ejection";
  const showFilling = ph === "diastole" || ph === "filling";

  const atrRy = atriaContract ? 18 : 26;
  const ventRy = ventContract ? 30 : 40;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="orange" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Yurak sikli</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={CARDIAC_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="orange" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 400 240" className="w-full h-56">
            <rect x="160" y="10" width="18" height="40" rx="6" fill={semiOpen ? "#f97316" : "#fed7aa"} style={{ transition: "fill 0.5s ease" }} />
            <rect x="222" y="10" width="18" height="40" rx="6" fill={semiOpen ? "#f97316" : "#fed7aa"} style={{ transition: "fill 0.5s ease" }} />
            <text x="200" y="8" textAnchor="middle" fontSize="9" fill="#64748b">Aorta / o'pka arteriyasi</text>
            {showEjection && Array.from({ length: 4 }).map((_, i) => (<circle key={i} r="3.5" fill="#dc2626" opacity="0.85"><animateMotion dur="0.8s" repeatCount="indefinite" begin={`${i * 0.15}s`} path="M 169 90 L 169 15" /></circle>))}
            {showEjection && Array.from({ length: 4 }).map((_, i) => (<circle key={`b-${i}`} r="3.5" fill="#3b82f6" opacity="0.85"><animateMotion dur="0.8s" repeatCount="indefinite" begin={`${i * 0.15}s`} path="M 231 90 L 231 15" /></circle>))}
            <ellipse cx="150" cy="70" rx="45" ry={atrRy} fill="#fdba74" style={{ transition: "all 0.5s ease" }} />
            <ellipse cx="250" cy="70" rx="45" ry={atrRy} fill="#93c5fd" style={{ transition: "all 0.5s ease" }} />
            <text x="150" y="45" textAnchor="middle" fontSize="9" fill="#64748b">Chap bo'lma</text>
            <text x="250" y="45" textAnchor="middle" fontSize="9" fill="#64748b">O'ng bo'lma</text>
            {showFilling && (
              <>
                <circle r="3" fill="#f97316" opacity="0.8"><animateMotion dur="1s" repeatCount="indefinite" path="M 150 50 L 150 65" /></circle>
                <circle r="3" fill="#3b82f6" opacity="0.8"><animateMotion dur="1s" repeatCount="indefinite" path="M 250 50 L 250 65" /></circle>
              </>
            )}
            <rect x="130" y="98" width="40" height="8" rx="3" fill={avOpen ? "#22c55e" : "#dc2626"} style={{ transition: "fill 0.5s ease" }} />
            <rect x="230" y="98" width="40" height="8" rx="3" fill={avOpen ? "#22c55e" : "#dc2626"} style={{ transition: "fill 0.5s ease" }} />
            {ph === "atrial-systole" && (
              <>
                <circle r="3" fill="#f97316" opacity="0.9"><animateMotion dur="0.7s" repeatCount="indefinite" path="M 150 75 L 150 110" /></circle>
                <circle r="3" fill="#3b82f6" opacity="0.9"><animateMotion dur="0.7s" repeatCount="indefinite" path="M 250 75 L 250 110" /></circle>
              </>
            )}
            <ellipse cx="150" cy="160" rx="55" ry={ventRy} fill="#fb923c" style={{ transition: "all 0.5s ease" }} />
            <ellipse cx="250" cy="160" rx="55" ry={ventRy} fill="#60a5fa" style={{ transition: "all 0.5s ease" }} />
            <text x="150" y="205" textAnchor="middle" fontSize="9" fill="#64748b">Chap qorincha</text>
            <text x="250" y="205" textAnchor="middle" fontSize="9" fill="#64748b">O'ng qorincha</text>
            <rect x="160" y="115" width="18" height="7" rx="3" fill={semiOpen ? "#22c55e" : "#dc2626"} style={{ transition: "fill 0.5s ease" }} />
            <rect x="222" y="115" width="18" height="7" rx="3" fill={semiOpen ? "#22c55e" : "#dc2626"} style={{ transition: "fill 0.5s ease" }} />
            {(ph === "isovol-contract" || ph === "isovol-relax") && (<text x="200" y="230" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="700">Barcha qopqoqlar yopiq</text>)}
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.orange.chipDark : THEME.orange.chipLight}`}>Bosqich {stage + 1} / {CARDIAC_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="cardiac" stageIndex={stage} isDark={isDark} color="orange" />
        <AIExplain topicTitle="Yurak sikli" stageTitle={current.title} stageDesc={current.desc} color="orange" isDark={isDark} />
        <GlossaryPanel topicKey="cardiac" isDark={isDark} color="orange" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="orange" isDark={isDark} />
        <StageControls index={stage} total={CARDIAC_STAGES.length} color="orange" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(CARDIAC_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("cardiac")} className={`btn-press w-full mt-4 ${THEME.orange.accent} ${THEME.orange.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- QALQONSIMON BEZ ISHI ------------------------- */

function ThyroidScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= THYROID_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 3000);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = THYROID_STAGES[stage];
  const isLast = stage === THYROID_STAGES.length - 1;
  const needleAngle = -90 + (current.metabolism / 100) * 180;
  const glandRx = 42 * current.glandSize;
  const glandColor = current.cause === "graves" ? "#d946ef" : current.cause === "hashimoto" ? "#94a3b8" : "#f0abfc";

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="fuchsia" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Qalqonsimon bez ishi</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={THYROID_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="fuchsia" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 400 260" className="w-full h-60">
            {/* Gipotalamus/gipofiz */}
            <rect x="150" y="10" width="100" height="36" rx="12" fill="#e9d5ff" stroke="#c084fc" strokeWidth="2" />
            <text x="200" y="32" textAnchor="middle" fontSize="10" fill="#6b21a8" fontWeight="700">Gipotalamus/Gipofiz</text>

            {/* TSH pastga tushayotgan zarrachalar */}
            {Array.from({ length: Math.max(2, Math.round(current.tsh / 20)) }).map((_, i) => (
              <circle key={i} r="3.5" fill="#a855f7" opacity="0.85"><animateMotion dur="1.6s" repeatCount="indefinite" begin={`${i * 0.3}s`} path="M 200 46 L 200 90" /></circle>
            ))}
            <text x="230" y="70" fontSize="9" fill="#64748b">TSH</text>

            {/* Qalqonsimon bez (ikki bo'lak) */}
            <ellipse cx={200 - glandRx * 0.55} cy="120" rx={glandRx * 0.55} ry={30 * current.glandSize} fill={glandColor} stroke="#a21caf" strokeWidth="2" style={{ transition: "all 0.8s ease" }} />
            <ellipse cx={200 + glandRx * 0.55} cy="120" rx={glandRx * 0.55} ry={30 * current.glandSize} fill={glandColor} stroke="#a21caf" strokeWidth="2" style={{ transition: "all 0.8s ease" }} />
            <text x="200" y="165" textAnchor="middle" fontSize="10" fill="#64748b">Qalqonsimon bez</text>

            {/* Autoimmun antikorlar (Greyvs/Xashimoto) */}
            {(current.cause === "graves" || current.cause === "hashimoto") && Array.from({ length: 6 }).map((_, i) => {
              const ang = (i / 6) * Math.PI * 2;
              return <circle key={i} cx={200 + Math.cos(ang) * 70} cy={120 + Math.sin(ang) * 40} r="4" fill={current.cause === "graves" ? "#facc15" : "#ef4444"} opacity="0.85" />;
            })}

            {/* T3/T4 chiqishi */}
            {Array.from({ length: Math.max(2, Math.round(current.t4 / 15)) }).map((_, i) => (
              <circle key={i} r="3" fill="#22c55e" opacity="0.85"><animateMotion dur="1.4s" repeatCount="indefinite" begin={`${i * 0.2}s`} path="M 200 150 L 200 195" /></circle>
            ))}
            <text x="230" y="185" fontSize="9" fill="#64748b">T3/T4</text>

            {/* Metabolizm o'lchagichi (gauge) */}
            <path d="M 130 235 A 70 70 0 0 1 270 235" fill="none" stroke="#e2e8f0" strokeWidth="10" strokeLinecap="round" />
            <path d="M 130 235 A 70 70 0 0 1 270 235" fill="none" stroke={current.metabolism > 60 ? "#f97316" : current.metabolism < 40 ? "#3b82f6" : "#22c55e"} strokeWidth="10" strokeLinecap="round" strokeDasharray={`${(current.metabolism / 100) * 220} 220`} style={{ transition: "all 0.8s ease" }} />
            <line x1="200" y1="235" x2={200 + 55 * Math.cos((needleAngle * Math.PI) / 180)} y2={235 + 55 * Math.sin((needleAngle * Math.PI) / 180)} stroke="#1e293b" strokeWidth="3" strokeLinecap="round" style={{ transition: "all 0.8s ease" }} />
            <circle cx="200" cy="235" r="5" fill="#1e293b" />
            <text x="200" y="255" textAnchor="middle" fontSize="9" fill="#64748b">Metabolizm tezligi</text>
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.fuchsia.chipDark : THEME.fuchsia.chipLight}`}>Bosqich {stage + 1} / {THYROID_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="thyroid" stageIndex={stage} isDark={isDark} color="fuchsia" />
        <AIExplain topicTitle="Qalqonsimon bez ishi" stageTitle={current.title} stageDesc={current.desc} color="fuchsia" isDark={isDark} />
        <GlossaryPanel topicKey="thyroid" isDark={isDark} color="fuchsia" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="fuchsia" isDark={isDark} />
        <StageControls index={stage} total={THYROID_STAGES.length} color="fuchsia" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(THYROID_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("thyroid")} className={`btn-press w-full mt-4 ${THEME.fuchsia.accent} ${THEME.fuchsia.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- GEPATIT / JIGAR ISHI ------------------------- */

function LiverScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= LIVER_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 3000);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = LIVER_STAGES[stage];
  const isLast = stage === LIVER_STAGES.length - 1;
  const ph = current.phase;
  const virusCount = Math.round((current.virusLevel / 100) * 8);
  const fibrosisCount = ph === "chronic" ? 5 : ph === "cirrhosis" ? 12 : 0;
  const liverColor = current.damage > 75 ? "#94a3b8" : current.damage > 40 ? "#c2410c" : "#d97706";
  const showJaundice = ph === "acute" || ph === "chronic";

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="lime" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Gepatit / jigar ishi</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={LIVER_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="lime" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 400 240" className="w-full h-56">
            {/* Jigar shakli (ikki bo'lakli blob) */}
            <path
              d="M 60 90 Q 40 60, 90 50 Q 160 20, 230 40 Q 320 40, 340 100 Q 350 150, 300 180 Q 240 210, 170 195 Q 100 210, 65 170 Q 40 130, 60 90 Z"
              fill={liverColor}
              opacity="0.9"
              style={{ transition: "fill 0.8s ease" }}
            />
            <text x="200" y="20" textAnchor="middle" fontSize="11" fill="#64748b">Jigar</text>

            {/* Fibroz chandiqlari */}
            {Array.from({ length: fibrosisCount }).map((_, i) => (
              <line
                key={i}
                x1={80 + (i * 20) % 240}
                y1={70 + Math.floor(i / 6) * 40}
                x2={95 + (i * 20) % 240}
                y2={85 + Math.floor(i / 6) * 40}
                stroke="#f8fafc"
                strokeWidth="3"
                opacity="0.8"
              />
            ))}

            {/* Kiruvchi virus zarrachalari */}
            {ph === "entry" && Array.from({ length: 4 }).map((_, i) => (
              <circle key={i} r="5" fill="#dc2626" opacity="0.85">
                <animateMotion dur="1.8s" repeatCount="indefinite" begin={`${i * 0.4}s`} path={`M ${20 + i * 10} ${30 + i * 15} L ${150 + i * 10} ${90 + i * 8}`} />
              </circle>
            ))}

            {/* Ko'payayotgan virus zarrachalari jigar ichida */}
            {(ph === "replicate" || ph === "acute" || ph === "chronic" || ph === "cirrhosis") && Array.from({ length: virusCount }).map((_, i) => {
              const ang = (i / Math.max(virusCount, 1)) * Math.PI * 2;
              return <circle key={i} cx={200 + Math.cos(ang) * 60} cy={120 + Math.sin(ang) * 45} r="4" fill="#dc2626" opacity="0.8" />;
            })}

            {/* Immun hujayralar hujumi */}
            {(ph === "replicate" || ph === "acute") && Array.from({ length: 5 }).map((_, i) => (
              <circle key={i} r="4" fill="#fbbf24" opacity="0.9">
                <animateMotion dur="1.3s" repeatCount="indefinite" begin={`${i * 0.2}s`} path={`M ${350} ${60 + i * 20} L ${210} ${100 + i * 10}`} />
              </circle>
            ))}

            {/* Sariqlik (jaundice) belgisi */}
            {showJaundice && (
              <>
                <circle cx="340" cy="200" r="16" fill="#fde047" opacity="0.85" />
                <text x="340" y="204" textAnchor="middle" fontSize="8" fill="#78350f" fontWeight="700">😐</text>
                <text x="340" y="225" textAnchor="middle" fontSize="9" fill="#ca8a04" fontWeight="700">Sariqlik</text>
              </>
            )}
          </svg>
        </div>

        <div className={`rounded-2xl p-4 mb-4 grid grid-cols-2 gap-3 ${glassCard(isDark)}`}>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className={`text-xs font-medium ${textSub(isDark)}`}>Jigar shikastlanishi</span>
              <span className="text-xs font-bold text-red-500">{current.damage}%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-500/10 rounded-full overflow-hidden">
              <div className="h-full bg-red-400 rounded-full transition-all duration-700" style={{ width: `${current.damage}%` }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className={`text-xs font-medium ${textSub(isDark)}`}>Virus darajasi</span>
              <span className="text-xs font-bold text-lime-600">{current.virusLevel}%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-500/10 rounded-full overflow-hidden">
              <div className="h-full bg-lime-500 rounded-full transition-all duration-700" style={{ width: `${current.virusLevel}%` }} />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.lime.chipDark : THEME.lime.chipLight}`}>Bosqich {stage + 1} / {LIVER_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="liver" stageIndex={stage} isDark={isDark} color="lime" />
        <AIExplain topicTitle="Gepatit / jigar ishi" stageTitle={current.title} stageDesc={current.desc} color="lime" isDark={isDark} />
        <GlossaryPanel topicKey="liver" isDark={isDark} color="lime" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="lime" isDark={isDark} />
        <StageControls index={stage} total={LIVER_STAGES.length} color="lime" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(LIVER_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("liver")} className={`btn-press w-full mt-4 ${THEME.lime.accent} ${THEME.lime.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- OSTEOARTRIT (BO'G'IM ISHI) ------------------------- */

function ArthritisScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= ARTHRITIS_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 3000);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = ARTHRITIS_STAGES[stage];
  const isLast = stage === ARTHRITIS_STAGES.length - 1;
  const ph = current.phase;
  const cartilageThickness = Math.max((current.cartilage / 100) * 18, 1);
  const showFriction = ph === "friction" || ph === "osteophytes" || ph === "inflamed";
  const showOsteophytes = ph === "osteophytes" || ph === "inflamed";
  const showInflammation = ph === "inflamed";

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="stone" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Osteoartrit (bo'g'im ishi)</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={ARTHRITIS_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="stone" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 400 240" className="w-full h-56">
            {/* Yallig'lanish shishi */}
            {showInflammation && <ellipse cx="200" cy="120" rx="150" ry="95" fill="#fca5a5" opacity="0.25" />}

            {/* Yuqori suyak */}
            <rect x="130" y="30" width="140" height="70" rx="18" fill="#e7e5e4" stroke="#a8a29e" strokeWidth="2" />
            <text x="200" y="22" textAnchor="middle" fontSize="10" fill="#64748b">Suyak (yuqori)</text>

            {/* Yuqori tog'ay qatlami */}
            <rect x="130" y={100 - cartilageThickness} width="140" height={cartilageThickness} rx="6" fill="#93c5fd" opacity="0.85" style={{ transition: "all 0.8s ease" }} />

            {/* Sinovial bo'shliq / ishqalanish */}
            {showFriction && (
              <>
                <line x1="150" y1="118" x2="170" y2="122" stroke="#dc2626" strokeWidth="2" opacity="0.8" />
                <line x1="200" y1="116" x2="220" y2="124" stroke="#dc2626" strokeWidth="2" opacity="0.8" />
                <line x1="240" y1="118" x2="255" y2="122" stroke="#dc2626" strokeWidth="2" opacity="0.8" />
              </>
            )}

            {/* Osteofitlar */}
            {showOsteophytes && (
              <>
                <polygon points="130,100 118,112 130,118" fill="#a8a29e" />
                <polygon points="270,100 282,112 270,118" fill="#a8a29e" />
                <polygon points="130,140 118,128 130,122" fill="#a8a29e" />
                <polygon points="270,140 282,128 270,122" fill="#a8a29e" />
              </>
            )}

            {/* Pastki tog'ay qatlami */}
            <rect x="130" y="140" width="140" height={cartilageThickness} rx="6" fill="#93c5fd" opacity="0.85" style={{ transition: "all 0.8s ease" }} />

            {/* Pastki suyak */}
            <rect x="130" y={140 + cartilageThickness} width="140" height="70" rx="18" fill="#e7e5e4" stroke="#a8a29e" strokeWidth="2" />
            <text x="200" y="228" textAnchor="middle" fontSize="10" fill="#64748b">Suyak (pastki)</text>

            <text x="300" y="120" fontSize="9" fill="#64748b">Tog'ay: {current.cartilage}%</text>
          </svg>
        </div>

        <div className={`rounded-2xl p-4 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className={`text-xs font-medium ${textSub(isDark)}`}>Tog'ay qalinligi</span>
            <span className="text-xs font-bold text-blue-500">{current.cartilage}%</span>
          </div>
          <div className="h-2.5 w-full bg-slate-500/10 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400 rounded-full transition-all duration-700" style={{ width: `${current.cartilage}%` }} />
          </div>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.stone.chipDark : THEME.stone.chipLight}`}>Bosqich {stage + 1} / {ARTHRITIS_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="arthritis" stageIndex={stage} isDark={isDark} color="stone" />
        <AIExplain topicTitle="Osteoartrit (bo'g'im ishi)" stageTitle={current.title} stageDesc={current.desc} color="stone" isDark={isDark} />
        <GlossaryPanel topicKey="arthritis" isDark={isDark} color="stone" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="stone" isDark={isDark} />
        <StageControls index={stage} total={ARTHRITIS_STAGES.length} color="stone" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(ARTHRITIS_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("arthritis")} className={`btn-press w-full mt-4 ${THEME.stone.accent} ${THEME.stone.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- KO'Z ISHI (KO'RISH JARAYONI) ------------------------- */

function EyeScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= EYE_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 2800);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = EYE_STAGES[stage];
  const isLast = stage === EYE_STAGES.length - 1;
  const ph = current.phase;
  const pupilR = 14 * current.pupilSize;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="yellow" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Ko'z ishi (ko'rish jarayoni)</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={EYE_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="yellow" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 460 220" className="w-full h-56">
            {/* Yorug'lik nurlari */}
            {(ph === "entry" || ph === "focus") && Array.from({ length: 3 }).map((_, i) => (
              <line key={i} x1="10" y1={70 + i * 30} x2="120" y2="110" stroke="#eab308" strokeWidth="2" opacity="0.7" />
            ))}
            {/* Kornea */}
            <path d="M 100 40 Q 60 110, 100 180" fill="none" stroke="#93c5fd" strokeWidth="4" />
            {/* Iris/pupilla */}
            <circle cx="120" cy="110" r="40" fill="#fef3c7" stroke="#d97706" strokeWidth="3" />
            <circle cx="120" cy="110" r={pupilR} fill="#1e293b" style={{ transition: "all 0.6s ease" }} />
            {/* Linza */}
            <ellipse cx="165" cy="110" rx="14" ry="34" fill="#bfdbfe" opacity="0.8" style={{ transition: "all 0.6s ease" }} />
            {/* Fokuslangan nur retinaga */}
            {(ph !== "entry") && <line x1="179" y1="110" x2="400" y2="110" stroke="#eab308" strokeWidth="2" opacity="0.6" />}
            {/* Ko'z shar ichi */}
            <path d="M 179 40 Q 400 40, 400 110 Q 400 180, 179 180 Z" fill="none" stroke="#94a3b8" strokeWidth="2" />
            {/* Retina */}
            <path d="M 395 45 Q 415 110, 395 175" fill="none" stroke={ph === "photoreceptor" || ph === "transmit" || ph === "brain" ? "#dc2626" : "#f87171"} strokeWidth="5" style={{ transition: "stroke 0.6s ease" }} />
            <text x="400" y="30" textAnchor="middle" fontSize="9" fill="#64748b">Retina</text>
            {/* Optik nerv va miya */}
            <line x1="405" y1="110" x2="450" y2="110" stroke={ph === "transmit" || ph === "brain" ? "#8b5cf6" : "#cbd5e1"} strokeWidth="4" style={{ transition: "stroke 0.6s ease" }} />
            {(ph === "transmit" || ph === "brain") && (
              <circle r="4" fill="#8b5cf6"><animateMotion dur="1s" repeatCount="indefinite" path="M 405 110 L 450 110" /></circle>
            )}
            <rect x="440" y="90" width="18" height="40" rx="8" fill={ph === "brain" ? "#8b5cf6" : "#e2e8f0"} style={{ transition: "fill 0.6s ease" }} />
            <text x="449" y="145" textAnchor="middle" fontSize="8" fill="#64748b">Miya</text>
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.yellow.chipDark : THEME.yellow.chipLight}`}>Bosqich {stage + 1} / {EYE_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="eye" stageIndex={stage} isDark={isDark} color="yellow" />
        <AIExplain topicTitle="Ko'z ishi (ko'rish jarayoni)" stageTitle={current.title} stageDesc={current.desc} color="yellow" isDark={isDark} />
        <GlossaryPanel topicKey="eye" isDark={isDark} color="yellow" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="yellow" isDark={isDark} />
        <StageControls index={stage} total={EYE_STAGES.length} color="yellow" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(EYE_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("eye")} className={`btn-press w-full mt-4 ${THEME.yellow.accent} ${THEME.yellow.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- YARA BITISHI ------------------------- */

function WoundScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= WOUND_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 3000);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = WOUND_STAGES[stage];
  const isLast = stage === WOUND_STAGES.length - 1;
  const ph = current.phase;
  const gapWidth = ph === "hemostasis" ? 50 : ph === "inflammation" ? 46 : ph === "proliferation" ? 30 : ph === "epithelialization" ? 12 : ph === "remodeling" ? 4 : 2;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="red" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Yara bitishi (regeneratsiya)</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={WOUND_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="red" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 460 200" className="w-full h-52">
            {/* Teri qatlamlari */}
            <rect x="20" y="40" width="420" height="30" fill="#fecaca" opacity="0.6" />
            <rect x="20" y="70" width="420" height="90" fill="#fca5a5" opacity="0.4" />
            <text x="30" y="30" fontSize="9" fill="#64748b">Epidermis</text>
            <text x="30" y="175" fontSize="9" fill="#64748b">Dermis</text>

            {/* Jarohat bo'shlig'i */}
            <polygon points={`${230 - gapWidth},40 ${230 + gapWidth},40 ${230 + gapWidth * 0.6},160 ${230 - gapWidth * 0.6},160`} fill={isDark ? "#1e293b" : "#fff1f2"} stroke="#dc2626" strokeWidth="1.5" style={{ transition: "all 0.8s ease" }} />

            {/* Trombotsit / qon ivishi */}
            {ph === "hemostasis" && Array.from({ length: 8 }).map((_, i) => (
              <circle key={i} cx={230 - gapWidth * 0.5 + (i % 4) * (gapWidth / 2)} cy={60 + Math.floor(i / 4) * 40} r="3.5" fill="#b91c1c" opacity="0.85" />
            ))}

            {/* Immun hujayralar */}
            {ph === "inflammation" && Array.from({ length: 6 }).map((_, i) => (
              <circle key={i} r="3.5" fill="#fbbf24" opacity="0.9"><animateMotion dur="1.4s" repeatCount="indefinite" begin={`${i * 0.2}s`} path={`M ${180 + i * 10} 30 L ${220 + i * 3} ${80 + i * 10}`} /></circle>
            ))}

            {/* Fibroblastlar / kollagen / angiogenez */}
            {ph === "proliferation" && Array.from({ length: 10 }).map((_, i) => (
              <circle key={i} cx={230 - gapWidth * 0.5 + (i % 5) * (gapWidth / 2.5)} cy={70 + Math.floor(i / 5) * 35} r="3" fill="#f87171" opacity="0.85" />
            ))}

            {/* Epitelizatsiya - yopiluvchi teri qatlami */}
            {ph === "epithelialization" && (
              <>
                <rect x={230 - gapWidth} y="38" width={gapWidth * 0.5} height="10" fill="#fca5a5" />
                <rect x={230 + gapWidth * 0.5} y="38" width={gapWidth * 0.5} height="10" fill="#fca5a5" />
              </>
            )}

            {/* Chandiq / remodellash */}
            {(ph === "remodeling" || ph === "scar") && (
              <line x1="230" y1="40" x2="230" y2="160" stroke={ph === "scar" ? "#f472b6" : "#fb7185"} strokeWidth="4" opacity="0.8" />
            )}
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.red.chipDark : THEME.red.chipLight}`}>Bosqich {stage + 1} / {WOUND_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="wound" stageIndex={stage} isDark={isDark} color="red" />
        <AIExplain topicTitle="Yara bitishi (regeneratsiya)" stageTitle={current.title} stageDesc={current.desc} color="red" isDark={isDark} />
        <GlossaryPanel topicKey="wound" isDark={isDark} color="red" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="red" isDark={isDark} />
        <StageControls index={stage} total={WOUND_STAGES.length} color="red" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(WOUND_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("wound")} className={`btn-press w-full mt-4 ${THEME.red.accent} ${THEME.red.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- HOMILADORLIK BOSQICHLARI ------------------------- */

function PregnancyScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= PREGNANCY_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 3000);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = PREGNANCY_STAGES[stage];
  const isLast = stage === PREGNANCY_STAGES.length - 1;
  const ph = current.phase;
  const embryoR = 8 * current.size;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="pink" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Homiladorlik bosqichlari</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={PREGNANCY_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="pink" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 400 220" className="w-full h-56">
            {/* Bachadon */}
            <path d="M 90 30 Q 60 100, 90 170 Q 200 200, 310 170 Q 340 100, 310 30 Q 200 10, 90 30 Z" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="2" />
            <text x="200" y="20" textAnchor="middle" fontSize="10" fill="#64748b">Bachadon</text>

            {/* Platsenta (fetal davrdan boshlab) */}
            {(ph === "fetal-growth" || ph === "birth-prep") && (
              <ellipse cx="140" cy="70" rx="30" ry="14" fill="#f472b6" opacity="0.5" />
            )}

            {/* Embrion/fetus */}
            {ph === "fertilization" ? (
              <circle cx="200" cy="100" r="6" fill="#ec4899" />
            ) : ph === "implantation" ? (
              <circle cx="200" cy="100" r={embryoR} fill="#f472b6" opacity="0.85" />
            ) : (
              <ellipse cx="210" cy="110" rx={embryoR} ry={embryoR * 1.15} fill="#f472b6" opacity="0.9" style={{ transition: "all 0.8s ease" }} />
            )}

            {/* Yurak urishi belgisi (organogenezdan boshlab) */}
            {(ph === "organogenesis" || ph === "fetal-growth" || ph === "birth-prep") && (
              <circle cx="210" cy="105" r="4" fill="#dc2626">
                <animate attributeName="r" values="3;5;3" dur="0.8s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Qo'l-oyoq kurtaklari */}
            {(ph === "organogenesis" || ph === "fetal-growth" || ph === "birth-prep") && (
              <>
                <circle cx={210 - embryoR - 5} cy={110 - embryoR * 0.3} r="4" fill="#f472b6" opacity="0.8" />
                <circle cx={210 + embryoR + 5} cy={110 - embryoR * 0.3} r="4" fill="#f472b6" opacity="0.8" />
              </>
            )}

            <text x="200" y="205" textAnchor="middle" fontSize="10" fill="#64748b">{current.subtitle}</text>
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.pink.chipDark : THEME.pink.chipLight}`}>Bosqich {stage + 1} / {PREGNANCY_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="pregnancy" stageIndex={stage} isDark={isDark} color="pink" />
        <AIExplain topicTitle="Homiladorlik bosqichlari" stageTitle={current.title} stageDesc={current.desc} color="pink" isDark={isDark} />
        <GlossaryPanel topicKey="pregnancy" isDark={isDark} color="pink" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="pink" isDark={isDark} />
        <StageControls index={stage} total={PREGNANCY_STAGES.length} color="pink" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(PREGNANCY_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("pregnancy")} className={`btn-press w-full mt-4 ${THEME.pink.accent} ${THEME.pink.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- MIGREN MEXANIZMI ------------------------- */

function MigraineScreen({ onBack, isDark, onToggleDark, onStartQuiz, initialStage, onStageChange }) {
  const [stage, setStage] = useState(initialStage || 0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => { if (onStageChange) onStageChange(stage); }, [stage]);
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => { setStage((s) => { if (s >= MIGRAINE_STAGES.length - 1) { setPlaying(false); return s; } return s + 1; }); }, 3000);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const current = MIGRAINE_STAGES[stage];
  const isLast = stage === MIGRAINE_STAGES.length - 1;
  const ph = current.phase;
  const vesselWidth = ph === "inflammation" || ph === "pain" ? 10 : ph === "trigeminal" ? 7 : 5;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="slate" isDark={isDark} />
      <div className="max-w-3xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-4">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Migren / bosh og'rig'i mexanizmi</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Bosqichma-bosqich animatsion tushuntirish</p>
        </div>

        <ProgressDots count={MIGRAINE_STAGES.length} index={stage} onSelect={(i) => { setPlaying(false); setStage(i); }} color="slate" />

        <div className={`rounded-2xl p-6 mb-4 overflow-hidden ${glassCard(isDark)}`}>
          <svg viewBox="0 0 400 220" className="w-full h-56">
            {/* Miya konturi */}
            <ellipse cx="200" cy="110" rx="150" ry="95" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />

            {/* Aura to'lqini */}
            {ph === "aura" && (
              <circle cx="130" cy="90" r="20" fill="none" stroke="#a855f7" strokeWidth="3" opacity="0.7">
                <animate attributeName="r" values="10;90;10" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.2s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Trigeminal nerv shoxlari */}
            <path d="M 200 110 L 260 70 M 200 110 L 270 110 M 200 110 L 260 150" fill="none" stroke={ph === "trigeminal" || ph === "inflammation" || ph === "pain" ? "#f59e0b" : "#cbd5e1"} strokeWidth="3" style={{ transition: "stroke 0.6s ease" }} />
            <text x="290" y="110" fontSize="9" fill="#64748b">Trigeminal nerv</text>

            {/* Qon tomirlari (miya pardasi) */}
            <path d="M 90 60 Q 200 30, 310 60" fill="none" stroke="#dc2626" strokeWidth={vesselWidth} opacity="0.7" style={{ transition: "all 0.8s ease" }} />
            <path d="M 90 160 Q 200 190, 310 160" fill="none" stroke="#dc2626" strokeWidth={vesselWidth} opacity="0.7" style={{ transition: "all 0.8s ease" }} />

            {/* CGRP zarrachalari */}
            {(ph === "trigeminal" || ph === "inflammation") && Array.from({ length: 6 }).map((_, i) => (
              <circle key={i} cx={230 + (i % 3) * 20} cy={70 + Math.floor(i / 3) * 80} r="3" fill="#fbbf24" opacity="0.9" />
            ))}

            {/* Og'riq pulsatsiyasi */}
            {(ph === "inflammation" || ph === "pain") && (
              <circle cx="200" cy="110" r="60" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" opacity="0.6">
                <animate attributeName="r" values="50;75;50" dur="1.2s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Sensitizatsiya belgisi */}
            {ph === "pain" && (
              <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="700">Yorug'lik/tovushga sezgirlik oshgan</text>
            )}
          </svg>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isDark ? THEME.slate.chipDark : THEME.slate.chipLight}`}>Bosqich {stage + 1} / {MIGRAINE_STAGES.length}</span>
            <span className={`text-xs ${textFaint(isDark)}`}>{current.subtitle}</span>
          </div>
          <h2 className={`text-lg font-bold mb-2 ${textMain(isDark)}`}>{current.title}</h2>
          <p className={`text-sm leading-relaxed ${textSub(isDark)}`}>{current.desc}</p>
        </div>

        <FactBox topicKey="migraine" stageIndex={stage} isDark={isDark} color="slate" />
        <AIExplain topicTitle="Migren / bosh og'rig'i mexanizmi" stageTitle={current.title} stageDesc={current.desc} color="slate" isDark={isDark} />
        <GlossaryPanel topicKey="migraine" isDark={isDark} color="slate" />

        <SpeakButton text={`${current.title}. ${current.desc}`} color="slate" isDark={isDark} />
        <StageControls index={stage} total={MIGRAINE_STAGES.length} color="slate" playing={playing} isDark={isDark}
          onPrev={() => { setPlaying(false); setStage((s) => Math.max(0, s - 1)); }}
          onNext={() => { setPlaying(false); setStage((s) => Math.min(MIGRAINE_STAGES.length - 1, s + 1)); }}
          onToggle={() => { if (isLast) { setStage(0); setPlaying(true); } else setPlaying((p) => { const next = !p; if (!next) speakText(`${current.title}. ${current.desc}`); else stopSpeaking(); return next; }); }}
          onReset={() => { setPlaying(false); setStage(0); }} />

        {isLast && (
          <button onClick={() => onStartQuiz("migraine")} className={`btn-press w-full mt-4 ${THEME.slate.accent} ${THEME.slate.accentHover} text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2`}>
            <Award className="w-4 h-4" /> Bilimni tekshirish
          </button>
        )}
        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>O'ynatish tugmasini bosing yoki nuqtalarni bosib bosqichlar orasida o'ting.</p>
      </div>
    </div>
  );
}

/* ------------------------- KIRISH (SPLASH) EKRANI ------------------------- */

function SplashScreen({ isDark, exiting }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1600;
    const timer = setInterval(() => {
      const pct = Math.min(100, Math.round(((Date.now() - start) / duration) * 100));
      setProgress(pct);
      if (pct >= 100) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${exiting ? "splash-exit" : ""} ${isDark ? "bg-slate-900" : "bg-gradient-to-br from-sky-50 via-white to-purple-50"}`}>
      <AnimatedBackground theme="sky" isDark={isDark} />
      <div className="flex flex-col items-center w-56">
        <div className="splash-icon mb-5"><Logo size={84} /></div>
        <svg viewBox="0 0 240 60" className="w-56 h-14 mb-2">
          <path d="M0 30 H70 L85 10 L100 50 L115 20 L130 40 L145 30 H240" fill="none" stroke="#0ea5e9" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="splash-line" />
        </svg>
        <h1 className={`splash-text text-xl font-bold ${textMain(isDark)}`}>MedAnim</h1>
        <p className={`splash-text text-xs mt-1.5 tracking-widest uppercase font-semibold ${isDark ? "text-sky-400" : "text-sky-600"}`}>By Mehruzbek</p>
        <div className="w-40 h-1.5 bg-slate-400/20 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-sky-500 rounded-full" style={{ width: `${progress}%`, transition: "width 0.1s linear" }} />
        </div>
        <p className={`splash-text text-xs mt-2 ${textSub(isDark)}`}>Yuklanmoqda... {progress}%</p>
      </div>
    </div>
  );
}

/* ------------------------- STATISTIKA ------------------------- */

function CountUp({ value, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let frame;
    const duration = 700;
    const start = Date.now();
    const from = 0;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(1, elapsed / duration);
      setDisplay(Math.round(from + (value - from) * pct));
      if (pct < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return <>{display}{suffix}</>;
}

function StatsScreen({ onBack, isDark, onToggleDark, progress, scores }) {
  const total = TOPICS.length;
  const completedCount = TOPICS.filter((t) => progress[t.key]).length;
  const attemptedTopics = TOPICS.filter((t) => scores[t.key]);
  const totalScore = attemptedTopics.reduce((sum, t) => sum + (scores[t.key]?.score || 0), 0);
  const totalPossible = attemptedTopics.reduce((sum, t) => sum + (scores[t.key]?.total || 0), 0);
  const overallPct = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="sky" isDark={isDark} />
      <div className="max-w-2xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-5">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Statistika</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Sizning o'quv jarayoningiz</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className={`rounded-2xl p-5 text-center ${glassCard(isDark)}`}>
            <Trophy className={`w-6 h-6 mx-auto mb-2 ${textMain(isDark)}`} />
            <p className={`text-2xl font-bold ${textMain(isDark)}`}><CountUp value={completedCount} suffix={` / ${total}`} /></p>
            <p className={`text-xs mt-1 ${textSub(isDark)}`}>Tugallangan mavzular</p>
          </div>
          <div className={`rounded-2xl p-5 text-center ${glassCard(isDark)}`}>
            <BarChart3 className={`w-6 h-6 mx-auto mb-2 ${textMain(isDark)}`} />
            <p className={`text-2xl font-bold ${textMain(isDark)}`}>{totalPossible > 0 ? <CountUp value={overallPct} suffix="%" /> : "—"}</p>
            <p className={`text-xs mt-1 ${textSub(isDark)}`}>O'rtacha viktorina natijasi</p>
          </div>
        </div>

        <div className={`rounded-2xl p-5 ${glassCard(isDark)}`}>
          <p className={`text-sm font-semibold mb-3 ${textMain(isDark)}`}>Mavzular bo'yicha</p>
          <div className="space-y-4">
            {TOPICS.map((t) => {
              const s = scores[t.key];
              const pct = s ? Math.round((s.score / s.total) * 100) : 0;
              const done = progress[t.key];
              return (
                <div key={t.key}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs font-medium ${textMain(isDark)}`}>{t.title}</span>
                      {done && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                    </div>
                    <span className={`text-xs ${textFaint(isDark)}`}>{s ? `${s.score}/${s.total}` : "Boshlanmagan"}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-500/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-700 ${THEME[t.color].accent}`} style={{ width: `${s ? pct : 0}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>Har mavzuda viktorinani yakunlaganingizda natijalar shu yerda yangilanadi.</p>
      </div>
    </div>
  );
}

/* ------------------------- TESTLAR BO'LIMI ------------------------- */

function TestsScreen({ onBack, isDark, onToggleDark, scores, onStartQuiz }) {
  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="sky" isDark={isDark} />
      <div className="max-w-2xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-5">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Testlar bo'limi</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Har mavzu bo'yicha bilimingizni bevosita tekshiring</p>
        </div>

        <div className="space-y-3">
          {TOPICS.map((t) => {
            const Icon = t.icon;
            const s = scores[t.key];
            const pct = s ? Math.round((s.score / s.total) * 100) : null;
            const qCount = (QUIZZES[t.key] || []).length;
            return (
              <div key={t.key} className={`rounded-2xl p-4 flex items-center gap-3 ${glassCard(isDark)}`}>
                <div className={`${THEME[t.color].accent} p-2.5 rounded-xl flex-shrink-0 shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-bold truncate ${textMain(isDark)}`}>{t.title}</p>
                  <p className={`text-xs mt-0.5 ${textFaint(isDark)}`}>
                    {qCount} savol {s ? `· Eng yaxshi natija: ${s.score}/${s.total} (${pct}%)` : "· Hali topshirilmagan"}
                  </p>
                </div>
                <button
                  onClick={() => onStartQuiz(t.key)}
                  className={`btn-press flex-shrink-0 ${THEME[t.color].accent} ${THEME[t.color].accentHover} text-white text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-1`}
                >
                  {s ? "Qayta topshirish" : "Boshlash"}
                </button>
              </div>
            );
          })}
        </div>

        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>Testlarni istalgan tartibda, mavzuni to'liq ko'rmasdan ham topshirishingiz mumkin.</p>
      </div>
    </div>
  );
}

/* ------------------------- SOZLAMALAR ------------------------- */

function SettingsScreen({ onBack, isDark, onToggleDark, username, onSaveUsername, onResetProgress, onResetAll, onOpenPrivacy }) {
  const [nameInput, setNameInput] = useState(username || "");
  const [saved, setSaved] = useState(false);
  const [confirmReset, setConfirmReset] = useState(null);

  const handleSaveName = () => {
    onSaveUsername(nameInput.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const runReset = (type) => {
    if (type === "progress") onResetProgress();
    else onResetAll();
    setConfirmReset(null);
  };

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="sky" isDark={isDark} />
      <div className="max-w-2xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-5">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Sozlamalar</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>Profil va ma'lumotlarni boshqarish</p>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-center gap-2 mb-3">
            <div className={`${THEME.sky.accent} p-1.5 rounded-lg`}><User className="w-3.5 h-3.5 text-white" /></div>
            <span className={`text-sm font-semibold ${textMain(isDark)}`}>Ismingiz</span>
          </div>
          <div className="flex gap-2">
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Ismingizni kiriting..."
              className={`flex-1 px-3 py-2.5 rounded-xl text-sm outline-none border ${isDark ? "bg-slate-700/40 border-slate-600 text-slate-100 placeholder:text-slate-500" : "bg-white/60 border-slate-200 text-slate-700 placeholder:text-slate-400"}`}
            />
            <button onClick={handleSaveName} className={`btn-press ${THEME.sky.accent} ${THEME.sky.accentHover} text-white px-4 rounded-xl text-sm font-medium flex items-center gap-1.5`}>
              {saved ? <Check className="w-4 h-4" /> : "Saqlash"}
            </button>
          </div>
          <p className={`text-xs mt-2 ${textFaint(isDark)}`}>Bosh sahifada "Salom, {nameInput || "..."}" tarzida ko'rinadi.</p>
        </div>

        <div className={`rounded-2xl p-5 ${glassCard(isDark)}`}>
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-red-500 p-1.5 rounded-lg"><Trash2 className="w-3.5 h-3.5 text-white" /></div>
            <span className={`text-sm font-semibold ${textMain(isDark)}`}>Ma'lumotlarni tozalash</span>
          </div>

          <div className="space-y-2.5">
            <div className={`p-3 rounded-xl ${isDark ? "bg-slate-700/30" : "bg-slate-100/60"}`}>
              <p className={`text-xs font-medium mb-1 ${textMain(isDark)}`}>Progress va natijalarni tozalash</p>
              <p className={`text-xs mb-2 ${textSub(isDark)}`}>Tugallangan mavzular, viktorina natijalari va oxirgi ko'rilgan bosqichlar o'chiriladi.</p>
              {confirmReset === "progress" ? (
                <div className="flex gap-2">
                  <button onClick={() => runReset("progress")} className="btn-press bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Tasdiqlash</button>
                  <button onClick={() => setConfirmReset(null)} className={`btn-press text-xs px-3 py-1.5 rounded-lg ${glassCard(isDark)} ${textMain(isDark)}`}>Bekor qilish</button>
                </div>
              ) : (
                <button onClick={() => setConfirmReset("progress")} className="text-xs text-red-500 font-medium">Tozalash →</button>
              )}
            </div>

            <div className={`p-3 rounded-xl ${isDark ? "bg-slate-700/30" : "bg-slate-100/60"}`}>
              <p className={`text-xs font-medium mb-1 ${textMain(isDark)}`}>Barcha ma'lumotlarni tozalash</p>
              <p className={`text-xs mb-2 ${textSub(isDark)}`}>Ism, streak va barcha progress — hammasi o'chiriladi. Bu amalni bekor qilib bo'lmaydi.</p>
              {confirmReset === "all" ? (
                <div className="flex gap-2">
                  <button onClick={() => runReset("all")} className="btn-press bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Tasdiqlash</button>
                  <button onClick={() => setConfirmReset(null)} className={`btn-press text-xs px-3 py-1.5 rounded-lg ${glassCard(isDark)} ${textMain(isDark)}`}>Bekor qilish</button>
                </div>
              ) : (
                <button onClick={() => setConfirmReset("all")} className="text-xs text-red-500 font-medium">Tozalash →</button>
              )}
            </div>
          </div>
        </div>

        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>
          Ma'lumotlar faqat shu qurilma/hisobingizda saqlanadi. <button onClick={onOpenPrivacy} className={`underline font-medium ${isDark ? "text-sky-400" : "text-sky-600"}`}>Maxfiylik siyosati</button>
        </p>
      </div>
    </div>
  );
}

/* ------------------------- MAXFIYLIK SIYOSATI ------------------------- */

function PrivacyScreen({ onBack, isDark, onToggleDark }) {
  const sections = [
    { title: "1. Umumiy qoidalar", body: "Ushbu Maxfiylik siyosati MedAnim ta'lim ilovasi (\"Ilova\") foydalanuvchilarining shaxsiy ma'lumotlari qanday to'planishi, saqlanishi va ishlatilishini tavsiflaydi. Ilovadan foydalanish orqali siz ushbu siyosat shartlariga rozilik bildirasiz." },
    { title: "2. Qanday ma'lumotlar to'planadi", body: "Ilova quyidagi ma'lumotlarni saqlashi mumkin: siz kiritgan ism (ixtiyoriy), ko'rilgan mavzular va bosqichlar bo'yicha progress, viktorina natijalari va kunlik faollik (streak). Ilova ismingizni tasdiqlash yoki hisob yaratishni talab qilmaydi." },
    { title: "3. Ma'lumotlar qayerda saqlanadi", body: "Barcha progress va shaxsiy sozlamalar faqat sizning hisobingizga bog'liq holda mahalliy saqlash tizimida saqlanadi. Ma'lumotlar uchinchi tomon reklama kompaniyalariga sotilmaydi yoki ulashilmaydi." },
    { title: "4. Sun'iy intellekt (AI) funksiyasi", body: "\"AI orqali qo'shimcha tushuntirish\" tugmasidan foydalanganingizda, joriy mavzu va bosqich matni tahlil va tushuntirish yaratish maqsadida AI xizmatiga (Anthropic Claude) yuboriladi. Bu so'rovlarda shaxsingizni aniqlovchi ma'lumotlar (ism, progress) yuborilmaydi." },
    { title: "5. Ovozli o'qish (Text-to-Speech)", body: "\"Ovozda tinglash\" funksiyasi qurilmangizning o'z brauzer texnologiyasidan foydalanadi va matn hech qayerga yuborilmaydi — bu funksiya to'liq qurilmangiz ichida ishlaydi." },
    { title: "6. Voyaga yetmaganlar", body: "Ilova talabalar uchun ta'lim maqsadida yaratilgan bo'lib, tibbiy tashxis yoki davolash tavsiyasi sifatida ishlatilmasligi kerak. Har qanday tibbiy qaror uchun malakali shifokorga murojaat qiling." },
    { title: "7. Ma'lumotlarni o'chirish", body: "Sozlamalar bo'limidagi \"Ma'lumotlarni tozalash\" orqali istalgan vaqtda progress, natijalar yoki barcha shaxsiy ma'lumotlaringizni butunlay o'chirib tashlashingiz mumkin." },
    { title: "8. O'zgarishlar", body: "Ushbu siyosat vaqti-vaqti bilan yangilanishi mumkin. Ilovadan foydalanishni davom ettirish yangilangan shartlarga rozilik sifatida qabul qilinadi." },
  ];

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="sky" isDark={isDark} />
      <div className="max-w-2xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />
        <div className="text-center mb-5">
          <h1 className={`text-2xl font-bold ${textMain(isDark)}`}>Maxfiylik siyosati</h1>
          <p className={`text-sm mt-1 ${textSub(isDark)}`}>MedAnim ta'lim platformasi</p>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="space-y-4">
            {sections.map((s) => (
              <div key={s.title}>
                <p className={`text-sm font-bold mb-1 ${textMain(isDark)}`}>{s.title}</p>
                <p className={`text-xs leading-relaxed ${textSub(isDark)}`}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <p className={`text-center text-xs mt-2 pb-4 ${textFaint(isDark)}`}>So'nggi yangilanish: 2026-yil. MedAnim — By Mehruzbek.</p>
      </div>
    </div>
  );
}

/* ------------------------- BIZ HAQIMIZDA / CAMU ------------------------- */

function AboutScreen({ onBack, isDark, onToggleDark }) {
  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="sky" isDark={isDark} />
      <div className="max-w-2xl mx-auto">
        <ScreenHeader onBack={onBack} isDark={isDark} onToggleDark={onToggleDark} />

        <div className="rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-blue-800 via-blue-700 to-emerald-600 p-6 text-center">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            🎓 Talaba tashabbusi
          </span>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-white rounded-2xl p-2 shadow-lg"><Logo size={56} /></div>
            <span className="text-white/70 text-xl">×</span>
            <CamuBadge size={64} showTitle />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">MedAnim × CAMU</h1>
          <p className="text-sm text-white/85 leading-relaxed max-w-sm mx-auto">
            Central Asian Medical University talabasi tomonidan, talabalarga tibbiyotni sodda va vizual tarzda o'rgatish tashabbusi bilan yaratilgan ta'lim ilovasi.
          </p>
        </div>

        <div className={`rounded-2xl p-5 mb-4 ${glassCard(isDark)}`}>
          <div className="flex items-start gap-4">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg ring-4 ring-blue-500/20">
                <span className="text-white font-extrabold text-2xl">M</span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1 border-2 border-white">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <p className={`font-bold ${textMain(isDark)}`}>Mehruzbek</p>
                <span className="inline-flex items-center gap-1 bg-emerald-500/15 text-emerald-500 text-[10px] font-semibold px-2 py-0.5 rounded-full">🎓 CAMU talabasi</span>
              </div>
              <p className={`text-xs mt-1 ${textFaint(isDark)}`}>Central Asian Medical University · Farg'ona</p>
              <p className={`text-xs leading-relaxed mt-2 ${textSub(isDark)}`}>
                MedAnim shaxsiy tashabbus sifatida, tibbiyot fanlarini o'zi o'rganish jarayonida o'rtoqlashish va boshqa talabalarga yordam berish maqsadida yaratildi.
              </p>
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-5 ${glassCard(isDark)}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🎯</span>
            <p className={`text-base font-bold ${textMain(isDark)}`}>Bizning maqsad</p>
          </div>
          <div className={`h-1 w-12 rounded-full mb-3 bg-gradient-to-r from-blue-600 to-emerald-500`} />
          <p className={`text-xs leading-relaxed ${textSub(isDark)}`}>
            Murakkab fiziologik va patologik jarayonlarni talabalar uchun animatsiya, AI yordamida qo'shimcha tushuntirish va interaktiv viktorinalar orqali sodda va yodda qolarli tarzda yetkazish. MedAnim rasmiy CAMU mahsuloti emas — bu talabaning shaxsiy ta'lim loyihasi.
          </p>
        </div>

        <p className={`text-center text-xs mt-6 pb-4 ${textFaint(isDark)}`}>MedAnim — By Mehruzbek, 2026</p>
      </div>
    </div>
  );
}

/* ------------------------- BOSH SAHIFA ------------------------- */

function HomeScreen({ onSelect, onOpenStats, onOpenSettings, onOpenPrivacy, onOpenAbout, onOpenTests, isDark, onToggleDark, progress, lastStages, username, streak, favorites, onToggleFavorite }) {
  const [query, setQuery] = useState("");
  const [favOnly, setFavOnly] = useState(false);
  const completedCount = TOPICS.filter((t) => progress[t.key]).length;

  const filtered = TOPICS
    .filter((t) => t.title.toLowerCase().includes(query.toLowerCase()))
    .filter((t) => !favOnly || favorites[t.key])
    .slice()
    .sort((a, b) => (favorites[b.key] ? 1 : 0) - (favorites[a.key] ? 1 : 0));

  return (
    <div className="min-h-screen p-4 page-enter">
      <AnimatedBackground theme="sky" isDark={isDark} />
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3 pt-4">
          <div className="flex items-center gap-2 min-w-0">
            <Logo size={38} />
            <h1 className={`text-xl font-bold truncate ${textMain(isDark)}`}>MedAnim</h1>
          </div>
          <DarkToggle isDark={isDark} onToggle={onToggleDark} />
        </div>

        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-0.5" style={{ scrollbarWidth: "none" }}>
          <button onClick={onOpenTests} className={`btn-press flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap ${glassCard(isDark)} ${textMain(isDark)}`}>
            <ClipboardList className="w-3.5 h-3.5" /> Testlar
          </button>
          <button onClick={onOpenStats} className={`btn-press flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap ${glassCard(isDark)} ${textMain(isDark)}`}>
            <BarChart3 className="w-3.5 h-3.5" /> Statistika
          </button>
          <button onClick={onOpenSettings} className={`btn-press flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap ${glassCard(isDark)} ${textMain(isDark)}`}>
            <Settings className="w-3.5 h-3.5" /> Sozlamalar
          </button>
          <button
            onClick={() => setFavOnly((f) => !f)}
            className={`btn-press flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${favOnly ? "bg-amber-400 text-white" : `${glassCard(isDark)} ${textMain(isDark)}`}`}
          >
            <Star className="w-3.5 h-3.5" fill={favOnly ? "white" : "none"} /> Sevimlilar
          </button>
        </div>

        <p className={`text-lg font-semibold mb-0.5 ml-1 ${textMain(isDark)}`}>
          Salom{username ? `, ${username}` : ""}! 👋
        </p>
        <p className={`text-sm mb-2 ml-1 ${textSub(isDark)}`}>Talabalar uchun animatsion tibbiy ta'lim mavzulari</p>

        <div className="flex items-center gap-2 ml-1 mb-4">
          <button onClick={onOpenStats} className={`text-xs font-medium ${isDark ? "text-sky-400" : "text-sky-600"}`}>
            {completedCount} / {TOPICS.length} mavzu tugallandi →
          </button>
          {streak > 0 && (
            <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${isDark ? "bg-orange-500/20 text-orange-300" : "bg-orange-50 text-orange-600"}`}>
              <Flame className="w-3 h-3" /> {streak} kun
            </span>
          )}
        </div>

        <div className={`flex items-center gap-2 rounded-xl px-3 py-2.5 mb-4 transition-all focus-within:ring-2 focus-within:ring-sky-400/50 ${glassCard(isDark)}`}>
          <Search className={`w-4 h-4 flex-shrink-0 ${textFaint(isDark)}`} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Mavzu qidirish..."
            className={`w-full bg-transparent text-sm outline-none ${textMain(isDark)} placeholder:${textFaint(isDark)}`}
          />
        </div>

        {/* CAMU banner */}
        <div className="w-full rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-blue-800 via-blue-700 to-emerald-600 p-5">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3">
            🎓 Talaba tashabbusi
          </span>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white rounded-xl p-1.5 shadow-md"><Logo size={36} /></div>
            <span className="text-white/70 text-lg">×</span>
            <CamuBadge size={48} />
            <div className="flex-1">
              <p className="text-white font-bold text-sm leading-tight">MedAnim × CAMU</p>
              <p className="text-white/75 text-[11px] mt-0.5">Central Asian Medical University talabasi loyihasi</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => { if (onOpenAbout) onOpenAbout(); }}
            className="btn-press w-full bg-white/15 hover:bg-white/25 text-white text-sm font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5"
          >
            Batafsil <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {filtered.map((t) => {
            const Icon = t.icon;
            const done = progress[t.key];
            const lastIdx = lastStages ? lastStages[t.key] : undefined;
            const count = STAGE_COUNTS[t.key] || 1;
            const pct = done ? 100 : lastIdx != null ? Math.round(((lastIdx + 1) / count) * 100) : 0;
            return (
              <div key={t.key} className={`w-full rounded-2xl p-5 flex items-center gap-4 card-hover ${isDark ? THEME[t.color].cardDark : THEME[t.color].cardLight} backdrop-blur-xl shadow-lg`}>
                <button onClick={() => onSelect(t.key)} className="flex items-center gap-4 flex-1 text-left min-w-0">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    {pct > 0 && <div key={pct} className="ring-pop absolute inset-0"><ProgressRing pct={pct} colorHex={COLOR_HEX[t.color]} /></div>}
                    <div className={`${THEME[t.color].accent} w-10 h-10 m-2 rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h2 className={`font-bold ${textMain(isDark)}`}>{t.title}</h2>
                      {done && <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />}
                    </div>
                    <p className={`text-xs mt-0.5 ${textSub(isDark)}`}>{t.subtitle}</p>
                    {pct > 0 && !done && <p className={`text-[10px] mt-0.5 font-medium ${textFaint(isDark)}`}>{pct}% ko'rilgan</p>}
                  </div>
                </button>
                <button onClick={() => onToggleFavorite(t.key)} className="btn-press flex-shrink-0 p-1.5">
                  <Star className={`w-5 h-5 ${favorites[t.key] ? "text-amber-400" : textFaint(isDark)}`} fill={favorites[t.key] ? "#fbbf24" : "none"} />
                </button>
                <ChevronRight className={`w-5 h-5 flex-shrink-0 ${textFaint(isDark)}`} />
              </div>
            );
          })}
          {filtered.length === 0 && (
            <p className={`text-center text-sm py-6 ${textFaint(isDark)}`}>Mavzu topilmadi.</p>
          )}

          <div className={`w-full rounded-2xl border border-dashed p-5 flex items-center gap-4 ${isDark ? "border-slate-700 text-slate-500" : "border-slate-300 text-slate-400"}`}>
            <div className={`p-3 rounded-xl flex-shrink-0 ${isDark ? "bg-slate-800" : "bg-slate-200"}`}><Stethoscope className="w-6 h-6" /></div>
            <div className="flex-1">
              <h2 className="font-medium text-sm">Yangi mavzular tez orada</h2>
              <p className="text-xs mt-0.5">Qo'shimcha mavzu qo'shishni so'rashingiz mumkin</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-400/20">
          <div className="flex items-center gap-2 mb-3">
            <Logo size={28} />
            <span className={`font-bold ${textMain(isDark)}`}>MedAnim</span>
          </div>
          <p className={`text-xs leading-relaxed mb-5 max-w-sm ${textSub(isDark)}`}>Talabalar uchun animatsion tibbiy ta'lim platformasi. Fundamental fanlarni sodda va vizual tarzda o'rganing.</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className={`text-[11px] font-bold tracking-wide mb-2 ${textFaint(isDark)}`}>BO'LIMLAR</p>
              <div className="space-y-1.5">
                {TOPICS.slice(0, 5).map((t) => (
                  <button key={t.key} onClick={() => onSelect(t.key)} className={`block text-xs text-left transition-colors hover:${isDark ? "text-slate-200" : "text-slate-700"} ${textSub(isDark)}`}>{t.title}</button>
                ))}
              </div>
            </div>
            <div>
              <p className={`text-[11px] font-bold tracking-wide mb-2 ${textFaint(isDark)}`}>PLATFORMA</p>
              <div className="space-y-1.5">
                <button onClick={onOpenAbout} className={`block text-xs text-left ${textSub(isDark)}`}>Biz haqimizda</button>
                <button onClick={onOpenTests} className={`block text-xs text-left ${textSub(isDark)}`}>Testlar</button>
                <button onClick={onOpenStats} className={`block text-xs text-left ${textSub(isDark)}`}>Statistika</button>
                <button onClick={onOpenSettings} className={`block text-xs text-left ${textSub(isDark)}`}>Sozlamalar</button>
                <button onClick={onOpenSettings} className={`block text-xs text-left ${textSub(isDark)}`}>Profilim</button>
                <button onClick={onOpenPrivacy} className={`block text-xs text-left ${textSub(isDark)}`}>Maxfiylik siyosati</button>
              </div>
            </div>
          </div>

          <div className={`pt-4 border-t border-slate-400/20 text-center text-[11px] ${textFaint(isDark)}`}>
            © 2026 MedAnim · By Mehruzbek
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------- ASOSIY ILOVA ------------------------- */

export default function DoctorAnimation() {
  const [screen, setScreen] = useState("home");
  const [quizTopic, setQuizTopic] = useState(null);
  const [quizReturn, setQuizReturn] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashExiting, setSplashExiting] = useState(false);
  const [progress, setProgress] = useState({});
  const [lastStages, setLastStages] = useState({});
  const [scores, setScores] = useState({});
  const [username, setUsername] = useState("");
  const [streak, setStreak] = useState(0);
  const [favorites, setFavorites] = useState({});
  const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);
  const toggleDark = () => setIsDark((d) => !d);

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  useEffect(() => {
    const exitTimer = setTimeout(() => setSplashExiting(true), 1600);
    const removeTimer = setTimeout(() => setShowSplash(false), 2100);
    (async () => {
      try {
        const res = await window.storage.get("medanim-progress", false);
        if (res && res.value) setProgress(JSON.parse(res.value));
      } catch (e) { /* birinchi marta ishlatilmoqda */ }
      try {
        const res2 = await window.storage.get("medanim-laststage", false);
        if (res2 && res2.value) setLastStages(JSON.parse(res2.value));
      } catch (e) { /* birinchi marta ishlatilmoqda */ }
      try {
        const res3 = await window.storage.get("medanim-scores", false);
        if (res3 && res3.value) setScores(JSON.parse(res3.value));
      } catch (e) { /* birinchi marta ishlatilmoqda */ }
      try {
        const res4 = await window.storage.get("medanim-username", false);
        if (res4 && res4.value) setUsername(res4.value);
      } catch (e) { /* birinchi marta ishlatilmoqda */ }
      try {
        const resFav = await window.storage.get("medanim-favorites", false);
        if (resFav && resFav.value) setFavorites(JSON.parse(resFav.value));
      } catch (e) { /* birinchi marta ishlatilmoqda */ }
      try {
        const today = new Date().toISOString().slice(0, 10);
        const res5 = await window.storage.get("medanim-streak", false);
        let data = res5 && res5.value ? JSON.parse(res5.value) : { lastDate: null, streak: 0 };
        if (data.lastDate !== today) {
          const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          const newStreak = data.lastDate === yesterday ? data.streak + 1 : 1;
          data = { lastDate: today, streak: newStreak };
          await window.storage.set("medanim-streak", JSON.stringify(data), false);
        }
        setStreak(data.streak);
      } catch (e) { /* birinchi marta ishlatilmoqda */ }
    })();
    return () => { clearTimeout(exitTimer); clearTimeout(removeTimer); };
  }, []);

  const saveUsername = async (name) => {
    setUsername(name);
    try { await window.storage.set("medanim-username", name, false); } catch (e) { /* saqlashda xatolik */ }
  };

  const toggleFavorite = (key) => {
    setFavorites((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      if (!updated[key]) delete updated[key];
      window.storage.set("medanim-favorites", JSON.stringify(updated), false).catch(() => {});
      return updated;
    });
  };

  const resetProgress = async () => {
    setProgress({}); setLastStages({}); setScores({});
    try {
      await window.storage.set("medanim-progress", JSON.stringify({}), false);
      await window.storage.set("medanim-laststage", JSON.stringify({}), false);
      await window.storage.set("medanim-scores", JSON.stringify({}), false);
    } catch (e) { /* saqlashda xatolik */ }
  };

  const resetAll = async () => {
    setProgress({}); setLastStages({}); setScores({}); setUsername(""); setStreak(0);
    try {
      await window.storage.set("medanim-progress", JSON.stringify({}), false);
      await window.storage.set("medanim-laststage", JSON.stringify({}), false);
      await window.storage.set("medanim-scores", JSON.stringify({}), false);
      await window.storage.set("medanim-username", "", false);
      await window.storage.set("medanim-streak", JSON.stringify({ lastDate: null, streak: 0 }), false);
    } catch (e) { /* saqlashda xatolik */ }
  };

  const markComplete = async (key) => {
    const updated = { ...progress, [key]: true };
    setProgress(updated);
    try { await window.storage.set("medanim-progress", JSON.stringify(updated), false); } catch (e) { /* saqlashda xatolik */ }
  };

  const saveScore = async (key, score, total) => {
    setScores((prev) => {
      const existing = prev[key];
      if (existing && existing.score >= score) return prev;
      const updated = { ...prev, [key]: { score, total } };
      window.storage.set("medanim-scores", JSON.stringify(updated), false).catch(() => {});
      return updated;
    });
  };

  const saveStage = (key, idx) => {
    setLastStages((prev) => {
      if (prev[key] === idx) return prev;
      const updated = { ...prev, [key]: idx };
      window.storage.set("medanim-laststage", JSON.stringify(updated), false).catch(() => {});
      return updated;
    });
  };

  const startQuiz = (key, returnTo = "home") => { setQuizTopic(key); setQuizReturn(returnTo); setScreen("quiz"); };
  const backHome = () => { setScreen("home"); setQuizTopic(null); };
  const backFromQuiz = () => { setScreen(quizReturn); setQuizTopic(null); };

  return (
    <>
      <GlobalStyles />
      <OfflineBanner show={!isOnline} />
      {showSplash && <SplashScreen isDark={isDark} exiting={splashExiting} />}
      {screen === "athero" && <AtherosclerosisScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.athero} onStageChange={(i) => saveStage("athero", i)} />}
      {screen === "cycle" && <CycleScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.cycle} onStageChange={(i) => saveStage("cycle", i)} />}
      {screen === "stroke" && <StrokeScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.stroke} onStageChange={(i) => saveStage("stroke", i)} />}
      {screen === "diabetes" && <DiabetesScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.diabetes} onStageChange={(i) => saveStage("diabetes", i)} />}
      {screen === "synapse" && <SynapseScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.synapse} onStageChange={(i) => saveStage("synapse", i)} />}
      {screen === "allergy" && <AllergyScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.allergy} onStageChange={(i) => saveStage("allergy", i)} />}
      {screen === "asthma" && <AsthmaScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.asthma} onStageChange={(i) => saveStage("asthma", i)} />}
      {screen === "kidney" && <KidneyScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.kidney} onStageChange={(i) => saveStage("kidney", i)} />}
      {screen === "vaccine" && <VaccineScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.vaccine} onStageChange={(i) => saveStage("vaccine", i)} />}
      {screen === "cardiac" && <CardiacScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.cardiac} onStageChange={(i) => saveStage("cardiac", i)} />}
      {screen === "thyroid" && <ThyroidScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.thyroid} onStageChange={(i) => saveStage("thyroid", i)} />}
      {screen === "liver" && <LiverScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.liver} onStageChange={(i) => saveStage("liver", i)} />}
      {screen === "arthritis" && <ArthritisScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.arthritis} onStageChange={(i) => saveStage("arthritis", i)} />}
      {screen === "eye" && <EyeScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.eye} onStageChange={(i) => saveStage("eye", i)} />}
      {screen === "wound" && <WoundScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.wound} onStageChange={(i) => saveStage("wound", i)} />}
      {screen === "pregnancy" && <PregnancyScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.pregnancy} onStageChange={(i) => saveStage("pregnancy", i)} />}
      {screen === "migraine" && <MigraineScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} onStartQuiz={startQuiz} initialStage={lastStages.migraine} onStageChange={(i) => saveStage("migraine", i)} />}
      {screen === "quiz" && quizTopic && (
        <QuizScreen
          topicKey={quizTopic}
          color={TOPICS.find((t) => t.key === quizTopic)?.color || "sky"}
          isDark={isDark}
          onBack={backFromQuiz}
          onToggleDark={toggleDark}
          onFinish={(score, total) => { saveScore(quizTopic, score, total); if (score === total) markComplete(quizTopic); }}
        />
      )}
      {screen === "stats" && <StatsScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} progress={progress} scores={scores} />}
      {screen === "tests" && <TestsScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} scores={scores} onStartQuiz={(key) => startQuiz(key, "tests")} />}
      {screen === "settings" && (
        <SettingsScreen
          onBack={backHome}
          isDark={isDark}
          onToggleDark={toggleDark}
          username={username}
          onSaveUsername={saveUsername}
          onResetProgress={resetProgress}
          onResetAll={resetAll}
          onOpenPrivacy={() => setScreen("privacy")}
        />
      )}
      {screen === "privacy" && <PrivacyScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} />}
      {screen === "about" && <AboutScreen onBack={backHome} isDark={isDark} onToggleDark={toggleDark} />}
      {screen === "home" && (
        <HomeScreen
          onSelect={setScreen}
          onOpenStats={() => setScreen("stats")}
          onOpenSettings={() => setScreen("settings")}
          onOpenPrivacy={() => setScreen("privacy")}
          onOpenAbout={() => setScreen("about")}
          onOpenTests={() => setScreen("tests")}
          isDark={isDark}
          onToggleDark={toggleDark}
          progress={progress}
          lastStages={lastStages}
          username={username}
          streak={streak}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </>
  );
}