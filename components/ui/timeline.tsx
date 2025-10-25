"use client"
import {
  useScroll,
  useTransform,
  motion,
} from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({
  data,
  heading = 'Timeline',
  subheading,
}: {
  data: TimelineEntry[]
  heading?: string
  subheading?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {heading && (
            <>
              <h2 className="mb-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                {heading}
              </h2>
              <div
                aria-hidden
                className="mx-auto mt-2 h-[2px] w-40 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />
            </>
          )}
          {subheading && (
            <p className="mt-3 text-lg text-white/80 sm:text-xl">{subheading}</p>
          )}
        </div>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-28">
            <div className="sticky top-40 z-40 self-start md:w-full">
              <div className="pointer-events-none absolute left-3 h-10 w-10 rounded-full bg-black/60 backdrop-blur md:left-3" />
              <div className="absolute left-[22px] top-[10px] h-4 w-4 rounded-full border border-white/20 bg-white/10" />
              <h3 className="hidden text-2xl font-bold text-white/60 md:block md:pl-20 md:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-white/60 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + 'px' }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-white via-white/70 to-transparent from-[0%] via-[10%]"
          />
        </div>
      </div>
    </div>
  )
}

export type { TimelineEntry }
