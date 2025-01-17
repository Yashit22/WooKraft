import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Technology from "@/public/images/technology.svg"
import CEx from "@/public/images/customerexperience.svg"
import Acc from "@/public/images/accounting.svg"
import Omni from "@/public/images/omnichannel.svg"


export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            {/* <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Advanced Controls
              </span>
            </div> */}
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Where we Drive your Success
            </h2>
            <p className="text-lg text-indigo-200/65">
              Discover the powerful impact WooKraft can have on optimizing your business processes and enhancing customer engagement.
            </p>
          </div>
          {/* <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div> */}
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              {/* <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M688.577,148.161l-279.947,0l-0,-64.765c-0,-17.247 -14.003,-31.25 -31.25,-31.25c-17.248,0 -31.25,14.003 -31.25,31.25l-0,64.768c-52.094,0.29 -101.991,21.109 -138.847,57.966c-33.572,33.572 -53.838,77.963 -57.402,124.974l-65.332,0c-17.247,0 -31.25,14.003 -31.25,31.25c0,17.247 14.003,31.25 31.25,31.25l64.765,0l0,279.948l-64.765,-0c-17.247,-0 -31.25,14.002 -31.25,31.25c0,17.247 14.003,31.25 31.25,31.25l65.332,-0c3.564,47.011 23.83,91.402 57.402,124.974c36.856,36.857 86.753,57.676 138.847,57.965l-0,64.768c-0,17.248 14.002,31.25 31.25,31.25c17.247,0 31.25,-14.002 31.25,-31.25l-0,-64.764l279.947,-0l-0,64.764c-0,17.248 14.003,31.25 31.25,31.25c17.247,0 31.25,-14.002 31.25,-31.25l-0,-66.877c41.818,-6.159 80.852,-25.606 111.102,-55.856c33.572,-33.572 53.837,-77.963 57.401,-124.974l65.332,-0c17.248,-0 31.25,-14.003 31.25,-31.25c0,-17.248 -14.002,-31.25 -31.25,-31.25l-64.765,-0l0,-279.948l64.765,0c17.248,0 31.25,-14.003 31.25,-31.25c0,-17.247 -14.002,-31.25 -31.25,-31.25l-65.332,0c-3.564,-47.011 -23.829,-91.402 -57.401,-124.974c-30.25,-30.25 -69.284,-49.697 -111.102,-55.856l-0,-66.878c-0,-17.247 -14.003,-31.25 -31.25,-31.25c-17.247,0 -31.25,14.003 -31.25,31.25l-0,64.765Zm33.654,708.334l-375,-0c-35.915,-0 -70.359,-14.268 -95.754,-39.663c-25.396,-25.396 -39.663,-59.84 -39.663,-95.754c0,-113.06 0,-261.94 0,-375c0,-35.915 14.267,-70.359 39.663,-95.754c25.395,-25.396 59.839,-39.663 95.754,-39.663l374.999,0c35.915,0 70.359,14.267 95.755,39.663c25.395,25.395 39.662,59.839 39.662,95.754l0,375c0,35.914 -14.267,70.358 -39.662,95.754c-25.396,25.395 -59.84,39.663 -95.754,39.663Zm-364.584,-322.917c0,-0 0,29.825 0,62.5c0.001,63.283 51.301,114.583 114.584,114.583c39.191,0 85.809,0 125,0c63.282,0 114.583,-51.3 114.583,-114.583c0,-39.191 0,-85.809 0,-125c-0,-63.283 -51.301,-114.583 -114.583,-114.583c-32.675,-0 -62.5,-0 -62.5,-0c-17.248,-0 -31.25,14.002 -31.25,31.25c-0,17.247 14.002,31.25 31.25,31.25l62.498,-0c28.767,0 52.084,23.318 52.085,52.081c0,0.003 0,125.002 0,125.002c-0.001,28.765 -23.318,52.082 -52.082,52.083c-0.003,0 -125.001,0 -125.001,0c-28.765,-0.001 -52.083,-23.318 -52.084,-52.081c0,-0.004 0,-62.502 0,-62.502c0,-17.248 -14.002,-31.25 -31.25,-31.25c-17.247,-0 -31.25,14.002 -31.25,31.25Zm385.417,-241.407c18.254,0 33.073,14.82 33.073,33.074c0,18.253 -14.819,33.073 -33.073,33.073c-18.254,-0 -33.073,-14.82 -33.073,-33.073c-0,-18.254 14.819,-33.074 33.073,-33.074Z"/>
                <path fillOpacity=".48" d="M920.147,346.078c0.001,-52.491 -20.851,-102.832 -57.968,-139.948c-37.117,-37.117 -87.458,-57.969 -139.949,-57.969c-113.059,0 -261.939,0 -374.999,0c-52.491,0 -102.832,20.852 -139.948,57.969c-37.117,37.116 -57.969,87.457 -57.969,139.948c0,113.06 0,261.94 0,375c-0,52.49 20.852,102.831 57.969,139.948c37.116,37.117 87.457,57.969 139.948,57.969c70.055,-0 147.677,-0 201.797,-0c52.491,-0 102.832,-20.852 139.949,-57.969c49.034,-49.034 124.168,-124.168 173.202,-173.202c37.117,-37.117 57.969,-87.458 57.968,-139.949l0,-201.797Zm-62.5,0l0,201.797c0,35.915 -14.267,70.359 -39.662,95.755c-49.035,49.034 -124.168,124.167 -173.202,173.202c-25.396,25.396 -59.84,39.663 -95.755,39.663c-54.12,-0 -131.742,-0 -201.797,-0c-35.915,-0 -70.359,-14.267 -95.754,-39.663c-25.396,-25.396 -39.663,-59.84 -39.663,-95.754c0,-113.06 0,-261.94 0,-375c0,-35.915 14.267,-70.359 39.663,-95.754c25.395,-25.396 59.839,-39.663 95.754,-39.663l374.999,0c35.915,0 70.359,14.267 95.755,39.663c25.395,25.395 39.662,59.839 39.662,95.754Zm-500,250c0.001,63.283 51.301,114.583 114.584,114.583c39.191,0 85.809,0 125,0c63.282,0 114.583,-51.3 114.583,-114.583c0,-39.191 0,-85.809 0,-125c-0,-63.283 -51.301,-114.583 -114.583,-114.583l-125,-0c-63.283,-0 -114.583,51.3 -114.584,114.583l0,125Zm62.5,0.002l0,-125.002c0.001,-28.765 23.319,-52.083 52.082,-52.083c0.003,-0 125.001,-0 125.001,-0c28.766,0 52.083,23.318 52.084,52.081c0,0.003 0,125.002 0,125.002c-0.001,28.765 -23.318,52.082 -52.082,52.083c-0.003,0 -125.001,0 -125.001,0c-28.765,-0.001 -52.083,-23.318 -52.084,-52.081Z"/>
              </svg> */}
              <Image src={Technology} alt="WooKraft" width={25} height={25} className="mb-2"/>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Empower Your Business with Technology
              </h3>
              <p className="text-indigo-200/65">
                WooKraft products streamline operations, improve customer experience, and drive growth by automating tasks and providing valuable insights.
              </p>
            </article>
            <article>
              <svg
                className="mb-2 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
              >
                <path fill-opacity="0.85" d="M 32 5 L 4 5 C 2.896 5 2 5.896 2 7 L 2 29 C 2 30.105 2.896 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.896 33.105 5 32 5 Z M 22.56 25.94 L 15.46 15.36 L 9.12 24.64 L 4.62 20.64 L 6 19.05 L 8.7 21.44 L 15.46 11.56 L 22.65 22.27 L 29.65 13 L 31.35 14.28 Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                In-Depth Business Analytics
              </h3>
              <p className="text-indigo-200/65">
                In-depth insights help drive data-based decisions, optimize operations, and boost growth and profitability.
              </p>
            </article>
            <article>
            <Image src={CEx} alt="WooKraft" width={32} height={32} />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Enhance Brand's Customer Engagement
              </h3>
              <p className="text-indigo-200/65">
                Engage customers with automated emails, SMS, and WhatsApp. Expand your customer base and boost loyalty with targeted marketing campaigns.
              </p>
            </article>
            <article>
              <Image src={Acc} alt="Accounting" width={25} height={25} className="mb-2" />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Efficient Accounting
              </h3>
              <p className="text-indigo-200/65">
                Automated solutions streamline payroll, track transactions, and manage business expenses, providing real-time insights and accurate financial reporting for better budgeting.
              </p>
            </article>
            <article>
              <Image src={Omni} alt="Omni-Channel" width={29} height={29} className="mb-1" />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Unique Omni-Channel presence
              </h3>
              <p className="text-indigo-200/65">
                Being present across multiple channels like websites, apps, enhances visibility, customer interaction, and provides a consistent experience, driving growth and satisfaction.
              </p>
            </article>
            <article>
              <svg
                className="mb-2 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
              >
                <path d="M2,21h8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5Zm13,8.5v5a.5.5,0,0,1-.5.5h-1v2L19,19H14.5a.5.5,0,0,1-.5-.5v-5a.5.5,0,0,1,.5-.5h8A.5.5,0,0,1,23,13.5Z"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Tech-Savy Customer Interaction
              </h3>
              <p className="text-indigo-200/65">

                Offer personalized experiences with quick responses and easy service access for a memorable experience. Enhance interactions with seamless appointments, multi-channel ordering, and digital payments.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
