"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { FaJava } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql, SiAngular, SiReact, SiHtml5, SiGit, SiMongodb } from "react-icons/si";

export default function Skills() {

  const skills = [
    {
        text: "Java",
        Icon: FaJava
    },
    {
        text: "React",
        Icon: SiReact
    },
    {
        text: "Javascript",
        Icon: SiJavascript
    },
    {
        text: "Tailwind",
        Icon: SiTailwindcss
    },
    {
        text: "MySQL",
        Icon: SiMysql
    },
    {
        text: "Angular",
        Icon: SiAngular
    },
    {
        text: "HTML",
        Icon: SiHtml5
    },
    {
        text: "Git",
        Icon: SiGit
    },
    {
        text: "MongoDB",
        Icon: SiMongodb
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-0 lg:px-8 animate-fade-in">
         <Title text='Skills 📭' className="flex flex-col items-center justify-center rotate-6"/>
         <HoverEffect items={skills}/>
    </div>
  )
}
