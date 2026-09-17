import { useMemo, useState } from "react";
import photos from "../data/photos.js";

// Built once at module load: `new Set(...)` collects each unique
// `category` string from the data (a Set auto-dedupes), spread into an
// array and prefixed with "All". Add a new category value in photos.js
// and a matching filter button appears here automatically -- nothing in
// this file needs to change.
const categories = ["All", ...new Set(photos.map((p) => p.category))];

/** Full photo grid with category filter buttons. */
export default function Gallery() {
  // Currently selected category filter.
  const [filter, setFilter] = useState("All");

  // Recomputed only when `filter` changes (useMemo), rather than on every
  // re-render for unrelated reasons -- a minor perf habit, not strictly
  // necessary at this data size.
  const visible = useMemo(
    () =>
      filter === "All" ? photos : photos.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl tracking-tight">Gallery</h1>
      <p className="mt-3 max-w-xl text-ink/70">
        Placeholder frames below — swap them for real photos in{" "}
        <code className="rounded bg-ink/5 px-1.5 py-0.5 text-sm">
          src/data/photos.js
        </code>
        .
      </p>

      {/* Filter pills -- className switches per-button based on whether
          it matches the current `filter`. */}
      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
              filter === cat
                ? "bg-thrasher-red text-white"
                : "bg-ink/5 text-ink/70 hover:bg-ink/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((photo) => (
          <figure key={photo.id} className="group overflow-hidden bg-ink/5">
            <img
              src={photo.src}
              alt={photo.alt}
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="flex items-center justify-between px-3 py-3 text-sm text-ink/70">
              <span>{photo.caption}</span>
              <span className="text-thrasher-red">{photo.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
