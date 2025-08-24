import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { headerRefs, heroRefs } from "./refs";

gsap.registerPlugin(ScrollTrigger);

export function runAnimations() {
    // Add a small delay to ensure DOM elements are ready
    gsap.delayedCall(0.1, () => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

        // Check if refs exist before animating
        if (headerRefs.logo.current && headerRefs.navItems.current) {
            tl.from(headerRefs.logo.current, { y: -50, opacity: 0 })
              .from(headerRefs.navItems.current.children, { y: -50, opacity: 0, stagger: 0.2 });
        }

        // Uncomment when ready
        // if (heroRefs.title.current) {
        //     tl.from(heroRefs.title.current, { y: 100, opacity: 0 })
        //       .from(heroRefs.subtitle.current, { y: 50, opacity: 0 })
        //       .from(heroRefs.button.current, { scale: 0.8, opacity: 0 })
        //       .from(heroRefs.image.current, { x: 100, opacity: 0 });
        // }
    });
}



// useGSAP(() => {
//     gsap.to(hf.current, {
//         scale: 0,
//         opacity: 0,
//         scrollTrigger: {
//             trigger: heroRef.current,  // ✅ Correct
//             scroller: "body",
//             start: "bottom 65%", // Start when bottom of hero hits center of viewport
//             end: "bottom top",
//             markers: true,
//             scrub: 2.5,
//         },
//     });
// })