import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AnimationMain = () => {
  const textRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const box1 = box1Ref.current;
    const box2 = box2Ref.current;

    gsap.fromTo(
      box1,
      { opacity: 0, x: 2000, width: "200px" },
      {
        opacity: 1,
        duration: 4,
        repeat: 1,
        width: "375px",
        x: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: box1,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      text,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        duration: 2,
        repeat: 2,
        y: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      box2,
      { opacity: 0, x: -2000 },
      {
        opacity: 1,
        duration: 4,
        repeat: 1,
        x: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: box1,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <div className="w-full flex mb-10 gap-10">
      <div
        ref={box1Ref}
        className=" h-96 flex items-center justify-center mx-auto bg-gray-400 rounded-lg px-2 h-96"
      >
        <div className="" ref={textRef}>
          <p
            ref={textRef}
            className=" text-white text-center text-2xl font-[700]"
          >
            Gsap Content
          </p>
          <p className="text-white text-center text-2xl font-[600]">
            Animated Content For Loading
          </p>
        </div>
      </div>
      <div
        ref={box2Ref}
        className="h-96 flex items-center justify-center mx-auto bg-gray-400 rounded-lg px-2 h-96"
      >
        <div className="" ref={textRef}>
          <p
            ref={textRef}
            className=" text-white text-center text-2xl font-[700]"
          >
            Gsap Content
          </p>
          <p className="text-white text-center text-2xl font-[600]">
            Animated Content For Loading
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationMain;
