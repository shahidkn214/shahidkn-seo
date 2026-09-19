export function Contact({ email }: { email: string }) {
  return (
    <section id="contact" className="py-16 border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="font-serif text-3xl font-bold text-text mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-text-dim text-lg leading-relaxed max-w-xl mb-8">
          Have an AI-generated draft that needs a human editor&apos;s eye? I turn rough
          copy into publish-ready articles that rank and read like they were
          written by someone who tested every claim.
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center px-6 py-3 bg-red text-white font-medium rounded-md hover:opacity-90 transition-opacity"
        >
          {email}
        </a>
      </div>
    </section>
  );
}
