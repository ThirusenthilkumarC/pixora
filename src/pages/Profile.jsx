import { FaCheckCircle, FaCog, FaEnvelope, FaUserPlus } from "react-icons/fa";

const posts = [
  { title: "Creative stack", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" },
  { title: "Night work", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80" },
  { title: "Launch moodboard", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" },
  { title: "Team energy", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80" },
];

const tabs = ["Posts", "Media", "Saved", "Tagged"];

function Profile() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
        <div className="h-44 bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 sm:h-52" />
        <div className="p-4 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <div className="relative -mt-14 sm:-mt-16">
                <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border-4 border-white bg-gradient-to-br from-indigo-600 to-violet-600 text-2xl font-bold text-white shadow-xl sm:h-28 sm:w-28">
                  A
                </div>
                <span className="absolute -bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-[8px] text-white">
                  <FaCheckCircle className="h-3 w-3" />
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Ava Morgan</h2>
                <p className="text-sm text-slate-500">@ava.pixora</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button type="button" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                <FaEnvelope className="h-3.5 w-3.5" /> Message
              </button>
              <button type="button" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20">
                <FaUserPlus className="h-3.5 w-3.5" /> Follow
              </button>
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700">
                <FaCog className="h-4 w-4" />
              </button>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
            Design systems lead building premium digital experiences for bold, curious communities.
          </p>

          <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-600">
            <div><span className="mr-1 font-bold text-slate-900">248</span>Posts</div>
            <div><span className="mr-1 font-bold text-slate-900">42.8k</span>Followers</div>
            <div><span className="mr-1 font-bold text-slate-900">1,482</span>Following</div>
          </div>
        </div>
      </section>

      <section className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-5">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${index === 0 ? "bg-indigo-600 text-white" : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50">
              <img src={post.image} alt={post.title} className="aspect-[4/4] w-full object-cover" />
              <div className="p-3">
                <p className="text-sm font-semibold text-slate-900">{post.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile;