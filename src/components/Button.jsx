export default function Button(props) {
  return (
    <main className="bg-dark text-light rounded-md py-1.5 px-7 hover:bg-neutral-950 cursor-pointer transition-colors">
      <h1 className="text-sm">{props.title}</h1>
    </main>
  );
}
