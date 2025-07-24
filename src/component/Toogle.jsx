import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function Toogle() {
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    console.log("hello every one");
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? "bg-black text-white" : "bg-white text-black"}>
      {/* <button
        className={`${classVariant[variant]} ${className}`}
        onClick={handleTheme}
      >
        
      </button> */}

      {isDark ? (
        <MdDarkMode
          onClick={handleTheme}
          className="text-5xl absolute top-0 right-4  cursor-pointer"
        />
      ) : (
        <CiLight
          onClick={handleTheme}
          className="text-5xl absolute top-3 right-4 text-yellow-300 cursor-pointer"
        />
      )}

      <h1>philos</h1>
      <p className="mr-7 w-[94%] mt-5">
        In an ever-evolving digital landscape, the importance of adaptable and
        scalable software solutions cannot be overstated. Businesses,
        governments, and individuals alike rely increasingly on technology not
        just for convenience, but as an integral component of everyday
        operations and decision-making. This shift necessitates a level of
        robustness and flexibility in code that goes far beyond traditional
        development paradigms. Modern applications are expected to handle
        real-time data, support cross-platform compatibility, and deliver
        seamless user experiences under varying network conditions and device
        constraints. To meet these expectations, developers must embrace best
        practices such as modular architecture, continuous integration, and
        test-driven development. Moreover, emerging trends like machine
        learning, edge computing, and blockchain technologies are redefining
        what’s possible in software engineering, prompting developers to
        continually adapt their toolsets and skillsets. As systems become more
        complex and interdependent, documentation, maintainability, and
        performance optimization become as crucial as core functionality. It is
        through this careful balance of innovation and discipline that truly
        transformative digital experiences are built, sustained, and evolved
        over time. Whether crafting a sleek mobile application or architecting a
        backend infrastructure capable of supporting millions of concurrent
        users, developers are increasingly tasked with being not only builders
        but also strategists, analysts, and lifelong learners.
      </p>
    </div>
  );
}
