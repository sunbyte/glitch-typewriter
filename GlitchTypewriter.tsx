import { useEffect, useRef } from "react"
import "./GlitchTypewriter.css"

interface GlitchTypewriterProps {
  slogans: string[]
  delay: number
  color?: string
  fontSize?: number
  fontWeight?: string
  showCursor?: boolean
  cursorWidth?: number
  cursorHeight?: number
  cursorBackgroundColor?: string
}

const randomChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>.,;:"

const GlitchTypewriter = ({
  slogans,
  delay,
  color,
  fontSize,
  fontWeight,
  showCursor,
  cursorWidth,
  cursorHeight,
  cursorBackgroundColor,
}: GlitchTypewriterProps) => {
  const sloganRef = useRef<HTMLSpanElement>(null)
  const currentIndex = useRef<number>(0)

  useEffect(() => {
    const sloganElement = sloganRef.current
    if (!sloganElement) return

    const toggleClass = (
      element: HTMLElement,
      className: string,
      add: boolean
    ) => {
      element.classList[add ? "add" : "remove"](className)
    }

    const getRandomIndex = (max: number) => Math.floor(Math.random() * max)

    const typewriterEffect = () => {
      if (!sloganElement) return
      toggleClass(sloganElement, "glitch", false)

      const currentText = slogans[currentIndex.current]
      const textLength = currentText.length
      let currentChar = 0

      const interval = setInterval(() => {
        const displayText = [...currentText]
          .map((char, index) =>
            index < currentChar
              ? char
              : randomChars[getRandomIndex(randomChars.length)]
          )
          .join("")

        sloganElement.textContent = displayText
        currentChar++

        if (currentChar > textLength) {
          clearInterval(interval)
          toggleClass(sloganElement, "glitch", true)
          sloganElement.dataset.text = displayText
          currentIndex.current = (currentIndex.current + 1) % slogans.length
        }
      }, 15)
    }

    typewriterEffect()
    const loop = setInterval(typewriterEffect, delay ? delay : 3000)
    return () => clearInterval(loop)
  }, [])

  const firstSlogan = slogans.length > 0 ? slogans[0] : ""

  return (
    <div className="slogan-container">
      <span
        ref={sloganRef}
        className="slogan glitch"
        data-text={firstSlogan}
        style={{
          color: color ? color : "black",
          fontSize: fontSize ? fontSize : 18,
          fontWeight: fontWeight ? fontWeight : "normal",
        }}
      >
        {firstSlogan}
      </span>
      {showCursor && (
        <div
          className="cursor"
          style={{
            width: cursorWidth ? cursorWidth : 4,
            height: cursorHeight ? cursorHeight : 18,
            backgroundColor: cursorBackgroundColor
              ? cursorBackgroundColor
              : "aqua",
          }}
        />
      )}
    </div>
  )
}

export default GlitchTypewriter
