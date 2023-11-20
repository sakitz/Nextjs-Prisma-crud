import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-slate-800 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className="font-bold text-4xl py-4">NextCRUD</h3>
        </Link>

        <ul className="flex gap-x-4 font-semibold">
          <li className="hover:text-lg transition-all">
            <Link href="/new">Nueva tarea</Link>
          </li>
          <li className="hover:text-lg transition-all">
            <Link href="/about">sobre mi</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
