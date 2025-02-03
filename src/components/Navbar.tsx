import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="heading-with-image flex justify-center items-center">
        <Image
          alt="profile"
          src={"/profile_1.jpg"}
          width={40}
          height={40}
          priority
          className="rounded-lg shadow-md"
          style={{ objectFit: "cover" }}
        />
        <h1 className="">
          <span className="text-blue-200">Hamdan</span> Vohra
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
