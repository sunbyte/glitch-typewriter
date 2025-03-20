# glitch-typewriter

A dynamic and futuristic **glitch typewriter** effect component for React. It displays text with a typewriter effect where characters appear one by one, flickering with glitchy distortions. This component is highly customizable and can be used to display rotating slogans or any text with glitchy animations.

## Installation

To use the Glitch Typewriter component in your project, follow these steps:

1. Download the `GlitchTypewriter.tsx` and `GlitchTypewriter.css` files from this repository.
   
2. Place these files into your project's `/components/glitch-typewriter` directory or any other directory where you store your React components.

3. Import the component into your React project:

```tsx
import GlitchTypewriter from './components/GlitchTypewriter'
```

## Usage

To use the `GlitchTypewriter` component in your React project, follow the example below.

```tsx
import React from 'react'
import GlitchTypewriter from "./components/ui/glitch-typewriter/GlitchTypewriter"

const App = () => {
  const slogans = [
    "#1 Trusted Cybersecurity News Platform",
    "Bits, Bytes, and Breaking News",
    "Decrypting Tomorrow's Threats Today",
    "sudo apt-get update cyber_news",
    "Don't Get Pwned, Get Informed",
  ]

  return (
    <div className="App">
      <GlitchTypewriter
         slogans={slogans}
         fontSize={24}
         fontWeight="bold"
         showCursor={true}
         cursorWidth={4}
         cursorHeight={18}
         cursorBackgroundColor="#9997FF"
      />
    </div>
  )
}

export default App
```

### Props

The component accepts the following props:

#### `slogans` (required)

- **Type**: `string[]`
- **Description**: An array of strings that will be displayed one by one in a typewriter effect. When the first string finishes, the second one will start, and so on.

  ```tsx
  const slogans = [
    "The future is now.",
    "Create, innovate, repeat."
  ]
  ```

#### `fontSize` (optional)

- **Type**: `number`
- **Default**: `18`
- **Description**: The font size of the text. Set the size according to your design needs.

  ```tsx
  fontSize={24}
  ```

#### `fontWeight` (optional)

- **Type**: `string`
- **Default**: `"normal"`
- **Description**: The font weight of the text. Use values like `"normal"`, `"bold"`, `"lighter"`, etc.

  ```tsx
  fontWeight="bold"
  ```
  
#### `showCursor` (optional)

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Blinking cursor.

  ```tsx
  showCursor={true}
  ```

#### `cursorWidth` (optional)

- **Type**: `number`
- **Default**: `4`
- **Description**: The width of the blinking cursor.

  ```tsx
  cursorWidth={6}
  ```

#### `cursorHeight` (optional)

- **Type**: `number`
- **Default**: `18`
- **Description**: The height of the blinking cursor.
  
  ```tsx
  cursorHeight={20}
  ```

#### `cursorBackgroundColor` (optional)

- **Type**: `string`
- **Default**: `#9997FF`
- **Description**: The background color of the blinking cursor. Use any valid CSS color value.

  ```tsx
  cursorBackgroundColor="#FF5733"
  ```
  
## Inspired by
The Hacker News - https://thehackernews.com
