import bannerThumb from '../../assets/banner/banner.png';

const Banner = () => {
    return (
      <div>
        <div className="container mx-auto">
          <div className="banner-one flex item-center h-full pt-32 pb-32">
            <div className="text-center max-w-[897px] mx-auto h-full">
              <h1 className="text-[52px] font-bold text-white">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="mt-6 text-[18px] text-center text-white">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding problems to become an
                exceptionally well world-class Programmer.
              </p>
              <div className="flex items-center justify-center gap-7 mt-10">
                <a
                  className="btn h-16 px-8 bg-[#0be58a] font-semibold text-[#150B2B] flex items-center justify-center rounded-4xl"
                  href="#"
                >
                  Explore Now
                </a>
                <a
                  className="btn h-16 px-8 border transition-all border-[white] hover:bg-[#0be58a] font-semibold hover:text-[#150B2B] hover:border-[#0be58a] text-white flex items-center justify-center rounded-4xl"
                  href="#"
                >
                  Explore Now
                </a>
              </div>
            </div>
            <div className="absolute right-0 top-0 -z-1 w-full h-full">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={bannerThumb}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;