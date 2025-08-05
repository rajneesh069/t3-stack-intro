const stars = new Array(5).fill(0);

export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {stars.map((_, idx) => (
        <span key={idx} className="text-xl text-amber-500">
          {idx < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
