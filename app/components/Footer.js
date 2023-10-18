"use client";
export default function Footer() {
  return (
    <div className=" top-0 left-0 mt-2 justify-center items-center flex bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl  items-center justify-between  p-4">
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    LOCATIONS
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div></div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    QUICK LINKS
                  </h2>
                  <hr />
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mt-4">
                      <a
                        href="https://github.com/themesberg/flowbite"
                        className="hover:underline "
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Home Interior
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Office Interior
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Hotel Interior
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Restaurant Interior
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Bedroom Interior
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Living Room Interior
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    CITIES
                  </h2>
                  <hr />
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mt-4">
                      <a href="/" className="hover:underline">
                        Interior Design Services in Bhuj
                      </a>
                    </li>
                    <li className="mt-4">
                      <a href="/" className="hover:underline">
                        Interior Design Services in Ahmedabad
                      </a>
                    </li>
                    <li className="mt-4">
                      <a href="/" className="hover:underline">
                        Interior Design Services in Surat
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
