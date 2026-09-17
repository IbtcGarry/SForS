// Static layout page -- no state or logic. A responsive two-column grid
// (single column on mobile, [1fr_1.2fr] from md: up) with a portrait on
// the left and bio content on the right.
export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
        <img
          src="https://picsum.photos/seed/sfors-about/900/1100"
          alt="Placeholder portrait of the photographer"
          className="aspect-[4/5] w-full object-cover"
        />

        <div>
          <h1 className="font-display text-4xl tracking-tight">About</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            SForS sits at the intersection of two photographic instincts: the
            controlled, patient light of studio portraiture, and the fast,
            unrepeatable energy of skate and street photography.
          </p>
          {/* Red left-border pull-quote, matching the Thrasher accent used
              throughout the site. */}
          <blockquote className="mt-8 border-l-4 border-thrasher-red pl-4 font-display text-2xl tracking-tight text-ink">
            "Every frame is either a held breath or a caught one."
          </blockquote>
          <p className="mt-8 leading-relaxed text-ink/80">
            Trained on portrait and editorial work, drawn to the grain and
            grit of action photography — this site pulls both threads into
            one body of work. Replace this bio with your own story, and swap
            the placeholder portraits throughout the site for your real
            photos.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="uppercase tracking-widest text-thrasher-red">
                Focus
              </p>
              <p className="mt-1 text-ink/80">Portrait, Editorial, Action</p>
            </div>
            <div>
              <p className="uppercase tracking-widest text-thrasher-red">
                Based
              </p>
              <p className="mt-1 text-ink/80">Chicago, IL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
