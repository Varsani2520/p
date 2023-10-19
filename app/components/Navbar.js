"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <nav className="bg-green-300  fixed w-full z-20 top-0 left-0 border-b  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <Image src="https://img.freepik.com/premium-vector/furniture-interior-logo-real-estate_332533-447.jpg" className="h-8 mr-3" alt="designer" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Flowbite
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              onClick={() => router.push("/login")}
            >
              Login
            </button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  cursor-pointer"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about_us"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  // onClick={() => router.push("/services")}
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  cursor-pointer"
                >
                  <select className="bg-green-300 text-black ">
                    <option value="0">services</option>
                    <option value="1" onClick={() => router.push("/1")}>
                      Home
                    </option>
                    <option value="1" onClick={() => router.push("/2")}>
                      Office
                    </option>
                    <option value="1" onClick={() => router.push("/3")}>
                      Hotel
                    </option>
                    <option value="1" onClick={() => router.push("/4")}>
                      Restaurant
                    </option>
                  </select>
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    router.push("/contact-interior-design-services")
                  }
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-pointer"
                >
                  My Work
                </a>
              </li>
              <li>
                <Link
                  href="/contact-interior-design-services"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
