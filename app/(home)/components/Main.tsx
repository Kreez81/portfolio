import { MovingBorderBtn } from '@/components/ui/moving-border';
import Link from 'next/link'
import React from 'react'
import Title from './Title';
import Pdf from '../../../public/Resume.pdf';

export default function Main() {
    return (
        <div className="min-h-[60vh] flex flex-col-reverse lg:gap-0 gap-14 lg:flex-row items-center justify-between animate-move-up">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold">
                    {"Hello, I'm Karan! 🤟"}<br />
                    <span className="underline underline-offset-8 decoration-cyan-400">
                        Full-Stacker.
                    </span>
                </h1>


                <p className="md:w-[30vw] text-lg text-gray-300">{"Crafting captivating web applications in Bhopal, I merge creativity with technology to deliver seamless user experiences. Let's collaborate to build something remarkable."}</p>
                <Link href={'mailto:karan.p2001hello@gmail.com'} className="inline-block group">
                    <Title text='Contact Me 📭'/>
                </Link>
            </div>
            <div className="relative">
                <div className="w-[30vh] h-[30vh] space-y-3 -rotate-90">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-[13.5vh] h-[13.5vh] rounded-3xl bg-cyan-400 flex justify-center items-center rotate-[10deg]"><span className='rotate-90'>🤖 🌐 🚀</span></div>
                        <div className="w-[13.5vh] h-[13.5vh] rounded-full bg-violet-500 flex justify-center items-center"><span className='rotate-90'>🌍 🧩 🔥</span></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-[13.5vh] h-[13.5vh] rounded-3xl bg-violet-500 -rotate-[10deg] flex justify-center items-center"><span className='rotate-90'>🚀 🤖 🌍</span></div>
                        <div className="w-[13.5vh] h-[13.5vh] rounded-full bg-cyan-400 flex justify-center items-center"><span className='rotate-90'>🎮 🕹️ 👾</span></div>
                    </div>
                    <div className="glow absolute top-[43%] right-[60%] -z-10"></div>
                </div>
                <div className="absolute bottom-5 sm:bottom-20 left-0 sm:-left-20 hover:translate-x-2 transition-all">
                    <MovingBorderBtn borderRadius='1rem' className="p-4">
                        <Link href="/KaranPawar.pdf" target="_blank" rel="noopener noreferrer">
                            📢 Available for Work
                        </Link>
                    </MovingBorderBtn>
                </div>


            </div>
        </div>
    )
}
