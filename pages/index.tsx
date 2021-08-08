import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import logo from "../public/logos/logo.gif";
import { Button } from "../components/button/button.style";
import Navbar from "../components/navbar/navbar";
import { Background } from "../components/background/background.style";
//TODO make background work actually
export default function Home() {
  return (
    <Background>
      <Navbar />
      <Button>Hello World</Button>
    </Background>
  );
}
