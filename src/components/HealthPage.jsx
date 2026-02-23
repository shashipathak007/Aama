import { useState } from "react";
import { Plus } from "lucide-react";

const nutritionTips = [
  { emoji: "🥦", tip: "Eat folate-rich foods: leafy greens, beans, citrus." },
  { emoji: "🥛", tip: "Get 1000mg calcium daily — dairy or fortified foods." },
  { emoji: "🐟", tip: "Omega-3s from low-mercury fish support brain development." },
  { emoji: "🫐", tip: "Antioxidant-rich berries help reduce inflammation." },
];

const safeExercises = [
  { name: "Walking", duration: "20-30 min", level: "Easy", color: "bg-green-100 text-green-700" },
  { name: "Prenatal Yoga", duration: "30-45 min", level: "Gentle", color: "bg-purple-100 text-purple-700" },
  { name: "Swimming", duration: "20-30 min", level: "Easy", color: "bg-blue-100 text-blue-700" },
  { name: "Pelvic Floor", duration: "10 min", level: "Essential", color: "bg-pink-100 text-pink-700" },
];

export default function HealthPage() {
  const [healthData, setHealthData] = useState({ weight: "", bp: "", sleep: "", hydration: "" });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>Health Monitor</h1>
        <p className="text-gray-500 text-sm mt-1">Track your physical and mental wellness</p>
      </div>

      {/* Health Data Input */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Plus size={16} className="text-pink-500" /> Log Today's Data
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { key: "weight", label: "Weight (kg)", placeholder: "65.5" },
            { key: "bp", label: "Blood Pressure", placeholder: "120/80" },
            { key: "sleep", label: "Sleep (hrs)", placeholder: "7.5" },
            { key: "hydration", label: "Water (glasses)", placeholder: "8" },
          ].map(({ key, label, placeholder }) => (
            <div key={key}>
              <label className="text-xs text-gray-500 font-medium mb-1 block">{label}</label>
              <input
                type="text"
                placeholder={placeholder}
                value={healthData[key]}
                onChange={(e) => setHealthData({ ...healthData, [key]: e.target.value })}
                className="w-full bg-pink-50 border border-pink-100 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-pink-300 placeholder:text-gray-300"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleSave}
          className="mt-4 bg-linear-to-r from-pink-500 to-rose-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
        >
          {saved ? "Saved! ✓" : "Save Today's Data"}
        </button>
      </div>

      {/* Mental Health Checkup */}
      <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
        <h2 className="font-semibold text-gray-800 mb-2">Mental Health Checkup</h2>
        <p className="text-sm text-gray-500 mb-4">Perinatal anxiety and depression are common. Be kind to yourself.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "Feeling overwhelmed?", action: "Talk to a professional", icon: "💬" },
            { label: "Sleep affecting mood?", action: "Try a bedtime routine", icon: "🌙" },
            { label: "Need connection?", action: "Join a support group", icon: "🤝" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-4">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-sm font-medium text-gray-700 mt-2">{item.label}</p>
              <p className="text-xs text-pink-500 mt-1">{item.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nutrition Tips */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-3">Nutrition Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nutritionTips.map((n) => (
            <div key={n.tip} className="flex items-start gap-3 bg-pink-50 rounded-xl p-3">
              <span className="text-2xl">{n.emoji}</span>
              <p className="text-sm text-gray-600">{n.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Safe Exercises */}
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-3">Safe Exercises</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {safeExercises.map((ex) => (
            <div key={ex.name} className={`${ex.color} rounded-xl p-4 text-center`}>
              <p className="font-semibold text-sm">{ex.name}</p>
              <p className="text-xs mt-1 opacity-70">{ex.duration}</p>
              <span className="text-xs font-medium opacity-90 mt-2 inline-block">{ex.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
