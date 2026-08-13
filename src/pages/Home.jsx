import { useEffect, useState } from "react";
import { FaImage, FaVideo, FaTag, FaSmile, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import StoryCard from "../components/StoryCard";
import PostCard from "../components/PostCard";

const initialStories = [
  { initials: "AM", name: "Ava", active: true, accent: "from-indigo-600 to-violet-600" },
  { initials: "JV", name: "Jules", active: true, accent: "from-fuchsia-500 to-violet-600" },
  { initials: "SI", name: "Siena", active: false, accent: "from-sky-500 to-cyan-500" },
  { initials: "LK", name: "Luca", active: true, accent: "from-emerald-500 to-teal-500" },
  { initials: "MI", name: "Mia", active: false, accent: "from-rose-500 to-orange-500" },
  { initials: "NR", name: "Noah", active: true, accent: "from-violet-600 to-indigo-500" },
  { initials: "EM", name: "Emma", active: false, accent: "from-pink-500 to-purple-500" },
  { initials: "DA", name: "Daniel", active: true, accent: "from-blue-500 to-indigo-500" },
];

const initialPosts = [
  {
    user: "Ava Morgan",
    handle: "@ava.pixora",
    time: "2h ago",
    text: "Exploring the Pixora dashboard look — a modern feed with crisp cards, soft shadows, and premium colors.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    likes: 142,
    comments: 34,
    shares: 18,
    accent: "from-indigo-600 to-violet-600",
  },
  {
    user: "Noah Reed",
    handle: "@noah.reed",
    time: "5h ago",
    text: "Share your latest creative moment with Pixora — the feed is ready for stories, posts, and meaningful connections.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    likes: 89,
    comments: 21,
    shares: 6,
    accent: "from-sky-600 to-blue-500",
  },
  {
    user: "Lina Park",
    handle: "@lina_park",
    time: "Yesterday",
    text: "A premium layout helps your content stand out. Keep the interior clean and the interactions soft and elegant.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    likes: 211,
    comments: 49,
    shares: 29,
    accent: "from-pink-500 to-violet-500",
  },
];

function Home() {
  const [stories] = useState(initialStories);
  const [posts, setPosts] = useState(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [storyView, setStoryView] = useState(null);
  const [createText, setCreateText] = useState("");

  useEffect(() => {
    const onSearch = (event) => setSearchQuery(event.detail || "");
    const onOpenStory = (event) => setStoryView(event.detail || null);

    window.addEventListener("pixora:search", onSearch);
    window.addEventListener("pixora:openStory", onOpenStory);

    return () => {
      window.removeEventListener("pixora:search", onSearch);
      window.removeEventListener("pixora:openStory", onOpenStory);
    };
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (!searchQuery) return true;
    const haystack = `${post.user} ${post.handle} ${post.text}`.toLowerCase();
    return haystack.includes(searchQuery.toLowerCase());
  });

  const addPost = () => {
    if (!createText.trim()) return;

    const newPost = {
      user: "You",
      handle: "@you",
      time: "Just now",
      text: createText.trim(),
      image: null,
      likes: 0,
      comments: 0,
      shares: 0,
      accent: "from-indigo-600 to-violet-600",
    };

    setPosts((current) => [newPost, ...current]);
    setCreateText("");
  };

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-5 lg:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">Good afternoon</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Your Pixora feed</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Discover fresh content, trending creators, and premium Pixora updates all in one place.
            </p>
          </div>
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-indigo-500/20">
            Trending now
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Stories</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">Recent activity</h3>
          </div>
          <button type="button" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
            See all
          </button>
        </div>

        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {stories.map((story) => (
            <StoryCard key={story.name} {...story} />
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/20">
            P
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-base font-semibold text-slate-900">Create a post</p>
            <p className="text-sm text-slate-500">Share a new moment with the Pixora community.</p>
          </div>
        </div>

        <textarea
          value={createText}
          onChange={(event) => setCreateText(event.target.value)}
          rows={4}
          placeholder="What's on your mind?"
          className="mt-5 w-full resize-none rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-300 focus:bg-white focus:shadow-[0_0_0_4px_rgba(99,102,241,0.08)]"
        />

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Photo", icon: FaImage },
              { label: "Video", icon: FaVideo },
              { label: "Tag", icon: FaTag },
              { label: "Mood", icon: FaSmile },
            ].map(({ label, icon: Icon }) => (
              <button key={label} type="button" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={addPost}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:opacity-95"
          >
            Post
          </button>
        </div>
      </section>

      <section className="space-y-5">
        {filteredPosts.map((post) => (
          <PostCard key={`${post.user}-${post.time}-${post.text}`} {...post} />
        ))}
      </section>

      {storyView ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-[30px] border border-white/20 bg-slate-900 text-white shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${storyView.accent || "from-indigo-600 to-violet-600"} text-sm font-bold text-white`}>
                  {storyView.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{storyView.name}</p>
                  <p className="text-[10px] text-slate-300">Just now</p>
                </div>
              </div>
              <button type="button" onClick={() => setStoryView(null)} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-200 transition hover:bg-white/20">
                <FaTimes className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="p-4">
              <div className="relative overflow-hidden rounded-[24px] bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80"
                  alt={storyView.name}
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4">
                  <p className="text-sm text-slate-100">A fresh story from {storyView.name}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                  <FaChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex flex-1 items-center justify-center gap-2 px-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <span key={index} className={`h-1.5 flex-1 rounded-full ${index === 0 ? "bg-white" : "bg-white/30"}`} />
                  ))}
                </div>
                <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                  <FaChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
