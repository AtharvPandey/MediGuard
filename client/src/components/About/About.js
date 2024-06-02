import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row-reverse">
          {/* ===About img === */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* === about content ==== */}
          <div className=" w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best </h2>
            <p className="text__para">
              {" "}
              One of the most significant advantages of using blockchain for
              data transfer in healthcare is its enhanced security.{" "}
            </p>

            <p className="text__para mt-[30px]">
              Another key benefit of blockchain is its transparency and
              traceability. Every transaction on the blockchain is recorded in a
              chronological order, creating an immutable audit trail. Doctors
              can track the entire lifecycle of patient data, from its creation
              to its transfer and eventual use, providing greater transparency
              and trust in the healthcare ecosystem.
            </p>
            <button className="btn">learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
