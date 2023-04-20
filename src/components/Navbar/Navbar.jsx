import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [drop, setDrop] = useState(false);
  return (
    <Disclosure as="nav" className="bg-black fixed top-0 left-0 right-0 z-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#3195ff] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3195ff]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center">
                    <Link
                      to="/"
                      className="text-white hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Home
                    </Link>

                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button
                          onMouseOver={() => setDrop(true)}
                          className="p-2 px-2 flex text-[#fff] hover:bg-blue-500 rounded-md"
                          aria-hidden="true"
                        >
                          Destination
                          <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-white hover:text-black"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          className={`absolute right-0 z-10 mt-2 py-2 w-48 origin-top-right bg-white rounded-md shadow-lg focus:outline-none
                                                ${drop ? "block" : "hidden"}`}
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="Destination/Ladakh"
                                className={classNames(
                                  active ? "bg-blue-500" : "",
                                  "block px-4 py-2 text-sm text-gray-900"
                                )}
                              >
                                Ladakh
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="Destination/Himachal"
                                className={classNames(
                                  active ? "bg-blue-500" : "",
                                  "block px-4 py-2 text-sm text-gray-900"
                                )}
                              >
                                Himachal
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="Destination/South-India"
                                className={classNames(
                                  active ? "bg-blue-500" : "",
                                  "block px-4 py-2 text-sm text-900"
                                )}
                              >
                                South India
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <Link
                      to="/about"
                      className="text-white hover:bg-blue-500 hover:text-gray-200 rounded-md px-3 py-2 text-sm font-medium"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      className=" text-white hover:bg-blue-500 hover:text-gray-200 rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/">
                  <img
                    className="h-12 w-auto"
                    src="../images/logo.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="/"
                className="text-white hover:bg-blue-500 hover:text-gray-200 block rounded-md px-3 py-2 text-base font-medium"
              >
                Home
              </Link>
              <Menu as="div" className="relative ml-2">
                <div>
                  <Menu.Button
                    onMouseOver={() => setDrop(true)}
                    className="p-1 px-0 flex items-center hover:bg-blue-500 rounded-md"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div
                      className="relative text-white hover:bg-blue-500 hover:text-gray-200 rounded-md px-1 py-1 text-base block font-medium"
                      aria-hidden="true"
                    >
                      Destination
                    </div>
                    <ChevronDownIcon
                      className="ml-0 mr-0 h-5 w-5 text-white hover:text-black"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="block absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="Destination/Ladakh"
                          className={classNames(
                            active ? "bg-blue-500" : "",
                            "block px-4 py-2 text-sm text-gray-900"
                          )}
                        >
                          Ladakh
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="Destination/Himachal"
                          className={classNames(
                            active ? "bg-blue-500" : "",
                            "block px-4 py-2 text-sm text-gray-900"
                          )}
                        >
                          Himachal
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="Destination/South-India"
                          className={classNames(
                            active ? "bg-blue-500" : "",
                            "block px-4 py-2 text-sm text-gray-900"
                          )}
                        >
                          South India
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Link
                to="/about"
                className="text-white hover:bg-blue-500 block rounded-md px-3 py-2 text-base font-medium"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-white hover:bg-blue-500 block rounded-md px-3 py-2 text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
