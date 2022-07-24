import { useThemeContext } from "@/lib/ThemeContext";
import { Images } from "@/lib/WebbImages";
import styles from "@/styles/webb.module.css";
import clsx from "clsx";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/future/image";
import Head from "next/head";
import React from "react";

function ImageComp({ id, src }: { id: number; src: StaticImageData }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Track Scrolling and translate it to move the text
  const translateX = useTransform(scrollYProgress, [0, 1], ["0vw", "50vw"]);

  return (
    <section className="p-4">
      <motion.h2
        className="absolute left-6 mx-auto font-serif text-8xl font-black tracking-tighter"
        style={{ translateX, opacity: scrollYProgress }}
      >{`#0${id}`}</motion.h2>
      <div ref={ref} className="m-0 overflow-hidden rounded-lg p-0">
        <Image
          className="max-h-full max-w-screen-md object-cover"
          src={src}
          alt="An Image from JWST"
        />
      </div>
    </section>
  );
}

export default function Webb_Parallax() {
  const { setAccent, setBackground } = useThemeContext();

  React.useEffect(() => {
    setBackground("ash-black");
    setAccent("purple");
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Head>
        <title>Webb Telescope Picture Gallery</title>
      </Head>
      <div className="my-24 flex flex-col items-center justify-center gap-32">
        {Images.map((ImageData, idx) => (
          <ImageComp key={idx} id={idx} src={ImageData} />
        ))}
      </div>
      <motion.div
        className={clsx(styles.progress, "fixed top-4 mx-auto w-2/3")}
        // className={styles.progress}
        style={{ scaleX }}
      />
    </>
  );
}
