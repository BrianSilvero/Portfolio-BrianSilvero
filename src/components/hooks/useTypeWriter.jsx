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
      { threshold: 0.5 } // Este parámetro indica en qué momento quiero que se ejecute la máquina de escribir
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
            onInit={(typewriter) => {
              typewriter
                .typeString(text)
                .callFunction(() => {
                  setShowText(true); // Mostrar el texto completo después de terminar el efecto
                })
                .start();
            }}
            options={{
              delay: speed
            }}
          />
        </>
      ) : null}
    </div>
  ) : (
    <div className="maquina-de-escribir">
      <span dangerouslySetInnerHTML={{ __html: text }}/>
      <Cursor/>
    </div>
  );

  return typewriterElement;
};

export default useTypewriter;