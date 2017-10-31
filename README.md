# REACT PALETTE

Extract prominent colors from an image

[![Build Status](https://travis-ci.org/leonardokl/react-palette.svg?branch=master)](https://travis-ci.org/leonardokl/react-palette)
[![Coverage Status](https://coveralls.io/repos/github/leonardokl/react-palette/badge.svg?branch=master)](https://coveralls.io/github/leonardokl/react-palette?branch=master)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install
```
npm i -S react-palette
```

## Usage
```jsx
import Palette from 'react-palette'
// In your render...
<Palette image={IMAGE_URL}>
  {palette => (
    <div style={{ color: palette.vibrant }}>
      Text with the vibrant color
    </div>
  )}
</Palette>
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