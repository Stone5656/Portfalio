import Link from 'next/link';
import styles from './navlink.module.css';

export default function Navlink({ url, text }) {
  return (
    <li>
      <Link href={url}>{text}</Link>
    </li>
  );
};