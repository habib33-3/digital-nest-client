const Banner = () => {
  return (
    <div
      style={{ background: "url('./bannerBg.svg')" }}
      className="max-w-7xl mx-auto h-max my-10 bg-no-repeat bg-contain p-10 rounded-3xl"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-20 items-center">
        <div className="text-center space-y-4">
          <h1 className="text-7xl font-black text-neutral">DigitalNest</h1>
          <p className="text-3xl font-semibold text-neutral">
            Elevate Your Digital Experience and Fuel Your Life with Innovation
          </p>
        </div>
        <div className="">
          <img
            src="https://i.ibb.co/frZdSwK/banner-Img.jpg"
            alt=""
            className="h-96 w-96 rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
