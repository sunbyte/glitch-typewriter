# glitch-typewriter

A dynamic and futuristic **glitch typewriter** effect component for React. It displays text with a typewriter effect where characters appear one by one, flickering with glitchy distortions. This component is highly customizable and can be used to display rotating slogans or any text with glitchy animations.

## Installation

To use the glitch typewriter component in your project, follow these steps:

1. Download the `GlitchTypewriter.tsx` and `GlitchTypewriter.css` files from this repository.
   
2. Place these files into your project's `/components/glitch-typewriter/` directory or any other directory where you store your React components.

3. Import the component into your React project:

```tsx
import GlitchTypewriter from './components/glitch-typewriter/GlitchTypewriter'
```

## Usage

To use the `GlitchTypewriter` component in your React project, follow the example below:

```tsx
import React from 'react'
import GlitchTypewriter from "./components/glitch-typewriter/GlitchTypewriter"

const App = () => {
  const slogans = [
    "sudo apt-get update",
    "shred -u -n 5 secret.txt",
    "cat /proc/meminfo",
    "sudo dpkg -i package.deb",
    "tar -xvf archive.tar",
  ]

  return (
    <div>
      <GlitchTypewriter slogans={slogans} showCursor />
    </div>
  )
}

export default App
```

## Customize

Use the optional props to customize the `GlitchTypewriter` component:

```tsx
<GlitchTypewriter
   slogans={slogans}
   delay={3000}
   typeSpeed={15}
   color="black"
   fontSize={24}
   fontWeight="bold"
   showCursor={true}
   cursorWidth={4}
   cursorHeight={18}
   cursorBackgroundColor="aqua"
   cursorBlinkSpeed={0.7}
/>
```

### Props

The component accepts the following props:

#### `slogans` (required)

- **Type**: `string[]`
- **Description**: An array of strings that will be displayed one by one in a typewriter effect.

  ```tsx
  const slogans = [
    "The future is now.",
    "Create, innovate, repeat."
  ]
  ```

#### `delay` (optional)

- **Type**: `number`
- **Default**: `3000`
- **Description**: Time delay between slogans in milliseconds.

  ```tsx
  delay="5000"
  ```

#### `typeSpeed` (optional)

- **Type**: `number`
- **Default**: `15`
- **Description**: Type write effect speed in milliseconds.

  ```tsx
  typeSpeed="30"
  ```

#### `color` (optional)

- **Type**: `string`
- **Default**: `black`
- **Description**: The font color of the text. Use values like `"white"`, `"#FF0000"`, etc.

  ```tsx
  color="white"
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
- **Default**: `aqua`
- **Description**: The background color of the blinking cursor. Use values like `"green"`, `"#FF0000"`, etc.

  ```tsx
  cursorBackgroundColor="green"
  ```

#### `cursorBlinkSpeed` (optional)

- **Type**: `number`
- **Default**: `0.7`
- **Description**: Cursor blink speed in seconds.

  ```tsx
  cursorBlinkSpeed={0.5}
  ```
  
## Inspired by
The Hacker News - https://thehackernews.com
