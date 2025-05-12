
"use client"

import * as React from "react"

interface CollapseProps {
  open?: boolean
  children: React.ReactNode
}

export function Collapse({ open = false, children }: CollapseProps) {
  const [height, setHeight] = React.useState<number | string>(open ? "auto" : 0)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (open) {
      const height = ref.current?.scrollHeight
      setHeight(height || "auto")
      const timer = setTimeout(() => {
        setHeight("auto")
      }, 200)
      return () => clearTimeout(timer)
    } else {
      if (ref.current) {
        const height = ref.current.scrollHeight
        setHeight(height)
        // Force a reflow
        ref.current.offsetHeight
        requestAnimationFrame(() => {
          setHeight(0)
        })
      } else {
        setHeight(0)
      }
    }
  }, [open])

  return (
    <div
      ref={ref}
      style={{
        height: height,
        overflow: "hidden",
        transition: "height 200ms ease-in-out",
      }}
    >
      {children}
    </div>
  )
}
