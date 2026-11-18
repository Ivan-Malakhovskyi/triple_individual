import { useState, useEffect } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA((state) => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB((state) => state + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Всього клікнули ${totalClicks} разів`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Клікнули counterA {counterA} разів
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Клікнули counterB {counterB} разів
      </button>
    </>
  );
}
