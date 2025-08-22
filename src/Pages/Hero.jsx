import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

export default function Hero() {
    useGSAP(() => {
        var t = gsap.timeline({ defaults: {

        } })

    })
    return (
        <div className=''>
            <section className='flex flex-col justify-center items-center w-full h-[89vh]'>

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
