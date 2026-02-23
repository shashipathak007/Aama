import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";


const guides = [
  { emoji: "🤰", title: "What to Expect in Each Trimester", desc: "A week-by-week breakdown of pregnancy symptoms, milestones, and what's normal.", tag: "Overview" },
  { emoji: "🏥", title: "Prenatal Visits & Tests", desc: "Complete guide to ultrasounds, blood tests, and screenings at every stage.", tag: "Medical" },
  { emoji: "🍽️", title: "Nutrition During Pregnancy", desc: "What to eat, what to avoid, and how to manage cravings and food aversions.", tag: "Nutrition" },
  { emoji: "🧘", title: "Preparing for Labor & Birth", desc: "Birth plans, pain management options, and what happens during delivery.", tag: "Birth" },
  { emoji: "👶", title: "Newborn Care Basics", desc: "Breastfeeding, bathing, sleep schedules, and your baby's first weeks.", tag: "Newborn" },
  { emoji: "💆", title: "Postpartum Recovery", desc: "Physical and emotional recovery after birth. Recognizing postpartum depression.", tag: "Postpartum" },
];

export function LearnPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>Learn 📚</h1>
        <p className="text-sm text-gray-500 mt-1">Comprehensive guides for every stage of your pregnancy journey.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {guides.map((g) => (
          <div key={g.title} className="bg-white/70 rounded-2xl p-5 border border-pink-100 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="text-3xl">{g.emoji}</span>
              <div>
                <span className="text-xs font-medium text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full">{g.tag}</span>
                <h3 className="font-semibold text-gray-700 mt-1 group-hover:text-pink-600 transition-colors">{g.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{g.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default LearnPage