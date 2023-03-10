import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../../src/styles/splash.module.css";

export default function Splash() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={loading ? styles.splash : styles.hide}>
      <p className={styles.loadingText}>Welcome to my universe</p>
    </div>
  );
}
