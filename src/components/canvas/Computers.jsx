import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import my_pic from "../../assets/pic2_.png";

const ComputersCanvas = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateImageHeight = () => {
    // Define the initial width and height for your image
    const initialWidth = 500;
    const initialHeight = 500;

    // Calculate the aspect ratio
    const aspectRatio = initialWidth / initialHeight;

    // Calculate the new height based on the current window width
    const newHeight = (windowSize.width * aspectRatio) / 2;

    return newHeight;
  };

  return (
    <div className="absolute xs:bottom-5 bottom-32 end-10 w-full flex justify-end items-end">
      <img
        className="rounded-full overflow-hidden border-[6px] border-white w-auto max-w-full"
        src={my_pic}
        alt="Picture"
        style={{
          maxWidth: "100%",
          maxHeight: calculateImageHeight() + "px",
          width: "25%",
          minHeight: "200px",
          minWidth: "150px",
        }}
      />
    </div>
  );
};

export default ComputersCanvas;
//absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center
//<div className="absolute xs:bottom-5 bottom-32 end-32 w-full flex justify-end items-end">
//<div className="bg-gradient-to-b blue-gradient rounded-full w-85 h-85 relative overflow-hidden">
//<img src={my_pic} />
//</div>
//</div>

//<div className="absolute xs:bottom-5 bottom-32 end-32 w-full flex justify-end items-end">
//<img
//className="rounded-full overflow-hidden border-[6px] border-white"
//src={my_pic}
///>
//</div>

//"absolute xs:bottom-5 bottom-32 end-10 w-full flex justify-end items-end"
