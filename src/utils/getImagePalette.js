import * as Vibrant from 'node-vibrant'
import camelCase from 'lodash/camelCase'

function getImagePalette(url) {
  return Vibrant.from(url).getPalette()
    .then(response => {
      const keys = Object.keys(response);
      const addPalette = (acc, paletteName) => ({
        ...acc,
        [camelCase(paletteName)]: response[paletteName] && response[paletteName].getHex()
      })
      const colorPallete = keys.reduce(addPalette, {})

      return colorPallete
    })
}

export default getImagePalette
