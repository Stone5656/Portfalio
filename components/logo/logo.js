import Image from "next/image";
import styles from "./logo.module.css"
import Link from "next/link";

export default function Logo({ url }) {
  return (
    <Link href="/" className={styles.a}>
      <Image
        className={styles.logo}
        src={url}
        alt="logo"
        width={100}
        height={100}
        layout="intrinsic"
      />
    </Link>
  );
};