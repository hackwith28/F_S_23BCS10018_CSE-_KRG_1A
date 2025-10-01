import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p>This page gives you information about our app.</p>
      <nav className="mt-4 space-x-4">
        <Link className="text-blue-500 hover:underline" to="/">Home</Link>
        <br /><br />
        <Link className="text-blue-500 hover:underline" to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
