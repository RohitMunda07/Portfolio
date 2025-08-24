import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import React, { useRef } from 'react'
import Galaxy from '../Components/Galaxy'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const heroRef = useRef()
    useGSAP(() => {
        gsap.to(heroRef.current, {
            scale: 0,
            opacity: 0,
            scrollTrigger: {
                trigger: heroRef.current,  // ✅ Correct
                scroller: "body",
                start: "bottom 85%", // Start when bottom of hero hits center of viewport
                end: "bottom top",
                markers: true,
                scrub: 2.5,
            },
        });
    })

    return (
        <div ref={heroRef} id='hero' className='card'>
            <section className='flex flex-col justify-center items-center w-full'>

                <h2 className="font-anton font-semibold text-8xl mt-[10rem]">
                    I'm a <span className="text-[var(--accent)]">Developer</span>
                </h2>

                <p className="max-w-xl mt-4 text-gray-400 text-lg">
                    I build modern websites and web applications using React, Tailwind CSS, and GSAP animations.
                    Passionate about creating clean UI/UX with smooth interactions.
                </p>

                <div className='flex gap-10 mt-[1.5rem]'>
                    <button>Let's Talk</button>
                    <button className='!bg-gray-600'>Download CV</button>
                </div>

                {/* rotate-y-180 */}
                <img src="./arrow-down.png" alt="arrowDown" className='hero_img h-[15rem]' />
            </section>
        </div>
    )
}
