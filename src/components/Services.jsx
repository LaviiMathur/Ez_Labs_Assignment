import React, { useState } from "react";

function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "film",
      title: `"Filmmaking is a chance to live many lifetimes." - Robert Altman`,
      heading: "Film Production",
      img: "/Ez_Labs_Assignment/assets/film.png",
      content: `
Art isn’t meant to sit on distant walls — it’s meant to breathe, to travel, to belong.<br/>
Through every festival, every performance, and every gathering, we help stories find their stage and their people.<br/><br/>
V curates:<br/>
<ul class="list-disc list-inside">
  <li>Art Festivals</li>
  <li>Live Performances</li>
  <li>Community Events</li>
  <li>Cultural Storytelling</li>
</ul>
`,
    },
    {
      id: "branding",
      title: `A brand is a voice, and a product is a souvenir." - Lisa Gansky`,
      heading: "Branding",
      img: "/Ez_Labs_Assignment/assets/branding.png",
      content: `
A brand isn’t just what you see — it’s what you remember, what you carry home, and what you trust.<br/>
We shape brands that people remember, return to, and fall in love with.<br/><br/>
V creates:<br/>
<ul class="list-disc list-inside">
  <li>Branding & Communication</li>
  <li>Market Mapping</li>
  <li>Content Management</li>
  <li>Social Media Management</li>
  <li>Rebranding</li>
</ul>
`,
    },
    {
      id: "art",
      title: `A brand is a voice, and a product is a souvenir." - Lisa Gansky`,
      heading: "Art Curation",
      img: "/Ez_Labs_Assignment/assets/art.png",
      content: `
A brand isn’t just what you see — it’s what you remember, what you carry home, and what you trust.<br/>
We shape brands that people remember, return to, and fall in love with.<br/><br/>
V creates:<br/>
<ul class="list-disc list-inside">
  <li>Branding & Communication</li>
  <li>Market Mapping</li>
  <li>Content Management</li>
  <li>Social Media Management</li>
  <li>Rebranding</li>
</ul>
`,
    },
  ];
  const handleClick = (service) => {
    services.forEach((el) => el.id === service && setActiveService(el));
  };
  return (

    <section
      id="services"
      className="relative p-2.5 pt-[70px] laptop:pt-[100px] snap-start min-w-screen min-h-screen text-center"
    >
      {/* Heading */}
      <div
        className="laptop:h-2/12 flex flex-col
         items-center
"
      >
        <h2 className="font-sub-heading tablet:text-2xl laptop:text-[40px] text-xl tracking-tight tablet:tracking[0%] leading-[100%]">
          {activeService
            ? activeService.title
            : "The storyboard reveals the breadth of our craft."}
        </h2>
        <img
          src="/Ez_Labs_Assignment/assets/service/stroke.svg"
          alt="stroke"
          className={`  ${
            activeService
              ? "laptop:w-6xl tablet:w-2xl"
              : "laptop:w-3xl tablet:w-xl"
          }`}
        />
      </div>
      {/* Sub Section */}
      {activeService ? (
        <div className="relative flex flex-col items-center justify-center w-full h-10/12 pt-[200px] tablet:pt-[150px] laptop:pt-0">
          {/* background images */}
          <div className="absolute inset-0 -z-10 tablet:block hidden">
            <img
              src={`/Ez_Labs_Assignment/assets/service/${activeService.id}/1.svg`}
              alt="bottomLeftImg"
              className="absolute bottom-10 laptop:left-20 "
            />
            <img
              src={`/Ez_Labs_Assignment/assets/service/${activeService.id}/2.svg`}
              alt="topRightImg"
              className="absolute top-10 right-20 
              "
            />
            <img
              src={`/Ez_Labs_Assignment/assets/service/${activeService.id}/3.svg`}
              alt="centerRightImg"
              className="absolute top-1/2 laptop:right-1/5 -translate-y-1/2 "
            />
            <img
              src={`/Ez_Labs_Assignment/assets/service/${activeService.id}/4.svg`}
              alt="bottomRightImg"
              className="absolute bottom-10 right-20"
            />
            <div className="absolute hidden laptop:flex bottom-20 right-5/12 translate-x-1/2  flex-col items-center">
              <p className="font-text text-[24px] mb-2">Explore Now</p>
              <img src={`/Ez_Labs_Assignment/assets/service/Vector.svg`} alt="arrow" />
            </div>
          </div>

          {/* main content */}
          <div className="flex flex-col laptop:flex-row items-center justify-center gap-10 text-center z-10 relative -top-1/12">
            {/* image card */}
            <div className="cursor-pointer laptop:max-w-[430px] min-w-[150px] tablet:min-w-[300px] min-h-[150px] tablet:min-h-[300px] laptop:min-h-[550px] bg-white flex flex-col items-center justify-center   p-2 tablet:p-5 shadow-[0px_11.4px_38px_0px_#00000040] ">
              <div className="w-full flex justify-center items-center overflow-hidden">
                <img
                  src={`/Ez_Labs_Assignment/assets/service/${activeService.id}/main.png`}
                  alt={activeService.heading}
                  className="max-w-full max-h-[400px] object-contain"
                />
              </div>
              <p className="font-text text-xl tablet:text-3xl tablet:pt-5 text-center">
                {activeService.heading}
              </p>
            </div>

            {/* text content */}
            <div
              className="max-w-[500px] font-text tablet:text-2xl h-full text-left leading-relaxed text-[#252729]"
              dangerouslySetInnerHTML={{ __html: activeService.content }}
            />
          </div>

          {/* back button */}
          <button
            onClick={() => setActiveService(null)}
            className="absolute top-full  right-2/6 tablet:top-10 tablet:left-1/12 w-32 text-[20px] py-2 px-4 rounded-3xl border border-[#F15D2B] text-[#F15D2B] hover:scale-105 flex items-center justify-center gap-2 cursor-pointer z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#F15D2B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
        </div>
      ) : (
        // Main Section
        <>
          <div
            className="flex flex-col
 laptop:flex-row  justify-evenly gap-5 laptop:gap-20 items-center  laptop:items-baseline w-full h-11/12 laptop:h-10/12"
          >
            <div
              className=" cursor-pointer hover:scale-105  laptop:max-w-[430px] min-w-[150px] tablet:min-w-[300px] min-h-[150px] tablet:min-h-[300px] laptop:min-h-[550px] bg-white flex flex-col items-center relative laptop:top-10 laptop:rotate-8 p-2 tablet:p-5 shadow-[0px_11.4px_38px_0px_#00000040]
 "
              onClick={() => handleClick("film")}
            >
              <img
                src="/Ez_Labs_Assignment/assets/service/FilmProduction.png"
                alt=""
                className=" w-[250px]  laptop:w-[390px] laptop:h-[465px] object-cover"
              />
              <img
                src="/Ez_Labs_Assignment/assets/service/tape.png"
                alt="tape"
                className="absolute hidden laptop:block -left-[90px] -top-10 -rotate-25  w-60 h-[110px]
     "
              />
              <p className="font-text text-xl tablet:text-3xl tablet:pt-5">
                Film Production
              </p>
            </div>
            <div
              className=" cursor-pointer hover:scale-105 laptop:max-w-[430px] min-w-[150px] tablet:min-w-[300px] min-h-[150px] tablet:min-h-[300px]  laptop:min-h-[550px] bg-white flex flex-col items-center laptop:top-20 p-2 tablet:p-5 shadow-[0px_11.4px_38px_0px_#00000040] relative
"
              onClick={() => handleClick("branding")}
            >
              <img
                src="/Ez_Labs_Assignment/assets/service/Branding.png"
                alt=""
                className="w-[250px]  laptop:w-[390px] laptop:h-[465px] object-cover"
              />
              <img
                src="/Ez_Labs_Assignment/assets/service/tape.png"
                alt="tape"
                className="absolute hidden laptop:block w-60 h-[110px] rotate-15 right-[60px] -top-[65px]
     "
              />
              <p className="font-text text-xl tablet:text-3xl tablet:pt-5">
                Branding
              </p>
            </div>
            <div
              className=" cursor-pointer hover:scale-105 laptop:max-w-[430px] min-w-[150px] min-h-[150px] tablet:min-w-[300px] tablet:min-h-[300px] laptop:min-h-[550px] bg-white flex flex-col items-center  laptop:top-10 laptop:-rotate-8 p-2 tablet:p-5 shadow-[0px_11.4px_38px_0px_#00000040] relative
"
              onClick={() => handleClick("art")}
            >
              <img
                src="/Ez_Labs_Assignment/assets/service/ArtCuration.png"
                alt=""
                className="w-[250px]  laptop:w-[390px] laptop:h-[465px] object-cover"
              />
              <img
                src="/Ez_Labs_Assignment/assets/service/tape.png"
                alt="tape"
                className="absolute hidden laptop:block -right-[90px] -top-10 rotate-25  w-60 h-[110px]
     "
              />
              <p className="font-text text-xl tablet:text-3xl tablet:pt-5">
                Art Curation
              </p>
            </div>
          </div>
          {/* Footer strip */}
          <img
            src="/Ez_Labs_Assignment/assets/service/Footer.svg"
            alt="footer-design"
            className="absolute bottom-0 -m-2.5 -z-20 object-cover"
          />{" "}
        </>
      )}
    </section>
  );
}

export default Services;
