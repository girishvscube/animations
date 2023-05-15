import { useEffect, useRef, useState } from "react";

const Animation = () => {
  const divRef1: any = useRef(null);
  const divRef2: any = useRef(null);
  const divRef3: any = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      const [entry] = entries;
      console.log(entry);
      setIsVisible1(entry.isIntersecting);
    });

    const observer2 = new IntersectionObserver((entries) => {
      const [entry] = entries;
      console.log(entry);
      setIsVisible2(entry.isIntersecting);
    });

    const observer3 = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible3(entry.isIntersecting);
    });

    observer1.observe(divRef1.current);
    observer2.observe(divRef2.current);
    observer3.observe(divRef3.current);

    return () => {
      observer1.unobserve(divRef1.current);
      observer2.unobserve(divRef2.current);
      observer3.unobserve(divRef3.current);
    };
  }, []);
  return (
    <div className="w-full p-6 flex flex-col gap-96 pt-20 ">
      <div
        ref={divRef1}
        className={`w-full  md:w-1/4 h-96 bg-gray-400 mx-auto rounded-lg`}
      >
        <div className="w-full flex flex-col gap-6 h-96 justify-center items-center">
          <h1
            className={`${
              isVisible1 ? "animate-opacity" : ""
            } text-center text-white font-[700] text-2xl`}
          >
            Third Page
          </h1>
          <h1
            className={`${
              isVisible1 ? "animate-opacity" : ""
            } text-center text-white font-[700] text-2xl`}
          >
            Animated this Content Loading
          </h1>
        </div>
      </div>

      <div
        ref={divRef2}
        className={`w-full  md:w-1/4 h-96 bg-gray-400 mx-auto rounded-lg`}
      >
        <div className="w-full flex flex-col gap-6 h-96 justify-center items-center">
          <h1
            className={`${
              isVisible2 ? "animate-opacity" : ""
            } text-center text-white font-[700] text-2xl`}
          >
            Third Page
          </h1>
          <h1
            className={`${
              isVisible2 ? "animate-opacity" : ""
            } text-center text-white font-[700] text-2xl`}
          >
            Animated this Content Loading
          </h1>
        </div>
      </div>

      <div
        ref={divRef3}
        className={`w-full  md:w-1/4 h-96 bg-gray-400 mx-auto rounded-lg`}
      >
        <div className="w-full flex flex-col gap-6 h-96 justify-center items-center">
          <h1
            className={`${
              isVisible3 ? "animate-opacity" : ""
            } text-center text-white font-[700] text-2xl`}
          >
            Third Page
          </h1>
          <h1
            className={`${
              isVisible3 ? "animate-opacity" : ""
            } text-center text-white font-[700] text-2xl`}
          >
            Animated this Content Loading
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Animation;
