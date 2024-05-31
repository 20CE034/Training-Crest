import Image from "next/image";
import styles from "../page.module.css";
import { useParams } from "next/navigation";

export default function PostsId() {
  const router = useParams();
  console.log(router);
  return (
    <>
      <h1>Posts</h1>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </>
  );
}
