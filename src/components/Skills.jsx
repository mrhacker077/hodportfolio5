import React from "react";
import md from "../md.jpg";
import ia from "../ia.jpg";




function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: md,
      name: "Macchine design",
      description:
        "Machine design in automobile engineering involves creating and optimizing vehicle components for performance, durability, and safety.",
    },
    {
      id: 2,
      logo: ia,
      name: "Industry automation",
      description:
        "Industry automation uses control systems to enhance efficiency, consistency, and safety in manufacturing.",
    },

  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-4xl font-bold mb-5">Skills</h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 my-5"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 bg-blue-200"
              key={id}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src={logo}
                className="w-[140px] h-[140px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
