import { useState } from "react";
import { FaPaperPlane, FaSmile, FaPaperclip, FaSearch, FaEllipsisH, FaCheck } from "react-icons/fa";

const conversations = [
  { id: 1, name: "Ava Morgan", last: "I love the new visual direction", time: "2m", unread: 3, active: true },
  { id: 2, name: "Theo Lane", last: "Let’s sync on the launch deck", time: "18m", unread: 1, active: false },
  { id: 3, name: "Mila Hart", last: "Shared the moodboard today", time: "1h", unread: 0, active: false },
  { id: 4, name: "Jules Carter", last: "Thanks for the feedback", time: "3h", unread: 0, active: false },
];

const messages = [
  { sender: "me", text: "I just reviewed the morning updates — looks polished." },
  { sender: "them", text: "Love it. The new feed feels much more premium." },
  { sender: "me", text: "I’ll share the prototype later today." },
  { sender: "them", text: "Perfect, I’ll send notes after the review." },
];

function Messages() {
  const [draft, setDraft] = useState("");

  return (
    <div className="rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
      <div className="grid min-h-[700px] lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="border-b border-slate-200 p-4 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Inbox</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">Messages</h2>
            </div>
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700"> <FaSearch className="h-3.5 w-3.5" /> </button>
          </div>

          <div className="mt-4 space-y-2">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                type="button"
                className={`flex w-full items-center gap-3 rounded-[22px] border p-3 text-left transition ${conversation.active ? "border-indigo-200 bg-indigo-50" : "border-transparent bg-slate-50 hover:border-slate-200"}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white">A</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-semibold text-slate-900">{conversation.name}</p>
                    <span className="text-[10px] text-slate-400">{conversation.time}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="truncate text-xs text-slate-500">{conversation.last}</p>
                    {conversation.unread ? <span className="rounded-full bg-indigo-600 px-1.5 py-0.5 text-[9px] font-semibold text-white">{conversation.unread}</span> : null}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <section className="flex min-w-0 flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white">A
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Ava Morgan</p>
                <p className="text-xs text-emerald-600">Online</p>
              </div>
            </div>

            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700"><FaEllipsisH /></button>
          </div>

          <div className="flex-1 space-y-4 bg-slate-50 p-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-[22px] px-4 py-3 text-sm shadow-sm ${message.sender === "me" ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white" : "bg-white text-slate-700"}`}>
                  {message.text}
                </div>
              </div>
            ))}
            <div className="flex justify-start">
              <div className="rounded-[22px] bg-white p-3 text-xs font-medium text-slate-500 shadow-sm">Ava is typing ...</div>
            </div>
          </div>

          <div className="border-t border-slate-200 p-4">
            <div className="flex items-center gap-2 rounded-[22px] border border-slate-200 bg-slate-50 p-2">
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-2xl text-slate-500 hover:bg-white"><FaSmile className="h-4 w-4" /></button>
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-2xl text-slate-500 hover:bg-white"><FaPaperclip className="h-4 w-4" /></button>
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                type="text"
                placeholder="Write a message..."
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                aria-label="Write a message"
              />
              <button type="button" className="flex h-11 items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 text-sm font-semibold text-white">
                <FaPaperPlane className="h-3.5 w-3.5" />
                Send
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Messages;
