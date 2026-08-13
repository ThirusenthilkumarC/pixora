import React, { useMemo, useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaShare,
  FaBookmark,
  FaRegBookmark,
  FaEllipsisH,
  FaCopy,
  FaFlag,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";

function PostCard({
  user,
  handle,
  time,
  text,
  image,
  likes: initialLikes = 0,
  comments: initialComments = 0,
  shares = 0,
  accent = "from-indigo-600 to-violet-600",
}) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [saved, setSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    { user: "Mia", handle: "@mia", time: "8m ago", text: "Love this direction!" },
    { user: "Luca", handle: "@luca", time: "2m ago", text: "This feels premium." },
  ]);

  const commentCount = useMemo(() => comments.length, [comments.length]);

  const toggleLike = () => {
    setLiked((value) => {
      setLikes((current) => current + (value ? -1 : 1));
      return !value;
    });
  };

  const handleAddComment = () => {
    if (!commentText.trim()) return;
    setComments((items) => [
      { user: "You", handle: "@you", time: "now", text: commentText.trim() },
      ...items,
    ]);
    setCommentText("");
    setShowComments(true);
  };

  const toggleSaved = () => setSaved((value) => !value);

  return (
    <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br ${accent} text-lg font-bold text-white shadow-lg`}>
            {user.charAt(0)}
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-slate-900">{user}</h3>
            <p className="truncate text-xs text-slate-500">
              {handle} · {time}
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="More options"
            onClick={() => setShowMenu((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <FaEllipsisH className="h-4 w-4" />
          </button>
          {showMenu ? (
            <div className="absolute right-0 top-12 z-20 w-40 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <button type="button" className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100">
                <FaBookmark className="h-3.5 w-3.5" /> Save post
              </button>
              <button type="button" className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100">
                <FaCopy className="h-3.5 w-3.5" /> Copy link
              </button>
              <button type="button" className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-rose-600 transition hover:bg-rose-50">
                <FaFlag className="h-3.5 w-3.5" /> Report
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-700">{text}</p>

      {image ? (
        <div className="mt-4 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
          <img src={image} alt={`${user} post`} className="aspect-[16/10] w-full object-cover" />
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <span>{likes} likes</span>
          <span>{commentCount} comments</span>
          <span>{shares} shares</span>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Social</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <button
          type="button"
          onClick={toggleLike}
          aria-pressed={liked}
          className={`flex items-center justify-center gap-2 rounded-2xl border px-3 py-2.5 text-sm font-semibold transition ${
            liked
              ? "border-indigo-200 bg-indigo-50 text-indigo-700"
              : "border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-200 hover:text-indigo-700"
          }`}
        >
          {liked ? <FaHeart className="h-4 w-4" /> : <FaRegHeart className="h-4 w-4" />}
          {liked ? "Liked" : "Like"}
        </button>

        <button
          type="button"
          onClick={() => setShowComments((value) => !value)}
          className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-violet-200 hover:text-violet-700"
        >
          <FaRegComment className="h-4 w-4" />
          Comment
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowShare((value) => !value)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            <FaShare className="h-4 w-4" />
            Share
          </button>
          {showShare ? (
            <div className="absolute left-0 top-12 z-20 w-40 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <button type="button" className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100">
                <FaPaperPlane className="h-3.5 w-3.5" /> Share now
              </button>
              <button type="button" className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100">
                <FaCopy className="h-3.5 w-3.5" /> Copy link
              </button>
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={toggleSaved}
          aria-pressed={saved}
          className={`flex items-center justify-center gap-2 rounded-2xl border px-3 py-2.5 text-sm font-semibold transition ${
            saved
              ? "border-slate-300 bg-slate-100 text-slate-900"
              : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:text-slate-900"
          }`}
        >
          {saved ? <FaBookmark className="h-4 w-4" /> : <FaRegBookmark className="h-4 w-4" />}
          {saved ? "Saved" : "Save"}
        </button>
      </div>

      {showComments ? (
        <div className="mt-4 space-y-3 rounded-[22px] border border-slate-200 bg-slate-50 p-3">
          {comments.map((item, index) => (
            <div key={`${item.user}-${index}`} className="flex items-start gap-3 rounded-2xl bg-white p-3 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-xs font-bold text-white">
                {item.user.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">{item.user}</span>
                  <span className="text-xs text-slate-500">{item.handle}</span>
                  <span className="text-[10px] text-slate-400">{item.time}</span>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-700">{item.text}</p>
              </div>
            </div>
          ))}

          <div className="flex gap-2 pt-1">
            <input
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddComment();
              }}
              type="text"
              aria-label="Write comment"
              placeholder="Write a comment..."
              className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-300"
            />
            <button
              type="button"
              onClick={handleAddComment}
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
            >
              <FaCheck className="mr-2 h-3.5 w-3.5" />
              Send
            </button>
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default PostCard;
