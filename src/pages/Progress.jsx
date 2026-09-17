import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import BookPage from "../components/BookPage.jsx";

// Single source of truth for how many pages the book has. Change this
// and the page-generation loop below automatically produces more/fewer
// EntryPage instances (page 1 always renders as the cover, the last
// page always renders as the closing page -- see the .map() below).
const TOTAL_PAGES = 10;

// --- Page components -----------------------------------------------
// Each one renders a <BookPage> (see BookPage.jsx for why that wrapper
// is required) styled differently depending on its role in the book.

function CoverPage({ pageNumber }) {
  return (
    <BookPage className="flex flex-col justify-between bg-thrasher-black p-8 text-white">
      <p className="text-xs uppercase tracking-widest text-white/50">
        Page {pageNumber} / {TOTAL_PAGES}
      </p>
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-thrasher-red">
          SForS
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          PROGRESS
        </h1>
        <div className="mt-4 h-1 w-16 bg-thrasher-red" />
        <p className="mt-4 max-w-xs text-sm text-white/70">
          A page-by-page log of the work in progress — flip through below.
        </p>
      </div>
      <p className="text-xs uppercase tracking-widest text-white/40">
        Click or use the arrows to turn the page →
      </p>
    </BookPage>
  );
}

function ClosingPage({ pageNumber }) {
  return (
    <BookPage className="flex flex-col items-center justify-center gap-4 bg-thrasher-black p-8 text-center text-white">
      <p className="text-xs uppercase tracking-widest text-white/50">
        Page {pageNumber} / {TOTAL_PAGES}
      </p>
      <p className="font-display text-3xl tracking-tight">
        MORE TO COME<span className="text-thrasher-red">.</span>
      </p>
      <p className="max-w-xs text-sm text-white/70">
        This book grows with the project — new pages get added as progress
        happens.
      </p>
    </BookPage>
  );
}

function EntryPage({ pageNumber }) {
  return (
    <BookPage className="flex flex-col justify-between bg-paper p-8">
      <div className="flex items-center justify-between text-xs uppercase tracking-widest text-ink/40">
        <span>SForS / Progress</span>
        <span>
          {pageNumber} / {TOTAL_PAGES}
        </span>
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest text-thrasher-red">
          Entry
        </p>
        <h2 className="mt-1 font-display text-2xl tracking-tight text-ink">
          Untitled update
        </h2>
        <div className="mt-6 flex h-40 items-center justify-center border border-dashed border-ink/20 text-xs uppercase tracking-widest text-ink/30">
          Add a photo or note here
        </div>
        <p className="mt-6 text-sm leading-relaxed text-ink/60">
          Placeholder text — replace this with whatever you're tracking: a
          shoot, a shot list, a note to future you.
        </p>
      </div>

      <div className="h-1 w-10 bg-thrasher-red" />
    </BookPage>
  );
}

/** The "Progress" tab: a 10-page interactive flipbook. */
export default function Progress() {
  // Ref to the <HTMLFlipBook> instance. react-pageflip exposes one
  // method on this ref, `pageFlip()`, which returns the underlying
  // page-flip animation-engine instance -- THAT object has the real
  // control methods (flipNext, flipPrev, flip(pageIndex), ...). This is
  // why the buttons below call bookRef.current?.pageFlip()?.flipNext()
  // rather than something simpler: it's two layers of indirection
  // (React ref -> pageFlip() -> the animation engine), and `?.`
  // (optional chaining) guards against calling it before the ref is
  // attached.
  const bookRef = useRef(null);

  // Current page index (0-based) for the "Page X of 10" counter.
  const [page, setPage] = useState(0);

  const goPrev = () => bookRef.current?.pageFlip()?.flipPrev();
  const goNext = () => bookRef.current?.pageFlip()?.flipNext();

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16">
      <h1 className="font-display text-4xl tracking-tight">Progress</h1>
      <p className="mt-3 max-w-xl text-center text-ink/70">
        A flip-through book, ten pages for now — click a page edge or use the
        arrows below to turn the page.
      </p>

      <div className="mt-10 w-full max-w-md">
        <HTMLFlipBook
          ref={bookRef}
          width={340}
          height={480}
          // "stretch" + the min/max bounds below let the book resize
          // responsively instead of staying a fixed pixel size.
          size="stretch"
          minWidth={280}
          maxWidth={480}
          minHeight={400}
          maxHeight={680}
          maxShadowOpacity={0.4}
          // false = page 1 renders as a normal page, not a special
          // single-page "hard cover". The cover *look* here comes
          // entirely from CoverPage's own styling, not a library feature.
          showCover={false}
          // Stops touch-scroll gestures on mobile from being hijacked by
          // the page-flip drag gesture.
          mobileScrollSupport={true}
          className="mx-auto shadow-2xl"
          // Called by the library after every flip completes; e.data is
          // the new page index (0-based) it hands back.
          onFlip={(e) => setPage(e.data)}
        >
          {/* Builds [1, 2, ..., TOTAL_PAGES] then maps each number to a
              page component: page 1 -> cover, last page -> closing,
              everything else -> a content entry. */}
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => {
            if (n === 1) return <CoverPage key={n} pageNumber={n} />;
            if (n === TOTAL_PAGES)
              return <ClosingPage key={n} pageNumber={n} />;
            return <EntryPage key={n} pageNumber={n} />;
          })}
        </HTMLFlipBook>
      </div>

      {/* Explicit Prev/Next buttons alongside the library's own built-in
          click/drag-on-page-edge behavior -- clicking a tiny page corner
          isn't obvious or keyboard-friendly, so these exist for
          discoverability and accessibility. */}
      <div className="mt-8 flex items-center gap-6">
        <button
          type="button"
          onClick={goPrev}
          className="border border-ink/20 px-5 py-2 text-sm uppercase tracking-widest text-ink/70 transition-colors hover:border-thrasher-red hover:text-thrasher-red"
        >
          ← Prev
        </button>
        <span className="text-sm uppercase tracking-widest text-ink/50">
          Page {page + 1} of {TOTAL_PAGES}
        </span>
        <button
          type="button"
          onClick={goNext}
          className="bg-thrasher-black px-5 py-2 text-sm uppercase tracking-widest text-white transition-colors hover:bg-thrasher-red"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
