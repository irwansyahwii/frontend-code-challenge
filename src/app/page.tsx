import Image from "next/image";
import styles from "./page.module.css";

import { Increment } from "@/components/increment";

export default function Home() {    
  
  return (
    <main className={styles.main}>
      <Increment/>
    </main>
  );
}
