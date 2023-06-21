"use client";
import AuthProvider from "@/provider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import SignInButton from "../button/SignInButton";

export default function NavMenu() {
  return (
    <AuthProvider>
      <nav className="flex justify-between items-center mb-4">
        <Link href={"/"}>
          <Image
            className="rounded-full border-double border-4 border-pink-500 "
            src={"/images/logo.png"}
            alt="logo"
            width={"100"}
            height={"100"}
          />
        </Link>
        <ul className="flex justify-around space-x-4 items-center">
          <li>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
    </AuthProvider>
  );
}
