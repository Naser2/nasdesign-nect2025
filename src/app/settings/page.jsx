import  fetchExercices  from '../../../api/fetchExercices'

import Link from 'next/link'

const Profile = () => {
  return <div>
    <main className="px-5 md:px-8 min-h-[calc(100vh-theme(height.header))]">
  <div className="max-w-container mx-auto">
    <div className="mt-12 mb-24 block space-y-4 md:flex md:space-x-12 md:space-y-0">
      <div className="flex flex-col space-y-4 items-start w-[240px]">
        <aside className="w-full md:w-sidebar md:min-w-sidebar md:sticky md:top-4 h-max pt-0 md:!w-auto">
          <div className="pt-0 mb-6">
            <button
              type="button"
              id="radix-:ra:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              className="border-none hover:bg-gray-100 hover:rounded-md w-56 !h-16 -ml-4 md:-ml-0 flex items-center border border-gray-200 rounded-md h-md py-2 px-3 space-x-2 hover:border-gray-400 focus:outline-none focus-visible:border-pink-400"
            >
              <div className="flex space-x-3 items-center w-full truncate">
                <span
                  className="inline-block rounded-full overflow-hidden"
                  title="Nas"
                  style={{ width: 32, height: 32, minWidth: 32, minHeight: 32 }}
                >
                  <div
                    className="w-full h-full rounded-full bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage:
                        'url("https://avatars.githubusercontent.com/u/20908727?v=4")'
                    }}
                  />
                </span>
                <div className="flex flex-col items-start">
                  <p className="text-base font-semibold">Nas</p>
                  <p className="text-xs text-gray-600 font-medium">
                    Personal Account
                  </p>
                </div>
              </div>
              <div
                className="icon-container icon-md text-2xl ml-2 text-gray-500"
                aria-hidden="true"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </button>
          </div>
          <div className="pt-0 mb-6">
            <Link 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-General group mb-2 space-x-4 mx-1"
              href="/account"
            >
              <div
                className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                aria-hidden="true"
                style={{ transform: "none" }}
              >
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <path
                    clipRule="evenodd"
                    d="M13.906 4.91a6.41 6.41 0 0 0-1.451-.84l-.469-1.873a1.25 1.25 0 0 0-1.212-.947H9.226a1.25 1.25 0 0 0-1.213.947L7.545 4.07a6.41 6.41 0 0 0-1.452.84l-1.857-.532a1.25 1.25 0 0 0-1.427.577l-.774 1.34A1.25 1.25 0 0 0 2.25 7.82l1.388 1.343a6.477 6.477 0 0 0 0 1.676L2.25 12.181a1.25 1.25 0 0 0-.214 1.524l.774 1.34a1.25 1.25 0 0 0 1.427.577l1.857-.531c.442.34.93.623 1.452.84l.468 1.872c.14.557.64.947 1.213.947h1.548a1.25 1.25 0 0 0 1.213-.947l.468-1.873c.522-.216 1.01-.5 1.452-.84l1.857.532a1.25 1.25 0 0 0 1.427-.577l.774-1.34a1.25 1.25 0 0 0-.214-1.524l-1.389-1.343a6.494 6.494 0 0 0 0-1.676l1.389-1.343a1.25 1.25 0 0 0 .213-1.524l-.773-1.34a1.25 1.25 0 0 0-1.427-.577l-1.857.531ZM10 12.332a2.333 2.333 0 1 0 0-4.666 2.333 2.333 0 0 0 0 4.666Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <p className="text-base">General</p>
            </Link>
            <Link 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Plans group mb-2 space-x-4 mx-1"
              href="/account/plans"
            >
              <div
                className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                aria-hidden="true"
                style={{ transform: "none" }}
              >
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M3 2.375h-.25c-.69 0-1.25.56-1.25 1.25V15c0 .69.56 1.25 1.25 1.25H3M15 2.375h.25c.69 0 1.25.56 1.25 1.25V15c0 .69-.56 1.25-1.25 1.25H15m-8.5.25h5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25h-5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25Z"
                  />
                </svg>
              </div>
              <p className="text-base">Plans</p>
            </Link>
            <Link 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Usage group mb-2 space-x-4 mx-1"
              href="/account/usage"
            >
              <div
                className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                aria-hidden="true"
                style={{ transform: "none" }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bar-chart-2"
                >
                  <path d="M18 20V10m-6 10V4M6 20v-6" />
                </svg>
              </div>
              <p className="text-base">Usage</p>
            </Link>
            <Link 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-foreground md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Billing group mb-2 space-x-4 mx-1"
              href="/account/billing"
            >
              <div
                className="icon-container icon-md text-2xl text-pink-500 group-hover:text-foreground"
                aria-hidden="true"
                style={{ transform: "none" }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-credit-card"
                >
                  <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                  <path d="M1 10h22" />
                </svg>
              </div>
              <p className="text-base">Billing</p>
            </Link>
            <Link 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Feature-Flags group mb-2 space-x-4 mx-1"
              href="/account/feature-flags"
            >
              <div
                className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                aria-hidden="true"
                style={{ transform: "none" }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-flag"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zm0 7v-7" />
                </svg>
              </div>
              <p className="text-base">Feature Flags</p>
            </Link>
            <Link 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Tokens group mb-2 space-x-4 mx-1"
              href="/account/tokens"
            >
              <div
                className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                aria-hidden="true"
                style={{ transform: "none" }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-key"
                >
                  <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
              </div>
              <p className="text-base">Tokens</p>
            </Link>
            <Link 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Security group mb-2 space-x-4 mx-1"
              href="/account/security"
            >
              <div
                className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                aria-hidden="true"
                style={{ transform: "none" }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-lock"
                >
                  <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <p className="text-base">Security</p>
            </Link>
            <Link 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Referrals group mb-2 space-x-4 mx-1"
              href="/account/referrals"
            >
              <div
                className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                aria-hidden="true"
                style={{ transform: "none" }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-gift"
                >
                  <path d="M20 12v10H4V12M2 7h20v5H2zm10 15V7m0 0H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zm0 0h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
              </div>
              <p className="text-base">Referrals</p>
            </Link>
            <Link 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Earnings group mb-2 space-x-4 mx-1"
              href="/account/earnings"
            >
              <div
                className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                aria-hidden="true"
                style={{ transform: "none" }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-dollar-sign"
                >
                  <path d="M12 1v22m5-18H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <p className="text-base">Earnings</p>
            </Link>
            <Link 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Templates group mb-2 space-x-4 mx-1"
              href="/account/templates"
            >
              <div
                className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                aria-hidden="true"
                style={{ transform: "none" }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-layout"
                >
                  <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <p className="text-base">Templates</p>
            </Link>
          </div>
        </aside>
      </div>
      <main className="flex flex-col items-center w-full min-w-0 min-h-lg pt-3">
        <section className="flex flex-col flex-grow w-full first:mt-0 last:mb-0">
          <div className="flex flex-col space-y-12 w-full">
            <div className="flex justify-between items-center">
              <p className="text-h2 font-normal">Billing</p>
            </div>
            <hr className="my-4 w-full border-t border-gray-100" />
            <div className="flex flex-col space-y-12">
              <div className="flex flex-col space-y-8">
                <h2 className="text-h4 font-semibold">Active Plan</h2>
                <div className="flex flex-col space-y-4">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 p-6 border border-pink-200 rounded-lg relative">
                    <img
                      alt=""
                      src="/billing/chart-dark.svg"
                      className="absolute bottom-0 left-1/4 hidden lg:flex"
                    />
                    <div className="flex flex-col space-y-3">
                      <p className="text-lg font-semibold text-pink-600">
                        Hobby Plan
                      </p>
                      <p className="text-sm text-pink-600">
                        The Hobby plan costs $5 per month and includes up to $5
                        of usage. Additional resource usage is billed
                        separately.
                      </p>
                      <button className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[34px] py-1.5 px-3 rounded-md text-sm leading-5 space-x-2 max-w-max">
                        <span className="inline-block">
                          Manage Subscription
                        </span>
                      </button>
                    </div>
                    <div className="flex flex-col divide-y divide-gray-50 -mt-2">
                      <div className="flex justify-between items-center py-2">
                        <p className="text-sm text-gray-600">
                          Subscription Type
                        </p>
                        <p className="text-sm font-semibold">
                          Monthly (Jul 25 - Aug 25)
                        </p>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <p className="text-sm text-gray-600">
                          Memory per container
                        </p>
                        <p className="text-sm font-semibold">8 GB</p>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <p className="text-sm text-gray-600">
                          CPU per container
                        </p>
                        <p className="text-sm font-semibold">8 vCPU</p>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <p className="text-sm text-gray-600">Shared disk</p>
                        <p className="text-sm font-semibold">100 GB</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-3 p-6 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center">
                        <p className="text-base font-semibold">
                          {" "}
                          Payment Method
                        </p>
                        <button className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-200 text-foreground dark:text-white hover:bg-gray-100 hover:border-gray-200 disabled:bg-transparent disabled:border-gray-200 disabled:text-foreground focus-visible:ring-gray-600 focus-visible:bg-gray-100 h-[34px] py-1.5 px-3 rounded-md text-sm leading-5 space-x-2">
                          <span className="inline-block">Replace</span>
                        </button>
                      </div>
                      <div className="flex flex-col space-y-3">
                        <p className="text-sm text-gray-600">
                          Subscription fees and usage will be billed to this
                          card
                        </p>
                        <div className="flex flex-col bg-gray-50 rounded-md py-2 px-4">
                          <p className="text-base text-gray-600">
                            Card ending in 5116
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-3 p-6 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center">
                        <p className="text-base font-semibold">Billing Email</p>
                        <button className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-200 text-foreground dark:text-white hover:bg-gray-100 hover:border-gray-200 disabled:bg-transparent disabled:border-gray-200 disabled:text-foreground focus-visible:ring-gray-600 focus-visible:bg-gray-100 h-[34px] py-1.5 px-3 rounded-md text-sm leading-5 space-x-2">
                          <span className="inline-block">Update</span>
                        </button>
                      </div>
                      <div className="flex flex-col space-y-3">
                        <p className="text-sm text-gray-600">
                          All receipts will be sent here
                        </p>
                        <div className="flex flex-col bg-gray-50 rounded-md py-2 px-4">
                          <p className="text-base text-gray-600">
                            nassersanou23@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <h2 className="text-h4 font-semibold">Billing History</h2>
                <div
                  variant="danger"
                  className="relative flex p-3 rounded-md text-red-700 bg-red-50 dark:bg-red-100 mb-6"
                >
                  <div
                    className="icon-container icon-md text-2xl mr-3 text-red-500"
                    aria-hidden="true"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-alert-triangle"
                    >
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01" />
                    </svg>
                  </div>
                  <p className="text-base">
                    You have an unpaid invoice.&nbsp;
                    <Link 
                      href="https://invoice.stripe.com/i/acct_1HNrvlCJoPsRzQsd/live_YWNjdF8xSE5ydmxDSm9Qc1J6UXNkLF9RWGJaa1k0WnJoOVAyMHlnalVwcm9KUGxFeWVydU9vLDExMjU1NTM1NQ0200VrN2ySM5?s=ap"
                      target="_blank"
                      rel="noreferrer"
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 underline hover:text-pink-600"
                    >
                      Click here to pay your invoice
                    </Link>
                    &nbsp;in order to avoid disconnection of services.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="group grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr] gap-4 items-center px-6 py-4 text-right border-t border-gray-100 hover:bg-secondaryBg text-red-500">
                    <div className="flex space-x-3 items-center">
                      <div
                        className="icon-container icon-sm text-lg text-red-500"
                        aria-hidden="true"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-alert-triangle"
                        >
                          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01" />
                        </svg>
                      </div>
                      <p className="text-base whitespace-nowrap">
                        Jul 25, 2024
                      </p>
                    </div>
                    <p className="text-base hidden md:block whitespace-nowrap truncate">
                      Usage-based subscription
                    </p>
                    <p className="text-base">$ 5.00</p>
                    <div className="flex space-x-2 justify-end flex-wrap">
                      <Link 
                        href="https://invoice.stripe.com/i/acct_1HNrvlCJoPsRzQsd/live_YWNjdF8xSE5ydmxDSm9Qc1J6UXNkLF9RWGJaa1k0WnJoOVAyMHlnalVwcm9KUGxFeWVydU9vLDExMjU1NTM1NQ0200VrN2ySM5?s=ap"
                        target="_blank"
                        rel="noreferrer"
                        name="Pay Invoice"
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 text-red-500 hover:text-pink-600"
                      >
                        Pay
                      </Link>
                    </div>
                  </div>
                  <div className="group grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr] gap-4 items-center px-6 py-4 text-right border-t border-gray-100 hover:bg-secondaryBg">
                    <div className="flex space-x-3 items-center">
                      <div
                        className="icon-container icon-sm text-lg text-green-500"
                        aria-hidden="true"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check-circle"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="M22 4 12 14.01l-3-3" />
                        </svg>
                      </div>
                      <p className="text-base whitespace-nowrap">
                        Jun 25, 2024
                      </p>
                    </div>
                    <p className="text-base hidden md:block whitespace-nowrap truncate">
                      Usage-based subscription
                    </p>
                    <p className="text-base">$ 3.24</p>
                    <div className="flex space-x-2 justify-end flex-wrap">
                      <Link 
                        href="https://invoice.stripe.com/i/acct_1HNrvlCJoPsRzQsd/live_YWNjdF8xSE5ydmxDSm9Qc1J6UXNkLF9RTU1sbG5EQWM5UTlsbUZhUU1yNDFPb01VU29JcUxRLDExMjU1NTM1NQ0200OdZ0T2C6?s=ap"
                        target="_blank"
                        rel="noreferrer"
                        name="View Invoice"
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 text-gray-500 group-hover:underline hover:text-pink-600"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                  <div className="group grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr] gap-4 items-center px-6 py-4 text-right border-t border-gray-100 hover:bg-secondaryBg">
                    <div className="flex space-x-3 items-center">
                      <div
                        className="icon-container icon-sm text-lg text-green-500"
                        aria-hidden="true"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check-circle"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="M22 4 12 14.01l-3-3" />
                        </svg>
                      </div>
                      <p className="text-base whitespace-nowrap">
                        May 25, 2024
                      </p>
                    </div>
                    <p className="text-base hidden md:block whitespace-nowrap truncate">
                      Usage-based subscription
                    </p>
                    <p className="text-base">$ 5.00</p>
                    <div className="flex space-x-2 justify-end flex-wrap">
                      <Link 
                        href="https://invoice.stripe.com/i/acct_1HNrvlCJoPsRzQsd/live_YWNjdF8xSE5ydmxDSm9Qc1J6UXNkLF9RQWtsSEdBYnkxUVIyaDRPbk9aUzNNRmhsVTlpQ3RQLDExMjU1NTM1NQ0200GL55KZy1?s=ap"
                        target="_blank"
                        rel="noreferrer"
                        name="View Invoice"
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 text-gray-500 group-hover:underline hover:text-pink-600"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
  
</main>
<div className="FullscreenView FullscreenView--isLayer Box-root Box-background--offset Flex-flex Flex-alignItems--center Flex-direction--column Flex-justifyContent--center">
  <div
    className="FullscreenContent FullscreenContent--scroll Box-root Box-background--white"
    style={{ flex: "1 1 100%" }}
  >
    <div className="sn-token-provider ⚙  t0 t1 t2 t3 as0 as1 ⚙cbrdsh">
      <div
        className="Box-root Flex-flex Flex-direction--row"
        style={{ height: "100%" }}
      >
        <div
          className="Box-root"
          style={{
            padding: "64px 64px 40px",
            height: "100%",
            overflowY: "auto",
            backgroundColor: "rgb(19, 17, 28)",
            flex: "0 0 40%"
          }}
        >
          <div style={{ height: "100%", position: "relative" }}>
            <div
              className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--spaceBetween"
              style={{ height: "100%" }}
            >
              <div className="Box-root" style={{ pointerEvents: "none" }}>
                <div
                  className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                  style={{ marginLeft: "-32px", marginTop: "-32px" }}
                >
                  <div
                    className="Box-root Box-hideIfEmpty Margin-top--32 Margin-left--32"
                    style={{ pointerEvents: "auto" }}
                  >
                    <Link 
                      className="UnstyledLink ButtonLink Flex-flex"
                      href="https://railway.app/account/billing"
                    >
                      <div
                        className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                        style={{ position: "relative" }}
                      >
                        <div
                          aria-hidden="true"
                          className="TextAligner Box-root"
                          style={{
                            lineHeight: 20,
                            fontSize: 14,
                            flex: "0 0 auto"
                          }}
                        />
                        <div
                          className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                          style={{ lineHeight: 0, flex: "1 1 auto" }}
                        >
                          <span
                            className="ButtonLink-label Text-color--white Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block"
                            style={{ marginTop: "-1px" }}
                          >
                            <div
                              className="Box-root"
                              style={{ pointerEvents: "none" }}
                            >
                              <div
                                className="Box-root Flex-flex Flex-alignItems--center Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                style={{
                                  marginLeft: "-8px",
                                  marginTop: "-8px"
                                }}
                              >
                                <div
                                  className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                                  style={{ pointerEvents: "auto" }}
                                >
                                  <img
                                    src="https://files.stripe.com/files/MDB8YWNjdF8xSE5ydmxDSm9Qc1J6UXNkfGZfbGl2ZV82MjZLdEphTWpqeUNYTnRFdXlnaTR2U0E00vatSR47Z"
                                    alt="Railway"
                                    data-test="logo-img"
                                    style={{ maxWidth: 224, maxHeight: 28 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="Box-root Box-hideIfEmpty Margin-top--32 Margin-left--32"
                    style={{ pointerEvents: "auto" }}
                  >
                    <div className="Box-root" style={{ marginTop: 48 }}>
                      <div
                        className="Box-root"
                        style={{ pointerEvents: "none" }}
                      >
                        <div
                          className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                          style={{ marginLeft: "-32px", marginTop: "-32px" }}
                        >
                          <div
                            className="Box-root Box-hideIfEmpty Margin-top--32 Margin-left--32"
                            style={{ pointerEvents: "auto" }}
                          >
                            <div style={{ maxWidth: 292 }}>
                              <span className="Text-color--white Text-fontSize--24 Text-fontWeight--medium Text-lineHeight--32 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                                Railway uses Stripe for secure billing
                              </span>
                            </div>
                          </div>
                          <div
                            className="Box-root Box-hideIfEmpty Margin-top--32 Margin-left--32"
                            style={{ pointerEvents: "auto" }}
                          >
                            <Link 
                              data-testid="return-to-business-link"
                              className="UnstyledLink ButtonLink IconParent Flex-flex"
                              href="https://railway.app/account/billing"
                            >
                              <div
                                className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                style={{ position: "relative" }}
                              >
                                <div
                                  aria-hidden="true"
                                  className="TextAligner Box-root"
                                  style={{
                                    lineHeight: 20,
                                    fontSize: 14,
                                    flex: "0 0 auto"
                                  }}
                                />
                                <div
                                  className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                                  style={{ lineHeight: 0, flex: "1 1 auto" }}
                                >
                                  <div
                                    aria-hidden="true"
                                    className="SVGInline SVGInline--cleaned SVG Icon Icon--arrowLeft Icon-color Icon-color--white Box-root Margin-right--4 Flex-flex"
                                    style={{ transform: "translateY(1.07px)" }}
                                  >
                                    <svg
                                      margin="[object Object]"
                                      aria-hidden="true"
                                      className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--arrowLeft-svg Icon-color-svg Icon-color--white-svg"
                                      height={12}
                                      width={12}
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M6.381 1.381A.875.875 0 1 1 7.62 2.62L3.112 7.125H15a.875.875 0 1 1 0 1.75H3.112l4.507 4.506A.875.875 0 1 1 6.38 14.62l-6-6a.872.872 0 0 1 0-1.238l6-6Z" />
                                    </svg>
                                  </div>
                                  <span
                                    className="ButtonLink-label Text-color--white Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block"
                                    style={{ marginTop: "-1px" }}
                                  >
                                    <span>Return to Railway</span>
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Box-root" style={{ opacity: "0.6" }}>
                <div
                  data-test="small-footer"
                  className="Box-root"
                  style={{ pointerEvents: "none" }}
                >
                  <div
                    className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                    style={{ marginLeft: "-8px", marginTop: "-8px" }}
                  >
                    <div
                      className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                      style={{ pointerEvents: "auto" }}
                    >
                      <Link 
                        target="_blank"
                        className="UnstyledLink ButtonLink Flex-flex"
                        href="https://stripe.com"
                        rel="noopener noreferrer"
                      >
                        <div
                          className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                          style={{ position: "relative" }}
                        >
                          <div
                            aria-hidden="true"
                            className="TextAligner Box-root"
                            style={{
                              lineHeight: 20,
                              fontSize: 14,
                              flex: "0 0 auto"
                            }}
                          />
                          <div
                            className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                            style={{ lineHeight: 0, flex: "1 1 auto" }}
                          >
                            <span
                              className="ButtonLink-label Text-color--white Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                              style={{ marginTop: "-1px" }}
                            >
                              <div
                                className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                style={{ position: "relative" }}
                              >
                                <div
                                  aria-hidden="true"
                                  className="TextAligner Box-root"
                                  style={{
                                    lineHeight: 16,
                                    fontSize: 12,
                                    flex: "0 0 auto"
                                  }}
                                />
                                <div
                                  className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                                  style={{ lineHeight: 0, flex: "1 1 auto" }}
                                >
                                  <div
                                    className="Box-root"
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <div
                                      className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                      style={{
                                        marginLeft: "-8px",
                                        marginTop: "-8px"
                                      }}
                                    >
                                      <div
                                        className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                                        style={{ pointerEvents: "auto" }}
                                      >
                                        <span
                                          className="Text-color--white Text-fontSize--12 Text-fontWeight--regular Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                          style={{ marginTop: "-1px" }}
                                        >
                                          <span>Powered by</span>
                                        </span>
                                      </div>
                                      <div
                                        className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                                        style={{ pointerEvents: "auto" }}
                                      >
                                        <div
                                          title="Stripe"
                                          className="SVGInline SVGInline--cleaned SVG Logo Icon-color Icon-color--white Box-root Flex-flex"
                                          style={{
                                            marginTop: "-4.46px",
                                            transform: "translateY(3.77px)"
                                          }}
                                        >
                                          <svg
                                            className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Logo-svg Icon-color-svg Icon-color--white-svg"
                                            height={16}
                                            width={38}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 360 150"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M360 77.4c0 2.4-.2 7.6-.2 8.9h-48.9c1.1 11.8 9.7 15.2 19.4 15.2 9.9 0 17.7-2.1 24.5-5.5v20c-6.8 3.8-15.8 6.5-27.7 6.5-24.4 0-41.4-15.2-41.4-45.3 0-25.4 14.4-45.6 38.2-45.6 23.7 0 36.1 20.2 36.1 45.8zm-49.4-9.5h25.8c0-11.3-6.5-16-12.6-16-6.3 0-13.2 4.7-13.2 16zm-63.5-36.3c17.5 0 34 15.8 34.1 44.8 0 31.7-16.3 46.1-34.2 46.1-8.8 0-14.1-3.7-17.7-6.3l-.1 28.3-25 5.3V33.2h22l1.3 6.2c3.5-3.2 9.8-7.8 19.6-7.8zm-6 68.9c9.2 0 15.4-10 15.4-23.4 0-13.1-6.3-23.3-15.4-23.3-5.7 0-9.3 2-11.9 4.9l.1 37.1c2.4 2.6 5.9 4.7 11.8 4.7zm-71.3-74.8V5.3L194.9 0v20.3l-25.1 5.4zm0 7.6h25.1v87.5h-25.1V33.3zm-26.9 7.4c5.9-10.8 17.6-8.6 20.8-7.4v23c-3.1-1.1-13.1-2.5-19 5.2v59.3h-25V33.3h21.6l1.6 7.4zm-50-29.1l-.1 21.7h19v21.3h-19v35.5c0 14.8 15.8 10.2 19 8.9v20.3c-3.3 1.8-9.3 3.3-17.5 3.3-14.8 0-25.9-10.9-25.9-25.7l.1-80.1 24.4-5.2zM25.3 58.7c0 11.2 38.1 5.9 38.2 35.7 0 17.9-14.3 28.2-35.1 28.2-8.6 0-18-1.7-27.3-5.7V93.1c8.4 4.6 19 8 27.3 8 5.6 0 9.6-1.5 9.6-6.1 0-11.9-38-7.5-38-35.1 0-17.7 13.5-28.3 33.8-28.3 8.3 0 16.5 1.3 24.8 4.6v23.5c-7.6-4.1-17.2-6.4-24.8-6.4-5.3 0-8.5 1.5-8.5 5.4z"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                      style={{ pointerEvents: "auto" }}
                    >
                      <div className="⚙ as2 ⚙xjmnxm">
                        <Link 
                          target="_blank"
                          className="UnstyledLink ButtonLink Flex-flex"
                          href="https://stripe.com/billing"
                          rel="noopener noreferrer"
                        >
                          <div
                            className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                            style={{ position: "relative" }}
                          >
                            <div
                              aria-hidden="true"
                              className="TextAligner Box-root"
                              style={{
                                lineHeight: 20,
                                fontSize: 14,
                                flex: "0 0 auto"
                              }}
                            />
                            <div
                              className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                              style={{ lineHeight: 0, flex: "1 1 auto" }}
                            >
                              <span
                                className="ButtonLink-label Text-color--white Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                style={{ marginTop: "-1px" }}
                              >
                                <span className="Text-color--white Text-fontSize--12 Text-fontWeight--regular Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--inline">
                                  <span>Learn more about Stripe Billing</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                      style={{ pointerEvents: "auto" }}
                    >
                      <Link 
                        target="_blank"
                        className="UnstyledLink ButtonLink Flex-flex"
                        href="https://stripe.com/privacy"
                        rel="noopener noreferrer"
                      >
                        <div
                          className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                          style={{ position: "relative" }}
                        >
                          <div
                            aria-hidden="true"
                            className="TextAligner Box-root"
                            style={{
                              lineHeight: 16,
                              fontSize: 12,
                              flex: "0 0 auto"
                            }}
                          />
                          <div
                            className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                            style={{ lineHeight: 0, flex: "1 1 auto" }}
                          >
                            <span
                              className="ButtonLink-label Text-color--white Text-fontSize--12 Text-fontWeight--medium Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                              style={{ marginTop: "-1px" }}
                            >
                              <span className="Text-color--white Text-fontWeight--regular Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                                <span>Privacy</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ opacity: 1, height: "100%", width: "100%" }}>
          <div
            className="Box-root"
            style={{
              height: "100%",
              overflowY: "auto",
              padding: "64px 80px 100px",
              boxShadow: "rgba(0, 0, 0, 0.18) 15px 0px 30px 0px",
              flex: "0 0 60%"
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                className="Box-root"
                style={{ minHeight: 100, paddingTop: 4 }}
              />
              <div className="Box-root" style={{ pointerEvents: "none" }}>
                <div className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap">
                  <div
                    className="Box-root Box-hideIfEmpty"
                    style={{ pointerEvents: "auto" }}
                  />
                  <div
                    className="Box-root Box-hideIfEmpty"
                    style={{ pointerEvents: "auto" }}
                  >
                    <div className="Box-root" style={{ pointerEvents: "none" }}>
                      <div
                        className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                        style={{ marginLeft: "-64px", marginTop: "-64px" }}
                      >
                        <div
                          className="Box-root Box-hideIfEmpty Margin-top--64 Margin-left--64"
                          style={{ pointerEvents: "auto" }}
                        >
                          <div>
                            <div className="Box-root Padding-bottom--8">
                              <div className="Box-root Box-divider--light-bottom-1 Margin-bottom--16 Padding-bottom--16 Flex-flex Flex-direction--row Flex-justifyContent--spaceBetween">
                                <div className="Box-root">
                                  <span className="Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline">
                                    <span>Current plan</span>
                                  </span>
                                </div>
                                <div className="Box-root" />
                              </div>
                            </div>
                            <div
                              className="Box-root"
                              style={{ pointerEvents: "none" }}
                            >
                              <div
                                className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                style={{
                                  marginLeft: "-64px",
                                  marginTop: "-64px"
                                }}
                              >
                                <div
                                  className="Box-root Box-hideIfEmpty Margin-top--64 Margin-left--64"
                                  style={{ pointerEvents: "auto" }}
                                >
                                  <div
                                    className="Box-root"
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <div
                                      className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--spaceBetween Flex-wrap--nowrap"
                                      style={{
                                        marginLeft: "-16px",
                                        marginTop: "-16px"
                                      }}
                                    >
                                      <div
                                        className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16"
                                        style={{ pointerEvents: "auto" }}
                                      >
                                        <div
                                          className="Box-root"
                                          style={{ pointerEvents: "none" }}
                                        >
                                          <div className="Box-root Flex-flex Flex-alignItems--flexStart Flex-direction--row Flex-justifyContent--spaceBetween Flex-wrap--nowrap">
                                            <div
                                              className="Box-root Box-hideIfEmpty"
                                              style={{ pointerEvents: "auto" }}
                                            >
                                              <div
                                                className="Box-root"
                                                style={{ paddingRight: 32 }}
                                              >
                                                <div
                                                  className="Box-root"
                                                  style={{
                                                    pointerEvents: "none"
                                                  }}
                                                >
                                                  <div
                                                    className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                                    style={{
                                                      marginLeft: "-16px",
                                                      marginTop: "-16px"
                                                    }}
                                                  >
                                                    <div
                                                      className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16"
                                                      style={{
                                                        pointerEvents: "auto"
                                                      }}
                                                    >
                                                      <div
                                                        className="Box-root"
                                                        style={{
                                                          pointerEvents: "none"
                                                        }}
                                                      >
                                                        <div
                                                          className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                                          style={{
                                                            marginLeft: "-12px",
                                                            marginTop: "-12px"
                                                          }}
                                                        >
                                                          <div
                                                            className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                            style={{
                                                              pointerEvents:
                                                                "auto"
                                                            }}
                                                          />
                                                          <div
                                                            className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                            style={{
                                                              pointerEvents:
                                                                "auto"
                                                            }}
                                                          >
                                                            <div
                                                              className="Box-root"
                                                              style={{
                                                                pointerEvents:
                                                                  "none"
                                                              }}
                                                            >
                                                              <div
                                                                className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                                                style={{
                                                                  marginLeft:
                                                                    "-12px",
                                                                  marginTop:
                                                                    "-12px"
                                                                }}
                                                              >
                                                                <div
                                                                  className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                                  style={{
                                                                    pointerEvents:
                                                                      "auto"
                                                                  }}
                                                                >
                                                                  <div className="Box-root">
                                                                    <div className="Box-root">
                                                                      <span>
                                                                        <span />
                                                                        <span>
                                                                          <span className="Text-color--default Text-fontSize--20 Text-fontWeight--medium Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                                                                            Memory
                                                                          </span>
                                                                        </span>
                                                                        <span>
                                                                          ,{" "}
                                                                        </span>
                                                                        <span>
                                                                          <span className="Text-color--default Text-fontSize--20 Text-fontWeight--medium Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                                                                            vCPU
                                                                          </span>
                                                                        </span>
                                                                        <span>
                                                                          ,{" "}
                                                                        </span>
                                                                        <span>
                                                                          <span className="Text-color--default Text-fontSize--20 Text-fontWeight--medium Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                                                                            Network
                                                                          </span>
                                                                        </span>
                                                                        <span>
                                                                          ,{" "}
                                                                        </span>
                                                                        <span>
                                                                          <span className="Text-color--default Text-fontSize--20 Text-fontWeight--medium Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                                                                            Hobby
                                                                            plan
                                                                          </span>
                                                                        </span>
                                                                        <span>
                                                                          , and{" "}
                                                                        </span>
                                                                        <span>
                                                                          <span className="Text-color--default Text-fontSize--20 Text-fontWeight--medium Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                                                                            Disk
                                                                          </span>
                                                                        </span>
                                                                        <span />
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                                  style={{
                                                                    pointerEvents:
                                                                      "auto"
                                                                  }}
                                                                >
                                                                  <span className="Text-color--default Text-fontSize--24 Text-fontWeight--bold Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                                                                    <span>
                                                                      Price
                                                                      varies
                                                                      with usage
                                                                    </span>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16"
                                                      style={{
                                                        pointerEvents: "auto"
                                                      }}
                                                    >
                                                      <div
                                                        className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                                        style={{
                                                          position: "relative"
                                                        }}
                                                      >
                                                        <div
                                                          aria-hidden="true"
                                                          className="TextAligner Box-root"
                                                          style={{
                                                            lineHeight: 20,
                                                            fontSize: 14,
                                                            flex: "0 0 auto"
                                                          }}
                                                        />
                                                        <div
                                                          className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                                                          style={{
                                                            lineHeight: 0,
                                                            flex: "1 1 auto"
                                                          }}
                                                        >
                                                          <div
                                                            className="Box-root"
                                                            style={{
                                                              pointerEvents:
                                                                "none"
                                                            }}
                                                          >
                                                            <div
                                                              className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                                              style={{
                                                                marginLeft:
                                                                  "-8px",
                                                                marginTop:
                                                                  "-8px"
                                                              }}
                                                            >
                                                              <div
                                                                className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                                                                style={{
                                                                  pointerEvents:
                                                                    "auto"
                                                                }}
                                                              >
                                                                <span
                                                                  className="Text-color--dark Text-fontSize--14 Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block"
                                                                  style={{
                                                                    marginTop:
                                                                      "-1px"
                                                                  }}
                                                                >
                                                                  <span>
                                                                    Your plan
                                                                    renews on{" "}
                                                                    <span
                                                                      style={{
                                                                        whiteSpace:
                                                                          "nowrap"
                                                                      }}
                                                                    >
                                                                      August 25,
                                                                      2024
                                                                    </span>
                                                                    .
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16"
                                                      style={{
                                                        pointerEvents: "auto"
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="Box-root Box-hideIfEmpty"
                                              style={{ pointerEvents: "auto" }}
                                            >
                                              <div
                                                className="Box-root Margin-top--0"
                                                style={{ minWidth: 233 }}
                                              >
                                                <div
                                                  className="Box-root"
                                                  style={{
                                                    pointerEvents: "none"
                                                  }}
                                                >
                                                  <div
                                                    className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                                    style={{
                                                      marginLeft: "-12px",
                                                      marginTop: "-12px"
                                                    }}
                                                  >
                                                    <div
                                                      className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                      style={{
                                                        pointerEvents: "auto"
                                                      }}
                                                    >
                                                      <div
                                                        className="PressableCore PressableCore--cursor--pointer PressableCore--height--jumbo PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableButton Button Button--color--white Box-root Flex-inlineFlex"
                                                        style={{
                                                          backgroundColor:
                                                            "rgb(255, 255, 255)",
                                                          boxShadow:
                                                            "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px"
                                                        }}
                                                      >
                                                        <div className="PressableCore-base Box-root">
                                                          <Link 
                                                            data-test="cancel-subscription"
                                                            className="UnstyledLink Button-element PressableContext Padding-horizontal--16 Padding-vertical--8 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--28 PressableContext--fontSize--16 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--jumbo PressableContext--radius--all PressableContext--width PressableContext--width--maximized"
                                                            href="/p/session/live_YWNjdF8xSE5ydmxDSm9Qc1J6UXNkLF9RWHlQWXpFUWpoWXl0anFXZ1pYS21QRTV6VXhMamFu0100I9dnGOuW/subscriptions/sub_1PKPFhCJoPsRzQsdx7FV7iOW/cancel"
                                                            style={{
                                                              color:
                                                                "rgb(60, 66, 87)"
                                                            }}
                                                          >
                                                            <div
                                                              className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                                              style={{
                                                                position:
                                                                  "relative"
                                                              }}
                                                            >
                                                              <div
                                                                aria-hidden="true"
                                                                className="TextAligner Box-root"
                                                                style={{
                                                                  lineHeight: 28,
                                                                  fontSize: 16,
                                                                  flex:
                                                                    "0 0 auto"
                                                                }}
                                                              />
                                                              <div
                                                                className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
                                                                style={{
                                                                  width: "100%",
                                                                  lineHeight: 0,
                                                                  flex:
                                                                    "1 1 auto"
                                                                }}
                                                              >
                                                                <span
                                                                  className="Button-label Text-color--default Text-fontSize--16 Text-fontWeight--medium Text-lineHeight--28 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                                                  style={{
                                                                    marginTop:
                                                                      "-1px"
                                                                  }}
                                                                >
                                                                  <span>
                                                                    Cancel plan
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </Link>
                                                        </div>
                                                        <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white" />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="Box-root Box-hideIfEmpty Margin-top--64 Margin-left--64"
                                  style={{ pointerEvents: "auto" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="Box-root Box-hideIfEmpty Margin-top--64 Margin-left--64"
                          style={{ pointerEvents: "auto" }}
                        >
                          <div>
                            <div className="Box-root Padding-bottom--8">
                              <div className="Box-root Box-divider--light-bottom-1 Margin-bottom--16 Padding-bottom--16 Flex-flex Flex-direction--row Flex-justifyContent--spaceBetween">
                                <div className="Box-root">
                                  <span className="Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline">
                                    <span>Billing information</span>
                                  </span>
                                </div>
                                <div className="Box-root" />
                              </div>
                            </div>
                            <div
                              className="Box-root"
                              style={{ pointerEvents: "none" }}
                            >
                              <div
                                className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                style={{
                                  marginLeft: "-24px",
                                  marginTop: "-24px"
                                }}
                              >
                                <div
                                  className="Box-root Box-hideIfEmpty Margin-top--24 Margin-left--24"
                                  style={{ pointerEvents: "auto" }}
                                >
                                  <button
                                    className="UnstyledLink ButtonLink IconParent Flex-flex"
                                    type="button"
                                  >
                                    <div
                                      className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        aria-hidden="true"
                                        className="TextAligner Box-root"
                                        style={{
                                          lineHeight: 24,
                                          fontSize: 16,
                                          flex: "0 0 auto"
                                        }}
                                      />
                                      <div
                                        className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                                        style={{
                                          lineHeight: 0,
                                          flex: "1 1 auto"
                                        }}
                                      >
                                        <div
                                          aria-hidden="true"
                                          className="SVGInline SVGInline--cleaned SVG Icon Icon--edit Icon-color Icon-color--gray Box-root Margin-right--8 Flex-flex"
                                          style={{
                                            transform: "translateY(0.36px)"
                                          }}
                                        >
                                          <svg
                                            margin="[object Object]"
                                            aria-hidden="true"
                                            className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--edit-svg Icon-color-svg Icon-color--gray-svg"
                                            height={12}
                                            width={12}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M3.75 2.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V8.694a.75.75 0 0 1 1.5 0v3.556A2.75 2.75 0 0 1 12.25 15h-8.5A2.75 2.75 0 0 1 1 12.25v-8.5A2.75 2.75 0 0 1 3.75 1h3.556a.75.75 0 1 1 0 1.5H3.75Z"
                                            />
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M13.739 1.178a1.75 1.75 0 0 0-2.478.002l-6.05 6.073a.75.75 0 0 0-.2.361l-.742 3.217a.75.75 0 0 0 .9.9l3.217-.743a.75.75 0 0 0 .363-.201l6.053-6.076a1.75 1.75 0 0 0-.003-2.472l-1.06-1.06ZM12.323 2.24a.25.25 0 0 1 .354 0l1.06 1.06a.25.25 0 0 1 0 .354l-.745.749-1.415-1.415.746-.748ZM10.52 4.05 6.425 8.16 6.001 10l1.837-.425 4.096-4.11L10.52 4.05Z"
                                            />
                                          </svg>
                                        </div>
                                        <span
                                          className="ButtonLink-label Text-color--gray Text-fontSize--16 Text-fontWeight--medium Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                          style={{ marginTop: "-1px" }}
                                        >
                                          <span>Update information</span>
                                        </span>
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="Box-root Box-hideIfEmpty Margin-top--64 Margin-left--64"
                          style={{ pointerEvents: "auto" }}
                        >
                          <div>
                            <div className="Box-root Padding-bottom--8">
                              <div className="Box-root Box-divider--light-bottom-1 Margin-bottom--16 Padding-bottom--16 Flex-flex Flex-direction--row Flex-justifyContent--spaceBetween">
                                <div className="Box-root">
                                  <span className="Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline">
                                    <span>Invoice history</span>
                                  </span>
                                </div>
                                <div className="Box-root" />
                              </div>
                            </div>
                            <div className="⚙ rs0 as3 as4 ⚙1uoakw5">
                              <div className="⚙ as5 as6 as7 as8 ⚙1wqjx0l">
                                <div className="⚙">
                                  <Link 
                                    href="https://invoice.stripe.com/i/acct_1HNrvlCJoPsRzQsd/live_YWNjdF8xSE5ydmxDSm9Qc1J6UXNkLF9RWGJaa1k0WnJoOVAyMHlnalVwcm9KUGxFeWVydU9vLDExMjU1NzcxNw0200Cr4g2pY2?s=il&locale=en-US"
                                    target="_blank"
                                    data-testid="hip-link"
                                    tabIndex={0}
                                    rel="noopener noreferrer"
                                    className="⚙ rs1 rs2 rs2 as9 asa asb asc asd ase asf asg ash asi asj ask asl asm asn aso asp asq ⚙1hhun9k"
                                  >
                                    <div className="⚙ rs0 asr asi ass ⚙eph96e">
                                      <span className="⚙ rs2 ast asu asv ⚙gg9jmq">
                                        Jul 25, 2024
                                      </span>
                                      <svg
                                        aria-hidden="true"
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="⚙   asw asx asy asz as10 as11 as12 ⚙1drzz2"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M2.25 3a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6A.75.75 0 0 0 9 9.75v-1.5a.75.75 0 1 1 1.5 0v1.5A2.25 2.25 0 0 1 8.25 12h-6A2.25 2.25 0 0 1 0 9.75v-6A2.25 2.25 0 0 1 2.25 1.5h1.5a.75.75 0 1 1 0 1.5h-1.5Z"
                                        />
                                        <path d="M7 0a.75.75 0 1 0 0 1.5h2.44L3.72 7.22a.75.75 0 1 0 1.06 1.06l5.72-5.72V5A.75.75 0 0 0 12 5V.75a.75.75 0 0 0-.75-.75H7Z" />
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                                <div className="⚙">
                                  <span className="⚙ rs2 ast as13 ⚙15qjszs">
                                    $5.00
                                  </span>
                                </div>
                                <div className="⚙">
                                  <span
                                    data-testid="invoice-status-badge-negative"
                                    className="sn-6ldk2i sn-6ldk2i-type-negative sn-1c37ise sn-1fnc4mz sn-1jhz88h"
                                  >
                                    Failed
                                  </span>
                                </div>
                                <div className="⚙ rs2 as14 as15 asu ast as13 ⚙1g6l7ep">
                                  Memory (per MB / min), vCPU (per vCPU / min),
                                  Network (per MB), Disk (per GB / min), and
                                  Hobby plan
                                </div>
                                <div className="⚙">
                                  <Link 
                                    href="https://invoice.stripe.com/i/acct_1HNrvlCJoPsRzQsd/live_YWNjdF8xSE5ydmxDSm9Qc1J6UXNkLF9RTU1sbG5EQWM5UTlsbUZhUU1yNDFPb01VU29JcUxRLDExMjU1NzcxNw0200kjGDzq3C?s=il&locale=en-US"
                                    target="_blank"
                                    data-testid="hip-link"
                                    tabIndex={0}
                                    rel="noopener noreferrer"
                                    className="⚙ rs1 rs2 rs2 as9 asa asb asc asd ase asf asg ash asi asj ask asl asm asn aso asp asq ⚙1hhun9k"
                                  >
                                    <div className="⚙ rs0 asr asi ass ⚙eph96e">
                                      <span className="⚙ rs2 ast asu asv ⚙gg9jmq">
                                        Jun 25, 2024
                                      </span>
                                      <svg
                                        aria-hidden="true"
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="⚙   asw asx asy asz as10 as11 as12 ⚙1drzz2"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M2.25 3a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6A.75.75 0 0 0 9 9.75v-1.5a.75.75 0 1 1 1.5 0v1.5A2.25 2.25 0 0 1 8.25 12h-6A2.25 2.25 0 0 1 0 9.75v-6A2.25 2.25 0 0 1 2.25 1.5h1.5a.75.75 0 1 1 0 1.5h-1.5Z"
                                        />
                                        <path d="M7 0a.75.75 0 1 0 0 1.5h2.44L3.72 7.22a.75.75 0 1 0 1.06 1.06l5.72-5.72V5A.75.75 0 0 0 12 5V.75a.75.75 0 0 0-.75-.75H7Z" />
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                                <div className="⚙">
                                  <span className="⚙ rs2 ast as13 ⚙15qjszs">
                                    $3.24
                                  </span>
                                </div>
                                <div className="⚙">
                                  <span
                                    data-testid="invoice-status-badge-positive"
                                    className="sn-6ldk2i sn-6ldk2i-type-positive sn-1c37ise sn-1fnc4mz sn-1jhz88h"
                                  >
                                    Paid
                                  </span>
                                </div>
                                <div className="⚙ rs2 as14 as15 asu ast as13 ⚙1g6l7ep">
                                  Memory (per MB / min), vCPU (per vCPU / min),
                                  Network (per MB), Disk (per GB / min), and
                                  Hobby plan
                                </div>
                                <div className="⚙">
                                  <Link 
                                    href="https://invoice.stripe.com/i/acct_1HNrvlCJoPsRzQsd/live_YWNjdF8xSE5ydmxDSm9Qc1J6UXNkLF9RQWtsSEdBYnkxUVIyaDRPbk9aUzNNRmhsVTlpQ3RQLDExMjU1NzcxNw0200oQDl8Vfl?s=il&locale=en-US"
                                    target="_blank"
                                    data-testid="hip-link"
                                    tabIndex={0}
                                    rel="noopener noreferrer"
                                    className="⚙ rs1 rs2 rs2 as9 asa asb asc asd ase asf asg ash asi asj ask asl asm asn aso asp asq ⚙1hhun9k"
                                  >
                                    <div className="⚙ rs0 asr asi ass ⚙eph96e">
                                      <span className="⚙ rs2 ast asu asv ⚙gg9jmq">
                                        May 25, 2024
                                      </span>
                                      <svg
                                        aria-hidden="true"
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="⚙   asw asx asy asz as10 as11 as12 ⚙1drzz2"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M2.25 3a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6A.75.75 0 0 0 9 9.75v-1.5a.75.75 0 1 1 1.5 0v1.5A2.25 2.25 0 0 1 8.25 12h-6A2.25 2.25 0 0 1 0 9.75v-6A2.25 2.25 0 0 1 2.25 1.5h1.5a.75.75 0 1 1 0 1.5h-1.5Z"
                                        />
                                        <path d="M7 0a.75.75 0 1 0 0 1.5h2.44L3.72 7.22a.75.75 0 1 0 1.06 1.06l5.72-5.72V5A.75.75 0 0 0 12 5V.75a.75.75 0 0 0-.75-.75H7Z" />
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                                <div className="⚙">
                                  <span className="⚙ rs2 ast as13 ⚙15qjszs">
                                    $5.00
                                  </span>
                                </div>
                                <div className="⚙">
                                  <span
                                    data-testid="invoice-status-badge-positive"
                                    className="sn-6ldk2i sn-6ldk2i-type-positive sn-1c37ise sn-1fnc4mz sn-1jhz88h"
                                  >
                                    Paid
                                  </span>
                                </div>
                                <div className="⚙ rs2 as14 as15 asu ast as13 ⚙1g6l7ep">
                                  Memory (per MB / min), vCPU (per vCPU / min),
                                  Network (per MB), and Hobby plan
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


}

export default  Profile


// export const getStaticProps = async () => {
 
//   const exrercises  = await fetchExercices();
  
//   console.log("TRACKS IN STATIC", exrercises )

//   return {
//     props: {
//       exrercises,
//     },
//     revalidate: 5,
//   };
// };
