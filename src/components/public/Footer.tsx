type FooterProps = {
  name: string;
  role: string;
  tagline: string;
};

export function Footer({ name, role, tagline }: FooterProps) {
  return (
    <footer className="py-8">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-text-dim text-sm">
          {name} · {role}
        </p>
        <p className="text-text-dim text-sm italic">{tagline}</p>
      </div>
    </footer>
  );
}
