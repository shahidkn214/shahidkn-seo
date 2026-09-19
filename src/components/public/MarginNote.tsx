type MarginNoteData = {
  id: string;
  bold: string;
  rest: string;
  order: number;
};

export function MarginNote({ notes }: { notes: MarginNoteData[] }) {
  return (
    <div className="border-l-2 border-red pl-4 py-3">
      <p className="text-red text-xs font-semibold tracking-wide uppercase mb-3">
        Editor&apos;s Notes
      </p>
      <ul className="space-y-2">
        {notes
          .sort((a, b) => a.order - b.order)
          .map((note) => (
            <li key={note.id} className="text-sm font-mono leading-relaxed">
              <span className="font-bold text-text">{note.bold}</span>
              <span className="text-text-dim"> — {note.rest}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

