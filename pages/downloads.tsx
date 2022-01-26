import React from "react";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import BigText from "../components/bigText/bigText.style";
import Image from "next/image";

import backgroundImage1 from '../public/backgrounds/1.png';
import Background from "../components/background/background.style";
import Logo from "../public/logos/downloads.png"

const Downloads: React.FC = () => {
  return (<Background backgroundImage={backgroundImage1.src}>
    <Navbar />
    <div className="content">
      <Sidebar>
        <Image src={Logo} height={200} objectFit="contain" />
        <BigText>
        Download stuff here
        </BigText>
      </Sidebar>
      <div className="content-main">
      {[...Array(100)].map((e, i) => <><span className="busterCards" key={i}>Hello!</span><br /></>)}
      </div>
    </div>
  </Background>)
}



export default Downloads;
