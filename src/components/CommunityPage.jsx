import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";


const posts = [
  { user: "Priya M.", avatar: "🌸", week: 26, time: "2h ago", content: "Anyone else getting Braxton Hicks already? Started at 24 weeks and freaked me out at first!", likes: 12, comments: 5, tag: "Symptoms" },
  { user: "Sita K.", avatar: "💜", week: 20, time: "4h ago", content: "Just had my anatomy scan — everything looks perfect! Baby is measuring right on track. So relieved 🥹", likes: 34, comments: 11, tag: "Milestone" },
  { user: "Anita R.", avatar: "🌺", week: 32, time: "1d ago", content: "Tip: pregnancy pillow changed my sleep completely. Can't believe I waited so long!", likes: 28, comments: 8, tag: "Tips" },
];

export function CommunityPage() {
  const [liked, setLiked] = useState({});
  const [newPost, setNewPost] = useState("");

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div className="bg-white/70 rounded-2xl p-5 border border-pink-100">
        <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>Community 💬</h1>
        <p className="text-sm text-gray-500 mt-1">Share tips, ask questions, and support each other.</p>
      </div>

      {/* New Post */}
      <div className="bg-white/70 rounded-2xl p-4 border border-pink-100">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share something with the community..."
          rows={3}
          className="w-full bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-pink-300 placeholder:text-gray-300 resize-none"
        />
        <div className="flex justify-end mt-2">
          <button className="bg-linear-to-r from-pink-500 to-rose-500 text-white text-sm px-4 py-2 rounded-xl flex items-center gap-2 hover:opacity-90">
            <Send size={14} /> Post
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post, i) => (
        <div key={i} className="bg-white/70 rounded-2xl p-5 border border-pink-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-xl shrink-0">{post.avatar}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-sm text-gray-700">{post.user}</span>
                <span className="text-xs text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full">Week {post.week}</span>
                <span className="text-xs text-gray-400">{post.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{post.content}</p>
              <div className="flex items-center gap-4 mt-3">
                <button onClick={() => setLiked({ ...liked, [i]: !liked[i] })} className={`flex items-center gap-1.5 text-xs ${liked[i] ? "text-pink-500" : "text-gray-400"} hover:text-pink-500 transition-colors`}>
                  <Heart size={14} className={liked[i] ? "fill-pink-500" : ""} /> {post.likes + (liked[i] ? 1 : 0)}
                </button>
                <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-pink-500 transition-colors">
                  <MessageCircle size={14} /> {post.comments}
                </button>
                <span className="ml-auto text-xs text-purple-500 bg-purple-50 px-2 py-0.5 rounded-full">{post.tag}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommunityPage