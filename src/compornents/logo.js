import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Logo() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  if (isHomePage) {
    return (
      <div>
        <FontAwesomeIcon icon={faHome} className="icon m-auto" />
      </div>
    );
  } else {
    return (
      <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon m-auto" />
      </Link>
    );
  }
}