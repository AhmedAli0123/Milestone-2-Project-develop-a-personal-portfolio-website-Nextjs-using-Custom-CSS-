import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/Home" className="Tags">Home</Link><br />
      <Link href="/About" className="Tags">About</Link><br />
      <Link href="/../Contact" className="Tags">Contact</Link>  {/* Note the '/' in /Contact */}
    </nav>
  );
}