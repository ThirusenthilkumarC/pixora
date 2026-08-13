function StoryCard({ initials, name, active, accent, status, image }) {
  const openStory = () => {
    window.dispatchEvent(
      new CustomEvent("pixora:openStory", {
        detail: { initials, name, active, accent, image, status },
      })
    );
  };

  return (
    <button
      type="button"
      onClick={openStory}
      className="group w-[88px] shrink-0 rounded-[22px] border border-slate-200 bg-white p-2 text-center shadow-[0_10px_25px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(79,70,229,0.12)]"
      aria-label={`Open story from ${name}`}
    >
      <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-blue-500 to-violet-500 p-[2px] shadow-md shadow-indigo-500/20">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white text-base font-bold text-slate-800">
          {image ? (
            <img src={image} alt={name} className="h-full w-full object-cover" />
          ) : (
            initials
          )}
        </div>
        {active ? (
          <span className="absolute -bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
        ) : null}
      </div>
      <p className="mt-2 truncate text-[11px] font-semibold text-slate-700">{name}</p>
    </button>
  );
}

export default StoryCard;
