import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle, Info, Calendar, Check, Trash2, Clock, X } from "lucide-react";

const trimesterData = [
  {
    id: "first",
    name: "First Trimester",
    weeks: "Weeks 1–13",
    emoji: "🌱",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    badgeColor: "bg-pink-100 text-pink-700",
    dotColor: "bg-pink-400",
    lineColor: "bg-pink-200",
    visitSchedule: "Every 4 weeks",
    sections: [
      {
        title: "First Prenatal Visit",
        icon: "🩺",
        type: "visit",
        items: [
          { name: "Medical history review", detail: "Periods, past pregnancies, medicines, lifestyle habits" },
          { name: "Physical exam", detail: "Weight, height, BMI, breast & pelvic exam, Pap test if needed" },
          { name: "Due date calculation", detail: "Based on last period + early ultrasound if needed" },
          { name: "Lifestyle counseling", detail: "Nutrition, prenatal vitamins, exercise, travel, work safety" },
        ],
      },
      {
        title: "Blood & Urine Tests",
        icon: "🧪",
        type: "lab",
        items: [
          { name: "Blood type & Rh factor", detail: "Determines if Rh treatment is needed", important: true },
          { name: "Hemoglobin (iron level)", detail: "Low levels indicate anemia — causes tiredness" },
          { name: "Rubella & Chickenpox immunity", detail: "Checks if you're protected against these infections" },
          { name: "Hepatitis B, HIV, Syphilis", detail: "Routine infection screening for baby's safety", important: true },
          { name: "Gonorrhea & Chlamydia", detail: "STI screening — treatable if caught early" },
          { name: "Urinary tract infection (UTI)", detail: "Urine culture to detect silent UTIs" },
        ],
      },
      {
        title: "Baby Health Screening",
        icon: "👶",
        type: "screening",
        optional: true,
        items: [
          { name: "Genetic blood tests", detail: "Screens for Down syndrome, Trisomy 18, neural tube defects" },
          { name: "First trimester ultrasound", detail: "Nuchal translucency scan — measures fluid at back of baby's neck" },
          { name: "Cell-free DNA (cfDNA)", detail: "Checks baby's DNA in mom's blood — highly accurate screening" },
        ],
      },
    ],
  },
  {
    id: "second",
    name: "Second Trimester",
    weeks: "Weeks 14–27",
    emoji: "🌸",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    badgeColor: "bg-purple-100 text-purple-700",
    dotColor: "bg-purple-400",
    lineColor: "bg-purple-200",
    visitSchedule: "Every 4 weeks",
    sections: [
      {
        title: "At Every Visit",
        icon: "📋",
        type: "visit",
        items: [
          { name: "Blood pressure check", detail: "Monitors for preeclampsia — sudden rise is a red flag", important: true },
          { name: "Weight check", detail: "Tracks healthy weight gain pattern" },
          { name: "Baby's heartbeat (Doppler)", detail: "You can hear it from around 12–14 weeks" },
          { name: "Fundal height measurement", detail: "Measures belly growth — should match week of pregnancy" },
          { name: "Baby movement check", detail: "You may feel kicks at 18–22 weeks" },
        ],
      },
      {
        title: "Anatomy Ultrasound",
        icon: "🩻",
        type: "scan",
        timing: "Around Week 18–20",
        items: [
          { name: "Baby's organ development", detail: "Heart, brain, spine, kidneys, limbs all checked" },
          { name: "Placenta position", detail: "Checks for placenta previa (placenta over cervix)" },
          { name: "Amniotic fluid levels", detail: "Too much or too little can indicate problems" },
          { name: "Baby's sex", detail: "Optional — only if you want to know!" },
        ],
      },
      {
        title: "Prenatal Screening Tests",
        icon: "🧬",
        type: "screening",
        optional: true,
        items: [
          { name: "Quad screen blood test", detail: "Screens for Down syndrome, Trisomy 18, spina bifida" },
          { name: "Amniocentesis", detail: "Diagnostic test — confirms conditions, small miscarriage risk", important: true },
          { name: "Chorionic villus sampling (CVS)", detail: "Done earlier (10–13 weeks) — confirms genetic conditions", important: true },
        ],
      },
      {
        title: "Gestational Diabetes Test",
        icon: "🩸",
        type: "lab",
        timing: "Weeks 24–28",
        items: [
          { name: "Glucose challenge test (GCT)", detail: "Drink sugary drink, blood drawn 1 hour later — no formatting needed" },
          { name: "Glucose tolerance test (GTT)", detail: "If GCT is high — 3-hour fasting test to confirm diabetes", important: true },
        ],
      },
      {
        title: "Rh Antibody Test",
        icon: "🔬",
        type: "lab",
        timing: "Around Week 28",
        items: [
          { name: "Rh antibody screen", detail: "If Rh negative — RhoGAM injection given", important: true },
        ],
      },
    ],
  },
  {
    id: "third",
    name: "Third Trimester",
    weeks: "Weeks 28–Birth",
    emoji: "🌺",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    badgeColor: "bg-rose-100 text-rose-700",
    dotColor: "bg-rose-400",
    lineColor: "bg-rose-200",
    visitSchedule: "Every 2–4 weeks, then weekly after 36 weeks",
    sections: [
      {
        title: "At Every Visit",
        icon: "📋",
        type: "visit",
        items: [
          { name: "Blood pressure & weight", detail: "Closely monitored as preeclampsia risk rises late in pregnancy", important: true },
          { name: "Baby's heartbeat", detail: "Checked at every appointment" },
          { name: "Contractions & fluid leaking", detail: "Tell your provider immediately if you notice these", important: true },
          { name: "Kick counts", detail: "At least 10 movements in 2 hours — do daily from 28 weeks" },
        ],
      },
      {
        title: "Group B Strep Test (GBS)",
        icon: "🦠",
        type: "lab",
        timing: "Weeks 35–37",
        items: [
          { name: "Vaginal & rectal swab", detail: "Checks for Group B Streptococcus bacteria", important: true },
          { name: "IV antibiotics during labor if positive", detail: "Protects baby from potentially serious infection" },
        ],
      },
      {
        title: "Baby's Position Check",
        icon: "👶",
        type: "visit",
        timing: "Around Week 36",
        items: [
          { name: "Head-down (vertex) position", detail: "Ideal position for vaginal birth" },
          { name: "Breech position", detail: "Baby feet/bottom first — may need turning or C-section", important: true },
          { name: "External cephalic version (ECV)", detail: "Manual attempt to turn breech baby — done in hospital" },
        ],
      },
      {
        title: "Vaccines During Pregnancy",
        icon: "💉",
        type: "vaccine",
        items: [
          { name: "✅ Flu shot", detail: "Safe at any point in pregnancy" },
          { name: "✅ Tdap (whooping cough)", detail: "Given at 27–36 weeks — protects newborn before their own vaccines" },
          { name: "✅ COVID-19 vaccine", detail: "Recommended and safe during pregnancy" },
          { name: "✅ RSV vaccine", detail: "Given 32–36 weeks in fall/winter season" },
          { name: "❌ MMR (measles/mumps/rubella)", detail: "Do NOT get during pregnancy — live vaccine", important: true },
          { name: "❌ Chickenpox vaccine", detail: "Do NOT get during pregnancy — live vaccine", important: true },
        ],
      },
    ],
  },
];

// Removed prePregnancyData and simplified this array
const allTrimesterTabs = trimesterData;

const typeConfig = {
  visit:     { label: "Visit",      color: "bg-blue-100 text-blue-600",   dot: "bg-blue-400" },
  lab:       { label: "Lab Test",   color: "bg-amber-100 text-amber-600", dot: "bg-amber-400" },
  screening: { label: "Screening",  color: "bg-purple-100 text-purple-600", dot: "bg-purple-400" },
  scan:      { label: "Ultrasound", color: "bg-teal-100 text-teal-600",   dot: "bg-teal-400" },
  vaccine:   { label: "Vaccine",    color: "bg-green-100 text-green-600", dot: "bg-green-400" },
};

// ── Schedule Modal (Unchanged) ─────────────────────────────────────────────────────────────
function ScheduleModal({ item, onClose, onSave }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    if (!date) return;
    onSave({ testName: item.name, date, time, notes, id: Date.now() });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-300 hover:text-gray-500">
          <X size={18} />
        </button>
        <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center mb-3">
          <Calendar size={18} className="text-pink-500" />
        </div>
        <h3 className="font-bold text-gray-800 text-lg" style={{ fontFamily: "'Georgia', serif" }}>Schedule Test</h3>
        <p className="text-sm text-pink-500 mt-1 mb-4">{item.name}</p>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Date *</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
              className="w-full bg-pink-50 border border-pink-100 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-pink-300" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Time <span className="font-normal text-gray-400">(optional)</span></label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)}
              className="w-full bg-pink-50 border border-pink-100 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-pink-300" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Notes <span className="font-normal text-gray-400">(optional)</span></label>
            <input type="text" placeholder="e.g. Dr. Sharma's clinic, fasting required..."
              value={notes} onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-pink-50 border border-pink-100 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-pink-300 placeholder:text-gray-300" />
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button onClick={handleSave} disabled={!date}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold hover:opacity-90 disabled:opacity-40 transition-opacity">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Section Card (Unchanged) ───────────────────────────────────────────────────────────────
function SectionCard({ section, scheduledTests, onSchedule }) {
  const [open, setOpen] = useState(true);
  const config = typeConfig[section.type];
  const scheduledCount = section.items.filter(item => scheduledTests.find(s => s.testName === item.name)).length;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl ${config.color.split(" ")[0]} flex items-center justify-center text-lg shrink-0`}>
            {section.icon}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-gray-800 text-sm">{section.title}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${config.color}`}>
                {config.label}
              </span>
              {section.optional && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-400">Optional</span>
              )}
              {scheduledCount > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-600">
                  {scheduledCount} scheduled
                </span>
              )}
            </div>
            {section.timing && (
              <p className="text-xs text-pink-400 mt-0.5 flex items-center gap-1">
                <Clock size={10} /> {section.timing}
              </p>
            )}
          </div>
        </div>
        <div className="shrink-0 text-gray-300">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-2 border-t border-gray-50 pt-3">
          {section.items.map((item, i) => {
            const scheduled = scheduledTests.find((s) => s.testName === item.name);
            return (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                item.important ? "bg-rose-50 border border-rose-100" : "bg-gray-50"
              }`}>
                <div className="mt-0.5 shrink-0">
                  {item.important
                    ? <AlertTriangle size={14} className="text-rose-400" />
                    : <Info size={14} className="text-gray-300" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${item.important ? "text-rose-700" : "text-gray-700"}`}>
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.detail}</p>
                  {scheduled && (
                    <div className="flex items-center gap-1.5 mt-2 bg-green-50 border border-green-100 rounded-lg px-2.5 py-1.5">
                      <Check size={11} className="text-green-500 shrink-0" />
                      <span className="text-xs text-green-600 font-medium">
                        {scheduled.date}{scheduled.time ? ` at ${scheduled.time}` : ""}
                      </span>
                      {scheduled.notes && (
                        <span className="text-xs text-green-400 truncate">· {scheduled.notes}</span>
                      )}
                    </div>
                  )}
                </div>
                <button onClick={() => onSchedule(item)}
                  className={`shrink-0 flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    scheduled
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                  }`}>
                  <Calendar size={11} />
                  {scheduled ? "Edit" : "Add"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Scheduled Tests Panel (Unchanged) ──────────────────────────────────────────────────────
function ScheduledPanel({ scheduledTests, onDelete }) {
  const upcoming = scheduledTests.filter((s) => new Date(s.date) >= new Date());
  const past = scheduledTests.filter((s) => new Date(s.date) < new Date());

  return (
    <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
      <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Clock size={16} className="text-pink-500" /> Your Scheduled Tests
      </h2>

      {upcoming.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-2">📅 Upcoming</p>
          <div className="space-y-2">
            {upcoming.map((s) => (
              <div key={s.id} className="flex items-center justify-between bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">{s.testName}</p>
                  <p className="text-xs text-green-600 mt-0.5">
                    {s.date}{s.time ? ` · ${s.time}` : ""}{s.notes ? ` · ${s.notes}` : ""}
                  </p>
                </div>
                <button onClick={() => onDelete(s.testName)} className="text-gray-300 hover:text-rose-400 transition-colors ml-3">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {past.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">✓ Completed</p>
          <div className="space-y-2">
            {past.map((s) => (
              <div key={s.id} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                <div className="opacity-50">
                  <p className="text-sm font-medium text-gray-600 line-through">{s.testName}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.date}</p>
                </div>
                <button onClick={() => onDelete(s.testName)} className="text-gray-200 hover:text-rose-400 transition-colors ml-3">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {scheduledTests.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-4">No tests scheduled yet.</p>
      )}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function PrenatalTestsPage() {
  // Changed default state to "first"
  const [activeTrimester, setActiveTrimester] = useState("first");
  const [scheduledTests, setScheduledTests] = useState([]);
  const [modalItem, setModalItem] = useState(null);
  const [activeTab, setActiveTab] = useState("timeline");

  const current = allTrimesterTabs.find((t) => t.id === activeTrimester);

  const handleSave = (entry) => {
    setScheduledTests((prev) => {
      const filtered = prev.filter((s) => s.testName !== entry.testName);
      return [...filtered, entry].sort((a, b) => new Date(a.date) - new Date(b.date));
    });
  };

  const handleDelete = (testName) => {
    setScheduledTests((prev) => prev.filter((s) => s.testName !== testName));
  };

  const upcomingCount = scheduledTests.filter((s) => new Date(s.date) >= new Date()).length;

  return (
    <div className="max-w-3xl mx-auto space-y-5">

      {/* Header */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>
          Prenatal Tests & Timeline 🩺
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Every test you need during pregnancy. Tap <strong className="text-pink-500">Add</strong> to schedule any test.
        </p>

        {/* Tab switcher */}
        <div className="flex gap-2 mt-4">
          <button onClick={() => setActiveTab("timeline")}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "timeline" ? "bg-pink-500 text-white" : "bg-pink-50 text-pink-500 hover:bg-pink-100"
            }`}>
            Timeline
          </button>
          <button onClick={() => setActiveTab("scheduled")}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === "scheduled" ? "bg-pink-500 text-white" : "bg-pink-50 text-pink-500 hover:bg-pink-100"
            }`}>
            My Schedule
            {upcomingCount > 0 && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                activeTab === "scheduled" ? "bg-white text-pink-500" : "bg-pink-500 text-white"
              }`}>
                {upcomingCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {activeTab === "scheduled" ? (
        <ScheduledPanel scheduledTests={scheduledTests} onDelete={handleDelete} />
      ) : (
        <>
          {/* What the colors mean */}
          <div className="bg-white/70 rounded-2xl p-4 border border-pink-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">What the colors mean</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(typeConfig).map(([key, config]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${config.dot}`} />
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${config.color}`}>{config.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <AlertTriangle size={12} className="text-rose-400" />
                <span className="text-xs text-rose-500 font-medium">Important</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <span className="text-xs text-gray-400 font-medium">Optional</span>
              </div>
            </div>
          </div>

          {/* Trimester Tabs — scrollable row */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {allTrimesterTabs.map((t) => (
              <button key={t.id} onClick={() => setActiveTrimester(t.id)}
                className={`flex-shrink-0 py-3 px-3 rounded-2xl text-sm font-semibold transition-all border-2 min-w-[5.5rem] ${
                  activeTrimester === t.id
                    ? `${t.bgColor} ${t.borderColor}`
                    : "bg-white border-transparent text-gray-400 hover:bg-gray-50"
                }`}>
                <span className="text-xl block mb-1">{t.emoji}</span>
                <span className={`block text-xs ${activeTrimester === t.id ? t.badgeColor.split(" ")[1] : ""}`}>
                  {t.name.split(" ")[0]}
                </span>
                <span className="text-xs font-normal opacity-60 block">{t.weeks}</span>
              </button>
            ))}
          </div>

          {/* Trimester Info Bar */}
          <div className={`rounded-2xl p-4 border ${current.borderColor} ${current.bgColor} flex items-center justify-between`}>
            <div>
              <h2 className="font-bold text-gray-800 flex items-center gap-2 flex-wrap">
                {current.emoji} {current.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${current.badgeColor}`}>{current.weeks}</span>
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                📅 <strong>{current.visitSchedule}</strong>
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-700">{current.sections.length}</p>
              <p className="text-xs text-gray-400">categories</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative space-y-3 pl-6">
            <div className={`absolute left-2 top-2 bottom-2 w-0.5 ${current.lineColor}`} />
            {current.sections.map((section, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-6 top-5 w-3 h-3 rounded-full ${current.dotColor} ring-2 ring-white shadow-sm`} />
                <SectionCard
                  section={section}
                  scheduledTests={scheduledTests}
                  onSchedule={(item) => setModalItem(item)}
                />
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700 leading-relaxed">
              Tests marked <strong>Important</strong> should always be discussed with your healthcare provider.
              <strong> Optional</strong> screenings are your personal choice — ask your provider what's right for you.
            </p>
          </div>
        </>
      )}

      {/* Schedule Modal */}
      {modalItem && (
        <ScheduleModal
          item={modalItem}
          onClose={() => setModalItem(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}