// import { Fragment, useState } from "react";
// import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
// import {
//   Bars3Icon,
//   MagnifyingGlassIcon,
//   ShoppingBagIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// const navigation = {
//   categories: [
//     {
//       id: "category",
//       name: "Categories",
//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "Basic Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
//         },
//       ],
//       sections: [
//         {
//           id: "publications",
//           name: "Publications",
//           items: [
//             { name: "Tops", href: "#" },
//             { name: "Dresses", href: "#" },
//           ],
//         },
//         {
//           id: "artpieces",
//           name: "Art Pieces",
//           items: [
//             { name: "Watches", href: "#" },
//             { name: "Wallets", href: "#" },
//             { name: "Bags", href: "#" },
//           ],
//         },
//         {
//           id: "prints",
//           name: "Prints",
//           items: [
//             { name: "Full Nelson", href: "#" },
//             { name: "My Way", href: "#" },
//             { name: "Re-Arranged", href: "#" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "otherlinks",
//       name: "Links",
//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Drawstring top with elastic loop closure and textured interior padding.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "letus",
//           name: "Let us Help You",
//           items: [
//             { name: "Help Center", href: "#" },
//             { name: "Contact Us", href: "#" },
//             { name: "How to buy on Stratus arts", href: "#" },
//             { name: "Payment Methods", href: "#" },
//             { name: "Delivery", href: "#" },
//             { name: "Report a product", href: "#" },
//             { name: "Return Policy", href: "#" },
//           ],
//         },
//         {
//           id: "about",
//           name: "About Stratus Arts",
//           items: [
//             { name: "Privacy policy Notice", href: "#" },
//             { name: "Terms abd Conditions", href: "#" },
//             { name: "Return and Refund Policy", href: "#" },
//             { name: "Flash sales", href: "#" },
//           ],
//         },
//         {
//           id: "makemoney",
//           name: "Make Money with us",
//           items: [
//             { name: "Sell on Stratus Arts", href: "#" },
//             { name: "Become a Stratus Arts Delivery Agents", href: "#" },
//             { name: "Stratus Arts B2B", href: "#" },
//           ],
//         },
//       ],
//     },
//   ],
//   pages: [
//     { name: "Company", href: "#" },
//     { name: "Quick Serach", href: "#" },
//   ],
// };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function CategoriesNav() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className="tw-bg-white"
//       style={{
//         position: "relative",
//         zIndex: "4",
//       }}
//     >
//       {/* Mobile menu */}
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog
//           as="div"
//           className="tw-relative tw-z-40 lg:tw-hidden"
//           onClose={setOpen}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-25" />
//           </Transition.Child>

//           <div className="tw-fixed tw-inset-0 tw-z-40 tw-flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full"
//             >
//               <Dialog.Panel className="tw-relative tw-flex tw-w-full tw-max-w-xs tw-flex-col tw-overflow-y-auto tw-bg-white tw-pb-12 tw-shadow-xl">
//                 <div className="tw-flex tw-px-4 tw-pt-5 tw-pb-2">
//                   <button
//                     type="button"
//                     className="tw--m-2 tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400"
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="tw-sr-only">Close menu</span>
//                     <XMarkIcon className="tw-h-6 tw-w-6" aria-hidden="true" />
//                   </button>
//                 </div>

//                 {/* Links */}
//                 <Tab.Group as="div" className="tw-mt-2">
//                   <div className="tw-border-b tw-border-gray-200">
//                     <Tab.List className="tw--mb-px tw-flex tw-space-x-8 tw-px-4">
//                       {navigation.categories.map((category) => (
//                         <Tab
//                           key={category.name}
//                           className={({ selected }) =>
//                             classNames(
//                               selected
//                                 ? "tw-text-indigo-600 tw-border-indigo-600"
//                                 : "tw-text-gray-900 tw-border-transparent",
//                               "tw-flex-1 tw-whitespace-nowrap tw-border-b-2 tw-py-4 tw-px-1 tw-text-base tw-font-medium"
//                             )
//                           }
//                         >
//                           {category.name}
//                         </Tab>
//                       ))}
//                     </Tab.List>
//                   </div>
//                   <Tab.Panels as={Fragment}>
//                     {navigation.categories.map((category) => (
//                       <Tab.Panel
//                         key={category.name}
//                         className="tw-space-y-10 tw-px-4 tw-pt-10 tw-pb-8"
//                       >
//                         <div className="tw-grid tw-grid-cols-2 tw-gap-x-4">
//                           {category.featured.map((item) => (
//                             <div
//                               key={item.name}
//                               className="tw-group tw-relative tw-text-sm"
//                             >
//                               <div className="tw-aspect-w-1 tw-aspect-h-1 tw-overflow-hidden tw-rounded-lg tw-bg-gray-100 group-hover:tw-opacity-75">
//                                 <img
//                                   src={item.imageSrc}
//                                   alt={item.imageAlt}
//                                   className="tw-object-cover tw-object-center"
//                                 />
//                               </div>
//                               <a
//                                 href={item.href}
//                                 className="tw-mt-6 tw-block tw-font-medium tw-text-gray-900"
//                               >
//                                 <span
//                                   className="tw-absolute tw-inset-0 tw-z-10"
//                                   aria-hidden="true"
//                                 />
//                                 {item.name}
//                               </a>
//                               <p aria-hidden="true" className="tw-mt-1">
//                                 Shop now
//                               </p>
//                             </div>
//                           ))}
//                         </div>
//                         {category.sections.map((section) => (
//                           <div key={section.name}>
//                             <p
//                               id={`${category.id}-${section.id}-heading-mobile`}
//                               className="tw-font-medium tw-text-gray-900"
//                             >
//                               {section.name}
//                             </p>
//                             <ul
//                               aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                               className="tw-mt-6 tw-flex tw-flex-col tw-space-y-6"
//                             >
//                               {section.items.map((item) => (
//                                 <li key={item.name} className="tw-flow-root">
//                                   <a
//                                     href={item.href}
//                                     className="tw--m-2 tw-block tw-p-2 tw-text-gray-500"
//                                   >
//                                     {item.name}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </Tab.Panel>
//                     ))}
//                   </Tab.Panels>
//                 </Tab.Group>

//                 <div className="tw-space-y-6 tw-border-t tw-border-gray-200 tw-py-6 tw-px-4">
//                   {navigation.pages.map((page) => (
//                     <div key={page.name} className="tw-flow-root">
//                       <a
//                         href={page.href}
//                         className="tw--m-2 tw-block tw-p-2 tw-font-medium tw-text-gray-900"
//                       >
//                         {page.name}
//                       </a>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="tw-space-y-6 tw-border-t tw-border-gray-200 tw-py-6 tw-px-4">
//                   <div className="tw-flow-root">
//                     <a
//                       href="/"
//                       className="tw-m-2 tw-block tw-p-2 tw-font-medium tw-text-gray-900"
//                     >
//                       Sign in
//                     </a>
//                   </div>
//                   <div className="tw-flow-root">
//                     <a
//                       href="/"
//                       className="tw--m-2 tw-block tw-p-2 tw-font-medium tw-text-gray-900"
//                     >
//                       Create account
//                     </a>
//                   </div>
//                 </div>

//                 <div className="tw-tw-border-t tw-tw-border-gray-200 tw-tw-py-6 tw-tw-px-4">
//                   <a
//                     href="/"
//                     className="tw-tw--m-2 tw-tw-flex tw-tw-items-center tw-tw-p-2"
//                   >
//                     <img
//                       src="https://tailwindui.com/img/flags/flag-canada.svg"
//                       alt=""
//                       className="tw-tw-block tw-tw-h-auto tw-tw-w-5 tw-tw-flex-shrink-0"
//                     />
//                     <span className="tw-tw-ml-3 tw-tw-block tw-tw-text-base tw-tw-font-medium tw-tw-text-gray-900">
//                       CAD
//                     </span>
//                     <span className="tw-tw-sr-only">, change currency</span>
//                   </a>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       <header className="tw-relative tw-bg-white">
//         <p className="tw-flex tw-h-10 tw-items-center tw-justify-center bg-indigo-600 tw-px-4 tw-text-sm tw-font-medium tw-text-white sm:tw-px-6 lg:tw-px-8">
//           Get free delivery on orders over $100
//         </p>

//         <nav
//           aria-label="Top"
//           className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8"
//         >
//           <div className="tw-border-b tw-border-gray-200">
//             <div className="tw-flex tw-h-16 tw-items-center">
//               <button
//                 type="button"
//                 className="tw-rounded-md tw-bg-white tw-p-2 tw-text-gray-400 lg:tw-hidden"
//                 onClick={() => setOpen(true)}
//               >
//                 <span className="tw-sr-only">Open menu</span>
//                 <Bars3Icon className="tw-h-6 tw-w-6" aria-hidden="true" />
//               </button>

//               {/* Logo */}
//               <div className="tw-ml-4 tw-flex lg:tw-ml-0">
//                 <a href="/">
//                   <span className="tw-sr-only">Your Company</span>
//                   <img
//                     className="tw-h-8 tw-w-auto"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                     alt=""
//                   />
//                 </a>
//               </div>

//               {/* Flyout menus */}
//               <Popover.Group className="tw-hidden lg:tw-ml-8 lg:tw-block lg:tw-self-stretch">
//                 <div className="tw-flex tw-h-full tw-space-x-8">
//                   {navigation.categories.map((category) => (
//                     <Popover key={category.name} className="tw-flex">
//                       {({ open }) => (
//                         <>
//                           <div className="tw-relative tw-tw-flex">
//                             <Popover.Button
//                               className={classNames(
//                                 open
//                                   ? "tw-border-indigo-600 tw-text-indigo-600"
//                                   : "tw-border-transparent tw-text-gray-700 hover:tw-text-gray-800",
//                                 "tw-relative tw-z-10 tw--mb-px tw-flex tw-items-center tw-border-b-2 tw-pt-px tw-text-sm tw-font-medium tw-transition-colors tw-duration-200 tw-ease-out"
//                               )}
//                             >
//                               {category.name}
//                             </Popover.Button>
//                           </div>

//                           <Transition
//                             as={Fragment}
//                             enter="transition ease-out duration-200"
//                             enterFrom="opacity-0"
//                             enterTo="opacity-100"
//                             leave="transition ease-in duration-150"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                           >
//                             <Popover.Panel className="tw-absolute tw-inset-x-0 tw-top-full tw-text-sm tw-text-gray-500">
//                               {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
//                               <div
//                                 className="tw-absolute tw-inset-0 tw-top-1/2 tw-bg-white tw-shadow"
//                                 aria-hidden="true"
//                               />

//                               <div className="tw-relativetw- bg-white">
//                                 <div className="tw-mx-auto tw-max-w-7xl tw-px-8">
//                                   <div className="tw-grid tw-grid-cols-2 tw-gap-y-10 tw-gap-x-8 tw-py-16">
//                                     <div className="tw-col-start-2 tw-grid tw-grid-cols-2 tw-gap-x-8">
//                                       {category.featured.map((item) => (
//                                         <div
//                                           key={item.name}
//                                           className="tw-group tw-relative tw-text-base sm:tw-text-sm"
//                                         >
//                                           <div className="tw-aspect-w-1 tw-aspect-h-1 tw-overflow-hidden tw-rounded-lg tw-bg-gray-100 group-hover:tw-opacity-75">
//                                             <img
//                                               src={item.imageSrc}
//                                               alt={item.imageAlt}
//                                               className="tw-object-cover tw-object-center"
//                                             />
//                                           </div>
//                                           <a
//                                             href={item.href}
//                                             className="tw-mt-6 tw-block tw-font-medium tw-text-gray-900"
//                                           >
//                                             <span
//                                               className="tw-absolute tw-inset-0 z-10"
//                                               aria-hidden="true"
//                                             />
//                                             {item.name}
//                                           </a>
//                                           <p
//                                             aria-hidden="true"
//                                             className="tw-mt-1"
//                                           >
//                                             Shop now
//                                           </p>
//                                         </div>
//                                       ))}
//                                     </div>
//                                     <div className="tw-row-start-1 tw-grid tw-grid-cols-3 tw-gap-y-10 tw-gap-x-8 tw-text-sm">
//                                       {category.sections.map((section) => (
//                                         <div key={section.name}>
//                                           <p
//                                             id={`${section.name}-heading`}
//                                             className="tw-font-medium tw-text-gray-900"
//                                           >
//                                             {section.name}
//                                           </p>
//                                           <ul
//                                             aria-labelledby={`${section.name}-heading`}
//                                             className="tw-mt-6 tw-space-y-6 sm:tw-mt-4 sm:tw-space-y-4"
//                                           >
//                                             {section.items.map((item) => (
//                                               <li
//                                                 key={item.name}
//                                                 className="tw-flex"
//                                               >
//                                                 <a
//                                                   href={item.href}
//                                                   style={{ color: "black" }}
//                                                   className="hover:tw-text-gray-800"
//                                                 >
//                                                   {item.name}
//                                                 </a>
//                                               </li>
//                                             ))}
//                                           </ul>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Popover.Panel>
//                           </Transition>
//                         </>
//                       )}
//                     </Popover>
//                   ))}

//                   {navigation.pages.map((page) => (
//                     <a
//                       key={page.name}
//                       href={page.href}
//                       className="tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800"
//                     >
//                       {page.name}
//                     </a>
//                   ))}
//                 </div>
//               </Popover.Group>

//               <div className="tw-ml-auto tw-flex tw-items-center">
//                 <div className="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-items-center lg:tw-justify-end lg:tw-space-x-6">
//                   <a
//                     href="/"
//                     className="tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800"
//                   >
//                     Sign in
//                   </a>
//                   <span
//                     className="tw-h-6 tw-w-px tw-bg-gray-200"
//                     aria-hidden="true"
//                   />
//                   <a
//                     href="/"
//                     className="tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800"
//                   >
//                     Create account
//                   </a>
//                 </div>

//                 <div className="tw-hidden lg:tw-ml-8 lg:tw-flex">
//                   <a
//                     href="/"
//                     className="flex items-center text-gray-700 hover:text-gray-800"
//                   >
//                     <img
//                       src="https://tailwindui.com/img/flags/flag-canada.svg"
//                       alt=""
//                       className="tw-block tw-h-auto tw-w-5 tw-flex-shrink-0"
//                     />
//                     <span className="tw-ml-3 tw-block tw-text-sm tw-font-medium">
//                       CAD
//                     </span>
//                     <span className="tw-sr-only">, change currency</span>
//                   </a>
//                 </div>

//                 {/* Search */}
//                 <div className="tw-flex lg:tw-ml-6">
//                   <a
//                     href="/"
//                     className="tw-p-2 tw-text-gray-400 hover:tw-text-gray-500"
//                   >
//                     <span className="tw-sr-only">Search</span>
//                     <MagnifyingGlassIcon
//                       className="tw-h-6 tw-w-6"
//                       aria-hidden="true"
//                     />
//                   </a>
//                 </div>

//                 {/* Cart */}
//                 <div className="tw-ml-4 tw-flow-root lg:tw-ml-6">
//                   <a
//                     href="/"
//                     className="tw-group tw--m-2 tw-flex tw-items-center tw-p-2"
//                   >
//                     <ShoppingBagIcon
//                       className="tw-h-6 tw-w-6 tw-flex-shrink-0 tw-text-gray-400 group-hover:tw-text-gray-500"
//                       aria-hidden="true"
//                     />
//                     <span className="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-700 group-hover:tw-text-gray-800">
//                       0
//                     </span>
//                     <span className="tw-sr-only">items in cart, view bag</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      id: "category",
      name: "Categories",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "publications",
          name: "Publications",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
          ],
        },
        {
          id: "artpieces",
          name: "Art Pieces",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
          ],
        },
        {
          id: "prints",
          name: "Prints",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
          ],
        },
      ],
    },
    {
      id: "otherlinks",
      name: "Links",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "letus",
          name: "Let us Help You",
          items: [
            { name: "Help Center", href: "#" },
            { name: "Contact Us", href: "#" },
            { name: "How to buy on Stratus arts", href: "#" },
            { name: "Payment Methods", href: "#" },
            { name: "Delivery", href: "#" },
            { name: "Report a product", href: "#" },
            { name: "Return Policy", href: "#" },
          ],
        },
        {
          id: "about",
          name: "About Stratus Arts",
          items: [
            { name: "Privacy policy Notice", href: "#" },
            { name: "Terms abd Conditions", href: "#" },
            { name: "Return and Refund Policy", href: "#" },
            { name: "Flash sales", href: "#" },
          ],
        },
        {
          id: "makemoney",
          name: "Make Money with us",
          items: [
            { name: "Sell on Stratus Arts", href: "#" },
            { name: "Become a Stratus Arts Delivery Agents", href: "#" },
            { name: "Stratus Arts B2B", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Quick Serach", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="tw-bg-white tw-relative tw-z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="tw-relative tw-z-50 lg:tw-hidden"
          onClose={setOpen}
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
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="tw-relative tw-flex tw-w-full tw-max-w-xs tw-flex-col tw-overflow-y-auto tw-bg-white tw-pb-12 tw-shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="tw--m-2 tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="tw-sr-only">Close menu</span>
                    <XMarkIcon className="tw-h-6 tw-w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="tw-mt-2">
                  <div className="tw-border-b tw-border-gray-200">
                    <Tab.List className="tw--mb-px tw-flex stw-pace-x-8 tw-px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "tw-border-indigo-600 tw-text-indigo-600"
                                : "tw-border-transparent tw-text-gray-900",
                              "tw-flex-1 tw-whitespace-nowrap tw-border-b-2 tw-py-4 tw-px-1 tw-text-base tw-font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="tw-space-y-10 tw-px-4 tw-pt-10 tw-pb-8"
                      >
                        <div className="tw-grid tw-grid-cols-2 tw-gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="tw-group tw-relative tw-text-sm"
                            >
                              <div className="tw-aspect-w-1 tw-aspect-h-1 tw-overflow-hidden tw-rounded-lg tw-bg-gray-100 group-hover:tw-opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="tw-object-cover tw-object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="tw-mt-6 tw-block tw-font-medium tw-text-gray-900"
                              >
                                <span
                                  className="tw-absolute tw-inset-0 tw-z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="tw-mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="tw-font-medium tw-text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="tw-mt-6 tw-flex tw-flex-col tw-space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="tw-flow-root">
                                  <a
                                    href={item.href}
                                    className="tw--m-2 tw-block tw-p-2 tw-text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="tw-space-y-6 tw-border-t tw-border-gray-200 tw-py-6 tw-px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="tw-flow-root">
                      <a
                        href={page.href}
                        className="tw--m-2 tw-block tw-p-2 tw-font-medium tw-text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="tw-space-y-6 tw-border-t tw-border-gray-200 tw-py-6 tw-px-4">
                  <div className="tw-flow-root">
                    <a
                      href="#"
                      className="tw--m-2 tw-block tw-p-2 tw-font-medium tw-text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="tw-flow-root">
                    <a
                      href="#"
                      className="tw--m-2 tw-block tw-p-2 tw-font-medium tw-text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className="tw-border-t tw-border-gray-200 tw-py-6 tw-px-4">
                  <a
                    href="#"
                    className="tw--m-2 tw-flex tw-items-center tw-p-2"
                  >
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="tw-block tw-h-auto tw-w-5 tw-flex-shrink-0"
                    />
                    <span className="tw-ml-3 tw-block tw-text-base tw-font-medium tw-text-gray-900">
                      CAD
                    </span>
                    <span className="tw-sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="tw-relative tw-bg-white">
        <p className="tw-flex tw-h-10 tw-items-center tw-justify-center tw-bg-indigo-600 tw-px-4 tw-text-sm tw-font-medium tw-text-white sm:tw-px-6 lg:tw-px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="tw-Top"
          className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8"
        >
          <div className="tw-border-b tw-border-gray-200">
            <div className="tw-flex tw-h-16 tw-items-center">
              <button
                type="button"
                className="tw-rounded-md tw-bg-white tw-p-2 tw-text-gray-400 lg:tw-hidden"
                onClick={() => setOpen(true)}
              >
                <span className="tw-sr-only">Open menu</span>
                <Bars3Icon className="tw-h-6 tw-w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="tw-ml-4 tw-flex lg:tw-ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="tw-h-8 tw-w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="tw-hidden lg:tw-ml-8 lg:tw-block lg:tw-self-stretch">
                <div className="tw-flex tw-h-full tw-space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="tw-flex">
                      {({ open }) => (
                        <>
                          <div className="tw-relative tw-flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "tw-border-indigo-600 tw-text-indigo-600"
                                  : "tw-border-transparent tw-text-gray-700 hover:tw-text-gray-800",
                                "tw-relative tw-z-10 tw--mb-px tw-flex tw-items-center tw-border-b-2 tw-pt-px tw-text-sm tw-font-medium tw-transition-colors tw-duration-200 tw-ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="tw-absolute tw-inset-x-0 tw-top-full tw-text-sm tw-text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="tw-absolute tw-inset-0 tw-top-1/2 tw-bg-white tw-shadow"
                                aria-hidden="true"
                              />

                              <div className="tw-relative tw-bg-white">
                                <div className="tw-mx-auto tw-max-w-7xl tw-px-8">
                                  <div className="tw-grid tw-grid-cols-2 tw-gap-y-10 tw-gap-x-8 tw-py-16">
                                    <div className="tw-col-start-2 tw-grid tw-grid-cols-2 tw-gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="tw-group tw-relative tw-text-base sm:tw-text-sm"
                                        >
                                          <div className="tw-aspect-w-1 tw-aspect-h-1 tw-overflow-hidden tw-rounded-lg tw-bg-gray-100 group-hover:tw-opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="tw-object-cover tw-object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="tw-mt-6 tw-block tw-font-medium tw-text-gray-900"
                                          >
                                            <span
                                              className="tw-absolute tw-inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="tw-mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="tw-row-start-1 tw-grid tw-grid-cols-3 tw-gap-y-10 tw-gap-x-8 tw-text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="tw-font-large tw-text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="tw-mt-6 tw-space-y-6 sm:tw-mt-4 sm:tw-space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="tw-flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="tw-text-black hover:tw-text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="tw-ml-auto tw-flex tw-items-center">
                <div className="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-items-center lg:tw-justify-end lg:tw-space-x-6">
                  <a
                    href="#"
                    className="tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800"
                  >
                    Sign in
                  </a>
                  <span
                    className="tw-h-6 tw-w-px tw-bg-gray-200"
                    aria-hidden="true"
                  />
                  <a
                    href="#"
                    className="tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                <div className="tw-hidden lg:tw-ml-8 lg:tw-flex">
                  <a
                    href="#"
                    className="tw-flex tw-items-center tw-text-gray-700 hover:tw-text-gray-800"
                  >
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="tw-block tw-h-auto tw-w-5 tw-flex-shrink-0"
                    />
                    <span className="tw-ml-3 tw-block tw-text-sm tw-font-medium">
                      CAD
                    </span>
                    <span className="tw-sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="tw-flex lg:tw-ml-6">
                  <a
                    href="#"
                    className="tw-p-2 tw-text-gray-400 hover:tw-text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="tw-h-6 tw-w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div className="tw-ml-4 tw-flow-root lg:tw-ml-6">
                  <a
                    href="#"
                    className="tw-group tw--m-2 tw-flex tw-items-center tw-p-2"
                  >
                    <ShoppingBagIcon
                      className="tw-h-6 tw-w-6 tw-flex-shrink-0 tw-text-gray-400 group-hover:tw-text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="tw-ml-2 tw-text-sm tw-font-medium wt-text-gray-700 group-hover:tw-text-gray-800">
                      0
                    </span>
                    <span className="tw-sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
