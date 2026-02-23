import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";

const partnerTips = [
  {
    category: "Emotional Support",
    emoji: "💬",
    tips: [
      "Listen without trying to 'fix' — sometimes she just needs to be heard.",
      "Check in daily: 'How are you feeling?' goes a long way.",
      "Validate mood swings — hormones are real and powerful.",
      "Be patient with changing needs and preferences.",
    ],
  },
  {
    category: "Physical Support",
    emoji: "💪",
    tips: [
      "Take over household tasks she finds difficult.",
      "Learn to give a gentle back and foot massage.",
      "Attend prenatal appointments when possible.",
      "Help her stay hydrated — keep water within reach.",
    ],
  },
  {
    category: "Birth Preparation",
    emoji: "🏥",
    tips: [
      "Take a childbirth class together.",
      "Pack the hospital bag together as a team.",
      "Learn about labor signs and when to go to the hospital.",
      "Discuss her birth preferences and advocate for them.",
    ],
  },
];

export function PartnerPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>Partner Guide 🤝</h1>
        <p className="text-sm text-gray-500 mt-1">How to support your partner emotionally and physically through pregnancy.</p>
      </div>

      <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-5 border border-purple-100">
        <p className="text-sm text-gray-600">
          Your support makes a profound difference. Studies show that partners who are actively involved during pregnancy lead to better birth outcomes and stronger family bonds. You don't need to have all the answers — your presence matters most. 💙
        </p>
      </div>

      <div className="space-y-4">
        {partnerTips.map((section) => (
          <div key={section.category} className="bg-white/70 rounded-2xl p-5 border border-pink-100">
            <h2 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-xl">{section.emoji}</span> {section.category}
            </h2>
            <ul className="space-y-2">
              {section.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}



export default PartnerPage