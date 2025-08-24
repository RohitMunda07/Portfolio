import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Galaxy() {
  const svgRef = useRef();

  useEffect(() => {
    const svg = svgRef.current;

    gsap.fromTo(
      svg,
      { scale: 1 },
      {
        scale: 5, // zoom in
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  // Generate random stars
  const stars = Array.from({ length: 1000 }).map((_, i) => (
    <circle
      key={i}
      cx={Math.random() * 1920} // random x
      cy={Math.random() * 1080} // random y
      r={Math.random() * 2} // random radius
      fill="white"
      opacity={Math.random()}
    />
  ));

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full bg-black"
      >
        {stars}
      </svg>
    </div>
  );
}
