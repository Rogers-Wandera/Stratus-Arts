import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "About us", href: "#", current: false },
  { name: "Contact us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderNav() {
  return (
    <Disclosure as="nav" className="tw-bg-gray-800">
      {({ open }) => (
        <>
          <div className="tw-mx-auto tw-max-w-7xl tw-px-2 sm:tw-px-6 tw-lg:px-8">
            <div className="tw-relative tw-flex tw-h-16 tw-items-center tw-justify-between">
              <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center sm:tw-hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400 hover:tw-bg-gray-700 hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-white">
                  <span className="tw-sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="tw-block tw-h-6 tw-w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="tw-block tw-h-6 tw-w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="tw-flex tw-flex-1 tw-items-center tw-justify-center sm:tw-items-stretch sm:tw-justify-start">
                <div className="tw-flex tw-flex-shrink-0 tw-items-center">
                  <img
                    className="tw-block tw-h-8 tw-w-auto lg:tw-hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="tw-hidden tw-h-8 tw-w-auto lg:tw-block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="tw-hidden sm:tw-ml-6 sm:tw-block">
                  <div className="tw-flex tw-space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "tw-bg-gray-900 tw-text-white"
                            : "tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white",
                          "tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-2 sm:tw-static sm:tw-inset-auto sm:tw-ml-6 sm:tw-pr-0">
                <button
                  type="button"
                  className="tw-rounded-full tw-bg-gray-800 tw-p-1 tw-text-gray-400 hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white focus:tw-ring-offset-2 focus:tw-ring-offset-gray-800"
                >
                  <span className="tw-sr-only">View notifications</span>
                  <BellIcon className="tw-h-6 tw-w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="tw-relative tw-ml-3">
                  <div>
                    <Menu.Button className="tw-flex tw-rounded-full tw-bg-gray-800 tw-text-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white focus:tw-ring-offset-2 focus:tw-ring-offset-gray-800">
                      <span className="tw-sr-only">Open user menu</span>
                      <img
                        className="tw-h-8 tw-w-8 tw-rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="ttw-ransition tw-ease-out tw-duration-100"
                    enterFrom="tw-transform tw-opacity-0 tw-scale-95"
                    enterTo="tw-transform tw-opacity-100 tw-scale-100"
                    leave="tw-transition tw-ease-in tw-duration-75"
                    leaveFrom="tw-transform tw-opacity-100 tw-scale-100"
                    leaveTo="tw-transform tw-opacity-0 tw-scale-95"
                  >
                    <Menu.Items className="tw-absolute tw-right-0 z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? "tw-bg-gray-100" : "",
                              "tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? "tw-bg-gray-100" : "",
                              "tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? "tw-bg-gray-100" : "",
                              "tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:tw-hidden">
            <div className="tw-space-y-1 tw-px-2 tw-pt-2 tw-pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "tw-bg-gray-900 tw-text-white"
                      : "tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white",
                    "tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
