import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import logo from "../public/logos/logo.gif";
import { Button } from "../components/button/button.style";
import Navbar from "../components/navbar/navbar";
import { Background } from "../components/background/background.style";
import Sidebar from "../components/sidebar/sidebar";

import backgroundImage2 from '../public/backgrounds/2.png';

//TODO make background work actually
export default function Home() {
  return (
    <Background backgroundImage={backgroundImage2.src}>
      <Navbar />
      <div className="content">
        <Sidebar />
        {/*<div>*/}
        {/*  <Button>Hello World</Button>*/}
        {/*</div>*/}
      </div>
    </Background>
  );
}
