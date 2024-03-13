import NavBar from "./NavBar";
import { FiBookOpen } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const MyJourney = () => {
  return (
    <main className="relative ml-0 lg:ml-[26%] lg:right-0 w-full lg:w-[74%] bg-eerie-black rounded-lg border md:border-0 border-jet border-solid shadow-sm md:shadow-none shadow-jet p-5 flex flex-col gap-10 mt-5 lg:mt-0 pb-10 lg:mb-0 mb-20 overflow-hidden">
      <div className="lg:fixed lg:top-7 lg:right-7">
        <NavBar />
      </div>

      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold " data-aos="fade-down">
            My Journey
          </h1>
          <div
            className="bg-vegas-gold h-[5px] w-[60px] rounded-full"
            data-aos="fade-down"
          ></div>
        </div>
        <div className="relative pl-8 pr-4 border-l-[2px] border-l-jet border-l-solid ml-5 md:ml-8 mt-10 mb-10 grid gap-6">
          <h1 className="text-xl font-bold " data-aos="fade-down">
            Working Experience
          </h1>
          <FiBookOpen className="absolute top-[-15px] left-[-25px] p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-5xl" />

          <div className="relative grid gap-2">
            <h3
              className="text-[16px] md:text-[18px]  font-bold"
              data-aos="fade-down"
            >
              App-Org
            </h3>
            <h4
              className="text-[15px] md:text-[16px]  font-italic"
              data-aos="fade-down"
            >
              Frontend Developer
            </h4>

            <h4 className="text-[14px] md:text-[16px] " data-aos="fade-down">
              - Built frontend app using React.js and React Hooks.
            </h4>

            <h4 className="text-[14px] md:text-[16px] " data-aos="fade-down">
              - Collaborated with the backend developer to design and consume C#
              and .NET RESTful APIs, ensuring seamless integration between the
              frontend and backend systems.
            </h4>
            <h4 className="text-[14px] md:text-[16px] " data-aos="fade-down">
              - Developed and maintained reusable UI components, reducing
              redundancy in code and accelerating the development of new
              features.
            </h4>
            <h4 className="text-[14px] md:text-[16px] " data-aos="fade-down">
              - Used git as a version control and also in contributing to the
              code base
            </h4>
            <h4>
              - Conducted cross-browser compatibility testing, identifying and
              resolving issues to ensure a consistent user experience across all
              major browsers.
            </h4>
            <p
              className="text-[14px] md:text-[16px] text-vegas-gold"
              data-aos="fade-down"
            >
              May 2023 - present
            </p>

            <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full" />
          </div>
          <div className="relative grid gap-2">
            <h3
              className="text-[16px] md:text-[18px]  font-bold"
              data-aos="fade-down"
            >
              Ez Solutions Limited
            </h3>
            <h4
              className="text-[15px] md:text-[16px]  font-italic"
              data-aos="fade-down"
            >
              Frontend Developer
            </h4>

            <h4 className="text-[14px] md:text-[16px] " data-aos="fade-down">
              - Built frontend app using React.js and React Hooks
            </h4>

            <h4 className="text-[14px] md:text-[16px] " data-aos="fade-down">
              - Collaborated closely with the UX/UI designer to transform
              wireframes and design mockups into functional and visually
              appealing user interfaces.
            </h4>
            <h4 className="text-[14px] md:text-[16px] " data-aos="fade-down">
              - Collaborated with the backend developer to design and consume
              Node.js RESTful APIs, ensuring seamless integration between the
              frontend and backend systems.
            </h4>

            <h4 className="text-[14px] md:text-[16px] " data-aos="fade-down">
              - Used redux tool-kit for state management
            </h4>
            <p
              className="text-[14px] md:text-[16px] text-vegas-gold"
              data-aos="fade-down"
            >
              Jan 2023 - present
            </p>

            <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full" />
          </div>
        </div>

        <div className="relative pl-8 pr-4 border-l-[2px] border-l-jet border-l-solid ml-5 md:ml-8 mt-10 mb-10 grid gap-6">
          <h1 className="text-xl font-bold " data-aos="fade-down">
            Education
          </h1>
          <FiBookOpen className="absolute top-[-15px] left-[-25px] p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-5xl" />

          <div className="relative grid gap-2">
            <h3
              className="text-[16px] md:text-[18px]  font-bold"
              data-aos="fade-down"
            >
              University of Benin
            </h3>
            <h4 className="text-[15px] md:text-[17px] " data-aos="fade-down">
              Faculty of Engineering
            </h4>
            <h4
              className="text-[14px] md:text-[16px]  font-bold font-italic"
              data-aos="fade-down"
            >
              Bachelor of Engineering, Computer Engineering
            </h4>
            <p
              className="text-[14px] md:text-[16px] text-vegas-gold"
              data-aos="fade-down"
            >
              Sep 2019 - Nov 2024
            </p>

            <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyJourney;
