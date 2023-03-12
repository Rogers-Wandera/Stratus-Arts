import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { Grid } from "@mui/material";

export default function Newsletter() {
  return (
    <Grid sx={{ width: "98%", margin: "1rem auto" }}>
      <div className="tw-relative tw-isolate tw-overflow-hidden tw-bg-gray-900 tw-py-16 sm:tw-py-24 lg:tw-py-32">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
          <div className="tw-mx-auto tw-grid tw-max-w-2xl tw-grid-cols-1 tw-gap-y-16 tw-gap-x-8 lg:tw-max-w-none lg:tw-grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="tw-mt-4 tw-text-lg tw-leading-8 tw-text-gray-300">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
              <div className="tw-mt-6 flex tw-max-w-md tw-gap-x-4">
                <label htmlFor="email-address" className="tw-sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="tw-min-w-0 tw-flex-auto tw-rounded-md tw-border-0 tw-bg-white/5 tw-px-3.5 tw-py-2 tw-text-white tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-white/10 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-500 sm:tw-text-sm sm:tw-leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="tw-flex-none tw-rounded-md tw-bg-indigo-500 tw-py-2.5 tw-px-3.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-indigo-400 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="tw-grid tw-grid-cols-1 tw-gap-x-8 tw-gap-y-10 sm:tw-grid-cols-2 lg:tw-pt-2">
              <div className="flex flex-col items-start">
                <div className="tw-rounded-md tw-bg-white/5 p-2 tw-ring-1 tw-ring-white/10">
                  <CalendarDaysIcon
                    className="tw-h-6 tw-w-6 tw-text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="tw-mt-4 tw-font-semibold tw-text-white">
                  Weekly articles
                </dt>
                <dd className="tw-mt-2 tw-leading-7 tw-text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="tw-flex tw-flex-col tw-items-start">
                <div className="tw-rounded-md tw-bg-white/5 tw-p-2 tw-ring-1 tw-ring-white/10">
                  <HandRaisedIcon
                    className="tw-h-6 tw-w-6 tw-text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="tw-mt-4 tw-font-semibold tw-text-white">
                  No spam
                </dt>
                <dd className="tw-mt-2 tw-leading-7 tw-text-gray-400">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <svg
          className="tw-absolute tw-top-0 tw-left-1/2 tw--z-10 tw-h-[42.375rem] tw--translate-x-1/2 tw-blur-3xl xl:tw--top-6"
          viewBox="0 0 1155 678"
          fill="none"
        >
          <path
            fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Grid>
  );
}
