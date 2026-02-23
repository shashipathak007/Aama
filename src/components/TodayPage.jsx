import { useState } from "react";
import { Heart, Phone, Sun, Moon, Sunset } from "lucide-react";

const tips = {
  morning: [
    "Start your day with a glass of warm water with lemon.",
    "Do 5 minutes of gentle stretching before getting up.",
    "Take your prenatal vitamins with breakfast.",
  ],
  afternoon: [
    "Take a short 10-minute walk to boost circulation.",
    "Drink at least 8 glasses of water today.",
    "Rest your feet if they feel swollen.",
  ],
  evening: [
    "Practice 5 minutes of deep breathing before bed.",
    "Connect with your baby through gentle belly touches.",
    "Write in your journal about how you're feeling.",
  ],
};

const getTimeOfDay = () => {
  const h = new Date().getHours();
  if (h < 12) return "morning";
  if (h < 17) return "afternoon";
  return "evening";
};

const greetings = {
  morning: { text: "Good Morning! 🌸", icon: Sun },
  afternoon: { text: "Good Afternoon! ☀️", icon: Sunset },
  evening: { text: "Good Evening! 🌙", icon: Moon },
};

const moodOptions = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😌", label: "Calm" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😰", label: "Anxious" },
  { emoji: "😴", label: "Tired" },
  { emoji: "🥰", label: "Loved" },
];

const recentSymptoms = [
  { label: "Nausea", time: "Yesterday", color: "bg-yellow-100 text-yellow-700" },
  { label: "Back pain", time: "2 days ago", color: "bg-orange-100 text-orange-700" },
  { label: "Good sleep", time: "Last night", color: "bg-green-100 text-green-700" },
];

export default function TodayPage({ week = 24 }) {
  const timeOfDay = getTimeOfDay();
  const { text: greeting } = greetings[timeOfDay];
  const todayTips = tips[timeOfDay];
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      {/* Header */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>{greeting}</h1>
          <p className="text-gray-500 mt-1 text-sm">You're doing amazing. Here's your overview for today.</p>
        </div>
        <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Week {week}</span>
      </div>

      {/* Today's Tips */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          Today's Tips <span>💜</span>
        </h2>
        <ul className="space-y-2">
          {todayTips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Mood Check-in */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-1">How are you feeling today?</h2>
        <p className="text-xs text-gray-400 mb-4">Tap to log your mood</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {moodOptions.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood.label)}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all
                ${selectedMood === mood.label
                  ? "border-pink-400 bg-pink-50"
                  : "border-transparent bg-gray-50 hover:bg-pink-50"
                }`}
            >
              <span className="text-2xl">{mood.emoji}</span>
              <span className="text-xs text-gray-500">{mood.label}</span>
            </button>
          ))}
        </div>
        {selectedMood && (
          <p className="mt-3 text-sm text-pink-500">Logged: feeling {selectedMood} today 💕</p>
        )}
      </div>

      {/* Recent Symptoms */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-3">Recent Symptoms & Moods</h2>
        <div className="flex flex-wrap gap-2">
          {recentSymptoms.map((s) => (
            <span key={s.label} className={`${s.color} text-xs font-medium px-3 py-1.5 rounded-full`}>
              {s.label} · {s.time}
            </span>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-linear-to-r from-rose-50 to-pink-50 rounded-2xl p-5 border border-rose-100">
        <h2 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Phone size={16} className="text-rose-500" /> Emergency Contacts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Dr. React ", phone: "+977 9848383838" },
            { label: "Venus Hospital", phone: "01534533" },
          ].map((c) => (
            <a
              key={c.label}
              href={`tel:${c.phone}`}
              className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <p className="text-sm font-medium text-gray-700">{c.label}</p>
                <p className="text-xs text-gray-400">{c.phone}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                <Phone size={14} className="text-rose-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
