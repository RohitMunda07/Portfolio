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
        <div className='card bg-orange-300 px-10 py-20'>

            <h2 className="pt-8 font-anton font-semibold text-8xl">
                <span className="text-[var(--accent)]">Contact</span>
            </h2>

            <section className='pt-8 flex flex-col items-center w-full'>

                <div className='flex gap-[12rem]' >
                    <form action="" className='space-y-8'>
                        <input
                            className='bg-[#ffffffe5] block px-4 py-5 w-[35rem] rounded-2xl outline-0 text-black text-3xl'
                            type="text"
                            placeholder='Email'
                            name="" id=""
                        />
                        <textarea
                            className='bg-[#ffffffe5] block px-4 py-5 w-[35rem] h-[18rem] rounded-2xl outline-0 text-black text-3xl'
                            placeholder='Message'
                        ></textarea>
                        <button>Let's Connect</button>
                    </form>

                    <div className=' self-center-safe'>
                        <img src="./man.png" alt="" className='w-[15rem] h-[15rem]' />
                    </div>
                </div>

            </section>
        </div>
    )
}


{/* <div className='card bg-transparent'>
            <section className='flex flex-col items-center w-full h-screen'>
                <h2 className="font-anton font-semibold text-8xl">
                    <span className="text-[var(--accent)]">Contact</span>
                </h2>

                {/* <Galaxy /> */}

// <div className='flex gap-[12rem]' >

// </div>

//             </section >
//         </div > */}