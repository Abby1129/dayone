import React from "react";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, voluptatum?
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            laborum, accusantium labore provident error vero, itaque commodi non
            quidem minima voluptate quisquam velit impedit placeat sequi rem,
            eligendi alias officiis illum distinctio excepturi nihil doloribus!
            Rerum nihil hic iste, dolorum distinctio atque! Quo soluta possimus
            illum iusto ipsa magni eligendi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100k</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
