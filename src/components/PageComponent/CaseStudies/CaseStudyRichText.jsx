export function CaseStudyRichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className="font-semibold text-black">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

export function CaseStudyParagraphs({ paragraphs }) {
  return (
    <div className="flex flex-col gap-4 text-base leading-6 text-[#4e546c]">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          <CaseStudyRichText text={paragraph} />
        </p>
      ))}
    </div>
  );
}
