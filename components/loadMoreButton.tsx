export function LoadMoreButton({
  loading,
  onClick,
}: {
  loading: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="mt-8 w-full rounded-lg bg-warning py-3 font-medium text-white hover:bg-warning/90 focus:outline-none focus:ring-2 focus:ring-warning focus:ring-offset-2"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Carregando..." : "+ Ver mais"}
    </button>
  );
}
