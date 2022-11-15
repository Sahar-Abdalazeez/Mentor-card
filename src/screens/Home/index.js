import React from "react";
import { HomeDesktop } from "./HomeDesktop";
import { useWindowSize } from "../../utils/screen.utils";
import { HomeMobile } from "./HomeMobile";

export const Home = () => {
  const isMobile = useWindowSize();
  return isMobile ? <HomeMobile /> : <HomeDesktop />;
};
