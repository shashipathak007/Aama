import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";

const resources = {
  products: [
    { name: "Pregnancy Pillow", desc: "C-shaped pillow for body support while sleeping.", emoji: "🛏️", tag: "Sleep" },
    { name: "Belly Butter", desc: "Moisturizing cream to help with stretch marks.", emoji: "✨", tag: "Skin" },
    { name: "Prenatal Vitamins", desc: "Folic acid, iron & DHA for baby's development.", emoji: "💊", tag: "Health" },
    { name: "Maternity Belt", desc: "Supports growing belly and reduces back pain.", emoji: "🤰", tag: "Comfort" },
  ],
  books: [
    { name: "What to Expect When You're Expecting", author: "Heidi Murkoff", emoji: "📗" },
    { name: "Expecting Better", author: "Emily Oster", emoji: "📘" },
    { name: "The Mama Natural Week-by-Week Guide", author: "Genevieve Howland", emoji: "📕" },
  ],
  medical: [
    { name: "ACOG Guidelines", desc: "American College of Obstetricians and Gynecologists.", emoji: "🏥" },
    { name: "WHO Antenatal Care", desc: "WHO recommendations for routine prenatal care.", emoji: "🌍" },
    { name: "CDC Pregnancy Info", desc: "Centers for Disease Control maternal health resources.", emoji: "🇺🇸" },
  ],
};

export function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>Resources 🌿</h1>
        <p className="text-sm text-gray-500 mt-1">Curated products, books, and medical recommendations.</p>
      </div>

      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-3">Recommended Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {resources.products.map((p) => (
            <div key={p.name} className="bg-pink-50 rounded-xl p-3 text-center hover:shadow-sm transition-shadow cursor-pointer">
              <span className="text-3xl">{p.emoji}</span>
              <p className="font-semibold text-sm text-gray-700 mt-2">{p.name}</p>
              <span className="text-xs text-pink-500 bg-pink-100 px-2 py-0.5 rounded-full mt-1 inline-block">{p.tag}</span>
              <p className="text-xs text-gray-400 mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-3">Recommended Books</h2>
        <div className="space-y-2">
          {resources.books.map((b) => (
            <div key={b.name} className="flex items-center gap-3 bg-purple-50 rounded-xl p-3">
              <span className="text-2xl">{b.emoji}</span>
              <div>
                <p className="font-semibold text-sm text-gray-700">{b.name}</p>
                <p className="text-xs text-gray-400">by {b.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h2 className="font-semibold text-gray-800 mb-3">Medical References</h2>
        <div className="space-y-2">
          {resources.medical.map((m) => (
            <div key={m.name} className="flex items-center gap-3 bg-blue-50 rounded-xl p-3">
              <span className="text-2xl">{m.emoji}</span>
              <div>
                <p className="font-semibold text-sm text-gray-700">{m.name}</p>
                <p className="text-xs text-gray-400">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage