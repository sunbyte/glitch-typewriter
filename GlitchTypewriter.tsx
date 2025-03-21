import { useEffect, useRef } from "react"
import "./GlitchTypewriter.css"

interface GlitchTypewriterProps {
  slogans: string[]
  delay?: number
  typeSpeed?: number
  color?: string
  fontSize?: number
  fontWeight?: string
  fontFamily?: string
  showCursor?: boolean
  cursorWidth?: number
  cursorHeight?: number
  cursorBackgroundColor?: string
  cursorBlinkSpeed?: number
}

const DEFAULT_SLOGAN = "add some slogans..."
const DEFAULT_DELAY = 3000
const DEFAULT_TYPE_SPEED = 15
const DEFAULT_COLOR = "aqua"
const DEFAULT_FONT_SIZE = 18
const DEFAULT_FONT_WEIGHT = "normal"
const DEFAULT_FONT_FAMILY = "inherit"
const DEFAULT_CURSOR_WIDTH = 4
const DEFAULT_CURSOR_HEIGHT = 18
const DEFAULT_CURSOR_BACKGROUND_COLOR = "aqua"
const DEFAULT_CURSOR_BLINK_SPEED = "0.7s infinite blink"

const randomChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>.,;:"

const GlitchTypewriter = ({
  slogans,
  delay,
  typeSpeed,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  showCursor,
  cursorWidth,
  cursorHeight,
  cursorBackgroundColor,
  cursorBlinkSpeed,
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

      const interval = setInterval(
        () => {
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
        },
        typeSpeed ? typeSpeed : DEFAULT_TYPE_SPEED
      )
    }

    typewriterEffect()
    const loop = setInterval(typewriterEffect, delay ? delay : DEFAULT_DELAY)
    return () => clearInterval(loop)
  }, [])

  const firstSlogan = slogans.length > 0 ? slogans[0] : DEFAULT_SLOGAN

  return (
    <div className="slogan-container">
      <span
        ref={sloganRef}
        className="glitch"
        data-text={firstSlogan}
        style={{
          color: color ? color : DEFAULT_COLOR,
          fontSize: fontSize ? fontSize : DEFAULT_FONT_SIZE,
          fontWeight: fontWeight ? fontWeight : DEFAULT_FONT_WEIGHT,
          fontFamily: fontFamily ? fontFamily : DEFAULT_FONT_FAMILY,
        }}
      >
        {firstSlogan}
      </span>
      {showCursor && (
        <div
          className="cursor"
          style={{
            width: cursorWidth ? cursorWidth : DEFAULT_CURSOR_WIDTH,
            height: cursorHeight ? cursorHeight : DEFAULT_CURSOR_HEIGHT,
            backgroundColor: cursorBackgroundColor
              ? cursorBackgroundColor
              : DEFAULT_CURSOR_BACKGROUND_COLOR,
            animation: cursorBlinkSpeed
              ? cursorBlinkSpeed + "s infinite blink"
              : DEFAULT_CURSOR_BLINK_SPEED,
          }}
        />
      )}
    </div>
  )
}

export default GlitchTypewriter
