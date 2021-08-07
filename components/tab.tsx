import styles from "../styles/navbar.module.scss";

interface TabProps {
    children: React.ReactNode;
}

export default function Tab(props : TabProps) {
    return <li className={styles.item}>{props.children}</li>
}
