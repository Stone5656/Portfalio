import Link from 'next/link';
import styles from './navlink.module.css';

export default function Navlink({ url, text }) {
  return (
    <li className={styles.li}>
      <Link href={url} className={styles.text}>{text}</Link>
    </li>
  );
};