import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { Cursor } from "react-simple-typewriter";

const useTypewriter = (text, speed, skip) => {
  const [showText, setShowText] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (skip) {
      setShowText(true);
    }
  }, [skip]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Este parametro inidica en que momento quiero que se ejecute la maquina de escribir
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer && observer.unobserve && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef]);

  const typewriterElement = !showText ? (
    <div ref={elementRef}>
      {isInView ? (
        <>
          <Typewriter
            options={{
              strings: [text],
              autoStart: true,
              delay: speed            
            }}
          />
        </>
      ) : null}
    </div>
  ) : (
    <div>
      {text}
      <Cursor cursorColor="#96b3ff" cursorStyle="|" />
    </div>
  );

  return typewriterElement;
};

export default useTypewriter;
