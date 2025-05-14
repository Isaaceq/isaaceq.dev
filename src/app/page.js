import Image from "next/image";
import profile_photo from "../../assets/isaac.jpeg";
import dataviz from "../../assets/dataviz.jpg";
import pms from "../../assets/pms.png";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

export default function Home() {
  return (
    <div className="w-full max-w-[640px] mx-auto px-8 py-12 sm:py-24 space-y-20 sm:space-y-16 border-4 md:border-none">
      <header className="space-y-10">
        <div className="mask-b-from-70% flex flex-col items-center">
          <Image
            src={profile_photo.src}
            alt="Isaac"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl text-green-900 mb-5 md:text-center">
            Crafting <em>Seamless</em> Solutions, <br />
            One Component at a time.
          </h1>
          <p className="align-middle">
            Hi, I&apos;m Isaac Escobar! Experienced Software Engineer with a strong foundation in front-end
            development, building intuitive, accessible, and scalable web
            applications using modern JavaScript frameworks. Proficient in
            component-based architecture and creating seamless user experiences
            through clean, maintainable code.
            <br />
            <br />
            Outside of my professional life, I&apos;m an avid coffee enthusiast—always on the hunt for the perfect brew! I also enjoy hitting the golf course whenever I can and make it a point to stay active. These pursuits help me recharge and bring fresh perspectives to my work.
          </p>
        </div>
      </header>

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
          <p className="md:text-justify pb-2">
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
          <p className="md:text-justify pb-2">
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

      <section id="endorsements" className="space-y-3">
        <h2 className="uppercase font-semibold tracking-widest text-green-900">
          LinkedIn Recommendations
        </h2>
        <p className="text-left pb-2">
          Recommendations from LinkedIn highlighting collaborative successes and
          professional impact. You can view all endorsements on my <a href="http://linkedin.com/in/isaaceq" target="_blank" className="underline hover:text-green-900">LinkedIn profile.</a>
        </p>

        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <div className="card card-sm">
              <div className="card-body">
                <h2 className="card-title">Dan Overlander</h2>
                <span className="text-xs text-green-900 italic">
                  - Principal Software Engineer at Dell
                </span>
                <p className="indent-2 italic text-xs md:text-sm">
                  &quot;I would leap at the chance to work with Isaac, again. We had
                  been on the same team for four years, and Isaac was a joy to
                  work with. Most of the time we were together, we were both
                  working on the data visualization portion of our design
                  library. 
                  <br />
                  <br />
                  Isaac covered a lot of the innovative solutions we
                  needed for full-on chart implementation to essential shared
                  elements. Isaac&apos;s great at picking up on things he&apos;s
                  not familiar with - case in point, we were all introduced to
                  the amCharts library as part of our refactoring of the data
                  visualization components, and he learned the inner workings
                  very well, very quickly. He&apos;s also great at explaining
                  code and coding concepts in ways that are friendly to the
                  listener and easy to adopt.
                  <br />
                  <br />
                  He has always been on the best working behavior, and is a
                  pleasure to work with. He became not only a great co-worker
                  but a good friend as well.&quot;
                </p>
              </div>
            </div>
          </div>

          <div id="item2" className="carousel-item w-full">
            <div className="card card-sm">
              <div className="card-body">
                <h2 className="card-title">Miranda Hoffman</h2>
                <span className="text-xs text-green-900 italic">
                  - Senior Product Designer at Dell Technologies
                </span>
                <p className="indent-2 italic text-xs md:text-sm">
                  &quot;I&apos;ve had the pleasure of working with Isaac on multiple projects, and his ability to bridge the gap between engineering and design is truly exceptional.
                  <br />
                  <br />
                  One of my favorite aspects of pairing with Isaac on a project is his gift for explaining complex technical concepts in a way that is easy to understand. His ability to communicate effectively not only accelerates collaboration but also elevates the entire team&apos;s understanding of technical
                  possibilities and constraints.
                  <br />
                  <br />
                  Isaac has been an integral part of building our Data Visualization library at Dell, and his impact cannot be overstated.&quot;
                </p>
              </div>
            </div>
          </div>

          <div id="item3" className="carousel-item w-full">
            <div className="card card-sm">
              <div className="card-body">
                <h2 className="card-title">Bert Grantges</h2>
                <span className="text-xs text-green-900 italic">
                  - Global Design Director, Digital @ Dell Technologies
                </span>
                <p className="indent-2 italic text-xs md:text-sm">
                  &quot;I had the pleasure of working with Isaac on the Dell Design System, and I can confidently say he’s an solid engineer and teammate. He demonstrated end-to-end expertise, contributing not only to our core components and libraries but also spearheading the release of our initial data visualization
                  libraries. Isaac stands out for his willingness to collaborate across disciplines—he actively partnered with designers, product managers, and fellow engineers to shape and refine our solutions.
                  <br />
                  <br />
                  His efforts didn’t stop with developing top-quality code: Isaac also led demos, webinars, and enablement sessions to ensure our internal product teams were fully equipped to use our design system effectively. His enthusiasm for both problem-solving and knowledge-sharing made him a go-to resource who
                  consistently fostered team growth. If you’re looking for a talented and collaborative engineer who excels at driving innovation, you&apos;ll be lucky to have Isaac.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
        </div>
      </section>

      <section id="contact" className="space-y-3">
        <h2 className="uppercase font-semibold tracking-widest text-green-900">
          Contact me
        </h2>
        <p className="md:text-justify pb-2">
          For professional opportunities or to discuss a project, please contact
          me via email at{" "}
          <a
            aria-label="Email Isaac"
            href="mailto:isaac.escoq@gmail.com?subject=A%20Quick%20Hello"
            className="underline hover:text-green-900">
            isaac.escoq [at] gmail [dot] com
          </a>{" "}
          or find me on LinkedIn
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
      <BackToTopButton/>
    </div>
  );
}