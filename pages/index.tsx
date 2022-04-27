import getConfig from 'next/config';

import Layout from '@/components/Layout';

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>

      <section className="relative bg-gray-900 pb-20">
        
        <img
          className="hidden lg:block lg:absolute top-0 left-0 mt-32"
          src="zeus-assets/icons/dots/yellow-dot-left-bars.svg"
          alt=""
          data-removed="true"
        />
        <img
          className="hidden lg:block lg:absolute bottom-0 right-0 mt-20"
          src="zeus-assets/icons/dots/red-dot-right-shield.svg"
          alt=""
          data-removed="true"
        />
        <div className="relative container pt-12 px-4 mb-20 mx-auto text-center">
          <span className="text-blue-500 font-semibold">What's new at Shuffle</span>
          <h2 className="mt-8 mb-8 lg:mb-12 text-white text-4xl lg:text-6xl font-semibold">
            Friends you can count on.
          </h2>
          <p className="max-w-3xl mx-auto mb-8 lg:mb-12 text-white text-xl opacity-50">
            Build a well-presented brand that everyone will love. Take care to develop
            resources continually and integrity them with previous projects.
          </p>
          <a
            className="relative z-10 inline-block w-full md:w-auto mb-2 md:mb-0 px-8 py-4 mr-4 text-sm font-medium leading-normal bg-red-400 hover:bg-red-300 text-white rounded transition duration-200"
            href="#"
          >
            Call for Assistance
          </a>
        </div>
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <div className="p-8 border border-blue-800 rounded-lg">
                <span className="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-teal-500">
                  <svg
                    width={20}
                    height={17}
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.1614 8.05311C13.1614 9.79911 11.7454 11.2141 9.99938 11.2141C8.25338 11.2141 6.83838 9.79911 6.83838 8.05311C6.83838 6.30611 8.25338 4.89111 9.99938 4.89111C11.7454 4.89111 13.1614 6.30611 13.1614 8.05311Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05285C17.289 3.48885 13.806 0.750854 9.998 0.750854H10.002C6.194 0.750854 2.711 3.48885 0.75 8.05285C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mb-6 text-2xl text-white font-semibold">
                  Car and Home Lockout
                </h3>
                <p className="mb-8 text-gray-500">
                  We made sure you get feedback the same day.
                </p>
                <a
                  className="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 hover:bg-blue-700 text-white"
                  href="#"
                >
                  <svg
                    width={19}
                    height={13}
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.7 6.74872L0.75 6.74872"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.7002 11.7497L17.6372 6.74869L9.7002 1.74769V11.7497Z"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <div className="p-8 border border-blue-800 rounded-lg">
                <span className="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-orange-500">
                  <svg
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8397 17.1642V3.54639"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.9173 13.068L14.8395 17.1647L10.7617 13.068"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.91102 0.832886V14.4507"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.833496 4.92894L4.91127 0.832275L8.98905 4.92894"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mb-6 text-2xl text-white font-semibold">
                  Flat Tire
                </h3>
                <p className="mb-8 text-gray-500">
                  Options settings for customers convenience.
                </p>
                <a
                  className="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 hover:bg-blue-700 text-white"
                  href="#"
                >
                  <svg
                    width={19}
                    height={13}
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.7 6.74872L0.75 6.74872"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.7002 11.7497L17.6372 6.74869L9.7002 1.74769V11.7497Z"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <div className="p-8 border border-blue-800 rounded-lg">
                <span className="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-red-400">
                  <svg
                    width={18}
                    height={20}
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7364 0.76187H5.0844C3.0044 0.75387 1.3004 2.41087 1.2504 4.49087V15.2279C1.2054 17.3299 2.8734 19.0699 4.9744 19.1149C5.0114 19.1149 5.0484 19.1159 5.0844 19.1149H13.0724C15.1624 19.0409 16.8144 17.3189 16.8024 15.2279V6.03787L11.7364 0.76187Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.4746 0.750122V3.65912C11.4746 5.07912 12.6236 6.23012 14.0436 6.23412H16.7976"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.64062 7.90881V13.9498"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.9864 10.2643L8.64139 7.9093L6.29639 10.2643"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mb-6 text-2xl text-white font-semibold">
                  Jump Start
                </h3>
                <p className="mb-8 text-gray-500">
                  Store projects in easily accessible catalogs
                </p>
                <a
                  className="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 hover:bg-blue-700 text-white"
                  href="#"
                >
                  <svg
                    width={19}
                    height={13}
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.7 6.74872L0.75 6.74872"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.7002 11.7497L17.6372 6.74869L9.7002 1.74769V11.7497Z"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <h3 className="mb-6 text-2xl text-white font-semibold">
                  Empty Fuel
                </h3>
                <p className="mb-8 text-gray-500">
                  Store projects in easily accessible catalogs
                </p>
                <a
                  className="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 hover:bg-blue-700 text-white"
                  href="#"
                >
                  <svg
                    width={19}
                    height={13}
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.7 6.74872L0.75 6.74872"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.7002 11.7497L17.6372 6.74869L9.7002 1.74769V11.7497Z"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-lg font-semibold leading-none" href="#">
                <img
                  className="h-7"
                  src="zeus-assets/logo/logo-zeus-red.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Company
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block py-3 text-center text-sm leading-normal rounded bg-red-50 hover:bg-red-200 text-red-500 font-semibold transition duration-200"
                  href="#"
                >
                  Contact Us
                </a>
              </div>
              <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                <span>© 2021 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
