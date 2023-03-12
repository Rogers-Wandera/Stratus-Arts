import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import ProductDetailsInfo from "./info";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "tw-bg-white", selectedClass: "tw-ring-gray-400" },
    {
      name: "Gray",
      class: "tw-bg-gray-200",
      selectedClass: "tw-ring-gray-400",
    },
    {
      name: "Black",
      class: "tw-bg-gray-900",
      selectedClass: "tw-ring-gray-900",
    },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="tw-bg-white">
      <div className="tw-pt-6">
        <nav aria-label="tw-Breadcrumb">
          <ol className="tw-mx-auto tw-flex tw-max-w-2xl tw-items-center tw-space-x-2 tw-px-4 sm:tw-px-6 lg:tw-max-w-7xl lg:tw-px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="tw-flex tw-items-center">
                  <a
                    href={breadcrumb.href}
                    className="tw-mr-2 tw-text-sm tw-font-medium tw-text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="tw-h-5 tw-w-4 tw-text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="tw-text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="tw-font-medium tw-text-gray-500 hover:tw-text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="tw-mx-auto tw-mt-6 tw-max-w-2xl sm:tw-px-6 lg:tw-grid lg:tw-max-w-7xl lg:tw-grid-cols-3 lg:tw-gap-x-8 lg:tw-px-8">
          <div className="tw-aspect-w-3 tw-aspect-h-4 tw-hidden tw-overflow-hidden tw-rounded-lg lg:tw-block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="tw-h-full tw-w-full tw-object-cover tw-object-center"
            />
          </div>
          <div className="tw-hidden lg:tw-grid lg:tw-grid-cols-1 lg:tw-gap-y-8">
            <div className="tw-aspect-w-3 tw-aspect-h-2 tw-overflow-hidden tw-rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="tw-h-full tw-w-full tw-object-cover tw-object-center"
              />
            </div>
            <div className="tw-aspect-w-3 tw-aspect-h-2 tw-overflow-hidden tw-rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="tw-h-full tw-w-full tw-object-cover tw-object-center"
              />
            </div>
          </div>
          <div className="tw-aspect-w-4 tw-aspect-h-5 sm:tw-overflow-hidden sm:tw-rounded-lg lg:tw-aspect-w-3 lg:tw-aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="tw-h-full tw-w-full tw-object-cover tw-object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="tw-mx-auto tw-max-w-2xl tw-px-4 tw-pt-10 tw-pb-16 sm:tw-px-6 lg:tw-grid lg:tw-max-w-7xl lg:tw-grid-cols-3 lg:tw-grid-rows-[auto,auto,1fr] lg:tw-gap-x-8 lg:tw-px-8 lg:tw-pt-16 lg:tw-pb-24">
          <div className="lg:tw-col-span-2 lg:tw-border-r lg:tw-border-gray-200 lg:tw-pr-8">
            <h1 className="tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="tw-mt-4 lg:tw-row-span-3 lg:tw-mt-0">
            <h2 className="tw-sr-only">Product information</h2>
            <p className="tw-text-3xl tw-tracking-tight tw-text-gray-900">
              {product.price}
            </p>
            {/* Reviews */}
            <div className="tw-mt-6">
              <h3 className="tw-sr-only">Reviews</h3>
              <div className="tw-flex tw-items-center">
                <div className="tw-flex tw-items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "tw-text-gray-900"
                          : "tw-text-gray-200",
                        "tw-h-5 tw-w-5 tw-flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="tw-sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="tw-ml-3 tw-text-sm tw-font-medium tw-text-indigo-600 hover:tw-text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            <form className="tw-mt-10">
              {/* Colors */}
              <div>
                <h3 className="tw-text-sm tw-font-medium tw-text-gray-900">
                  Color
                </h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="tw-mt-4"
                >
                  <RadioGroup.Label className="tw-sr-only">
                    {" "}
                    Choose a color{" "}
                  </RadioGroup.Label>
                  <div className="tw-flex tw-items-center tw-space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "tw-ring tw-ring-offset-1" : "",
                            !active && checked ? "tw-ring-2" : "",
                            "tw-relative tw--m-0.5 tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-full tw-p-0.5 focus:tw-outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="tw-sr-only">
                          {" "}
                          {color.name}{" "}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "tw-h-8 tw-w-8 tw-rounded-full tw-border tw-border-black tw-border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="tw-mt-10">
                <div className="tw-flex tw-items-center tw-justify-between">
                  <h3 className="tw-text-sm tw-font-medium tw-text-gray-900">
                    Size
                  </h3>
                  <a
                    href="/"
                    className="tw-text-sm tw-font-medium tw-text-indigo-600 hover:tw-text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="tw-mt-4"
                >
                  <RadioGroup.Label className="tw-sr-only">
                    {" "}
                    Choose a size{" "}
                  </RadioGroup.Label>
                  <div className="tw-grid tw-grid-cols-4 tw-gap-4 sm:tw-grid-cols-8 lg:tw-grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "tw-cursor-pointer tw-bg-white tw-text-gray-900 tw-shadow-sm"
                              : "tw-cursor-not-allowed tw-bg-gray-50 tw-text-gray-200",
                            active ? "tw-ring-2 tw-ring-indigo-500" : "",
                            "tw-group tw-relative tw-flex tw-items-center tw-justify-center tw-rounded-md tw-border tw-py-3 tw-px-4 tw-text-sm tw-font-medium tw-uppercase hover:tw-bg-gray-50 focus:tw-outline-none sm:tw-flex-1 sm:tw-py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "tw-border" : "tw-border-2",
                                  checked
                                    ? "tw-border-indigo-500"
                                    : "tw-border-transparent",
                                  "tw-pointer-events-none tw-absolute tw--inset-px tw-rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="tw-pointer-events-none tw-absolute tw--inset-px tw-rounded-md tw-border-2 tw-border-gray-200"
                              >
                                <svg
                                  className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-stroke-2 tw-text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="tw-mt-10 tw-flex tw-w-full tw-items-center tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-bg-indigo-600 tw-py-3 tw-px-8 tw-text-base tw-font-medium tw-text-white hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="tw-py-10 lg:tw-col-span-2 lg:tw-col-start-1 lg:tw-border-r lg:tw-border-gray-200 lg:tw-pt-6 lg:tw-pb-16 lg:tw-pr-8">
            {/* Description and details */}
            <div>
              <h3 className="tw-sr-only">Description</h3>

              <div className="tw-space-y-6">
                <p className="tw-text-base tw-text-gray-900">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="tw-mt-10">
              <h3 className="tw-text-sm tw-font-medium tw-text-gray-900">
                Highlights
              </h3>

              <div className="tw-mt-4">
                <ul className="tw-list-disc tw-space-y-2 tw-pl-4 tw-text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="tw-text-gray-400">
                      <span className="tw-text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="tw-mt-10">
              <h2 className="tw-text-sm tw-font-medium tw-text-gray-900">
                Details
              </h2>

              <div className="tw-mt-4 tw-space-y-6">
                <p className="tw-text-sm tw-text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDetailsInfo />
    </div>
  );
}
