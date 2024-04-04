import React from 'react'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { SiJavascript, SiTailwindcss, SiReact, SiHtml5, SiMongodb, SiNodedotjs, SiNextdotjs } from "react-icons/si";

export default function Projects() {

    const projects = [
        {
            title: "Onyoworld",
            tech: [SiJavascript, SiReact, SiHtml5, SiNodedotjs, SiMongodb],
            Link: "https://onyoworld.onrender.com/",
            cover: "/Onyoworld.png",
            background: "bg-cyan-500",
        },
        {
            title: "Yoga folio",
            tech: [SiJavascript, SiReact, SiHtml5],
            Link: "https://yogchetna.netlify.app/",
            cover: "/Yogfolio.png",
            background: "bg-rose-400",
        },
        {
            title: "PlayGame",
            tech: [SiJavascript, SiReact, SiHtml5],
            Link: "https://playgame-getd.onrender.com/",
            cover: "/PlayGame.png",
            background: "bg-slate-200",
        },
        {
            title: "Portfolio",
            tech: [SiJavascript, SiNextdotjs, SiTailwindcss],
            Link: "https://karanpawar.netlify.app/",
            cover: "/Portfolio.png",
            background: "bg-violet-400",
        },
    ]

    return (
        <div className="py-10 p-5 sm:p-0 mt-10">
            <Title text='Projects 🗂️' className="flex flex-col items-center justify-center -rotate-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-4 lg:gap-8">
                {projects.map((project, index) => {
                    return <Link href={project.Link} key={index} target="_blank" rel="noopener noreferrer">
                        <div className={cn("p-4 rounded-2xl", project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className="w-full cursor-pointer">
                                <div className="space-y-5">
                                    <h1 className="text-2xl font-bold">{project.title}</h1>
                                    <div className="flex items-center gap-5">{project.tech.map((Icon, index) => {
                                        return <Icon className="size-[3.2vh]" key={index} />;
                                    })}
                                    </div>
                                </div>

                            </DirectionAwareHover>
                        </div>
                    </Link>
                })}

            </div>
        </div>
    )
}
