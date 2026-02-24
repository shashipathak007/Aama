import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekData = {
10: { baby: "Strawberry", size: "1.2 in", weight: "0.14 oz", babyChanges: "All vital organs formed. Tiny fingernails growing.", momChanges: "Morning sickness may peak. Round ligament pain possible.", fruit: "🍓" },
12: { baby: "Lime", size: "2.1 in", weight: "0.49 oz", babyChanges: "Baby can open and close fingers. Reflexes developing.", momChanges: "Energy levels improving. Nausea easing for many.", fruit: "🍋" },
16: { baby: "Avocado", size: "4.6 in", weight: "3.5 oz", babyChanges: "Baby can hear your voice. Eyes making small movements.", momChanges: "Baby bump visible. Back aches may start.", fruit: "🥑" },
20: { baby: "Banana", size: "6.5 in", weight: "10.6 oz", babyChanges: "Swallowing amniotic fluid. Hair growing on head.", momChanges: "Halfway there! You may feel first kicks.", fruit: "🍌" },
24: { baby: "Corn on the cob", size: "11.8 in", weight: "1.3 lb", babyChanges: "Lungs developing. Taste buds forming. Responding to sound.", momChanges: "Braxton Hicks may start. Skin stretching, possibly itchy.", fruit: "🌽" },
28: { baby: "Eggplant", size: "14.8 in", weight: "2.2 lb", babyChanges: "Eyes opening and closing. Brain growing rapidly.", momChanges: "Third trimester begins! Heartburn common.", fruit: "🍆" },
32: { baby: "Squash", size: "16.7 in", weight: "3.75 lb", babyChanges: "Practicing breathing. Skeleton hardening.", momChanges: "Shortness of breath common. Frequent urination.", fruit: "🎃" },
36: { baby: "Honeydew", size: "18.7 in", weight: "5.8 lb", babyChanges: "Most organ systems ready. Baby dropping lower.", momChanges: "Pelvic pressure. Nesting instinct common.", fruit: "🍈" },
40: { baby: "Pumpkin", size: "20 in", weight: "7.5 lb", babyChanges: "Fully developed. Ready to meet you!", momChanges: "Due date! Watch for signs of labor.", fruit: "🎃" },
};

const trimesterGuide = [
{ name: "First Trimester", weeks: "1 to 12", desc: "Major organs form. Morning sickness common. Avoid alcohol, caffeine.", color: "bg-pink-100 text-pink-700 border-pink-200" },
{ name: "Second Trimester", weeks: "13 to 26", desc: "Baby's movements felt. Energy returns. Anatomy scan done.", color: "bg-purple-100 text-purple-700 border-purple-200" },
{ name: "Third Trimester", weeks: "27 to 40", desc: "Rapid growth. Prepare for birth. Watch for contractions.", color: "bg-rose-100 text-rose-700 border-rose-200" },
];

export default function TrackerPage({ week = 24 }) {
const [exploreWeek, setExploreWeek] = useState(week);
const closest = Object.keys(weekData).reduce((a, b) =>
Math.abs(b - exploreWeek) < Math.abs(a - exploreWeek) ? b : a
);
const data = weekData[closest];
const progress = Math.round((week / 40) * 100);
const daysLeft = (40 - week) * 7;

const emotionalChanges = [
"Mood swings due to hormonal shifts are completely normal.",
"You may feel more connected to your baby as kicks become regular.",
"Anxiety about childbirth is common — talk to your provider.",
];

const physicalChanges = [
"Braxton Hicks contractions may begin.",
"Skin stretching may feel itchy — moisturize daily.",
"Lower back pain from shifted center of gravity.",
];

return (
<div className="max-w-4xl mx-auto space-y-5">
    
{/* Progress */}
<div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
<div className="flex items-start justify-between mb-4">
<div>
<h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>Pregnancy Progress</h1>
<p className="text-gray-500 text-sm mt-1">You're {progress}% of the way there!</p>
</div>
<span className="bg-pink-500 text-white text-sm font-bold px-3 py-1.5 rounded-full">Week {week}/40</span>
</div>
<div className="w-full bg-pink-100 rounded-full h-3 mb-2">
<div
className="bg-linear-to-r from-pink-400 to-rose-500 h-3 rounded-full transition-all"
style={{ width: `${progress}%` }}
/>
</div>
<div className="flex justify-between text-xs text-gray-400 mt-1">
<span>Week 1</span>
<span className="text-pink-500 font-medium">{daysLeft} days until due date</span>
<span>Week 40</span>
</div>
</div>


{/* Emotional & Physical Changes */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
<h2 className="font-semibold text-gray-800 mb-3"> Emotional Changes</h2>
<ul className="space-y-2">
{emotionalChanges.map((c, i) => (
<li key={i} className="text-sm text-gray-600 flex items-start gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
{c}
</li>
))}
</ul>
</div>
<div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
<h2 className="font-semibold text-gray-800 mb-3"> Physical Changes</h2>
<ul className="space-y-2">
{physicalChanges.map((c, i) => (
<li key={i} className="text-sm text-gray-600 flex items-start gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 shrink-0" />
{c}
</li>
))}
</ul>
</div>
</div>


{/* Explore Your Weeks */}
<div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
<h2 className="font-semibold text-gray-800 mb-4">Explore Your Weeks</h2>
<div className="flex items-center gap-3 mb-4">
<button onClick={() => setExploreWeek(Math.max(4, exploreWeek - 1))} className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-200">
<ChevronLeft size={16} />
</button>
<span className="font-bold text-pink-600 text-lg">Week {exploreWeek}</span>
<button onClick={() => setExploreWeek(Math.min(40, exploreWeek + 1))} className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-200">
<ChevronRight size={16} />
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-pink-50 rounded-xl p-4 text-center">
<div className="text-4xl mb-2">{data.fruit}</div>
<p className="font-semibold text-gray-700">{data.baby}</p>
<p className="text-xs text-gray-400 mt-1">{data.size} · {data.weight}</p>
</div>
<div className="bg-purple-50 rounded-xl p-4">
<p className="text-xs font-semibold text-purple-600 mb-2">BABY THIS WEEK</p>
<p className="text-sm text-gray-600">{data.babyChanges}</p>
</div>
<div className="bg-rose-50 rounded-xl p-4">
<p className="text-xs font-semibold text-rose-600 mb-2">YOUR BODY</p>
<p className="text-sm text-gray-600">{data.momChanges}</p>
</div>
</div>
</div>


{/* Trimester Guide */}
<div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
<h2 className="font-semibold text-gray-800 mb-3">Trimester Guide</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
{trimesterGuide.map((t) => (
<div key={t.name} className={`rounded-xl p-4 border ${t.color}`}>
<p className="font-semibold text-sm">{t.name}</p>
<p className="text-xs opacity-70 mt-0.5">Weeks {t.weeks}</p>
<p className="text-xs mt-2 opacity-80">{t.desc}</p>
</div>
))}
</div>
</div>
</div>
);
}