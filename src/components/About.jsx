import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Personal Info Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Personal Information
          </h2>
          <p className="text-gray-700">
            Hello everyone, my name is Devraju.D and I am the Head
            of the Automobile Engineering Department here at Karnataka Govt. Polytechnic. I was born on 08/11/1973 in Hassan,Karnataka.
          </p>
          <p className="mt-4 text-gray-700">
            Hobbies: badminton, yoga.
          </p>
        </div>

        {/* Education Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Education & Training
          </h2>
          <p className="text-gray-700">
            I have completed BE(Mech) at M.C.E Hassan, Karnataka And currently working as Selection
            Grade Lecturer/HOD in KPT Mangalore, Karnataka.
          </p>
        </div>

        {/* Skills Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Skills & Expertise
          </h2>
          <p className="text-gray-700">  
Proficient in automobile engineering principles, experienced in vehicle design, manufacturing, and diagnostics, strong understanding of engine systems and automotive materials.
          </p>
        </div>

        {/* Experience Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Professional Experience
          </h2>
          <p className="text-gray-700">
            Joined the L.V.P Hassan from 1999 to 2006. <br /> 
            then joined G.P.T Vijayapura and served as lecturer of automobile department for 6 months and again joined L.V.P Hassan till 2015.<br />
            worked in G.P.T Kartagi for 1 year and joined K.P.T in 2016 as HOD of Automobile department. <br />

          </p>
        </div>

        {/* Mission Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Mission Statement
          </h2>
          <p className="text-gray-700">
My mission is to leverage my expertise and innovation to deliver advanced automobile engineering solutions that exceed industry standards, enhance vehicle performance, and promote sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
