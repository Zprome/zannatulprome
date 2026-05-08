function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.1h4.4V23H.3V8.1Zm7.2 0h4.2v2.04h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.3 2.94 5.3 6.76V23h-4.4v-7.45c0-1.78-.03-4.06-2.48-4.06-2.48 0-2.86 1.94-2.86 3.93V23H7.5V8.1Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-[#F5F1E8]">
              Zannatul Naima Prome
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#C6A972]/70">
              Personal Portfolio
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/Zprome" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition hover:border-[#C6A972]/40 hover:text-[#C6A972]" aria-label="GitHub">
              <GithubIcon />
            </a>

            <a href="https://www.linkedin.com/in/zannatul-naima-prome-4451a9269/" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition hover:border-[#C6A972]/40 hover:text-[#C6A972]" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>

            <a href="mailto:naimaprome521@gmail.com" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition hover:border-[#C6A972]/40 hover:text-[#C6A972]" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Zannatul Naima Prome. All rights reserved.
          </p>

          <p>
            Built with <span className="text-[#C6A972]/80">React</span> &{" "}
            <span className="text-[#C6A972]/80">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}