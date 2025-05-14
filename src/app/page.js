import Image from "next/image";
import profile_photo from "../../assets/isaac.jpeg";
import dataviz from "../../assets/dataviz.jpg";
import pms from "../../assets/pms.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="w-full max-w-[425px] mx-auto px-8 py-12 sm:py-24 space-y-20 sm:space-y-16 border-4 md:border-none">
      <div className="mask-b-from-70%">
        <h2 className="uppercase font-semibold tracking-widest text-2xl text-center mb-10">
          Isaac Escobar
        </h2>
        <Image
          src={profile_photo.src}
          alt="Isaac"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl text-green-900">
          Crafting <em>Seamless</em> Solutions, <br />
          One Component at a time.
        </h1>
        <p>
          Experienced Software Engineer with a strong foundation in front-end
          development, building intuitive, accessible, and scalable web
          applications using modern JavaScript frameworks. Proficient in
          component-based architecture and creating seamless user experiences
          through clean, maintainable code.
        </p>
      </div>

      <section id="experience" className="space-y-4">
        <h2 className="uppercase font-semibold tracking-widest text-green-900">
          Work Experience
        </h2>
        <ul className="space-y-3 pr-2">
          <li className="flex justify-between items-center gap-2">
            <span className="font-medium">Dell Technologies</span>
            <span className="border-b border-stone-600 border-dashed flex-grow"></span>
            <span className="text-green-900 italic text-sm">2021 - 2025</span>
          </li>
          <li className="flex justify-between items-center gap-4">
            <span className="font-medium">BBVA</span>
            <span className="font-light text-xs md:text-sm">
              Contract for Everis USA
            </span>
            <span className="border-b border-stone-600 border-dashed flex-grow"></span>
            <span className="text-green-900 italic text-sm">2019 - 2021</span>
          </li>
          <li className="flex justify-between items-center gap-4">
            <span className="font-medium">Microsoft</span>
            <span className="font-light text-xs md:text-sm">
              Contract for Allyis Inc.
            </span>
            <span className="border-b border-stone-600 border-dashed flex-grow"></span>
            <span className="text-green-900 italic text-sm">2017 - 2019</span>
          </li>
        </ul>
      </section>

      <section id="projects" className="space-y-5">
        <h2 className="uppercase font-semibold tracking-widest text-green-900">
          Projects
        </h2>
        <div className="space-y-5 mb-10">
          <ul className="space-y-3 main-list pr-2 ">
            <li className="flex justify-between items-center gap-4">
              <span className="font-medium">
                <a
                  href="https://vanilla-dv.delldesignsystem.com/2.12.0/index.html?path=/story/introduction--page"
                  target="_blank"
                >
                  Dell Design System
                </a>
                <Image
                  className="inline-block ml-2 rotate-x-180"
                  width={16}
                  height={16}
                  alt="arrow"
                  src="https://pic.onlinewebfonts.com/thumbnails/icons_340503.svg"
                />
              </span>
              <span className="border-b border-stone-600 border-dashed flex-grow"></span>
              <span className="text-green-900 italic text-sm">
                Data Visualization
              </span>
            </li>
          </ul>
          <div className="inset-shadow rounded-md">
            <a
              href="https://vanilla-dv.delldesignsystem.com/2.12.0/index.html?path=/story/introduction--page"
              target="_blank"
            >
              <Image
                src={dataviz.src}
                width={dataviz.width}
                height={dataviz.height}
                alt="data-viz"
                className="rounded-t-md h-32 w-full object-cover"
              />
              <div className="h-10 flex justify-center items-center gap-10 bg-green-200">
                <span className="h-4 w-24 bg-teal-900 inline-block rounded-sm">
                  {" "}
                </span>
                <span className="h-4 w-12 bg-teal-900 inline-block rounded-sm">
                  {" "}
                </span>
                <span className="h-4 w-8 bg-teal-900 inline-block rounded-sm">
                  {" "}
                </span>
              </div>
            </a>
          </div>
          <p className="pb-2">
            This project involved leading the development of a comprehensive
            design system at Dell Technologies, which included creating over 10
            interactive chart components like area, bar, and line charts using
            amCharts and JavaScript. These components, along with reusable
            elements like legends, were featured in the Dell Design System.
            Native charting libraries for Vue.js and React were also built for
            easy integration. The entire suite was documented and showcased
            using Storybook, significantly improving development efficiency and
            collaboration.
          </p>
        </div>

        <div className="space-y-5">
          <ul className="space-y-3 main-list pr-2 ">
            <li className="flex justify-between items-center gap-4">
              <span className="font-medium">
                <a
                  href="https://premier-merchant-services.vercel.app/"
                  target="_blank"
                >
                  Premier Merchant Services
                </a>
                <Image
                  className="inline-block ml-2 rotate-x-180"
                  width={16}
                  height={16}
                  alt="arrow"
                  src="https://pic.onlinewebfonts.com/thumbnails/icons_340503.svg"
                />
              </span>
              <span className="border-b border-stone-600 border-dashed flex-grow"></span>
              <span className="text-green-900 italic text-sm">Website</span>
            </li>
          </ul>
          <div className="inset-shadow rounded-md">
            <a
              href="https://vanilla-dv.delldesignsystem.com/2.12.0/index.html?path=/story/introduction--page"
              target="_blank"
            >
              <Image
                src={pms.src}
                width={pms.width}
                height={pms.height}
                alt="data-viz"
                className="rounded-t-md h-32 w-full object-cover object-top"
              />
              <div className="h-10 flex justify-center items-center gap-10 bg-green-200">
                <span className="h-4 w-24 bg-teal-900 inline-block rounded-sm">
                  {" "}
                </span>
                <span className="h-4 w-12 bg-teal-900 inline-block rounded-sm">
                  {" "}
                </span>
                <span className="h-4 w-8 bg-teal-900 inline-block rounded-sm">
                  {" "}
                </span>
              </div>
            </a>
          </div>
          <p className="pb-2">
            I developed and launched a new website for Premier Merchant
            Services, a provider of credit card processing and e-commerce
            payment solutions. The primary goal was to create a modern,
            professional online presence that clearly communicates their
            services and value proposition. Using Next.js and React, I built a
            fast, responsive, and user-friendly site designed to enhance visitor
            engagement and provide a seamless experience across all devices. The
            project focused on delivering a clean aesthetic and intuitive
            navigation to reflect a contemporary feel for the financial services
            company.
          </p>
        </div>
      </section>

      <section id="contact" className="space-y-3">
        <h2 className="uppercase font-semibold tracking-widest text-green-900">
          Contact me
        </h2>
        <p className="pb-2">
          For professional opportunities or to discuss a project, please contact
          me via email at isaac.escoq [at] gmail [dot] com or find me on
          LinkedIn
        </p>
        <ul className="space-y-3 main-list pr-2 ">
          <li className="flex justify-between items-center gap-4">
            <span className="font-medium">
              <a href="http://linkedin.com/in/isaaceq" target="_blank">
                LinkedIn
                <Image
                  className="inline-block ml-2 pb-2"
                  width={16}
                  height={16}
                  alt="arrow"
                  src="https://pic.onlinewebfonts.com/thumbnails/icons_340503.svg"
                />
              </a>
            </span>
            <span className="border-b border-stone-600 border-dashed flex-grow"></span>
            <span className="text-green-900 italic text-sm">Isaac Escobar</span>
          </li>
        </ul>
      </section>
    </div>
  );
}