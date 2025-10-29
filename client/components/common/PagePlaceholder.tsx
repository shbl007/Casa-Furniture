export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary bg-opacity-5">
      <div className="text-center max-w-md px-4">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center">
            <div className="text-4xl">🏗️</div>
          </div>
        </div>
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          {title}
        </h1>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          {description}
        </p>
        <p className="text-muted-foreground text-sm">
          This page is coming soon. Let me know what you'd like to see here by
          continuing to chat!
        </p>
      </div>
    </div>
  );
}
