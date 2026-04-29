function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[#C6A972]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-heading text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#F5F1E8] sm:text-[2.4rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-[15px] leading-8 text-[#AFA89B] sm:text-[15.5px]">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;