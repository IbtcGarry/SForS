const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Behance", href: "https://behance.net" },
];

export default function Footer() {
  return (
    <footer className="bg-thrasher-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl tracking-tight">
            SFOR<span className="text-thrasher-red">S</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-white/60">
            Portraits with the quiet of a studio and the noise of the street.
          </p>
        </div>

        <ul className="flex gap-6 text-sm uppercase tracking-widest">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 transition-colors hover:text-thrasher-red"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-widest text-white/40">
        © {new Date().getFullYear()} SForS Photography. All rights reserved.
      </div>
    </footer>
  );
}
