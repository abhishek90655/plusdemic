import React, { useEffect, useState } from "react";
import HeroImage from "../../assets/hero.png";
import { SlideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Hero = () => {
  const [heroContent, setHeroContent] = useState({
    title: "COVID-19 Risk <br /> Assessment Tool",
    description:
      "A set of solutions designed to help quickly identify coronavirus symptoms and get reliable information regarding COVID-19 concerns.",
    buttonText: "See how to use it",
  });

  useEffect(() => {
    // Check for sxi_content in URL
    const urlParams = new URLSearchParams(window.location.search);
    const sxiContent = urlParams.get("sxi_content");

    if (sxiContent === "empty") {
      // Empty content for testing
      setHeroContent({
        title: "",
        description: "",
        buttonText: "",
      });
    } else if (sxiContent && window.growthbook) {
      // GrowthBook will handle dynamic content in Step 3
      console.log("Waiting for GrowthBook to apply sxi_content:", sxiContent);
    }
  }, []);

  return (
    <section className="Hero-section">
      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        {/* Text section */}
        <div className="flex flex-col justify-center xl:pr-40">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            {heroContent.title && (
              <motion.h1
                variants={SlideUp(0.2)}
                whileInView={"animate"}
                initial="initial"
                className="text-5xl font-bold text-darkBlue"
                dangerouslySetInnerHTML={{ __html: heroContent.title }}
              />
            )}
            {heroContent.description && (
              <motion.p
                variants={SlideUp(0.4)}
                whileInView={"animate"}
                initial="initial"
                className="text-lg text-gray-400 mt-4"
              >
                {heroContent.description}
              </motion.p>
            )}
            {heroContent.buttonText && (
              <motion.div
                variants={SlideUp(0.6)}
                whileInView={"animate"}
                initial="initial"
                className="bg-primary text-white px-6 py-4 rounded-lg mt-4 w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-200"
              >
                <button>{heroContent.buttonText}</button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center"
        >
          <img src={HeroImage} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;