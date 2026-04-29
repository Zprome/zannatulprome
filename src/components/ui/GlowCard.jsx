function GlowCard({ children, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.75rem] border border-[#232329] bg-[linear-gradient(180deg,rgba(18,18,22,0.92),rgba(12,12,15,0.96))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.34)] transition duration-500 hover:-translate-y-1 hover:border-[#C6A972]/25 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.12),transparent_55%)] opacity-70 transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-white/5" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default GlowCard;