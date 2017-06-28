import palettes from './palettes'

const getImagePalette = jest.fn((image) => {
  return Promise.resolve(
    image === 'secondary'
      ? palettes.secondary
      : palettes.default
  )
})

export default getImagePalette
