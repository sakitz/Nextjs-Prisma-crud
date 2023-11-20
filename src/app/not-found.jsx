import Link from "next/link";

function NotFound() {
  return (
    <section className="flex h-[calc(100vh - 7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Not-Found</h1>
        <Link className=" bg-slate-500 p-2 rounded-md" href="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
