import React from "react";

const MobileFooter = () => {
  return (
    <div className="bg-primary md:hidden flex justify-center py-5 fixed bottom-0 w-full">
      <a href="mailto:tukint@gmail.com" className=" text-white text-[14px] font-bold">
        {" "}
        tukint@gmail.com&nbsp;{" "}
      </a>
      <span className=" text-white text-[14px] font-bold">
        | +972-526891609
      </span>
    </div>
  );
};

export default MobileFooter;