const savedPosts = [
  { title: "Brand guide systems", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" },
  { title: "Creator workspace", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80" },
  { title: "Product launch teaser", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80" },
  { title: "Moodboard version 2", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" },
];

function Saved() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Library</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Saved posts</h2>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {savedPosts.map((post) => (
          <article key={post.title} className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50">
            <img src={post.image} alt={post.title} className="aspect-[4/3] w-full object-cover" />
            <div className="p-4">
              <p className="text-base font-semibold text-slate-900">{post.title}</p>
              <button type="button" className="mt-3 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700">Unsave</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Saved;
