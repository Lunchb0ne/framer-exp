import { useFollowPointer } from "@/hooks/useFollowPointer";
import { useThemeContext } from "@/lib/ThemeContext";
import styles from "@/styles/chaser.module.css";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";

export default function Chaser() {
  const { setAccent, setBackground, setCursor } = useThemeContext();
  React.useEffect(() => {
    setAccent("pink");
    setBackground("black");
    setCursor("none");
  });

  const ref = React.useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
      <Head>
        <title>Springy Chaser</title>
      </Head>
      <motion.div
        ref={ref}
        className={styles.box}
        animate={{ translateX: x, translateY: y, cursor: "none" }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
    </>
  );
}
