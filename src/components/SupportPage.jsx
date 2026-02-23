import { useState, useEffect, useRef } from "react";

const meditations = [
  { title: "Morning Calm", duration: "5 min", desc: "Start your day with a gentle body scan.", emoji: "🌅" },
  { title: "Baby Connection", duration: "8 min", desc: "A guided visualization to bond with your baby.", emoji: "💕" },
  { title: "Anxiety Relief", duration: "10 min", desc: "Release worries with progressive relaxation.", emoji: "🌿" },
];

export default function SupportPage() {
  const [mood, setMood] = useState(5);
  const [anxiety, setAnxiety] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [breathing, setBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState("inhale");
  const [breathCount, setBreathCount] = useState(0);
  const [journal, setJournal] = useState("");
  const [journalSaved, setJournalSaved] = useState(false);
  const intervalRef = useRef(null);

  const startBreathing = () => {
    setBreathing(true);
    setBreathPhase("inhale");
    setBreathCount(0);
    let count = 0;
    intervalRef.current = setInterval(() => {
      count++;
      if (count % 3 === 1) setBreathPhase("inhale");
      else if (count % 3 === 2) setBreathPhase("hold");
      else { setBreathPhase("exhale"); setBreathCount((c) => c + 1); }
    }, 4000);
  };

  const stopBreathing = () => {
    setBreathing(false);
    clearInterval(intervalRef.current);
  };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  const breathLabels = { inhale: "Breathe In 🌬️", hold: "Hold... ⏸️", exhale: "Breathe Out 💨" };
  const breathColors = { inhale: "from-blue-100 to-purple-100", hold: "from-purple-100 to-pink-100", exhale: "from-pink-100 to-rose-100" };

  const moodLabel = (v) => v <= 3 ? "Low" : v <= 6 ? "Okay" : "Great";
  const anxietyLabel = (v) => v <= 3 ? "Calm" : v <= 6 ? "Moderate" : "High";

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>Mental Health & Support</h1>
        <p className="text-sm text-gray-500 mt-1">Your emotional wellbeing matters just as much as your physical health.</p>
      </div>

      {/* Mood & Anxiety Scale */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-4">How Are You Feeling?</h2>
        <div className="space-y-5">
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm text-gray-600 font-medium">Mood</label>
              <span className="text-sm font-bold text-pink-600">{mood}/10 — {moodLabel(mood)}</span>
            </div>
            <input type="range" min="1" max="10" value={mood} onChange={(e) => setMood(Number(e.target.value))}
              className="w-full accent-pink-500" />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>😔 Very Low</span><span>😊 Very Good</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm text-gray-600 font-medium">Anxiety Level</label>
              <span className="text-sm font-bold text-purple-600">{anxiety}/10 — {anxietyLabel(anxiety)}</span>
            </div>
            <input type="range" min="1" max="10" value={anxiety} onChange={(e) => setAnxiety(Number(e.target.value))}
              className="w-full accent-purple-500" />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>😌 Calm</span><span>😰 Very Anxious</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setSubmitted(true)}
          className="mt-4 bg-linear-to-r from-pink-500 to-rose-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-90"
        >
          {submitted ? "Logged! ✓" : "Log My Feelings"}
        </button>
        {submitted && anxiety > 7 && (
          <div className="mt-3 bg-rose-50 border border-rose-200 rounded-xl p-3 text-sm text-rose-600">
            Your anxiety seems elevated. Consider talking to your provider or trying the breathing exercise below. 💙
          </div>
        )}
      </div>

      {/* Breathing Exercise */}
      <div className={`rounded-2xl p-5 border transition-all duration-1000 ${breathing ? `bg-linear-to-br ${breathColors[breathPhase]} border-purple-100` : "bg-white/70 border-pink-100"}`}>
        <h2 className="font-semibold text-gray-800 mb-2">Breathing Exercise</h2>
        <p className="text-sm text-gray-500 mb-4">Box breathing helps calm your nervous system instantly.</p>
        {breathing ? (
          <div className="text-center py-4">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-2xl font-bold text-purple-600 bg-white/60 shadow-lg mb-4 transition-all duration-1000 ${breathPhase === "inhale" ? "scale-110" : breathPhase === "hold" ? "scale-110" : "scale-90"}`}>
              {breathPhase === "inhale" ? "🌬️" : breathPhase === "hold" ? "⏸️" : "💨"}
            </div>
            <p className="text-xl font-semibold text-gray-700 mb-1">{breathLabels[breathPhase]}</p>
            <p className="text-sm text-gray-400">{breathCount} breaths completed</p>
            <button onClick={stopBreathing} className="mt-4 bg-white text-purple-600 border border-purple-200 text-sm px-5 py-2 rounded-xl">
              Stop
            </button>
          </div>
        ) : (
          <button onClick={startBreathing} className="bg-linear-to-r from-purple-500 to-pink-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-90">
            Start Breathing Exercise
          </button>
        )}
      </div>

      {/* Meditation */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-3">Guided Meditations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {meditations.map((m) => (
            <div key={m.title} className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100 hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-3xl">{m.emoji}</span>
              <p className="font-semibold text-gray-700 mt-2 text-sm">{m.title}</p>
              <p className="text-xs text-purple-500 mt-0.5">{m.duration}</p>
              <p className="text-xs text-gray-500 mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Journal */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-1">Daily Journal ✍️</h2>
        <p className="text-sm text-gray-400 mb-3">Write freely about how you're feeling today.</p>
        <textarea
          value={journal}
          onChange={(e) => { setJournal(e.target.value); setJournalSaved(false); }}
          placeholder="Today I'm feeling..."
          rows={5}
          className="w-full bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-pink-300 placeholder:text-gray-300 resize-none"
        />
        <button
          onClick={() => setJournalSaved(true)}
          className="mt-2 bg-linear-to-r from-pink-500 to-rose-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-90"
        >
          {journalSaved ? "Entry Saved! ✓" : "Save Entry"}
        </button>
      </div>
    </div>
  );
}
