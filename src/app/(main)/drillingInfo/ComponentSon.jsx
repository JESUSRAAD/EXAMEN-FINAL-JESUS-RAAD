"use client";
import React, { useState } from "react";
import ComponetGrandSon from "./ComponetGrandSon";

const ComponetSon = ({ x }) => {
  const [addNum, setAddNum] = useState(x);

  const incrementX = () => {
    setAddNum((prevAddNum) => prevAddNum + 1);
  };

  return (
    <div className="border-[2px] border-black p-2">
      <h2 className="text-xl">ComponentB</h2>
      <p>x = {addNum}</p>
      <ComponetGrandSon x={x} incrementX={incrementX} />
    </div>
  );
};

export default ComponetSon;
