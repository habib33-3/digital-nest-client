const Newsletter = () => {
  return (
    <div className="mx-auto max-w-6xl px-2 my-5 card bg-success py-10 lg:px-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-base-100">
            Subscribe to our newsletter
          </h2>
          <p className="mt-2 text-neutral">Don{"'"}t Miss Any Offers</p>
        </div>
        <div className="mt-10 w-full md:w-1/2 lg:mt-0">
          <div className="flex lg:justify-center">
            <div className="flex w-full max-w-md items-center space-x-2">
              <input
                className="flex h-10 p-2 w-full rounded-md border border-gray-300 text-sm placeholder:text-base-100 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-1"
                type="email"
                placeholder="Email"
              />
              <button className="rounded-md btn-error px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-success-darker">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
