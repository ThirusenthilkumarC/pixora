import { FaArrowRight, FaHashtag, FaCircle } from "react-icons/fa";

const suggested = [
  { name: "Mila Hart", handle: "@mila.hart", following: false },
  { name: "Theo Lane", handle: "@theo.lane", following: true },
  { name: "Zoe Finch", handle: "@zoe.finch", following: false },
];

const trending = [
  "#PixoraLaunch",
  "#DesignInspiration",
  "#WeekendVibes",
  "#CreatorSpotlight",
  "#TechCommunity",
];

const online = [
  { name: "Ava", status: "Online" },
  { name: "Jules", status: "Online" },
  { name: "Luca", status: "Online" },
  { name: "Noah", status: "Online" },
];

function RightSidebar() {
  return (
    <div className="space-y-5">
      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Suggested</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">People to follow</h3>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {suggested.map((person) => (
            <div key={person.handle} className="flex items-center justify-between gap-3 rounded-[20px] border border-slate-200 bg-slate-50 p-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 text-sm font-bold text-white">
                  {person.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">{person.name}</p>
                  <p className="truncate text-xs text-slate-500">{person.handle}</p>
                </div>
              </div>

              <button
                type="button"
                className={`inline-flex min-w-[94px] items-center justify-center rounded-2xl px-3 py-2 text-xs font-semibold transition ${
                  person.following
                    ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                    : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20 hover:opacity-95"
                }`}
              >
                {person.following ? "Following" : "Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Trending</p>
          <FaArrowRight className="h-3.5 w-3.5 text-slate-400" />
        </div>

        <div className="mt-4 space-y-2.5">
          {trending.map((item) => (
            <button
              key={item}
              type="button"
              className="flex w-full items-center justify-between rounded-[18px] border border-slate-200 bg-slate-50 px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
            >
              <span className="flex items-center gap-2">
                <FaHashtag className="h-3 w-3 text-slate-400" />
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Online</p>
        <div className="mt-4 space-y-3">
          {online.map((person) => (
            <div key={person.name} className="flex items-center gap-3 rounded-[18px] border border-slate-200 bg-slate-50 px-3 py-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 text-sm font-bold text-white">
                {person.name.charAt(0)}
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{person.name}</p>
                <p className="text-[11px] text-slate-500">{person.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
