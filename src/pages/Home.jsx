import { Link } from "react-router-dom";
import photos from "../data/photos.js";

const featured = photos.slice(0, 3);

export default function Home() {
  return (
    <div>
      <section className="relative flex h-[80vh] min-h-[520px] items-end overflow-hidden">
        <img
          src="https://picsum.photos/seed/sfors-hero/1920/1200"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-thrasher-black/90 via-thrasher-black/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-thrasher-red">
            Photography
          </p>
          <h1 className="font-display text-5xl leading-none tracking-tight sm:text-7xl">
            QUIET PORTRAITS.
            <br />
            LOUD STREETS.
          </h1>
          <p className="mt-6 max-w-md text-white/80">
            SForS pairs studio-grade portraiture with the raw energy of skate
            and street photography — two worlds, one frame.
          </p>
          <Link
            to="/gallery"
            className="mt-8 inline-block bg-thrasher-red px-6 py-3 text-sm uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5"
          >
            View the Work
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-3xl tracking-tight">Featured</h2>
          <Link
            to="/gallery"
            className="text-sm uppercase tracking-widest text-ink/70 hover:text-thrasher-red"
          >
            Full Gallery →
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {featured.map((photo) => (
            <figure key={photo.id} className="group">
              <div className="overflow-hidden bg-ink/5">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink/70">
                <span className="mr-2 text-thrasher-red">
                  {photo.category}
                </span>
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-thrasher-black py-20 text-center text-white">
        <p className="mx-auto max-w-2xl px-6 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
          NO STUDIO IS TOO QUIET. NO STREET IS TOO LOUD.
        </p>
        <Link
          to="/about"
          className="mt-8 inline-block border border-white/30 px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:border-thrasher-red hover:text-thrasher-red"
        >
          Meet the Photographer
        </Link>
      </section>
    </div>
  );
}
