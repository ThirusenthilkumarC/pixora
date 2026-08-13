import { FaBell, FaHeart, FaComment, FaUserPlus, FaAt, FaEnvelope, FaStar } from "react-icons/fa";

const items = [
  { type: "like", title: "Liked your post", description: "Ava liked your visual concept", time: "5m ago", unread: true },
  { type: "comment", title: "Commented on your post", description: "Theo left a note on your launch teaser", time: "23m ago", unread: true },
  { type: "follow", title: "Started following you", description: "Mila began following your profile", time: "1h ago", unread: false },
  { type: "mention", title: "Mentioned you", description: "@noah mentioned you in a post", time: "3h ago", unread: false },
  { type: "message", title: "New message", description: "A new conversation arrived from Jules", time: "5h ago", unread: false },
  { type: "story", title: "New story", description: "Luca shared a fresh update", time: "Yesterday", unread: false },
];

const iconMap = {
  like: FaHeart,
  comment: FaComment,
  follow: FaUserPlus,
  mention: FaAt,
  message: FaEnvelope,
  story: FaStar,
};

function Notifications() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400"> Updates</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Notifications</h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <FaBell className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => {
          const Icon = iconMap[item.type];
          return (
            <div key={item.title} className={`flex items-start gap-3 rounded-[22px] border p-3 ${item.unread ? "border-indigo-200 bg-indigo-50" : "border-slate-200 bg-slate-50"}`}>
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.unread ? "bg-indigo-600 text-white" : "bg-white text-slate-700"}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  {item.unread ? <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" /> : null}
                </div>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                <p className="mt-1 text-xs text-slate-400">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notifications;
