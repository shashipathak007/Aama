const weeklyDevelopment = {
  week: 10,
  size: "1.2 inches",
  weight: "0.14 oz",
  fruit: "🍓",
  compareTo: "a corn on the cob",
  bodyDevelopment: [
    { system: "Lungs", detail: "Developing air sacs (alveoli). Baby is practicing breathing movements.", icon: "🫁" },
    { system: "Brain", detail: "Rapid neural connections forming. Baby responds to sound and light.", icon: "🧠" },
    { system: "Skin", detail: "Transparent, wrinkled skin starting to fill out with fat layers.", icon: "✨" },
    { system: "Senses", detail: "Taste buds are forming. Baby can taste what you eat!", icon: "😋" },
    { system: "Movement", detail: "Active kicks and punches you can feel and even see!", icon: "🤸" },
    { system: "Hearing", detail: "Baby recognizes your voice and may react to music.", icon: "👂" },
  ],
  funFacts: [
    "Your baby sleeps about 12-14 hours a day in the womb.",
    "Baby's fingerprints are fully formed by now — completely unique!",
    "They can hiccup in the womb — those rhythmic movements you feel!",
    "Baby dreams! REM sleep begins around this week.",
  ],
};

export default function MyBabyPage() {
  const { week, size, weight, fruit, compareTo, bodyDevelopment, funFacts } = weeklyDevelopment;

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>My Baby 💕</h1>
        <p className="text-sm text-gray-500 mt-1">Your baby's development at Week {week}</p>
      </div>

      {/* Baby Size */}
      <div className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 text-center">
        <div className="text-6xl mb-3">{fruit}</div>
        <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>
          Your baby is the size of {compareTo}!
        </h2>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-pink-600">{size}</p>
            <p className="text-xs text-gray-400">Length</p>
          </div>
          <div className="w-px h-10 bg-pink-200" />
          <div className="text-center">
            <p className="text-2xl font-bold text-pink-600">{weight}</p>
            <p className="text-xs text-gray-400">Weight</p>
          </div>
        </div>
      </div>

      {/* Body Development */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-4">How Your Baby is Growing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {bodyDevelopment.map((item) => (
            <div key={item.system} className="flex items-start gap-3 bg-pink-50/60 rounded-xl p-3">
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-sm text-gray-700">{item.system}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-3">Fun Facts 🌟</h2>
        <div className="space-y-3">
          {funFacts.map((fact, i) => (
            <div key={i} className="flex items-start gap-3 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-3">
              <span className="w-6 h-6 rounded-full bg-pink-200 text-pink-700 text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
              <p className="text-sm text-gray-600">{fact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
