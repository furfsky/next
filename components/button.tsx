import { Children } from "react";
import styles from "../styles/button.module.scss";
interface ButtonProps {
  children: React.ReactNode;
}

export default function Button(props : ButtonProps) {
  return <button className={styles.button}>{props.children}</button>;
}
