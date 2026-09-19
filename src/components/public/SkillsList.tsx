type SkillData = {
  id: string;
  skill: string;
  tool: string;
  column: number;
  order: number;
};

export function SkillsList({ skills }: { skills: SkillData[] }) {
  const leftColumn = skills
    .filter((s) => s.column === 0)
    .sort((a, b) => a.order - b.order);
  const rightColumn = skills
    .filter((s) => s.column === 1)
    .sort((a, b) => a.order - b.order);

  return (
    <section className="py-16 border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="font-serif text-3xl font-bold text-text mb-10">
          Skills & tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillColumn skills={leftColumn} />
          <SkillColumn skills={rightColumn} />
        </div>
      </div>
    </section>
  );
}

function SkillColumn({ skills }: { skills: SkillData[] }) {
  return (
    <div className="divide-y divide-border">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="flex items-center justify-between py-3"
        >
          <span className="text-text font-medium text-sm">
            {skill.skill}
          </span>
          <span className="text-text-dim text-xs ml-4 shrink-0">
            {skill.tool}
          </span>
        </div>
      ))}
    </div>
  );
}
