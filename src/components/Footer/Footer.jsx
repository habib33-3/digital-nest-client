const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-10 light-mode:bg-white dark-mode:bg-gray-800 light-mode:text-gray-900 dark-mode:text-gray-100">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <img
                  src="https://i.ibb.co/94x4wKS/logo.jpg"
                  alt=""
                  className="w-20 rounded-xl"
                />
                <span className="ml-4 text-lg font-bold">DigitalNest</span>
              </div>
              <div>
                <p className="mb-4 text-base font-medium">
                  Elevate Your Digital Experience and Fuel Your Life with
                  Innovation
                </p>
                <p className="text-sm">
                  &copy; {new Date().getFullYear()}. All Rights Reserved by
                  DigitalNest.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Shop
              </h3>
              <ul>
                <li className="mb-4">
                  <a className="text-base font-medium">Products</a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium">Brands</a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium">Deals</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a className="text-base font-medium">Contact Us</a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium">FAQ</a>
                </li>
                <li>
                  <a className="text-base font-medium">Customer Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Legal
              </h3>
              <ul>
                <li className="mb-4">
                  <a className="text-base font-medium">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-base font-medium">Shipping Information</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
