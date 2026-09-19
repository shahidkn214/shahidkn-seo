type ProcessStepData = {
  id: string;
  label: string;
  title: string;
  description: string;
  order: number;
};

export function ProcessSection({ steps }: { steps: ProcessStepData[] }) {
  return (
    <section className="py-16 border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="font-serif text-3xl font-bold text-text mb-10">
          How an edit gets done
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps
            .sort((a, b) => a.order - b.order)
            .map((step) => (
              <div key={step.id} className="bg-bg p-6">
                <p className="text-text-dim text-xs font-medium uppercase tracking-wide mb-3">
                  {step.label}
                </p>
                <h3 className="font-serif text-xl font-bold text-text mb-2">
                  {step.title}
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
