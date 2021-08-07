import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import logo from "../public/logos/logo.gif";
import Button from "../components/button";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Button>Hello World</Button>
    </>
  );
}
