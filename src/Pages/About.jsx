import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Galaxy from '../Components/Galaxy'

export default function Hero() {
    useGSAP(() => {
        var t = gsap.timeline({
            defaults: {

            }
        })
    })
    return (
        <div className='card bg-sky-300'>

            <h2 className="font-anton font-semibold text-8xl">
                <span className="text-[var(--accent)]">About</span>
            </h2>
            
            <section className='flex flex-col items-center w-full'>

                {/* <Galaxy /> */}
                <div className='flex gap-[12rem]' >
                    <p className="max-w-xl mt-4 text-gray-400 text-lg font-anton font-semibold">
                        Hi, I’m Rohit, a self-taught front-end developer based in India, currently pursuing my BCA degree. I’m passionate about building clean, user-friendly, and responsive designs for both <span className="text-[var(--accent)]">Web</span>  and <span className="text-[var(--accent)]">Mobile
                        </span>.
                        I specialize in HTML, CSS, JavaScript, and React.js, and I also have a solid foundation in C++ and Java. I enjoy turning ideas into functional, visually appealing experiences and continuously push myself to learn modern tools, frameworks, and best practices in front-end development.

                        I would love to contribute to your development journey and collaborate on projects that make a real impact. 🚀</p>

                    {/* rotate-y-180 */}
                    <img src="./man.png" alt="" className='bg-black h-[15rem]' />
                </div>

            </section>
        </div>
    )
}
