import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";
import Image from 'next/image';

export default function Navbar({className}:{className?:string}) {

    const socials = [
        {
            Link: "https://www.linkedin.com/in/karan-pawar-212599219/",
            Lable:"Linkedin",
            Icon: SiLinkedin
        },
        {
            Link: "https://github.com/Kreez81",
            Lable:"Github",
            Icon: SiGithub
        },
        {
            Link: "https://twitter.com/KaranPawar81",
            Lable:"Twitter",
            Icon: SiX
        },
        {
            Link: "/KaranPawar.pdf",
            Lable:"Resume",
            Icon: FaFilePdf
        },

    ]
  return (
    <nav className={cn("py-10 flex justify-between items-center animate-fade-in", className)}>
        <h1 className="text-lg lg:text-2xl font-bold underline underline-offset-8 decoration-cyan-400 -rotate-2">Karan Pawar 🤵🏻</h1>
        <div className="gap-5 flex items-center">
            {socials.map((social,index) => {
                const Icon = social.Icon
                return <Link href={social.Link} key={index} area-label={social.Lable} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-[2.2vh] h-[2.2vh] hover:scale-125 transition-all"/>
                </Link>
            })}
        </div>
    </nav>
  )
}
