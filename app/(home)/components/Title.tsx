import React from 'react'

export default function Title({ text, className }: { text: string, className?: string }) {
    return (
        <div className={className}>
            <h1 className="text-3xl font-bold group-hover:text-violet-400 transition-all">
                {text}
                <div className="h-[1vh] bg-cyan-400 w-full rounded-full -rotate-2"></div>
                <div className="h-[1vh] bg-violet-500 w-full rounded-full -rotate-2 translate-x-2 -translate-y-1"></div>
            </h1>
        </div>
    )
}
