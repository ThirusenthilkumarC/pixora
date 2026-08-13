import { FaSearch, FaHashtag, FaArrowRight } from "react-icons/fa";

const posts = [
  { title: "Creative studio energy", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80", accent: "from-indigo-500 to-violet-500" },
  { title: "Night mode inspiration", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80", accent: "from-pink-500 to-violet-500" },
  { title: "Brand story moments", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", accent: "from-sky-500 to-indigo-500" },
  { title: "Design systems in motion", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", accent: "from-violet-500 to-fuchsia-500" },
  { title: "Workday aesthetics", image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80", accent: "from-cyan-500 to-blue-500" },
  { title: "Creator spotlight", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80", accent: "from-rose-500 to-orange-500" },
];

const creators = [
  { name: "Nia Sol", handle: "@nia.sol", followers: "98k" },
  { name: "Eli North", handle: "@eli.north", followers: "73k" },
  { name: "Mara Reed", handle: "@mara.reed", followers: "116k" },
];

const hashtags = ["#DesignSystems", "#Pixora", "#CreatorEconomy", "#MobileUI", "#BrandStory"]; 

function Explore() {
  return (
    <div className="space-y-6">
      <section className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3">
            <FaSearch className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search creators, posts, hashtags"
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              aria-label="Search explore content"
            />
          </div>
          <button type="button" className="rounded-[18px] bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20">Explore</button>
        </div>
      </section>

      <section className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Trending</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Explore Pixora</h2>
          </div>
          <button type="button" className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">View all <FaArrowRight className="h-3 w-3" /></button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded-[26px] border border-slate-200 bg-slate-50">
              <div className="relative overflow-hidden">
                <img src={post.image} alt={post.title} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t ${post.accent} opacity-70`} />
              </div>
              <div className="p-4">
                <p className="text-base font-semibold text-slate-900">{post.title}</p>
                <p className="mt-2 text-xs text-slate-500">Curated by Pixora editors</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Creators</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Popular creators</h3>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {creators.map((creator) => (
              <div key={creator.handle} className="flex items-center justify-between gap-3 rounded-[20px] border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white">{creator.name.charAt(0)}</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{creator.name}</p>
                    <p className="text-xs text-slate-500">{creator.handle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Followers</p>
                  <p className="text-sm font-semibold text-slate-900">{creator.followers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Discover</p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">Popular hashtags</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <button key={tag} type="button" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                <span className="inline-flex items-center gap-1"><FaHashtag className="h-3 w-3" /> {tag}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
