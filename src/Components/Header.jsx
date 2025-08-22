import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

export default function Header() {
    const h1ref = useRef();

    useGSAP(() => {
        const t = gsap.timeline({
            defaults: { y: -50, opacity: 0, duration: 1 }
        });

        t.from(".nav_img", {}); // uses defaults
        t.from(".nav_items li", { stagger: 0.3 }); // uses defaults + extra
        
    })

    return (
        <div>
            <section className='px-25 py-7 flex justify-between'>
                <div className='nav_img'>
                    {/* <img src="" alt="" /> */}
                    <h1 ref={h1ref} className='uppercase font-anton text-xl font-semibold'>Its me Rohit</h1>
                </div>
                <ul className='nav_items flex gap-10 text-xl font-anton font-semibold'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Work</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
            </section>
        </div>
    )
}



// var t = gsap.timeline();

// t.from(".nav_img", {
//     y: -50,
//     opacity: 0,
//     duration: 1
// })

// t.from(".nav_items li", {
//     y: -50,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.3
// })
