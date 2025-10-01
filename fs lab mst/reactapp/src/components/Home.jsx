import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p>Welcome to our React Router demo app!</p>
      <nav className="mt-4 space-x-4">
        <Link className="text-blue-500 hover:underline" to="/about">About</Link>
        <br /><br />
        <Link className="text-blue-500 hover:underline" to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
