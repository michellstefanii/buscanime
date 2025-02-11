export function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Type something here..."
      value={value}
      onChange={onChange}
      className="flex-1 rounded-lg border border-[#C4CAD4] px-4 py-2 focus:border-primary focus:outline-none h-[38px] text-sm font-normal text-[#A7B0BE]"
    />
  );
}
