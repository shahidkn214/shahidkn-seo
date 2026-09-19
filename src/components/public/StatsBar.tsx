type StatData = {
  id: string;
  value: string;
  label: string;
  order: number;
};

export function StatsBar({ stats }: { stats: StatData[] }) {
  return (
    <section className="border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats
            .sort((a, b) => a.order - b.order)
            .map((stat, i) => (
              <div
                key={stat.id}
                className={`py-8 px-4 ${
                  i > 0 ? "border-l border-border" : ""
                } ${i >= 2 ? "border-t border-border lg:border-t-0" : ""}`}
              >
                <p className="font-serif text-3xl font-bold text-text mb-1">
                  {stat.value}
                </p>
                <p className="text-text-dim text-sm">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

