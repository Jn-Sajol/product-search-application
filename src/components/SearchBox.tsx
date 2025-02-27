"use client";

export default function SearchBox({ value, setValue }: { value: string; setValue: (query: string) => void }) {
  return (
    <input
      type="text"
      placeholder="Enter a product name..."
      className="border p-2 w-full rounded"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
}
