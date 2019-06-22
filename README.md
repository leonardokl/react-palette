# REACT PALETTE

Extract prominent colors from an image

[![Build Status](https://travis-ci.org/leonardokl/react-palette.svg?branch=master)](https://travis-ci.org/leonardokl/react-palette)
[![Coverage Status](https://coveralls.io/repos/github/leonardokl/react-palette/badge.svg?branch=master)](https://coveralls.io/github/leonardokl/react-palette?branch=master)

## Install
```
npm i -S react-palette
```

## Usage
```jsx
import Palette from 'react-palette';
// In your render...
<Palette src={IMAGE_URL}>
  {({ data, loading, error }) => (
    <div style={{ color: data.vibrant }}>
      Text with the vibrant color
    </div>
  )}
</Palette>
```

```jsx
import { usePalette } from 'react-palette'

const { data, loading, error } = usePalette(IMAGE_URL)

<div style={{ color: data.vibrant }}>
  Text with the vibrant color
</div>
```

## Palette callback example
```js
{
  darkMuted: "#2a324b"
  darkVibrant: "#0e7a4b"
  lightMuted: "#9cceb7"
  lightVibrant: "#a4d4bc"
  muted: "#64aa8a"
  vibrant: "#b4d43c"
}
```

## Notes

That library was created using `node-vibrant` to extract the prominent colors.

[https://github.com/akfish/node-vibrant](https://github.com/akfish/node-vibrant)