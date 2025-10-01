import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
      <p>You can reach us at contact@example.com</p>
      <nav className="mt-4 space-x-4">
        <Link className="text-blue-500 hover:underline" to="/">Home</Link>
        <br /><br />
        <Link className="text-blue-500 hover:underline" to="/about">About</Link>
      </nav>
    </div>
  );
}
