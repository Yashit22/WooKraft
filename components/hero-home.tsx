
export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="hero-header-main py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Next-Generation Solutions for Retail, Restaurants, and Every Industry            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                WooKraft products are designed to adapt to your business, delivering seamless solutions across all devices with effortless setup and lasting results.              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left - Video Section */}
            <div className="relative">
              {/* <ModalVideo
                thumb={VideoThumb}
                thumbWidth={1104}
                thumbHeight={576}
                thumbAlt="Modal video thumbnail"
                video="videos/video.mp4"
                videoWidth={1920}
                videoHeight={1080}
                autoplay={true}
                className="w-full h-full object-cover rounded-lg"
              /> */}
              <video
              autoPlay={true}
              muted={true}
              loop={true}
              className="w-full h-full object-cover filter brightness-75 rounded-lg"
              >
                <source src="videos/video.mp4"/>
              </video>
            </div>

            {/* Right - Text Section */}
            <div className="flex flex-col justify-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              WooKraft
            </h2>
              <p className="text-lg text-gray-600 mb-8" data-aos="fade-up" data-aos-delay={200}>
              We are commited to providing cutting-edge solutions tailored to your business needs. From advanced POS systems and powerful guest engagement platforms to, accounting tools, and business analytics, our technology seamlessly integrates to streamline operations, enhance customer experiences, and drive growth across every aspect of your business.              </p>
              <div className="border-t-2 border-gray-300 pt-4 mt-4">
                <a
                  href="#0" // Change to your target URL
                  className="text-indigo-600 font-medium flex items-center hover:underline"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  Learn How WooKraft Can Transform Your Business
                  {/* Arrow icon here */}
                  <span className="ml-2 text-indigo-600">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
