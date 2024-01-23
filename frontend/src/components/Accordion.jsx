"use client";
import { addIcon } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`bg-white ${toggle ? "h-fit" : "h-16"} flex flex-col justify-center py-4 px-6 rounded-md my-5`}
    >
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button onClick={handleToggle}>
          <Image src={addIcon}/>
        </button>
      </div>
      <div className={`${toggle ? "" : "hidden"}`}>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim officia
          tempore deserunt tenetur magni non maiores amet blanditiis expedita
          vitae dolorem laboriosam molestias aut voluptatum dolore fugit sint,
          repellendus quod. Magni molestias omnis corporis perferendis vero quam
          dignissimos debitis, aspernatur quo ipsum dolor, ad in ab. Beatae,
          deserunt nemo minus, odio, aliquid animi quas totam quo earum
          distinctio quibusdam? Quisquam sit ad provident molestiae placeat
          vitae nesciunt autem, error pariatur necessitatibus, similique quia et
          obcaecati qui possimus corporis hic sequi, quam impedit porro. Quas
          culpa incidunt non rerum, sunt quae minima? Ad, asperiores. Temporibus
          culpa voluptatem adipisci, laborum necessitatibus nam.
        </p> */}
        {children}
      </div>
    </div>
  );
};

export default Accordion;
