export function ArticleRichText({ text }) {
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

export function ArticleParagraphs({ paragraphs, className = "" }) {
  return (
    <div className={`flex flex-col gap-4 text-base leading-6 text-[#4e546c] ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          <ArticleRichText text={paragraph} />
        </p>
      ))}
    </div>
  );
}
