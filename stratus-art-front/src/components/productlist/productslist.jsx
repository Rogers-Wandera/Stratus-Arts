import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { Grid } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="tw-bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="tw-relative tw-z-40 lg:tw-hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-25" />
            </Transition.Child>

            <div className="tw-fixed tw-inset-0 tw-z-40 tw-flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="tw-relative tw-ml-auto tw-flex tw-h-full tw-w-full tw-max-w-xs tw-flex-col tw-overflow-y-auto tw-bg-white tw-py-4 tw-pb-12 tw-shadow-xl">
                  <div className="tw-flex tw-items-center tw-justify-between tw-px-4">
                    <h2 className="tw-text-lg tw-font-medium tw-text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="tw--mr-2 tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-md tw-bg-white tw-p-2 tw-text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="tw-sr-only">Close menu</span>
                      <XMarkIcon className="tw-h-6 tw-w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="tw-mt-4 tw-border-t tw-border-gray-200">
                    <h3 className="tw-sr-only">Categories</h3>
                    <ul className="tw-px-2 tw-py-3 tw-font-medium tw-text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a
                            href={category.href}
                            style={{ color: "black" }}
                            className="tw-block tw-px-2 tw-py-3"
                          >
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="tw-border-t tw-border-gray-200 tw-px-4 tw-py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="tw--mx-2 tw--my-3 tw-flow-root">
                              <Disclosure.Button className="tw-flex tw-w-full tw-items-center tw-justify-between tw-bg-white tw-px-2 tw-py-3 tw-text-gray-400 hover:tw-text-gray-500">
                                <span className="tw-font-medium tw-text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="tw-h-5 tw-w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="tw-h-5 tw-w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="tw-pt-6">
                              <div className="tw-space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="tw-flex tw-items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="tw-h-4 tw-w-4 tw-rounded tw-border-gray-300 tw-text-indigo-600 focus:tw-ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="tw-ml-3 tw-min-w-0 tw-flex-1 tw-text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
          <div className="tw-flex tw-items-baseline tw-justify-between tw-border-b tw-border-gray-200 tw-pt-24 tw-pb-6">
            <h1 className="tw-text-4xl tw-font-bold tw-tracking-tight tw-text-gray-900">
              New Arrivals
            </h1>

            <div className="tw-flex tw-items-center">
              <Menu
                as="div"
                className="tw-relative tw-inline-block tw-text-left"
              >
                <div>
                  <Menu.Button className="tw-group tw-inline-flex tw-justify-center tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="tw--mr-1 tw-ml-1 tw-h-5 tw-w-5 tw-flex-shrink-0 tw-text-gray-400 group-hover:tw-text-gray-500"
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
                  <Menu.Items className="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-40 tw-origin-top-right tw-rounded-md tw-bg-white tw-shadow-2xl tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "tw-font-medium tw-text-gray-900"
                                  : "tw-text-gray-500",
                                active ? "tw-bg-gray-100" : "",
                                "tw-block tw-px-4 tw-py-2 tw-text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="tw--m-2 tw-ml-5 tw-p-2 tw-text-gray-400 hover:tw-text-gray-500 sm:tw-ml-7"
              >
                <span className="tw-sr-only">View grid</span>
                <Squares2X2Icon className="tw-h-5 tw-w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="tw--m-2 tw-ml-4 tw-p-2 tw-text-gray-400 hover:tw-text-gray-500 sm:tw-ml-6 lg:tw-hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="tw-sr-only">Filters</span>
                <FunnelIcon className="tw-h-5 tw-w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section
            aria-labelledby="products-heading"
            className="tw-pt-6 tw-pb-24"
          >
            <h2 id="products-heading" className="tw-sr-only">
              Products
            </h2>

            <div className="tw-grid tw-grid-cols-1 tw-gap-x-8 tw-gap-y-10 lg:tw-grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="tw-sr-only">Categories</h3>
                <ul className="tw-space-y-4 tw-border-b tw-border-gray-200 tw-pb-6 tw-text-sm tw-font-medium tw-text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} style={{ color: "black" }}>
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="tw-border-b tw-border-gray-200 tw-py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="tw--my-3 tw-flow-root">
                          <Disclosure.Button className="tw-flextw- w-full tw-items-center tw-justify-between tw-bg-white tw-py-3 tw-text-sm tw-text-gray-400 hover:tw-text-gray-500">
                            <span className="tw-font-medium tw-text-gray-900">
                              {section.name}
                            </span>
                            <span className="tw-ml-6 tw-flex tw-items-center">
                              {open ? (
                                <MinusIcon
                                  className="tw-h-5 tw-w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="tw-h-5 tw-w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="tw-pt-6">
                          <div className="tw-space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="tw-flex tw-items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="tw-h-4 tw-w-4 tw-rounded tw-border-gray-300 tw-text-indigo-600 focus:tw-ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="tw-ml-3 tw-text-sm tw-text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:tw-col-span-3">
                {/* Replace with your content */}
                <div className="tw-h-full tw-rounded-lg tw-border-4 tw-border-dashed tw-border-gray-200 lg:tw-h-full md:tw-h-full">
                  <div className="tw-bg-white">
                    <div className="tw-mx-auto tw-max-w-2xl tw-py-16 tw-px-4 sm:tw-py-24 sm:tw-px-6 lg:tw-max-w-7xl lg:tw-px-8">
                      <div className="tw-mt-6 tw-grid tw-grid-cols-1 tw-gap-y-10 tw-gap-x-6 sm:tw-grid-cols-1  md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-gap-x-8">
                        {products.map((product) => (
                          <div
                            key={product.id}
                            className="tw-group tw-relative"
                          >
                            <div className="tw-min-h-80 tw-aspect-w-1 tw-aspect-h-1 tw-w-full tw-overflow-hidden tw-rounded-md tw-bg-gray-200 group-hover:tw-opacity-75 lg:tw-aspect-none lg:tw-h-100">
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="tw-h-full tw-w-full tw-object-cover tw-object-center lg:tw-h-full lg:tw-w-full"
                              />
                            </div>
                            <div className="tw-mt-4 tw-flex tw-justify-between">
                              <div>
                                <h3 className="tw-text-sm tw-text-gray-700">
                                  <a href={product.href}>
                                    <span
                                      // aria-hidden="true"
                                      className="tw-absolute tw-inset-0"
                                    />
                                    {product.name}
                                  </a>
                                </h3>
                                {/* <p className="tw-mt-1 tw-text-sm tw-text-gray-500">
                                  {product.color}
                                </p> */}
                              </div>
                              <p className="tw-text-sm tw-font-medium tw-text-gray-900">
                                {product.price}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* /End replace */}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
