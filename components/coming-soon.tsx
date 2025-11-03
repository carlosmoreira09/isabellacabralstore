"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function ComingSoon() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["EM", "BREVE"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-[float_7s_ease-in-out_infinite_1s]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-12 max-w-2xl w-full">
        {/* Logo with pulse animation */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 animate-[pulse-scale_3s_ease-in-out_infinite]">
          <Image src="/logo.png" alt="Isabella Cabral Brand" fill className="object-contain drop-shadow-2xl" priority />
        </div>

        {/* Animated text container */}
        <div className="relative h-32 md:h-40 flex items-center justify-center perspective-1000">
          <div className="relative">
            {words.map((word, index) => (
              <div
                key={word}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                  currentWord === index ? "opacity-100 animate-[rotate-word_3s_ease-in-out]" : "opacity-0"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-primary tracking-wider text-center">
                  {word}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Subtitle with shimmer effect */}
        <div className="relative overflow-hidden">
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide text-center animate-[fade-in-out_6s_ease-in-out_infinite] px-4">
            Algo extraordinário está chegando
          </p>
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[shimmer_3s_infinite]"
            style={{
              backgroundSize: "1000px 100%",
            }}
          />
        </div>

        {/* Decorative line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-[pulse-scale_2s_ease-in-out_infinite]" />

        {/* Contact info */}
        <div className="flex flex-col items-center gap-2 animate-[fade-in-out_6s_ease-in-out_infinite_1s]">
          <p className="text-sm text-muted-foreground font-light tracking-widest uppercase">Fique atento</p>
          <div className="flex gap-6 mt-2">
            <a
              href="mailto:assessoriaisabellacabral@gmail.com"
              className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300 font-light"
            >
              assessoriaisabellacabral@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/40 animate-[pulse-scale_1.5s_ease-in-out_infinite]"
            style={{
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
