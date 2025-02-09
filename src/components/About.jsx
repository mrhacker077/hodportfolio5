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
            I have completed BE(Mech) at P.S College of
            Engineering, Mandya, Karnataka. MTECH in CIM at Sahyadri College of Engineering. And currently working as Selection
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
            Joined the MECH department as a lecturer from 1994 to 2021 at Karnataka Government Polytechnic, Kadrihills, Mangalore.
            And from 2021 to 2024 served as principal at Government Polytechnic Udupi, Udupi.
            Currently serving as the Head of the Mechanical Engineering Department at Karnataka Govt. Polytechnic, Mangalore.
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
