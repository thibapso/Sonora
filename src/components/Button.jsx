export default function Button({ title, className = "", ...rest }) {
  return (
    <button
      className={`bg-dark text-light rounded-md py-1.5 px-7 hover:bg-neutral-950 cursor-pointer transition-colors ${className}`}
      {...rest}
    >
      <h1 className="text-sm">{title}</h1>
    </button>
  );
}
