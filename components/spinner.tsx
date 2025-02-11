export default function Spinner({ color = "primary", size = 28 }) {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-4 border-solid border-${color} border-t-transparent`}
        style={{ height: `${size}px`, width: `${size}px` }}
      ></div>
    </div>
  );
}
